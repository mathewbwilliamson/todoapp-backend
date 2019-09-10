import * as Router from 'koa-router'
import {fakeTodoDB, Todo} from '../database/db'

const router = new Router()

router.get('/api/todos', async (ctx) => {
    ctx.body = fakeTodoDB
})

router.get('/api/todos/:id', async (ctx) => {
    const filteredDB = fakeTodoDB.filter((todo) => todo.id === parseInt(ctx.params.id))

    ctx.body = filteredDB
})

router.post('/api/todos', async (ctx) => {
    const input:Todo = ctx.request.body

    if (!input.id || !input.completed || !input.person || !input.title ) {
        ctx.body = {'error': 'Please enter all fields: id, completed, person, title'}
    } else {
        ctx.body = ctx.request.body
    }
})

export const routes = router.routes()