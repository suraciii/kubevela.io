(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(263)),l={titile:"Rollout"},o={unversionedId:"capability-references/rollout",id:"version-v0.3.5/capability-references/rollout",isDocsHomePage:!1,title:"rollout",description:"Description",source:"@site/versioned_docs/version-v0.3.5/capability-references/rollout.md",slug:"/capability-references/rollout",permalink:"/kubevela.io/docs/capability-references/rollout",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-v0.3.5/capability-references/rollout.md",version:"v0.3.5"},c=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Conflicts With",id:"conflicts-with",children:[{value:"<code>Autoscale</code>",id:"autoscale",children:[]}]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Configures Canary deployment strategy for your application."),Object(i.b)("h2",{id:"specification"},"Specification"),Object(i.b)("p",null,"List of all configuration options for a ",Object(i.b)("inlineCode",{parentName:"p"},"Rollout")," trait."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'servcies:\n  express-server:\n    ...\n\n    rollout:\n      replicas: 2\n      stepWeight: 50\n      interval: "10s"\n')),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"interval"),Object(i.b)("td",{parentName:"tr",align:null},"Schedule interval time"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"30s")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"stepWeight"),Object(i.b)("td",{parentName:"tr",align:null},"Weight percent of every step in rolling update"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"50")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"replicas"),Object(i.b)("td",{parentName:"tr",align:null},"Total replicas of the workload"),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"true"),Object(i.b)("td",{parentName:"tr",align:null},"2")))),Object(i.b)("h2",{id:"conflicts-with"},"Conflicts With"),Object(i.b)("h3",{id:"autoscale"},Object(i.b)("inlineCode",{parentName:"h3"},"Autoscale")),Object(i.b)("p",null,"When ",Object(i.b)("inlineCode",{parentName:"p"},"Rollout")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Autoscle")," traits are attached to the same service, they two will fight over the number of instances during rollout. Thus, it's by design that ",Object(i.b)("inlineCode",{parentName:"p"},"Rollout")," will take over replicas control (specified by ",Object(i.b)("inlineCode",{parentName:"p"},".replicas")," field) during rollout."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: in up coming releases, KubeVela will introduce a separate section in Appfile to define release phase configurations such as ",Object(i.b)("inlineCode",{parentName:"p"},"Rollout"),".")))}b.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?a.a.createElement(f,o(o({ref:t},p),{},{components:n})):a.a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);