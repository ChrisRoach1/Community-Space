import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute, Navigate, useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { TagInput } from '~/components/ui/tagInput'
import { createSpace, createSpaceSchema } from '~/data/actions'
import { authClient } from '~/lib/auth-client'



export const Route = createFileRoute('/space-add')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: session, isPending, error } = authClient.useSession();
  const navigate = useNavigate() 
  const form = useForm<z.infer<typeof createSpaceSchema>>({
    resolver: zodResolver(createSpaceSchema),
    defaultValues: {
      name: "",
      tags: "",
    },
  })

  if(!session?.user){
    navigate({to: "/signIn"})
  }

  const submit = async (values: z.infer<typeof createSpaceSchema>) => {
    await createSpace({ data: values }).then(result =>{
      navigate({to: "/spaces"})
    }).catch(error =>{

    })
  }

  return (
    <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="my awesome space"
                        type="text"
                        {...field}
                        className="h-9"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags</FormLabel>
                    <FormControl>
                      <TagInput
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-9">
                Create
              </Button>
            </form>
          </Form>      
    </div>
  )
}
