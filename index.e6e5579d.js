let t,e,i;var o,s=globalThis,n={type:"scroll",speed:.5,containerClass:"jarallax-container",imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null,videoClass:"jarallax-video",videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,disableVideo:!1,onVideoInsert:null,onVideoWorkerInit:null},a="undefined"!=typeof window?window:void 0!==s?s:"undefined"!=typeof self?self:{};const{navigator:l}=a,r=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(l.userAgent);function h(){t=a.innerWidth||document.documentElement.clientWidth,r?(!i&&document.body&&((i=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(i)),e=(i?i.clientHeight:0)||a.innerHeight||document.documentElement.clientHeight):e=a.innerHeight||document.documentElement.clientHeight}function m(){return{width:t,height:e}}h(),a.addEventListener("resize",h),a.addEventListener("orientationchange",h),a.addEventListener("load",h),o=()=>{h()},"complete"===document.readyState||"interactive"===document.readyState?o():document.addEventListener("DOMContentLoaded",o,{capture:!0,once:!0,passive:!0});const p=[];function d(){if(!p.length)return;let{width:t,height:e}=m();p.forEach((i,o)=>{let{instance:s,oldData:n}=i;if(!s.isVisible())return;let a=s.$item.getBoundingClientRect(),l={width:a.width,height:a.height,top:a.top,bottom:a.bottom,wndW:t,wndH:e},r=!n||n.wndW!==l.wndW||n.wndH!==l.wndH||n.width!==l.width||n.height!==l.height,h=r||!n||n.top!==l.top||n.bottom!==l.bottom;p[o].oldData=l,r&&s.onResize(),h&&s.onScroll()}),a.requestAnimationFrame(d)}const c=new a.IntersectionObserver(t=>{t.forEach(t=>{t.target.jarallax.isElementInViewport=t.isIntersecting})},{rootMargin:"50px"}),{navigator:g}=a;let u=0;class f{constructor(t,e){let i=this;i.instanceID=u,u+=1,i.$item=t,i.defaults={...n};let o=i.$item.dataset||{},s={};if(Object.keys(o).forEach(t=>{let e=t.substr(0,1).toLowerCase()+t.substr(1);e&&void 0!==i.defaults[e]&&(s[e]=o[t])}),i.options=i.extend({},i.defaults,s,e),i.pureOptions=i.extend({},i.options),Object.keys(i.options).forEach(t=>{"true"===i.options[t]?i.options[t]=!0:"false"===i.options[t]&&(i.options[t]=!1)}),i.options.speed=Math.min(2,Math.max(-1,parseFloat(i.options.speed))),"string"==typeof i.options.disableParallax&&(i.options.disableParallax=new RegExp(i.options.disableParallax)),i.options.disableParallax instanceof RegExp){let t=i.options.disableParallax;i.options.disableParallax=()=>t.test(g.userAgent)}if("function"!=typeof i.options.disableParallax&&(i.options.disableParallax=()=>!1),"string"==typeof i.options.disableVideo&&(i.options.disableVideo=new RegExp(i.options.disableVideo)),i.options.disableVideo instanceof RegExp){let t=i.options.disableVideo;i.options.disableVideo=()=>t.test(g.userAgent)}"function"!=typeof i.options.disableVideo&&(i.options.disableVideo=()=>!1);let a=i.options.elementInViewport;a&&"object"==typeof a&&void 0!==a.length&&([a]=a),a instanceof Element||(a=null),i.options.elementInViewport=a,i.image={src:i.options.imgSrc||null,$container:null,useImgTag:!1,position:"fixed"},i.initImg()&&i.canInitParallax()&&i.init()}css(t,e){return"string"==typeof e?a.getComputedStyle(t).getPropertyValue(e):(Object.keys(e).forEach(i=>{t.style[i]=e[i]}),t)}extend(t,...e){return function(t,...e){return t=t||{},Object.keys(e).forEach(i=>{e[i]&&Object.keys(e[i]).forEach(o=>{t[o]=e[i][o]})}),t}(t,...e)}getWindowData(){let{width:t,height:e}=m();return{width:t,height:e,y:document.documentElement.scrollTop}}initImg(){let t=this.options.imgElement;return t&&"string"==typeof t&&(t=this.$item.querySelector(t)),t instanceof Element||(this.options.imgSrc?(t=new Image).src=this.options.imgSrc:t=null),t&&(this.options.keepImg?this.image.$item=t.cloneNode(!0):(this.image.$item=t,this.image.$itemParent=t.parentNode),this.image.useImgTag=!0),!!this.image.$item||(null===this.image.src&&(this.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",this.image.bgImage=this.css(this.$item,"background-image")),!(!this.image.bgImage||"none"===this.image.bgImage))}canInitParallax(){return!this.options.disableParallax()}init(){let t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},e={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden"};if(!this.options.keepImg){let t=this.$item.getAttribute("style");if(t&&this.$item.setAttribute("data-jarallax-original-styles",t),this.image.useImgTag){let t=this.image.$item.getAttribute("style");t&&this.image.$item.setAttribute("data-jarallax-original-styles",t)}}if("static"===this.css(this.$item,"position")&&this.css(this.$item,{position:"relative"}),"auto"===this.css(this.$item,"z-index")&&this.css(this.$item,{zIndex:0}),this.image.$container=document.createElement("div"),this.css(this.image.$container,t),this.css(this.image.$container,{"z-index":this.options.zIndex}),"fixed"===this.image.position&&this.css(this.image.$container,{"-webkit-clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)","clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}),this.image.$container.setAttribute("id",`jarallax-container-${this.instanceID}`),this.options.containerClass&&this.image.$container.setAttribute("class",this.options.containerClass),this.$item.appendChild(this.image.$container),this.image.useImgTag?e=this.extend({"object-fit":this.options.imgSize,"object-position":this.options.imgPosition,"max-width":"none"},t,e):(this.image.$item=document.createElement("div"),this.image.src&&(e=this.extend({"background-position":this.options.imgPosition,"background-size":this.options.imgSize,"background-repeat":this.options.imgRepeat,"background-image":this.image.bgImage||`url("${this.image.src}")`},t,e))),("opacity"===this.options.type||"scale"===this.options.type||"scale-opacity"===this.options.type||1===this.options.speed)&&(this.image.position="absolute"),"fixed"===this.image.position){let t=(function(t){let e=[];for(;null!==t.parentElement;)1===(t=t.parentElement).nodeType&&e.push(t);return e})(this.$item).filter(t=>{let e=a.getComputedStyle(t),i=e["-webkit-transform"]||e["-moz-transform"]||e.transform;return i&&"none"!==i||/(auto|scroll)/.test(e.overflow+e["overflow-y"]+e["overflow-x"])});this.image.position=t.length?"absolute":"fixed"}e.position=this.image.position,this.css(this.image.$item,e),this.image.$container.appendChild(this.image.$item),this.onResize(),this.onScroll(!0),this.options.onInit&&this.options.onInit.call(this),"none"!==this.css(this.$item,"background-image")&&this.css(this.$item,{"background-image":"none"}),p.push({instance:this}),1===p.length&&a.requestAnimationFrame(d),c.observe(this.options.elementInViewport||this.$item)}destroy(){var t;t=this,p.forEach((e,i)=>{e.instance.instanceID===t.instanceID&&p.splice(i,1)}),c.unobserve(t.options.elementInViewport||t.$item);let e=this.$item.getAttribute("data-jarallax-original-styles");if(this.$item.removeAttribute("data-jarallax-original-styles"),e?this.$item.setAttribute("style",e):this.$item.removeAttribute("style"),this.image.useImgTag){let t=this.image.$item.getAttribute("data-jarallax-original-styles");this.image.$item.removeAttribute("data-jarallax-original-styles"),t?this.image.$item.setAttribute("style",e):this.image.$item.removeAttribute("style"),this.image.$itemParent&&this.image.$itemParent.appendChild(this.image.$item)}this.image.$container&&this.image.$container.parentNode.removeChild(this.image.$container),this.options.onDestroy&&this.options.onDestroy.call(this),delete this.$item.jarallax}coverImage(){let{height:t}=m(),e=this.image.$container.getBoundingClientRect(),i=e.height,{speed:o}=this.options,s="scroll"===this.options.type||"scroll-opacity"===this.options.type,n=0,a=i,l=0;return s&&(o<0?(n=o*Math.max(i,t),t<i&&(n-=o*(i-t))):n=o*(i+t),o>1?a=Math.abs(n-t):o<0?a=n/o+Math.abs(n):a+=(t-i)*(1-o),n/=2),this.parallaxScrollDistance=n,l=s?(t-a)/2:(i-a)/2,this.css(this.image.$item,{height:`${a}px`,marginTop:`${l}px`,left:"fixed"===this.image.position?`${e.left}px`:"0",width:`${e.width}px`}),this.options.onCoverImage&&this.options.onCoverImage.call(this),{image:{height:a,marginTop:l},container:e}}isVisible(){return this.isElementInViewport||!1}onScroll(t){if(!t&&!this.isVisible())return;let{height:e}=m(),i=this.$item.getBoundingClientRect(),o=i.top,s=i.height,n={},a=Math.max(0,s+o),l=Math.max(0,-o),r=Math.max(0,o+s-e),h=Math.max(0,s-(o+s-e)),p=1-(e-o)/(e+s)*2,d=1;if(s<e?d=1-(l||r)/s:a<=e?d=a/e:h<=e&&(d=h/e),("opacity"===this.options.type||"scale-opacity"===this.options.type||"scroll-opacity"===this.options.type)&&(n.transform="translate3d(0,0,0)",n.opacity=d),"scale"===this.options.type||"scale-opacity"===this.options.type){let t=1;this.options.speed<0?t-=this.options.speed*d:t+=this.options.speed*(1-d),n.transform=`scale(${t}) translate3d(0,0,0)`}if("scroll"===this.options.type||"scroll-opacity"===this.options.type){let t=this.parallaxScrollDistance*p;"absolute"===this.image.position&&(t-=o),n.transform=`translate3d(0,${t}px,0)`}this.css(this.image.$item,n),this.options.onScroll&&this.options.onScroll.call(this,{section:i,beforeTop:Math.max(0,o),beforeTopEnd:a,afterTop:l,beforeBottom:r,beforeBottomEnd:h,afterBottom:Math.max(0,-o+e-s),visiblePercent:d,fromViewportCenter:p})}onResize(){this.coverImage()}}const b=function(t,e,...i){let o;("object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)&&(t=[t]);let s=t.length,n=0;for(;n<s;n+=1)if("object"==typeof e||void 0===e?t[n].jarallax||(t[n].jarallax=new f(t[n],e)):t[n].jarallax&&(o=t[n].jarallax[e].apply(t[n].jarallax,i)),void 0!==o)return o;return t};b.constructor=f,"undefined"!=typeof window?window:void 0!==s||"undefined"!=typeof self&&self;var y=document.getElementsByClassName("jarallax"),x=document.getElementsByClassName("fastJarallax"),$=document.getElementById("menu-btn"),v=document.getElementById("nav-ctn");b(y,{speed:.3,imgSize:"cover"}),b(x,{speed:.1}),$.addEventListener("click",function(){v.classList.toggle("h-max")});
//# sourceMappingURL=index.e6e5579d.js.map
