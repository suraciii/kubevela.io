(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{280:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(321)),c={title:"Automatically scale workloads by resource utilization metrics and cron"},i={unversionedId:"developers/extensions/set-autoscale",id:"version-v1.0/developers/extensions/set-autoscale",isDocsHomePage:!1,title:"Automatically scale workloads by resource utilization metrics and cron",description:"Prerequisite",source:"@site/versioned_docs/version-v1.0/developers/extensions/set-autoscale.md",slug:"/developers/extensions/set-autoscale",permalink:"/docs/developers/extensions/set-autoscale",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/developers/extensions/set-autoscale.md",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1618586714,formattedLastUpdatedAt:"4/16/2021"},l=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"Setting cron auto-scaling policy",id:"setting-cron-auto-scaling-policy",children:[]},{value:"Setting auto-scaling policy of CPU resource utilization",id:"setting-auto-scaling-policy-of-cpu-resource-utilization",children:[]}],p={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"prerequisite"},"Prerequisite"),Object(o.b)("p",null,"Make sure auto-scaler trait controller is installed in your cluster"),Object(o.b)("p",null,"Install auto-scaler trait controller with helm"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add helm chart repo for autoscaler trait"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add oam.catalog  http://oam.dev/catalog/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update the chart repo"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install autoscaler trait  controller"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system autoscalertrait oam.catalog/autoscalertrait\n")))),Object(o.b)("p",null,"Autoscale depends on metrics server, please ",Object(o.b)("a",{parentName:"p",href:"../references/devex/faq#autoscale-how-to-enable-metrics-server-in-various-kubernetes-clusters"},"enable it in your Kubernetes cluster")," at the beginning."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: autoscale is one of the extension capabilities ",Object(o.b)("a",{parentName:"p",href:"../cap-center"},"installed from cap center"),",\nplease install it if you can't find it in ",Object(o.b)("inlineCode",{parentName:"p"},"vela traits"),".")),Object(o.b)("h2",{id:"setting-cron-auto-scaling-policy"},"Setting cron auto-scaling policy"),Object(o.b)("p",null,"Introduce how to automatically scale workloads by cron."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Prepare Appfile"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  express-server:\n    # this image will be used in both build and deploy steps\n    image: oamdev/testapp:v1\n\n    cmd: ["node", "server.js"]\n    port: 8080\n\n    autoscale:\n      min: 1\n      max: 4\n      cron:\n        startAt:  "14:00"\n        duration: "2h"\n        days:     "Monday, Thursday"\n        replicas: 2\n        timezone: "America/Los_Angeles"\n')))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The full specification of ",Object(o.b)("inlineCode",{parentName:"p"},"autoscale")," could show up by ",Object(o.b)("inlineCode",{parentName:"p"},"$ vela show autoscale")," or be found on ",Object(o.b)("a",{parentName:"p",href:"../references/traits/autoscale"},"its reference documentation"))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy an application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela up\n  Parsing vela.yaml ...\n  Loading templates ...\n  \n  Rendering configs for service (express-server)...\n  Writing deploy config to (.vela/deploy.yaml)\n  \n  Applying deploy configs ...\n  Checking if app has been deployed...\n  App has not been deployed, creating a new deployment...\n  \u2705 App has been deployed \ud83d\ude80\ud83d\ude80\ud83d\ude80\n      Port forward: vela port-forward testapp\n               SSH: vela exec testapp\n           Logging: vela logs testapp\n        App status: vela status testapp\n    Service status: vela status testapp --svc express-server\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check the replicas and wait for the scaling to take effect"),Object(o.b)("p",{parentName:"li"},"Check the replicas of the application, there is one replica."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    default\n  Created at:   2020-11-05 17:09:02.426632 +0800 CST\n  Updated at:   2020-11-05 17:09:02.426632 +0800 CST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Traits:\n      - \u2705 autoscale: type: cron    replicas(min/max/current): 1/4/1\n    Last Deployment:\n      Created at: 2020-11-05 17:09:03 +0800 CST\n      Updated at: 2020-11-05T17:09:02+08:00\n")),Object(o.b)("p",{parentName:"li"},"Wait till the time clocks ",Object(o.b)("inlineCode",{parentName:"p"},"startAt"),", and check again. The replicas become to two, which is specified as\n",Object(o.b)("inlineCode",{parentName:"p"},"replicas")," in ",Object(o.b)("inlineCode",{parentName:"p"},"vela.yaml"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela status testapp\nAbout:\n\n  Name:         testapp\n  Namespace:    default\n  Created at:   2020-11-10 10:18:59.498079 +0800 CST\n  Updated at:   2020-11-10 10:18:59.49808 +0800 CST\n\nServices:\n\n  - Name: express-server\n    Type: webservice\n    HEALTHY Ready: 2/2\n    Traits:\n      - \u2705 autoscale: type: cron    replicas(min/max/current): 1/4/2\n    Last Deployment:\n      Created at: 2020-11-10 10:18:59 +0800 CST\n      Updated at: 2020-11-10T10:18:59+08:00\n")),Object(o.b)("p",{parentName:"li"},"Wait after the period ends, the replicas will be one eventually."))),Object(o.b)("h2",{id:"setting-auto-scaling-policy-of-cpu-resource-utilization"},"Setting auto-scaling policy of CPU resource utilization"),Object(o.b)("p",null,"Introduce how to automatically scale workloads by CPU resource utilization."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Prepare Appfile"),Object(o.b)("p",{parentName:"li"},"Modify ",Object(o.b)("inlineCode",{parentName:"p"},"vela.yaml")," as below. We add field ",Object(o.b)("inlineCode",{parentName:"p"},"services.express-server.cpu")," and change the auto-scaling policy\nfrom cron to cpu utilization by updating filed ",Object(o.b)("inlineCode",{parentName:"p"},"services.express-server.autoscale"),"."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n  express-server:\n    image: oamdev/testapp:v1\n      \n    cmd: ["node", "server.js"]\n    port: 8080\n    cpu: "0.01"\n\n    autoscale:\n      min: 1\n      max: 5\n      cpuPercent: 10\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy an application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ vela up\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Expose the service entrypoint of the application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela port-forward helloworld 80\nForwarding from 127.0.0.1:80 -> 80\nForwarding from [::1]:80 -> 80\n\nForward successfully! Opening browser ...\nHandling connection for 80\nHandling connection for 80\nHandling connection for 80\nHandling connection for 80\n")),Object(o.b)("p",{parentName:"li"},"On your macOS, you might need to add ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," ahead of the command.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Monitor the replicas changing"),Object(o.b)("p",{parentName:"li"},"Continue to monitor the replicas changing when the application becomes overloaded. You can use Apache HTTP server\nbenchmarking tool ",Object(o.b)("inlineCode",{parentName:"p"},"ab")," to mock many requests to the application."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ ab -n 10000 -c 200 http://127.0.0.1/\nThis is ApacheBench, Version 2.3 <$Revision: 1843412 $>\nCopyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/\nLicensed to The Apache Software Foundation, http://www.apache.org/\n\nBenchmarking 127.0.0.1 (be patient)\nCompleted 1000 requests\n")),Object(o.b)("p",{parentName:"li"},"The replicas gradually increase from one to four."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela status helloworld --svc frontend\nAbout:\n\n  Name:         helloworld\n  Namespace:    default\n  Created at:   2020-11-05 20:07:21.830118 +0800 CST\n  Updated at:   2020-11-05 20:50:42.664725 +0800 CST\n\nServices:\n\n  - Name: frontend\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Traits:\n      - \u2705 autoscale: type: cpu     cpu-utilization(target/current): 5%/10%  replicas(min/max/current): 1/5/2\n    Last Deployment:\n      Created at: 2020-11-05 20:07:23 +0800 CST\n      Updated at: 2020-11-05T20:50:42+08:00\n")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"$ vela status helloworld --svc frontend\nAbout:\n\n  Name:         helloworld\n  Namespace:    default\n  Created at:   2020-11-05 20:07:21.830118 +0800 CST\n  Updated at:   2020-11-05 20:50:42.664725 +0800 CST\n\nServices:\n\n  - Name: frontend\n    Type: webservice\n    HEALTHY Ready: 1/1\n    Traits:\n      - \u2705 autoscale: type: cpu     cpu-utilization(target/current): 5%/14%  replicas(min/max/current): 1/5/4\n    Last Deployment:\n      Created at: 2020-11-05 20:07:23 +0800 CST\n      Updated at: 2020-11-05T20:50:42+08:00\n")),Object(o.b)("p",{parentName:"li"},"Stop ",Object(o.b)("inlineCode",{parentName:"p"},"ab")," tool, and the replicas will decrease to one eventually."))))}s.isMDXComponent=!0},321:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);