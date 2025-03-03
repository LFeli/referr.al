import Image from 'next/image'

import { getRanking } from '@/http/api'
import cooper from '../../../../assets/medal-cooper.svg'
import gold from '../../../../assets/medal-gold.svg'
import silver from '../../../../assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <section className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((user, index) => {
          const rankingPosition = index + 1

          return (
            <article
              key={user.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{' '}
                {user.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {user.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={gold}
                  alt="illustration of a gold medal"
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 2 && (
                <Image
                  src={silver}
                  alt="illustration of a silver medal"
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 3 && (
                <Image
                  src={cooper}
                  alt="illustration of a cooper medal"
                  className="absolute top-0 right-8"
                />
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
