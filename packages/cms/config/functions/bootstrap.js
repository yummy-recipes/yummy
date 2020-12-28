'use strict';
const fs = require('fs')
const YAML = require('yaml')

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#bootstrap
 */

async function findOrCreateTag(name) {
  const tag = await strapi.services.tag.findOne({ name })

  if (tag) {
    return tag
  }

  const newTag = await strapi.services.tag.create({ name })
  return newTag
}

async function importRecipe(slug, category, content) {
  const [_, configString, ...rest] = content.split('---')

  const markdown = rest.join('---')

  const config = YAML.parse(configString)

  const [headline, ingredients, directions] = markdown.split('<!---- splitter ---->')

  const tags = await Promise.all(config.tags.map(name => findOrCreateTag(name)))

  await strapi.services.recipe.create({
    title: config.title,
    slug,
    headline: headline.trim(),
    directions: directions.trim(),
    category: category.id,
    published_at: config.date,
    tags: tags.map(tag => tag.id),
    preparationTime: parseInt(config.required_time, 10),
    ingredients: ingredients.trim()
  })

  // strapi.plugins.upload.services.upload.uploadToEntity({
  //   id: recipe.id,
  //   model: 'recipe',
  //   field: 'cover'
  // }, fs.readFileSync(coverPath))
}

async function importByCategory(slug) {
  const category = await strapi.services.category.findOne({ slug })

  fs.readdir('../yummy-content/recipes/' + slug, async (err, files) => {
    for (const file of files) {
      const content = fs.readFileSync('../yummy-content/recipes/' + slug + '/' + file + '/index.md')
      await importRecipe(file, category, content.toString(), '../yummy-content/recipes/' + slug + '/' + file + '/cover.jpg')
    }
  })
}

module.exports = async () => {

  const numberOfCategories = await strapi.services.category.count()

  if (numberOfCategories === 0) {
    const categories = ['Śniadaniowe', 'Zupy', 'Obiady', 'Desery', 'Koktajle']

    for (let i = 0; i < categories.length; i++){
      await strapi.services.category.create({
        name: categories[i]
      })
    }
  }

  const numberOfRecipes = await strapi.services.recipe.count()

  if (numberOfRecipes === 0) {
    fs.readdir('../yummy-content/recipes', async (err, files) => {
      for (const file of files) {
        await importByCategory(file)
      }
    })
  }

  const numberOfArticles = await strapi.services.article.count()

  if (numberOfArticles === 0) {
    await strapi.services.article.create({
      title: 'Article 1',
      headline: 'First article',
      content: 'Lorem ipsum'
    })
  }
}
