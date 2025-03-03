import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getRanking } from '../drizzle/functions/get-ranking'
import { getSubscriberInviteCount } from '../drizzle/functions/get-subscriber-invite-count'

export const getRankingRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/ranking',
    {
      schema: {
        tags: ['referral'],
        summary: 'Get ranking',
        operationId: 'getRanking',
        params: z.object({
          subscriberID: z.string(),
        }),
        response: {
          200: z.object({
            ranking: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                score: z.number(),
              })
            ),
          }),
        },
      },
    },
    async (request, reply) => {
      const { rankingWithScore } = await getRanking()

      return reply.status(200).send({
        ranking: rankingWithScore,
      })
    }
  )
}
