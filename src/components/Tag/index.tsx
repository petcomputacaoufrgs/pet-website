import { BaseTag, LargeTag } from './styles'
import { ITag } from './types'
import { theme } from '@/styles/theme'

const Tag = ({ label }: ITag) => {
  const getTagColor = () => {
    switch (label) {
      case 'ativo':
        return theme.colors.ativo
      case 'concluído':
        return theme.colors.concluido
      case 'pesquisa':
        return theme.colors.pesquisa
      case 'ensino':
        return theme.colors.ensino
      case 'interação':
        return theme.colors.interacao
      case 'desenvolvimento':
        return theme.colors.desenvolvimento
      case 'extensão':
        return theme.colors.extensao
    }
  }
  return (
    <>
      {label === 'projeto' || label === 'curso' ? (
        <BaseTag color={getTagColor()}>{label}</BaseTag>
      ) : (
        <LargeTag color={getTagColor()}>{label}</LargeTag>
      )}
    </>
  )
}
export default Tag
