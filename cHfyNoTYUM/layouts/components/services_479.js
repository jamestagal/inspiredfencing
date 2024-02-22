import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let f,m,u,l,_,i,oe,te,A,C,Z,G,r,M,Y,S,q,a,se,B,h,c,O,P,N,E,D,F,k,z,K,d,o,b,t,ie,R,x,H,I,y,V,$,g,U,T,n,j,s,ne,Q,w,J,ee,v,X,W,p,L;return{c(){f=element("section"),m=element("div"),u=element("div"),l=element("a"),_=element("picture"),i=element("img"),te=space(),A=element("div"),C=element("span"),Z=text("See Our Reviews"),G=space(),r=element("picture"),M=element("source"),Y=space(),S=element("source"),q=space(),a=element("img"),B=space(),h=element("div"),c=element("div"),O=element("span"),P=text("Fencing Services"),N=space(),E=element("h2"),D=text("Trusted Fencing Contractor in Flinders"),F=space(),k=element("p"),z=text("Our unwavering dedication to customer satisfaction sets us apart. If you're in search of a fencing and gate contractor that gets the job done right from the start, your search ends here. Choose Inspired Fencing for a seamless blend of quality, reliability, and customer-centric service that leaves you with security and style that exceeds your expectations.\""),K=space(),d=element("ul"),o=element("li"),b=element("picture"),t=element("img"),R=space(),x=element("h3"),H=text("Fences"),I=space(),y=element("p"),V=text("We offer a wide range of elegent fecnes solutions."),$=space(),g=element("a"),U=text("Read More"),T=space(),n=element("li"),j=element("picture"),s=element("img"),Q=space(),w=element("h3"),J=text("Gates"),ee=space(),v=element("p"),X=text("Our gate are build to last and will make your fence stand out in the crowd!"),W=space(),p=element("a"),L=text("Read More"),this.h()},l(e){f=claim_element(e,"SECTION",{id:!0});var Ce=children(f),ae,re,ce,_e,ge,pe,ie,de,oe,be,me,ue,le,se,ve,he,je,ye,ne,we,Oe,xe,fe;m=claim_element(Ce,"DIV",{class:!0}),ae=children(m),u=claim_element(ae,"DIV",{class:!0}),re=children(u),l=claim_element(re,"A",{class:!0,href:!0}),ce=children(l),_=claim_element(ce,"PICTURE",{class:!0}),_e=children(_),i=claim_element(_e,"IMG",{class:!0,"aria-hidden":!0,src:!0,loading:!0,decoding:!0,alt:!0,width:!0,height:!0}),_e.forEach(detach),te=claim_space(ce),A=claim_element(ce,"DIV",{class:!0}),ge=children(A),C=claim_element(ge,"SPAN",{class:!0}),pe=children(C),Z=claim_text(pe,"See Our Reviews"),pe.forEach(detach),ge.forEach(detach),ce.forEach(detach),G=claim_space(re),r=claim_element(re,"PICTURE",{class:!0}),ie=children(r),M=claim_element(ie,"SOURCE",{media:!0,srcset:!0}),Y=claim_space(ie),S=claim_element(ie,"SOURCE",{media:!0,srcset:!0}),q=claim_space(ie),a=claim_element(ie,"IMG",{"aria-hidden":!0,loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),ie.forEach(detach),re.forEach(detach),B=claim_space(ae),h=claim_element(ae,"DIV",{class:!0}),de=children(h),c=claim_element(de,"DIV",{class:!0}),oe=children(c),O=claim_element(oe,"SPAN",{class:!0}),be=children(O),P=claim_text(be,"Fencing Services"),be.forEach(detach),N=claim_space(oe),E=claim_element(oe,"H2",{class:!0}),me=children(E),D=claim_text(me,"Trusted Fencing Contractor in Flinders"),me.forEach(detach),F=claim_space(oe),k=claim_element(oe,"P",{class:!0}),ue=children(k),z=claim_text(ue,"Our unwavering dedication to customer satisfaction sets us apart. If you're in search of a fencing and gate contractor that gets the job done right from the start, your search ends here. Choose Inspired Fencing for a seamless blend of quality, reliability, and customer-centric service that leaves you with security and style that exceeds your expectations.\""),ue.forEach(detach),oe.forEach(detach),K=claim_space(de),d=claim_element(de,"UL",{class:!0}),le=children(d),o=claim_element(le,"LI",{class:!0}),se=children(o),b=claim_element(se,"PICTURE",{class:!0}),ve=children(b),t=claim_element(ve,"IMG",{class:!0,"aria-hidden":!0,src:!0,loading:!0,decoding:!0,alt:!0,width:!0,height:!0}),ve.forEach(detach),R=claim_space(se),x=claim_element(se,"H3",{class:!0}),he=children(x),H=claim_text(he,"Fences"),he.forEach(detach),I=claim_space(se),y=claim_element(se,"P",{class:!0}),je=children(y),V=claim_text(je,"We offer a wide range of elegent fecnes solutions."),je.forEach(detach),$=claim_space(se),g=claim_element(se,"A",{href:!0,class:!0}),ye=children(g),U=claim_text(ye,"Read More"),ye.forEach(detach),se.forEach(detach),T=claim_space(le),n=claim_element(le,"LI",{class:!0}),ne=children(n),j=claim_element(ne,"PICTURE",{class:!0}),we=children(j),s=claim_element(we,"IMG",{class:!0,"aria-hidden":!0,src:!0,loading:!0,decoding:!0,alt:!0,width:!0,height:!0}),we.forEach(detach),Q=claim_space(ne),w=claim_element(ne,"H3",{class:!0}),Oe=children(w),J=claim_text(Oe,"Gates"),Oe.forEach(detach),ee=claim_space(ne),v=claim_element(ne,"P",{class:!0}),xe=children(v),X=claim_text(xe,"Our gate are build to last and will make your fence stand out in the crowd!"),xe.forEach(detach),W=claim_space(ne),p=claim_element(ne,"A",{href:!0,class:!0}),fe=children(p),L=claim_text(fe,"Read More"),fe.forEach(detach),ne.forEach(detach),le.forEach(detach),de.forEach(detach),ae.forEach(detach),Ce.forEach(detach),this.h()},h(){attr(i,"class","cs-arrow"),attr(i,"aria-hidden","true"),src_url_equal(i.src,oe="https://csimg.nyc3.digitaloceanspaces.com/SideBySide/arrow.svg")||attr(i,"src",oe),attr(i,"loading","lazy"),attr(i,"decoding","async"),attr(i,"alt","arrow"),attr(i,"width","70"),attr(i,"height","70"),attr(_,"class","cs-arrow-wrap"),attr(C,"class","cs-tag"),attr(A,"class","cs-info"),attr(l,"class","cs-cta"),attr(l,"href","testimonials"),attr(M,"media","(max-width: 600px)"),attr(M,"srcset","media/images/Feature_TimberFence_02.webp"),attr(S,"media","(min-width: 601px)"),attr(S,"srcset","media/images/Feature_TimberFence_02.webp"),attr(a,"aria-hidden","true"),attr(a,"loading","lazy"),attr(a,"decoding","async"),src_url_equal(a.src,se="media/images/Feature_TimberFence_02.webp")||attr(a,"src",se),attr(a,"alt","grass"),attr(a,"width","625"),attr(a,"height","842"),attr(r,"class","cs-background"),attr(u,"class","cs-left-section"),attr(O,"class","cs-topper"),attr(E,"class","cs-title"),attr(k,"class","cs-text"),attr(c,"class","cs-content"),attr(t,"class","cs-icon"),attr(t,"aria-hidden","true"),src_url_equal(t.src,ie="media/svg/picket-fence-svgrepo-com.svg")||attr(t,"src",ie),attr(t,"loading","lazy"),attr(t,"decoding","async"),attr(t,"alt","Fence icon"),attr(t,"width","30"),attr(t,"height","30"),attr(b,"class","cs-icon-wrap"),attr(x,"class","cs-h3"),attr(y,"class","cs-item-text"),attr(g,"href","services"),attr(g,"class","cs-link"),attr(o,"class","cs-item"),attr(s,"class","cs-icon"),attr(s,"aria-hidden","true"),src_url_equal(s.src,ne="media/svg/gate-svgrepo-com.svg")||attr(s,"src",ne),attr(s,"loading","lazy"),attr(s,"decoding","async"),attr(s,"alt","Gate icon"),attr(s,"width","30"),attr(s,"height","30"),attr(j,"class","cs-icon-wrap"),attr(w,"class","cs-h3"),attr(v,"class","cs-item-text"),attr(p,"href","services"),attr(p,"class","cs-link"),attr(n,"class","cs-item"),attr(d,"class","cs-card-group"),attr(h,"class","cs-right-section"),attr(m,"class","cs-container"),attr(f,"id","services-479")},m(e,ne){insert_hydration(e,f,ne),append_hydration(f,m),append_hydration(m,u),append_hydration(u,l),append_hydration(l,_),append_hydration(_,i),append_hydration(l,te),append_hydration(l,A),append_hydration(A,C),append_hydration(C,Z),append_hydration(u,G),append_hydration(u,r),append_hydration(r,M),append_hydration(r,Y),append_hydration(r,S),append_hydration(r,q),append_hydration(r,a),append_hydration(m,B),append_hydration(m,h),append_hydration(h,c),append_hydration(c,O),append_hydration(O,P),append_hydration(c,N),append_hydration(c,E),append_hydration(E,D),append_hydration(c,F),append_hydration(c,k),append_hydration(k,z),append_hydration(h,K),append_hydration(h,d),append_hydration(d,o),append_hydration(o,b),append_hydration(b,t),append_hydration(o,R),append_hydration(o,x),append_hydration(x,H),append_hydration(o,I),append_hydration(o,y),append_hydration(y,V),append_hydration(o,$),append_hydration(o,g),append_hydration(g,U),append_hydration(d,T),append_hydration(d,n),append_hydration(n,j),append_hydration(j,s),append_hydration(n,Q),append_hydration(n,w),append_hydration(w,J),append_hydration(n,ee),append_hydration(n,v),append_hydration(v,X),append_hydration(n,W),append_hydration(n,p),append_hydration(p,L)},p:noop,i:noop,o:noop,d(e){e&&detach(f)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component