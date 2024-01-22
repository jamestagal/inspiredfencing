import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let n,a,o,i,c,m,s,r=e[1].title+"",l,d,f,t,u,h;return{c(){n=element("section"),a=element("div"),o=element("div"),i=element("h2"),c=text(e[0]),m=space(),s=element("a"),l=text(r),f=space(),t=element("img"),this.h()},l(d){n=claim_element(d,"SECTION",{id:!0});var u,p,g,v,h=children(n);a=claim_element(h,"DIV",{class:!0}),p=children(a),o=claim_element(p,"DIV",{class:!0}),u=children(o),i=claim_element(u,"H2",{class:!0}),g=children(i),c=claim_text(g,e[0]),g.forEach(detach),m=claim_space(u),s=claim_element(u,"A",{href:!0,class:!0}),v=children(s),l=claim_text(v,r),v.forEach(detach),u.forEach(detach),p.forEach(detach),f=claim_space(h),t=claim_element(h,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0,loading:!0,decoding:!0,"aria-hidden":!0}),h.forEach(detach),this.h()},h(){attr(i,"class","cs-title"),attr(s,"href",d=e[1].url),attr(s,"class","cs-button-solid"),attr(o,"class","cs-content"),attr(a,"class","cs-container"),attr(t,"class","cs-background"),src_url_equal(t.src,u=e[2].url)||attr(t,"src",u),attr(t,"alt",h=e[2].alt),attr(t,"width","1920"),attr(t,"height","318"),attr(t,"loading","lazy"),attr(t,"decoding","async"),attr(t,"aria-hidden","true"),attr(n,"id","cta-697")},m(e,r){insert_hydration(e,n,r),append_hydration(n,a),append_hydration(a,o),append_hydration(o,i),append_hydration(i,c),append_hydration(o,m),append_hydration(o,s),append_hydration(s,l),append_hydration(n,f),append_hydration(n,t)},p(e,[n]){n&1&&set_data(c,e[0]),n&2&&r!==(r=e[1].title+"")&&set_data(l,r),n&2&&d!==(d=e[1].url)&&attr(s,"href",d),n&4&&!src_url_equal(t.src,u=e[2].url)&&attr(t,"src",u),n&4&&h!==(h=e[2].alt)&&attr(t,"alt",h)},i:noop,o:noop,d(e){e&&detach(n)}}}function instance(e,t,n){let{title:s,button:o,waves:i}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"button"in e&&n(1,o=e.button),"waves"in e&&n(2,i=e.waves)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,button:1,waves:2})}}export default Component