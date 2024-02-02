import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,set_style,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let m,c,o,i,P,me,p,I,le,$,oe,j,Q,re,h,F=e[7].title+"",G,N,ne,a,u,w,E=e[4].number+"",U,Z,O,k=e[4].desc+"",B,ue,d,g,T=e[5].number+"",H,ae,x,D=e[5].desc+"",R,pe,l,_,A=e[6].number+"",V,ce,f,C=e[6].desc+"",K,ie,s,v,X,te,y,L,ee,b,Y,se,t,q,W,J,n,M,de,S,he,z,fe,r,ge;return{c(){m=element("section"),c=element("div"),o=element("div"),i=element("h1"),P=text(e[0]),me=space(),p=element("span"),I=text(e[1]),le=space(),$=text(e[2]),oe=space(),j=element("p"),Q=text(e[3]),re=space(),h=element("a"),G=text(F),ne=space(),a=element("ul"),u=element("li"),w=element("span"),U=text(E),Z=space(),O=element("span"),B=text(k),ue=space(),d=element("li"),g=element("span"),H=text(T),ae=space(),x=element("span"),R=text(D),pe=space(),l=element("li"),_=element("span"),V=text(A),ce=space(),f=element("span"),K=text(C),ie=space(),s=element("picture"),v=element("source"),te=space(),y=element("source"),ee=space(),b=element("source"),se=space(),t=element("img"),J=space(),n=element("picture"),M=element("source"),de=space(),S=element("source"),he=space(),z=element("source"),fe=space(),r=element("img"),this.h()},l(N){m=claim_element(N,"SECTION",{id:!0});var L,W,q,Y,X,Se=children(m),ye,Ae,Ce,ge,je,we,_e,ve,Oe,xe,be,Ee,ke;c=claim_element(Se,"DIV",{class:!0}),Y=children(c),o=claim_element(Y,"DIV",{class:!0}),L=children(o),i=claim_element(L,"H1",{class:!0}),X=children(i),P=claim_text(X,e[0]),me=claim_space(X),p=claim_element(X,"SPAN",{style:!0}),ye=children(p),I=claim_text(ye,e[1]),ye.forEach(detach),le=claim_space(X),$=claim_text(X,e[2]),X.forEach(detach),oe=claim_space(L),j=claim_element(L,"P",{class:!0}),Ae=children(j),Q=claim_text(Ae,e[3]),Ae.forEach(detach),re=claim_space(L),h=claim_element(L,"A",{href:!0,class:!0}),Ce=children(h),G=claim_text(Ce,F),Ce.forEach(detach),ne=claim_space(L),a=claim_element(L,"UL",{class:!0}),ge=children(a),u=claim_element(ge,"LI",{class:!0}),je=children(u),w=claim_element(je,"SPAN",{class:!0}),we=children(w),U=claim_text(we,E),we.forEach(detach),Z=claim_space(je),O=claim_element(je,"SPAN",{class:!0}),_e=children(O),B=claim_text(_e,k),_e.forEach(detach),je.forEach(detach),ue=claim_space(ge),d=claim_element(ge,"LI",{class:!0}),ve=children(d),g=claim_element(ve,"SPAN",{class:!0}),Oe=children(g),H=claim_text(Oe,T),Oe.forEach(detach),ae=claim_space(ve),x=claim_element(ve,"SPAN",{class:!0}),xe=children(x),R=claim_text(xe,D),xe.forEach(detach),ve.forEach(detach),pe=claim_space(ge),l=claim_element(ge,"LI",{class:!0}),be=children(l),_=claim_element(be,"SPAN",{class:!0}),Ee=children(_),V=claim_text(Ee,A),Ee.forEach(detach),ce=claim_space(be),f=claim_element(be,"SPAN",{class:!0}),ke=children(f),K=claim_text(ke,C),ke.forEach(detach),be.forEach(detach),ge.forEach(detach),L.forEach(detach),ie=claim_space(Y),s=claim_element(Y,"PICTURE",{class:!0}),q=children(s),v=claim_element(q,"SOURCE",{media:!0,srcset:!0}),te=claim_space(q),y=claim_element(q,"SOURCE",{media:!0,srcset:!0}),ee=claim_space(q),b=claim_element(q,"SOURCE",{media:!0,srcset:!0}),se=claim_space(q),t=claim_element(q,"IMG",{"aria-hidden":!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),q.forEach(detach),J=claim_space(Y),n=claim_element(Y,"PICTURE",{class:!0}),W=children(n),M=claim_element(W,"SOURCE",{media:!0,srcset:!0}),de=claim_space(W),S=claim_element(W,"SOURCE",{media:!0,srcset:!0}),he=claim_space(W),z=claim_element(W,"SOURCE",{media:!0,srcset:!0}),fe=claim_space(W),r=claim_element(W,"IMG",{decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0}),W.forEach(detach),Y.forEach(detach),Se.forEach(detach),this.h()},h(){set_style(p,"color","var(--primary)"),attr(i,"class","cs-title"),attr(j,"class","cs-text"),attr(h,"href",N=e[7].url),attr(h,"class","cs-button-solid"),attr(w,"class","cs-number"),attr(O,"class","cs-desc"),attr(u,"class","cs-item"),attr(g,"class","cs-number"),attr(x,"class","cs-desc"),attr(d,"class","cs-item"),attr(_,"class","cs-number"),attr(f,"class","cs-desc"),attr(l,"class","cs-item"),attr(a,"class","cs-stats-group"),attr(o,"class","cs-content"),attr(v,"media","(max-width: 600px)"),attr(v,"srcset",X=e[9].url),attr(y,"media","(min-width: 601px)"),attr(y,"srcset",L=e[10].url),attr(b,"media","(min-width: 1024px)"),attr(b,"srcset",Y=e[8].url),attr(t,"aria-hidden","true"),attr(t,"decoding","async"),src_url_equal(t.src,q=e[8].url)||attr(t,"src",q),attr(t,"alt",W=e[8].alt),attr(t,"width","630"),attr(t,"height","814"),attr(s,"class","cs-picture"),attr(M,"media","(min-width: 1024px)"),attr(M,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Hero/waves.svg"),attr(S,"media","(min-width: 601px)"),attr(S,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Hero/waves-t.svg"),attr(z,"media","(max-width: 600px)"),attr(z,"srcset","https://csimg.nyc3.digitaloceanspaces.com/Hero/waves-m.svg"),attr(r,"decoding","async"),src_url_equal(r.src,ge="https://csimg.nyc3.digitaloceanspaces.com/Hero/waves.svg")||attr(r,"src",ge),attr(r,"alt","waves"),attr(r,"width","645"),attr(r,"height","1080"),attr(r,"aria-hidden","true"),attr(n,"class","cs-waves"),attr(c,"class","cs-container"),attr(m,"id","hero-288")},m(e,C){insert_hydration(e,m,C),append_hydration(m,c),append_hydration(c,o),append_hydration(o,i),append_hydration(i,P),append_hydration(i,me),append_hydration(i,p),append_hydration(p,I),append_hydration(i,le),append_hydration(i,$),append_hydration(o,oe),append_hydration(o,j),append_hydration(j,Q),append_hydration(o,re),append_hydration(o,h),append_hydration(h,G),append_hydration(o,ne),append_hydration(o,a),append_hydration(a,u),append_hydration(u,w),append_hydration(w,U),append_hydration(u,Z),append_hydration(u,O),append_hydration(O,B),append_hydration(a,ue),append_hydration(a,d),append_hydration(d,g),append_hydration(g,H),append_hydration(d,ae),append_hydration(d,x),append_hydration(x,R),append_hydration(a,pe),append_hydration(a,l),append_hydration(l,_),append_hydration(_,V),append_hydration(l,ce),append_hydration(l,f),append_hydration(f,K),append_hydration(c,ie),append_hydration(c,s),append_hydration(s,v),append_hydration(s,te),append_hydration(s,y),append_hydration(s,ee),append_hydration(s,b),append_hydration(s,se),append_hydration(s,t),append_hydration(c,J),append_hydration(c,n),append_hydration(n,M),append_hydration(n,de),append_hydration(n,S),append_hydration(n,he),append_hydration(n,z),append_hydration(n,fe),append_hydration(n,r)},p(e,[n]){n&1&&set_data(P,e[0]),n&2&&set_data(I,e[1]),n&4&&set_data($,e[2]),n&8&&set_data(Q,e[3]),n&128&&F!==(F=e[7].title+"")&&set_data(G,F),n&128&&N!==(N=e[7].url)&&attr(h,"href",N),n&16&&E!==(E=e[4].number+"")&&set_data(U,E),n&16&&k!==(k=e[4].desc+"")&&set_data(B,k),n&32&&T!==(T=e[5].number+"")&&set_data(H,T),n&32&&D!==(D=e[5].desc+"")&&set_data(R,D),n&64&&A!==(A=e[6].number+"")&&set_data(V,A),n&64&&C!==(C=e[6].desc+"")&&set_data(K,C),n&512&&X!==(X=e[9].url)&&attr(v,"srcset",X),n&1024&&L!==(L=e[10].url)&&attr(y,"srcset",L),n&256&&Y!==(Y=e[8].url)&&attr(b,"srcset",Y),n&256&&!src_url_equal(t.src,q=e[8].url)&&attr(t,"src",q),n&256&&W!==(W=e[8].alt)&&attr(t,"alt",W)},i:noop,o:noop,d(e){e&&detach(m)}}}function instance(e,t,n){let{title1:s,title2:o,title3:i,description:a,stat1:r,stat2:c,stat3:l,button:d,image:u,image_m:h,image_t:m}=t;return e.$$set=e=>{"title1"in e&&n(0,s=e.title1),"title2"in e&&n(1,o=e.title2),"title3"in e&&n(2,i=e.title3),"description"in e&&n(3,a=e.description),"stat1"in e&&n(4,r=e.stat1),"stat2"in e&&n(5,c=e.stat2),"stat3"in e&&n(6,l=e.stat3),"button"in e&&n(7,d=e.button),"image"in e&&n(8,u=e.image),"image_m"in e&&n(9,h=e.image_m),"image_t"in e&&n(10,m=e.image_t)},[s,o,i,a,r,c,l,d,u,h,m]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title1:0,title2:1,title3:2,description:3,stat1:4,stat2:5,stat3:6,button:7,image:8,image_m:9,image_t:10})}}export default Component