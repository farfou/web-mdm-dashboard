"use strict";var precacheConfig=[["/index.html","e4485e4eae95a51017abcb570124b94e"],["/static/css/main.23023689.css","9cb343563c6df2cdbe4f32dfeb57ea24"],["/static/js/0.9f492d31.chunk.js","a7ef230bd1e94bd8cf122753c6246c66"],["/static/js/1.1ebcca1e.chunk.js","ed5e89c24763f6583c43bcc5ed07ed9c"],["/static/js/2.7b093a51.chunk.js","d021931025297169f74ebffb6c8ede05"],["/static/js/3.fe9db8a8.chunk.js","e484aec572b54db84821fbf88e3f47e5"],["/static/js/4.7c06d0af.chunk.js","ada841989481110c7a5220418dfe8556"],["/static/js/5.e929bc99.chunk.js","807523c249f13f9bc04dfae4cc052965"],["/static/js/main.62b3a189.js","988f3a868155947c1de990885f5c81a6"],["/static/media/Facebook.54f4909c.svg","54f4909c007574fd023132ef5d311a62"],["/static/media/GitHub.3f861f80.png","3f861f805d5ccbc968559aeabc5ff142"],["/static/media/GooglePlus.e2b728a0.svg","e2b728a007ae46f36ecac5790542e95a"],["/static/media/Reddit.36060e35.svg","36060e35f4646ceb40403dd8dc375ce6"],["/static/media/SegMDL2.d9b1005e.ttf","d9b1005ee287d04bd367cd19ec91868e"],["/static/media/Telegram.1a7d8e54.svg","1a7d8e54c15e6ee4d4711a2f893a1665"],["/static/media/Twitter.87f3dab6.svg","87f3dab6b486924b74d5e8a9df044f88"],["/static/media/dashboard.da0dce0e.svg","da0dce0e296f3d86b81ce5b5219cc01e"],["/static/media/logo.800932de.png","800932de2b852e0637002b0afbc31fb6"],["/static/media/logo2.58656868.png","58656868bfc6b420053350ac583bd1e2"],["/static/media/selawk.6ab68a1e.eot","6ab68a1e621e1c44e010926766ebbf2c"],["/static/media/selawk.c0c37a1e.ttf","c0c37a1ee819be05ebad9ed599be9fd3"],["/static/media/selawkb.2e5d0806.ttf","2e5d0806a42e99bb23fa352f0a11c8fa"],["/static/media/selawkb.a0c2f922.eot","a0c2f9220bb785bf5d2a65120ddff3cf"],["/static/media/selawkl.4b936248.ttf","4b936248161727bf293ca4d796e34908"],["/static/media/selawkl.b442c62c.eot","b442c62c4756942de7d7f61cebd24c7d"],["/static/media/selawksb.86745e35.eot","86745e35835e5615c44ea38c2fee057b"],["/static/media/selawksb.e2b8a9a7.ttf","e2b8a9a7fb3a9b840765094f2b413b5a"],["/static/media/selawksl.b3a62850.ttf","b3a62850ef4e907d244369bdd5c23bfc"],["/static/media/selawksl.f325f4eb.eot","f325f4ebce783662a07b5262d9a6c581"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});