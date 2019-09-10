const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa();
const router = new KoaRouter();

// MOVE THESE NOTES TO OTHER APP
// Koa invoke "downstream", then control flows back "upstream".
// This means that the first console log runs, then next() runs the next app.use middleware. 
// Then SECOND console log runs, then next() runs, then app.use Hello runs. 
// Then we hit the bottom, so it starts going upstream so Second Done will run then first done will run.

// app.use(async (ctx, next) => {
//     console.log('[matt][tealium] FIRST')
//     await next()
//     console.log('[matt] FIRST DONE')
// })

// app.use(async (ctx, next) => {
//     console.log('[matt][tealium] SECOND')
//     await next()
//     console.log('[matt] SECOND DONE')
// })

// app.use(async ctx => ctx.body = 'HELLO')


router.get('/test/:id', ctx => {
    ctx.body = ctx.params
})

router.post('/test/:id', ctx => {
    ctx.body = ctx.request.req
    return (ctx.status = 201)
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => console.log('Server started on port 3000...'))