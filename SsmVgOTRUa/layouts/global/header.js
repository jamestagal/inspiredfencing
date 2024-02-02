import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_svg_element,claim_text,detach,element,init,insert_hydration,listen,noop,run_all,safe_not_equal,set_style,space,src_url_equal,svg_element,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let j,n,o,a,J,G,l,d,s,E,Y,C,q,x,A,W,O,t,v,u,I,z,U,_,m,R,M,B,g,h,V,T,H,w,f,L,S,P,y,p,D,F,$,b,N,K,c,r,k,X,i,Z,Q,ee;return{c(){j=element("header"),n=element("div"),o=element("a"),a=element("img"),G=space(),l=element("nav"),d=element("button"),s=element("div"),E=element("span"),Y=space(),C=element("span"),q=space(),x=element("span"),W=space(),O=element("div"),t=element("ul"),v=element("li"),u=element("a"),I=text("Home"),U=space(),_=element("li"),m=element("a"),R=text("About"),B=space(),g=element("li"),h=element("a"),V=text("Portfolio"),H=space(),w=element("li"),f=element("a"),L=text("Reviews"),P=space(),y=element("li"),p=element("a"),D=text("Contact"),$=space(),b=element("a"),N=text("Contact Us"),K=space(),c=element("button"),r=svg_element("svg"),k=svg_element("path"),X=space(),i=element("img"),this.h()},l(e){j=claim_element(e,"HEADER",{id:!0});var A,S,M,F,T,z,Q,Z,J,ue=children(j),de,se,ee,ne,oe,ie,ae,re,ce,le,te;n=claim_element(ue,"DIV",{class:!0}),S=children(n),o=claim_element(S,"A",{href:!0,title:!0,rel:!0,class:!0,"aria-label":!0}),de=children(o),a=claim_element(de,"IMG",{src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0,decoding:!0}),de.forEach(detach),G=claim_space(S),l=claim_element(S,"NAV",{class:!0,role:!0}),T=children(l),d=claim_element(T,"BUTTON",{class:!0,"aria-label":!0}),Z=children(d),s=claim_element(Z,"DIV",{class:!0,"aria-hidden":!0}),M=children(s),E=claim_element(M,"SPAN",{class:!0,"aria-hidden":!0}),children(E).forEach(detach),Y=claim_space(M),C=claim_element(M,"SPAN",{class:!0,"aria-hidden":!0}),children(C).forEach(detach),q=claim_space(M),x=claim_element(M,"SPAN",{class:!0,"aria-hidden":!0}),children(x).forEach(detach),M.forEach(detach),Z.forEach(detach),W=claim_space(T),O=claim_element(T,"DIV",{class:!0}),se=children(O),t=claim_element(se,"UL",{id:!0,class:!0,"aria-expanded":!0}),A=children(t),v=claim_element(A,"LI",{class:!0}),J=children(v),u=claim_element(J,"A",{href:!0,class:!0}),ee=children(u),I=claim_text(ee,"Home"),ee.forEach(detach),J.forEach(detach),U=claim_space(A),_=claim_element(A,"LI",{class:!0}),z=children(_),m=claim_element(z,"A",{href:!0,class:!0}),ne=children(m),R=claim_text(ne,"About"),ne.forEach(detach),z.forEach(detach),B=claim_space(A),g=claim_element(A,"LI",{class:!0}),Q=children(g),h=claim_element(Q,"A",{href:!0,class:!0}),oe=children(h),V=claim_text(oe,"Portfolio"),oe.forEach(detach),Q.forEach(detach),H=claim_space(A),w=claim_element(A,"LI",{class:!0}),ie=children(w),f=claim_element(ie,"A",{href:!0,class:!0}),ae=children(f),L=claim_text(ae,"Reviews"),ae.forEach(detach),ie.forEach(detach),P=claim_space(A),y=claim_element(A,"LI",{class:!0}),re=children(y),p=claim_element(re,"A",{href:!0,class:!0}),ce=children(p),D=claim_text(ce,"Contact"),ce.forEach(detach),re.forEach(detach),A.forEach(detach),se.forEach(detach),T.forEach(detach),$=claim_space(S),b=claim_element(S,"A",{href:!0,class:!0}),le=children(b),N=claim_text(le,"Contact Us"),le.forEach(detach),K=claim_space(S),c=claim_element(S,"BUTTON",{id:!0,"aria-label":!0}),F=children(c),r=claim_svg_element(F,"svg",{class:!0,xmlns:!0,viewBox:!0,style:!0,"xml:space":!0}),te=children(r),k=claim_svg_element(te,"path",{d:!0}),children(k).forEach(detach),te.forEach(detach),X=claim_space(F),i=claim_element(F,"IMG",{class:!0,"aria-hidden":!0,src:!0,decoding:!0,alt:!0,width:!0,height:!0}),F.forEach(detach),S.forEach(detach),ue.forEach(detach),this.h()},h(){src_url_equal(a.src,J="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Flogo-black.svg")||attr(a,"src",J),attr(a,"alt","logo"),attr(a,"width","210"),attr(a,"height","29"),attr(a,"aria-hidden","true"),attr(a,"decoding","async"),attr(o,"href","."),attr(o,"title",e[0]),attr(o,"rel","Code Stitch"),attr(o,"class","cs-logo"),attr(o,"aria-label","back to home"),attr(E,"class","cs-line cs-line1"),attr(E,"aria-hidden","true"),attr(C,"class","cs-line cs-line2"),attr(C,"aria-hidden","true"),attr(x,"class","cs-line cs-line3"),attr(x,"aria-hidden","true"),attr(s,"class","cs-box"),attr(s,"aria-hidden","true"),attr(d,"class",A="cs-toggle"+(e[1]?" show":"")),attr(d,"aria-label","mobile menu toggle"),attr(u,"href","."),attr(u,"class",z="cs-li-link "+(e[2].id==="home"?"cs-active":"")),attr(v,"class","cs-li"),attr(m,"href","about"),attr(m,"class",M="cs-li-link "+(e[2].id==="about"?"cs-active":"")),attr(_,"class","cs-li"),attr(h,"href","portfolio"),attr(h,"class",T="cs-li-link "+(e[2].id==="portfolio"?"cs-active":"")),attr(g,"class","cs-li"),attr(f,"href","reviews"),attr(f,"class",S="cs-li-link "+(e[2].id==="reviews"?"cs-active":"")),attr(w,"class","cs-li"),attr(p,"href","contact"),attr(p,"class",F="cs-li-link "+(e[2].id==="contact"?"cs-active":"")),attr(y,"class","cs-li"),attr(t,"id","cs-expanded"),attr(t,"class","cs-ul"),attr(t,"aria-expanded","false"),attr(O,"class","cs-ul-wrapper"),attr(l,"class","cs-nav"),attr(l,"role","navigation"),attr(b,"href","contact"),attr(b,"class","cs-button-solid cs-nav-button"),attr(k,"d","M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"),attr(r,"class","cs-moon"),attr(r,"xmlns","http://www.w3.org/2000/svg"),attr(r,"viewBox","0 0 480 480"),set_style(r,"enable-background","new 0 0 480 480"),attr(r,"xml:space","preserve"),attr(i,"class","cs-sun"),attr(i,"aria-hidden","true"),src_url_equal(i.src,Z="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsun.svg")||attr(i,"src",Z),attr(i,"decoding","async"),attr(i,"alt","moon"),attr(i,"width","15"),attr(i,"height","15"),attr(c,"id","dark-mode-toggle"),attr(c,"aria-label","dark mode toggle"),attr(n,"class","cs-container"),attr(j,"id","cs-navigation")},m(A,S){insert_hydration(A,j,S),append_hydration(j,n),append_hydration(n,o),append_hydration(o,a),append_hydration(n,G),append_hydration(n,l),append_hydration(l,d),append_hydration(d,s),append_hydration(s,E),append_hydration(s,Y),append_hydration(s,C),append_hydration(s,q),append_hydration(s,x),append_hydration(l,W),append_hydration(l,O),append_hydration(O,t),append_hydration(t,v),append_hydration(v,u),append_hydration(u,I),append_hydration(t,U),append_hydration(t,_),append_hydration(_,m),append_hydration(m,R),append_hydration(t,B),append_hydration(t,g),append_hydration(g,h),append_hydration(h,V),append_hydration(t,H),append_hydration(t,w),append_hydration(w,f),append_hydration(f,L),append_hydration(t,P),append_hydration(t,y),append_hydration(y,p),append_hydration(p,D),append_hydration(n,$),append_hydration(n,b),append_hydration(b,N),append_hydration(n,K),append_hydration(n,c),append_hydration(c,r),append_hydration(r,k),append_hydration(c,X),append_hydration(c,i),Q||(ee=[listen(d,"click",e[3]),listen(v,"click",e[5]),listen(_,"click",e[6]),listen(g,"click",e[7]),listen(w,"click",e[8]),listen(y,"click",e[9])],Q=!0)},p(e,[t]){t&1&&attr(o,"title",e[0]),t&2&&A!==(A="cs-toggle"+(e[1]?" show":""))&&attr(d,"class",A),t&4&&z!==(z="cs-li-link "+(e[2].id==="home"?"cs-active":""))&&attr(u,"class",z),t&4&&M!==(M="cs-li-link "+(e[2].id==="about"?"cs-active":""))&&attr(m,"class",M),t&4&&T!==(T="cs-li-link "+(e[2].id==="portfolio"?"cs-active":""))&&attr(h,"class",T),t&4&&S!==(S="cs-li-link "+(e[2].id==="reviews"?"cs-active":""))&&attr(f,"class",S),t&4&&F!==(F="cs-li-link "+(e[2].id==="contact"?"cs-active":""))&&attr(p,"class",F)},i:noop,o:noop,d(e){e&&detach(j),Q=!1,run_all(ee)}}}function instance(e,t,n){let{title:a}=t,i;const r=()=>{n(1,i=!i)};let s={id:"home",isActive:!0};function o(e){s&&s.id!==e&&n(2,s.isActive=!1,s),n(2,s={id:e,isActive:!0})}const c=()=>o("home"),l=()=>o("about"),d=()=>o("portfolio"),u=()=>o("reviews"),h=()=>o("contact");return e.$$set=e=>{"title"in e&&n(0,a=e.title)},[a,i,s,r,o,c,l,d,u,h]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0})}}export default Component