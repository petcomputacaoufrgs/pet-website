import { CtaType } from './ctaType'

export type ProjectType = {
  type: 'projeto'
  href: string
  status: ProjectStatus
  card_banner: string
  page_icon: string
  name: string
  description: string
  axis: ('interação' | 'ensino' | 'pesquisa' | 'desenvolvimento')[]
  text: string[]
  active_members?: string
  members?: string
  tools: string
  cta?: CtaType[]
  customContent?: string
}

export type CourseType = {
  type: 'curso'
  card_banner: string
  name: string
  description: string
  href: string
}
