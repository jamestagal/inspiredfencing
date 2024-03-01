import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let x,m,i,D,ne,Pe,L,ae,ze,M,le,Me,a,f,z,o,me,pe,xe,y,k,K=e[3].title+"",X,_e,u,H=e[3].number+"",re,be,Ee,O,F,s,fe,ue,Ae,j,R,P=e[4].title+"",ce,De,v,V=e[4].address+"",oe,se,Ie,p,T,n,J,Z,ye,g,S,U=e[5].title+"",te,He,C,$=e[5].location+"",ie,Le,t,A,Te,N,I=e[6].title+"",he,ke,w,G=e[6].name+"",ge,we,c,je,b,Y=e[6].email+"",ve,Oe,l,Ce,h,B=e[6].phone+"",de,Se,r,Fe,_,W=e[6].message+"",Q,Ne,d,Re,E,q=e[6].button+"",ee;return{c(){x=element("section"),m=element("div"),i=element("div"),D=element("span"),ne=text(e[0]),Pe=space(),L=element("h2"),ae=text(e[1]),ze=space(),M=element("p"),le=text(e[2]),Me=space(),a=element("ul"),f=element("li"),z=element("picture"),o=element("img"),xe=space(),y=element("div"),k=element("span"),X=text(K),_e=space(),u=element("a"),re=text(H),Ee=space(),O=element("li"),F=element("picture"),s=element("img"),Ae=space(),j=element("div"),R=element("span"),ce=text(P),De=space(),v=element("a"),oe=text(V),Ie=space(),p=element("li"),T=element("picture"),n=element("img"),ye=space(),g=element("div"),S=element("span"),te=text(U),He=space(),C=element("a"),ie=text($),Le=space(),t=element("form"),A=element("input"),Te=space(),N=element("h3"),he=text(I),ke=space(),w=element("label"),ge=text(G),we=space(),c=element("input"),je=space(),b=element("label"),ve=text(Y),Oe=space(),l=element("input"),Ce=space(),h=element("label"),de=text(B),Se=space(),r=element("input"),Fe=space(),_=element("label"),Q=text(W),Ne=space(),d=element("textarea"),Re=space(),E=element("button"),ee=text(q),this.h()},l(Z){x=claim_element(Z,"SECTION",{id:!0});var J,ct=children(x),Ue,se,at,ot,rt,ue,Be,it,$e,Ye,nt,Ke,Je,me,tt,Xe,fe,Ze,qe,et,Ge,st,We,Ve,be,pe,Qe;m=claim_element(ct,"DIV",{class:!0}),Ue=children(m),i=claim_element(Ue,"DIV",{class:!0}),se=children(i),D=claim_element(se,"SPAN",{class:!0}),at=children(D),ne=claim_text(at,e[0]),at.forEach(detach),Pe=claim_space(se),L=claim_element(se,"H2",{class:!0}),ot=children(L),ae=claim_text(ot,e[1]),ot.forEach(detach),ze=claim_space(se),M=claim_element(se,"P",{class:!0}),rt=children(M),le=claim_text(rt,e[2]),rt.forEach(detach),Me=claim_space(se),a=claim_element(se,"UL",{class:!0}),ue=children(a),f=claim_element(ue,"LI",{class:!0}),Be=children(f),z=claim_element(Be,"PICTURE",{class:!0}),it=children(z),o=claim_element(it,"IMG",{"aria-hidden":!0,src:!0,alt:!0,class:!0,width:!0,height:!0,decoding:!0}),it.forEach(detach),xe=claim_space(Be),y=claim_element(Be,"DIV",{class:!0}),$e=children(y),k=claim_element($e,"SPAN",{class:!0}),Ye=children(k),X=claim_text(Ye,K),Ye.forEach(detach),_e=claim_space($e),u=claim_element($e,"A",{href:!0,class:!0}),nt=children(u),re=claim_text(nt,H),nt.forEach(detach),$e.forEach(detach),Be.forEach(detach),Ee=claim_space(ue),O=claim_element(ue,"LI",{class:!0}),Ke=children(O),F=claim_element(Ke,"PICTURE",{class:!0}),Je=children(F),s=claim_element(Je,"IMG",{"aria-hidden":!0,src:!0,alt:!0,class:!0,width:!0,height:!0,decoding:!0}),Je.forEach(detach),Ae=claim_space(Ke),j=claim_element(Ke,"DIV",{class:!0}),me=children(j),R=claim_element(me,"SPAN",{class:!0}),tt=children(R),ce=claim_text(tt,P),tt.forEach(detach),De=claim_space(me),v=claim_element(me,"A",{href:!0,class:!0}),Xe=children(v),oe=claim_text(Xe,V),Xe.forEach(detach),me.forEach(detach),Ke.forEach(detach),Ie=claim_space(ue),p=claim_element(ue,"LI",{class:!0}),fe=children(p),T=claim_element(fe,"PICTURE",{class:!0}),Ze=children(T),n=claim_element(Ze,"IMG",{"aria-hidden":!0,src:!0,alt:!0,class:!0,width:!0,height:!0,decoding:!0}),Ze.forEach(detach),ye=claim_space(fe),g=claim_element(fe,"DIV",{class:!0}),qe=children(g),S=claim_element(qe,"SPAN",{class:!0}),et=children(S),te=claim_text(et,U),et.forEach(detach),He=claim_space(qe),C=claim_element(qe,"A",{href:!0,class:!0}),Ge=children(C),ie=claim_text(Ge,$),Ge.forEach(detach),qe.forEach(detach),fe.forEach(detach),ue.forEach(detach),se.forEach(detach),Le=claim_space(Ue),t=claim_element(Ue,"FORM",{class:!0,method:!0,id:!0,name:!0,"data-netlify":!0}),J=children(t),A=claim_element(J,"INPUT",{type:!0,name:!0}),Te=claim_space(J),N=claim_element(J,"H3",{class:!0}),st=children(N),he=claim_text(st,I),st.forEach(detach),ke=claim_space(J),w=claim_element(J,"LABEL",{class:!0}),We=children(w),ge=claim_text(We,G),we=claim_space(We),c=claim_element(We,"INPUT",{class:!0,type:!0,id:!0,name:!0,placeholder:!0}),We.forEach(detach),je=claim_space(J),b=claim_element(J,"LABEL",{class:!0}),Ve=children(b),ve=claim_text(Ve,Y),Oe=claim_space(Ve),l=claim_element(Ve,"INPUT",{class:!0,type:!0,id:!0,name:!0,placeholder:!0}),Ve.forEach(detach),Ce=claim_space(J),h=claim_element(J,"LABEL",{class:!0}),be=children(h),de=claim_text(be,B),Se=claim_space(be),r=claim_element(be,"INPUT",{class:!0,type:!0,id:!0,name:!0,placeholder:!0}),be.forEach(detach),Fe=claim_space(J),_=claim_element(J,"LABEL",{class:!0}),pe=children(_),Q=claim_text(pe,W),Ne=claim_space(pe),d=claim_element(pe,"TEXTAREA",{class:!0,name:!0,id:!0,placeholder:!0}),children(d).forEach(detach),pe.forEach(detach),Re=claim_space(J),E=claim_element(J,"BUTTON",{class:!0,type:!0}),Qe=children(E),ee=claim_text(Qe,q),Qe.forEach(detach),J.forEach(detach),Ue.forEach(detach),ct.forEach(detach),this.h()},h(){attr(D,"class","cs-topper"),attr(L,"class","cs-title"),attr(M,"class","cs-text"),attr(o,"aria-hidden","true"),src_url_equal(o.src,me=e[3].icon)||attr(o,"src",me),attr(o,"alt",pe=e[3].iconALT),attr(o,"class","cs-icon"),attr(o,"width","40"),attr(o,"height","40"),attr(o,"decoding","async"),attr(z,"class","cs-icon-wrapper"),attr(k,"class","cs-header"),attr(u,"href",be="tel:"+e[3].number),attr(u,"class","cs-link"),attr(y,"class","cs-flex-group"),attr(f,"class","cs-li"),attr(s,"aria-hidden","true"),src_url_equal(s.src,fe=e[4].icon)||attr(s,"src",fe),attr(s,"alt",ue=e[4].iconALT),attr(s,"class","cs-icon"),attr(s,"width","40"),attr(s,"height","40"),attr(s,"decoding","async"),attr(F,"class","cs-icon-wrapper"),attr(R,"class","cs-header"),attr(v,"href",se="mailto:"+e[4].address),attr(v,"class","cs-link"),attr(j,"class","cs-flex-group"),attr(O,"class","cs-li"),attr(n,"aria-hidden","true"),src_url_equal(n.src,J=e[5].icon)||attr(n,"src",J),attr(n,"alt",Z=e[5].iconALT),attr(n,"class","cs-icon"),attr(n,"width","40"),attr(n,"height","40"),attr(n,"decoding","async"),attr(T,"class","cs-icon-wrapper"),attr(S,"class","cs-header"),attr(C,"href","."),attr(C,"class","cs-link"),attr(g,"class","cs-flex-group"),attr(p,"class","cs-li"),attr(a,"class","cs-ul"),attr(i,"class","cs-content"),attr(A,"type","hidden"),attr(A,"name","form-name"),A.value="IndexForm",attr(N,"class","cs-h3"),attr(c,"class","cs-input"),c.required=!0,attr(c,"type","text"),attr(c,"id","name"),attr(c,"name","name"),attr(c,"placeholder","Your name"),attr(w,"class","cs-label"),attr(l,"class","cs-input"),l.required=!0,attr(l,"type","email"),attr(l,"id","email"),attr(l,"name","email"),attr(l,"placeholder","Your email"),attr(b,"class","cs-label cs-email"),attr(r,"class","cs-input"),r.required=!0,attr(r,"type","number"),attr(r,"id","phone"),attr(r,"name","phone"),attr(r,"placeholder","Your phone number"),attr(h,"class","cs-label cs-phone"),attr(d,"class","cs-input cs-textarea"),d.required=!0,attr(d,"name","message"),attr(d,"id","message"),attr(d,"placeholder","Write a message..."),attr(_,"class","cs-label"),attr(E,"class","cs-button-solid cs-submit"),attr(E,"type","submit"),attr(t,"class","cs-form"),attr(t,"method","POST"),attr(t,"id","cs-form-1392"),attr(t,"name","IndexForm"),attr(t,"data-netlify","true"),attr(m,"class","cs-container"),attr(x,"id","contact-1392")},m(e,P){insert_hydration(e,x,P),append_hydration(x,m),append_hydration(m,i),append_hydration(i,D),append_hydration(D,ne),append_hydration(i,Pe),append_hydration(i,L),append_hydration(L,ae),append_hydration(i,ze),append_hydration(i,M),append_hydration(M,le),append_hydration(i,Me),append_hydration(i,a),append_hydration(a,f),append_hydration(f,z),append_hydration(z,o),append_hydration(f,xe),append_hydration(f,y),append_hydration(y,k),append_hydration(k,X),append_hydration(y,_e),append_hydration(y,u),append_hydration(u,re),append_hydration(a,Ee),append_hydration(a,O),append_hydration(O,F),append_hydration(F,s),append_hydration(O,Ae),append_hydration(O,j),append_hydration(j,R),append_hydration(R,ce),append_hydration(j,De),append_hydration(j,v),append_hydration(v,oe),append_hydration(a,Ie),append_hydration(a,p),append_hydration(p,T),append_hydration(T,n),append_hydration(p,ye),append_hydration(p,g),append_hydration(g,S),append_hydration(S,te),append_hydration(g,He),append_hydration(g,C),append_hydration(C,ie),append_hydration(m,Le),append_hydration(m,t),append_hydration(t,A),append_hydration(t,Te),append_hydration(t,N),append_hydration(N,he),append_hydration(t,ke),append_hydration(t,w),append_hydration(w,ge),append_hydration(w,we),append_hydration(w,c),append_hydration(t,je),append_hydration(t,b),append_hydration(b,ve),append_hydration(b,Oe),append_hydration(b,l),append_hydration(t,Ce),append_hydration(t,h),append_hydration(h,de),append_hydration(h,Se),append_hydration(h,r),append_hydration(t,Fe),append_hydration(t,_),append_hydration(_,Q),append_hydration(_,Ne),append_hydration(_,d),append_hydration(t,Re),append_hydration(t,E),append_hydration(E,ee)},p(e,[t]){t&1&&set_data(ne,e[0]),t&2&&set_data(ae,e[1]),t&4&&set_data(le,e[2]),t&8&&!src_url_equal(o.src,me=e[3].icon)&&attr(o,"src",me),t&8&&pe!==(pe=e[3].iconALT)&&attr(o,"alt",pe),t&8&&K!==(K=e[3].title+"")&&set_data(X,K),t&8&&H!==(H=e[3].number+"")&&set_data(re,H),t&8&&be!==(be="tel:"+e[3].number)&&attr(u,"href",be),t&16&&!src_url_equal(s.src,fe=e[4].icon)&&attr(s,"src",fe),t&16&&ue!==(ue=e[4].iconALT)&&attr(s,"alt",ue),t&16&&P!==(P=e[4].title+"")&&set_data(ce,P),t&16&&V!==(V=e[4].address+"")&&set_data(oe,V),t&16&&se!==(se="mailto:"+e[4].address)&&attr(v,"href",se),t&32&&!src_url_equal(n.src,J=e[5].icon)&&attr(n,"src",J),t&32&&Z!==(Z=e[5].iconALT)&&attr(n,"alt",Z),t&32&&U!==(U=e[5].title+"")&&set_data(te,U),t&32&&$!==($=e[5].location+"")&&set_data(ie,$),t&64&&I!==(I=e[6].title+"")&&set_data(he,I),t&64&&G!==(G=e[6].name+"")&&set_data(ge,G),t&64&&Y!==(Y=e[6].email+"")&&set_data(ve,Y),t&64&&B!==(B=e[6].phone+"")&&set_data(de,B),t&64&&W!==(W=e[6].message+"")&&set_data(Q,W),t&64&&q!==(q=e[6].button+"")&&set_data(ee,q)},i:noop,o:noop,d(e){e&&detach(x)}}}function instance(e,t,n){let{subtitle:s,title:o,description:i,phone:a,email:r,address:c,form:l}=t;return e.$$set=e=>{"subtitle"in e&&n(0,s=e.subtitle),"title"in e&&n(1,o=e.title),"description"in e&&n(2,i=e.description),"phone"in e&&n(3,a=e.phone),"email"in e&&n(4,r=e.email),"address"in e&&n(5,c=e.address),"form"in e&&n(6,l=e.form)},[s,o,i,a,r,c,l]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{subtitle:0,title:1,description:2,phone:3,email:4,address:5,form:6})}}export default Component