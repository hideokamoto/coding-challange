import request from 'superagent'

export const api =
  'https://isrkuhheqe.execute-api.ap-northeast-1.amazonaws.com/development/'

export function get (endpoint) {
  return new Promise((resolve, reject) => {
    request.get(endpoint).end((err, response) => {
      if (err) {
        reject(err)
      } else if (response.status > 299) {
        reject(response)
      } else {
        resolve(response)
      }
    })
  })
}

export function sleep (ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
