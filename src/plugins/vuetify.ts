// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// Vuetify
import { createVuetify } from 'vuetify'
export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            'primary': '#881dcd',
            'on-primary': '#fff',
            'secondary': '#CFE0EF',
            'on-secondary': '#fff',
            'success': '#28C76F',
            'on-success': '#fff',
            'info': '#00CFE8',
            'on-info': '#fff',
            'warning': '#FF9F43',
            'on-warning': '#fff',
            'error': '#EA5455',
            'background': '#F8F7FA',
            'on-background': '#33303C',
            'on-surface': '#33303C',
            'grey-50': '#FAFAFA',
            'grey-100': '#F5F5F5',
            'grey-200': '#EEEEEE',
            'grey-300': '#E0E0E0',
            'grey-400': '#BDBDBD',
            'grey-500': '#9E9E9E',
            'grey-600': '#757575',
            'grey-700': '#616161',
            'grey-800': '#424242',
            'grey-900': '#212121',
            'perfect-scrollbar-thumb': '#DBDADE',
            'transparent': 'rgba(0,0,0,0)',
            'danube': '#6B9ECE'
          },
        },
      }
    }
  }
)
