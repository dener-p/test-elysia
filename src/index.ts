import { Elysia } from "elysia"

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/test", (ctx) => {
    return {
      message: "Hello Elysia",
    }
  })
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
