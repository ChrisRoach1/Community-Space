import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/start'
import { desc } from 'drizzle-orm';
import db from '~/db/client'
import { space } from '~/db/schema';


export const fetchSpaces = createServerFn({ method: 'GET' }).handler(
  async () => {
    return db.select().from(space).orderBy(desc(space.createdAt));
  },
)

export const spacesQueryOptions = () =>
  queryOptions({
    queryKey: ['spaces'],
    queryFn: () => fetchSpaces(),
  })
