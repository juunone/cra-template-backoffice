import RootStore, { RootStoreModel } from './RootStore'
import { AuthStore } from './AuthStore'

export const createStore = (): RootStoreModel => {
  const authStore = AuthStore.create({
    name: 'John Doe',
    state: 'ready',
    projects: {
      isActivate: false,
      title: 'cra-template-office',
      message: 'for use',
    },
  })

  const rootStore = RootStore.create({
    authStore,
  })

  return rootStore
}
