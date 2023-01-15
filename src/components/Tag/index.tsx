import { LargeTag, SmallTag } from './styles'
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
      case 'concluido':
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
        <SmallTag color={getTagColor()}>{label}</SmallTag>
      ) : (
        <LargeTag color={getTagColor()}>{label}</LargeTag>
      )}
    </>
  )
}
export default Tag
