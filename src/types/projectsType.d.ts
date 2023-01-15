export type ProjectType = {
  type: 'projeto'
  href: string
  status: 'concluído' | 'ativo'
  card_banner: string
  page_icon: string
  name: string
  description: string
  axis: ('interação' | 'ensino' | 'pesquisa' | 'desenvolvimento')[]
  text: string[]
  members: string
  tools: string
  cta?: { label: string; href: string }[]
  customContent?: string
}

export type CourseType = {
  type: 'curso'
  card_banner: string
  name: string
  description: string
  href: string
}
