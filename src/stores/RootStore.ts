import { AuthStore } from '@/stores/AuthStore'
import { types, Instance } from 'mobx-state-tree'

export type RootStoreModel = Instance<typeof RootStore>

const RootStore = types.model('RootStore', {
  authStore: AuthStore,
})

export default RootStore
