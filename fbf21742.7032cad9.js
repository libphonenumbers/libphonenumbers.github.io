(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{150:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return p})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(2),a=r(6),o=(r(0),r(154)),i={id:"parse",sidebar_label:"parse",title:"parse",description:"parseAndKeepRawInput | PhoneNumberUtil.parse | Libphonenumbers",image:"/img/libphonenumbers-cover.png",keywords:["libphonenumbers","PhoneNumberUtil","PhoneNumberUtil.parse","parse"],permalink:null,version:"parse"},p={id:"parse",title:"parse",description:"parseAndKeepRawInput | PhoneNumberUtil.parse | Libphonenumbers",source:"@site/docs/parse.md",permalink:"/docs/parse",sidebar_label:"parse",sidebar:"someSidebar",previous:{title:"parseAndKeepRawInput",permalink:"/docs/parseAndKeepRawInput"},next:{title:"inputDigit",permalink:"/docs/inputDigit"}},c=[{value:"Usage",id:"usage",children:[]}],s={rightToc:c};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"parse(numberToParse, defaultRegion) is used to parses a string and returns it in proto buffer format."),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("p",null,"Using Standard JavaScript:"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// Create an instance of PhoneNumberUtil\nconst phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance();\n\n// Get prototype buffer format\nconsole.log(phoneUtil.parse('123456', 'US'));\n")),Object(o.b)("p",null,"Using ECMAScript (ES):"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import libphonenumbers from 'libphonenumbers';\n\n// Create an instance of PhoneNumberUtil\nconst phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();\n\n// Get proto buffer format\nconsole.log(phoneUtil.parse('123456', 'US'));\n")))}u.isMDXComponent=!0},154:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},l=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=t,f=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return r?a.a.createElement(f,p(p({ref:n},s),{},{components:r})):a.a.createElement(f,p({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);