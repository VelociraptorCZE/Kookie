# Kookie ![](https://img.badgesize.io/velociraptorcze/kookie/master/dist/kookie.min.js.svg?compression=gzip)
Minuscule library for browser cookie handling with zero dependencies.

## Get started

#### CDN
```
https://unpkg.com/kookie/dist/kookie.min.js
```

#### NPM

```
npm i kookie --save
```

```js
import Kookie from "kookie";

Kookie.get("some-key");
```

## Methods

### Kookie.set(key: string, value: string, options: object): string

#### Options
- secure: bool
- maxAge: number
- expires: Date
- path: string
- sameSite: string

```js
Kookie.set("something", "interesting"); // sets a cookie and returns it in a string
Kookie.set("temp", "42", { maxAge: 100, path: "/something" }); // sets "temp" cookie with 100 second life span
```

### Kookie.get(key: string): string | null

```js
Kookie.get("something"); // "interesting"
Kookie.get("something-not-existing"); // null
```

### Kookie.getAll(): Map

```js
Kookie.getAll(); // returns Map with all cookies 
```

### Kookie.remove(key): string

```js
Kookie.remove("remove-me"); // removes a cookie with key remove-me
```

### Kookie.removeAll(): void

```js
Kookie.removeAll(); // simply removes everything
```

## Tests

To see tests in action, run a local server through this command:
```
npm run start:test
```

Kookie is browser oriented library, so tests are performed with a single html file on the local server. 

Navigate here to see tests:
```
http://127.0.0.1:60061/test/
```