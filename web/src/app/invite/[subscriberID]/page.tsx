import Image from 'next/image'

import { Ranking } from './components/ranking'

import logo from '../../../assets/logo.svg'
import { InviteLinkInput } from './components/invite-link-input'
import { Stats } from './components/stats'

interface InvitePageProps {
  params: Promise<{
    subscriberID: string
  }>
}

export default async function InvitePage(props: InvitePageProps) {
  const { subscriberID } = await props.params

  const inviteLink = `http://localhost:3333/invites/${subscriberID}`

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <section className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devStage" width={108.5} height={30} />

        <span className="block space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>

          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </span>

        <div className="space-y-6">
          <span className="block space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e Ganhe
            </h2>

            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </span>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats />
        </div>
      </section>

      <Ranking />
    </div>
  )
}
