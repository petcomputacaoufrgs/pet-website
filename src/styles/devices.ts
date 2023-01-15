const sizes = {
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  desktopS: '1024px',
  desktopM: '1440px',
  desktopL: '1920px',
  desktopXL: '2560px',
}

export const devices = {
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  desktopS: `(min-width: ${sizes.desktopS})`,
  desktopM: `(min-width: ${sizes.desktopM})`,
  desktopL: `(min-width: ${sizes.desktopL})`,
  desktopXL: `(min-width: ${sizes.desktopXL})`,
}
