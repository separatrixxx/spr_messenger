/**
 * tg-user router
 */


export default {
    routes: [
        {
            method: 'GET',
            path: '/tg-users',
            handler: 'tg-user.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/tg-users',
            handler: 'tg-user.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/tg-users/tg-id/:tgId',
            handler: 'tg-user.findByTgId',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
