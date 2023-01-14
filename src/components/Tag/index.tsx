import { SmallTag } from './styles'
import { ITag } from './types'

const Tag = ({ label }: ITag) => {
  const getTagColor = () => {
    switch (label) {
      case 'projeto':
        return '#62516D'
      case 'curso':
        return '#F77A36'
    }
  }
  return <SmallTag color={getTagColor()}>{label}</SmallTag>
}
export default Tag
