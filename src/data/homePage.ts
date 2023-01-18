import { CtaType } from '@/types/ctaType'
import { ISection } from '@/types/sectionType'

interface IHomePage {
  navBar: CtaType[]
  banner: ISection
  whoWeAre: ISection
  ourWork: ISection
}

export const homePageData: IHomePage = {
  navBar: [
    { label: 'Quem Somos', href: '#who-we-are' },
    { label: 'Nosso Trabalho', href: '#our-work' },
    { label: 'Contato', href: '#contact-us' },
    { label: 'Petianes', href: '/petianes' },
  ],
  banner: {
    id: 'banner',
    title: 'PET COMPUTAÇÃO UFRGS',
    description: ['Programa de Educação Tutorial Computação UFRGS'],
  },
  whoWeAre: {
    id: 'who-we-are',
    title: 'Quem somos?',
    description: [
      'O PET Computação é um grupo composto por estudantes de graduação dos cursos de Ciência da Computação e Engenharia da Computação.',
      'Baseado na Tríade Acadêmica de Ensino, Pesquisa e Extensão, tem como objetivo providenciar a oportunidade dos membros explorarem áreas de interesse além do currículo de seus cursos.',
    ],
    cta: {
      label: 'Conheça nossos membros',
      href: '/petianes',
    },
    video: {
      label: 'Projeto Raposa',
      href: 'https://www.youtube.com/embed/CDoDrSizhCg',
    },
  },
  ourWork: {
    id: 'our-work',
    title: 'Nosso trabalho',
  },
}
