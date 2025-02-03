import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/spaces/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button>
        <Link to="/space-add">Create New Space</Link>
      </Button>
    </div>
  );
}
