import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let c,p,i,o,t,F,A,h,g,v,m,x,_,r,n,T,C,l,j,y,f,w,O,a,s,M,k,u,S,E,d,b;return{c(){c=element("section"),p=element("div"),i=element("ul"),o=element("li"),t=element("img"),A=space(),h=element("span"),g=text("5/5"),v=space(),m=element("span"),x=text("Rating"),_=space(),r=element("li"),n=element("img"),C=space(),l=element("span"),j=text("100%"),y=space(),f=element("span"),w=text("Satisfaction"),O=space(),a=element("li"),s=element("img"),k=space(),u=element("span"),S=text("10+"),E=space(),d=element("span"),b=text("Years Experience"),this.h()},l(e){c=claim_element(e,"SECTION",{id:!0});var M,F,T,z,D,N,L,R,P,H,I,B=children(c);p=claim_element(B,"DIV",{class:!0}),D=children(p),i=claim_element(D,"UL",{class:!0}),M=children(i),o=claim_element(M,"LI",{class:!0}),F=children(o),t=claim_element(F,"IMG",{class:!0,"aria-hidden":!0,src:!0,loading:!0,decoding:!0,alt:!0,width:!0,height:!0}),A=claim_space(F),h=claim_element(F,"SPAN",{class:!0}),N=children(h),g=claim_text(N,"5/5"),N.forEach(detach),v=claim_space(F),m=claim_element(F,"SPAN",{class:!0}),L=children(m),x=claim_text(L,"Rating"),L.forEach(detach),F.forEach(detach),_=claim_space(M),r=claim_element(M,"LI",{class:!0}),T=children(r),n=claim_element(T,"IMG",{class:!0,"aria-hidden":!0,src:!0,loading:!0,decoding:!0,alt:!0,width:!0,height:!0}),C=claim_space(T),l=claim_element(T,"SPAN",{class:!0}),R=children(l),j=claim_text(R,"100%"),R.forEach(detach),y=claim_space(T),f=claim_element(T,"SPAN",{class:!0}),P=children(f),w=claim_text(P,"Satisfaction"),P.forEach(detach),T.forEach(detach),O=claim_space(M),a=claim_element(M,"LI",{class:!0}),z=children(a),s=claim_element(z,"IMG",{class:!0,"aria-hidden":!0,src:!0,loading:!0,decoding:!0,alt:!0,width:!0,height:!0}),k=claim_space(z),u=claim_element(z,"SPAN",{class:!0}),H=children(u),S=claim_text(H,"10+"),H.forEach(detach),E=claim_space(z),d=claim_element(z,"SPAN",{class:!0}),I=children(d),b=claim_text(I,"Years Experience"),I.forEach(detach),z.forEach(detach),M.forEach(detach),D.forEach(detach),B.forEach(detach),this.h()},h(){attr(t,"class","cs-icon"),attr(t,"aria-hidden","true"),src_url_equal(t.src,F="media/svg/stat1.svg")||attr(t,"src",F),attr(t,"loading","lazy"),attr(t,"decoding","async"),attr(t,"alt","icon"),attr(t,"width","76"),attr(t,"height","66"),attr(h,"class","cs-number"),attr(m,"class","cs-desc"),attr(o,"class","cs-item"),attr(n,"class","cs-icon"),attr(n,"aria-hidden","true"),src_url_equal(n.src,T="media/svg/stat2.svg")||attr(n,"src",T),attr(n,"loading","lazy"),attr(n,"decoding","async"),attr(n,"alt","icon"),attr(n,"width","76"),attr(n,"height","66"),attr(l,"class","cs-number"),attr(f,"class","cs-desc"),attr(r,"class","cs-item"),attr(s,"class","cs-icon"),attr(s,"aria-hidden","true"),src_url_equal(s.src,M="media/svg/stat3.svg")||attr(s,"src",M),attr(s,"loading","lazy"),attr(s,"decoding","async"),attr(s,"alt","icon"),attr(s,"width","76"),attr(s,"height","66"),attr(u,"class","cs-number"),attr(d,"class","cs-desc"),attr(a,"class","cs-item"),attr(i,"class","cs-card-group"),attr(p,"class","cs-container"),attr(c,"id","stats-479")},m(e,M){insert_hydration(e,c,M),append_hydration(c,p),append_hydration(p,i),append_hydration(i,o),append_hydration(o,t),append_hydration(o,A),append_hydration(o,h),append_hydration(h,g),append_hydration(o,v),append_hydration(o,m),append_hydration(m,x),append_hydration(i,_),append_hydration(i,r),append_hydration(r,n),append_hydration(r,C),append_hydration(r,l),append_hydration(l,j),append_hydration(r,y),append_hydration(r,f),append_hydration(f,w),append_hydration(i,O),append_hydration(i,a),append_hydration(a,s),append_hydration(a,k),append_hydration(a,u),append_hydration(u,S),append_hydration(a,E),append_hydration(a,d),append_hydration(d,b)},p:noop,i:noop,o:noop,d(e){e&&detach(c)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component