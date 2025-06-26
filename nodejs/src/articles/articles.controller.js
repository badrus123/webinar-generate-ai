// articles.controller.js
const { slug } = require('../utils/globals')
const articlesService = require('./articles.service')

class ArticlesController {
  test(req, res) {
    const result = articlesService.test()
    res.status(200).json(result)
  }
  findAll(req, res) {
    articlesService
      .findAll()
      .then((articles) => {
        res.status(200).json(articles)
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error retrieving articles', error })
      })
  }
  findBySlug(req, res) {
    const slug = req.params.slug
    articlesService
      .findBySlug(slug)
      .then((article) => {
        if (article) {
          res.status(200).json(article)
        } else {
          res.status(404).json({ message: 'Article not found' })
        }
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error retrieving article', error })
      })
  }
  create(req, res) {
    const articleData = req.body
    const body = {
      title: articleData.title,
      slug: slug(articleData.title),
      content: articleData.content,
      createdAt: new Date(),
    }
    articlesService
      .create(body)
      .then((newArticle) => {
        res.status(201).json(newArticle)
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error creating article', error })
      })
  }
  update(req, res) {
    const id = req.params.id
    const articleData = req.body
    const body = {
      title: articleData.title,
      slug: slug(articleData.title),
      content: articleData.content,
      updatedAt: new Date(),
    }
    articlesService
      .update(id, body)
      .then((updatedArticle) => {
        res.status(200).json(updatedArticle)
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error updating article', error })
      })
  }
  deleteArticle(req, res) {
    const id = req.params.id
    articlesService
      .delete(id)
      .then(() => {
        res.status(200).send({ message: 'Article deleted successfully' })
      })
      .catch((error) => {
        res.status(500).json({ message: 'Error deleting article', error })
      })
  }
}

module.exports = new ArticlesController()
