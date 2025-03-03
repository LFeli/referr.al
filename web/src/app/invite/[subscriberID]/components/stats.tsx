import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/http/api'
import { BadgeCheckIcon, MedalIcon, MousePointerClickIcon } from 'lucide-react'

interface StatsProps {
  subscriberID: string
}

export async function Stats({ subscriberID }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberID)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberID)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberID)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <article className="relative bg-gray-700 border border-gray-600 px-4 py-8 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {accessCount}
        </span>

        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>

        <MousePointerClickIcon className="absolute top-3 left-3 size-5 text-purple" />
      </article>

      <article className="relative bg-gray-700 border border-gray-600 px-4 py-8 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {inviteCount}
        </span>

        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>

        <BadgeCheckIcon className="absolute top-3 left-3 size-5 text-purple" />
      </article>

      <article className="relative bg-gray-700 border border-gray-600 px-4 py-8 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankingPosition ? `${rankingPosition}º` : '-'}
        </span>

        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>

        <MedalIcon className="absolute top-3 left-3 size-5 text-purple" />
      </article>
    </div>
  )
}
