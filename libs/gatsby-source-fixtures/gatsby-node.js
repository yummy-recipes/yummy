const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

function getContent(params) {
  const recipe = {
    title: '',
    date: '2019-01-01T00:00:00Z',
    required_time: '60min',
    category: 'obiady',
    tags: ['kurczak'],
    featuredImage: '../../../images/cover.jpg',
    headline: 'Nagłówek',
    ingredients: '## Lista zakupów',
    directions: '## Przygotowanie',
    ...params
  }

  const tags = recipe.tags.map(tag => ` - ${tag}`).join('\n')

  return `---
title: ${recipe.title}
date: ${recipe.date}
required_time: ${recipe.required_time}
category:
 - ${recipe.category}
tags:
${tags}
featured_image: ${recipe.featuredImage}
---
    
${recipe.headline}  
<!---- splitter ---->
${recipe.ingredients}  

<!---- splitter ---->
${recipe.directions}  
`
}

function createRecipe({content, relativePath, gallery}) {
  const finalPath = path.join(path.resolve('cypress/fixtures/recipes'), relativePath)
  mkdirp.sync(path.dirname(finalPath))
  fs.writeFileSync(finalPath, content)

  if (gallery) {
    const galleryPath = path.join(path.dirname(finalPath), 'gallery')
    mkdirp.sync(galleryPath)

    gallery.forEach(imgPath => {
      fs.copyFileSync(path.resolve(imgPath), path.join(galleryPath, path.basename(imgPath)))
    })
  }
}

function createDateWithOffset(offset) {
  const date = new Date('2019-01-01T00:00:00Z')
  date.setMinutes(offset)
  return date.toISOString()
}

function createRecipeBatch({variant, createNewDate}) {
  createRecipe({
    relativePath: `obiady/obiad-${variant.toLowerCase()}/index.md`,
    content: getContent({
      title: `Obiad ${variant}`,
      date: createNewDate(),
      category: 'obiady',
      tags: ['kurczak']
    })
  })

  createRecipe({
    relativePath: `zupy/zupa-${variant.toLowerCase()}/index.md`,
    content: getContent({
      title: `Zupa ${variant}`,
      date: createNewDate(),
      category: 'zupy',
      tags: ['woda']
    })
  })

  createRecipe({
    relativePath: `koktajle/koktajl-${variant.toLowerCase()}/index.md`,
    content: getContent({
      title: `Koktajl ${variant}`,
      date: createNewDate(),
      category: 'koktajle',
      tags: ['woda']
    })
  })

  createRecipe({
    relativePath: `sniadaniowe/sniadaniowe-${variant.toLowerCase()}/index.md`,
    content: getContent({
      title: `Sniadaniowe ${variant}`,
      date: createNewDate(),
      category: 'sniadaniowe',
      tags: ['woda']
    })
  })

  createRecipe({
    relativePath: `desery/deser-${variant.toLowerCase()}/index.md`,
    gallery: ['cypress/fixtures/images/related.jpg', 'cypress/fixtures/images/related2.jpg'],
    content: getContent({
      title: `Desery ${variant}`,
      date: createNewDate(),
      category: 'desery',
      tags: ['woda'],
    })
  })
}

exports.sourceNodes = () => {
  let counter = 0
  const createNewDate = () => createDateWithOffset(counter++)

  for (let i = 0; i < 10; i++) {
    createRecipeBatch({
      createNewDate,
      variant: String.fromCharCode('A'.charCodeAt(0) + i)
    })
  }
}
