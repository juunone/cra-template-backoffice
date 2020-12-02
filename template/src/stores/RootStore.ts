import { AuthStore } from '@/stores/AuthStore'
import { types, Instance } from 'mobx-state-tree'

export type RootStoreModel = Instance<typeof RootStore>

console.log('root store')

const RootStore = types.model('RootStore', {
  authStore: AuthStore,
})

export default RootStore
