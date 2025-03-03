import Image from 'next/image'

import { ArrowRightIcon, RadioIcon, UserIcon } from 'lucide-react'
import logo from '../assets/logo.svg'
import { Button } from '../components/button'
import { InputField, InputIcon, InputRoot } from '../components/input'

export default function Home() {
  return (
    <div className="min-h-dvh  flex flex-col justify-center gap-16">
      <header className="flex flex-col gap-8 items-center w-full max-w-[550px] md:items-start">
        <Image src={logo} alt="devStage" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">CodeCraft</span> Summit 2025
        </h1>
      </header>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <section className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>

            <span className="uppercase text-purple font-semibold text-xs flex items-center gap-2">
              <RadioIcon className="size-5" />
              ao vivo
            </span>
          </div>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </section>

        <section className="bg-gray-700 border border-gray-600 rounded-2xl p-8 w-full md:max-w-[440px]">
          <form className="space-y-6">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Inscrição
            </h2>

            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <UserIcon />
                </InputIcon>

                <InputField type="text" placeholder="Nome completo" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <UserIcon />
                </InputIcon>

                <InputField type="text" placeholder="Nome completo" />
              </InputRoot>
            </div>

            <Button type="submit">
              Confirmar
              <ArrowRightIcon />
            </Button>
          </form>
        </section>
      </div>
    </div>
  )
}
