import { types, Instance, flow } from 'mobx-state-tree'
import { Auth } from '@/models/AuthModel'
import * as apiCall from '@/stores/repository'

export type AuthModel = Instance<typeof AuthStore>

const ProfileModel = types.model({
  isActivate: types.boolean,
  title: types.string,
  message: types.string,
})

export const AuthStore = types
  .compose(
    Auth,
    types.model({
      state: types.string,
      projects: ProfileModel,
    })
  )
  .actions((self: any) => ({
    setChange(name: string) {
      self.name = name
    },
    fetchProjects: flow(function* fetchProjects() {
      self.state = 'pending'
      try {
        self.projects = yield apiCall.findAll({ find: 'a' })
        self.state = 'done'
      } catch (error) {
        console.error('Failed to fetch projects', error)
        self.state = 'error'
      }
    }),
  }))
