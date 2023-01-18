import { MemberType } from '@/types/memberType'

interface IMemberPage {
  title: string
  members: MemberType[]
}

export const membersPage: IMemberPage = {
  title: 'Nossos petianes',
  members: [
    {
      name: 'Erika',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',
      course: 'orientador',
      semester: '2005/1',
      interest: 'Teste de Software',
    },
    {
      name: 'Galeano',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',
      course: 'ecp',
      semester: '2021/2',
      interest: 'Desenvolvimento de Software',
    },
    {
      name: 'Helo',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',

      course: 'ecp',
      semester: '2021/1',
      interest: 'Sistemas Embarcados e Transmissão de Dados',
    },
    {
      name: 'Henrique',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',

      course: 'cic',
      semester: '2021/1',
      interest: 'Desenvolvimento de Jogos',
    },
    {
      name: 'Ian',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',

      course: 'ecp',
      semester: '2021/2',
      interest: 'Otimização de Programas',
    },
    {
      name: 'JV',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',

      course: 'cic',
      semester: '2021/2',
      interest: 'Desenvolvimento de Software',
    },
    {
      name: 'José',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',

      course: 'cic',
      semester: '2020/2',
      interest: 'Desenvolvimento de Software',
    },
    {
      name: 'Marcos',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',

      course: 'cic',
      semester: '2022/2',
      interest: 'Engenharia de Software e IA',
    },
    {
      name: 'Pedro',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',

      course: 'ecp',
      semester: '2021/1',
      interest: 'Machine Learning',
    },
    {
      name: 'Sofia',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdyLCjkiQJy69HsdW6m_19HttsegclGQOFBQ&usqp=CAU',

      course: 'cic',
      semester: '2020/1',
      interest: 'Desenvolvimento de Jogos',
    },
  ],
}
