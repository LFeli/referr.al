import { redis } from '../../redis/client'

interface getSubscriberRankingPositionParams {
  subscriberID: string
}

export async function getSubscriberRankingPosition({
  subscriberID,
}: getSubscriberRankingPositionParams) {
  const rank = await redis.zrevrank('referral:ranking', subscriberID)

  if (rank === null) {
    return { position: null }
  }

  return {
    position: rank + 1,
  }
}
