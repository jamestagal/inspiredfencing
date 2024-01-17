import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let y,b,_,j,w,V,X,O,oe,re,t,h,F,ue,k,le,v,fe,I,d,P,ae,x,B,m,ge,J,n,E,Z,C,G,i,be,U,o,R,W,A,se,l,je,$,s,N,K,D,Y,r,ve,Q,c,z,ee,S,ne,p,pe,ie,u,M,ce,L,de,f,me,he,g,H,te,T,q,a,ye;return{c(){y=element("section"),b=element("div"),_=element("div"),j=element("div"),w=element("span"),V=text("Gallery"),X=space(),O=element("h2"),oe=text("Our Photo Gallery"),re=space(),t=element("div"),h=element("picture"),F=element("source"),ue=space(),k=element("source"),le=space(),v=element("img"),I=space(),d=element("picture"),P=element("source"),ae=space(),x=element("source"),B=space(),m=element("img"),J=space(),n=element("picture"),E=element("source"),Z=space(),C=element("source"),G=space(),i=element("img"),U=space(),o=element("picture"),R=element("source"),W=space(),A=element("source"),se=space(),l=element("img"),$=space(),s=element("picture"),N=element("source"),K=space(),D=element("source"),Y=space(),r=element("img"),Q=space(),c=element("picture"),z=element("source"),ee=space(),S=element("source"),ne=space(),p=element("img"),ie=space(),u=element("picture"),M=element("source"),ce=space(),L=element("source"),de=space(),f=element("img"),he=space(),g=element("picture"),H=element("source"),te=space(),T=element("source"),q=space(),a=element("img"),this.h()},l(e){y=claim_element(e,"SECTION",{id:!0});var ke=children(y),we,xe,Oe,Ee,Ce,me,ye,_e,fe,je,pe,be,ve,ge;b=claim_element(ke,"DIV",{class:!0}),we=children(b),_=claim_element(we,"DIV",{class:!0}),xe=children(_),j=claim_element(xe,"DIV",{class:!0}),Oe=children(j),w=claim_element(Oe,"SPAN",{class:!0}),Ee=children(w),V=claim_text(Ee,"Gallery"),Ee.forEach(detach),X=claim_space(Oe),O=claim_element(Oe,"H2",{class:!0}),Ce=children(O),oe=claim_text(Ce,"Our Photo Gallery"),Ce.forEach(detach),Oe.forEach(detach),xe.forEach(detach),re=claim_space(we),t=claim_element(we,"DIV",{class:!0}),me=children(t),h=claim_element(me,"PICTURE",{class:!0}),ye=children(h),F=claim_element(ye,"SOURCE",{media:!0,srcset:!0}),ue=claim_space(ye),k=claim_element(ye,"SOURCE",{media:!0,srcset:!0}),le=claim_space(ye),v=claim_element(ye,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),ye.forEach(detach),I=claim_space(me),d=claim_element(me,"PICTURE",{class:!0}),_e=children(d),P=claim_element(_e,"SOURCE",{media:!0,srcset:!0}),ae=claim_space(_e),x=claim_element(_e,"SOURCE",{media:!0,srcset:!0}),B=claim_space(_e),m=claim_element(_e,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),_e.forEach(detach),J=claim_space(me),n=claim_element(me,"PICTURE",{class:!0}),fe=children(n),E=claim_element(fe,"SOURCE",{media:!0,srcset:!0}),Z=claim_space(fe),C=claim_element(fe,"SOURCE",{media:!0,srcset:!0}),G=claim_space(fe),i=claim_element(fe,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),fe.forEach(detach),U=claim_space(me),o=claim_element(me,"PICTURE",{class:!0}),je=children(o),R=claim_element(je,"SOURCE",{media:!0,srcset:!0}),W=claim_space(je),A=claim_element(je,"SOURCE",{media:!0,srcset:!0}),se=claim_space(je),l=claim_element(je,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),je.forEach(detach),$=claim_space(me),s=claim_element(me,"PICTURE",{class:!0}),pe=children(s),N=claim_element(pe,"SOURCE",{media:!0,srcset:!0}),K=claim_space(pe),D=claim_element(pe,"SOURCE",{media:!0,srcset:!0}),Y=claim_space(pe),r=claim_element(pe,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),pe.forEach(detach),Q=claim_space(me),c=claim_element(me,"PICTURE",{class:!0}),be=children(c),z=claim_element(be,"SOURCE",{media:!0,srcset:!0}),ee=claim_space(be),S=claim_element(be,"SOURCE",{media:!0,srcset:!0}),ne=claim_space(be),p=claim_element(be,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),be.forEach(detach),ie=claim_space(me),u=claim_element(me,"PICTURE",{class:!0}),ve=children(u),M=claim_element(ve,"SOURCE",{media:!0,srcset:!0}),ce=claim_space(ve),L=claim_element(ve,"SOURCE",{media:!0,srcset:!0}),de=claim_space(ve),f=claim_element(ve,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),ve.forEach(detach),he=claim_space(me),g=claim_element(me,"PICTURE",{class:!0}),ge=children(g),H=claim_element(ge,"SOURCE",{media:!0,srcset:!0}),te=claim_space(ge),T=claim_element(ge,"SOURCE",{media:!0,srcset:!0}),q=claim_space(ge),a=claim_element(ge,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),ge.forEach(detach),me.forEach(detach),we.forEach(detach),ke.forEach(detach),this.h()},h(){attr(w,"class","cs-topper"),attr(O,"class","cs-title"),attr(j,"class","cs-flex"),attr(_,"class","cs-content"),attr(F,"media","(max-width: 600px)"),attr(F,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign.jpeg"),attr(k,"media","(min-width: 601px)"),attr(k,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign.jpeg"),attr(v,"loading","lazy"),attr(v,"decoding","async"),src_url_equal(v.src,fe="https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign.jpeg")||attr(v,"src",fe),attr(v,"alt","gallery"),attr(v,"width","305"),attr(v,"height","400"),attr(h,"class","cs-image"),attr(P,"media","(max-width: 600px)"),attr(P,"srcset","https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/melting-ice.jpeg"),attr(x,"media","(min-width: 601px)"),attr(x,"srcset","https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/melting-ice.jpeg"),attr(m,"loading","lazy"),attr(m,"decoding","async"),src_url_equal(m.src,ge="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/melting-ice.jpeg")||attr(m,"src",ge),attr(m,"alt","gallery"),attr(m,"width","305"),attr(m,"height","400"),attr(d,"class","cs-image"),attr(E,"media","(max-width: 600px)"),attr(E,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/windmills.jpeg"),attr(C,"media","(min-width: 601px)"),attr(C,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/windmills.jpeg"),attr(i,"loading","lazy"),attr(i,"decoding","async"),src_url_equal(i.src,be="https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/windmills.jpeg")||attr(i,"src",be),attr(i,"alt","gallery"),attr(i,"width","305"),attr(i,"height","400"),attr(n,"class","cs-image"),attr(R,"media","(max-width: 600px)"),attr(R,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign2.jpeg"),attr(A,"media","(min-width: 601px)"),attr(A,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign2.jpeg"),attr(l,"loading","lazy"),attr(l,"decoding","async"),src_url_equal(l.src,je="https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign2.jpeg")||attr(l,"src",je),attr(l,"alt","gallery"),attr(l,"width","305"),attr(l,"height","400"),attr(o,"class","cs-image"),attr(N,"media","(max-width: 600px)"),attr(N,"srcset","https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/falling-rocks.jpeg"),attr(D,"media","(min-width: 601px)"),attr(D,"srcset","https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/falling-rocks.jpeg"),attr(r,"loading","lazy"),attr(r,"decoding","async"),src_url_equal(r.src,ve="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/falling-rocks.jpeg")||attr(r,"src",ve),attr(r,"alt","gallery"),attr(r,"width","305"),attr(r,"height","400"),attr(s,"class","cs-image"),attr(z,"media","(max-width: 600px)"),attr(z,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign4.jpeg"),attr(S,"media","(min-width: 601px)"),attr(S,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign4.jpeg"),attr(p,"loading","lazy"),attr(p,"decoding","async"),src_url_equal(p.src,pe="https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign4.jpeg")||attr(p,"src",pe),attr(p,"alt","gallery"),attr(p,"width","305"),attr(p,"height","400"),attr(c,"class","cs-image"),attr(M,"media","(max-width: 600px)"),attr(M,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign3.jpeg"),attr(L,"media","(min-width: 601px)"),attr(L,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign3.jpeg"),attr(f,"loading","lazy"),attr(f,"decoding","async"),src_url_equal(f.src,me="https://csimg.nyc3.digitaloceanspaces.com/Images/MISC/protest-sign3.jpeg")||attr(f,"src",me),attr(f,"alt","gallery"),attr(f,"width","305"),attr(f,"height","400"),attr(u,"class","cs-image"),attr(H,"media","(max-width: 600px)"),attr(H,"srcset","https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/desert-tree.jpeg"),attr(T,"media","(min-width: 601px)"),attr(T,"srcset","https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/desert-tree.jpeg"),attr(a,"loading","lazy"),attr(a,"decoding","async"),src_url_equal(a.src,ye="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Landscapes/desert-tree.jpeg")||attr(a,"src",ye),attr(a,"alt","gallery"),attr(a,"width","305"),attr(a,"height","400"),attr(g,"class","cs-image"),attr(t,"class","cs-gallery"),attr(b,"class","cs-container"),attr(y,"id","gallery-1446")},m(e,me){insert_hydration(e,y,me),append_hydration(y,b),append_hydration(b,_),append_hydration(_,j),append_hydration(j,w),append_hydration(w,V),append_hydration(j,X),append_hydration(j,O),append_hydration(O,oe),append_hydration(b,re),append_hydration(b,t),append_hydration(t,h),append_hydration(h,F),append_hydration(h,ue),append_hydration(h,k),append_hydration(h,le),append_hydration(h,v),append_hydration(t,I),append_hydration(t,d),append_hydration(d,P),append_hydration(d,ae),append_hydration(d,x),append_hydration(d,B),append_hydration(d,m),append_hydration(t,J),append_hydration(t,n),append_hydration(n,E),append_hydration(n,Z),append_hydration(n,C),append_hydration(n,G),append_hydration(n,i),append_hydration(t,U),append_hydration(t,o),append_hydration(o,R),append_hydration(o,W),append_hydration(o,A),append_hydration(o,se),append_hydration(o,l),append_hydration(t,$),append_hydration(t,s),append_hydration(s,N),append_hydration(s,K),append_hydration(s,D),append_hydration(s,Y),append_hydration(s,r),append_hydration(t,Q),append_hydration(t,c),append_hydration(c,z),append_hydration(c,ee),append_hydration(c,S),append_hydration(c,ne),append_hydration(c,p),append_hydration(t,ie),append_hydration(t,u),append_hydration(u,M),append_hydration(u,ce),append_hydration(u,L),append_hydration(u,de),append_hydration(u,f),append_hydration(t,he),append_hydration(t,g),append_hydration(g,H),append_hydration(g,te),append_hydration(g,T),append_hydration(g,q),append_hydration(g,a)},p:noop,i:noop,o:noop,d(e){e&&detach(y)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component