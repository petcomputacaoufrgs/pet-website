interface ThemeInterface {
  colors: {
    primary: string
    secondary: string
    accent: string
    accentLighter: string
    details: string
    details2: string
    white: string
    black: string
    projects: string
    courses: string
    // Cores de eixos
    ensino: string
    pesquisa: string
    extensao: string
    desenvolvimento: string
    interacao: string
    // Cores de status
    ativo: string
    concluido: string
  }
}

export const theme: ThemeInterface = {
  colors: {
    primary: '#4D4C52',
    secondary: '#E4DADF',
    accent: '#DD5B6C',
    accentLighter: '#e87180',
    details: '#950020',
    details2: '#666564',
    white: '#FBF9FB',
    black: '#343239',
    projects: '#3a5ddc',
    courses: '#CA743B',
    // Cores de eixos
    ensino: '#7fa958',
    pesquisa: '#7191E2',
    extensao: '#ca48ce',
    desenvolvimento: '#7C5295',
    interacao: '#d9773e',
    // Cores de status
    ativo: '#5C7A5C',
    concluido: '#504bb1',
  },
}
