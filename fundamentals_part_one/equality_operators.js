// TWO TYPES OF EQUALITY OPERATORS == AND ===
//  == EQUAL TO VALUE
//  === EQUAL TO AND TYPE

const age = 18
if(age === 18) console.log('You just became an adult. (strict)')
if(age == 18) console.log('You just became an adult. (loose)')

const favNum = prompt('What is your favorite number?')

console.log(favNum)
console.log(typeof favNum)      // The number is converted to type string from prompt

if(favNum == 23)                // Because this is loose equality operator it will be true
    console.log('23 is an amazing number.')
