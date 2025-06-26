const articles = require('../src/articles/articles.service')
describe('Articles API', () => {
  it('should return a list of articles', async () => {
    const response = await articles.test()
    expect(response).toBeDefined()
    expect(response.message).toBe('Articles service is working!')
  })
  it('should findAll an article', async () => {
    const response = await articles.findAll()
    expect(response).toBeDefined()
    expect(Array.isArray(response)).toBe(true)
  })
})
