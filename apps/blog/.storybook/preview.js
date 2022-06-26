import './style.css'

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw errors.
window.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable prevents the "__BASE_PATH__ is not defined" error inside Storybook.
window.__BASE_PATH__ = '/'

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
window.___navigate = (pathname) => {
  console.log('NavigateTo:', pathname)
}

export const parameters = {
  chromatic: { viewports: [360, 1200] },
  backgrounds: {},
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: 'light', color: '#fff' },
      { name: 'dark', class: 'dark', color: '#000' },
    ],
  },
}
