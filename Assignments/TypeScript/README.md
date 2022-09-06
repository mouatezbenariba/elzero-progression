# TypeScript Notes

### 1. Typescript `unknown` vs `any`
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
