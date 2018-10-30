import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// eslint-disable-next-line no-unused-vars
import { UserInfo, Users } from './userInfo'

export default {
  /**
   * mock bootstrap
   * */
  bootstrap () {
    let mock = new MockAdapter(axios)

    // success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    // error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    // 登录
    mock.onPost('/login').reply(config => {
      let {
        username,
        password
      } = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let hasUser = UserInfo.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u))
              user.password = undefined
              return true
            }
          })

          if (hasUser) {
            resolve([200, {
              code: 200,
              msg: '请求成功',
              user
            }])
          } else {
            resolve([200, {
              code: 500,
              msg: '账号或密码错误'
            }])
          }
        }, 1000)
      })
    })
  }
}
