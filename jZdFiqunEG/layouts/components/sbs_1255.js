import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let k,E,n,F,se,ft,H,de,rt,$,ge,nt,B,K,xe,Xe,f,_,i,Me,De,st,U=e[4].title+"",He,We,C,o,Z,Fe,Ye,X=e[5].title+"",Ce,Je,O,r,ye,ve,it,Y=e[6].title+"",me,dt,w,s,le,ae,pt,q=e[7].title+"",ne,gt,x,G=e[8].title+"",Ne,J,Ve,t,p,I,oe,ht,R,re,ut,l,Q,ue,ct,g,P,pe,ot,S,be,Be,m,_e,we,et,y,T,Ee,Qe,M,Se,qe,c,Te,ze,Ke,j,D,Re,tt,A,Ie,$e,u,Pe,Le,Ue,b,N,Ae,Ge,L,ke,Ze,h,Oe,je,vt,v,V,fe,at,W,he,lt,d,ce,ie,mt,z,a,te,ee;return{c(){k=element("section"),E=element("div"),n=element("div"),F=element("span"),se=text(e[0]),ft=space(),H=element("h2"),de=text(e[1]),rt=space(),$=element("p"),ge=text(e[2]),nt=space(),B=element("p"),K=element("i"),xe=text(e[3]),Xe=space(),f=element("ul"),_=element("li"),i=element("img"),st=space(),He=text(U),We=space(),C=element("li"),o=element("img"),Ye=space(),Ce=text(X),Je=space(),O=element("li"),r=element("img"),it=space(),me=text(Y),dt=space(),w=element("li"),s=element("img"),pt=space(),ne=text(q),gt=space(),x=element("a"),Ne=text(G),Ve=space(),t=element("div"),p=element("picture"),I=element("source"),ht=space(),R=element("source"),ut=space(),l=element("img"),ct=space(),g=element("picture"),P=element("source"),ot=space(),S=element("source"),Be=space(),m=element("img"),et=space(),y=element("picture"),T=element("source"),Qe=space(),M=element("source"),qe=space(),c=element("img"),Ke=space(),j=element("picture"),D=element("source"),tt=space(),A=element("source"),$e=space(),u=element("img"),Ue=space(),b=element("picture"),N=element("source"),Ge=space(),L=element("source"),Ze=space(),h=element("img"),vt=space(),v=element("picture"),V=element("source"),at=space(),W=element("source"),lt=space(),d=element("img"),mt=space(),z=element("picture"),a=element("img"),this.h()},l(Q){k=claim_element(Q,"SECTION",{id:!0});var Z,J,Ee=children(k),pe,we,_e,ye,je,be,ee,fe,le,ue,he,ve,ce,re,ae,ie,oe,te,Oe;E=claim_element(Ee,"DIV",{class:!0}),pe=children(E),n=claim_element(pe,"DIV",{class:!0}),J=children(n),F=claim_element(J,"SPAN",{class:!0}),we=children(F),se=claim_text(we,e[0]),we.forEach(detach),ft=claim_space(J),H=claim_element(J,"H2",{class:!0}),_e=children(H),de=claim_text(_e,e[1]),_e.forEach(detach),rt=claim_space(J),$=claim_element(J,"P",{class:!0}),ye=children($),ge=claim_text(ye,e[2]),ye.forEach(detach),nt=claim_space(J),B=claim_element(J,"P",{class:!0}),je=children(B),K=claim_element(je,"I",{}),be=children(K),xe=claim_text(be,e[3]),be.forEach(detach),je.forEach(detach),Xe=claim_space(J),f=claim_element(J,"UL",{class:!0}),ee=children(f),_=claim_element(ee,"LI",{class:!0}),fe=children(_),i=claim_element(fe,"IMG",{class:!0,loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0}),st=claim_space(fe),He=claim_text(fe,U),fe.forEach(detach),We=claim_space(ee),C=claim_element(ee,"LI",{class:!0}),le=children(C),o=claim_element(le,"IMG",{class:!0,loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0}),Ye=claim_space(le),Ce=claim_text(le,X),le.forEach(detach),Je=claim_space(ee),O=claim_element(ee,"LI",{class:!0}),ue=children(O),r=claim_element(ue,"IMG",{class:!0,loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0}),it=claim_space(ue),me=claim_text(ue,Y),ue.forEach(detach),dt=claim_space(ee),w=claim_element(ee,"LI",{class:!0}),he=children(w),s=claim_element(he,"IMG",{class:!0,loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0}),pt=claim_space(he),ne=claim_text(he,q),he.forEach(detach),ee.forEach(detach),gt=claim_space(J),x=claim_element(J,"A",{href:!0,class:!0}),ve=children(x),Ne=claim_text(ve,G),ve.forEach(detach),J.forEach(detach),Ve=claim_space(pe),t=claim_element(pe,"DIV",{class:!0}),Z=children(t),p=claim_element(Z,"PICTURE",{class:!0}),ce=children(p),I=claim_element(ce,"SOURCE",{media:!0,srcset:!0}),ht=claim_space(ce),R=claim_element(ce,"SOURCE",{media:!0,srcset:!0}),ut=claim_space(ce),l=claim_element(ce,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),ce.forEach(detach),ct=claim_space(Z),g=claim_element(Z,"PICTURE",{class:!0}),re=children(g),P=claim_element(re,"SOURCE",{media:!0,srcset:!0}),ot=claim_space(re),S=claim_element(re,"SOURCE",{media:!0,srcset:!0}),Be=claim_space(re),m=claim_element(re,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),re.forEach(detach),et=claim_space(Z),y=claim_element(Z,"PICTURE",{class:!0}),ae=children(y),T=claim_element(ae,"SOURCE",{media:!0,srcset:!0}),Qe=claim_space(ae),M=claim_element(ae,"SOURCE",{media:!0,srcset:!0}),qe=claim_space(ae),c=claim_element(ae,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),ae.forEach(detach),Ke=claim_space(Z),j=claim_element(Z,"PICTURE",{class:!0}),ie=children(j),D=claim_element(ie,"SOURCE",{media:!0,srcset:!0}),tt=claim_space(ie),A=claim_element(ie,"SOURCE",{media:!0,srcset:!0}),$e=claim_space(ie),u=claim_element(ie,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),ie.forEach(detach),Ue=claim_space(Z),b=claim_element(Z,"PICTURE",{class:!0}),oe=children(b),N=claim_element(oe,"SOURCE",{media:!0,srcset:!0}),Ge=claim_space(oe),L=claim_element(oe,"SOURCE",{media:!0,srcset:!0}),Ze=claim_space(oe),h=claim_element(oe,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),oe.forEach(detach),vt=claim_space(Z),v=claim_element(Z,"PICTURE",{class:!0}),te=children(v),V=claim_element(te,"SOURCE",{media:!0,srcset:!0}),at=claim_space(te),W=claim_element(te,"SOURCE",{media:!0,srcset:!0}),lt=claim_space(te),d=claim_element(te,"IMG",{loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0}),te.forEach(detach),mt=claim_space(Z),z=claim_element(Z,"PICTURE",{class:!0}),Oe=children(z),a=claim_element(Oe,"IMG",{class:!0,loading:!0,decoding:!0,src:!0,alt:!0,width:!0,height:!0,"aria-hidden":!0}),Oe.forEach(detach),Z.forEach(detach),pe.forEach(detach),Ee.forEach(detach),this.h()},h(){attr(F,"class","cs-topper"),attr(H,"class","cs-title"),attr($,"class","cs-text"),attr(B,"class","cs-text"),attr(i,"class","cs-li-img"),attr(i,"loading","lazy"),attr(i,"decoding","async"),src_url_equal(i.src,Me=e[4].icon)||attr(i,"src",Me),attr(i,"alt",De=e[4].altText),attr(i,"width","26"),attr(i,"height","28"),attr(i,"aria-hidden","true"),attr(_,"class","cs-li"),attr(o,"class","cs-li-img"),attr(o,"loading","lazy"),attr(o,"decoding","async"),src_url_equal(o.src,Z=e[5].icon)||attr(o,"src",Z),attr(o,"alt",Fe=e[5].altText),attr(o,"width","26"),attr(o,"height","28"),attr(o,"aria-hidden","true"),attr(C,"class","cs-li"),attr(r,"class","cs-li-img"),attr(r,"loading","lazy"),attr(r,"decoding","async"),src_url_equal(r.src,ye=e[6].icon)||attr(r,"src",ye),attr(r,"alt",ve=e[6].altText),attr(r,"width","26"),attr(r,"height","28"),attr(r,"aria-hidden","true"),attr(O,"class","cs-li"),attr(s,"class","cs-li-img"),attr(s,"loading","lazy"),attr(s,"decoding","async"),src_url_equal(s.src,le=e[7].icon)||attr(s,"src",le),attr(s,"alt",ae=e[7].altText),attr(s,"width","26"),attr(s,"height","28"),attr(s,"aria-hidden","true"),attr(w,"class","cs-li"),attr(f,"class","cs-ul"),attr(x,"href",J=e[8].url),attr(x,"class","cs-button-solid"),attr(n,"class","cs-content"),attr(I,"media","(max-width: 600px)"),attr(I,"srcset",oe=e[9].image_m.url),attr(R,"media","(min-width: 601px)"),attr(R,"srcset",re=e[9].image_t.url),attr(l,"loading","lazy"),attr(l,"decoding","async"),src_url_equal(l.src,Q=e[9].image.url)||attr(l,"src",Q),attr(l,"alt",ue=e[9].image.alt),attr(l,"width","203"),attr(l,"height","203"),attr(p,"class","cs-picture cs-picture1"),attr(P,"media","(max-width: 600px)"),attr(P,"srcset",pe=e[10].image_m.url),attr(S,"media","(min-width: 601px)"),attr(S,"srcset",be=e[10].image_t.url),attr(m,"loading","lazy"),attr(m,"decoding","async"),src_url_equal(m.src,_e=e[10].image.url)||attr(m,"src",_e),attr(m,"alt",we=e[10].image.alt),attr(m,"width","207"),attr(m,"height","207"),attr(g,"class","cs-picture cs-picture2"),attr(T,"media","(max-width: 600px)"),attr(T,"srcset",Ee=e[11].image_m.url),attr(M,"media","(min-width: 601px)"),attr(M,"srcset",Se=e[11].image_t.url),attr(c,"loading","lazy"),attr(c,"decoding","async"),src_url_equal(c.src,Te=e[11].image.url)||attr(c,"src",Te),attr(c,"alt",ze=e[11].image.alt),attr(c,"width","214"),attr(c,"height","214"),attr(y,"class","cs-picture cs-picture3"),attr(D,"media","(max-width: 600px)"),attr(D,"srcset",Re=e[12].image_m.url),attr(A,"media","(min-width: 601px)"),attr(A,"srcset",Ie=e[12].image_t.url),attr(u,"loading","lazy"),attr(u,"decoding","async"),src_url_equal(u.src,Pe=e[12].image.url)||attr(u,"src",Pe),attr(u,"alt",Le=e[12].image.alt),attr(u,"width","223"),attr(u,"height","223"),attr(j,"class","cs-picture cs-picture4"),attr(N,"media","(max-width: 600px)"),attr(N,"srcset",Ae=e[13].image_m.url),attr(L,"media","(min-width: 601px)"),attr(L,"srcset",ke=e[13].image_t.url),attr(h,"loading","lazy"),attr(h,"decoding","async"),src_url_equal(h.src,Oe=e[13].image.url)||attr(h,"src",Oe),attr(h,"alt",je=e[13].image.alt),attr(h,"width","287"),attr(h,"height","287"),attr(b,"class","cs-picture cs-picture5"),attr(V,"media","(max-width: 600px)"),attr(V,"srcset",fe=e[14].image_m.url),attr(W,"media","(min-width: 601px)"),attr(W,"srcset",he=e[14].image_t.url),attr(d,"loading","lazy"),attr(d,"decoding","async"),src_url_equal(d.src,ce=e[14].image.url)||attr(d,"src",ce),attr(d,"alt",ie=e[14].image.alt),attr(d,"width","203"),attr(d,"height","203"),attr(v,"class","cs-picture cs-picture6"),attr(a,"class","cs-waves"),attr(a,"loading","lazy"),attr(a,"decoding","async"),src_url_equal(a.src,te=e[15].icon)||attr(a,"src",te),attr(a,"alt",ee=e[15].altText),attr(a,"width","650"),attr(a,"height","933"),attr(a,"aria-hidden","true"),attr(z,"class","cs-waves-wrapper"),attr(t,"class","cs-image-group"),attr(E,"class","cs-container"),attr(k,"id","sbs-1255")},m(e,U){insert_hydration(e,k,U),append_hydration(k,E),append_hydration(E,n),append_hydration(n,F),append_hydration(F,se),append_hydration(n,ft),append_hydration(n,H),append_hydration(H,de),append_hydration(n,rt),append_hydration(n,$),append_hydration($,ge),append_hydration(n,nt),append_hydration(n,B),append_hydration(B,K),append_hydration(K,xe),append_hydration(n,Xe),append_hydration(n,f),append_hydration(f,_),append_hydration(_,i),append_hydration(_,st),append_hydration(_,He),append_hydration(f,We),append_hydration(f,C),append_hydration(C,o),append_hydration(C,Ye),append_hydration(C,Ce),append_hydration(f,Je),append_hydration(f,O),append_hydration(O,r),append_hydration(O,it),append_hydration(O,me),append_hydration(f,dt),append_hydration(f,w),append_hydration(w,s),append_hydration(w,pt),append_hydration(w,ne),append_hydration(n,gt),append_hydration(n,x),append_hydration(x,Ne),append_hydration(E,Ve),append_hydration(E,t),append_hydration(t,p),append_hydration(p,I),append_hydration(p,ht),append_hydration(p,R),append_hydration(p,ut),append_hydration(p,l),append_hydration(t,ct),append_hydration(t,g),append_hydration(g,P),append_hydration(g,ot),append_hydration(g,S),append_hydration(g,Be),append_hydration(g,m),append_hydration(t,et),append_hydration(t,y),append_hydration(y,T),append_hydration(y,Qe),append_hydration(y,M),append_hydration(y,qe),append_hydration(y,c),append_hydration(t,Ke),append_hydration(t,j),append_hydration(j,D),append_hydration(j,tt),append_hydration(j,A),append_hydration(j,$e),append_hydration(j,u),append_hydration(t,Ue),append_hydration(t,b),append_hydration(b,N),append_hydration(b,Ge),append_hydration(b,L),append_hydration(b,Ze),append_hydration(b,h),append_hydration(t,vt),append_hydration(t,v),append_hydration(v,V),append_hydration(v,at),append_hydration(v,W),append_hydration(v,lt),append_hydration(v,d),append_hydration(t,mt),append_hydration(t,z),append_hydration(z,a)},p(e,[t]){t&1&&set_data(se,e[0]),t&2&&set_data(de,e[1]),t&4&&set_data(ge,e[2]),t&8&&set_data(xe,e[3]),t&16&&!src_url_equal(i.src,Me=e[4].icon)&&attr(i,"src",Me),t&16&&De!==(De=e[4].altText)&&attr(i,"alt",De),t&16&&U!==(U=e[4].title+"")&&set_data(He,U),t&32&&!src_url_equal(o.src,Z=e[5].icon)&&attr(o,"src",Z),t&32&&Fe!==(Fe=e[5].altText)&&attr(o,"alt",Fe),t&32&&X!==(X=e[5].title+"")&&set_data(Ce,X),t&64&&!src_url_equal(r.src,ye=e[6].icon)&&attr(r,"src",ye),t&64&&ve!==(ve=e[6].altText)&&attr(r,"alt",ve),t&64&&Y!==(Y=e[6].title+"")&&set_data(me,Y),t&128&&!src_url_equal(s.src,le=e[7].icon)&&attr(s,"src",le),t&128&&ae!==(ae=e[7].altText)&&attr(s,"alt",ae),t&128&&q!==(q=e[7].title+"")&&set_data(ne,q),t&256&&G!==(G=e[8].title+"")&&set_data(Ne,G),t&256&&J!==(J=e[8].url)&&attr(x,"href",J),t&512&&oe!==(oe=e[9].image_m.url)&&attr(I,"srcset",oe),t&512&&re!==(re=e[9].image_t.url)&&attr(R,"srcset",re),t&512&&!src_url_equal(l.src,Q=e[9].image.url)&&attr(l,"src",Q),t&512&&ue!==(ue=e[9].image.alt)&&attr(l,"alt",ue),t&1024&&pe!==(pe=e[10].image_m.url)&&attr(P,"srcset",pe),t&1024&&be!==(be=e[10].image_t.url)&&attr(S,"srcset",be),t&1024&&!src_url_equal(m.src,_e=e[10].image.url)&&attr(m,"src",_e),t&1024&&we!==(we=e[10].image.alt)&&attr(m,"alt",we),t&2048&&Ee!==(Ee=e[11].image_m.url)&&attr(T,"srcset",Ee),t&2048&&Se!==(Se=e[11].image_t.url)&&attr(M,"srcset",Se),t&2048&&!src_url_equal(c.src,Te=e[11].image.url)&&attr(c,"src",Te),t&2048&&ze!==(ze=e[11].image.alt)&&attr(c,"alt",ze),t&4096&&Re!==(Re=e[12].image_m.url)&&attr(D,"srcset",Re),t&4096&&Ie!==(Ie=e[12].image_t.url)&&attr(A,"srcset",Ie),t&4096&&!src_url_equal(u.src,Pe=e[12].image.url)&&attr(u,"src",Pe),t&4096&&Le!==(Le=e[12].image.alt)&&attr(u,"alt",Le),t&8192&&Ae!==(Ae=e[13].image_m.url)&&attr(N,"srcset",Ae),t&8192&&ke!==(ke=e[13].image_t.url)&&attr(L,"srcset",ke),t&8192&&!src_url_equal(h.src,Oe=e[13].image.url)&&attr(h,"src",Oe),t&8192&&je!==(je=e[13].image.alt)&&attr(h,"alt",je),t&16384&&fe!==(fe=e[14].image_m.url)&&attr(V,"srcset",fe),t&16384&&he!==(he=e[14].image_t.url)&&attr(W,"srcset",he),t&16384&&!src_url_equal(d.src,ce=e[14].image.url)&&attr(d,"src",ce),t&16384&&ie!==(ie=e[14].image.alt)&&attr(d,"alt",ie),t&32768&&!src_url_equal(a.src,te=e[15].icon)&&attr(a,"src",te),t&32768&&ee!==(ee=e[15].altText)&&attr(a,"alt",ee)},i:noop,o:noop,d(e){e&&detach(k)}}}function instance(e,t,n){let{subtitle:s,title:o,description:i,listTitle:a,list1:r,list2:c,list3:l,list4:d,button:u,picture1:h,picture2:m,picture3:f,picture4:p,picture5:g,picture6:v,waves:b}=t;return e.$$set=e=>{"subtitle"in e&&n(0,s=e.subtitle),"title"in e&&n(1,o=e.title),"description"in e&&n(2,i=e.description),"listTitle"in e&&n(3,a=e.listTitle),"list1"in e&&n(4,r=e.list1),"list2"in e&&n(5,c=e.list2),"list3"in e&&n(6,l=e.list3),"list4"in e&&n(7,d=e.list4),"button"in e&&n(8,u=e.button),"picture1"in e&&n(9,h=e.picture1),"picture2"in e&&n(10,m=e.picture2),"picture3"in e&&n(11,f=e.picture3),"picture4"in e&&n(12,p=e.picture4),"picture5"in e&&n(13,g=e.picture5),"picture6"in e&&n(14,v=e.picture6),"waves"in e&&n(15,b=e.waves)},[s,o,i,a,r,c,l,d,u,h,m,f,p,g,v,b]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{subtitle:0,title:1,description:2,listTitle:3,list1:4,list2:5,list3:6,list4:7,button:8,picture1:9,picture2:10,picture3:11,picture4:12,picture5:13,picture6:14,waves:15})}}export default Component