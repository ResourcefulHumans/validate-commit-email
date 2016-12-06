const colors = require('colors')
const email = process.env.GIT_AUTHOR_EMAIL
const emailPattern = process.argv[process.argv.length - 1]
const emailMatch = new RegExp(emailPattern)

if (!emailMatch.test(email)) {
  console.log(colors.red(`Email not acceptable: ${email}`))
  console.log()
  console.log(colors.yellow(`Your email "${email}" does not match the`))
  console.log(colors.yellow(`required email format "${emailPattern}"!`))
  console.log()
  console.log(colors.blue('Note: you can set the email for this repository by issuing this command:'))
  console.log(colors.blue('      git config user.email "you@exameple.com"'))
  process.exit(1)
}

process.exit(0)
