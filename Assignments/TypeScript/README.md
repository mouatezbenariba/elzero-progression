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
source :
- [Basic Types - TypeScript Official Documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Unknown vs Any in Typescript](https://dmitripavlutin.com/typescript-unknown-vs-any/)
