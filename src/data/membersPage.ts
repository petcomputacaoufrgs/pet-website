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
//import Tomas from '@/images/members/Tomas.png'
//import Duda from '@/images/members/Duda.jpeg'
//import Beatriz from '@/images/members/Beatriz.png'
//import Felipe from '@/images/members/Felipe.png'
import Joel from '@/images/members/Joel.jpg'
//import Kenji from '@/images/members/Kenji.jpg'
//import Isa from '@/images/members/Isabella.jpg'
//import Max from '@/images/members/Max.jpg'
//import Eric from '@/images/members/Eric.jpg'
//import Marcelo from '@/images/members/Marcelo.jpg'
import Gui from '@/images/members/Guilherme.jpg'
//import Kami from '@/images/members/Kami.jpg'
//import Barata from '@/images/members/Barata.jpg'
//import Vicente from '@/images/members/Vicente.jpg'
import Eduardo from '@/images/members/Eduardo.jpg'
//import EduardoVeiga from '@/images/members/EduardoVeiga.jpeg'
import Thayssa from '@/images/members/Thayssa.jpeg'
import Leonardo from '@/images/members/Leonardo.png'
import EduardoAltmann from '@/images/members/EduardoAltmann.jpg'
import Eduarda from '@/images/members/Eduarda.jpg'
import Luiza from '@/images/members/Luiza.jpg'
import Isadora from '@/images/members/Isadora.jpg'
import PedroArthur from '@/images/members/PedroArthur.jpg'
import JoaoWalter from '@/images/members/JoaoWalter.jpg'
import Manuela from '@/images/members/Manuela.jpg'

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
    name: 'Thayssa',
    imgUrl: Thayssa.src,
    course: 'cic',
    semester: '2023/2',
    interest: 'Engenharia de Software e Robótica',
  },
  {
    name: 'Guilherme',
    imgUrl: Gui.src,
    course: 'cic',
    semester: '2022/1',
    interest: 'Desenvolvimento de Jogos e Inteligência Artificial',
  },
  {
    name: 'Eduardo Fonseca',
    imgUrl: Eduardo.src,
    course: 'cic',
    semester: '2023/1',
    interest: 'IA e Computação Teórica',
  },
  {
    name: 'Joel',
    imgUrl: Joel.src,
    course: 'cic',
    semester: '2022/2',
    interest: 'Game Design e Programação Embarcada',
  },
  {
    name: 'Eduardo Altmann',
    imgUrl: EduardoAltmann.src,
    course: 'cic',
    semester: '2024/2',
    interest: 'Sistemas Embarcados e IA',
  },
  {
    name: 'Eduarda',
    imgUrl: Eduarda.src,
    course: 'ecp',
    semester: '2024/2',
    interest: 'Sistemas Embarcados e Engenharia de Software',
  },
  {
    name: 'Leonardo',
    imgUrl: Leonardo.src,
    course: 'cic',
    semester: '2023/1',
    interest: 'Algoritmos e IA',
  },
  {
    name: 'Isadora',
    imgUrl: Isadora.src,
    course: 'ecp',
    semester: '2024/1',
    interest: 'Sistemas Embarcados e Engenharia de Software',
  },
  {
    name: 'Luiza',
    imgUrl: Luiza.src,
    course: 'cic',
    semester: '2025/2',
    interest: 'Engenharia de Software e Machine Learning',
  },
  {
    name: 'Pedro',
    imgUrl: PedroArthur.src,
    course: 'cic',
    semester: '2025/1',
    interest: 'Banco de Dados e Inteligência Artificial',
  },
  {
    name: 'João Walter',
    imgUrl: JoaoWalter.src,
    course: 'ecp',
    semester: '2025/2',
    interest: 'Inteligência Artificial e Automação',
  },
  {
    name: 'Manuela',
    imgUrl: Manuela.src,
    course: 'cic',
    semester: '2025/1',
    interest: 'Inteligência Artificial e Desenvolvimento de Jogos',
  },

]

const petianesSorted: MemberType[] = petianes.sort((a, b) => a.name.localeCompare(b.name))

export const membersPage: IMemberPage = {
  title: 'Nossos petianes',
  members: [orientador, ...petianesSorted],
}
