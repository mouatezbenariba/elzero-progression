# TypeScript Notes

### 1. Typescript Data Types
- <b>Boolean :</b> a data type that has one of two possible values, `true` or `false`.
- <b>Number :</b> decimal, hex, binary, octal, [BigIntegers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt).
```ts
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;
```
- <b>String :</b> we use the type `string` to refer to these textual datatypes.
```ts
let colorOne: string = "blue";
let colorTwo: string = 'red';
let colorThree: string = `yellow`;
```
- <b>Array :</b> allows you to work with arrays of values.
```ts
let listOne: number[] = [1, 2, 3];
let listTwo: Array<number> = [1, 2, 3];
```
- <b>Tuple :</b> Tuple allow you to express an array with a fixed number of elements.
```ts
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
// Type 'number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
```
- <b>Enum :</b> Enums (Enumerations) allow us to declare a set of named constants (Collection of related values). By default, enums are number-based, first rlement is 0. There is three types of Enums : Numeric Enums, String-Based Enums and Heterogeneous Enums [String + Number].
```ts
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}

let c: Color = Color.Green;
```
- <b>Unknown :</b> provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.
```ts
let notSure: unknown = 4;
notSure = "maybe a string instead";
 
// OK, definitely a boolean
notSure = false;
```
- <b>Any :</b> In some situations, not all type information is available or its declaration would take an inappropriate amount of effort.  In these cases, we might want to opt-out of type checking. To do so, we label these values with the `any` type.
- <b>Void :</b> `void` is a little like the opposite of `any`: the absence of having any type at all (e.g. the return type of functions that do not return a value). We can assign `void` and `null` to `void`-typed variables ONLY if [strictNullChecks](https://www.typescriptlang.org/tsconfig/#strictNullChecks) is not specified.
```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```
- <b>Null and Undefined :</b> `undefined` is a variable that refers to something that doesn't exist, and the variable isn't defined to be anything. `null` is a variable that is defined but is missing a value.
  - By default `null` and `undefined` are subtypes of all other types. That means we can assign `null` and `undefined` to something like `number`.
```ts
// "strictNullChecks": false
let n: number;
let u: undefined;
n = u;

console.log(typeof n);
// result : undefind
```
  - However, when using the [strictNullChecks](https://www.typescriptlang.org/docs/handbook/basic-types.html) flag, `null` and `undefined` are only assignable to `unknown`, any and their respective types.
```ts
// "strictNullChecks": true
let n: number;
let u: undefined;
n = u; // Type 'undefind' is not assignable to type 'number'.
```
```ts
// "strictNullChecks": true
let a: unknown; // or 'any' type
let b: undefined;
a = b;

console.log(typeof a);
// result : undefind
```
 - the one exception being that `undefined` is also assignable to `void`.
```ts
let a: void;
let b: undefined;
a = b;
```
- <b>Never :</b> the `never` type represents the type of values that never occur.
```ts
// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
 
// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
```
source :
- [Basic Types - TypeScript Official Documentation - old](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Everyday Types - TypeScript Official Documentation - new](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Unknown vs Any in Typescript](https://dmitripavlutin.com/typescript-unknown-vs-any/)
- [JavaScript: Check if Variable is undefined or null](https://stackabuse.com/javascript-check-if-variable-is-a-undefined-or-null/)
### 2. Typescript `unknown` vs `any`
- You can assign anything to `unknown` type but you have to do a type check or type assertion to operate on unknown
- You can assign anything to `any` type and you can perform any operation on any. After all, remember that all the convenience of any comes at the cost of losing type safety.
<p><b>Examples :</b></p>

- The case of  `unknown` : The type check here is typeof callback === 'function' — checking whether the callback is a function. The type of callback narrows to function type.
```ts
function invokeAnything(callback: unknown) {
  if (typeof callback === 'function') {
    callback();
  }
}

invokeAnything(1);
```
- The case of `any` : callback being any, TypeScript doesn't enforce any type checking for the statement callback().
```ts
function invokeAnything(callback: any) {
  callback();
}
 
invokeAnything(1);
```
- Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist.
source :
- [Basic Types - TypeScript Official Documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Unknown vs Any in Typescript](https://dmitripavlutin.com/typescript-unknown-vs-any/)
