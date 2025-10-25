/**
 * message router
 */

export default {
    routes: [
        {
            method: 'GET',
            path: '/messages/dialog/:userFrom/:userTo',
            handler: 'message.dialog',
            config: {
                policies: [],
                auth: false,
            },
        },
        {
            method: 'POST',
            path: '/message',
            handler: 'message.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};

