if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const f=e=>n(e,d),c={module:{uri:d},exports:o,require:f};i[d]=Promise.all(r.map((e=>c[e]||f(e)))).then((e=>(s(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bh1f7Krx.js",revision:null},{url:"assets/index-CvlkZ8au.css",revision:null},{url:"index.html",revision:"6bd12b1ba8220e1d1829216e3b8c6f77"},{url:"registerSW.js",revision:"81b7b8c8633bb1bd1ccfbbffbedcdb56"},{url:"favicon.ico",revision:"7f639e3700969eb4e7a756e31e80f2ff"},{url:"maskable-icon-512x512.png",revision:"6b636078099815b0fa95efc7df8005d3"},{url:"pwa-192x192.png",revision:"6d257bad95c942fbdd1fd60d144efd95"},{url:"pwa-512x512.png",revision:"79e9ed1641e85e2546d112c3bcfec558"},{url:"pwa-64x64.png",revision:"9c37daedbb334289bfe8f71c13b4bb02"},{url:"manifest.webmanifest",revision:"dca45baed47572080d25a9c810c87f53"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
