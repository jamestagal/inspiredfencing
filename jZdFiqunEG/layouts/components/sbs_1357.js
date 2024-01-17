import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let r,n,s,v,M,g,T,a,N,A,t,d,j,C,h,x,_,u,k,y,m,w,O,c,b,E,o,f,S,p,F,i,D,z,l;return{c(){r=element("section"),n=element("div"),s=element("picture"),v=element("source"),M=space(),g=element("source"),T=space(),a=element("img"),A=space(),t=element("div"),d=element("span"),j=text("Brush Fence"),C=space(),h=element("h2"),x=text("A Deam fence came true"),_=space(),u=element("h3"),k=text("We’re committed to delivering the fence you love"),y=space(),m=element("p"),w=text("In December 2018, we took on the challenge of a 40-metre brush fence at a holiday home in Flinders. This property was undergoing major renovations at the time and the owner has always wanted a brush fence on this property to compliment the coastal beach location."),O=space(),c=element("a"),b=text("Get a quote"),E=space(),o=element("picture"),f=element("source"),S=space(),p=element("source"),F=space(),i=element("img"),z=space(),l=element("div"),this.h()},l(e){r=claim_element(e,"SECTION",{id:!0});var D,N,L,R,H,I,B,V,$,P=children(r);n=claim_element(P,"DIV",{class:!0}),N=children(n),s=claim_element(N,"PICTURE",{class:!0}),L=children(s),v=claim_element(L,"SOURCE",{media:!0,srcset:!0}),M=claim_space(L),g=claim_element(L,"SOURCE",{media:!0,srcset:!0}),T=claim_space(L),a=claim_element(L,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),L.forEach(detach),A=claim_space(N),t=claim_element(N,"DIV",{class:!0}),D=children(t),d=claim_element(D,"SPAN",{class:!0}),H=children(d),j=claim_text(H,"Brush Fence"),H.forEach(detach),C=claim_space(D),h=claim_element(D,"H2",{class:!0}),I=children(h),x=claim_text(I,"A Deam fence came true"),I.forEach(detach),_=claim_space(D),u=claim_element(D,"H3",{class:!0}),B=children(u),k=claim_text(B,"We’re committed to delivering the fence you love"),B.forEach(detach),y=claim_space(D),m=claim_element(D,"P",{class:!0}),V=children(m),w=claim_text(V,"In December 2018, we took on the challenge of a 40-metre brush fence at a holiday home in Flinders. This property was undergoing major renovations at the time and the owner has always wanted a brush fence on this property to compliment the coastal beach location."),V.forEach(detach),O=claim_space(D),c=claim_element(D,"A",{href:!0,class:!0}),$=children(c),b=claim_text($,"Get a quote"),$.forEach(detach),D.forEach(detach),E=claim_space(N),o=claim_element(N,"PICTURE",{class:!0}),R=children(o),f=claim_element(R,"SOURCE",{media:!0,srcset:!0}),S=claim_space(R),p=claim_element(R,"SOURCE",{media:!0,srcset:!0}),F=claim_space(R),i=claim_element(R,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),R.forEach(detach),N.forEach(detach),z=claim_space(P),l=claim_element(P,"DIV",{class:!0,"aria-hidden":!0}),children(l).forEach(detach),P.forEach(detach),this.h()},h(){attr(v,"media","(max-width: 600px)"),attr(v,"srcset","media/images/projects/brush_02.jpeg"),attr(g,"media","(min-width: 601px)"),attr(g,"srcset","media/images/projects/brush_02.jpeg"),attr(a,"loading","lazy"),attr(a,"decoding","async"),src_url_equal(a.src,N="media/images/projects/brush_02.jpeg")||attr(a,"src",N),attr(a,"alt","meeting"),attr(a,"width","305"),attr(a,"height","339"),attr(s,"class","cs-picture cs-picture1"),attr(d,"class","cs-topper"),attr(h,"class","cs-title"),attr(u,"class","cs-h3"),attr(m,"class","cs-text"),attr(c,"href","contact"),attr(c,"class","cs-button-solid"),attr(t,"class","cs-content"),attr(f,"media","(max-width: 600px)"),attr(f,"srcset","media/images/projects/brush_03.jpeg"),attr(p,"media","(min-width: 601px)"),attr(p,"srcset","media/images/projects/brush_03.jpeg"),attr(i,"loading","lazy"),attr(i,"decoding","async"),src_url_equal(i.src,D="media/images/projects/brush_03.jpeg")||attr(i,"src",D),attr(i,"alt","meeting"),attr(i,"width","305"),attr(i,"height","339"),attr(o,"class","cs-picture cs-picture2"),attr(n,"class","cs-container"),attr(l,"class","cs-bubbles"),attr(l,"aria-hidden","true"),attr(r,"id","sbs-1357")},m(e,D){insert_hydration(e,r,D),append_hydration(r,n),append_hydration(n,s),append_hydration(s,v),append_hydration(s,M),append_hydration(s,g),append_hydration(s,T),append_hydration(s,a),append_hydration(n,A),append_hydration(n,t),append_hydration(t,d),append_hydration(d,j),append_hydration(t,C),append_hydration(t,h),append_hydration(h,x),append_hydration(t,_),append_hydration(t,u),append_hydration(u,k),append_hydration(t,y),append_hydration(t,m),append_hydration(m,w),append_hydration(t,O),append_hydration(t,c),append_hydration(c,b),append_hydration(n,E),append_hydration(n,o),append_hydration(o,f),append_hydration(o,S),append_hydration(o,p),append_hydration(o,F),append_hydration(o,i),append_hydration(r,z),append_hydration(r,l)},p:noop,i:noop,o:noop,d(e){e&&detach(r)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component