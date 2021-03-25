(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),i=a(7),o=(a(0),a(263)),r={title:"KubeVela - The Extensible App Platform Based on Open Application Model and Kubernetes",author:"Lei Zhang and Fei Guo",author_title:"CNCF TOC Member/Kubernetes",author_url:"https://github.com/JoelMarcey",author_image_url:"https://avatars.githubusercontent.com/u/1701782?s=200&v=4",tags:["kubevela"],description:"The Extensible App Platform Based on Open Application Model and Kubernetes",image:"https://tva1.sinaimg.cn/large/ad5fbf65gy1glgj5q8inej208g049aa6.jpg",hide_table_of_contents:!1},l={permalink:"/kubevela.io/blog/kubevela-the-extensible-app-platform-based-on-open-application-model-and-kubernetes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/kubevela-the-extensible-app-platform-based-on-open-application-model-and-kubernetes.md",source:"@site/blog/kubevela-the-extensible-app-platform-based-on-open-application-model-and-kubernetes.md",description:"The Extensible App Platform Based on Open Application Model and Kubernetes",date:"2021-03-25T09:47:05.742Z",formattedDate:"March 25, 2021",tags:[{label:"kubevela",permalink:"/kubevela.io/blog/tags/kubevela"}],title:"KubeVela - The Extensible App Platform Based on Open Application Model and Kubernetes",readingTime:7.185,truncated:!1,prevItem:{title:"\u5982\u4f55\u5728 20 \u5206\u949f\u5185\u7ed9\u4f60\u7684 K8s PaaS \u4e0a\u7ebf\u4e00\u4e2a\u65b0\u529f\u80fd",permalink:"/kubevela.io/blog/extend-kubevela-by-cuelang-in-20-mins"}},s=[{value:"Introducing KubeVela",id:"introducing-kubevela",children:[{value:"A Sample Appfile",id:"a-sample-appfile",children:[]},{value:"Behind the Appfile",id:"behind-the-appfile",children:[]}]},{value:"Vela Up",id:"vela-up",children:[]},{value:"KubeVela for Platform Builders",id:"kubevela-for-platform-builders",children:[]},{value:"Not Another PaaS System",id:"not-another-paas-system",children:[]},{value:"Learn More",id:"learn-more",children:[]}],p={toc:s};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"7 Dec 2020 12:33pm, by Lei Zhang and Fei Guo")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/ad5fbf65gy1glgj5q8inej208g049aa6.jpg",alt:"image"})),Object(o.b)("p",null,"Last month at KubeCon+CloudNativeCon 2020, the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/spec"},"Open Application Model (OAM)")," community launched ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/"},"KubeVela"),", an easy-to-use yet highly extensible application platform based on OAM and Kubernetes."),Object(o.b)("p",null,"For developers, KubeVela is an easy-to-use tool that enables you to describe and ship applications to Kubernetes with minimal effort, yet for platform builders, KubeVela serves as a framework that empowers them to create developer-facing yet fully extensible platforms at ease."),Object(o.b)("p",null,"The trend of cloud native technology is moving towards pursuing consistent application delivery across clouds and on-premises infrastructures using Kubernetes as the common abstraction layer. Kubernetes, although excellent in abstracting low-level infrastructure details, does introduce extra complexity to application developers, namely understanding the concepts of pods, port exposing, privilege escalation, resource claims, CRD, and so on. We\u2019ve seen the nontrivial learning curve and the lack of developer-facing abstraction have impacted user experiences, slowed down productivity, led to unexpected errors or misconfigurations in production."),Object(o.b)("p",null,"Abstracting Kubernetes to serve developers\u2019 requirements is a highly opinionated process, and the resultant abstractions would only make sense had the decision-makers been the platform builders. Unfortunately, the platform builders today face the following dilemma: There is no tool or framework for them to easily extend the abstractions if any."),Object(o.b)("p",null,"Thus, many platforms today introduce restricted abstractions and add-on mechanisms despite the extensibility of Kubernetes. This makes easily extending such platforms for developers\u2019 requirements or to wider scenarios almost impossible."),Object(o.b)("p",null,"In the end, developers complain those platforms are too rigid and slow in response to feature requests or improvements. The platform builders do want to help but the engineering effort is daunting: any simple API change in the platform could easily become a marathon negotiation around the opinionated abstraction design."),Object(o.b)("h2",{id:"introducing-kubevela"},"Introducing KubeVela"),Object(o.b)("p",null,"With KubeVela, we aim to solve these two challenges in an approach that separates concerns of developers and platform builders."),Object(o.b)("p",null,"For developers, KubeVela is an easy-to-use yet extensible tool that enables you to describe and deploy microservices applications with minimal effort. And instead of managing a handful of Kubernetes YAML files, a simple docker-compose style ",Object(o.b)("inlineCode",{parentName:"p"},"appfile")," is all you need."),Object(o.b)("h3",{id:"a-sample-appfile"},"A Sample Appfile"),Object(o.b)("p",null,"In this example, we will create a vela.yaml along with your app. This file describes how to build the image, how to deploy the image to Kubernetes, how to access the application and how the system would scale it automatically."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n    express-server:\n      image: oamdev/testapp:v1\n      build:\n        docker:\n          file: Dockerfile\n          contrxt: .\n      cmd: ["node", "server.js"]\n      port: 8080\n      cpu: "0.01"\n\n      route:\n        domain: example.com\n        rules:\n          - path: /testapp\n            rewriteTarget: /\n\n      autoscale:\n        min: 1\n        max: 4\n        cpuPercent: 5\n')),Object(o.b)("p",null,"Just do: ",Object(o.b)("inlineCode",{parentName:"p"},"$ vela up"),", your app will then be alive on  ",Object(o.b)("a",{parentName:"p",href:"https://example.com/testapp"},"https://example.com/testapp"),"."),Object(o.b)("h3",{id:"behind-the-appfile"},"Behind the Appfile"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"appfile")," in KubeVela does not have a fixed schema specification, instead, what you can define in this file is determined by what kind of workload types and traits are available in your platform. These two concepts are core concepts from OAM, in detail:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubevela.io/%23/en/concepts?id=workload-type-amp-trait"},"Workload type"),", which declares the characteristics that runtime infrastructure should take into account in application deployment. In the sample above, it defines a \u201cWeb Service\u201d workload named ",Object(o.b)("inlineCode",{parentName:"li"},"express-server")," as part of your application."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubevela.io/%23/en/concepts?id=workload-type-amp-trait"},"Trait"),", which represents the operation configurations that are attached to an instance of workload type. Traits augment a workload type instance with operational features. In the sample above, it defines a route trait to access the application and an autoscale trait for the CPU based horizontal automatic scaling policy.")),Object(o.b)("p",null,"Whenever a new workload type or trait is added, it would become immediately available to be declared in the ",Object(o.b)("inlineCode",{parentName:"p"},"appfile"),". Let\u2019s say, a new trait named metrics is added, developers could check the schema of this trait by simply ",Object(o.b)("inlineCode",{parentName:"p"},"$ vela show metrics")," and define it in the previous sample ",Object(o.b)("inlineCode",{parentName:"p"},"appfile"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n    express-server:\n      type: webservice\n      image: oamdev/testapp:v1\n      build:\n        docker:\n          file: Dockerfile\n          contrxt: .\n      cmd: ["node", "server.js"]\n      port: 8080\n      cpu: "0.01"\n\n      route:\n        domain: example.com\n        rules:\n          - path: /testapp\n            rewriteTarget: /\n\n      autoscale:\n        min: 1\n        max: 4\n        cpuPercent: 5\n\n      metrices:\n        port: 8080\n        path: "/metrics"\n        scheme: "http"\n        enabled: true\n')),Object(o.b)("h2",{id:"vela-up"},"Vela Up"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"vela up")," command deploys the application defined in ",Object(o.b)("inlineCode",{parentName:"p"},"appfile")," to Kubernetes. After deployment, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"vela status")," to check how to access your application following the ",Object(o.b)("inlineCode",{parentName:"p"},"route")," trait declared in ",Object(o.b)("inlineCode",{parentName:"p"},"appfile"),"."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://tvax2.sinaimg.cn/large/ad5fbf65gy1glf9pyhr42j20la0kiafn.jpg",alt:null})),Object(o.b)("p",null,"Apps deployed with KubeVela will receive a URL (and versioned pre-release URLs) with valid TLS certificate automatically generated via ",Object(o.b)("a",{parentName:"p",href:"https://cert-manager.io/docs/"},"cert-manager"),". KubeVela also provides a set of commands (i.e. ",Object(o.b)("inlineCode",{parentName:"p"},"vela logs, vela exec"),") to best support your application management without becoming a Kubernetes expert. ",Object(o.b)("a",{parentName:"p",href:"https://kubevela.io/%23/en/developers/learn-appfile"},"Learn more about vela up and appfile"),"."),Object(o.b)("h2",{id:"kubevela-for-platform-builders"},"KubeVela for Platform Builders"),Object(o.b)("p",null,"The above experience cannot be achieved without KubeVela\u2019s innovative offerings to the platform builders as an extensible platform engine. These features are the hidden gems that make KubeVela unique. In details, KubeVela relieves the pains of building developer facing platforms on Kubernetes by doing the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Application Centric"),". Behind the appfile, KubeVela enforces \u201capplication\u201d as its main API and all KubeVela\u2019s capabilities serve the applications\u2019 requirements only. This is how KubeVela brings application-centric context to the platform by default and changes building such platforms into working around application architecture."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Extending Natively"),". As mentioned in the developer section, an application described by appfile is composed of various pluggable workload types and operation features (i.e. traits). Capabilities from Kubernetes ecosystem can be added to KubeVela as new workload types or traits through Kubernetes CRD registry mechanism at any time."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Simple yet Extensible User Interface"),". Behind the ",Object(o.b)("inlineCode",{parentName:"li"},"appfile"),", KubeVela uses ",Object(o.b)("a",{parentName:"li",href:"https://github.com/cuelang/cue"},"CUELang")," as the \u201clast mile\u201d abstraction engine between user-facing schema and the control plane objects. KubeVela provides a set of built-in abstractions to start with and the platform builders are free to modify them at any time. Capability adding/updating or abstraction changes will all take effect at runtime, neither recompilation nor redeployment of KubeVela is required.")),Object(o.b)("p",null,"Under the hood, KubeVela core is built on top of Crossplane OAM Kubernetes Runtime with KEDA, Flagger, Prometheus, etc as dependencies, yet its feature pool is \u201cunlimited\u201d and can be extended at any time."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://tva2.sinaimg.cn/large/ad5fbf65gy1glf9sktkdxj20q00dsacl.jpg",alt:null})),Object(o.b)("p",null,"With KubeVela, platform builders now have the tooling support to design and ship any new capabilities with abstractions to end-users with high confidence and low turnaround time. And for a developer, you only need to learn these abstractions, describe the app with them in a single file, and then ship it."),Object(o.b)("h2",{id:"not-another-paas-system"},"Not Another PaaS System"),Object(o.b)("p",null,"Most typical Platform-as-a-Service (PaaS) systems also provide full application management capabilities and aim to improve developer experience and efficiency. In this context, KubeVela shares the same goal."),Object(o.b)("p",null,"Though unlike most typical PaaS systems which are either inextensible or create their own addon systems maintained by their own communities. KubeVela is designed to fully leverage the Kubernetes ecosystems as its capability pool. Hence, there\u2019s no additional addon system introduced in this project. For platform builders, a new capability can be installed in KubeVela at any time by simply registering its API resource to OAM and providing a CUE template. We hope and expect that with the help of the open source community, the number of the KubeVela\u2019s capabilities will grow dramatically over time. ",Object(o.b)("a",{parentName:"p",href:"https://kubevela.io/%23/en/developers/cap-center"},"Learn more about using community capabilities by $vela cap"),"."),Object(o.b)("p",null,"So in a nutshell, KubeVela is a Kubernetes plugin for building application-centric abstractions. It leverages the native Kubernetes extensibility and capabilities to resolve a hard problem \u2013 making application management enjoyable on Kubernetes."),Object(o.b)("h2",{id:"learn-more"},"Learn More"),Object(o.b)("p",null,"KubeVela is incubated by the OAM community as the successor of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/rudr"},"Rudr")," project, while rather than being a reference implementation, KubeVela intends to be an end-to-end implementation that could be used in wider scenarios. The design of KubeVela\u2019s appfile is also part of the experimental attempt in OAM specification to bring a simplified user experience to developers."),Object(o.b)("p",null,"To learn more about KubeVela, please visit KubeVela\u2019s ",Object(o.b)("a",{parentName:"p",href:"https://kubevela.io/"},"documentation site"),". The following content are also good next steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Try out KubeVela following the ",Object(o.b)("a",{parentName:"li",href:"https://kubevela.io/%23/en/quick-start"},"step-by-step tutorial")," in its Quick Start page."),Object(o.b)("li",{parentName:"ul"},"Give us feedback! KubeVela is still in its early stage and we are happy to ask the community for feedback via OAM ",Object(o.b)("a",{parentName:"li",href:"https://gitter.im/oam-dev/community"},"Gitter")," or ",Object(o.b)("a",{parentName:"li",href:"https://cloud-native.slack.com/archives/C01BLQ3HTJA"},"Slack channel"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://kubevela.io/%23/en/platform-engineers/trait"},"Extend KubeVela")," to build your own platforms. If you have an idea for a new workload type, trait or try to build something more complex like a database or AI PaaS with KubeVela, post your idea as a GitHub Issue or propose it to the OAM community, we are eager to know."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/blob/master/CONTRIBUTING.md"},"Contribute to KubeVela"),". KubeVela is initialized by the open source community with ",Object(o.b)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/blob/bbb2c527d96d3e1a0694e2f49b3d1d1168e72c53/OWNERS_ALIASES%23L35"},"bootstrap contributors")," from 8+ different organizations. We intend to donate this project to a neutral foundation as soon as it gets stable.")))}c.isMDXComponent=!0},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),c=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=c(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return a?i.a.createElement(m,l(l({ref:t},p),{},{components:a})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);