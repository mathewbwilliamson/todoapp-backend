import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as bodyParser from 'koa-bodyparser'

import { routes } from './routes'

const app = new Koa()

app.use(bodyParser())

app.use(async (ctx, next) => {
    // Log  the request to the console
    console.log('[matt][tealium] URL: ', ctx.url)

    // Pass the request to the next middleware function
    await next()
})

app.use(routes)

app.listen(3000, () => console.log('The server is running on port 3000...'))