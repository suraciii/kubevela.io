(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(263)),o={title:"Core Concepts"},c={unversionedId:"overview/concepts",id:"version-v0.3.5/overview/concepts",isDocsHomePage:!1,title:"Core Concepts",description:'"KubeVela is a scalable way to create PaaS-like experience on Kubernetes"',source:"@site/versioned_docs/version-v0.3.5/overview/concepts.md",slug:"/overview/concepts",permalink:"/kubevela.io/docs/overview/concepts",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-v0.3.5/overview/concepts.md",version:"v0.3.5",sidebar:"version-v0.3.5/docs",previous:{title:"Introduction",permalink:"/kubevela.io/docs/"},next:{title:"Install",permalink:"/kubevela.io/docs/getting-started/install"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Application",id:"application",children:[{value:"Components",id:"components",children:[]},{value:"Traits",id:"traits",children:[]}]},{value:"Definitions",id:"definitions",children:[]},{value:"Environment",id:"environment",children:[{value:"Summary",id:"summary",children:[]}]},{value:"Architecture",id:"architecture",children:[]}],s={toc:l};function p(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},'"KubeVela is a scalable way to create PaaS-like experience on Kubernetes"')),Object(r.b)("p",null,"In this documentation, we will explain the core idea of KubeVela and clarify some technical terms that are widely used in the project."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"First of all, KubeVela introduces a workflow with separate of concerns as below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Platform Team"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Defining templates for deployment environments and reusable capability modules to compose an application, and registering them into the cluster."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"End Users"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Choose a deployment environment, model and assemble the app with available modules, and deploy the app to target environment.")))),Object(r.b)("p",null,"Below is how this workflow looks like:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt",src:n(365).default})),Object(r.b)("p",null,"This template based workflow make it possible for platform team enforce best practices and deployment confidence with a set of Kubernetes CRDs, and give end users a ",Object(r.b)("em",{parentName:"p"},"PaaS-like")," experience (",Object(r.b)("em",{parentName:"p"},"i.e. app-centric, higher level abstractions, self-service operations etc"),") by natural."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt",src:n(366).default})),Object(r.b)("p",null,"Below are the core building blocks in KubeVela that make this happen."),Object(r.b)("h2",{id:"application"},"Application"),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"Application")," is the core API of KubeVela. It allows developers to work with a single artifact to capture the complete application definition with simplified primitives."),Object(r.b)("p",null,'Having an "application" concept is important to for any app-centric platform to simplify administrative tasks and can serve as an anchor to avoid configuration drifts during operation. Also, as an abstraction object, ',Object(r.b)("inlineCode",{parentName:"p"},"Application"),' provides a much simpler path for on-boarding Kubernetes capabilities without relying on low level details. For example, a developer will be able to model a "web service" without defining a detailed Kubernetes Deployment + Service combo each time, or claim the auto-scaling requirements without referring to the underlying KEDA ScaleObject.'),Object(r.b)("p",null,"An example of ",Object(r.b)("inlineCode",{parentName:"p"},"website")," application with two components (i.e. ",Object(r.b)("inlineCode",{parentName:"p"},"frontend")," and ",Object(r.b)("inlineCode",{parentName:"p"},"backend"),") could be modeled as below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: backend\n      type: worker\n      settings:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n    - name: frontend\n      type: webservice\n      settings:\n        image: nginx\n      traits:\n        - name: autoscaler\n          properties:\n            min: 1\n            max: 10\n        - name: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n')),Object(r.b)("h3",{id:"components"},"Components"),Object(r.b)("p",null,"For each of the components in ",Object(r.b)("inlineCode",{parentName:"p"},"Application"),", its ",Object(r.b)("inlineCode",{parentName:"p"},".type")," field references the detailed definition of this component (such as its workload type, template, parameters, etc.), and ",Object(r.b)("inlineCode",{parentName:"p"},".settings")," are the user input values to instantiate it. Some typical component types are ",Object(r.b)("em",{parentName:"p"},"Long Running Web Service"),", ",Object(r.b)("em",{parentName:"p"},"One-time Off Task")," or ",Object(r.b)("em",{parentName:"p"},"Redis Database"),"."),Object(r.b)("p",null,"All supported component types expected to be pre-installed in the platform, or provided by component providers such as 3rd-party software vendors."),Object(r.b)("h3",{id:"traits"},"Traits"),Object(r.b)("p",null,"Optionally, each component has a ",Object(r.b)("inlineCode",{parentName:"p"},".traits")," section that augments its component instance with operational behaviors such as load balancing policy, network ingress routing, auto-scaling policies, or upgrade strategies, etc."),Object(r.b)("p",null,"Essentially, traits are operational features provided by the platform, note that KubeVela allows users bring their own traits as well. To attach a trait, use ",Object(r.b)("inlineCode",{parentName:"p"},".name")," field to reference the specific trait definition, and ",Object(r.b)("inlineCode",{parentName:"p"},".properties")," field to set detailed configuration values of the given trait."),Object(r.b)("p",null,"We also reference component types and traits as ",Object(r.b)("em",{parentName:"p"},'"capabilities"')," in KubeVela. "),Object(r.b)("h2",{id:"definitions"},"Definitions"),Object(r.b)("p",null,"Both the schemas of workload settings and trait properties in ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," are enforced by a set of definition objects. The platform teams or component providers are responsible for registering and managing definition objects in target cluster following ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oam-dev/spec/blob/master/4.workload_types.md"},"workload definition")," and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/oam-dev/spec/blob/master/6.traits.md"},"trait definition")," specifications in Open Application Model (OAM). "),Object(r.b)("p",null,"Specifically, definition object carries the templating information of this capability. Currently, KubeVela supports ",Object(r.b)("a",{parentName:"p",href:"http://helm.sh/"},"Helm")," charts and ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cuelang/cue"},"CUE")," modules as definitions which means you could use KubeVela to deploy Helm charts and CUE modules as application components, or claim them as traits. More capability types support such as ",Object(r.b)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," is also work in progress."),Object(r.b)("h2",{id:"environment"},"Environment"),Object(r.b)("p",null,'Before releasing an application to production, it\'s important to test the code in testing/staging workspaces. In KubeVela, we describe these workspaces as "deployment environments" or "environments" for short. Each environment has its own configuration (e.g., domain, Kubernetes cluster and namespace, configuration data, access control policy, etc.) to allow user to create different deployment environments such as "test" and "production".'),Object(r.b)("p",null,"Currently, a KubeVela ",Object(r.b)("inlineCode",{parentName:"p"},"environment")," only maps to a Kubernetes namespace, while the cluster level environment is work in progress."),Object(r.b)("h3",{id:"summary"},"Summary"),Object(r.b)("p",null,"The main concepts of KubeVela could be shown as below:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt",src:n(367).default})),Object(r.b)("h2",{id:"architecture"},"Architecture"),Object(r.b)("p",null,"The overall architecture of KubeVela is shown as below:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt",src:n(368).default})),Object(r.b)("p",null,"Specifically, the application controller is responsible for application abstraction and encapsulation (i.e. the controller for ",Object(r.b)("inlineCode",{parentName:"p"},"Application")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Definition"),"). The rollout controller will handle progressive rollout strategy with the whole application as a unit. The multi-env deployment engine (",Object(r.b)("em",{parentName:"p"},"currently WIP"),") is responsible for deploying the application across multiple clusters and environments. "))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},365:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/how-it-works-d3a4656697cc2b675b2bd9cf4b976b00.png"},366:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/what-is-kubevela-a09ccecf03f294a9c6c77097f968b28d.png"},367:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/concepts-84a610940144e6aa2a28e883696d1e93.png"},368:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/arch-1efdc8150f5a3a05a9b9c3a331210cf6.png"}}]);