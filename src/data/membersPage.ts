import { MemberType } from '@/types/memberType'
import Erika from '@/images/members/Erika.png'
import PedroArthur from '@/images/members/PedroArthur.jpg'
import JoaoWalter from '@/images/members/JoaoWalter.jpg'
import Gustavo from '@/images/members/Gustavo.jpg'
import EduardoPires from '@/images/members/EduardoPires.jpg'
import EduardoBarbosa from '@/images/members/Barbosa.jpg'
import PedroSchuck from '@/images/members/Schuck.jpg'
import Harry from '@/images/members/Harry.jpg'

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
    name: 'Edu Pires',
    imgUrl: EduardoPires.src,
    course: 'cic',
    semester: '2025/1',
    interest: 'Engenharia de Software e Desenvolvimento de Jogos',
  },
  {
    name: 'Gustavo',
    imgUrl: Gustavo.src,
    course: 'cic',
    semester: '2025/1',
    interest: 'Algoritmos e IA',
  },
  {
    name: 'João Walter',
    imgUrl: JoaoWalter.src,
    course: 'ecp',
    semester: '2025/2',
    interest: 'Inteligência Artificial e Automação',
  },
  {
    name: 'Edu Barbosa',
    imgUrl: EduardoBarbosa.src,
    course: 'cic',
    semester: '2025/2',
    interest: 'Inteligencia Artificial'
  },
  {
    name: 'Pedro Schuck',
    imgUrl: PedroSchuck.src,
    course: 'cic',
    semester: '2024/1',
    interest: 'Inteligência Artificial e Ciência de Dados'
  },
  {
    name: 'Harry',
    imgUrl: Harry.src,
    course: 'cic',
    semester: '2025/2',
    interest: 'Ciência de Dados e Robótica'
  },
]

const petianesSorted: MemberType[] = petianes.sort((a, b) => a.name.localeCompare(b.name))

export const membersPage: IMemberPage = {
  title: 'Nossos petianes',
  members: [orientador, ...petianesSorted],
}
