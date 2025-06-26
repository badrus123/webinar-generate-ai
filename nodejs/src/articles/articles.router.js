//article router.js
const express = require('express')
const router = express.Router()
const {
  test,
  findAll,
  findBySlug,
  create,
  update,
  deleteArticle,
} = require('./articles.controller')

// Define the routes for articles
router.get('/test', test)
router.get('/', findAll)
router.get('/:slug', findBySlug)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', deleteArticle)

module.exports = router
