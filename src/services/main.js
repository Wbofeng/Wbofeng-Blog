import request from '@/utils/request'

export async function getBlogs () {
  try {
    const resp = await request({
      url: '/home',
      method: 'get'
    })
    return resp
  } catch (err) {
    return false
  }
}

export async function getTags () {
  try {
    const resp = await request({
      url: '/tags',
      method: 'get'
    })
    return resp
  } catch (err) {
    return false
  }
}

export async function scarchBlogs ({ name }) {
  try {
    const resp = await request({
      url: '/search-blog',
      method: 'post',
      data: {
        name
      }
    })
    return resp
  } catch (err) {
    return false
  }
}

export async function getBlog ({ id }) {
  try {
    const resp = await request({
      url: '/blogs/:id',
      method: 'post',
      data: {
        id
      }
    })
    return resp
  } catch (err) {
    return false
  }
}
