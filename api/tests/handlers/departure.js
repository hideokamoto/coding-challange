const assert = require('power-assert')
describe('departure handlers', () => {
  const handlres = require('../../handlers/departure/index')
  const get = handlres.GET
  describe('GET api', () => {
    it('should not provide invalid path', () => {
      assert.equal(typeof get['hoge'], 'undefined')
    })
    describe('path: /departure/{lineName}/{station}/{lineType}', () => {
      const path = '/departure/{lineName}/{station}/{lineType}'
      it('should privide valid path', () => {
        assert.notEqual(typeof get[path], 'undefined')
      })
      it('should return error when lineName is invalid', () => {
        const result = get[path]({
          pathParameters: {
            lineName: 'invalid'
          }
        })
        assert.equal(result instanceof Error, true)
        assert.equal(
          result.message,
          "Invalid lineName. Only support 'karasuma-line'."
        )
      })
      it('should return error when lineType is invalid', () => {
        const result = get[path]({
          pathParameters: {
            lineName: 'karasuma-line',
            lineType: 'invalid'
          }
        })
        assert.equal(result instanceof Error, true)
        assert.equal(
          result.message,
          "invalid is invalid. Only support 'inbound' or 'outbound'."
        )
      })
    })
  })
})
