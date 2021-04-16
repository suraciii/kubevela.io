(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),c=(t(0),t(321)),a={title:"KubeVela CLI"},l={unversionedId:"developers/references/devex/cli",id:"version-v1.0/developers/references/devex/cli",isDocsHomePage:!1,title:"KubeVela CLI",description:"Auto-completion",source:"@site/versioned_docs/version-v1.0/developers/references/devex/cli.md",slug:"/developers/references/devex/cli",permalink:"/docs/developers/references/devex/cli",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/references/devex/cli.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1618586714,formattedLastUpdatedAt:"4/16/2021"},i=[{value:"Auto-completion",id:"auto-completion",children:[]}],s={toc:i};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"auto-completion"},"Auto-completion"),Object(c.b)("h4",{id:"bash"},"bash"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"To load completions in your current shell session:\n$ source <(vela completion bash)\n\nTo load completions for every new session, execute once:\nLinux:\n  $ vela completion bash > /etc/bash_completion.d/vela\nMacOS:\n  $ vela completion bash > /usr/local/etc/bash_completion.d/vela\n")),Object(c.b)("h4",{id:"zsh"},"zsh"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'To load completions in your current shell session:\n$ source <(vela completion zsh)\n\nTo load completions for every new session, execute once:\n$ vela completion zsh > "${fpath[1]}/_vela"\n')))}p.isMDXComponent=!0},321:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||c;return t?o.a.createElement(m,l(l({ref:n},s),{},{components:t})):o.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);