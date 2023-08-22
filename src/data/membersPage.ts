import { MemberType } from '@/types/memberType'

interface IMemberPage {
  title: string
  members: MemberType[]
}

const orientador: MemberType = {
  name: 'Erika',
  imgUrl:
    '/members/Erika.png',
  course: 'orientador',
  semester: '2005/1',
  interest: 'Teste de Software',
}

// Os petianes podem ser adicionados em qualquer ordem, pois serão ordenados alfabeticamente
// imgUrl aceita o link de uma imagem ou o caminho para a imagem dentro da pasta public
const petianes: MemberType[] = [
  {
    name: 'Galeano',
    imgUrl: '/members/Galeano.jpeg',
    course: 'ecp',
    semester: '2021/2',
    interest: 'Desenvolvimento de Software',
  },
  {
    name: 'Helo',
    imgUrl: '/members/Helo.png',
    course: 'ecp',
    semester: '2021/1',
    interest: 'Sistemas Embarcados e Transmissão de Dados',
  },
  {
    name: 'Ian',
    imgUrl: '/members/Ian.png',
    course: 'ecp',
    semester: '2021/2',
    interest: 'Otimização de Programas',
  },
  {
    name: 'JV',
    imgUrl: '/members/JV.jpg',
    course: 'cic',
    semester: '2021/2',
    interest: 'Desenvolvimento de Software',
  },
  {
    name: 'José',
    imgUrl: '/members/Jose.jpg',
    course: 'cic',
    semester: '2020/2',
    interest: 'Desenvolvimento de Software',
  },
  {
    name: 'Marcos',
    imgUrl: "/members/Marcos.jpg",
    course: 'cic',
    semester: '2022/2',
    interest: 'Engenharia de Software e IA',
  },
  {
    name: 'Pedro',
    imgUrl: '/members/Pedro.jpg',
    course: 'ecp',
    semester: '2021/1',
    interest: 'Machine Learning',
  },
  {
    name: 'Sofia',
    imgUrl: '/members/Sofia.jpeg',
    course: 'cic',
    semester: '2020/1',
    interest: 'Desenvolvimento de Jogos',
  },
  {
    name: 'Tomás',
    imgUrl: '/members/Tomas.png',
    course: 'cic',
    semester: '2022/1',
    interest: 'Inteligência Artificial',
  },
  {
    name: 'Laura',
    imgUrl: '/members/Laura.jpg',
    course: 'cic',
    semester: '2022/1',
    interest: 'Inteligência Artificial',
  },
  {
    name: 'Beatriz',
    imgUrl: '/members/Beatriz.png',
    course: 'cic',
    semester: '2022/1',
    interest: 'Engenharia de Software',
  },
  {
    name: 'Duda',
    imgUrl: '/members/Duda.jpeg',
    course: 'cic',
    semester: '2022/1',
    interest: 'Teoria e Desenvolvimento',
  },
]

const petianesSorted: MemberType[] = petianes.sort((a, b) => a.name.localeCompare(b.name))

export const membersPage: IMemberPage = {
  title: 'Nossos petianes',
  members: [orientador, ...petianesSorted],
}
