'use strict';

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

async function enableRead(type) {
  const role = await strapi.query('role', 'users-permissions').findOne({ type })
  for (const permission of role.permissions) {
    if (permission.type === 'application' && permission.action === 'find') {
      await strapi.query('permission', 'users-permissions').update({ id: permission.id }, { ...permission, enabled: true } )
    }
  }
}

async function updateUploadSettings() {
  await strapi.plugins.upload.services.upload.setSettings({ sizeOptimization: false, responsiveDimensions: false })
}

function createDateWithOffset(offset) {
  const date = new Date('2019-01-01T00:00:00Z')
  date.setMinutes(offset)
  return date.toISOString()
}

async function createRecipe({ title, slug, category, publishedAt, tagNames, gallery}) {
  const tags = await Promise.all(tagNames.map(name => findOrCreateTag(name)))
  const categoryEntity = await strapi.services.category.findOne({ slug: category })

  const recipe = await strapi.services.recipe.create({
    title,
    slug,
    headline: 'Nagłówek',
    directions: '## Przygotowanie',
    category: categoryEntity.id,
    published_at: publishedAt,
    tags: tags.map(tag => tag.id),
    preparationTime: 60,
    ingredients: '## Lista zakupów',
    seo: {
      htmlTitle: title,
      htmlDescription: 'Nagłówek'
    }
  })

  const file = {
    size: 10,
    path: '../blog/cypress/fixtures/images/cover.jpg',
    name: 'cover.jpg',
    type: 'image/jpeg',
    lastModifiedDate: null,
    hash: null
  }

  await strapi.plugins.upload.services.upload.uploadToEntity({
    id: recipe.id,
    model: 'recipe',
    field: 'cover'
  }, file)

  if (gallery && gallery.length > 0) {
    await strapi.plugins.upload.services.upload.uploadToEntity({
      id: recipe.id,
      model: 'recipe',
      field: 'gallery'
    }, gallery.map(galleryFile => ({
      size: 10,
      path: galleryFile,
      name: 'gallery.jpg',
      type: 'image/jpeg',
      lastModifiedDate: null,
      hash: null
    })))
  }
}

async function createRecipeBatch({ createNewDate, variant }) {
  await createRecipe({
    slug: `obiad-${variant.toLowerCase()}`,
    title: `Obiad ${variant}`,
    publishedAt: createNewDate(),
    category: 'obiady',
    tagNames: ['kurczak']
  })

  await createRecipe({
    slug: `zupa-${variant.toLowerCase()}`,
    title: `Zupa ${variant}`,
    publishedAt: createNewDate(),
    category: 'zupy',
    tagNames: ['woda']
  })

  await createRecipe({
    slug: `koktajl-${variant.toLowerCase()}`,
    title: `Koktajl ${variant}`,
    publishedAt: createNewDate(),
    category: 'koktajle',
    tagNames: ['woda']
  })

  await createRecipe({
    slug: `sniadaniowe-${variant.toLowerCase()}`,
    title: `Sniadaniowe ${variant}`,
    publishedAt: createNewDate(),
    category: 'sniadaniowe',
    tagNames: ['woda']
  })

  await createRecipe({
    slug: `deser-${variant.toLowerCase()}`,
    gallery: [
      '../blog/cypress/fixtures/images/related.jpg',
      '../blog/cypress/fixtures/images/related2.jpg'
    ],
    title: `Desery ${variant}`,
    publishedAt: createNewDate(),
    category: 'desery',
    tagNames: ['woda']
  })
}

async function setupTestFixtures() {
  let counter = 0
  const createNewDate = () => createDateWithOffset(counter++)

  for (let i = 0; i < 10; i++) {
    await createRecipeBatch({
      createNewDate,
      variant: String.fromCharCode('A'.charCodeAt(0) + i)
    })
  }
}

module.exports = async () => {
  const roleToRead = process.env.NODE_ENV === 'test' ? 'public' : 'authenticated'
  await enableRead(roleToRead)
  await updateUploadSettings()

  const numberOfCategories = await strapi.services.category.count()

  if (numberOfCategories === 0) {
    const categories = ['Śniadaniowe', 'Zupy', 'Obiady', 'Desery', 'Koktajle']

    for (let i = 0; i < categories.length; i++) {
      await strapi.services.category.create({
        name: categories[i]
      })
    }
  }

  const numberOfRecipes = await strapi.services.recipe.count()

  if (numberOfRecipes === 0) {
    if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
      await setupTestFixtures()
    }
  }

  const numberOfArticles = await strapi.services.article.count()

  if (numberOfArticles === 0) {
    await strapi.services.article.create({
      title: 'Demo',
      headline: 'Lorem ipsum',
      content: 'Lorem ipsum',
      published_at: '2019-05-15T12:00:00Z'
    })

    await strapi.services.article.create({
      title: 'A second demo',
      headline: 'Salami ground round biltong eiusmod velit sunt pig sirloin pork in chuck in. Minim biltong nulla cow nostrud capicola sausage aliqua bacon tempor turducken. Ham hock fatback aliqua alcatra capicola in sint fugiat ham beef ribs drumstick.',
      content: ['Spicy jalapeno bacon', 'Spicy jalapeno bacon', 'Spicy jalapeno bacon', 'Spicy jalapeno bacon', 'Spicy jalapeno bacon'].join('\n\n'),
      published_at: '2019-05-22T12:00:00Z'
    })
  }
}
