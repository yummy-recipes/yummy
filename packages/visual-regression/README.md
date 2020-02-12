# `visual-regression`

A library that helps to create a visual regression tests.
It takes a screenshot and compares it with a golden version
that is stored in the repo.

## Usage

```
const { test } = require('@yummy/visual-regression')

test(async ({ page, snapshot }) => {
  await page.goto('http://localhost:8001', { waitUntil: 'networkidle2' })
  await snapshot(`${name}`, { width: 1440, height: 960 })
  await snapshot(`${name}-mobile`, { width: 420, height: 700 })
})
```
