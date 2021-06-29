import { h, Component, createElement, cloneElement, isValidElement, Fragment,
         createContext, render, hydrate, options } from 'preact';
export { h, Component, createElement, cloneElement, isValidElement, Fragment,
         createContext, render, hydrate, options };
import { useReducer, useState, useEffect, useLayoutEffect, useRef,
         useCallback, useContext, useDebugValue, useErrorBoundary
       } from 'preact/hooks';
export { useReducer, useState, useEffect, useLayoutEffect, useRef,
         useCallback, useContext, useDebugValue, useErrorBoundary
       };

import htm from 'htm';
const html = htm.bind(h);
export { html }; 


import registerCustomElement from 'preact-custom-element';
const webComponents = {
	register: registerCustomElement
};
export { webComponents };
