const React = require('react')
const Layout = require('./src/components/layout').default
const { renderToString } = require('react-dom/server')
const { renderStylesToString } = require('emotion-server')

exports.replaceRenderer = function ({ bodyComponent, replaceBodyHTMLString }) {
  const html = renderStylesToString(renderToString(bodyComponent))
  replaceBodyHTMLString(html)
}

exports.wrapPageElement = function ({ element, props }) {
  const {
    pageContext: {
      fullHeaderVersion,
      subsection,
      isSingleRecipe,
      allCategories,
    },
  } = props

  return (
    <Layout
      fullHeaderVersion={fullHeaderVersion}
      subsection={subsection}
      isSingleRecipe={isSingleRecipe}
      categories={allCategories}
    >
      {element}
    </Layout>
  )
}
