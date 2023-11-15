import merge from 'lodash.merge';
import {darkTheme, Theme,} from '@rainbow-me/rainbowkit';

export const myRainbowCustomTheme = merge(darkTheme(), {
    colors: {
        accentColor: 'rgba(239, 35, 60, 1)',
        accentColorForeground: '#EDF2F4',
        modalBackground: '#1b1d28',
        modalTextSecondary:'#8D99AE',
        modalText:'#EDF2F4',
        modalBackdrop:'rgba(24,26,37,0.54)'
    },
    fonts: {
        body: 'Poppins'
    },
    radii: {
        modal: '8px',
        actionButton: '8px',
        menuButton: '8px',
        modalMobile: '8px',
    },
} as Theme)