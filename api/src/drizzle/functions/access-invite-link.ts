import { redis } from '../../redis/client'

interface accessInviteLinkParams {
  subscriberID: string
}

export async function accessInviteLink({
  subscriberID,
}: accessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberID, 1)
}
