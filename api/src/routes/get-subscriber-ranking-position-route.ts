import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { getSubscriberRankingPosition } from '../drizzle/functions/get-subscriber-ranking-position'

export const getSubscriberRankingPositionRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribers/:subscriberID/ranking/position',
      {
        schema: {
          tags: ['referral'],
          summary: 'Get subscribers ranking position',
          params: z.object({
            subscriberID: z.string(),
          }),
          response: {
            200: z.object({
              position: z.number().nullable(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { subscriberID } = request.params

        const { position } = await getSubscriberRankingPosition({
          subscriberID,
        })

        return reply.status(200).send({
          position,
        })
      }
    )
  }
