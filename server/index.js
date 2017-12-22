import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build().catch(e => {
    console.error(e)
    process.exit(1)
  })
}

app.use(ctx => {
  ctx.status = 200
  return new Promise((resolve, reject) => {
    ctx.res.on('close', resolve)
    ctx.res.on('finish', resolve)
    nuxt.render(ctx.req, ctx.res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
})

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
