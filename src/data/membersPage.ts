import { MemberType } from '@/types/memberType'
import Erika from '@/images/members/Erika.png'
//import Gale from '@/images/members/Galeano.jpeg'
//import Helo from '@/images/members/Helo.png'
//import Ian from '@/images/members/Ian.png'
//import Jose from '@/images/members/Jose.jpg'
//import JV from '@/images/members/JV.jpg'
//import Laura from '@/images/members/Laura.jpg'
//import Marcos from '@/images/members/Marcos.jpg'
//import Pedro from '@/images/members/Pedro.jpg'
//import Sofia from '@/images/members/Sofia.jpeg'
import Tomas from '@/images/members/Tomas.png'
import Duda from '@/images/members/Duda.jpeg'
import Beatriz from '@/images/members/Beatriz.png'
//import Felipe from '@/images/members/Felipe.png'
import Joel from '@/images/members/Joel.jpg'
import Kenji from '@/images/members/Kenji.jpg'
import Isa from '@/images/members/Isabella.jpg'
import Max from '@/images/members/Max.jpg'
import Eric from '@/images/members/Eric.jpg'
import Marcelo from '@/images/members/Marcelo.jpg'
import Gui from '@/images/members/Guilherme.jpg'
import Kami from '@/images/members/Kami.jpg'

interface IMemberPage {
  title: string
  members: MemberType[]
}

const orientador: MemberType = {
  name: 'Erika',
  imgUrl: Erika.src,
  course: 'orientador',
  semester: '2005/1',
  interest: 'Teste de Software',
}

// Os petianes podem ser adicionados em qualquer ordem, pois serão ordenados alfabeticamente
// imgUrl aceita o link de uma imagem, o caminho para a imagem dentro da pasta public, ou o import da imagem com .src
const petianes: MemberType[] = [
  {
    name: 'Eric',
    imgUrl: Eric.src,
    course: 'ecp',
    semester: '2019/2',
    interest: 'Sistemas Embarcados e Sistemas de Tempo Real',
  },
  {
    name: 'Guilherme',
    imgUrl: Gui.src,
    course: 'cic',
    semester: '2022/1',
    interest: 'Desenvolvimento de Jogos e Inteligência Artificial',
  },
  {
    name: 'Isabella',
    imgUrl: Isa.src,
    course: 'cic',
    semester: '2023/2',
    interest: 'Biologia Computacional',
  },
  {
    name: 'Joel',
    imgUrl: Joel.src,
    course: 'cic',
    semester: '2022/2',
    interest: 'Game Design e Programação Embarcada',
  },
  {
    name: 'Kamille',
    imgUrl: Kami.src,
    course: 'cic',
    semester: '2022/1',
    interest: 'Engenharia de Software e Ciência de Dados',
  },
  {
    name: 'Kenji',
    imgUrl: Kenji.src,
    course: 'cic',
    semester: '2022/1',
    interest: 'Segurança de Software e Bancos de Dados',
  },
  {
    name: 'Maximus',
    imgUrl: Max.src,
    course: 'cic',
    semester: '2022/1',
    interest: 'Ciência de Dados e Teoria dos Grafos',
  },
  {
    name: 'Tomás',
    imgUrl: Tomas.src,
    course: 'cic',
    semester: '2022/1',
    interest: 'Inteligência Artificial',
  },
  {
    name: 'Marcelo',
    imgUrl: Marcelo.src,
    course: 'ecp',
    semester: '2022/2',
    interest: 'Sistemas Embarcados',
  },
  {
    name: 'Beatriz',
    imgUrl: Beatriz.src,
    course: 'cic',
    semester: '2022/1',
    interest: 'Engenharia de Software',
  },
  {
    name: 'Duda',
    imgUrl: Duda.src,
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
