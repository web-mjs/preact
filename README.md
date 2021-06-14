<h3 align="center"><img src="https://raw.githubusercontent.com/preactjs/preact/8b0bcc927995c188eca83cba30fbc83491cc0b2f/logo.svg" height="50" valign="middle"> ES Module (.mjs) for Web</h3>
<hr>
<h3 align="center">just <code>import preact.mjs</code> from <a href="https://unpkg.com/preact-mjs@latest">unpkg</a></h3>

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

The module bundles <a href="https://github.com/preactjs/preact/blob/master/src/index.js">preact</a>, <a href="https://github.com/preactjs/preact/blob/master/hooks/src/index.js">preact/hooks</a>, <a href="https://github.com/developit/htm/blob/master/src/index.mjs">html</a> and <a href="https://github.com/preactjs/preact-custom-element/blob/master/src/index.js">preact-custom-element</a>. The full list of exported members:

* `h`, `html`, `render`
* `createElement`, `cloneElement`, `isValidElement`
* `Fragment`, `Component`, `createContext`, `hydrate`, `options`
* `useReducer`, `useState`, `useEffect`, `useLayoutEffect`, `useRef`, `useCallback`, `useContext`, `useDebugValue`, `useErrorBoundary`
* `registerCustomElement`

**preact.mjs is not affiliated with the preact team.**
