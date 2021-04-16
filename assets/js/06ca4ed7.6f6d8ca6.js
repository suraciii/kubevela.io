(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{321:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return t?r.a.createElement(b,s(s({ref:n},p),{},{components:t})):r.a.createElement(b,s({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(7),i=(t(0),t(321)),o={title:"How-to"},s={unversionedId:"cue/trait",id:"version-v1.0/cue/trait",isDocsHomePage:!1,title:"How-to",description:"In this section we will introduce how to define a trait.",source:"@site/versioned_docs/version-v1.0/cue/trait.md",slug:"/cue/trait",permalink:"/docs/cue/trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/cue/trait.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1618586714,formattedLastUpdatedAt:"4/16/2021",sidebar:"version-v1.0/docs",previous:{title:"Crossplane",permalink:"/docs/platform-engineers/cloud-services"},next:{title:"Patch Traits",permalink:"/docs/cue/patch-trait"}},c=[{value:"Simple Trait",id:"simple-trait",children:[]},{value:"Using CUE as Trait Schematic",id:"using-cue-as-trait-schematic",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section we will introduce how to define a trait."),Object(i.b)("h2",{id:"simple-trait"},"Simple Trait"),Object(i.b)("p",null,"A trait in KubeVela can be defined by simply reference a existing Kubernetes API resource."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  definitionRef:\n    name: ingresses.networking.k8s.io\n")),Object(i.b)("p",null,"Let's attach this trait to a component instance in ",Object(i.b)("inlineCode",{parentName:"p"},"Application"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            rules:\n            - http:\n                paths:\n                - path: /testpath\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: test\n                      port:\n                        number: 80\n")),Object(i.b)("p",null,"Note that in this case, all fields in the referenced resource's ",Object(i.b)("inlineCode",{parentName:"p"},"spec")," will be exposed to end user and no metadata (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"annotations")," etc) are allowed to be set trait properties. Hence this approach is normally used when you want to bring your own CRD and controller as a trait, and it dose not rely on ",Object(i.b)("inlineCode",{parentName:"p"},"annotations")," etc as tuning knobs."),Object(i.b)("h2",{id:"using-cue-as-trait-schematic"},"Using CUE as Trait Schematic"),Object(i.b)("p",null,"The recommended approach is defining a CUE based schematic for trait as well. In this case, it comes with abstraction and you have full flexibility to templating any resources and fields as you want. Note that KubeVela requires all traits MUST be defined in ",Object(i.b)("inlineCode",{parentName:"p"},"outputs")," section (not ",Object(i.b)("inlineCode",{parentName:"p"},"output"),") in CUE template with format as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cue"},"outputs: <unique-name>: \n  <full template data>\n")),Object(i.b)("p",null,"Below is an example for ",Object(i.b)("inlineCode",{parentName:"p"},"ingress")," trait."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  podDisruptive: false\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            domain: string\n            http: [string]: int\n        }\n\n        // trait template can have multiple outputs in one trait\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            spec: {\n                selector:\n                    app: context.name\n                ports: [\n                    for k, v in parameter.http {\n                        port:       v\n                        targetPort: v\n                    },\n                ]\n            }\n        }\n\n        outputs: ingress: {\n            apiVersion: "networking.k8s.io/v1beta1"\n            kind:       "Ingress"\n            metadata:\n                name: context.name\n            spec: {\n                rules: [{\n                    host: parameter.domain\n                    http: {\n                        paths: [\n                            for k, v in parameter.http {\n                                path: k\n                                backend: {\n                                    serviceName: context.name\n                                    servicePort: v\n                                }\n                            },\n                        ]\n                    }\n                }]\n            }\n        }\n')),Object(i.b)("p",null,"Let's attach this trait to a component instance in ",Object(i.b)("inlineCode",{parentName:"p"},"Application"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            domain: test.my.domain\n            http:\n              "/api": 8080\n')),Object(i.b)("p",null,"CUE based trait definitions can also enable many other advanced scenarios such as patching and data passing. They will be explained in detail in the following documentations."))}l.isMDXComponent=!0}}]);