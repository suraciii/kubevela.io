(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return d}));var a=r(3),n=r(7),o=(r(0),r(321)),i={title:"Roadmap"},l={unversionedId:"roadmap/2021-03-roadmap",id:"roadmap/2021-03-roadmap",isDocsHomePage:!1,title:"Roadmap",description:"Date: 2021-01-01 to 2021-03-30",source:"@site/docs/roadmap/2021-03-roadmap.md",slug:"/roadmap/2021-03-roadmap",permalink:"/docs/next/roadmap/2021-03-roadmap",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/roadmap/2021-03-roadmap.md",version:"current",lastUpdatedBy:"yangsoon",lastUpdatedAt:1616906659,formattedLastUpdatedAt:"3/28/2021"},p=[{value:"Core Platform",id:"core-platform",children:[]},{value:"User Experience",id:"user-experience",children:[]},{value:"Third-party integrations",id:"third-party-integrations",children:[]}],c={toc:p};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Date: 2021-01-01 to 2021-03-30"),Object(o.b)("h2",{id:"core-platform"},"Core Platform"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add Application object as the deployment unit applied to k8s control plane.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The new Application object will handle CUE template rendering on the server side. So the appfile would be translated to Application object directly without doing client side rendering."),Object(o.b)("li",{parentName:"ul"},"CLI/UI will be updated to replace ApplicationConfiguration and Component objects with Application object."))),Object(o.b)("li",{parentName:"ul"},"Integrate Terraform as one of the core templating engines so that platform builders can add Terraform modules as Workloads/Traits into KubeVela."),Object(o.b)("li",{parentName:"ul"},"Re-architect API Server to have clean API and storage layer as ",Object(o.b)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/APIServer-Catalog.md#2-api-design"},"designed"),"."),Object(o.b)("li",{parentName:"ul"},"Automatically sync Catalog server and display packages information as ",Object(o.b)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/blob/master/design/vela-core/APIServer-Catalog.md#3-catalog-design"},"designed"),"."),Object(o.b)("li",{parentName:"ul"},"Add Rollout CRD to do native Workload and Application level application rollout management."),Object(o.b)("li",{parentName:"ul"},"Support intermediate store (e.g. ConfigMap) and JSON patch operations in data input/output.")),Object(o.b)("h2",{id:"user-experience"},"User Experience"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Rewrite dashboard to support up-to-date Vela object model.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Support dynamic form rendering based on OpenAPI schema generated from Definition objects."),Object(o.b)("li",{parentName:"ul"},"Support displaying pages of applications, capabilities, catalogs."))),Object(o.b)("li",{parentName:"ul"},"Automatically generate reference docs for capabilities and support displaying them in CLI/UI devtools.")),Object(o.b)("h2",{id:"third-party-integrations"},"Third-party integrations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Integrate with S2I (Source2Image) tooling like ",Object(o.b)("a",{parentName:"li",href:"https://github.com/alibaba/derrick"},"Derrick")," to enable more developer-friendly workflow in appfile."),Object(o.b)("li",{parentName:"ul"},"Integrate with Dapr to enable end-to-end microservice application development and deployment workflow.")))}d.isMDXComponent=!0},321:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,s=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?n.a.createElement(s,l(l({ref:t},c),{},{components:r})):n.a.createElement(s,l({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);