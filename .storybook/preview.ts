import '@/app/app.css'
import './storybook.css'
import { withThemeByDataAttribute } from '@storybook/addon-themes'

import type { Preview } from '@storybook/svelte'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: ['Core', 'UI']
      }
    }
  }
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      Light: 'light',
      Dark: 'dark'
    },
    defaultTheme: 'Dark'
  })
]
export default preview
