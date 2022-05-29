// String

const firstName = 'Sadık';
const lastName = 'Turan';
const age = 35;
let hobbies = 'Reading, Playing, Coding';
let val;
val = firstName + ' ' + lastName;
val = 'Sadık';
val += ' Turan';

// string concatenation

//val = ' Benim adım ' + firstName + ' ' + lastName + ' ve yaşım' + ' ' + age + '.' + ' ' + 'İzmir\'de yaşıyorum.';

// string concat
//val = firstName.concat(' ', lastName);

//string length (uzunluk)

//val = val.length;

// string uppercase - lowercase

//val = val.toUpperCase();
//val = val.toLowerCase();

//val = val[1]; // sadık turanın ikinci harfini alır.
//val = val.indexOf(' Turan');

val = hobbies.split(',');

console.log(val);
console.log(typeof val);