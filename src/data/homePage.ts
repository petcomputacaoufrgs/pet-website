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
    { label: 'Quem Somos', href: '/about' },
    { label: 'Nosso Trabalho', href: '#our-work' },
    { label: 'Contato', href: '#contact-us' },
    { label: 'Petianes', href: '/petianes' },
    { label: 'Manual', href: 'https://foggy-antler-b88.notion.site/Manual-do-Bixos-69aee2be56cd46599e43636c19f16433?fbclid=PAT01DUAQw5UtleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafz5WJfgKRUhbd6_mk-mkgR1al4xmhWWmxgJ_nCtPe-NtchMc8bQ9ziJ7qe7w_aem_Ye4uxyv4MfPvku8Ivz9lpA', external: true },
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
    cta1: {
      label: 'Manual dos Bixos',
      href: 'https://foggy-antler-b88.notion.site/Manual-do-Bixos-69aee2be56cd46599e43636c19f16433?fbclid=PAT01DUAQw5UtleHRuA2FlbQIxMABzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafz5WJfgKRUhbd6_mk-mkgR1al4xmhWWmxgJ_nCtPe-NtchMc8bQ9ziJ7qe7w_aem_Ye4uxyv4MfPvku8Ivz9lpA',
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
