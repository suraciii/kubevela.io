(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{173:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return p}));var t=r(3),o=r(7),i=(r(0),r(263)),a={},c={unversionedId:"cli-references/vela_config",id:"version-v0.3.5/cli-references/vela_config",isDocsHomePage:!1,title:"vela_config",description:"vela config",source:"@site/versioned_docs/version-v0.3.5/cli-references/vela_config.md",slug:"/cli-references/vela_config",permalink:"/kubevela.io/docs/cli-references/vela_config",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-v0.3.5/cli-references/vela_config.md",version:"v0.3.5",sidebar:"version-v0.3.5/docs",previous:{title:"Configuring Data/Env in Application",permalink:"/kubevela.io/docs/developer-experience-guide/cli/config-app"},next:{title:"vela_env",permalink:"/kubevela.io/docs/cli-references/vela_env"}},l=[{value:"vela config",id:"vela-config",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],s={toc:l};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"vela-config"},"vela config"),Object(i.b)("p",null,"Manage configurations"),Object(i.b)("h3",{id:"synopsis"},"Synopsis"),Object(i.b)("p",null,"Manage configurations"),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -h, --help   help for config\n")),Object(i.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),Object(i.b)("h3",{id:"see-also"},"SEE ALSO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/kubevela.io/docs/cli-references/vela"},"vela"),"\t - "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/kubevela.io/docs/cli-references/vela_config_del"},"vela config del"),"\t - Delete config"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/kubevela.io/docs/cli-references/vela_config_get"},"vela config get"),"\t - Get data for a config"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/kubevela.io/docs/cli-references/vela_config_ls"},"vela config ls"),"\t - List configs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/kubevela.io/docs/cli-references/vela_config_set"},"vela config set"),"\t - Set data for a config")),Object(i.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}p.isMDXComponent=!0},263:function(e,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},f=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),b=t,d=f["".concat(a,".").concat(b)]||f[b]||u[b]||i;return r?o.a.createElement(d,c(c({ref:n},s),{},{components:r})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);