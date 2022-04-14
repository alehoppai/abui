import { BaseTheme } from './base'

export const NightTheme = {
  color: {
    primary: {
      main: '#B1BEC4',
      text: '#4D5E68',
      mainFade80: 'rgba(177, 190, 196, 80%)',
      mainFade50: 'rgba(177, 190, 196, 50%)',
      mainFade25: 'rgba(177, 190, 196, 25%)',
      mainFade15: 'rgba(177, 190, 196, 15%)',
    },
    secondary: {
      main: '#C1B891',
      text: '#ECECEC',
      mainFade80: 'rgba(193, 184, 135, 80%)',
      mainFade50: 'rgba(193, 184, 135, 50%)',
      mainFade25: 'rgba(193, 184, 135, 25%)',
      mainFade15: 'rgba(193, 184, 135, 15%)',
    }
  },
  ...BaseTheme,
}
