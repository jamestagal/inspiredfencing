import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[6]=t[n],s[8]=n,s}function create_each_block(e){let t,n,y,b,o,c=e[6].title+"",h,g,a,d=e[6].description+"",u,p,i,l=e[6].name+"",m,v,s,r=e[6].location+"",f,j;return{c(){t=element("li"),n=element("img"),b=space(),o=element("h3"),h=text(c),g=space(),a=element("p"),u=text(d),p=space(),i=element("span"),m=text(l),v=space(),s=element("span"),f=text(r),j=space(),this.h()},l(e){t=claim_element(e,"LI",{class:!0});var _,w,O,x,y=children(t);n=claim_element(y,"IMG",{class:!0,src:!0,alt:!0,"aria-hidden":!0,width:!0,height:!0,loading:!0,decoding:!0}),b=claim_space(y),o=claim_element(y,"H3",{class:!0}),_=children(o),h=claim_text(_,c),_.forEach(detach),g=claim_space(y),a=claim_element(y,"P",{class:!0}),w=children(a),u=claim_text(w,d),w.forEach(detach),p=claim_space(y),i=claim_element(y,"SPAN",{class:!0}),O=children(i),m=claim_text(O,l),O.forEach(detach),v=claim_space(y),s=claim_element(y,"SPAN",{class:!0}),x=children(s),f=claim_text(x,r),x.forEach(detach),j=claim_space(y),y.forEach(detach),this.h()},h(){attr(n,"class","cs-icon"),src_url_equal(n.src,y="media/svg/green-quote-marks.svg")||attr(n,"src",y),attr(n,"alt","quote icon"),attr(n,"aria-hidden","true"),attr(n,"width","40"),attr(n,"height","38"),attr(n,"loading","lazy"),attr(n,"decoding","async"),attr(o,"class","cs-h3"),attr(a,"class","cs-item-text"),attr(i,"class","cs-name"),attr(s,"class","cs-job"),attr(t,"class","cs-item")},m(e,r){insert_hydration(e,t,r),append_hydration(t,n),append_hydration(t,b),append_hydration(t,o),append_hydration(o,h),append_hydration(t,g),append_hydration(t,a),append_hydration(a,u),append_hydration(t,p),append_hydration(t,i),append_hydration(i,m),append_hydration(t,v),append_hydration(t,s),append_hydration(s,f),append_hydration(t,j)},p(e,t){t&1&&c!==(c=e[6].title+"")&&set_data(h,c),t&1&&d!==(d=e[6].description+"")&&set_data(u,d),t&1&&l!==(l=e[6].name+"")&&set_data(m,l),t&1&&r!==(r=e[6].location+"")&&set_data(f,r)},d(e){e&&detach(t)}}}function create_fragment(e){let a,r,h,_=e[1].subtitle+"",O,D,b,j=e[1].title+"",F,H,s,g,k,I,f,z,L,n,E,C,x,d,i,o,v,w,B,p,S,P,u,T,R,l,N,c,y=e[5].title+"",M,A,m=e[0],t=[];for(let n=0;n<m.length;n+=1)t[n]=create_each_block(get_each_context(e,m,n));return{c(){a=element("div"),r=element("div"),h=element("span"),O=text(_),D=space(),b=element("span"),F=text(j),H=space(),s=element("picture"),g=element("source"),I=space(),f=element("source"),L=space(),n=element("img"),x=space(),d=element("section"),i=element("div"),o=element("div"),v=element("span"),w=text(e[2]),B=space(),p=element("h2"),S=text(e[3]),P=space(),u=element("p"),T=text(e[4]),R=space(),l=element("ul");for(let e=0;e<t.length;e+=1)t[e].c();N=space(),c=element("a"),M=text(y),this.h()},l(m){a=claim_element(m,"DIV",{id:!0});var C,E,k,A,V,$,W,U,K,q,Y,G,z=children(a);r=claim_element(z,"DIV",{class:!0}),A=children(r),h=claim_element(A,"SPAN",{class:!0}),W=children(h),O=claim_text(W,_),W.forEach(detach),D=claim_space(A),b=claim_element(A,"SPAN",{class:!0}),V=children(b),F=claim_text(V,j),V.forEach(detach),A.forEach(detach),H=claim_space(z),s=claim_element(z,"PICTURE",{class:!0}),k=children(s),g=claim_element(k,"SOURCE",{media:!0,srcset:!0}),I=claim_space(k),f=claim_element(k,"SOURCE",{media:!0,srcset:!0}),L=claim_space(k),n=claim_element(k,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0}),k.forEach(detach),z.forEach(detach),x=claim_space(m),d=claim_element(m,"SECTION",{id:!0}),$=children(d),i=claim_element($,"DIV",{class:!0}),C=children(i),o=claim_element(C,"DIV",{class:!0}),E=children(o),v=claim_element(E,"SPAN",{class:!0}),U=children(v),w=claim_text(U,e[2]),U.forEach(detach),B=claim_space(E),p=claim_element(E,"H2",{class:!0}),K=children(p),S=claim_text(K,e[3]),K.forEach(detach),P=claim_space(E),u=claim_element(E,"P",{class:!0}),q=children(u),T=claim_text(q,e[4]),q.forEach(detach),E.forEach(detach),R=claim_space(C),l=claim_element(C,"UL",{class:!0}),Y=children(l);for(let e=0;e<t.length;e+=1)t[e].l(Y);Y.forEach(detach),N=claim_space(C),c=claim_element(C,"A",{href:!0,class:!0}),G=children(c),M=claim_text(G,y),G.forEach(detach),C.forEach(detach),$.forEach(detach),this.h()},h(){attr(h,"class","cs-int-topper"),attr(b,"class","cs-int-title"),attr(r,"class","cs-container"),attr(g,"media","(max-width: 600px)"),attr(g,"srcset",k=e[1].image_m.url),attr(f,"media","(min-width: 601px)"),attr(f,"srcset",z=e[1].image_t.url),attr(n,"loading","lazy"),attr(n,"decoding","async"),src_url_equal(n.src,E=e[1].image.url)||attr(n,"src",E),attr(n,"alt",C=e[1].image.alt),attr(n,"width","1296"),attr(n,"height","235"),attr(n,"aria-hidden","true"),attr(s,"class","cs-background"),attr(a,"id","banner-559"),attr(v,"class","cs-topper"),attr(p,"class","cs-title"),attr(u,"class","cs-text"),attr(o,"class","cs-content"),attr(l,"class","cs-card-group"),attr(c,"href",A=e[5].url),attr(c,"class","cs-button-solid"),attr(i,"class","cs-container"),attr(d,"id","reviews-607")},m(e,m){insert_hydration(e,a,m),append_hydration(a,r),append_hydration(r,h),append_hydration(h,O),append_hydration(r,D),append_hydration(r,b),append_hydration(b,F),append_hydration(a,H),append_hydration(a,s),append_hydration(s,g),append_hydration(s,I),append_hydration(s,f),append_hydration(s,L),append_hydration(s,n),insert_hydration(e,x,m),insert_hydration(e,d,m),append_hydration(d,i),append_hydration(i,o),append_hydration(o,v),append_hydration(v,w),append_hydration(o,B),append_hydration(o,p),append_hydration(p,S),append_hydration(o,P),append_hydration(o,u),append_hydration(u,T),append_hydration(i,R),append_hydration(i,l);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(l,null);append_hydration(i,N),append_hydration(i,c),append_hydration(c,M)},p(e,[s]){if(s&2&&_!==(_=e[1].subtitle+"")&&set_data(O,_),s&2&&j!==(j=e[1].title+"")&&set_data(F,j),s&2&&k!==(k=e[1].image_m.url)&&attr(g,"srcset",k),s&2&&z!==(z=e[1].image_t.url)&&attr(f,"srcset",z),s&2&&!src_url_equal(n.src,E=e[1].image.url)&&attr(n,"src",E),s&2&&C!==(C=e[1].image.alt)&&attr(n,"alt",C),s&4&&set_data(w,e[2]),s&8&&set_data(S,e[3]),s&16&&set_data(T,e[4]),s&1){m=e[0];let n;for(n=0;n<m.length;n+=1){const o=get_each_context(e,m,n);t[n]?t[n].p(o,s):(t[n]=create_each_block(o),t[n].c(),t[n].m(l,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=m.length}s&32&&y!==(y=e[5].title+"")&&set_data(M,y),s&32&&A!==(A=e[5].url)&&attr(c,"href",A)},i:noop,o:noop,d(e){e&&detach(a),e&&detach(x),e&&detach(d),destroy_each(t,e)}}}function instance(e,t,n){let{quote:s,banner:o,subtitle:i,title:a,description:r,button:c}=t;return e.$$set=e=>{"quote"in e&&n(0,s=e.quote),"banner"in e&&n(1,o=e.banner),"subtitle"in e&&n(2,i=e.subtitle),"title"in e&&n(3,a=e.title),"description"in e&&n(4,r=e.description),"button"in e&&n(5,c=e.button)},[s,o,i,a,r,c]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{quote:0,banner:1,subtitle:2,title:3,description:4,button:5})}}export default Component