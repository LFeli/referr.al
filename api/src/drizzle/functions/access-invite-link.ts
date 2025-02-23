import { redis } from '../../redis/client'
import { db } from '../client'
import { subscriptions } from '../schema/subscriptions'

interface accessInviteLinkParams {
  subscriberID: string
}

export async function accessInviteLink({
  subscriberID,
}: accessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberID, 1)
}
