(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return i}));var r=n(2),o=n(6),u=(n(0),n(154)),c={id:"getCountryCodeSource",sidebar_label:"getCountryCodeSource",title:"getCountryCodeSource",description:"getCountryCodeSource | PhoneNumber.getCountryCodeSource | Libphonenumbers",image:"/img/libphonenumbers-cover.png",keywords:["libphonenumbers","PhoneNumber","PhoneNumber.getCountryCodeSource","getCountryCodeSource"],permalink:null,version:"getCountryCodeSource"},l={id:"getCountryCodeSource",title:"getCountryCodeSource",description:"getCountryCodeSource | PhoneNumber.getCountryCodeSource | Libphonenumbers",source:"@site/docs/getCountryCodeSource.md",permalink:"/docs/getCountryCodeSource",sidebar_label:"getCountryCodeSource",sidebar:"someSidebar",previous:{title:"getCountryCode",permalink:"/docs/getCountryCode"},next:{title:"getExtension",permalink:"/docs/getExtension"}},a=[{value:"Usage",id:"usage",children:[]},{value:"CountryCodeSource",id:"countrycodesource",children:[]}],b={rightToc:a};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"getCountryCodeSource() is used to gets the value of the country code source."),Object(u.b)("h3",{id:"usage"},"Usage"),Object(u.b)("p",null,"Using Standard JavaScript:"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Create an instance of PhoneNumberUtil\nconst phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); \n\n// Parse number with US country code and keep raw input\nconst number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');\n\n// Get the phone's extension\nconsole.log(number.getCountryCodeSource());\n// FROM_DEFAULT_COUNTRY\n")),Object(u.b)("p",null,"Using ECMAScript (ES):"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import libphonenumbers from 'libphonenumbers';\n\n// Create an instance of PhoneNumberUtil\nconst phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();\n\n// Parse number with US country code and keep raw input\nconst number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');\n\n// Print the phone's extension\nconsole.log(number.getCountryCodeSource());\n// FROM_DEFAULT_COUNTRY\n")),Object(u.b)("h3",{id:"countrycodesource"},"CountryCodeSource"),Object(u.b)("p",null,"The following enums is used to compare with the output of getCountryCodeSource()."),Object(u.b)("table",null,Object(u.b)("tr",null,Object(u.b)("th",null,"Enum"),Object(u.b)("th",{width:"100%"},"Value")),Object(u.b)("tbody",null,Object(u.b)("tr",null,Object(u.b)("td",null,"UNSPECIFIED"),Object(u.b)("td",null,"0")),Object(u.b)("tr",null,Object(u.b)("td",null,"FROM_NUMBER_WITH_PLUS_SIGN"),Object(u.b)("td",null,"1")),Object(u.b)("tr",null,Object(u.b)("td",null,"FROM_NUMBER_WITH_IDD"),Object(u.b)("td",null,"5")),Object(u.b)("tr",null,Object(u.b)("td",null,"FROM_NUMBER_WITHOUT_PLUS_SIGN"),Object(u.b)("td",null,"10")),Object(u.b)("tr",null,Object(u.b)("td",null,"FROM_DEFAULT_COUNTRY"),Object(u.b)("td",null,"20")))))}i.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),i=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,O=p["".concat(c,".").concat(d)]||p[d]||s[d]||u;return n?o.a.createElement(O,l(l({ref:t},b),{},{components:n})):o.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,c=new Array(u);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<u;b++)c[b]=n[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);