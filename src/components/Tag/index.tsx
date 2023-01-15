import { BaseTag, LargeTag } from './styles'
import { ITag } from './types'

const Tag = ({ label }: ITag) => {
  const getTagColor = () => {
    switch (label) {
      case 'projeto':
        return '#62516D'
      case 'curso':
        return '#F77A36'
      case 'ativo':
        return '#5C7A5C'
      case 'concluído':
        return '#9897A9'
      case 'pesquisa':
        return '#7191E2'
      case 'ensino':
        return '#95BB72'
      case 'interação':
        return '#F79862'
      case 'desenvolvimento':
        return '#7C5295'
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
