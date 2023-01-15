import { useEffect, useState } from 'react'
import { projects } from '@/data/projects'
import Title from '@/components/Title'
import ImgBanner from '@/components/ImgBanner'
import bgImg from '../../images/banner.jpg'
import ButtonLink from '@/components/ButtonLink'

const Test = () => {
  const [component, setComponent] = useState<any>()
  useEffect(() => {
    console.log(window.location.pathname)
    let nha = window.location.pathname.replace('/projects/', '')
    console.log(nha)
    console.log(projects[nha as keyof typeof projects])
    setComponent(projects[nha as keyof typeof projects])
  }, [])

  return (
    <>
      <Title type={'h1'} text={'Teste'} />
      <Title type={'h2'} text={'Teste subtitulo'} />

      <ButtonLink label={'Botão de link'} href={''} />

      <ImgBanner src={bgImg.src} height={628} />
      <ImgBanner
        src="https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&w=3053&h=4733&dpr=1"
        height={336}
      />

      <img src="https://cdn-icons-png.flaticon.com/512/2417/2417577.png" />

      {component && component?.text}
    </>
  )
}
export default Test
