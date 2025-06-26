const db = require('../models')
class ArticlesService {
  test() {
    return {
      message: 'Articles service is working!',
    }
  }
  async findAll() {
    return await db.database.Articles.findAll({
      order: [['createdAt', 'DESC']],
    })
  }
  async findBySlug(slug) {
    return await db.database.Articles.findOne({ where: { slug } })
  }
  async create(articleData) {
    return await db.database.Articles.create(articleData)
  }
  async update(id, articleData) {
    const article = await db.database.Articles.findByPk(id)
    if (!article) {
      throw new Error('Article not found')
    }
    return await article.update(articleData)
  }
  async delete(id) {
    const article = await db.database.Articles.findByPk(id)
    if (!article) {
      throw new Error('Article not found')
    }
    return await article.destroy()
  }
}
module.exports = new ArticlesService()
