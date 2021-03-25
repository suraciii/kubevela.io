(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{184:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(263)),l={title:"Attach Traits"},p={unversionedId:"platform-builder-guide/using-helm/trait",id:"version-v0.3.5/platform-builder-guide/using-helm/trait",isDocsHomePage:!1,title:"Attach Traits",description:"Attach Traits to Helm Based Components",source:"@site/versioned_docs/version-v0.3.5/platform-builder-guide/using-helm/trait.md",slug:"/platform-builder-guide/using-helm/trait",permalink:"/kubevela.io/docs/platform-builder-guide/using-helm/trait",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-v0.3.5/platform-builder-guide/using-helm/trait.md",version:"v0.3.5",sidebar:"version-v0.3.5/docs",previous:{title:"Define Components",permalink:"/kubevela.io/docs/platform-builder-guide/using-helm/component"},next:{title:"Known Limitations",permalink:"/kubevela.io/docs/platform-builder-guide/using-helm/known-issues"}},i=[{value:"Attach Traits to Helm Based Components",id:"attach-traits-to-helm-based-components",children:[]},{value:"Verify traits work correctly",id:"verify-traits-work-correctly",children:[]},{value:"Update an application",id:"update-an-application",children:[]},{value:"Delete a trait",id:"delete-a-trait",children:[]}],c={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"attach-traits-to-helm-based-components"},"Attach Traits to Helm Based Components"),Object(o.b)("p",null,"Most traits in KubeVela can be attached to Helm based component seamlessly. In this sample application below, we add two traits, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/charts/vela-core/templates/defwithtemplate/manualscale.yaml"},"scaler"),"\nand ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/helm-module/virtual-group-td.yaml"},"virtualgroup"),",\nto a Helm based component."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart \n      settings: \n        image:\n          tag: "5.1.2"\n      traits:\n        - name: scaler\n          properties:\n            replicas: 4\n        - name: virtualgroup\n          properties:\n            group: "my-group1"\n            type: "cluster"\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: when use Trait system with Helm module workload, please ",Object(o.b)("em",{parentName:"p"},"make sure the target workload in your Helm chart strictly follows the qualified-full-name convention in Helm.")," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/captainroy-hy/podinfo/blob/c2b9603036f1f033ec2534ca0edee8eff8f5b335/charts/podinfo/templates/deployment.yaml#L4"},"For example in this chart"),", the workload name is composed of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/captainroy-hy/podinfo/blob/c2b9603036f1f033ec2534ca0edee8eff8f5b335/charts/podinfo/templates/_helpers.tpl#L13"},"release name and chart name"),".")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This is because KubeVela relies on the name to discovery the workload, otherwise it cannot apply traits to the workload. KubeVela will generate a release name based on your ",Object(o.b)("inlineCode",{parentName:"p"},"Application")," name and component name automatically, so you need to make sure never override the full name template in your Helm chart.")),Object(o.b)("h2",{id:"verify-traits-work-correctly"},"Verify traits work correctly"),Object(o.b)("p",null,"You may wait a bit more time to check the trait works after deploying the application.\nBecause KubeVela may not discovery the target workload immediately when it's created because of reconciliation interval."),Object(o.b)("p",null,"Check the scaler trait."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get manualscalertrait\nNAME                            AGE\ndemo-podinfo-scaler-d8f78c6fc   13m\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment myapp-demo-podinfo -o json | jq .spec.replicas\n4\n")),Object(o.b)("p",null,"Check the virtualgroup trait."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment myapp-demo-podinfo -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group1",\n  "app.kubernetes.io/name": "myapp-demo-podinfo"\n}\n')),Object(o.b)("h2",{id:"update-an-application"},"Update an application"),Object(o.b)("p",null,"After the application is deployed and workloads/traits are created successfully,\nyou can update the application, and corresponding changes will be applied to the\nworkload."),Object(o.b)("p",null,"Let's make several changes on the configuration of the sample application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart \n      settings: \n        image:\n          tag: "5.1.3" # 5.1.2 => 5.1.3 \n      traits:\n        - name: scaler\n          properties:\n            replicas: 2 # 4 => 2\n        - name: virtualgroup\n          properties:\n            group: "my-group2" # my-group1 => my-group2\n            type: "cluster"\n')),Object(o.b)("p",null,"Apply the new configuration and check the results after several minutes."),Object(o.b)("p",null,"Check the new values(",Object(o.b)("inlineCode",{parentName:"p"},"image.tag = 5.1.3"),") from application's ",Object(o.b)("inlineCode",{parentName:"p"},"settings")," are assigned to the chart."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment myapp-demo-podinfo -o json | jq '.spec.template.spec.containers[0].image'\n\"ghcr.io/stefanprodan/podinfo:5.1.3\"\n")),Object(o.b)("p",null,"Under the hood, Helm makes an upgrade to the release (revision 1 => 2)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ helm ls -A\nNAME                NAMESPACE   REVISION    UPDATED                                 STATUS      CHART           APP VERSION\nmyapp-demo-podinfo  default     2           2021-03-15 08:52:00.037690148 +0000 UTC deployed    podinfo-5.1.4   5.1.4\n")),Object(o.b)("p",null,"Check the scaler trait."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment myapp-demo-podinfo -o json | jq .spec.replicas\n2\n")),Object(o.b)("p",null,"Check the virtualgroup trait."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get deployment myapp-demo-podinfo -o json | jq .spec.template.metadata.labels\n{\n  "app.cluster.virtual.group": "my-group2",\n  "app.kubernetes.io/name": "myapp-demo-podinfo"\n}\n')),Object(o.b)("h2",{id:"delete-a-trait"},"Delete a trait"),Object(o.b)("p",null,"Let's have a try removing a trait from the application."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: Application\nmetadata:\n  name: myapp\n  namespace: default\nspec:\n  components:\n    - name: demo-podinfo \n      type: webapp-chart \n      settings: \n        image:\n          tag: "5.1.3"\n      traits:\n        # - name: scaler\n        #   properties:\n        #    replicas: 2 \n        - name: virtualgroup\n          properties:\n            group: "my-group2"\n            type: "cluster"\n')),Object(o.b)("p",null,"Apply the configuration and check ",Object(o.b)("inlineCode",{parentName:"p"},"manualscalertrait")," has been deleted."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get manualscalertrait\nNo resources found\n")))}s.isMDXComponent=!0},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?r.a.createElement(b,p(p({ref:t},c),{},{components:a})):r.a.createElement(b,p({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);