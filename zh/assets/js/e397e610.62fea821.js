(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{229:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),l=(a(0),a(263)),i=a(297),s=a(298),c={title:"Install"},o={unversionedId:"getting-started/install",id:"getting-started/install",isDocsHomePage:!1,title:"Install",description:"1. Setup Kubernetes cluster",source:"@site/docs/getting-started/install.mdx",slug:"/getting-started/install",permalink:"/kubevela.io/zh/docs/next/getting-started/install",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/install.mdx",version:"current",sidebar:"docs",previous:{title:"Core Concepts",permalink:"/kubevela.io/zh/docs/next/overview/concepts"},next:{title:"Quick Start",permalink:"/kubevela.io/zh/docs/next/getting-started/quick-start"}},b=[{value:"1. Setup Kubernetes cluster",id:"1-setup-kubernetes-cluster",children:[]},{value:"2. Install KubeVela Controller",id:"2-install-kubevela-controller",children:[]},{value:"3. (Optional) Get KubeVela CLI",id:"3-optional-get-kubevela-cli",children:[]},{value:"4. (Optional) Sync Capability from Cluster",id:"4-optional-sync-capability-from-cluster",children:[]},{value:"5. (Optional) Clean Up",id:"5-optional-clean-up",children:[]}],p={toc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"1-setup-kubernetes-cluster"},"1. Setup Kubernetes cluster"),Object(l.b)("p",null,"Requirements:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Kubernetes cluster >= v1.15.0"),Object(l.b)("li",{parentName:"ul"},"kubectl installed and configured")),Object(l.b)("p",null,"If you don't have K8s cluster from Cloud Provider, you may pick either Minikube or KinD as local cluster testing option."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"NOTE: If you are not using minikube or kind, please make sure to ",Object(l.b)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"install or enable ingress-nginx")," by yourself.")),Object(l.b)(i.a,{className:"unique-tabs",defaultValue:"minikube",values:[{label:"Minikube",value:"minikube"},{label:"KinD",value:"kind"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"minikube",mdxType:"TabItem"},"Follow the minikube [installation guide](https://minikube.sigs.k8s.io/docs/start/).",Object(l.b)("p",null,"Once minikube is installed, create a cluster:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),Object(l.b)("p",null,"Install ingress:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n"))),Object(l.b)(s.a,{value:"kind",mdxType:"TabItem"},Object(l.b)("p",null,"Follow ",Object(l.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"this guide")," to install kind."),Object(l.b)("p",null,"Then spins up a kind cluster:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),Object(l.b)("p",null,"Then install ",Object(l.b)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx"},"ingress for kind"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),Object(l.b)("h2",{id:"2-install-kubevela-controller"},"2. Install KubeVela Controller"),Object(l.b)("p",null,"These steps will install KubeVela controller and its dependency."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Add helm chart repo for KubeVela"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://kubevelacharts.oss-cn-hangzhou.aliyuncs.com/core\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Update the chart repo"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Install KubeVela"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core\n")),Object(l.b)("p",{parentName:"li"}," By default, it will enable the webhook with a self-signed certificate provided by ",Object(l.b)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"kube-webhook-certgen")),Object(l.b)("p",{parentName:"li"}," If you want to try the latest master branch, add flag ",Object(l.b)("inlineCode",{parentName:"p"},"--devel")," in command ",Object(l.b)("inlineCode",{parentName:"p"},"helm search")," to choose a pre-release\nversion in format ",Object(l.b)("inlineCode",{parentName:"p"},"<next_version>-rc-master")," which means the next release candidate version build on ",Object(l.b)("inlineCode",{parentName:"p"},"master")," branch,\nlike ",Object(l.b)("inlineCode",{parentName:"p"},"0.4.0-rc-master"),"."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm search repo kubevela/vela-core -l --devel\n")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-console"},"    NAME                        CHART VERSION           APP VERSION             DESCRIPTION\n    kubevela/vela-core          0.4.0-rc-master         0.4.0-rc-master         A Helm chart for KubeVela core\n    kubevela/vela-core          0.3.2                   0.3.2                   A Helm chart for KubeVela core\n    kubevela/vela-core          0.3.1                   0.3.1                   A Helm chart for KubeVela core\n")),Object(l.b)("p",{parentName:"li"}," And try the following command to install it."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version <next_version>-rc-master\n")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-console"},'NAME: kubevela\nLAST DEPLOYED: Sat Mar  6 21:03:11 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\n1. Get the application URL by running these commands:\n export POD_NAME=$(kubectl get pods --namespace vela-system -l "app.kubernetes.io/name=vela-core,app.kubernetes.io/instance=kubevela" -o jsonpath="{.items[0].metadata.name}")\n echo "Visit http://127.0.0.1:8080 to use your application"\n kubectl --namespace vela-system port-forward $POD_NAME 8080:80\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Install Kubevela with cert-manager (optional)"),Object(l.b)("p",{parentName:"li"},"If cert-manager has been installed, it can be used to take care about generating certs. "),Object(l.b)("p",{parentName:"li"},"You need to install cert-manager before the kubevela chart."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),Object(l.b)("p",{parentName:"li"}," Install kubevela with enabled certmanager:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system --set admissionWebhooks.certManager.enabled=true kubevela kubevela/vela-core\n")))),Object(l.b)("h2",{id:"3-optional-get-kubevela-cli"},"3. (Optional) Get KubeVela CLI"),Object(l.b)("p",null,"Here are three ways to get KubeVela Cli:"),Object(l.b)(i.a,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"script",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"macOS/Linux")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/install.sh | bash\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Windows")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/install.ps1 | iex"\n'))),Object(l.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"macOS/Linux")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),Object(l.b)(s.a,{value:"download",mdxType:"TabItem"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Download the latest ",Object(l.b)("inlineCode",{parentName:"li"},"vela")," binary from the ",Object(l.b)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"releases page"),"."),Object(l.b)("li",{parentName:"ul"},"Unpack the ",Object(l.b)("inlineCode",{parentName:"li"},"vela")," binary and add it to ",Object(l.b)("inlineCode",{parentName:"li"},"$PATH")," to get started.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Known Issue(",Object(l.b)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"https://github.com/oam-dev/kubevela/issues/625"),"):\nIf you're using mac, it will report that \u201cvela\u201d cannot be opened because the developer cannot be verified."),Object(l.b)("p",{parentName:"blockquote"},"The new version of MacOS is stricter about running software you've downloaded that isn't signed with an Apple developer key. And we haven't supported that for KubeVela yet.",Object(l.b)("br",{parentName:"p"}),"\n","You can open your 'System Preference' -> 'Security & Privacy' -> General, click the 'Allow Anyway' to temporarily fix it.")))),Object(l.b)("h2",{id:"4-optional-sync-capability-from-cluster"},"4. (Optional) Sync Capability from Cluster"),Object(l.b)("p",null,"If you want to run application from ",Object(l.b)("inlineCode",{parentName:"p"},"vela")," cli, then you should sync capabilities first like below:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela workloads\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-console"},"Automatically discover capabilities successfully \u2705 Add(5) Update(0) Delete(0)\n\nTYPE        CATEGORY    DESCRIPTION                                                                     \n+task       workload    Describes jobs that run code or a script to completion.                         \n+webservice workload    Describes long-running, scalable, containerized services that have a stable     \n                    network endpoint to receive external network traffic from customers. If workload\n                    type is skipped for any service defined in Appfile, it will be defaulted to     \n                    `webservice` type.                                                              \n+worker     workload    Describes long-running, scalable, containerized services that running at        \n                    backend. They do NOT have network endpoint to receive external network          \n                    traffic.                                                                        \n+ingress    trait       Configures K8s ingress and service to enable web traffic for your service.      \n                    Please use route trait in cap center for advanced usage.                        \n+scaler     trait       Configures replicas for your service.                                           \n\nNAME        DESCRIPTION                                                                                                             \ntask        Describes jobs that run code or a script to completion.                                                                 \nwebservice  Describes long-running, scalable, containerized services that have a stable network endpoint to receive external network\n            traffic from customers. If workload type is skipped for any service defined in Appfile, it will be defaulted to         \n            `webservice` type.                                                                                                      \nworker      Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to  \n            receive external network traffic.   \n")),Object(l.b)("h2",{id:"5-optional-clean-up"},"5. (Optional) Clean Up"),Object(l.b)("details",null,"Run:",Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall -n vela-system kubevela\nrm -r ~/.vela\n")),Object(l.b)("p",null,"This will uninstall KubeVela server component and its dependency components.\nThis also cleans up local CLI cache."),Object(l.b)("p",null,"Then clean up CRDs (CRDs are not removed via helm by default):"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," kubectl delete crd \\\n  applicationconfigurations.core.oam.dev \\\n  applicationdeployments.core.oam.dev \\\n  autoscalers.standard.oam.dev \\\n  components.core.oam.dev \\\n  containerizedworkloads.core.oam.dev \\\n  healthscopes.core.oam.dev \\\n  issuers.cert-manager.io \\\n  manualscalertraits.core.oam.dev \\\n  metricstraits.standard.oam.dev \\\n  podspecworkloads.standard.oam.dev \\\n  routes.standard.oam.dev \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n"))))}u.isMDXComponent=!0},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return a?r.a.createElement(d,s(s({ref:t},o),{},{components:a})):r.a.createElement(d,s({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},264:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},288:function(e,t,a){"use strict";var n=a(0),r=a(289);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},289:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},297:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(288),i=a(264),s=a(62),c=a.n(s);var o=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(l.a)(),v=d.tabGroupChoices,g=d.setTabGroupChoices,h=Object(n.useState)(s),O=h[0],f=h[1],j=n.Children.toArray(e.children),k=[];if(null!=u){var y=v[u];null!=y&&y!==O&&p.some((function(e){return e.value===y}))&&f(y)}var N=function(e){var t=e.target,a=k.indexOf(t),n=j[a].props.value;f(n),null!=u&&(g(u,n),setTimeout((function(){var e,a,n,r,l,i,s,o;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,o=i.innerWidth,a>=0&&l<=o&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case b:var n=k.indexOf(e.target)+1;a=k[n]||k[0];break;case o:var r=k.indexOf(e.target)-1;a=k[r]||k[k.length-1]}null===(t=a)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:w,onFocus:N,onClick:N},a)}))),t?Object(n.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},298:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);