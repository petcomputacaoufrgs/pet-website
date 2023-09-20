import { MemberType } from '@/types/memberType'
import Erika from '@/images/members/Erika.png'
//import Gale from '@/images/members/Galeano.jpeg'
import Helo from '@/images/members/Helo.png'
//import Ian from '@/images/members/Ian.png'
//import Jose from '@/images/members/Jose.jpg'
import JV from '@/images/members/JV.jpg'
import Laura from '@/images/members/Laura.jpg'
import Marcos from '@/images/members/Marcos.jpg'
//import Pedro from '@/images/members/Pedro.jpg'
//import Sofia from '@/images/members/Sofia.jpeg'
import Tomas from '@/images/members/Tomas.png'
import Duda from '@/images/members/Duda.jpeg'
import Beatriz from '@/images/members/Beatriz.png'
import Felipe from '@/images/members/Felipe.jpg'
import Joel from '@/images/members/Joel.jpg'

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
    name: 'Felipe',
    imgUrl: Felipe.src,
    course: 'cic',
    semester: '2021/1',
    interest: '?',
  },
  {
    name: 'Helo',
    imgUrl: Helo.src,
    course: 'ecp',
    semester: '2021/1',
    interest: 'Sistemas Embarcados e Transmissão de Dados',
  },
  {
    name: 'Joel',
    imgUrl: Joel.src,
    course: 'cic',
    semester: '2022/2',
    interest: '?',
  },
  {
    name: 'JV',
    imgUrl: JV.src,
    course: 'cic',
    semester: '2021/2',
    interest: 'Desenvolvimento de Software',
  },
  {
    name: 'Marcos',
    imgUrl: Marcos.src,
    course: 'cic',
    semester: '2022/2',
    interest: 'Engenharia de Software e IA',
  },
  {
    name: 'Tomás',
    imgUrl: Tomas.src,
    course: 'cic',
    semester: '2022/1',
    interest: 'Inteligência Artificial',
  },
  {
    name: 'Laura',
    imgUrl: Laura.src,
    course: 'cic',
    semester: '2022/1',
    interest: 'Inteligência Artificial',
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
