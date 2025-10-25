import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::tg-user.tg-user', ({ strapi }) => ({
    async find(ctx) {
        const { data } = await super.find(ctx);

        const newData = data.map(entity => {
            return {
                tgId: entity.attributes.tgId,
                username: entity.attributes.username,
                photoUrl: entity.attributes.photoUrl,
            }
        });

        return { data: newData };
    },

    async create(ctx) {
        ctx.request.body.data.publishedAt = new Date();

        const response = await super.create(ctx);
        return response;
    },

    async findUsers(ctx) {
        return await super.find(ctx)
    },

    async createUsers(ctx) {
        return await super.create(ctx)
    },

    async findByTgId(ctx) {
        const { tgId } = ctx.params;
        const entity = await strapi.db.query('api::tg-user.tg-user').findOne({
            where: { tgId: tgId },
        });

        if (!entity) {
            return {
                notFound: true,
            };
        }

        return {
            tgId: entity.tgId,
            username: entity.username,
            photoUrl: entity.photoUrl,
        };
    },
}));
