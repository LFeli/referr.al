import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { accessInviteLink } from '../drizzle/functions/access-invite-link'
import { env } from '../env'

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriberID',
    {
      schema: {
        tags: ['referral'],
        summary: 'Access invite link and redirect user',
        operationId: 'accessInviteLink',
        params: z.object({
          subscriberID: z.string(),
        }),
        response: {
          302: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberID } = request.params

      await accessInviteLink({ subscriberID })

      const redirectUrl = new URL(env.WEB_URL)
      redirectUrl.searchParams.set('referrer', subscriberID)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}
