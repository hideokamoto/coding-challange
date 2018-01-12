import request from 'superagent'
import $ from 'jquery'

export const api =
  'https://isrkuhheqe.execute-api.ap-northeast-1.amazonaws.com/development/'

export function jsonpGet (endpoint, jsonpCallback) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'get',
      url: endpoint,
      dataType: 'jsonp',
      jsonpCallback,
      timeout: 30000
    })
      .done((json, textStatus, XMLHttpRequest) => {
        const { response } = json
        const { error } = response
        if (error) {
          reject(error)
        } else {
          resolve(response)
        }
      })
      .fail((XMLHttpRequest, textStatus, errorThrown) => {
        reject(errorThrown)
      })
  })
}

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
