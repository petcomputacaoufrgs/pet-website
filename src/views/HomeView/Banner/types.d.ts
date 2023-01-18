import { CtaType } from './../../../types/ctaType.d'
import { ISection } from './../../../types/sectionType.d'

export interface IBanner extends ISection {
  navbar: CtaType[]
}
