import { BaseTheme } from './base'

export const DayTheme = {
  color: {
    primary: {
      main: '#4D5E68',
      text: '#ECECEC',
      mainFade80: 'rgba(77, 94, 104, 80%)',
      mainFade50: 'rgba(77, 94, 104, 50%)',
      mainFade25: 'rgba(77, 94, 104, 25%)',
      mainFade15: 'rgba(77, 94, 104, 15%)',
    },
    secondary: {
      main: '#B19F8B',
      text: '#ECECEC',
      mainFade80: 'rgba(177, 159, 139, 80%)',
      mainFade50: 'rgba(177, 159, 139, 50%)',
      mainFade25: 'rgba(177, 159, 139, 25%)',
      mainFade15: 'rgba(177, 159, 139, 15%)',
    },
  },
  ...BaseTheme,
}
