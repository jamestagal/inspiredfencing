import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let j,g,p,f,r,_e,re,t,B,A,pe,fe,I,x,ue,le,H,b,$,W,M,w,ie,oe,D,E,te,ee,T,O,J,X,z,C,G,Y,R,_,U,ae,c,a,P,u,o,we,q,L,h,i,ye,Z,F,l,s,je,se,N,m,n,be,ce,y,de,v,he,me,d,k,ge,ve,V,ne,Q,S,K;return{c(){j=element("section"),g=element("div"),p=element("div"),f=element("a"),r=element("img"),re=space(),t=element("ul"),B=element("li"),A=element("a"),pe=text("Home"),fe=space(),I=element("li"),x=element("a"),ue=text("About"),le=space(),H=element("li"),b=element("a"),$=text("Services"),W=space(),M=element("li"),w=element("a"),ie=text("Projects"),oe=space(),D=element("li"),E=element("a"),te=text("Gallery"),ee=space(),T=element("li"),O=element("a"),J=text("Testimonials"),X=space(),z=element("li"),C=element("a"),G=text("Service areas"),Y=space(),R=element("li"),_=element("a"),U=text("Contact"),ae=space(),c=element("div"),a=element("ul"),P=element("li"),u=element("a"),o=element("img"),q=space(),L=element("li"),h=element("a"),i=element("img"),Z=space(),F=element("li"),l=element("a"),s=element("img"),se=space(),N=element("li"),m=element("a"),n=element("img"),ce=space(),y=element("span"),de=text("© Copyright 2024 - Designed & Developed By "),v=element("a"),he=text("Plentify Web Designs"),me=space(),d=element("div"),k=element("a"),ge=text("Privacy Policy"),ve=space(),V=element("span"),ne=text("|"),Q=space(),S=element("a"),K=text("Terms of Use"),this.h()},l(e){j=claim_element(e,"SECTION",{id:!0});var et=children(j),we,Oe,Qe,be,Ge,Ee,He,Ie,ke,Ae,Se,Me,Fe,Te,ze,De,Ne,Ce,Re,Pe,ye,je,Be,Ve,$e,We,Ue,Ke,qe,Ye,xe,Xe,_e,Ze,Je,Le;g=claim_element(et,"DIV",{class:!0}),we=children(g),p=claim_element(we,"DIV",{class:!0}),Oe=children(p),f=claim_element(Oe,"A",{"aria-label":!0,class:!0,href:!0}),Qe=children(f),r=claim_element(Qe,"IMG",{class:!0,loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),Qe.forEach(detach),re=claim_space(Oe),t=claim_element(Oe,"UL",{class:!0}),be=children(t),B=claim_element(be,"LI",{class:!0}),Ge=children(B),A=claim_element(Ge,"A",{href:!0,class:!0}),Ee=children(A),pe=claim_text(Ee,"Home"),Ee.forEach(detach),Ge.forEach(detach),fe=claim_space(be),I=claim_element(be,"LI",{class:!0}),He=children(I),x=claim_element(He,"A",{href:!0,class:!0}),Ie=children(x),ue=claim_text(Ie,"About"),Ie.forEach(detach),He.forEach(detach),le=claim_space(be),H=claim_element(be,"LI",{class:!0}),ke=children(H),b=claim_element(ke,"A",{href:!0,class:!0}),Ae=children(b),$=claim_text(Ae,"Services"),Ae.forEach(detach),ke.forEach(detach),W=claim_space(be),M=claim_element(be,"LI",{class:!0}),Se=children(M),w=claim_element(Se,"A",{href:!0,class:!0}),Me=children(w),ie=claim_text(Me,"Projects"),Me.forEach(detach),Se.forEach(detach),oe=claim_space(be),D=claim_element(be,"LI",{class:!0}),Fe=children(D),E=claim_element(Fe,"A",{href:!0,class:!0}),Te=children(E),te=claim_text(Te,"Gallery"),Te.forEach(detach),Fe.forEach(detach),ee=claim_space(be),T=claim_element(be,"LI",{class:!0}),ze=children(T),O=claim_element(ze,"A",{href:!0,class:!0}),De=children(O),J=claim_text(De,"Testimonials"),De.forEach(detach),ze.forEach(detach),X=claim_space(be),z=claim_element(be,"LI",{class:!0}),Ne=children(z),C=claim_element(Ne,"A",{href:!0,class:!0}),Ce=children(C),G=claim_text(Ce,"Service areas"),Ce.forEach(detach),Ne.forEach(detach),Y=claim_space(be),R=claim_element(be,"LI",{class:!0}),Re=children(R),_=claim_element(Re,"A",{href:!0,class:!0}),Pe=children(_),U=claim_text(Pe,"Contact"),Pe.forEach(detach),Re.forEach(detach),be.forEach(detach),Oe.forEach(detach),ae=claim_space(we),c=claim_element(we,"DIV",{class:!0}),ye=children(c),a=claim_element(ye,"UL",{class:!0}),je=children(a),P=claim_element(je,"LI",{class:!0}),Be=children(P),u=claim_element(Be,"A",{href:!0,class:!0,"aria-label":!0,target:!0,rel:!0}),Ve=children(u),o=claim_element(Ve,"IMG",{class:!0,src:!0,alt:!0,loading:!0,decoding:!0,width:!0,height:!0,"aria-hidden":!0}),Ve.forEach(detach),Be.forEach(detach),q=claim_space(je),L=claim_element(je,"LI",{class:!0}),$e=children(L),h=claim_element($e,"A",{href:!0,class:!0,"aria-label":!0,target:!0,rel:!0}),We=children(h),i=claim_element(We,"IMG",{class:!0,src:!0,alt:!0,loading:!0,decoding:!0,width:!0,height:!0,"aria-hidden":!0}),We.forEach(detach),$e.forEach(detach),Z=claim_space(je),F=claim_element(je,"LI",{class:!0}),Ue=children(F),l=claim_element(Ue,"A",{href:!0,class:!0,"aria-label":!0,target:!0,rel:!0}),Ke=children(l),s=claim_element(Ke,"IMG",{class:!0,src:!0,alt:!0,loading:!0,decoding:!0,width:!0,height:!0,"aria-hidden":!0}),Ke.forEach(detach),Ue.forEach(detach),se=claim_space(je),N=claim_element(je,"LI",{class:!0}),qe=children(N),m=claim_element(qe,"A",{href:!0,class:!0,"aria-label":!0,target:!0,rel:!0}),Ye=children(m),n=claim_element(Ye,"IMG",{class:!0,src:!0,alt:!0,loading:!0,decoding:!0,width:!0,height:!0,"aria-hidden":!0}),Ye.forEach(detach),qe.forEach(detach),je.forEach(detach),ce=claim_space(ye),y=claim_element(ye,"SPAN",{class:!0}),xe=children(y),de=claim_text(xe,"© Copyright 2024 - Designed & Developed By "),v=claim_element(xe,"A",{href:!0,class:!0}),Xe=children(v),he=claim_text(Xe,"Plentify Web Designs"),Xe.forEach(detach),xe.forEach(detach),me=claim_space(ye),d=claim_element(ye,"DIV",{class:!0}),_e=children(d),k=claim_element(_e,"A",{href:!0,class:!0}),Ze=children(k),ge=claim_text(Ze,"Privacy Policy"),Ze.forEach(detach),ve=claim_space(_e),V=claim_element(_e,"SPAN",{class:!0}),Je=children(V),ne=claim_text(Je,"|"),Je.forEach(detach),Q=claim_space(_e),S=claim_element(_e,"A",{href:!0,class:!0}),Le=children(S),K=claim_text(Le,"Terms of Use"),Le.forEach(detach),_e.forEach(detach),ye.forEach(detach),we.forEach(detach),et.forEach(detach),this.h()},h(){attr(r,"class","cs-logo-img"),attr(r,"loading","lazy"),attr(r,"decoding","async"),src_url_equal(r.src,_e="media/svg/inspiredfencing-logo-white.svg")||attr(r,"src",_e),attr(r,"alt","logo"),attr(r,"width","209"),attr(r,"height","40"),attr(f,"aria-label","go back to home"),attr(f,"class","cs-logo"),attr(f,"href","."),attr(A,"href","."),attr(A,"class","cs-link"),attr(B,"class","cs-li"),attr(x,"href","about"),attr(x,"class","cs-link"),attr(I,"class","cs-li"),attr(b,"href","services"),attr(b,"class","cs-link"),attr(H,"class","cs-li"),attr(w,"href","projects"),attr(w,"class","cs-link"),attr(M,"class","cs-li"),attr(E,"href","gallery"),attr(E,"class","cs-link"),attr(D,"class","cs-li"),attr(O,"href","testimonials"),attr(O,"class","cs-link"),attr(T,"class","cs-li"),attr(C,"href","areas"),attr(C,"class","cs-link"),attr(z,"class","cs-li"),attr(_,"href","contact"),attr(_,"class","cs-link"),attr(R,"class","cs-li"),attr(t,"class","cs-ul"),attr(p,"class","cs-top"),attr(o,"class","cs-social-icon cs-default"),src_url_equal(o.src,we="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/face-white1.svg")||attr(o,"src",we),attr(o,"alt","icon"),attr(o,"loading","lazy"),attr(o,"decoding","async"),attr(o,"width","12"),attr(o,"height","12"),attr(o,"aria-hidden","true"),attr(u,"href","https://www.facebook.com/InspiredFencing"),attr(u,"class","cs-social-link"),attr(u,"aria-label","facebook"),attr(u,"target","_blank"),attr(u,"rel","noopener"),attr(P,"class","cs-social-li"),attr(i,"class","cs-social-icon cs-default"),src_url_equal(i.src,ye="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-white.svg")||attr(i,"src",ye),attr(i,"alt","icon"),attr(i,"loading","lazy"),attr(i,"decoding","async"),attr(i,"width","12"),attr(i,"height","12"),attr(i,"aria-hidden","true"),attr(h,"href","https://x.com/InspiredFencing"),attr(h,"class","cs-social-link"),attr(h,"aria-label","twitter"),attr(h,"target","_blank"),attr(h,"rel","noopener"),attr(L,"class","cs-social-li"),attr(s,"class","cs-social-icon cs-default"),src_url_equal(s.src,je="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram.svg")||attr(s,"src",je),attr(s,"alt","icon"),attr(s,"loading","lazy"),attr(s,"decoding","async"),attr(s,"width","12"),attr(s,"height","12"),attr(s,"aria-hidden","true"),attr(l,"href","https://instagram.com/inspiredfencing"),attr(l,"class","cs-social-link"),attr(l,"aria-label","instagram"),attr(l,"target","_blank"),attr(l,"rel","noopener"),attr(F,"class","cs-social-li"),attr(n,"class","cs-social-icon cs-default"),src_url_equal(n.src,be="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube.svg")||attr(n,"src",be),attr(n,"alt","icon"),attr(n,"loading","lazy"),attr(n,"decoding","async"),attr(n,"width","12"),attr(n,"height","12"),attr(n,"aria-hidden","true"),attr(m,"href","https://www.pinterest.com.au/inspiredfencing/"),attr(m,"class","cs-social-link"),attr(m,"aria-label","pinterest"),attr(m,"target","_blank"),attr(m,"rel","noopener"),attr(N,"class","cs-social-li"),attr(a,"class","cs-social"),attr(v,"href","."),attr(v,"class","cs-copyright-link"),attr(y,"class","cs-copyright"),attr(k,"href","."),attr(k,"class","cs-copyright-link"),attr(V,"class","cs-separater"),attr(S,"href","."),attr(S,"class","cs-copyright-link"),attr(d,"class","cs-flex"),attr(c,"class","cs-bottom"),attr(g,"class","cs-container"),attr(j,"id","footer-1392")},m(e,be){insert_hydration(e,j,be),append_hydration(j,g),append_hydration(g,p),append_hydration(p,f),append_hydration(f,r),append_hydration(p,re),append_hydration(p,t),append_hydration(t,B),append_hydration(B,A),append_hydration(A,pe),append_hydration(t,fe),append_hydration(t,I),append_hydration(I,x),append_hydration(x,ue),append_hydration(t,le),append_hydration(t,H),append_hydration(H,b),append_hydration(b,$),append_hydration(t,W),append_hydration(t,M),append_hydration(M,w),append_hydration(w,ie),append_hydration(t,oe),append_hydration(t,D),append_hydration(D,E),append_hydration(E,te),append_hydration(t,ee),append_hydration(t,T),append_hydration(T,O),append_hydration(O,J),append_hydration(t,X),append_hydration(t,z),append_hydration(z,C),append_hydration(C,G),append_hydration(t,Y),append_hydration(t,R),append_hydration(R,_),append_hydration(_,U),append_hydration(g,ae),append_hydration(g,c),append_hydration(c,a),append_hydration(a,P),append_hydration(P,u),append_hydration(u,o),append_hydration(a,q),append_hydration(a,L),append_hydration(L,h),append_hydration(h,i),append_hydration(a,Z),append_hydration(a,F),append_hydration(F,l),append_hydration(l,s),append_hydration(a,se),append_hydration(a,N),append_hydration(N,m),append_hydration(m,n),append_hydration(c,ce),append_hydration(c,y),append_hydration(y,de),append_hydration(y,v),append_hydration(v,he),append_hydration(c,me),append_hydration(c,d),append_hydration(d,k),append_hydration(k,ge),append_hydration(d,ve),append_hydration(d,V),append_hydration(V,ne),append_hydration(d,Q),append_hydration(d,S),append_hydration(S,K)},p:noop,i:noop,o:noop,d(e){e&&detach(j)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component