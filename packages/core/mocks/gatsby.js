jest.mock('gatsby')

const React = require('react')
const gatsby = require('gatsby')

gatsby.Link = jest.fn().mockImplementation(({ to, ...rest }) =>
  React.createElement("a", {
    ...rest,
    href: to,
  })
)
