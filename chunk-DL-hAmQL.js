import {v,C as CI,a as ai$1,o as op,d as YI,y as yc,u as up,V as Vy,K as KI,e as rp,j as st,k as et,l as XI,m as eE,n as CL,p as TL,q as mD,b as Ys,E as Eu,w as tn$1,x as ot,z as Jf,G as GE,s as sE,X as Xl,g as gE,i as eu,M as Mp,L as Le,A as nD,B as wc,_ as _I,S as Sl,D as SI,F as SL,I as XE,N as _,O as Eh,P as jh,Q as Ih,t as te,R as nn$1,U as ir$1,W as ur$1,H,Z as Ot,$ as ht$1,a0 as ct$1,a1 as dt,a2 as $i$1,a3 as cm,a4 as tt,a5 as it,a6 as st$1,a7 as Lt,a8 as Dt$1,a9 as Yf,aa as xL,ab as yE,ac as _i$1,ad as OI,ae as pp,af as EE,ag as DE,ah as fp,ai as rD,aj as Np,ak as dr$1,al as _L,am as ke,an as pe,ao as Uh,ap as Tl,aq as Oh,ar as np,as as Ip,at as z,au as Di$1,av as An,aw as M,ax as we,ay as gy,az as on$1,aA as Wh,aB as qh,aC as Ug,aD as or$1,aE as Ht,aF as K,aG as Ri$1,aH as En,aI as Ii$1,aJ as nt,aK as vE,aL as LE,aM as Tg,aN as So$1,aO as ui$1,aP as ki$1,aQ as Fi$1,aR as Hi$1,aS as OE,aT as aD,aU as lD,aV as ir$2,aW as Ph,aX as Gi$1,aY as vu,aZ as Cv,a_ as ji$1,a$ as Ui$1,b0 as Pi$1,b1 as Bi$1,b2 as Wi$1,b3 as Gi$2,b4 as Ce,b5 as bt$1,b6 as fu,b7 as vc,b8 as ip,b9 as Ic,ba as cp,bb as cr$1,bc as vp,bd as ap,be as Ec,bf as Dc,bg as Mi$1,bh as JI,bi as j,bj as kh,bk as re,bl as Ir$1,bm as RL,bn as xi$1,bo as Jt$1,bp as Ne,bq as dh,br as dD}from'./main-TJOOAW6W.js';import {a}from'./chunk-pGiw-v4b.js';import {c as ct}from'./chunk-CcHBMrgz.js';import {X}from'./chunk-aFk9cbr9.js';import'./chunk-CAEeM_0-.js';var oo=(n,i)=>({"bg-primary text-background":n,"text-text-muted hover:text-white hover:bg-surface-hover":i}),ro=(n,i)=>i.value;function so(n,i){if(n&1){let e=sE();ai$1(0,"button",6),up("click",function(){let o=Xl(e).$implicit,r=gE();return eu(r.onChannelSelect(o.value))}),GE(1),yc();}if(n&2){let e=i.$implicit,t=gE();rp("ngClass",nD(2,oo,t.store.filters().channel===e.value,t.store.filters().channel!==e.value)),Vy(),wc(" ",e.label," ");}}var ut=class n{store=v(X);channels=[{label:"All",value:"ALL"},{label:"Walk-in",value:"WALK_IN"},{label:"Delivery",value:"DELIVERY"},{label:"Online",value:"ONLINE"}];onSearch(i){this.store.updateFilters({searchQuery:i});}onChannelSelect(i){this.store.updateFilters({channel:i});}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=CI({type:n,selectors:[["app-order-filters"]],decls:7,vars:0,consts:[[1,"relative","z-20","bg-background","border-b","border-border-dark","px-6","py-4","flex","flex-wrap","items-center","gap-4","shrink-0"],[1,"flex-1","min-w-[18.75rem]","h-[40px]"],["placeholder","Search by Order ID or Customer Name...","localStorageKey","liveOrdersRecentSearches",3,"search"],[1,"flex","items-center","gap-3"],[1,"flex","bg-surface","border","border-border-dark","rounded-md","p-1"],[1,"px-3","py-1","text-xs","font-semibold","rounded","transition-colors",3,"ngClass"],[1,"px-3","py-1","text-xs","font-semibold","rounded","transition-colors",3,"click","ngClass"]],template:function(e,t){e&1&&(ai$1(0,"div",0)(1,"div",1)(2,"app-search-input",2),up("search",function(r){return t.onSearch(r)}),yc()(),ai$1(3,"div",3)(4,"div",4),XI(5,so,2,5,"button",5,ro),yc()()()),e&2&&(Vy(5),eE(t.channels));},dependencies:[st,et,ct],encapsulation:2})};var pt=new WeakMap,Qn=(()=>{class n{_appRef;_injector=v(pe);_environmentInjector=v(re);load(e){let t=this._appRef=this._appRef||this._injector.get(Ir$1),o=pt.get(t);o||(o={loaders:new Set,refs:[]},pt.set(t,o),t.onDestroy(()=>{pt.get(t)?.refs.forEach(r=>r.destroy()),pt.delete(t);})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(RL(e,{environmentInjector:this._environmentInjector})));}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ht({token:n,factory:n.\u0275fac})}return n})();var Gt;function ao(){if(Gt==null){let n=typeof document<"u"?document.head:null;Gt=!!(n&&(n.createShadowRoot||n.attachShadow));}return Gt}function ht(n){if(ao()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Ge(n){if(n.composedPath)try{return n.composedPath()[0]}catch(i){}return n.target}function Yn(n){return n.buttons===0||n.detail===0}function Xn(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return !!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}function mt(n,i=0){return lo(n)?Number(n):arguments.length===2?i:0}function lo(n){return !isNaN(parseFloat(n))&&!isNaN(Number(n))}function ae(n){return n instanceof dr$1?n.nativeElement:n}var Kt;try{Kt=typeof Intl<"u"&&Intl.v8BreakIterator;}catch(n){Kt=false;}var Zt=(()=>{class n{_platformId=v(Tg);isBrowser=this._platformId?ui$1(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Kt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ht({token:n,factory:n.\u0275fac})}return n})();var co=new _("cdk-dir-doc",{providedIn:"root",factory:()=>v(So$1)}),uo=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function po(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?uo.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var qt=(()=>{class n{get value(){return this.valueSignal()}valueSignal=Ys("ltr");change=new Le;constructor(){let e=v(co,{optional:true});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(po(t||o||"ltr"));}}ngOnDestroy(){this.change.complete();}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ht({token:n,factory:n.\u0275fac})}return n})();var ho=20,Jn=(()=>{class n{_ngZone=v(z);_platform=v(Zt);_renderer=v(ir$2).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ke;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)));}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e));}scrolled(e=ho){return this._platform.isBrowser?new M(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(Ph(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0);}}):Ih()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete();}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Gi$1(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,e)&&t.push(r);}),t}_targetContainsElement(e,t){let o=ae(t),r=e.getElementRef().nativeElement;do if(o==r)return  true;while(o=o.parentElement);return  false}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ht({token:n,factory:n.\u0275fac})}return n})();var mo=20,Qt=(()=>{class n{_platform=v(Zt);_listeners;_viewportSize=null;_change=new ke;_document=v(So$1);constructor(){let e=v(z),t=v(ir$2).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)];}this.change().subscribe(()=>this._viewportSize=null);});}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete();}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return {top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return {top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),s=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,a=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return {top:s,left:a}}change(e=mo){return e>0?this._change.pipe(Ph(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0};}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ht({token:n,factory:n.\u0275fac})}return n})();var ei=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=_I({type:n});static \u0275inj=Sl({})}return n})();var ti=new Map,ft=class n{_appId=v(vu);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=false){this._appId!=="ng"&&(i+=this._appId);let t=ti.get(i);return t===void 0?t=0:t++,ti.set(i,t),`${i}${e?n._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Ht({token:n,factory:n.\u0275fac})};function ni(n){return Array.isArray(n)?n:[n]}function Jt(n){let i=n.cloneNode(true),e=i.querySelectorAll("[id]"),t=n.nodeName.toLowerCase();i.removeAttribute("id");for(let o=0;o<e.length;o++)e[o].removeAttribute("id");return t==="canvas"?ri(n,i):(t==="input"||t==="select"||t==="textarea")&&oi(n,i),ii("canvas",n,i,ri),ii("input, textarea, select",n,i,oi),i}function ii(n,i,e,t){let o=i.querySelectorAll(n);if(o.length){let r=e.querySelectorAll(n);for(let s=0;s<o.length;s++)t(o[s],r[s]);}}var fo=0;function oi(n,i){i.type!=="file"&&(i.value=n.value),i.type==="radio"&&i.name&&(i.name=`mat-clone-${i.name}-${fo++}`);}function ri(n,i){let e=i.getContext("2d");if(e)try{e.drawImage(n,0,0);}catch(t){}}function ln(n){let i=n.getBoundingClientRect();return {top:i.top,right:i.right,bottom:i.bottom,left:i.left,width:i.width,height:i.height,x:i.x,y:i.y}}function en(n,i,e){let{top:t,bottom:o,left:r,right:s}=n;return e>=t&&e<=o&&i>=r&&i<=s}function go(n,i){let e=i.left<n.left,t=i.left+i.width>n.right,o=i.top<n.top,r=i.top+i.height>n.bottom;return e||t||o||r}function qe(n,i,e){n.top+=i,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width;}function si(n,i,e,t){let{top:o,right:r,bottom:s,left:a,width:l,height:h}=n,g=l*i,_=h*i;return t>o-_&&t<s+_&&e>a-g&&e<r+g}var gt=class{_document;positions=new Map;constructor(i){this._document=i;}clear(){this.positions.clear();}cache(i){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),i.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:ln(e)});});}handleScroll(i){let e=Ge(i),t=this.positions.get(e);if(!t)return null;let o=t.scrollPosition,r,s;if(e===this._document){let h=this.getViewportScrollPosition();r=h.top,s=h.left;}else r=e.scrollTop,s=e.scrollLeft;let a=o.top-r,l=o.left-s;return this.positions.forEach((h,g)=>{h.clientRect&&e!==g&&e.contains(g)&&qe(h.clientRect,a,l);}),o.top=r,o.left=s,{top:a,left:l}}getViewportScrollPosition(){return {top:window.scrollY,left:window.scrollX}}};function bi(n,i){let e=n.rootNodes;if(e.length===1&&e[0].nodeType===i.ELEMENT_NODE)return e[0];let t=i.createElement("div");return e.forEach(o=>t.appendChild(o)),t}function dn(n,i,e){for(let t in i)if(i.hasOwnProperty(t)){let o=i[t];o?n.setProperty(t,o,e?.has(t)?"important":""):n.removeProperty(t);}return n}function Ve(n,i){let e=i?"":"none";dn(n.style,{"touch-action":i?"":"none","-webkit-user-drag":i?"":"none","-webkit-tap-highlight-color":i?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e});}function ai(n,i,e){dn(n.style,{position:i?"":"fixed",top:i?"":"0",opacity:i?"":"0",left:i?"":"-999em"},e);}function bt(n,i){return i&&i!="none"?n+" "+i:n}function li(n,i){n.style.width=`${i.width}px`,n.style.height=`${i.height}px`,n.style.transform=Qe(i.left,i.top);}function Qe(n,i){return `translate3d(${Math.round(n)}px, ${Math.round(i)}px, 0)`}var Ke={capture:true},Yt={passive:false,capture:true},bo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=CI({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,o){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2})}return n})(),cn=(()=>{class n{_ngZone=v(z);_document=v(So$1);_styleLoader=v(Qn);_renderer=v(ir$2).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new ke;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=Ys([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new ke;pointerUp=new ke;registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e);}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,Yt);});}removeDropContainer(e){this._dropInstances.delete(e);}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.();}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(bo),this._activeDragInstances.update(o=>[...o,e]),this._activeDragInstances().length===1)){let o=t.type.startsWith("touch"),r=a=>this.pointerUp.next(a),s=[["scroll",a=>this._scroll.next(a),Ke],["selectstart",this._preventDefaultWhileDragging,Yt]];o?s.push(["touchend",r,Ke],["touchcancel",r,Ke]):s.push(["mouseup",r,Ke]),o||s.push(["mousemove",a=>this.pointerMove.next(a),Yt]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=s.map(([a,l,h])=>this._renderer.listen(this._document,a,l,h));});}}stopDragging(e){this._activeDragInstances.update(t=>{let o=t.indexOf(e);return o>-1?(t.splice(o,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners();}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new M(o=>this._ngZone.runOutsideAngular(()=>{let r=this._renderer.listen(e,"scroll",s=>{this._activeDragInstances().length&&o.next(s);},Ke);return ()=>{r();}}))),Oh(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t);}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e);}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete();}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault();};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e));};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0;}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ht({token:n,factory:n.\u0275fac})}return n})();function di(n){let i=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*i}function _o(n){let i=getComputedStyle(n),e=Xt(i,"transition-property"),t=e.find(a=>a==="transform"||a==="all");if(!t)return 0;let o=e.indexOf(t),r=Xt(i,"transition-duration"),s=Xt(i,"transition-delay");return di(r[o])+di(s[o])}function Xt(n,i){return n.getPropertyValue(i).split(",").map(t=>t.trim())}var vo=new Set(["position"]),tn=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(i,e,t,o,r,s,a,l,h,g){this._document=i,this._rootElement=e,this._direction=t,this._initialDomRect=o,this._previewTemplate=r,this._previewClass=s,this._pickupPositionOnPage=a,this._initialTransform=l,this._zIndex=h,this._renderer=g;}attach(i){this._preview=this._createPreview(),i.appendChild(this._preview),ci(this._preview)&&this._preview.showPopover();}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null;}setTransform(i){this._preview.style.transform=i;}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(i){this._preview.classList.add(i);}getTransitionDuration(){return _o(this._preview)}addEventListener(i,e){return this._renderer.listen(this._preview,i,e)}_createPreview(){let i=this._previewTemplate,e=this._previewClass,t=i?i.template:null,o;if(t&&i){let r=i.matchSize?this._initialDomRect:null,s=i.viewContainer.createEmbeddedView(t,i.context);s.detectChanges(),o=bi(s,this._document),this._previewEmbeddedView=s,i.matchSize?li(o,r):o.style.transform=Qe(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y);}else o=Jt(this._rootElement),li(o,this._initialDomRect),this._initialTransform&&(o.style.transform=this._initialTransform);return dn(o.style,{"pointer-events":"none",margin:ci(o)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},vo),Ve(o,false),o.classList.add("cdk-drag-preview"),o.setAttribute("popover","manual"),o.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(r=>o.classList.add(r)):o.classList.add(e)),o}};function ci(n){return "showPopover"in n}var yo={passive:true},ui={passive:false},wo={passive:false,capture:true},Co=800,pi="cdk-drag-placeholder",hi=new Set(["position"]);function _i(n,i,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=n.get(Cv,null,{optional:true})||n.get(ir$2).createRenderer(null,null);return new nn(i,e,n.get(So$1),n.get(z),n.get(Qt),n.get(cn),t)}var nn=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=Ys(false);_hasMoved=false;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new ke;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=j.EMPTY;_pointerUpSubscription=j.EMPTY;_scrollSubscription=j.EMPTY;_resizeSubscription=j.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=true;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(i){i!==this._disabled&&(this._disabled=i,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Ve(e,i)));}_disabled=false;beforeStarted=new ke;started=new ke;released=new ke;ended=new ke;entered=new ke;exited=new ke;dropped=new ke;moved=this._moveEvents;data;constrainPosition;constructor(i,e,t,o,r,s,a){this._config=e,this._document=t,this._ngZone=o,this._viewportRuler=r,this._dragDropRegistry=s,this._renderer=a,this.withRootElement(i).withParent(e.parentDragRef||null),this._parentPositions=new gt(t),s.registerDragItem(this);}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(i){this._handles=i.map(t=>ae(t)),this._handles.forEach(t=>Ve(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t);}),this._disabledHandles=e,this}withPreviewTemplate(i){return this._previewTemplate=i,this}withPlaceholderTemplate(i){return this._placeholderTemplate=i,this}withRootElement(i){let e=ae(i);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,ui),t.listen(e,"touchstart",this._pointerDown,yo),t.listen(e,"dragstart",this._nativeDragStart,ui)]),this._initialTransform=void 0,this._rootElement=e;}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(i){return this._boundaryElement=i?ae(i):null,this._resizeSubscription.unsubscribe(),i&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(i){return this._parentDragRef=i,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null;}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0};}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&go(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let i=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,o=0;e.left<i.left?t=i.left-e.left:e.right>i.right&&(t=i.right-e.right),e.top<i.top?o=i.top-e.top:e.bottom>i.bottom&&(o=i.bottom-e.bottom);let r=this._activeTransform.x,s=this._activeTransform.y,a=r+t,l=s+o;this._rootElement.style.transform=Qe(a,l),this._activeTransform={x:a,y:l},this._passiveTransform={x:a,y:l};}}disableHandle(i){!this._disabledHandles.has(i)&&this._handles.indexOf(i)>-1&&(this._disabledHandles.add(i),Ve(i,true));}enableHandle(i){this._disabledHandles.has(i)&&(this._disabledHandles.delete(i),Ve(i,this.disabled));}withDirection(i){return this._direction=i,this}_withDropContainer(i){this._dropContainer=i;}getFreeDragPosition(){let i=this.isDragging()?this._activeTransform:this._passiveTransform;return {x:i.x,y:i.y}}setFreeDragPosition(i){return this._activeTransform={x:0,y:0},this._passiveTransform.x=i.x,this._passiveTransform.y=i.y,this._dropContainer||this._applyRootElementTransform(i.x,i.y),this}withPreviewContainer(i){return this._previewContainer=i,this}_sortFromLastPointerPosition(){let i=this._lastKnownPointerPosition;i&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(i),i);}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0;}_destroyPreview(){this._preview?.destroy(),this._preview=null;}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null;}_pointerDown=i=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,i);}else this.disabled||this._initializeDragSequence(this._rootElement,i);};_pointerMove=i=>{let e=this._getPointerPositionOnPage(i);if(!this._hasStartedDragging()){let o=Math.abs(e.x-this._pickupPositionOnPage.x),r=Math.abs(e.y-this._pickupPositionOnPage.y);if(o+r>=this._config.dragStartThreshold){let a=Date.now()>=this._dragStartTime+this._getDragStartDelay(i),l=this._dropContainer;if(!a){this._endDragSequence(i);return}(!l||!l.isDragging()&&!l.isReceiving())&&(i.cancelable&&i.preventDefault(),this._hasStartedDragging.set(true),this._ngZone.run(()=>this._startDragSequence(i)));}return}i.cancelable&&i.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=true,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else {let o=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,r=this._activeTransform;r.x=t.x-o.x+this._passiveTransform.x,r.y=t.y-o.y+this._passiveTransform.y,this._applyRootElementTransform(r.x,r.y);}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:i,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta});});};_pointerUp=i=>{this._endDragSequence(i);};_endDragSequence(i){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:i}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(i),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this);});else {this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(i);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:i});}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this);}}_startDragSequence(i){Ze(i)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",xo,wo);}),t){let o=this._rootElement,r=o.parentNode,s=this._placeholder=this._createPlaceholderElement(),a=this._marker=this._marker||this._document.createComment("");r.insertBefore(a,o),this._initialTransform=o.style.transform||"",this._preview=new tn(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(r,e)),ai(o,false,hi),this._document.body.appendChild(r.replaceChild(s,o)),this.started.next({source:this,event:i}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this);}else this.started.next({source:this,event:i}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[]);}_initializeDragSequence(i,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),o=Ze(e),r=!o&&e.button!==0,s=this._rootElement,a=Ge(e),l=!o&&this._lastTouchEventTime&&this._lastTouchEventTime+Co>Date.now(),h=o?Xn(e):Yn(e);if(a&&a.draggable&&e.type==="mousedown"&&e.preventDefault(),t||r||l||h)return;if(this._handles.length){let S=s.style;this._rootElementTapHighlight=S.webkitTapHighlightColor||"",S.webkitTapHighlightColor="transparent";}this._hasMoved=false,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(S=>this._updateOnScroll(S)),this._boundaryElement&&(this._boundaryRect=ln(this._boundaryElement));let g=this._previewTemplate;this._pickupPositionInElement=g&&g.template&&!g.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,i,e);let _=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:_.x,y:_.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e);}_cleanupDragArtifacts(i){ai(this._rootElement,true,hi),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),o=this._getPointerPositionOnPage(i),r=this._getDragDistance(o),s=e._isOverContainer(o.x,o.y);this.ended.next({source:this,distance:r,dropPoint:o,event:i}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:s,distance:r,dropPoint:o,event:i}),e.drop(this,t,this._initialIndex,this._initialContainer,s,r,o,i),this._dropContainer=this._initialContainer;});}_updateActiveDropContainer({x:i,y:e},{x:t,y:o}){let r=this._initialContainer._getSiblingContainerFromPosition(this,i,e);!r&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(i,e)&&(r=this._initialContainer),r&&r!==this._dropContainer&&this._ngZone.run(()=>{let s=this._dropContainer.getItemIndex(this),a=this._dropContainer.getItemAtIndex(s+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(r,this._dropContainer,a),this._dropContainer=r,this._dropContainer.enter(this,i,e,r===this._initialContainer&&r.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:r,currentIndex:r.getItemIndex(this)});}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,o),this._dropContainer._sortItem(this,i,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(i,e):this._applyPreviewTransform(i-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y));}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let i=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(i.left,i.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let o=a=>{(!a||this._preview&&Ge(a)===this._preview.element&&a.propertyName==="transform")&&(s(),t(),clearTimeout(r));},r=setTimeout(o,e*1.5),s=this._preview.addEventListener("transitionend",o);}))}_createPlaceholderElement(){let i=this._placeholderTemplate,e=i?i.template:null,t;return e?(this._placeholderRef=i.viewContainer.createEmbeddedView(e,i.context),this._placeholderRef.detectChanges(),t=bi(this._placeholderRef,this._document)):t=Jt(this._rootElement),t.style.pointerEvents="none",t.classList.add(pi),t}_getPointerPositionInElement(i,e,t){let o=e===this._rootElement?null:e,r=o?o.getBoundingClientRect():i,s=Ze(t)?t.targetTouches[0]:t,a=this._getViewportScrollPosition(),l=s.pageX-r.left-a.left,h=s.pageY-r.top-a.top;return {x:r.left-i.left+l,y:r.top-i.top+h}}_getPointerPositionOnPage(i){let e=this._getViewportScrollPosition(),t=Ze(i)?i.touches[0]||i.changedTouches[0]||{pageX:0,pageY:0}:i,o=t.pageX-e.left,r=t.pageY-e.top;if(this._ownerSVGElement){let s=this._ownerSVGElement.getScreenCTM();if(s){let a=this._ownerSVGElement.createSVGPoint();return a.x=o,a.y=r,a.matrixTransform(s.inverse())}}return {x:o,y:r}}_getConstrainedPointerPosition(i){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:o}=this.constrainPosition?this.constrainPosition(i,this,this._initialDomRect,this._pickupPositionInElement):i;if(this.lockAxis==="x"||e==="x"?o=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:r,y:s}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,a=this._boundaryRect,{width:l,height:h}=this._getPreviewRect(),g=a.top+s,_=a.bottom-(h-s),S=a.left+r,P=a.right-(l-r);t=mi(t,S,P),o=mi(o,g,_);}return {x:t,y:o}}_updatePointerDirectionDelta(i){let{x:e,y:t}=i,o=this._pointerDirectionDelta,r=this._pointerPositionAtLastDirectionChange,s=Math.abs(e-r.x),a=Math.abs(t-r.y);return s>this._config.pointerDirectionChangeThreshold&&(o.x=e>r.x?1:-1,r.x=e),a>this._config.pointerDirectionChangeThreshold&&(o.y=t>r.y?1:-1,r.y=t),o}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let i=this._handles.length>0||!this.isDragging();i!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=i,Ve(this._rootElement,i));}_removeRootElementListeners(){this._rootElementCleanups?.forEach(i=>i()),this._rootElementCleanups=void 0;}_applyRootElementTransform(i,e){let t=1/this.scale,o=Qe(i*t,e*t),r=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=r.transform&&r.transform!="none"?r.transform:""),r.transform=bt(o,this._initialTransform);}_applyPreviewTransform(i,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,o=Qe(i,e);this._preview.setTransform(bt(o,t));}_getDragDistance(i){let e=this._pickupPositionOnPage;return e?{x:i.x-e.x,y:i.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear();}_containInsideBoundaryOnResize(){let{x:i,y:e}=this._passiveTransform;if(i===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),o=this._boundaryElement.getBoundingClientRect();if(o.width===0&&o.height===0||t.width===0&&t.height===0)return;let r=o.left-t.left,s=t.right-o.right,a=o.top-t.top,l=t.bottom-o.bottom;o.width>t.width?(r>0&&(i+=r),s>0&&(i-=s)):i=0,o.height>t.height?(a>0&&(e+=a),l>0&&(e-=l)):e=0,(i!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:i});}_getDragStartDelay(i){let e=this.dragStartDelay;return typeof e=="number"?e:Ze(i)?e.touch:e?e.mouse:0}_updateOnScroll(i){let e=this._parentPositions.handleScroll(i);if(e){let t=Ge(i);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&qe(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y));}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=ht(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(i,e){let t=this._previewContainer||"global";if(t==="parent")return i;if(t==="global"){let o=this._document;return e||o.fullscreenElement||o.webkitFullscreenElement||o.mozFullScreenElement||o.msFullscreenElement||o.body}return ae(t)}_getPreviewRect(){return (!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=i=>{if(this._handles.length){let e=this._getTargetHandle(i);e&&!this._disabledHandles.has(e)&&!this.disabled&&i.preventDefault();}else this.disabled||i.preventDefault();};_getTargetHandle(i){return this._handles.find(e=>i.target&&(i.target===e||e.contains(i.target)))}_conditionallyInsertAnchor(i,e,t){if(i===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let o=this._anchor??=Jt(this._placeholder);o.classList.remove(pi),o.classList.add("cdk-drag-anchor"),o.style.transform="",t?t.before(o):ae(e.element).appendChild(o);}}};function mi(n,i,e){return Math.max(i,Math.min(e,n))}function Ze(n){return n.type[0]==="t"}function xo(n){n.preventDefault();}function vi(n,i,e){let t=fi(i,n.length-1),o=fi(e,n.length-1);if(t===o)return;let r=n[t],s=o<t?-1:1;for(let a=t;a!==o;a+=s)n[a]=n[a+s];n[o]=r;}function fi(n,i){return Math.max(0,Math.min(i,n))}var _t=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(i){this._dragDropRegistry=i;}_previousSwap={drag:null,delta:0,overlaps:false};start(i){this.withItems(i);}sort(i,e,t,o){let r=this._itemPositions,s=this._getItemIndexFromPointerPosition(i,e,t,o);if(s===-1&&r.length>0)return null;let a=this.orientation==="horizontal",l=r.findIndex(z=>z.drag===i),h=r[s],g=r[l].clientRect,_=h.clientRect,S=l>s?1:-1,P=this._getItemOffsetPx(g,_,S),J=this._getSiblingOffsetPx(l,r,S),le=r.slice();return vi(r,l,s),r.forEach((z,Ye)=>{if(le[Ye]===z)return;let Xe=z.drag===i,oe=Xe?P:J,mn=Xe?i.getPlaceholderElement():z.drag.getRootElement();z.offset+=oe;let fn=Math.round(z.offset*(1/z.drag.scale));a?(mn.style.transform=bt(`translate3d(${fn}px, 0, 0)`,z.initialTransform),qe(z.clientRect,0,oe)):(mn.style.transform=bt(`translate3d(0, ${fn}px, 0)`,z.initialTransform),qe(z.clientRect,oe,0));}),this._previousSwap.overlaps=en(_,e,t),this._previousSwap.drag=h.drag,this._previousSwap.delta=a?o.x:o.y,{previousIndex:l,currentIndex:s}}enter(i,e,t,o){let r=this._activeDraggables,s=r.indexOf(i),a=i.getPlaceholderElement();s>-1&&r.splice(s,1);let l=o==null||o<0?this._getItemIndexFromPointerPosition(i,e,t):o,h=r[l];if(h===i&&(h=r[l+1]),!h&&(l==null||l===-1||l<r.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(h=r[0]),h&&!this._dragDropRegistry.isDragging(h)){let g=h.getRootElement();g.parentElement.insertBefore(a,g),r.splice(l,0,i);}else this._element.appendChild(a),r.push(i);a.style.transform="",this._cacheItemPositions();}withItems(i){this._activeDraggables=i.slice(),this._cacheItemPositions();}withSortPredicate(i){this._sortPredicate=i;}reset(){this._activeDraggables?.forEach(i=>{let e=i.getRootElement();if(e){let t=this._itemPositions.find(o=>o.drag===i)?.initialTransform;e.style.transform=t||"";}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=false;}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(i){return this._getVisualItemPositions().findIndex(e=>e.drag===i)}getItemAtIndex(i){return this._getVisualItemPositions()[i]?.drag||null}updateOnScroll(i,e){this._itemPositions.forEach(({clientRect:t})=>{qe(t,i,e);}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition();});}withElementContainer(i){this._element=i;}_cacheItemPositions(){let i=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return {drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:ln(t)}}).sort((e,t)=>i?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top);}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(i,e,t){let o=this.orientation==="horizontal",r=o?e.left-i.left:e.top-i.top;return t===-1&&(r+=o?e.width-i.width:e.height-i.height),r}_getSiblingOffsetPx(i,e,t){let o=this.orientation==="horizontal",r=e[i].clientRect,s=e[i+t*-1],a=r[o?"width":"height"]*t;if(s){let l=o?"left":"top",h=o?"right":"bottom";t===-1?a-=s.clientRect[l]-r[h]:a+=r[l]-s.clientRect[h];}return a}_shouldEnterAsFirstChild(i,e){if(!this._activeDraggables.length)return  false;let t=this._itemPositions,o=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let s=t[t.length-1].clientRect;return o?i>=s.right:e>=s.bottom}else {let s=t[0].clientRect;return o?i<=s.left:e<=s.top}}_getItemIndexFromPointerPosition(i,e,t,o){let r=this.orientation==="horizontal",s=this._itemPositions.findIndex(({drag:a,clientRect:l})=>{if(a===i)return  false;if(o){let h=r?o.x:o.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&h===this._previousSwap.delta)return  false}return r?e>=Math.floor(l.left)&&e<Math.floor(l.right):t>=Math.floor(l.top)&&t<Math.floor(l.bottom)});return s===-1||!this._sortPredicate(s,i)?-1:s}},on=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:false};_relatedNodes=[];constructor(i,e){this._document=i,this._dragDropRegistry=e;}start(i){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let o=e[t];this._relatedNodes.push([o,o.nextSibling]);}this.withItems(i);}sort(i,e,t,o){let r=this._getItemIndexFromPointerPosition(i,e,t),s=this._previousSwap;if(r===-1||this._activeItems[r]===i)return null;let a=this._activeItems[r];if(s.drag===a&&s.overlaps&&s.deltaX===o.x&&s.deltaY===o.y)return null;let l=this.getItemIndex(i),h=i.getPlaceholderElement(),g=a.getRootElement();r>l?g.after(h):g.before(h),vi(this._activeItems,l,r);let _=this._getRootNode().elementFromPoint(e,t);return s.deltaX=o.x,s.deltaY=o.y,s.drag=a,s.overlaps=g===_||g.contains(_),{previousIndex:l,currentIndex:r}}enter(i,e,t,o){let r=this._activeItems.indexOf(i);r>-1&&this._activeItems.splice(r,1);let s=o==null||o<0?this._getItemIndexFromPointerPosition(i,e,t):o;s===-1&&(s=this._getClosestItemIndexToPointer(i,e,t));let a=this._activeItems[s];a&&!this._dragDropRegistry.isDragging(a)?(this._activeItems.splice(s,0,i),a.getRootElement().before(i.getPlaceholderElement())):(this._activeItems.push(i),this._element.appendChild(i.getPlaceholderElement()));}withItems(i){this._activeItems=i.slice();}withSortPredicate(i){this._sortPredicate=i;}reset(){let i=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[o,r]=this._relatedNodes[t];o.parentNode===i&&o.nextSibling!==r&&(r===null?i.appendChild(o):r.parentNode===i&&i.insertBefore(o,r));}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=false;}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(i){return this._activeItems.indexOf(i)}getItemAtIndex(i){return this._activeItems[i]||null}updateOnScroll(){this._activeItems.forEach(i=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition();});}withElementContainer(i){i!==this._element&&(this._element=i,this._rootNode=void 0);}_getItemIndexFromPointerPosition(i,e,t){let o=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),r=o?this._activeItems.findIndex(s=>{let a=s.getRootElement();return o===a||a.contains(o)}):-1;return r===-1||!this._sortPredicate(r,i)?-1:r}_getRootNode(){return this._rootNode||(this._rootNode=ht(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(i,e,t){if(this._activeItems.length===0)return  -1;if(this._activeItems.length===1)return 0;let o=1/0,r=-1;for(let s=0;s<this._activeItems.length;s++){let a=this._activeItems[s];if(a!==i){let{x:l,y:h}=a.getRootElement().getBoundingClientRect(),g=Math.hypot(e-l,t-h);g<o&&(o=g,r=s);}}return r}},gi=.05,yi=.05,ie=(function(n){return n[n.NONE=0]="NONE",n[n.UP=1]="UP",n[n.DOWN=2]="DOWN",n})(ie||{}),G=(function(n){return n[n.NONE=0]="NONE",n[n.LEFT=1]="LEFT",n[n.RIGHT=2]="RIGHT",n})(G||{});function wi(n,i){return new rn(i,n.get(cn),n.get(So$1),n.get(z),n.get(Qt))}var rn=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=false;sortingDisabled=false;lockAxis=null;autoScrollDisabled=false;autoScrollStep=2;hasAnchor=false;enterPredicate=()=>true;sortPredicate=()=>true;beforeStarted=new ke;entered=new ke;exited=new ke;dropped=new ke;sorted=new ke;receivingStarted=new ke;receivingStopped=new ke;data;_container;_isDragging=false;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=j.EMPTY;_verticalScrollDirection=ie.NONE;_horizontalScrollDirection=G.NONE;_scrollNode;_stopScrollTimers=new ke;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(i,e,t,o,r){this._dragDropRegistry=e,this._ngZone=o,this._viewportRuler=r;let s=this.element=ae(i);this._document=t,this.withOrientation("vertical").withElementContainer(s),e.registerDropContainer(this),this._parentPositions=new gt(t);}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this);}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings();}enter(i,e,t,o){this._draggingStarted(),o==null&&this.sortingDisabled&&(o=this._draggables.indexOf(i)),this._sortStrategy.enter(i,e,t,o),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:i,container:this,currentIndex:this.getItemIndex(i)});}exit(i){this._reset(),this.exited.next({item:i,container:this});}drop(i,e,t,o,r,s,a,l){this._reset(),this.dropped.next({item:i,currentIndex:e,previousIndex:t,container:this,previousContainer:o,isPointerOverContainer:r,distance:s,dropPoint:a,event:l});}withItems(i){let e=this._draggables;return this._draggables=i,i.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(o=>o.isDragging()).every(o=>i.indexOf(o)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(i){return this._direction=i,this._sortStrategy instanceof _t&&(this._sortStrategy.direction=i),this}connectedTo(i){return this._siblings=i.slice(),this}withOrientation(i){if(i==="mixed")this._sortStrategy=new on(this._document,this._dragDropRegistry);else {let e=new _t(this._dragDropRegistry);e.direction=this._direction,e.orientation=i,this._sortStrategy=e;}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(i){let e=this._container;return this._scrollableElements=i.indexOf(e)===-1?[e,...i]:i.slice(),this}withElementContainer(i){if(i===this._container)return this;ae(this.element);let t=this._scrollableElements.indexOf(this._container),o=this._scrollableElements.indexOf(i);return t>-1&&this._scrollableElements.splice(t,1),o>-1&&this._scrollableElements.splice(o,1),this._sortStrategy&&this._sortStrategy.withElementContainer(i),this._cachedShadowRoot=null,this._scrollableElements.unshift(i),this._container=i,this}getScrollableParents(){return this._scrollableElements}getItemIndex(i){return this._isDragging?this._sortStrategy.getItemIndex(i):this._draggables.indexOf(i)}getItemAtIndex(i){return this._isDragging?this._sortStrategy.getItemAtIndex(i):this._draggables[i]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(i,e,t,o){if(this.sortingDisabled||!this._domRect||!si(this._domRect,gi,e,t))return;let r=this._sortStrategy.sort(i,e,t,o);r&&this.sorted.next({previousIndex:r.previousIndex,currentIndex:r.currentIndex,container:this,item:i});}_startScrollingIfNecessary(i,e){if(this.autoScrollDisabled)return;let t,o=ie.NONE,r=G.NONE;if(this._parentPositions.positions.forEach((s,a)=>{a===this._document||!s.clientRect||t||si(s.clientRect,gi,i,e)&&([o,r]=Do(a,s.clientRect,this._direction,i,e),(o||r)&&(t=a));}),!o&&!r){let{width:s,height:a}=this._viewportRuler.getViewportSize(),l={width:s,height:a,top:0,right:s,bottom:a,left:0};o=Ci(l,e),r=xi(l,i),t=window;}t&&(o!==this._verticalScrollDirection||r!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=o,this._horizontalScrollDirection=r,this._scrollNode=t,(o||r)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling());}_stopScrolling(){this._stopScrollTimers.next();}_draggingStarted(){let i=this._container.style;this.beforeStarted.next(),this._isDragging=true,this._initialScrollSnap=i.msScrollSnapType||i.scrollSnapType||"",i.scrollSnapType=i.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents();}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect;}_reset(){this._isDragging=false;let i=this._container.style;i.scrollSnapType=i.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear();}_startScrollInterval=()=>{this._stopScrolling(),kh(0,dh).pipe(Tl(this._stopScrollTimers)).subscribe(()=>{let i=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===ie.UP?i.scrollBy(0,-e):this._verticalScrollDirection===ie.DOWN&&i.scrollBy(0,e),this._horizontalScrollDirection===G.LEFT?i.scrollBy(-e,0):this._horizontalScrollDirection===G.RIGHT&&i.scrollBy(e,0);});};_isOverContainer(i,e){return this._domRect!=null&&en(this._domRect,i,e)}_getSiblingContainerFromPosition(i,e,t){return this._siblings.find(o=>o._canReceive(i,e,t))}_canReceive(i,e,t){if(!this._domRect||!en(this._domRect,e,t)||!this.enterPredicate(i,this))return  false;let o=this._getShadowRoot().elementFromPoint(e,t);return o?o===this._container||this._container.contains(o):false}_startReceiving(i,e){let t=this._activeSiblings;!t.has(i)&&e.every(o=>this.enterPredicate(o,this)||this._draggables.indexOf(o)>-1)&&(t.add(i),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:i,receiver:this,items:e}));}_stopReceiving(i){this._activeSiblings.delete(i),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:i,receiver:this});}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(i=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(i);e&&this._sortStrategy.updateOnScroll(e.top,e.left);}else this.isReceiving()&&this._cacheParentPositions();});}_getShadowRoot(){if(!this._cachedShadowRoot){let i=ht(this._container);this._cachedShadowRoot=i||this._document;}return this._cachedShadowRoot}_notifyReceivingSiblings(){let i=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,i));}};function Ci(n,i){let{top:e,bottom:t,height:o}=n,r=o*yi;return i>=e-r&&i<=e+r?ie.UP:i>=t-r&&i<=t+r?ie.DOWN:ie.NONE}function xi(n,i){let{left:e,right:t,width:o}=n,r=o*yi;return i>=e-r&&i<=e+r?G.LEFT:i>=t-r&&i<=t+r?G.RIGHT:G.NONE}function Do(n,i,e,t,o){let r=Ci(i,o),s=xi(i,t),a=ie.NONE,l=G.NONE;if(r){let h=n.scrollTop;r===ie.UP?h>0&&(a=ie.UP):n.scrollHeight-h>n.clientHeight&&(a=ie.DOWN);}if(s){let h=n.scrollLeft;e==="rtl"?s===G.RIGHT?h<0&&(l=G.RIGHT):n.scrollWidth+h>n.clientWidth&&(l=G.LEFT):s===G.LEFT?h>0&&(l=G.LEFT):n.scrollWidth-h>n.clientWidth&&(l=G.RIGHT);}return [a,l]}var So=(()=>{class n{_injector=v(pe);createDrag(e,t){return _i(this._injector,e,t)}createDropList(e){return wi(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Ht({token:n,factory:n.\u0275fac})}return n})(),sn=new _("CDK_DRAG_PARENT");var Eo=new _("CdkDragHandle");var Di=new _("CDK_DRAG_CONFIG"),Si=new _("CdkDropList"),Ei=(()=>{class n{element=v(dr$1);dropContainer=v(Si,{optional:true,skipSelf:true});_ngZone=v(z);_viewContainerRef=v(Di$1);_dir=v(qt,{optional:true});_changeDetectorRef=v(_L);_selfHandle=v(Eo,{optional:true,self:true});_parentDrag=v(sn,{optional:true,skipSelf:true});_dragDropRegistry=v(cn);_destroyed=new ke;_handles=new An([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled;}_disabled=false;constrainPosition;previewClass;previewContainer;scale=1;started=new Le;released=new Le;ended=new Le;entered=new Le;exited=new Le;dropped=new Le;moved=new M(e=>{let t=this._dragRef.moved.pipe(we(o=>({source:this,pointerPosition:o.pointerPosition,event:o.event,delta:o.delta,distance:o.distance}))).subscribe(e);return ()=>{t.unsubscribe();}});_injector=v(pe);constructor(){let e=this.dropContainer,t=v(Di,{optional:true});this._dragRef=_i(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(Tl(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale;})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef);}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset();}resetToBoundary(){this._dragRef.resetToBoundary();}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e);}ngAfterViewInit(){gy(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition);},{injector:this._injector});}ngOnChanges(e){let t=e.rootElementSelector,o=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,o&&!o.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition);}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose();});}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t);}_removeHandle(e){let t=this._handles.getValue(),o=t.indexOf(e);o>-1&&(t.splice(o,1),this._handles.next(t));}_setPreviewTemplate(e){this._previewTemplate=e;}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null);}_setPlaceholderTemplate(e){this._placeholderTemplate=e;}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null);}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e);}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):ae(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,o=this.dragStartDelay,r=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,s=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof o=="object"&&o?o:mt(o),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(r).withPreviewTemplate(s).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value);}}),e.beforeStarted.pipe(on$1(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let o=this._dragDropRegistry.getDragDirectiveForNode(t);if(o){e.withParent(o._dragRef);break}t=t.parentElement;}});}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck();}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event});}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck();}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex});}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this});}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event});});}_assignDefaults(e){let{lockAxis:t,dragStartDelay:o,constrainPosition:r,previewClass:s,boundaryElement:a,draggingDisabled:l,rootElementSelector:h,previewContainer:g}=e;this.disabled=l??false,this.dragStartDelay=o||0,this.lockAxis=t||null,r&&(this.constrainPosition=r),s&&(this.previewClass=s),a&&(this.boundaryElement=a),h&&(this.rootElementSelector=h),g&&(this.previewContainer=g);}_setupHandlesListener(){this._handles.pipe(Wh(e=>{let t=e.map(o=>o.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t);}),qh(e=>Oh(...e.map(t=>t._stateChanges.pipe(Uh(t))))),Tl(this._destroyed)).subscribe(e=>{let t=this._dragRef,o=e.element.nativeElement;e.disabled?t.disableHandle(o):t.enableHandle(o);});}static \u0275fac=function(t){return new(t||n)};static \u0275dir=SI({type:n,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,o){t&2&&Ip("cdk-drag-disabled",o.disabled)("cdk-drag-dragging",o._dragRef.isDragging());},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",SL],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",xL]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[XE([{provide:sn,useExisting:n}]),Ug]})}return n})(),an=new _("CdkDropListGroup"),ki=(()=>{class n{_items=new Set;disabled=false;ngOnDestroy(){this._items.clear();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=SI({type:n,selectors:[["","cdkDropListGroup",""]],inputs:{disabled:[2,"cdkDropListGroupDisabled","disabled",SL]},exportAs:["cdkDropListGroup"],features:[XE([{provide:an,useExisting:n}])]})}return n})(),Ii=(()=>{class n{element=v(dr$1);_changeDetectorRef=v(_L);_scrollDispatcher=v(Jn);_dir=v(qt,{optional:true});_group=v(an,{optional:true,skipSelf:true});_latestSortedRefs;_destroyed=new ke;_scrollableParentsResolved=false;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=v(ft).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e;}_disabled=false;sortingDisabled=false;enterPredicate=()=>true;sortPredicate=()=>true;autoScrollDisabled=false;autoScrollStep;elementContainerSelector=null;hasAnchor=false;dropped=new Le;entered=new Le;exited=new Le;sorted=new Le;_unsortedItems=new Set;constructor(){let e=v(Di,{optional:true}),t=v(pe);this._dropListRef=wi(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(o,r)=>this.enterPredicate(o.data,r.data),this._dropListRef.sortPredicate=(o,r,s)=>this.sortPredicate(o,r.data,s.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),this._group&&this._group._items.add(this);}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef));}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs));}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete();}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Uh(this._dir.value),Tl(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=ni(this.connectedTo).map(o=>{if(typeof o=="string"){let r=n._dropLists.find(s=>s.id===o);return r}return o});if(this._group&&this._group._items.forEach(o=>{t.indexOf(o)===-1&&t.push(o);}),!this._scrollableParentsResolved){let o=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(r=>r.getElementRef().nativeElement);this._dropListRef.withScrollableParents(o),this._scrollableParentsResolved=true;}if(this.elementContainerSelector){let o=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(o);}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=mt(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(o=>o&&o!==this).map(o=>o._dropListRef)).withOrientation(this.orientation);});}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck();}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex});}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck();}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data});}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck();}),Oh(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck());}_assignDefaults(e){let{lockAxis:t,draggingDisabled:o,sortingDisabled:r,listAutoScrollDisabled:s,listOrientation:a}=e;this.disabled=o??false,this.sortingDisabled=r??false,this.autoScrollDisabled=s??false,this.orientation=a||"vertical",this.lockAxis=t||null;}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e);}static \u0275fac=function(t){return new(t||n)};static \u0275dir=SI({type:n,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,o){t&2&&(np("id",o.id),Ip("cdk-drop-list-disabled",o.disabled)("cdk-drop-list-dragging",o._dropListRef.isDragging())("cdk-drop-list-receiving",o._dropListRef.isReceiving()));},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",SL],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",SL],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",SL],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",SL]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[XE([{provide:an,useValue:void 0},{provide:Si,useExisting:n}])]})}return n})();var ko=new _("CdkDragPlaceholder"),Pi=(()=>{class n{templateRef=v(or$1);_drag=v(sn,{optional:true});data;constructor(){this._drag?._setPlaceholderTemplate(this);}ngOnDestroy(){this._drag?._resetPlaceholderTemplate(this);}static \u0275fac=function(t){return new(t||n)};static \u0275dir=SI({type:n,selectors:[["ng-template","cdkDragPlaceholder",""]],inputs:{data:"data"},features:[XE([{provide:ko,useExisting:n}])]})}return n})();var vt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=_I({type:n});static \u0275inj=Sl({providers:[So],imports:[ei]})}return n})();var Io=(n,i,e)=>({"hover:bg-surface-hover cursor-grab active:cursor-grabbing":n,"opacity-75":i,"border-danger":e}),Po=(n,i)=>({"bg-primary/10 hover:bg-primary/30 text-primary border-primary":n,"bg-surface-hover hover:bg-border-dark text-white border-border-dark":i});function To(n,i){n&1&&(ai$1(0,"span",4),GE(1,"Urgent"),yc());}function Ro(n,i){n&1&&(ai$1(0,"div",5)(1,"span",17),GE(2,"check"),yc(),ai$1(3,"span",18),GE(4,"Done"),yc()());}function Oo(n,i){if(n&1&&(ai$1(0,"div",6)(1,"span",17),GE(2,"timer"),yc(),ai$1(3,"span",18),GE(4),yc()()),n&2){let e=gE();rp("ngClass",e.isWarning?"text-danger":e.order().status==="RECEIVED"?"text-text-muted":"text-primary"),Vy(4),wc("",e.timeElapsed,"m");}}function Fo(n,i){n&1&&(ai$1(0,"span",13),GE(1,"storefront"),yc());}function Mo(n,i){n&1&&(ai$1(0,"span",13),GE(1,"two_wheeler"),yc());}function Lo(n,i){n&1&&(ai$1(0,"span",13),GE(1,"language"),yc());}function No(n,i){n&1&&(ai$1(0,"span",20),GE(1,"done"),yc());}function Bo(n,i){if(n&1){let e=sE();ai$1(0,"button",19),up("click",function(){Xl(e);let o=gE();return eu(o.onActionClick())}),YI(1,No,2,0,"span",20),GE(2),yc();}if(n&2){let e=gE();rp("ngClass",nD(3,Po,e.order().status==="RECEIVED",e.order().status!=="RECEIVED")),Vy(),KI(e.order().status==="PREPARING"?1:-1),Vy(),wc(" ",e.actionLabel," ");}}var yt=class n{order=CL.required();actionClick=TL();viewDetailsClick=TL();get timeElapsed(){let i=new Date(this.order().placedAt).getTime();return Math.floor((Date.now()-i)/6e4)}get isWarning(){return this.timeElapsed>15&&this.order().status!=="DELIVERED"}get actionLabel(){switch(this.order().status){case "RECEIVED":return "Send to Kitchen";case "PREPARING":return "Mark Ready";case "READY":return "Mark Delivered";case "DELIVERED":return "View Details";default:return "Action"}}onActionClick(){this.actionClick.emit(this.order());}onViewDetails(i){i.stopPropagation(),this.viewDetailsClick.emit(this.order());}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=CI({type:n,selectors:[["app-order-card"]],inputs:{order:[1,"order"]},outputs:{actionClick:"actionClick",viewDetailsClick:"viewDetailsClick"},decls:25,vars:16,consts:[[1,"bg-surface","border","border-border-dark","rounded-md","p-3","transition-colors","group","relative",3,"ngClass"],[1,"flex","justify-between","items-start","mb-2"],[1,"flex","items-center","gap-2"],[1,"font-bold","text-base",3,"ngClass"],[1,"bg-danger/10","text-danger","text-[10px]","uppercase","font-bold","px-1.5","py-0.5","rounded"],[1,"flex","items-center","gap-1","text-success"],[1,"flex","items-center","gap-1",3,"ngClass"],[1,"text-text-muted","hover:text-white","transition-colors","flex","items-center","justify-center","-mr-1",3,"click"],[1,"material-symbols-outlined","text-[18px]"],[1,"flex","items-center","justify-between",3,"ngClass"],[1,"flex","flex-col","gap-1","min-w-0","pr-2"],[1,"text-sm","text-text-muted","truncate"],[1,"flex","items-center","gap-1","text-[10px]","text-text-muted","uppercase","font-semibold"],[1,"material-symbols-outlined","text-[12px]"],[1,"truncate"],[1,"shrink-0","bg-border-dark","text-text-muted","px-1.5","py-0.5","rounded","text-xs","self-start","mt-0.5"],[1,"w-full","transition-colors","text-sm","font-semibold","py-1.5","rounded-md","flex","items-center","justify-center","gap-2","border",3,"ngClass"],[1,"material-symbols-outlined","text-[14px]"],[1,"text-sm","font-semibold"],[1,"w-full","transition-colors","text-sm","font-semibold","py-1.5","rounded-md","flex","items-center","justify-center","gap-2","border",3,"click","ngClass"],[1,"material-symbols-outlined","text-[16px]"]],template:function(e,t){if(e&1&&(ai$1(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),GE(4),yc(),YI(5,To,2,0,"span",4),yc(),ai$1(6,"div",2),YI(7,Ro,5,0,"div",5)(8,Oo,5,2,"div",6),ai$1(9,"button",7),up("click",function(r){return t.onViewDetails(r)}),ai$1(10,"span",8),GE(11,"more_vert"),yc()()()(),ai$1(12,"div",9)(13,"div",10)(14,"span",11),GE(15),yc(),ai$1(16,"div",12),YI(17,Fo,2,0,"span",13)(18,Mo,2,0,"span",13)(19,Lo,2,0,"span",13),ai$1(20,"span",14),GE(21),yc()()(),ai$1(22,"span",15),GE(23),yc()(),YI(24,Bo,3,6,"button",16),yc()),e&2){let o;rp("ngClass",rD(12,Io,t.order().status!=="DELIVERED",t.order().status==="DELIVERED",t.isWarning)),Vy(3),rp("ngClass",t.order().status==="DELIVERED"?"text-text-muted":"text-white"),Vy(),wc(" ",t.order().orderNumber," "),Vy(),KI(t.order().urgency==="URGENT"||t.order().urgency==="CRITICAL"?5:-1),Vy(2),KI(t.order().status==="DELIVERED"?7:8),Vy(5),rp("ngClass",t.order().status==="DELIVERED"?"mb-2":"mb-3"),Vy(3),Mp(t.order().customerName),Vy(2),KI((o=t.order().channel)==="WALK_IN"?17:o==="DELIVERY"?18:o==="ONLINE"?19:-1),Vy(4),Mp(t.order().channel.replace("_"," ")),Vy(2),Np(" ",t.order().items.length," ",t.order().items.length===1?"Item":"Items"," "),Vy(),KI(t.order().status!=="DELIVERED"?24:-1);}},dependencies:[st,et],encapsulation:2})};var Ao=(n,i)=>({"bg-border-dark text-text-muted":n,"bg-primary/20 text-primary":i}),zo=(n,i)=>i.id;function Vo(n,i){n&1&&op(0,"div",9);}function Ho(n,i){if(n&1){let e=sE();ai$1(0,"app-order-card",7),up("actionClick",function(o){Xl(e);let r=gE(2);return eu(r.onActionClick(o))})("viewDetailsClick",function(o){Xl(e);let r=gE(2);return eu(r.onViewDetailsClick(o))}),Jf(1,Vo,1,0,"div",8),yc();}if(n&2){let e=i.$implicit;rp("order",e);}}function $o(n,i){if(n&1&&XI(0,Ho,2,1,"app-order-card",6,zo),n&2){let e=gE();eE(e.orders);}}function jo(n,i){n&1&&(ai$1(0,"div",5)(1,"div",10)(2,"span",11),GE(3,"check_circle"),yc(),ai$1(4,"p",12),GE(5,"No orders ready"),yc()()());}var wt=class n{title;status;orders=[];actionClick=new Le;viewDetailsClick=new Le;drop=new Le;get isPrimary(){return this.status==="RECEIVED"}onActionClick(i){this.actionClick.emit(i);}onViewDetailsClick(i){this.viewDetailsClick.emit(i);}onDrop(i){this.drop.emit(i);}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=CI({type:n,selectors:[["app-kanban-column"]],inputs:{title:"title",status:"status",orders:"orders"},outputs:{actionClick:"actionClick",viewDetailsClick:"viewDetailsClick",drop:"drop"},decls:9,vars:8,consts:[[1,"w-[20rem]","flex","flex-col","bg-surface/50","rounded-lg","border","border-border-dark","h-full","shrink-0","max-h-full"],[1,"px-4","py-3","border-b","border-border-dark","flex","items-center","justify-between","bg-surface","rounded-t-lg","z-10","sticky","top-0"],[1,"font-semibold","text-white","m-0","text-base"],[1,"text-xs","font-bold","px-2","py-0.5","rounded-full",3,"ngClass"],["cdkDropList","",1,"p-3","flex-1","overflow-y-auto","column-scroll","space-y-3","min-h-0","relative",3,"cdkDropListDropped","cdkDropListData"],[1,"flex-1","flex","items-center","justify-center","pt-10","pb-4","h-full","pointer-events-none"],["cdkDrag","",3,"order"],["cdkDrag","",3,"actionClick","viewDetailsClick","order"],["class","bg-surface border-2 border-dashed border-primary/50 rounded-md h-[130px] opacity-70",4,"cdkDragPlaceholder"],[1,"bg-surface","border-2","border-dashed","border-primary/50","rounded-md","h-[130px]","opacity-70"],[1,"text-center","text-text-muted","flex","flex-col","items-center","opacity-50"],[1,"material-symbols-outlined","text-4xl","mb-2"],[1,"text-sm","font-medium"]],template:function(e,t){e&1&&(ai$1(0,"div",0)(1,"div",1)(2,"h3",2),GE(3),yc(),ai$1(4,"span",3),GE(5),yc()(),ai$1(6,"div",4),up("cdkDropListDropped",function(r){return t.onDrop(r)}),YI(7,$o,2,0)(8,jo,6,0,"div",5),yc()()),e&2&&(Vy(3),Mp(t.title),Vy(),rp("ngClass",nD(5,Ao,t.status!=="PREPARING",t.status==="PREPARING")),Vy(),wc(" ",t.orders.length," "),Vy(),rp("cdkDropListData",t.orders),Vy(),KI(t.orders.length>0?7:8));},dependencies:[st,et,yt,vt,Ii,Ei,Pi],encapsulation:2})};var Ct=class n{store=v(X);onOrderAction(i){i.status==="RECEIVED"?this.store.moveOrderStatus(i.id,"PREPARING"):i.status==="PREPARING"?this.store.moveOrderStatus(i.id,"READY"):i.status==="READY"&&this.store.moveOrderStatus(i.id,"DELIVERED");}onViewDetails(i){this.store.selectOrder(i.id);}onDrop(i,e){if(i.previousContainer!==i.container){let t=i.previousContainer.data[i.previousIndex];this.store.moveOrderStatus(t.id,e);}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=CI({type:n,selectors:[["app-kanban-board"]],decls:6,vars:4,consts:[["cdkDropListGroup","",1,"flex-1","overflow-x-auto","kanban-scroll","p-6","bg-background","h-full"],[1,"flex","gap-6","h-full","min-w-max","p-4"],["title","Received","status","RECEIVED",3,"actionClick","viewDetailsClick","drop","orders"],["title","Preparing","status","PREPARING",3,"actionClick","viewDetailsClick","drop","orders"],["title","Ready","status","READY",3,"actionClick","viewDetailsClick","drop","orders"],["title","Delivered","status","DELIVERED",3,"actionClick","viewDetailsClick","drop","orders"]],template:function(e,t){e&1&&(ai$1(0,"main",0)(1,"div",1)(2,"app-kanban-column",2),up("actionClick",function(r){return t.onOrderAction(r)})("viewDetailsClick",function(r){return t.onViewDetails(r)})("drop",function(r){return t.onDrop(r,"RECEIVED")}),yc(),ai$1(3,"app-kanban-column",3),up("actionClick",function(r){return t.onOrderAction(r)})("viewDetailsClick",function(r){return t.onViewDetails(r)})("drop",function(r){return t.onDrop(r,"PREPARING")}),yc(),ai$1(4,"app-kanban-column",4),up("actionClick",function(r){return t.onOrderAction(r)})("viewDetailsClick",function(r){return t.onViewDetails(r)})("drop",function(r){return t.onDrop(r,"READY")}),yc(),ai$1(5,"app-kanban-column",5),up("actionClick",function(r){return t.onOrderAction(r)})("viewDetailsClick",function(r){return t.onViewDetails(r)})("drop",function(r){return t.onDrop(r,"DELIVERED")}),yc()()()),e&2&&(Vy(2),rp("orders",t.store.receivedOrders()),Vy(),rp("orders",t.store.preparingOrders()),Vy(),rp("orders",t.store.readyOrders()),Vy(),rp("orders",t.store.deliveredOrders()));},dependencies:[wt,vt,ki],encapsulation:2})};var Ri=(()=>{class n{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t);}static addMultipleClasses(e,t){if(e&&t)if(e.classList){let o=t.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r]);}else {let o=t.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r];}}static removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "));}static removeMultipleClasses(e,t){e&&t&&[t].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)));}static hasClass(e,t){return e&&t?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):false}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return this.isElement(e)?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,o=0;for(var r=0;r<t.length;r++){if(t[r]==e)return o;t[r].nodeType==1&&o++;}return  -1}static indexWithinGroup(e,t){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[t]&&o[s].nodeType==1&&r++;}return  -1}static appendOverlay(e,t,o="self"){o!=="self"&&e&&t&&this.appendChild(e,t);}static alignOverlay(e,t,o="self",r=true){e&&t&&(r&&(e.style.minWidth=`${n.getOuterWidth(t)}px`),o==="self"?this.relativePosition(e,t):this.absolutePosition(e,t));}static relativePosition(e,t,o=true){let r=oe=>{if(oe)return getComputedStyle(oe).getPropertyValue("position")==="relative"?oe:r(oe.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=t.offsetHeight,l=t.getBoundingClientRect(),h=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),_=this.getViewport(),P=r(e)?.getBoundingClientRect()||{top:-1*h,left:-1*g},J,le,z="top";l.top+a+s.height>_.height?(J=l.top-P.top-s.height,z="bottom",l.top+J<0&&(J=-1*l.top)):(J=a+l.top-P.top,z="top");let Ye=l.left+s.width-_.width,Xe=l.left-P.left;if(s.width>_.width?le=(l.left-P.left)*-1:Ye>0?le=Xe-Ye:le=l.left-P.left,e.style.top=J+"px",e.style.left=le+"px",e.style.transformOrigin=z,o){let oe=xi$1(/-anchor-gutter$/)?.value;e.style.marginTop=z==="bottom"?`calc(${oe??"2px"} * -1)`:oe??"";}}static absolutePosition(e,t,o=true){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=t.offsetHeight,h=t.offsetWidth,g=t.getBoundingClientRect(),_=this.getWindowScrollTop(),S=this.getWindowScrollLeft(),P=this.getViewport(),J,le;g.top+l+s>P.height?(J=g.top+_-s,e.style.transformOrigin="bottom",J<0&&(J=_)):(J=l+g.top+_,e.style.transformOrigin="top"),g.left+a>P.width?le=Math.max(0,g.left+S+h-a):le=g.left+S,e.style.top=J+"px",e.style.left=le+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))");}static getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let h=l.split(",");for(let g of h){let _=this.findSingle(a,g);_&&s(_)&&t.push(_);}}a.nodeType!==9&&s(a)&&t.push(a);}}return t}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementDimensions(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}static scrollInView(e,t){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),g=t.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,_=e.scrollTop,S=e.clientHeight,P=this.getOuterHeight(t);g<0?e.scrollTop=_+g:g+P>S&&(e.scrollTop=_+g-S+P);}static fadeIn(e,t){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/t,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16));};s();}static fadeOut(e,t){var o=1,r=50,s=t,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o;},r);}static getWindowScrollTop(){let e=document.documentElement;return (window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return (window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return [].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,t)}static getOuterWidth(e,t){let o=e.offsetWidth;if(t){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight);}return o}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,o=getComputedStyle(e);return t+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),t}static width(e){let t=e.offsetWidth,o=getComputedStyle(e);return t-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,o=getComputedStyle(e);return t+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),t}static getOuterHeight(e,t){let o=e.offsetHeight;if(t){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom);}return o}static getHeight(e){let t=e.offsetHeight,o=getComputedStyle(e);return t-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,o=getComputedStyle(e);return t-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),t}static getViewport(){let e=window,t=document,o=t.documentElement,r=t.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return {width:s,height:a}}static getOffset(e){var t=e.getBoundingClientRect();return {top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let o=e.parentNode;if(!o)throw "Can't replace element";return o.replaceChild(t,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return  true;var o=e.indexOf("Trident/");if(o>0){e.indexOf("rv:");return  true}var s=e.indexOf("Edge/");return s>0}static isIOS(){return /iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return /(android)/i.test(navigator.userAgent)}static isTouchDevice(){return "ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t&&t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw "Cannot append "+t+" to "+e}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw "Cannot remove "+e+" from "+t}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e);}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else {if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let o=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,o){e[t].apply(e,o);}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty();}catch(e){}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=true,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=true:this.browser.webkit&&(this.browser.safari=true);}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return {browser:t[1]||"",version:t[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return !e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,t){e&&document.activeElement!==e&&e.focus(t);}static getFocusableSelectorString(e=""){return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,t=""){let o=this.find(e,this.getFocusableSelectorString(t)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s);}return r}static getFocusableElement(e,t=""){let o=this.findSingle(e,this.getFocusableSelectorString(t));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,t=""){let o=this.getFocusableElements(e,t);return o.length>0?o[0]:null}static getLastFocusableElement(e,t){let o=this.getFocusableElements(e,t);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,t=false){let o=n.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);t?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1);}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,t){if(!e)return null;switch(e){case "document":return document;case "window":return window;case "@next":return t?.nextElementSibling;case "@prev":return t?.previousElementSibling;case "@parent":return t?.parentElement;case "@grandparent":return t?.parentElement?.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return !!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,t){if(e){let o=e.getAttribute(t);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e);}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e);}static createElement(e,t={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,t),r.append(...o),r}}static setAttribute(e,t="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(t,o);}static setAttributes(e,t={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return [s].flat().reduce((l,h)=>{if(h!=null){let g=typeof h;if(g==="string"||g==="number")l.push(h);else if(g==="object"){let _=Array.isArray(h)?o(r,h):Object.entries(h).map(([S,P])=>r==="style"&&(P||P===0)?`${S.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${P}`:P?S:void 0);l=_.length?l.concat(_.filter(S=>!!S)):l;}}return l},a)};Object.entries(t).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s));}});}}static isFocusableElement(e,t=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):false}}return n})();function Oi(){Ri$1({variableName:En("scrollbar.width").name});}function Fi(){Ii$1({variableName:En("scrollbar.width").name});}var Mi=(()=>{class n extends ir$1{autofocus=false;focused=false;platformId=v(Tg);document=v(So$1);host=v(dr$1);onAfterContentChecked(){this.autofocus===false?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",true),this.focused||this.autoFocus();}onAfterViewChecked(){this.focused||this.autoFocus();}autoFocus(){ui$1(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Ri.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=true;});}static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275dir=SI({type:n,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[Yf]})}return n})();var Li=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Wo=`
    ${Li}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Uo={root:({instance:n})=>{let i=typeof n.value=="function"?n.value():n.value,e=typeof n.size=="function"?n.size():n.size,t=typeof n.badgeSize=="function"?n.badgeSize():n.badgeSize,o=typeof n.severity=="function"?n.severity():n.severity;return ["p-badge p-component",{"p-badge-circle":Ne(i)&&String(i).length===1,"p-badge-dot":Jt$1(i),"p-badge-sm":e==="small"||t==="small","p-badge-lg":e==="large"||t==="large","p-badge-xl":e==="xlarge"||t==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},Ni=(()=>{class n extends K{name="badge";style=Wo;classes=Uo;static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275prov=te({token:n,factory:n.\u0275fac})}return n})();var Bi=new _("BADGE_INSTANCE");var pn=(()=>{class n extends ir$1{componentName="Badge";$pcBadge=v(Bi,{optional:true,skipSelf:true})??void 0;bindDirectiveInstance=v(ur$1,{self:true});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}styleClass=CL();badgeSize=CL();size=CL();severity=CL();value=CL();badgeDisabled=CL(false,{transform:SL});_componentStyle=v(Ni);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275cmp=CI({type:n,selectors:[["p-badge"]],hostVars:5,hostBindings:function(t,o){t&2&&(np("data-p",o.dataP),LE(o.cn(o.cx("root"),o.styleClass())),vp("display",o.badgeDisabled()?"none":null));},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[XE([Ni,{provide:Bi,useExisting:n},{provide:_i$1,useExisting:n}]),OI([ur$1]),Yf],decls:1,vars:1,template:function(t,o){t&1&&GE(0),t&2&&Mp(o.value());},dependencies:[st,nn$1,cr$1],encapsulation:2})}return n})(),Ai=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=_I({type:n});static \u0275inj=Sl({imports:[pn,nn$1,nn$1]})}return n})();var Ko=["*"],Zo={root:"p-fluid"},zi=(()=>{class n extends K{name="fluid";classes=Zo;static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275prov=te({token:n,factory:n.\u0275fac})}return n})();var Vi=new _("FLUID_INSTANCE"),Hi=(()=>{class n extends ir$1{componentName="Fluid";$pcFluid=v(Vi,{optional:true,skipSelf:true})??void 0;bindDirectiveInstance=v(ur$1,{self:true});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]));}_componentStyle=v(zi);static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275cmp=CI({type:n,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(t,o){t&2&&LE(o.cx("root"));},features:[XE([zi,{provide:Vi,useExisting:n},{provide:_i$1,useExisting:n}]),OI([ur$1]),Yf],ngContentSelectors:Ko,decls:1,vars:0,template:function(t,o){t&1&&(yE(),vE(0));},dependencies:[st],encapsulation:2})}return n})();var $i=(()=>{class n extends Ce{pathId;onInit(){this.pathId="url(#"+bt$1()+")";}static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275cmp=CI({type:n,selectors:[["","data-p-icon","spinner"]],features:[Yf],decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,o){t&1&&(fu(),vc(0,"g"),ip(1,"path",0),Ic(),vc(2,"defs")(3,"clipPath",1),ip(4,"rect",2),Ic()()),t&2&&(np("clip-path",o.pathId),Vy(3),cp("id",o.pathId));},encapsulation:2,changeDetection:1})}return n})();var ji=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var qo=`
    ${ji}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Qo={root:"p-ink"},Wi=(()=>{class n extends K{name="ripple";style=qo;classes=Qo;static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275prov=te({token:n,factory:n.\u0275fac})}return n})();var Ui=(()=>{class n extends ir$1{componentName="Ripple";zone=v(z);_componentStyle=v(Wi);animationListener;mouseDownListener;timeout;constructor(){super(),Eu(()=>{ui$1(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this));}):this.remove());});}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(!this.$unstyled()&&dt(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"),!ji$1(t)&&!Ui$1(t)){let a=Math.max(Pi$1(this.el.nativeElement),Bi$1(this.el.nativeElement));t.style.height=a+"px",t.style.width=a+"px";}let o=Wi$1(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Ui$1(t)/2,s=e.pageY-o.top+this.document.body.scrollLeft-ji$1(t)/2;this.renderer.setStyle(t,"top",s+"px"),this.renderer.setStyle(t,"left",r+"px"),!this.$unstyled()&&ct$1(t,"p-ink-active"),t.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&dt(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"));},401);}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&dt(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"));}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&dt(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false");}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)));}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Gi$2(e));}onDestroy(){this.config&&this.config.ripple()&&this.remove();}static \u0275fac=function(t){return new(t||n)};static \u0275dir=SI({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[XE([Wi]),Yf]})}return n})();var Gi=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Yo=["content"],Xo=["loadingicon"],Jo=["icon"],er=["*"],qi=(n,i)=>({class:n,pt:i});function tr(n,i){n&1&&ap(0);}function nr(n,i){if(n&1&&op(0,"span",7),n&2){let e=gE(3);LE(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),rp("pBind",e.ptm("loadingIcon")),np("aria-hidden",true);}}function ir(n,i){if(n&1&&(fu(),op(0,"svg",8)),n&2){let e=gE(3);LE(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),rp("pBind",e.ptm("loadingIcon"))("spin",true),np("aria-hidden",true);}}function or(n,i){if(n&1&&(Ec(0),Jf(1,nr,1,4,"span",3)(2,ir,1,5,"svg",6),Dc()),n&2){let e=gE(2);Vy(),rp("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),Vy(),rp("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon));}}function rr(n,i){}function sr(n,i){if(n&1&&Jf(0,rr,0,0,"ng-template",9),n&2){let e=gE(2);rp("ngIf",e.loadingIconTemplate||e._loadingIconTemplate);}}function ar(n,i){if(n&1&&(Ec(0),Jf(1,or,3,2,"ng-container",2)(2,sr,1,1,null,5),Dc()),n&2){let e=gE();Vy(),rp("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),Vy(),rp("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",nD(3,qi,e.cx("loadingIcon"),e.ptm("loadingIcon")));}}function lr(n,i){if(n&1&&op(0,"span",7),n&2){let e=gE(2);LE(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),rp("pBind",e.ptm("icon")),np("data-p",e.dataIconP);}}function dr(n,i){}function cr(n,i){if(n&1&&Jf(0,dr,0,0,"ng-template",9),n&2){let e=gE(2);rp("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate));}}function ur(n,i){if(n&1&&(Ec(0),Jf(1,lr,1,4,"span",3)(2,cr,1,1,null,5),Dc()),n&2){let e=gE();Vy(),rp("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),Vy(),rp("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",nD(3,qi,e.cx("icon"),e.ptm("icon")));}}function pr(n,i){if(n&1&&(ai$1(0,"span",7),GE(1),yc()),n&2){let e=gE();LE(e.cx("label")),rp("pBind",e.ptm("label")),np("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),Vy(),Mp(e.label||(e.buttonProps==null?null:e.buttonProps.label));}}function hr(n,i){if(n&1&&op(0,"p-badge",10),n&2){let e=gE();rp("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled());}}var mr={root:({instance:n})=>["p-button p-component",{"p-button-icon-only":n.hasIcon&&!n.label&&!n.buttonProps?.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading||n.buttonProps?.loading,"p-button-link":n.link||n.buttonProps?.link,[`p-button-${n.severity||n.buttonProps?.severity}`]:n.severity||n.buttonProps?.severity,"p-button-raised":n.raised||n.buttonProps?.raised,"p-button-rounded":n.rounded||n.buttonProps?.rounded,"p-button-text":n.text||n.variant==="text"||n.buttonProps?.text||n.buttonProps?.variant==="text","p-button-outlined":n.outlined||n.variant==="outlined"||n.buttonProps?.outlined||n.buttonProps?.variant==="outlined","p-button-sm":n.size==="small"||n.buttonProps?.size==="small","p-button-lg":n.size==="large"||n.buttonProps?.size==="large","p-button-plain":n.plain||n.buttonProps?.plain,"p-button-fluid":n.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:n})=>["p-button-icon",{[`p-button-icon-${n.iconPos||n.buttonProps?.iconPos}`]:n.label||n.buttonProps?.label,"p-button-icon-left":(n.iconPos==="left"||n.buttonProps?.iconPos==="left")&&n.label||n.buttonProps?.label,"p-button-icon-right":(n.iconPos==="right"||n.buttonProps?.iconPos==="right")&&n.label||n.buttonProps?.label,"p-button-icon-top":(n.iconPos==="top"||n.buttonProps?.iconPos==="top")&&n.label||n.buttonProps?.label,"p-button-icon-bottom":(n.iconPos==="bottom"||n.buttonProps?.iconPos==="bottom")&&n.label||n.buttonProps?.label},n.icon,n.buttonProps?.icon],spinnerIcon:({instance:n})=>Object.entries(n.cx("icon")).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Ki=(()=>{class n extends K{name="button";style=Gi;classes=mr;static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275prov=te({token:n,factory:n.\u0275fac})}return n})();var Zi=new _("BUTTON_INSTANCE");var Qi=(()=>{class n extends ir$1{componentName="Button";hostName="";$pcButton=v(Zi,{optional:true,skipSelf:true})??void 0;bindDirectiveInstance=v(ur$1,{self:true});_componentStyle=v(Ki);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"));}type="button";badge;disabled;raised=false;rounded=false;text=false;plain=false;outlined=false;link=false;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=false;loadingIcon;severity;buttonProps;fluid=CL(void 0,{transform:SL});onClick=new Le;onFocus=new Le;onBlur=new Le;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=v(Hi,{optional:true,host:true,skipSelf:true});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case "content":this._contentTemplate=e.template;break;case "icon":this._iconTemplate=e.template;break;case "loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}});}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275cmp=CI({type:n,selectors:[["p-button"]],contentQueries:function(t,o,r){if(t&1&&fp(r,Yo,5)(r,Xo,5)(r,Jo,5)(r,tn$1,4),t&2){let s;EE(s=DE())&&(o.contentTemplate=s.first),EE(s=DE())&&(o.loadingIconTemplate=s.first),EE(s=DE())&&(o.iconTemplate=s.first),EE(s=DE())&&(o.templates=s);}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",SL],raised:[2,"raised","raised",SL],rounded:[2,"rounded","rounded",SL],text:[2,"text","text",SL],plain:[2,"plain","plain",SL],outlined:[2,"outlined","outlined",SL],link:[2,"link","link",SL],tabindex:[2,"tabindex","tabindex",xL],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",SL],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",SL],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[XE([Ki,{provide:Zi,useExisting:n},{provide:_i$1,useExisting:n}]),OI([ur$1]),Yf],ngContentSelectors:er,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(t,o){t&1&&(yE(),ai$1(0,"button",0),up("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),vE(1),Jf(2,tr,1,0,"ng-container",1)(3,ar,3,6,"ng-container",2)(4,ur,3,6,"ng-container",2)(5,pr,2,6,"span",3)(6,hr,1,4,"p-badge",4),yc()),t&2&&(LE(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),rp("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),np("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex))("data-p",o.dataP)("data-p-disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("data-p-severity",o.severity||(o.buttonProps==null?null:o.buttonProps.severity)),Vy(2),rp("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),Vy(),rp("ngIf",o.loading||(o.buttonProps==null?null:o.buttonProps.loading)),Vy(),rp("ngIf",!(o.loading||o.buttonProps!=null&&o.buttonProps.loading)),Vy(),rp("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.label||(o.buttonProps==null?null:o.buttonProps.label))),Vy(),rp("ngIf",!o.contentTemplate&&!o._contentTemplate&&(o.badge||(o.buttonProps==null?null:o.buttonProps.badge))));},dependencies:[st,tt,it,nt,Ui,Mi,$i,Ai,pn,nn$1,ur$1],encapsulation:2})}return n})();var Yi=(()=>{class n extends ir$1{pFocusTrapDisabled=false;platformId=v(Tg);document=v(So$1);firstHiddenFocusableElement;lastHiddenFocusableElement;onInit(){ui$1(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements();}onChanges(e){e.pFocusTrapDisabled&&ui$1(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements());}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);}getComputedSelector(e){return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let t=o=>Mi$1("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":true,"data-p-hidden-accessible":true,"data-p-hidden-focusable":true,onFocus:o?.bind(this)});this.firstHiddenFocusableElement=t(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=t(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement);}onFirstHiddenElementFocus(e){let{currentTarget:t,relatedTarget:o}=e,r=o===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(o)?ki$1(t.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;Fi$1(r);}onLastHiddenElementFocus(e){let{currentTarget:t,relatedTarget:o}=e,r=o===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(o)?Hi$1(t.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;Fi$1(r);}static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275dir=SI({type:n,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",SL]},features:[Yf]})}return n})(),Xi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=_I({type:n});static \u0275inj=Sl({})}return n})();var Ji=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border-style: solid;
        border-color: dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-active {
        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-left .p-drawer-leave-active {
        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-right .p-drawer-enter-active {
        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-right .p-drawer-leave-active {
        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-top .p-drawer-enter-active {
        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-top .p-drawer-leave-active {
        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-bottom .p-drawer-enter-active {
        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-bottom .p-drawer-leave-active {
        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }

    .p-drawer-full .p-drawer-enter-active {
        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    .p-drawer-full .p-drawer-leave-active {
        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
    }
    
    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }

    @keyframes p-animate-drawer-enter-left {
        from {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-left {
        to {
            transform: translate3d(-100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-right {
        from {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-right {
        to {
            transform: translate3d(100%, 0px, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-top {
        from {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-top {
        to {
            transform: translate3d(0px, -100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-bottom {
        from {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-leave-bottom {
        to {
            transform: translate3d(0px, 100%, 0px);
        }
    }

    @keyframes p-animate-drawer-enter-full {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-drawer-leave-full {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var gr=["header"],br=["footer"],_r=["content"],vr=["closeicon"],yr=["headless"],wr=["container"],Cr=["closeButton"],xr=["*"];function Dr(n,i){n&1&&ap(0);}function Sr(n,i){if(n&1&&Jf(0,Dr,1,0,"ng-container",4),n&2){let e=gE(2);rp("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate);}}function Er(n,i){n&1&&ap(0);}function kr(n,i){if(n&1&&(ai$1(0,"div",9),GE(1),yc()),n&2){let e=gE(3);LE(e.cx("title")),rp("pBind",e.ptm("title")),Vy(),Mp(e.header);}}function Ir(n,i){n&1&&(fu(),op(0,"svg",12)),n&2&&np("data-pc-section","closeicon");}function Pr(n,i){}function Tr(n,i){n&1&&Jf(0,Pr,0,0,"ng-template");}function Rr(n,i){if(n&1&&Jf(0,Ir,1,1,"svg",11)(1,Tr,1,0,null,4),n&2){let e=gE(4);rp("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),Vy(),rp("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate);}}function Or(n,i){if(n&1){let e=sE();ai$1(0,"p-button",10),up("onClick",function(o){Xl(e);let r=gE(3);return eu(r.close(o))})("keydown.enter",function(o){Xl(e);let r=gE(3);return eu(r.close(o))}),Jf(1,Rr,2,2,"ng-template",null,1,dD),yc();}if(n&2){let e=gE(3);rp("pt",e.ptm("pcCloseButton"))("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel)("unstyled",e.unstyled()),np("data-pc-group-section","iconcontainer");}}function Fr(n,i){n&1&&ap(0);}function Mr(n,i){n&1&&ap(0);}function Lr(n,i){if(n&1&&(Ec(0),ai$1(1,"div",5),Jf(2,Mr,1,0,"ng-container",4),yc(),Dc()),n&2){let e=gE(3);Vy(),rp("pBind",e.ptm("footer"))("ngClass",e.cx("footer")),np("data-pc-section","footer"),Vy(),rp("ngTemplateOutlet",e.footerTemplate||e._footerTemplate);}}function Nr(n,i){if(n&1&&(ai$1(0,"div",5),Jf(1,Er,1,0,"ng-container",4)(2,kr,2,4,"div",6)(3,Or,3,6,"p-button",7),yc(),ai$1(4,"div",5),vE(5),Jf(6,Fr,1,0,"ng-container",4),yc(),Jf(7,Lr,3,4,"ng-container",8)),n&2){let e=gE(2);rp("pBind",e.ptm("header"))("ngClass",e.cx("header")),np("data-pc-section","header"),Vy(),rp("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),Vy(),rp("ngIf",e.header),Vy(),rp("ngIf",e.showCloseIcon&&e.closable),Vy(),rp("pBind",e.ptm("content"))("ngClass",e.cx("content")),np("data-pc-section","content"),Vy(2),rp("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),Vy(),rp("ngIf",e.footerTemplate||e._footerTemplate);}}function Br(n,i){if(n&1){let e=sE();ai$1(0,"div",3,0),up("pMotionOnBeforeEnter",function(o){Xl(e);let r=gE();return eu(r.onBeforeEnter(o))})("pMotionOnAfterLeave",function(o){Xl(e);let r=gE();return eu(r.onAfterLeave(o))})("keydown",function(o){Xl(e);let r=gE();return eu(r.onKeyDown(o))}),YI(2,Sr,1,1,"ng-container")(3,Nr,8,11),yc();}if(n&2){let e=gE();OE(e.style),LE(e.cn(e.cx("root"),e.styleClass)),rp("pBind",e.ptm("root"))("pMotion",e.visible)("pMotionAppear",true)("pMotionEnterActiveClass",e.$enterAnimation())("pMotionLeaveActiveClass",e.$leaveAnimation())("pMotionOptions",e.computedMotionOptions()),np("data-p",e.dataP)("data-p-open",e.visible),Vy(2),KI(e.headlessTemplate||e._headlessTemplate?2:3);}}var Ar=`
${Ji}

/** For PrimeNG **/
.p-drawer {
    position: fixed;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-end-width: 1px;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-start-width: 1px;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

/* Animations */
.p-drawer-enter-left {
    animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-left {
    animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-right {
    animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-right {
    animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-top {
    animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-top {
    animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-bottom {
    animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-bottom {
    animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-full {
    animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-full {
    animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
`,zr={mask:({instance:n})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter-active":n.modal},{"p-drawer-full":n.fullScreen()}],root:({instance:n})=>["p-drawer p-component",{"p-drawer-full":n.fullScreen(),"p-drawer-open":n.visible},`p-drawer-${n.position()}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},eo=(()=>{class n extends K{name="drawer";style=Ar;classes=zr;static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275prov=te({token:n,factory:n.\u0275fac})}return n})();var to=new _("DRAWER_INSTANCE"),hn=(()=>{class n extends ir$1{componentName="Drawer";$pcDrawer=v(to,{optional:true,skipSelf:true})??void 0;bindDirectiveInstance=v(ur$1,{self:true});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"));}appendTo=CL(void 0);motionOptions=CL(void 0);computedMotionOptions=mD(()=>H(H({},this.ptm("motion")),this.motionOptions()));blockScroll=false;style;styleClass;ariaCloseLabel;autoZIndex=true;baseZIndex=0;modal=true;closeButtonProps={severity:"secondary",text:true,rounded:true};dismissible=true;showCloseIcon=true;closeOnEscape=true;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible??false}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=true);}position=CL("left");fullScreen=CL(false);$enterAnimation=mD(()=>this.fullScreen()?"p-drawer-enter-full":`p-drawer-enter-${this.position()}`);$leaveAnimation=mD(()=>this.fullScreen()?"p-drawer-leave-full":`p-drawer-leave-${this.position()}`);header;maskStyle;closable=true;onShow=new Le;onHide=new Le;visibleChange=new Le;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=false;modalVisible=false;container;mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=v(eo);onAfterViewInit(){this.initialized=true;}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;$appendTo=mD(()=>this.appendTo()||this.config.overlayAppendTo());_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case "content":this._contentTemplate=e.template;break;case "header":this._headerTemplate=e.template;break;case "footer":this._footerTemplate=e.template;break;case "closeicon":this._closeIconTemplate=e.template;break;case "headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}});}onKeyDown(e){e.code==="Escape"&&this.hide(false);}show(){this.container?.setAttribute(this.$attrSelector,""),this.autoZIndex&&Ot.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(true);}hide(e=true){e&&this.onHide.emit({}),this.modal&&this.disableModality();}close(e){this.hide(),this.visibleChange.emit(false),this.cd.markForCheck(),e.preventDefault();}enableModality(){let e=this.document.querySelectorAll('[data-p-open="true"]'),t=e.length,o=t==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[t-1].style.zIndex)-1);if(!this.mask){if(this.mask=this.renderer.createElement("div"),this.mask){let r=`z-index: ${o};${this.getMaskStyle()}`;ht$1(this.mask,"style",r),ht$1(this.mask,"data-p",this.dataP),ct$1(this.mask,this.cx("mask"));}this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r);})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Oi();}}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,t])=>`${e}: ${t}`).join("; "):""}disableModality(){this.mask&&(!this.$unstyled()&&dt(this.mask,"p-overlay-mask-enter-active"),!this.$unstyled()&&ct$1(this.mask,"p-overlay-mask-leave-active"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)));}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Fi(),this.unbindAnimationEndListener(),this.mask=null;}onBeforeEnter(e){this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();}onAfterLeave(){this.hide(false),Ot.clear(this.container),this.unbindGlobalListeners(),this.modalVisible=false,this.container=null;}appendContainer(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?$i$1(this.document.body,this.container):$i$1(this.$appendTo(),this.container));}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",t=>{t.which==27&&parseInt(this.container?.style.zIndex)===Ot.get(this.container)&&this.close(t);});}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null);}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null);}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener();}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null);}onDestroy(){this.initialized=false,this.visible&&this.modal&&this.destroyModal(),this.$appendTo()&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&Ot.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener();}get dataP(){return this.cn({"full-screen":this.position()==="full",[this.position()]:this.position(),open:this.visible,modal:this.modal})}static \u0275fac=(()=>{let e;return function(o){return (e||(e=cm(n)))(o||n)}})();static \u0275cmp=CI({type:n,selectors:[["p-drawer"]],contentQueries:function(t,o,r){if(t&1&&fp(r,gr,4)(r,br,4)(r,_r,4)(r,vr,4)(r,yr,4)(r,tn$1,4),t&2){let s;EE(s=DE())&&(o.headerTemplate=s.first),EE(s=DE())&&(o.footerTemplate=s.first),EE(s=DE())&&(o.contentTemplate=s.first),EE(s=DE())&&(o.closeIconTemplate=s.first),EE(s=DE())&&(o.headlessTemplate=s.first),EE(s=DE())&&(o.templates=s);}},viewQuery:function(t,o){if(t&1&&pp(wr,5)(Cr,5),t&2){let r;EE(r=DE())&&(o.containerViewChild=r.first),EE(r=DE())&&(o.closeButtonViewChild=r.first);}},inputs:{appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"],blockScroll:[2,"blockScroll","blockScroll",SL],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",SL],baseZIndex:[2,"baseZIndex","baseZIndex",xL],modal:[2,"modal","modal",SL],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",SL],showCloseIcon:[2,"showCloseIcon","showCloseIcon",SL],closeOnEscape:[2,"closeOnEscape","closeOnEscape",SL],transitionOptions:"transitionOptions",visible:"visible",position:[1,"position"],fullScreen:[1,"fullScreen"],header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",SL]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[XE([eo,{provide:to,useExisting:n},{provide:_i$1,useExisting:n}]),OI([ur$1]),Yf],ngContentSelectors:xr,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary","pFocusTrap","",3,"pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions","class","style"],["role","complementary","pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterLeave","keydown","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[4,"ngTemplateOutlet"],[3,"pBind","ngClass"],[3,"pBind","class",4,"ngIf"],[3,"pt","ngClass","buttonProps","ariaLabel","unstyled","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"pBind"],[3,"onClick","keydown.enter","pt","ngClass","buttonProps","ariaLabel","unstyled"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(t,o){t&1&&(yE(),YI(0,Br,4,13,"div",2)),t&2&&KI(o.modalVisible?0:-1);},dependencies:[st,et,tt,it,Qi,st$1,nn$1,ur$1,Xi,Yi,Lt,Dt$1],encapsulation:2})}return n})(),no=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=_I({type:n});static \u0275inj=Sl({imports:[hn,nn$1,nn$1]})}return n})();var xt=class n{analyzeOrder(i){if(Math.random()<.1)return Eh(()=>new Error("AI Service temporarily unavailable")).pipe(jh(1500));let e=[],t=i.items.some(r=>r.name.toLowerCase().includes("combo")),o=i.items.some(r=>r.name.toLowerCase().includes("cola")||r.name.toLowerCase().includes("water")||r.name.toLowerCase().includes("sprite"));if(t&&!o&&e.push({type:"warning",title:"Missing Beverage",description:"Customer ordered a combo but no drink is selected. Upsell opportunity.",icon:"local_drink"}),i.status==="PREPARING"){let r=new Date(i.placedAt).getTime(),a=(new Date().getTime()-r)/(1e3*60);a>15&&e.push({type:"warning",title:"High Delay Warning",description:`Order has been preparing for ${Math.round(a)} minutes.`,icon:"timer"});}return i.items.length<2&&i.totalAmount<15&&e.push({type:"info",title:"Upsell Opportunity",description:"Suggest adding a side of fries or dessert.",icon:"add_circle"}),e.length===0&&e.push({type:"success",title:"All Looks Good",description:"No anomalies detected for this order.",icon:"check_circle"}),Ih(e).pipe(jh(1500))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=te({token:n,factory:n.\u0275fac,providedIn:"root"})};var Hr=(n,i)=>({"bg-surface border-border-dark":n,"bg-primary/10 border-primary":i}),$r=(n,i,e)=>({"text-danger":n,"text-primary":i,"text-success":e}),jr=(n,i)=>i.id,Wr=(n,i)=>i.title;function Ur(n,i){if(n&1){let e=sE();ai$1(0,"button",32),up("click",function(){Xl(e);let o=gE(),r=gE(2);return eu(r.analyze(o))}),GE(1,"RETRY"),yc();}}function Gr(n,i){n&1&&(ai$1(0,"div",20),GE(1," Analyzing order details... "),yc());}function Kr(n,i){if(n&1&&(ai$1(0,"div",21),GE(1),yc()),n&2){let e=gE(3);Vy(),wc(" ",e.error()," ");}}function Zr(n,i){if(n&1&&(ai$1(0,"div",33)(1,"span",34),GE(2),yc(),ai$1(3,"div",35)(4,"span",36),GE(5),yc(),ai$1(6,"span",37),GE(7),yc()()()),n&2){let e=i.$implicit;Vy(),rp("ngClass",rD(4,$r,e.type==="warning",e.type==="info",e.type==="success")),Vy(),Mp(e.icon),Vy(3),Mp(e.title),Vy(2),Mp(e.description);}}function qr(n,i){if(n&1&&XI(0,Zr,8,8,"div",33,Wr),n&2){let e=gE(3);eE(e.insights());}}function Qr(n,i){if(n&1&&(ai$1(0,"span",37),GE(1),aD(2,"currency"),yc()),n&2){let e=gE().$implicit;Vy(),wc("",lD(2,1,e.unitPrice||8.5)," each");}}function Yr(n,i){if(n&1&&(ai$1(0,"li",45),op(1,"span",46),GE(2),yc()),n&2){let e=i.$implicit;Vy(2),wc(" Modifier: ",e," ");}}function Xr(n,i){if(n&1&&(ai$1(0,"div",24)(1,"div",38)(2,"div",39)(3,"span",40),GE(4,"lunch_dining"),yc()(),ai$1(5,"div",41)(6,"div",42)(7,"span",28),GE(8),yc(),ai$1(9,"div",43),GE(10),aD(11,"currency"),yc()(),YI(12,Qr,3,3,"span",37),ai$1(13,"ul",44),XI(14,Yr,3,1,"li",45,JI),yc()()()()),n&2){let e=i.$implicit;Vy(8),Np("",e.quantity,"x ",e.name),Vy(2),wc(" ",lD(11,4,e.totalPrice||e.quantity*8.5)," "),Vy(2),KI(e.quantity>1?12:-1),Vy(2),eE(e.modifiers);}}function Jr(n,i){if(n&1){let e=sE();ai$1(0,"div",2)(1,"div",3)(2,"div")(3,"h2",4),GE(4),yc(),ai$1(5,"div",5),op(6,"span",6),ai$1(7,"span",7),GE(8),yc()()(),ai$1(9,"button",8),up("click",function(){Xl(e);let o=gE(2);return eu(o.onClose())}),ai$1(10,"span",9),GE(11,"close"),yc()()(),ai$1(12,"div",10)(13,"div",11),op(14,"div",12),ai$1(15,"div",13)(16,"span",14),GE(17),yc(),ai$1(18,"div",15)(19,"div",16)(20,"h3",17),GE(21," AI Insights & Suggestions "),yc(),YI(22,Ur,2,0,"button",18),yc(),ai$1(23,"div",19),YI(24,Gr,2,0,"div",20)(25,Kr,2,1,"div",21)(26,qr,2,0),yc()()()(),ai$1(27,"div",22)(28,"h4",23),GE(29,"Order Details"),yc(),XI(30,Xr,16,6,"div",24,jr),yc()(),ai$1(32,"div",25)(33,"div",26)(34,"span",27),GE(35,"Subtotal"),yc(),ai$1(36,"span",28),GE(37),aD(38,"currency"),yc()(),ai$1(39,"div",26)(40,"span",27),GE(41,"Tax"),yc(),ai$1(42,"span",28),GE(43),aD(44,"currency"),yc()(),op(45,"div",29),ai$1(46,"div",26)(47,"span",30),GE(48,"Total"),yc(),ai$1(49,"span",31),GE(50),aD(51,"currency"),yc()()()();}if(n&2){let e=i,t=gE(2);Vy(4),wc("Order ",e.orderNumber),Vy(2),rp("ngClass",e.status==="PREPARING"?"bg-primary":"bg-text-muted"),Vy(),rp("ngClass",e.status==="PREPARING"?"text-primary":"text-text-muted"),Vy(),wc(" ",e.status," "),Vy(5),rp("ngClass",nD(23,Hr,t.isAnalyzing()||t.error(),!t.isAnalyzing()&&!t.error())),Vy(),Ip("opacity-0",t.isAnalyzing()||t.error()),Vy(2),Ip("animate-spin",t.isAnalyzing()),rp("ngClass",t.error()?"text-danger":"text-primary"),Vy(),wc(" ",t.isAnalyzing()?"sync":"smart_toy"," "),Vy(3),rp("ngClass",t.error()?"text-danger":"text-primary"),Vy(2),KI(t.error()?22:-1),Vy(2),KI(t.isAnalyzing()?24:t.error()?25:26),Vy(6),eE(e.items),Vy(7),Mp(lD(38,17,t.subtotal())),Vy(6),Mp(lD(44,19,t.tax())),Vy(7),Mp(lD(51,21,t.total()));}}function es(n,i){if(n&1&&YI(0,Jr,52,26,"div",2),n&2){let e,t=gE();KI((e=t.order())?0:-1,e);}}var Dt=class n{aiService=v(xt);order=CL(null);close=TL();visible=mD(()=>this.order()!==null);isAnalyzing=Ys(false);error=Ys(null);insights=Ys([]);subtotal=mD(()=>{let i=this.order();return i?i.items.reduce((e,t)=>e+(t.totalPrice||t.quantity*8.5),0):0});tax=mD(()=>this.subtotal()*.08);total=mD(()=>this.subtotal()+this.tax());constructor(){Eu(()=>{let i=this.order();i?this.analyze(i):(this.insights.set([]),this.error.set(null),this.isAnalyzing.set(false));});}analyze(i){let e=i||this.order();e&&(this.isAnalyzing.set(true),this.error.set(null),this.insights.set([]),this.aiService.analyzeOrder(e).subscribe({next:t=>{this.insights.set(t),this.isAnalyzing.set(false);},error:t=>{this.error.set(t.message||"Failed to analyze order."),this.isAnalyzing.set(false);}}));}onClose(){this.close.emit();}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=CI({type:n,selectors:[["app-ai-assistant-panel"]],inputs:{order:[1,"order"]},outputs:{close:"close"},decls:2,vars:3,consts:[["position","right","styleClass","w-[25rem] bg-surface border-l border-border-dark !p-0",3,"onHide","visible","modal","showCloseIcon"],["pTemplate","headless"],[1,"h-full","flex","flex-col"],[1,"flex","items-center","justify-between","p-4","border-b","border-border-dark","bg-surface","shrink-0"],[1,"text-white","text-[1.25rem]","font-semibold","leading-tight","m-0"],[1,"flex","items-center","gap-1","mt-1"],[1,"w-2","h-2","rounded-full","animate-pulse",3,"ngClass"],[1,"text-[0.75rem]","font-medium","uppercase","tracking-wider",3,"ngClass"],["aria-label","Close Assistant",1,"text-text-muted","hover:text-white","transition-colors","p-1","rounded","hover:bg-surface-hover","flex","items-center","justify-center","cursor-pointer","border-none","bg-transparent",3,"click"],[1,"material-symbols-outlined","text-2xl"],[1,"flex-1","overflow-y-auto","scrollbar-hide","p-4","flex","flex-col","gap-6"],[1,"border","rounded-md","p-4","flex","flex-col","gap-4","relative","overflow-hidden","transition-colors","duration-500",3,"ngClass"],[1,"absolute","-top-10","-right-10","w-32","h-32","bg-primary/20","blur-3xl","rounded-full","transition-opacity","duration-500"],[1,"flex","items-start","gap-2","relative","z-10","w-full"],[1,"material-symbols-outlined","shrink-0","text-xl",3,"ngClass"],[1,"flex","flex-col","gap-2","w-full"],[1,"flex","justify-between","items-center","w-full"],[1,"text-[0.875rem]","font-semibold","leading-tight","uppercase","tracking-wider","m-0",3,"ngClass"],[1,"text-[0.625rem]","font-bold","uppercase","tracking-wider","text-text-muted","hover:text-white","cursor-pointer","border-none","bg-transparent"],[1,"flex","flex-col","gap-2","mt-1"],[1,"flex","items-center","gap-2","text-text-muted","text-[0.8125rem]","animate-pulse"],[1,"flex","items-center","gap-2","text-text-muted","text-[0.8125rem]"],[1,"flex","flex-col","gap-2"],[1,"text-text-muted","text-[0.75rem]","font-medium","uppercase","tracking-wider","mb-1","m-0"],[1,"bg-surface","border","border-border-dark","rounded-md","p-2","flex","items-start","justify-between","group","hover:bg-surface-hover","transition-colors"],[1,"p-4","border-t","border-border-dark","bg-surface","shrink-0","flex","flex-col","gap-4"],[1,"flex","items-center","justify-between"],[1,"text-text-muted","text-[0.875rem]"],[1,"text-white","text-[0.875rem]","font-medium"],[1,"w-full","h-px","bg-border-dark"],[1,"text-white","text-[1rem]","font-semibold"],[1,"text-primary","text-[1.25rem]","font-semibold"],[1,"text-[0.625rem]","font-bold","uppercase","tracking-wider","text-text-muted","hover:text-white","cursor-pointer","border-none","bg-transparent",3,"click"],[1,"flex","items-start","gap-2","text-[0.8125rem]"],[1,"material-symbols-outlined","text-base","mt-0.5","shrink-0",3,"ngClass"],[1,"flex","flex-col"],[1,"text-white","font-medium"],[1,"text-text-muted","text-[0.75rem]"],[1,"flex","gap-4","flex-1"],[1,"w-10","h-10","rounded","bg-background","flex","items-center","justify-center","border","border-border-dark","shrink-0"],[1,"material-symbols-outlined","text-text-muted","text-xl"],[1,"flex","flex-col","gap-1","flex-1"],[1,"flex","justify-between","w-full"],[1,"text-white","text-[0.875rem]","font-semibold","shrink-0","ml-2"],[1,"flex","flex-col","gap-0.5","m-0","p-0","list-none"],[1,"text-text-muted","text-[0.75rem]","flex","items-center","gap-1"],[1,"w-1","h-1","rounded-full","bg-text-muted"]],template:function(e,t){e&1&&(ai$1(0,"p-drawer",0),up("onHide",function(){return t.onClose()}),Jf(1,es,1,1,"ng-template",1),yc()),e&2&&rp("visible",t.visible())("modal",true)("showCloseIcon",false);},dependencies:[st,et,no,hn,tn$1,ot],encapsulation:2})};function ts(n,i){n&1&&(op(0,"span",7),ai$1(1,"span",8),GE(2,"Connecting..."),yc());}function ns(n,i){n&1&&(op(0,"span",9),ai$1(1,"span",10),GE(2,"Live"),yc());}function is(n,i){n&1&&(op(0,"span",11),ai$1(1,"span",12),GE(2,"Disconnected"),yc());}function os(n,i){n&1&&(ai$1(0,"main",3)(1,"div",13)(2,"div",14),op(3,"app-panel-skeleton"),yc(),ai$1(4,"div",14),op(5,"app-panel-skeleton"),yc(),ai$1(6,"div",14),op(7,"app-panel-skeleton"),yc(),ai$1(8,"div",14),op(9,"app-panel-skeleton"),yc()()());}function rs(n,i){if(n&1){let e=sE();ai$1(0,"div",4)(1,"span",15),GE(2,"error"),yc(),ai$1(3,"h3",16),GE(4,"Failed to load orders"),yc(),ai$1(5,"p",17),GE(6),yc(),ai$1(7,"button",18),up("click",function(){Xl(e);let o=gE();return eu(o.store.loadOrders())}),GE(8," Retry "),yc()();}if(n&2){let e=gE();Vy(6),Mp(e.store.error());}}function ss(n,i){n&1&&(ai$1(0,"div",5),op(1,"app-kanban-board"),yc());}var io=class n{store=v(X);ngOnInit(){this.store.updateFilters({searchQuery:""}),this.store.loadOrders();}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=CI({type:n,selectors:[["app-live-orders-page"]],decls:11,vars:5,consts:[[1,"h-full","flex","flex-col","w-full","overflow-hidden","bg-background"],[1,"flex-1","flex","min-h-0","relative"],[1,"absolute","top-2","right-2","z-10","flex","items-center","gap-1.5","px-3","py-1","rounded-full","bg-background","border","border-border-dark","shadow-sm","text-xs","font-semibold"],[1,"flex-1","overflow-x-auto","p-6","bg-background","h-full","w-full"],[1,"absolute","inset-0","z-40","flex","flex-col","items-center","justify-center","bg-background/90","text-center","p-6"],[1,"flex-1","overflow-hidden"],[3,"close","order"],[1,"w-2","h-2","rounded-full","bg-primary","animate-ping"],[1,"text-primary"],[1,"w-2","h-2","rounded-full","bg-success"],[1,"text-success"],[1,"w-2","h-2","rounded-full","bg-danger"],[1,"text-danger"],[1,"flex","gap-6","h-full","min-w-max","pb-4"],[1,"w-[20rem]","h-full","shrink-0"],[1,"material-symbols-outlined","text-danger","text-5xl","mb-4"],[1,"text-white","text-lg","font-bold","mb-2"],[1,"text-text-muted","mb-6"],[1,"bg-primary","text-background","font-semibold","px-6","py-2","rounded","transition-colors","hover:bg-primary/90",3,"click"]],template:function(e,t){e&1&&(ai$1(0,"div",0),op(1,"app-order-filters"),ai$1(2,"div",1)(3,"div",2),YI(4,ts,3,0)(5,ns,3,0)(6,is,3,0),yc(),YI(7,os,10,0,"main",3),YI(8,rs,9,1,"div",4),YI(9,ss,2,0,"div",5),ai$1(10,"app-ai-assistant-panel",6),up("close",function(){return t.store.selectOrder(null)}),yc()()()),e&2&&(Vy(4),KI(t.store.realtimeConnectionState()==="CONNECTING"?4:t.store.realtimeConnectionState()==="CONNECTED"?5:6),Vy(3),KI(t.store.isLoading()?7:-1),Vy(),KI(t.store.error()?8:-1),Vy(),KI(t.store.isLoading()?-1:9),Vy(),rp("order",t.store.selectedOrder()));},dependencies:[ut,Ct,Dt,a],encapsulation:2})};export{io as LiveOrdersPageComponent};