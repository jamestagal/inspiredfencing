import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let o,u,n,l,m,E,a,j,k,d,v,w,i,h=e[3].title+"",p,g,C,s,c,y,O,r,_,x,t,f,b;return{c(){o=element("section"),u=element("div"),n=element("div"),l=element("span"),m=text(e[0]),E=space(),a=element("h2"),j=text(e[1]),k=space(),d=element("p"),v=text(e[2]),w=space(),i=element("a"),p=text(h),C=space(),s=element("picture"),c=element("source"),O=space(),r=element("source"),x=space(),t=element("img"),this.h()},l(f){o=claim_element(f,"SECTION",{id:!0});var g,b,_,A,S,M,F,y=children(o);u=claim_element(y,"DIV",{class:!0}),_=children(u),n=claim_element(_,"DIV",{class:!0}),g=children(n),l=claim_element(g,"SPAN",{class:!0}),A=children(l),m=claim_text(A,e[0]),A.forEach(detach),E=claim_space(g),a=claim_element(g,"H2",{class:!0}),S=children(a),j=claim_text(S,e[1]),S.forEach(detach),k=claim_space(g),d=claim_element(g,"P",{class:!0}),M=children(d),v=claim_text(M,e[2]),M.forEach(detach),w=claim_space(g),i=claim_element(g,"A",{href:!0,class:!0}),F=children(i),p=claim_text(F,h),F.forEach(detach),g.forEach(detach),_.forEach(detach),C=claim_space(y),s=claim_element(y,"PICTURE",{class:!0}),b=children(s),c=claim_element(b,"SOURCE",{media:!0,srcset:!0}),O=claim_space(b),r=claim_element(b,"SOURCE",{media:!0,srcset:!0}),x=claim_space(b),t=claim_element(b,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0}),b.forEach(detach),y.forEach(detach),this.h()},h(){attr(l,"class","cs-topper"),attr(a,"class","cs-title"),attr(d,"class","cs-text"),attr(i,"href",g=e[3].url),attr(i,"class","cs-button-solid"),attr(n,"class","cs-content"),attr(u,"class","cs-container"),attr(c,"media","(max-width: 600px)"),attr(c,"srcset",y=e[4].image_m.src),attr(r,"media","(min-width: 601px)"),attr(r,"srcset",_=e[4].image_t.src),attr(t,"loading","lazy"),attr(t,"decoding","async"),src_url_equal(t.src,f=e[4].image.url)||attr(t,"src",f),attr(t,"alt",b=e[4].image.alt),attr(t,"width","1920"),attr(t,"height","660"),attr(t,"aria-hidden","true"),attr(s,"class","cs-background"),attr(o,"id","cta-403")},m(e,h){insert_hydration(e,o,h),append_hydration(o,u),append_hydration(u,n),append_hydration(n,l),append_hydration(l,m),append_hydration(n,E),append_hydration(n,a),append_hydration(a,j),append_hydration(n,k),append_hydration(n,d),append_hydration(d,v),append_hydration(n,w),append_hydration(n,i),append_hydration(i,p),append_hydration(o,C),append_hydration(o,s),append_hydration(s,c),append_hydration(s,O),append_hydration(s,r),append_hydration(s,x),append_hydration(s,t)},p(e,[n]){n&1&&set_data(m,e[0]),n&2&&set_data(j,e[1]),n&4&&set_data(v,e[2]),n&8&&h!==(h=e[3].title+"")&&set_data(p,h),n&8&&g!==(g=e[3].url)&&attr(i,"href",g),n&16&&y!==(y=e[4].image_m.src)&&attr(c,"srcset",y),n&16&&_!==(_=e[4].image_t.src)&&attr(r,"srcset",_),n&16&&!src_url_equal(t.src,f=e[4].image.url)&&attr(t,"src",f),n&16&&b!==(b=e[4].image.alt)&&attr(t,"alt",b)},i:noop,o:noop,d(e){e&&detach(o)}}}function instance(e,t,n){let{subtitle:s,title:o,description:i,button:a,picture:r}=t;return e.$$set=e=>{"subtitle"in e&&n(0,s=e.subtitle),"title"in e&&n(1,o=e.title),"description"in e&&n(2,i=e.description),"button"in e&&n(3,a=e.button),"picture"in e&&n(4,r=e.picture)},[s,o,i,a,r]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{subtitle:0,title:1,description:2,button:3,picture:4})}}export default Component