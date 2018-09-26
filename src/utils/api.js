import {
  _getUsers
} from './_DATA'

export function getAllUsers() {
  return Promise.all([
    _getUsers()
  ]).then(([users]) => ({
    users
  }))
}