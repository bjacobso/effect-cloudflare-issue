import type { Route } from "./+types/home";

// Importing this will cause errors:
import { HttpApi } from "@effect/platform";

// This works:
// import * as HttpApi from "@effect/platform/HttpApi";

export default function Home({ loaderData }: Route.ComponentProps) {
  return <div>Hello world</div>;
}
