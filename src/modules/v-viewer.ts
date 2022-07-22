import VueViewer from 'v-viewer'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, initialState, app }) => {
  app.use(VueViewer)
}
