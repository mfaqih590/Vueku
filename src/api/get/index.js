import { getApiNoAuth } from '../utils'

export default {
  userLogin (window, username, password) {
    return getApiNoAuth()
      .get('owners', {
        username: username,
        password: password
      })
      .then(function (response) {
        console.log(response)
        return response.data
      }).catch(function (err) {
        console.log(err)
      })
  }
}
