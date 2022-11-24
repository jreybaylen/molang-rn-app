# EXPORT & IMPORT
```
export { Root }
or
export const Root = () => { }
export function Root () { }

import { Root } from 'filename'
```

```
export { Root as RootApp }

import { RootApp } from 'filename'
```

```
export default function Root () {

}

const Root = () => { }

export { Root as default }

import RootNameApp from 'filename'
```

```
export function Root () {

}

export const Root2 = () => { }

import { Root, Root2 } from 'filename'
import * as RootApp from 'fiename

--> Access
RootApp.Root
```

```
export default function Root () {

}

export const Root2 = () => { }

import Root, { Root2 } from './filename
```
