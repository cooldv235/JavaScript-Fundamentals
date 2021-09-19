// 5 FALSY VALUES ARE => 0, '' , undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('John'));
// console.log(Boolean({}));
// console.log(Boolean(''));

const money = 0;

if(money)
    console.log('Dont spend it all.')
else
    console.log('You should get a Job!')

const height = 0;

if(height)
    console.log('Height is defined.')
else 
    console.log('Height is Undefined.')     // Doesnt work this way, its a bug in JS


