(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{131:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return c}));var r=t(2),o=t(6),a=(t(0),t(154)),l={id:"format",sidebar_label:"format",title:"format",description:"format | PhoneNumberUtil.format | Libphonenumbers",image:"/img/libphonenumbers-cover.png",keywords:["libphonenumbers","PhoneNumberUtil","PhoneNumberUtil.format","format"],permalink:null,version:"format"},i={id:"format",title:"format",description:"format | PhoneNumberUtil.format | Libphonenumbers",source:"@site/docs/format.md",permalink:"/docs/format",sidebar_label:"format",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"formatInOriginalFormat",permalink:"/docs/formatInOriginalFormat"}},u=[{value:"Usage",id:"usage",children:[]},{value:"PhoneNumberFormat",id:"phonenumberformat",children:[]}],b={rightToc:u};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"format(number, numberFormat) is used to formats a phone number in the specified format using default rules."),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"Using Standard JavaScript:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const PNF = require('libphonenumbers').PhoneNumberFormat;\n// Create an instance of PhoneNumberUtil\nconst phoneUtil = require('libphonenumbers').PhoneNumberUtil.getInstance(); \n\n// Parse number with US country code and keep raw input\nconst number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');\n\n// Format number in the RFC3966 format\nconsole.log(phoneUtil.format(number, PNF.RFC3966));\n// tel:+1-202-456-2121\n\n// Format number in the national format\nconsole.log(phoneUtil.format(number, PNF.NATIONAL));\n// (202) 456-2121\n\n// Format number in the international format\nconsole.log(phoneUtil.format(number, PNF.INTERNATIONAL));\n// +1 202-456-2121\n")),Object(a.b)("p",null,"Using ECMAScript (ES):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import libphonenumbers from 'libphonenumbers';\n\nconst PNF = libphonenumbers.PhoneNumberFormat;\n\n// Create an instance of PhoneNumberUtil\nconst phoneUtil = libphonenumbers.PhoneNumberUtil.getInstance();\n\n// Parse number with US country code and keep raw input\nconst number = phoneUtil.parseAndKeepRawInput('202-456-2121', 'US');\n\n// Format number in the RFC3966 format\nconsole.log(phoneUtil.format(number, PNF.RFC3966));\n// tel:+1-202-456-2121\n\n// Format number in the national format\nconsole.log(phoneUtil.format(number, PNF.NATIONAL));\n// (202) 456-2121\n\n// Format number in the international format\nconsole.log(phoneUtil.format(number, PNF.INTERNATIONAL));\n// +1 202-456-2121\n")),Object(a.b)("h3",{id:"phonenumberformat"},"PhoneNumberFormat"),Object(a.b)("p",null,"The following enums is used to pass to format(number, numberFormat)."),Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Enum"),Object(a.b)("th",{width:"100%"},"Value")),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"E164"),Object(a.b)("td",null,"0")),Object(a.b)("tr",null,Object(a.b)("td",null,"INTERNATIONAL"),Object(a.b)("td",null,"1")),Object(a.b)("tr",null,Object(a.b)("td",null,"NATIONAL"),Object(a.b)("td",null,"2")),Object(a.b)("tr",null,Object(a.b)("td",null,"RFC3966"),Object(a.b)("td",null,"3")))))}c.isMDXComponent=!0},154:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),c=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),m=c(t),s=r,f=m["".concat(l,".").concat(s)]||m[s]||p[s]||a;return t?o.a.createElement(f,i(i({ref:n},b),{},{components:t})):o.a.createElement(f,i({ref:n},b))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<a;b++)l[b]=t[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);