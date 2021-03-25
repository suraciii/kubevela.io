(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),c=(a(0),a(263)),r={title:"Managing Capabilities"},l={unversionedId:"developer-experience-guide/cli/cap-center",id:"version-v0.3.5/developer-experience-guide/cli/cap-center",isDocsHomePage:!1,title:"Managing Capabilities",description:"Managing Capabilities",source:"@site/versioned_docs/version-v0.3.5/developer-experience-guide/cli/cap-center.md",slug:"/developer-experience-guide/cli/cap-center",permalink:"/kubevela.io/zh/docs/developer-experience-guide/cli/cap-center",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-v0.3.5/developer-experience-guide/cli/cap-center.md",version:"v0.3.5",sidebar:"version-v0.3.5/docs",previous:{title:"Execute Commands in Container",permalink:"/kubevela.io/zh/docs/developer-experience-guide/cli/exec-cmd"},next:{title:"Setting Up Deployment Environment",permalink:"/kubevela.io/zh/docs/developer-experience-guide/cli/config-enviroments"}},o=[{value:"Managing Capabilities",id:"managing-capabilities",children:[]},{value:"Add a capability center",id:"add-a-capability-center",children:[]},{value:"List capability centers",id:"list-capability-centers",children:[]},{value:"Optional Remove a capability center",id:"optional-remove-a-capability-center",children:[]},{value:"List all available capabilities in capability center",id:"list-all-available-capabilities-in-capability-center",children:[]},{value:"Install a capability from capability center",id:"install-a-capability-from-capability-center",children:[]},{value:"Use the newly installed capability",id:"use-the-newly-installed-capability",children:[]},{value:"Uninstall a capability",id:"uninstall-a-capability",children:[]}],b={toc:o};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"managing-capabilities"},"Managing Capabilities"),Object(c.b)("p",null,"In KubeVela, developers can install more capabilities (i.e. new workload types and traits) from any GitHub repo that contains OAM definition files. We call these GitHub repos as ",Object(c.b)("em",{parentName:"p"},"Capability Centers"),". "),Object(c.b)("p",null,"KubeVela is able to discover OAM definition files in this repo automatically and sync them to your own KubeVela platform."),Object(c.b)("h2",{id:"add-a-capability-center"},"Add a capability center"),Object(c.b)("p",null,"Add and sync a capability center in KubeVela:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center config my-center https://github.com/oam-dev/catalog/tree/master/registry\nsuccessfully sync 1/1 from my-center remote center\nSuccessfully configured capability center my-center and sync from remote\n\n$ vela cap center sync my-center\nsuccessfully sync 1/1 from my-center remote center\nsync finished\n")),Object(c.b)("p",null,"Now, this capability center ",Object(c.b)("inlineCode",{parentName:"p"},"my-center")," is ready to use."),Object(c.b)("h2",{id:"list-capability-centers"},"List capability centers"),Object(c.b)("p",null,"You are allowed to add more capability centers and list them."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center ls\nNAME        ADDRESS\nmy-center   https://github.com/oam-dev/catalog/tree/master/registry\n")),Object(c.b)("h2",{id:"optional-remove-a-capability-center"},"[Optional]"," Remove a capability center"),Object(c.b)("p",null,"Or, remove one."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap center remove my-center\n")),Object(c.b)("h2",{id:"list-all-available-capabilities-in-capability-center"},"List all available capabilities in capability center"),Object(c.b)("p",null,"Or, list all available capabilities in certain center."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap ls my-center\nNAME        CENTER      TYPE    DEFINITION                      STATUS      APPLIES-TO\nkubewatch   my-center   trait   kubewatches.labs.bitnami.com    uninstalled []\n")),Object(c.b)("h2",{id:"install-a-capability-from-capability-center"},"Install a capability from capability center"),Object(c.b)("p",null,"Now let's try to install the new trait named ",Object(c.b)("inlineCode",{parentName:"p"},"kubewatch")," from ",Object(c.b)("inlineCode",{parentName:"p"},"my-center")," to your own KubeVela platform."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://github.com/bitnami-labs/kubewatch"},"KubeWatch")," is a Kubernetes plugin that watches events and publishes notifications to Slack channel etc. We can use it as a trait to watch important changes of your app and notify the platform administrators via Slack.")),Object(c.b)("p",null,"Install ",Object(c.b)("inlineCode",{parentName:"p"},"kubewatch")," trait from ",Object(c.b)("inlineCode",{parentName:"p"},"my-center"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'$ vela cap install my-center/kubewatch\nInstalling trait capability kubewatch\n"my-repo" has been added to your repositories\n2020/11/06 16:19:30 [debug] creating 1 resource(s)\n2020/11/06 16:19:30 [debug] CRD kubewatches.labs.bitnami.com is already present. Skipping.\n2020/11/06 16:19:37 [debug] creating 3 resource(s)\nSuccessfully installed chart (kubewatch) with release name (kubewatch)\nSuccessfully installed capability kubewatch from my-center\n')),Object(c.b)("h2",{id:"use-the-newly-installed-capability"},"Use the newly installed capability"),Object(c.b)("p",null,"Let's check the ",Object(c.b)("inlineCode",{parentName:"p"},"kubewatch")," trait appears in your platform firstly:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela traits\nSynchronizing capabilities from cluster\u231b ...\nSync capabilities successfully \u2705 (no changes)\nTYPE        CATEGORY    DESCRIPTION\nkubewatch   trait       Add a watch for resource\n...\n")),Object(c.b)("p",null,"Great! Now let's deploy an app via Appfile."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF > vela.yaml\nname: testapp\nservices:\n  testsvc:\n    type: webservice\n    image: crccheck/hello-world\n    port: 8000\n    route:\n      domain: testsvc.example.com\nEOF\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n")),Object(c.b)("p",null,"Then let's add ",Object(c.b)("inlineCode",{parentName:"p"},"kubewatch")," as a trait in this Appfile."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ cat << EOF >> vela.yaml\n    kubewatch:\n      webhook: https://hooks.slack.com/<your-token>\nEOF\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"The ",Object(c.b)("inlineCode",{parentName:"p"},"https://hooks.slack.com/<your-token>")," is the Slack channel that your platform administrators are keeping an eye on.")),Object(c.b)("p",null,"Update the deployment:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"$ vela up\n")),Object(c.b)("p",null,"Now, your platform administrators should receive notifications whenever important changes happen to your app. For example, a fresh new deployment."),Object(c.b)("p",null,Object(c.b)("img",{alt:"Image of Kubewatch",src:a(369).default})),Object(c.b)("h2",{id:"uninstall-a-capability"},"Uninstall a capability"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"NOTE: make sure no apps are using the capability before uninstalling.")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ vela cap uninstall my-center/kubewatch\nSuccessfully removed chart (kubewatch) with release name (kubewatch)\n")))}p.isMDXComponent=!0},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,m=s["".concat(r,".").concat(d)]||s[d]||u[d]||c;return a?i.a.createElement(m,l(l({ref:t},b),{},{components:a})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var b=2;b<c;b++)r[b]=a[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},369:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/kubewatch-notif-fb69c2e860b7a8082f83d1415aafccba.jpg"}}]);