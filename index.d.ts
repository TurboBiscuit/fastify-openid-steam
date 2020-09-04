declare module "fastify" {
  interface FastifyInstance {
    steam: import("node-steam-openid");
  }
}
