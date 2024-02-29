import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let x,m,i,D,J,Le,L,ne,Fe,S,ae,Ae,a,f,T,o,ue,me,we,y,k,U=e[3].title+"",G,je,u,P=e[3].number+"",ve,ge,xe,O,F,s,he,le,Ee,j,A,R=e[4].title+"",re,Te,v,V=e[4].address+"",se,ee,Re,p,M,n,Z,ce,Pe,g,z,W=e[5].title+"",te,De,C,I=e[5].location+"",ie,Me,t,N,H=e[6].title+"",de,Ce,w,Y=e[6].name+"",fe,ye,c,be,b,q=e[6].email+"",pe,_e,l,Oe,h,B=e[6].phone+"",X,ke,r,Se,_,$=e[6].message+"",oe,ze,d,Ne,E,K=e[6].button+"",Q;return{c(){x=element("section"),m=element("div"),i=element("div"),D=element("span"),J=text(e[0]),Le=space(),L=element("h2"),ne=text(e[1]),Fe=space(),S=element("p"),ae=text(e[2]),Ae=space(),a=element("ul"),f=element("li"),T=element("picture"),o=element("img"),we=space(),y=element("div"),k=element("span"),G=text(U),je=space(),u=element("a"),ve=text(P),xe=space(),O=element("li"),F=element("picture"),s=element("img"),Ee=space(),j=element("div"),A=element("span"),re=text(R),Te=space(),v=element("a"),se=text(V),Re=space(),p=element("li"),M=element("picture"),n=element("img"),Pe=space(),g=element("div"),z=element("span"),te=text(W),De=space(),C=element("a"),ie=text(I),Me=space(),t=element("form"),N=element("h3"),de=text(H),Ce=space(),w=element("label"),fe=text(Y),ye=space(),c=element("input"),be=space(),b=element("label"),pe=text(q),_e=space(),l=element("input"),Oe=space(),h=element("label"),X=text(B),ke=space(),r=element("input"),Se=space(),_=element("label"),oe=text($),ze=space(),d=element("textarea"),Ne=space(),E=element("button"),Q=text(K),this.h()},l(Z){x=claim_element(Z,"SECTION",{id:!0});var at=children(x),$e,ce,ot,nt,it,le,He,st,Be,Ke,et,We,Qe,ue,Je,Ye,he,Xe,Ue,Ze,qe,ee,tt,Ve,Ie,ge,me,Ge;m=claim_element(at,"DIV",{class:!0}),$e=children(m),i=claim_element($e,"DIV",{class:!0}),ce=children(i),D=claim_element(ce,"SPAN",{class:!0}),ot=children(D),J=claim_text(ot,e[0]),ot.forEach(detach),Le=claim_space(ce),L=claim_element(ce,"H2",{class:!0}),nt=children(L),ne=claim_text(nt,e[1]),nt.forEach(detach),Fe=claim_space(ce),S=claim_element(ce,"P",{class:!0}),it=children(S),ae=claim_text(it,e[2]),it.forEach(detach),Ae=claim_space(ce),a=claim_element(ce,"UL",{class:!0}),le=children(a),f=claim_element(le,"LI",{class:!0}),He=children(f),T=claim_element(He,"PICTURE",{class:!0}),st=children(T),o=claim_element(st,"IMG",{"aria-hidden":!0,src:!0,alt:!0,class:!0,width:!0,height:!0,decoding:!0}),st.forEach(detach),we=claim_space(He),y=claim_element(He,"DIV",{class:!0}),Be=children(y),k=claim_element(Be,"SPAN",{class:!0}),Ke=children(k),G=claim_text(Ke,U),Ke.forEach(detach),je=claim_space(Be),u=claim_element(Be,"A",{href:!0,class:!0}),et=children(u),ve=claim_text(et,P),et.forEach(detach),Be.forEach(detach),He.forEach(detach),xe=claim_space(le),O=claim_element(le,"LI",{class:!0}),We=children(O),F=claim_element(We,"PICTURE",{class:!0}),Qe=children(F),s=claim_element(Qe,"IMG",{"aria-hidden":!0,src:!0,alt:!0,class:!0,width:!0,height:!0,decoding:!0}),Qe.forEach(detach),Ee=claim_space(We),j=claim_element(We,"DIV",{class:!0}),ue=children(j),A=claim_element(ue,"SPAN",{class:!0}),Je=children(A),re=claim_text(Je,R),Je.forEach(detach),Te=claim_space(ue),v=claim_element(ue,"A",{href:!0,class:!0}),Ye=children(v),se=claim_text(Ye,V),Ye.forEach(detach),ue.forEach(detach),We.forEach(detach),Re=claim_space(le),p=claim_element(le,"LI",{class:!0}),he=children(p),M=claim_element(he,"PICTURE",{class:!0}),Xe=children(M),n=claim_element(Xe,"IMG",{"aria-hidden":!0,src:!0,alt:!0,class:!0,width:!0,height:!0,decoding:!0}),Xe.forEach(detach),Pe=claim_space(he),g=claim_element(he,"DIV",{class:!0}),Ue=children(g),z=claim_element(Ue,"SPAN",{class:!0}),Ze=children(z),te=claim_text(Ze,W),Ze.forEach(detach),De=claim_space(Ue),C=claim_element(Ue,"A",{href:!0,class:!0}),qe=children(C),ie=claim_text(qe,I),qe.forEach(detach),Ue.forEach(detach),he.forEach(detach),le.forEach(detach),ce.forEach(detach),Me=claim_space($e),t=claim_element($e,"FORM",{"data-netlify":!0,class:!0,id:!0,name:!0,method:!0}),ee=children(t),N=claim_element(ee,"H3",{class:!0}),tt=children(N),de=claim_text(tt,H),tt.forEach(detach),Ce=claim_space(ee),w=claim_element(ee,"LABEL",{class:!0}),Ve=children(w),fe=claim_text(Ve,Y),ye=claim_space(Ve),c=claim_element(Ve,"INPUT",{class:!0,type:!0,id:!0,name:!0,placeholder:!0}),Ve.forEach(detach),be=claim_space(ee),b=claim_element(ee,"LABEL",{class:!0}),Ie=children(b),pe=claim_text(Ie,q),_e=claim_space(Ie),l=claim_element(Ie,"INPUT",{class:!0,type:!0,id:!0,name:!0,placeholder:!0}),Ie.forEach(detach),Oe=claim_space(ee),h=claim_element(ee,"LABEL",{class:!0}),ge=children(h),X=claim_text(ge,B),ke=claim_space(ge),r=claim_element(ge,"INPUT",{class:!0,type:!0,id:!0,name:!0,placeholder:!0}),ge.forEach(detach),Se=claim_space(ee),_=claim_element(ee,"LABEL",{class:!0}),me=children(_),oe=claim_text(me,$),ze=claim_space(me),d=claim_element(me,"TEXTAREA",{class:!0,name:!0,id:!0,placeholder:!0}),children(d).forEach(detach),me.forEach(detach),Ne=claim_space(ee),E=claim_element(ee,"BUTTON",{class:!0,type:!0}),Ge=children(E),Q=claim_text(Ge,K),Ge.forEach(detach),ee.forEach(detach),$e.forEach(detach),at.forEach(detach),this.h()},h(){attr(D,"class","cs-topper"),attr(L,"class","cs-title"),attr(S,"class","cs-text"),attr(o,"aria-hidden","true"),src_url_equal(o.src,ue=e[3].icon)||attr(o,"src",ue),attr(o,"alt",me=e[3].iconALT),attr(o,"class","cs-icon"),attr(o,"width","40"),attr(o,"height","40"),attr(o,"decoding","async"),attr(T,"class","cs-icon-wrapper"),attr(k,"class","cs-header"),attr(u,"href",ge="tel:"+e[3].number),attr(u,"class","cs-link"),attr(y,"class","cs-flex-group"),attr(f,"class","cs-li"),attr(s,"aria-hidden","true"),src_url_equal(s.src,he=e[4].icon)||attr(s,"src",he),attr(s,"alt",le=e[4].iconALT),attr(s,"class","cs-icon"),attr(s,"width","40"),attr(s,"height","40"),attr(s,"decoding","async"),attr(F,"class","cs-icon-wrapper"),attr(A,"class","cs-header"),attr(v,"href",ee="mailto:"+e[4].address),attr(v,"class","cs-link"),attr(j,"class","cs-flex-group"),attr(O,"class","cs-li"),attr(n,"aria-hidden","true"),src_url_equal(n.src,Z=e[5].icon)||attr(n,"src",Z),attr(n,"alt",ce=e[5].iconALT),attr(n,"class","cs-icon"),attr(n,"width","40"),attr(n,"height","40"),attr(n,"decoding","async"),attr(M,"class","cs-icon-wrapper"),attr(z,"class","cs-header"),attr(C,"href","."),attr(C,"class","cs-link"),attr(g,"class","cs-flex-group"),attr(p,"class","cs-li"),attr(a,"class","cs-ul"),attr(i,"class","cs-content"),attr(N,"class","cs-h3"),attr(c,"class","cs-input"),c.required=!0,attr(c,"type","text"),attr(c,"id","name"),attr(c,"name","name"),attr(c,"placeholder","Your name"),attr(w,"class","cs-label"),attr(l,"class","cs-input"),l.required=!0,attr(l,"type","email"),attr(l,"id","email"),attr(l,"name","email"),attr(l,"placeholder","Your email"),attr(b,"class","cs-label cs-email"),attr(r,"class","cs-input"),r.required=!0,attr(r,"type","number"),attr(r,"id","phone"),attr(r,"name","phone"),attr(r,"placeholder","Your phone number"),attr(h,"class","cs-label cs-phone"),attr(d,"class","cs-input cs-textarea"),d.required=!0,attr(d,"name","message"),attr(d,"id","message"),attr(d,"placeholder","Write a message..."),attr(_,"class","cs-label"),attr(E,"class","cs-button-solid cs-submit"),attr(E,"type","submit"),attr(t,"data-netlify","true"),attr(t,"class","cs-form"),attr(t,"id","cs-form-1392"),attr(t,"name","Index Contact Form"),attr(t,"method","POST"),attr(m,"class","cs-container"),attr(x,"id","contact-1392")},m(e,R){insert_hydration(e,x,R),append_hydration(x,m),append_hydration(m,i),append_hydration(i,D),append_hydration(D,J),append_hydration(i,Le),append_hydration(i,L),append_hydration(L,ne),append_hydration(i,Fe),append_hydration(i,S),append_hydration(S,ae),append_hydration(i,Ae),append_hydration(i,a),append_hydration(a,f),append_hydration(f,T),append_hydration(T,o),append_hydration(f,we),append_hydration(f,y),append_hydration(y,k),append_hydration(k,G),append_hydration(y,je),append_hydration(y,u),append_hydration(u,ve),append_hydration(a,xe),append_hydration(a,O),append_hydration(O,F),append_hydration(F,s),append_hydration(O,Ee),append_hydration(O,j),append_hydration(j,A),append_hydration(A,re),append_hydration(j,Te),append_hydration(j,v),append_hydration(v,se),append_hydration(a,Re),append_hydration(a,p),append_hydration(p,M),append_hydration(M,n),append_hydration(p,Pe),append_hydration(p,g),append_hydration(g,z),append_hydration(z,te),append_hydration(g,De),append_hydration(g,C),append_hydration(C,ie),append_hydration(m,Me),append_hydration(m,t),append_hydration(t,N),append_hydration(N,de),append_hydration(t,Ce),append_hydration(t,w),append_hydration(w,fe),append_hydration(w,ye),append_hydration(w,c),append_hydration(t,be),append_hydration(t,b),append_hydration(b,pe),append_hydration(b,_e),append_hydration(b,l),append_hydration(t,Oe),append_hydration(t,h),append_hydration(h,X),append_hydration(h,ke),append_hydration(h,r),append_hydration(t,Se),append_hydration(t,_),append_hydration(_,oe),append_hydration(_,ze),append_hydration(_,d),append_hydration(t,Ne),append_hydration(t,E),append_hydration(E,Q)},p(e,[t]){t&1&&set_data(J,e[0]),t&2&&set_data(ne,e[1]),t&4&&set_data(ae,e[2]),t&8&&!src_url_equal(o.src,ue=e[3].icon)&&attr(o,"src",ue),t&8&&me!==(me=e[3].iconALT)&&attr(o,"alt",me),t&8&&U!==(U=e[3].title+"")&&set_data(G,U),t&8&&P!==(P=e[3].number+"")&&set_data(ve,P),t&8&&ge!==(ge="tel:"+e[3].number)&&attr(u,"href",ge),t&16&&!src_url_equal(s.src,he=e[4].icon)&&attr(s,"src",he),t&16&&le!==(le=e[4].iconALT)&&attr(s,"alt",le),t&16&&R!==(R=e[4].title+"")&&set_data(re,R),t&16&&V!==(V=e[4].address+"")&&set_data(se,V),t&16&&ee!==(ee="mailto:"+e[4].address)&&attr(v,"href",ee),t&32&&!src_url_equal(n.src,Z=e[5].icon)&&attr(n,"src",Z),t&32&&ce!==(ce=e[5].iconALT)&&attr(n,"alt",ce),t&32&&W!==(W=e[5].title+"")&&set_data(te,W),t&32&&I!==(I=e[5].location+"")&&set_data(ie,I),t&64&&H!==(H=e[6].title+"")&&set_data(de,H),t&64&&Y!==(Y=e[6].name+"")&&set_data(fe,Y),t&64&&q!==(q=e[6].email+"")&&set_data(pe,q),t&64&&B!==(B=e[6].phone+"")&&set_data(X,B),t&64&&$!==($=e[6].message+"")&&set_data(oe,$),t&64&&K!==(K=e[6].button+"")&&set_data(Q,K)},i:noop,o:noop,d(e){e&&detach(x)}}}function instance(e,t,n){let{subtitle:s,title:o,description:i,phone:a,email:r,address:c,form:l}=t;return e.$$set=e=>{"subtitle"in e&&n(0,s=e.subtitle),"title"in e&&n(1,o=e.title),"description"in e&&n(2,i=e.description),"phone"in e&&n(3,a=e.phone),"email"in e&&n(4,r=e.email),"address"in e&&n(5,c=e.address),"form"in e&&n(6,l=e.form)},[s,o,i,a,r,c,l]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{subtitle:0,title:1,description:2,phone:3,email:4,address:5,form:6})}}export default Component