import Mock from 'mockjs'

const UserInfo = [{
  id: 1,
  username: 'admin',
  password: '123456',
  name: 'lyn'
}]

const Users = []
for (let i = 0; i < 100; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(), // 随机生成一个中文名
    birth: Mock.Random.date(), // 随机生成一个日期
    sex: Mock.Random.integer(0, 1), // 1:男，0：女
    mobile: /^1[0-9]{10}$/
  }))
}

export {
  UserInfo,
  Users
}
