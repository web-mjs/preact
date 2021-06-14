<h3 align="center"><img src="https://raw.githubusercontent.com/preactjs/preact/8b0bcc927995c188eca83cba30fbc83491cc0b2f/logo.svg" height="50" valign="middle"> ES Module (.mjs) for Web</h3>
<hr>
<h3 align="center">just <code>import preact.mjs</code></h3>

The module bundles `preact`, `preact/hooks`, `html` and `preact-custom-element`.

Example with `unpkg.com`:

```js
import { render, html, useState, useEffect } from 'https://unpkg.com/preact-mjs@latest';

const App = () => {
   const [clicks, setClicks] = useState(0);
   useEffect(() => {
     document.title = "Clicks: " + clicks;
   });
   return html`<button onClick=${() => setClicks((x) => x + 1)}>Click</button>`;
};
```

The full list of exported members:

* h, html, render
* createElement, cloneElement, isValidElement
* Fragment, Component, createContext, hydrate, options
* useReducer, useState, useEffect, useLayoutEffect, useRef, useCallback, useContext, useDebugValue, useErrorBoundary
* registerCustomElement
