import { types } from 'mobx-state-tree'

export const AuthBase = types.model('AuthBase', {
  value: types.optional(types.string, ''),
})

export const Auth = types.model('AuthModel', {
  name: types.string,
})
