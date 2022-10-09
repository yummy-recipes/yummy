let input = ''

const output = (content) => console.log(`${content}`)

process.stdin.on('data', (data) => {
  input += data.toString()
})

process.stdin.on('end', () => {
  const files = input.split('\n').filter((line) => Boolean(line))

  output('# CSS Modules')
  output('')
  output(`Still ${files.length} modules to migrate\n`)

  files.map((file) => {
    output(` - ${file}`)
  })
})
