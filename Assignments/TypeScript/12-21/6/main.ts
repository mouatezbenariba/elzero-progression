let post: readonly [number, string, true];

// post = [100, 200, 'Title']; // Error
// post = ['Title', 100, true]; // Error
post = [100, 'Title', true]; // Good

// post.push('Elzero'); // Error => Cant Add

// // Create Destructuring Here
let [id, title, state] = post;

// // Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
