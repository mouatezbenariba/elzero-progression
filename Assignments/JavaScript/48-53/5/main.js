let friends = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
let letter = 'a';

for (let i = friends.length - friends.length; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    friends.shift();
  }
  console.log(`"${i + letter.length} => ${friends[i]}"`);
}
