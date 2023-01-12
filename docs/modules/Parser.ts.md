---
title: Parser.ts
nav_order: 18
parent: Modules
---

## Parser overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [assertions](#assertions)
  - [asserts](#asserts)
  - [is](#is)
- [constructors](#constructors)
  - [make](#make)
- [decoding](#decoding)
  - [decode](#decode)
  - [decodeOrThrow](#decodeorthrow)
- [encoding](#encoding)
  - [encode](#encode)
  - [encodeOrThrow](#encodeorthrow)
- [model](#model)
  - [ParseOptions (interface)](#parseoptions-interface)
  - [Parser (interface)](#parser-interface)
- [utils](#utils)
  - [InferInput (type alias)](#inferinput-type-alias)

---

# assertions

## asserts

**Signature**

```ts
export declare const asserts: <A>(
  schema: Schema<A>
) => (input: unknown, options?: ParseOptions | undefined) => asserts input is A
```

Added in v1.0.0

## is

**Signature**

```ts
export declare const is: <A>(schema: Schema<A>) => (input: unknown, options?: ParseOptions | undefined) => input is A
```

Added in v1.0.0

# constructors

## make

**Signature**

```ts
export declare const make: <I, A>(
  schema: Schema<A>,
  parse: (i: I, options?: ParseOptions | undefined) => These<readonly [PE.ParseError, ...PE.ParseError[]], A>
) => Parser<I, A>
```

Added in v1.0.0

# decoding

## decode

**Signature**

```ts
export declare const decode: <A>(
  schema: Schema<A>
) => (i: unknown, options?: ParseOptions | undefined) => These<readonly [PE.ParseError, ...PE.ParseError[]], A>
```

Added in v1.0.0

## decodeOrThrow

**Signature**

```ts
export declare const decodeOrThrow: <A>(schema: Schema<A>) => (u: unknown, options?: ParseOptions | undefined) => A
```

Added in v1.0.0

# encoding

## encode

**Signature**

```ts
export declare const encode: <A>(
  schema: Schema<A>
) => (a: A, options?: ParseOptions | undefined) => PE.ParseResult<unknown>
```

Added in v1.0.0

## encodeOrThrow

**Signature**

```ts
export declare const encodeOrThrow: <A>(schema: Schema<A>) => (a: A, options?: ParseOptions | undefined) => unknown
```

Added in v1.0.0

# model

## ParseOptions (interface)

**Signature**

```ts
export interface ParseOptions {
  readonly isUnexpectedAllowed?: boolean
  readonly allErrors?: boolean
}
```

Added in v1.0.0

## Parser (interface)

**Signature**

```ts
export interface Parser<I, A> extends Schema<A> {
  readonly I: (i: I) => void
  readonly parse: (i: I, options?: ParseOptions) => PE.ParseResult<A>
}
```

Added in v1.0.0

# utils

## InferInput (type alias)

**Signature**

```ts
export type InferInput<D extends Parser<any, any>> = Parameters<D['I']>[0]
```

Added in v1.0.0