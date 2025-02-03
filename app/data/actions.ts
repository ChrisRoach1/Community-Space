import { createServerFn } from '@tanstack/start'
import { z } from 'zod'
import db from '~/db/client'
import { space } from '~/db/schema'
import { getWebRequest } from '@tanstack/start/server'
import { auth } from '~/lib/auth'



export const createSpaceSchema = z.object({
  name: z.string().min(5),
  tags: z.string()
})


export const createSpace = createServerFn({ method: 'POST' })
.validator(createSpaceSchema)
.handler(async ({data}) => {
  const request = getWebRequest()
  if(request){
    const session = await auth.api.getSession({
      headers: request.headers
    })

    if(session?.user){
      await db.insert(space).values({
        name: data.name,
        tags: data.tags,
        createdAt: new Date,
        createdBy: session.user.id,
        updatedAt: null
      });
      return {
        invalidate: ['spaces']
      }
    }

  }

});
 