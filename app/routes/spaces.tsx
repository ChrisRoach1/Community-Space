import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { spacesQueryOptions } from "~/data/queries";
import { Users, MessageSquare } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "~/components/ui/skeleton";

export const Route = createFileRoute("/spaces")({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(spacesQueryOptions());
  },
  head: () => ({
    meta: [{ title: "Spaces" }],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-6 space-y-6 mx-auto">
      <Outlet />
      <Separator />
      <Suspense fallback={<FallBackSkeleton />}>
        <DeferredQuery />
      </Suspense>
    </div>
  );
}

function DeferredQuery() {
  const spacesQuery = useSuspenseQuery(spacesQueryOptions());

  return (
    <div className="space-y-4">
      {spacesQuery.data.map((space) => (
        <div
          key={space.id}
          className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">{space.name}</h3>
              <p className="text-sm text-muted-foreground">
                <MessageSquare className="inline-block h-4 w-4 mr-1" />2 posts ·
                Created {new Date(space.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Join
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-red-500 hover:text-red-700"
            >
              Leave
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

function FallBackSkeleton() {
  var array: Array<string> = new Array(8).fill("");

  return (
    <div className="space-y-3">
      {array.map(i =>{
        return (
          <div className="flex items-center justify-between p-4 rounded-lg border">
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-full bg-muted" />
            <div className="space-y-1">
              <Skeleton className="h-6 w-32 bg-muted" />
              <div className="flex items-center gap-1">
                <Skeleton className="h-4 w-4 bg-muted rounded-full" />
                <Skeleton className="h-4 w-48 bg-muted" />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-20 bg-muted rounded-md" />
            <Skeleton className="h-9 w-20 bg-muted rounded-md" />
          </div>
        </div>
        )
      })

      }
    </div>
  );
}
