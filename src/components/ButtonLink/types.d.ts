export interface IButtonLink {
  label: string
  href: string
  type?: 'default' | 'arrow-left' | 'arrow-right'
  color?: 'default' | 'white'
  target?: string
}

export type ArrowColorType = {
  color: 'default' | 'white'
}
