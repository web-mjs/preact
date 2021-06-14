import { h, Component, createElement, cloneElement, isValidElement, Fragment,
         createContext, render, hydrate, options } from 'preact';
import { useReducer, useState, useEffect, useLayoutEffect, useRef,
         useCallback, useContext, useDebugValue, useErrorBoundary
       } from 'preact/hooks';

import htm from 'htm';
const html = htm.bind(h);

export { html }; 

import registerCustomElement from 'preact-custom-element';
export { registerCustomElement };

export { h, Component, createElement, cloneElement, isValidElement, Fragment,
         createContext, render, hydrate, options };
export { useReducer, useState, useEffect, useLayoutEffect, useRef,
         useCallback, useContext, useDebugValue, useErrorBoundary
       };
