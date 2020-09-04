import fp from 'fastify-plugin'
import steam from 'node-steam-openid'
export default fp((fastify, options, next) => {
    fastify.decorate('steam', new steam(options))
    next()
}, {
    fastify: '>=1.0.0',
    name: 'fastify-fetch'
})