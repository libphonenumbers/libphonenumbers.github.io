(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{119:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return u}));var r=t(2),o=t(6),a=(t(0),t(133)),i={id:"format",sidebar_label:"format",title:"format",description:"format | PhoneNumberUtil.format | Libphonenumbers",image:"/img/reactpatterns-cover.png",keywords:["libphonenumbers","PhoneNumberUtil","PhoneNumberUtil.format","format"],permalink:null,version:"format"},l={id:"format",title:"format",description:"format | PhoneNumberUtil.format | Libphonenumbers",source:"@site/docs/format.md",permalink:"/docs/format",sidebar_label:"format",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"formatInOriginalFormat",permalink:"/docs/formatInOriginalFormat"}},m=[{value:"Usage",id:"usage",children:[]}],c={rightToc:m};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"format(number, numberFormat) is used to formats a phone number in the specified format using default rules."),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"Using Standard JavaScript:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const PNF = require('libphonenumbers').PhoneNumberFormat;\n// Create an instance of PhoneNumberUtil\nconst phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); \n\n// Parse number with US country code and keep raw input\nconst number = phoneUtil.parseAndKeepRawInput('300-577-8989', 'US');\n\n// Format number in the RFC3966 format\nconsole.log(phoneUtil.format(number, PNF.RFC3966));\n// => tel:+1-300-577-8989\n\n// Format number in the national format\nconsole.log(phoneUtil.format(number, PNF.NATIONAL));\n// => (300) 577-8989\n\n// Format number in the international format\nconsole.log(phoneUtil.format(number, PNF.INTERNATIONAL));\n// => +1 300-577-8989\n")),Object(a.b)("p",null,"Using ECMAScript (ES):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import libphonenumbers from 'libphonenumbers';\n\nconst PNF = libphonenumbers.PhoneNumberFormat;\n\n// Create an instance of PhoneNumberUtil\nconst phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();\n\n// Parse number with US country code and keep raw input\nconst number = phoneUtil.parseAndKeepRawInput('300-577-8989', 'US');\n\n// Format number in the RFC3966 format\nconsole.log(phoneUtil.format(number, PNF.RFC3966));\n// => tel:+1-300-577-8989\n\n// Format number in the national format\nconsole.log(phoneUtil.format(number, PNF.NATIONAL));\n// => (300) 577-8989\n\n// Format number in the international format\nconsole.log(phoneUtil.format(number, PNF.INTERNATIONAL));\n// => +1 300-577-8989\n")))}u.isMDXComponent=!0},133:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=u(t),s=r,f=p["".concat(i,".").concat(s)]||p[s]||b[s]||a;return t?o.a.createElement(f,l(l({ref:n},c),{},{components:t})):o.a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);