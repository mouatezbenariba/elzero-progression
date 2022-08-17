let site = 'https://www.google.com/sfdsd';
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
console.log(site.match(re));
// console.log(re.exec(site));

// 1: /https?:\/\/
// https? => the string must begin with (http)  but the (s) is optional (zero or one)
// : => a colon
// \/\/ => two slashes preceded with a Escaping Backslashes

// 2: (?:[-\w]+\.)?
// ( => opening parenthesis (not included in the regEx)
// ?: => non capturing group (the following group won't be matched)
// [-\w]+ => a group of two characters a hyphen (-) and a letter (word characters), the group could be repeated more then once
// \. => a dot
// ) => closing parenthesis (not included in the regEx)
// (.....)? => what's in between parenthesis is optional (zero or one)

// 3: ([-\w]+)\.\w+
// ([-\w]+) => explained already
// \. => a dot
// \w+ => one word character or more

// 4: (?:\.\w+)?
// ?: => non capturing group (the following group won't be matched)
// \. => a dot
// \w+ => one word letter or more
// (.....)? => what's in between parenthesis is optional (zero or one)

// 5: \/?.*
// \/? => an optional backslash
// .* =>  any character, repeated zero or more.

// 6: i => insensitive case
