<h3 align="center"><img src="https://raw.githubusercontent.com/preactjs/preact/8b0bcc927995c188eca83cba30fbc83491cc0b2f/logo.svg" height="50" valign="middle"> ES Module (.mjs) for Web</h3>
<hr>
<h3 align="center">use preact, hooks, custom-elements with<br>
just <code>import 'https://unpkg.com/@web-mjs/preact'</code></h3>

```js
import { render, html, useState, useEffect } from 'https://unpkg.com/@web-mjs/preact';

const App = () => {
   const [clicks, setClicks] = useState(0);
   useEffect(() => {
     document.title = "Clicks: " + clicks;
   });

   return html`<button onClick=${() => setClicks((x) => x + 1)}>Click</button>`;
};
```

The module bundles <a href="https://github.com/preactjs/preact/blob/master/src/index.js">preact</a>, <a href="https://github.com/preactjs/preact/blob/master/hooks/src/index.js">preact/hooks</a>, <a href="https://github.com/developit/htm/blob/master/src/index.mjs">html template</a> and <a href="https://github.com/preactjs/preact-custom-element/blob/master/src/index.js">preact-custom-element</a>. The full list of exported members:

* `h`, `html`, `render`
* `createElement`, `cloneElement`, `isValidElement`
* `Fragment`, `Component`, `createContext`, `hydrate`, `options`
* **hooks:** `useReducer`, `useState`, `useEffect`, `useLayoutEffect`, `useRef`, `useCallback`, `useContext`, `useDebugValue`, `useErrorBoundary`

**Web Components**

The `registerCustomElement` function from preact is exported as:

```js
import { webComponents } from 'https://unpkg.com/@web-mjs/preact';

webComponents.register(someComponent);
```

**🚧 web-mjs is not affiliated with the Preact team.** To build on your own, use rollup or `npm run build`

