import{SvelteComponent,attr,claim_element,detach,element,init,insert_hydration,listen,noop,safe_not_equal,set_input_value,to_number}from"../../../web_modules/svelte/internal/index.mjs";function create_fragment(e){let t,n,s;return{c(){t=element("input"),this.h()},l(e){t=claim_element(e,"INPUT",{id:!0,type:!0}),this.h()},h(){attr(t,"id",e[1]),attr(t,"type","number")},m(o,i){insert_hydration(o,t,i),set_input_value(t,e[0]),n||(s=listen(t,"input",e[2]),n=!0)},p(e,[n]){n&2&&attr(t,"id",e[1]),n&1&&to_number(t.value)!==e[0]&&set_input_value(t,e[0])},i:noop,o:noop,d(e){e&&detach(t),n=!1,s()}}}function instance(e,t,n){let{field:s,label:o}=t;function i(){s=to_number(this.value),n(0,s)}return e.$$set=e=>{"field"in e&&n(0,s=e.field),"label"in e&&n(1,o=e.label)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{field:0,label:1})}}export default Component