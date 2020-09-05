import NOSID from "node-steam-openid";
declare module "fastify" {
  interface FastifyInstance {
    steam: NOSID;
  }
}

declare const fastifyNOSID: FastifyPlugin;
export default fastifyNOSID;
