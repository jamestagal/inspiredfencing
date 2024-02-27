import{SvelteComponent,add_flush_callback,append_hydration,assign,attr,bind,binding_callbacks,check_outros,children,claim_component,claim_element,claim_space,construct_svelte_component,create_component,destroy_component,detach,element,empty,get_spread_object,get_spread_update,group_outros,init,insert_hydration,mount_component,noop,safe_not_equal,space,subscribe,transition_in,transition_out}from"../../web_modules/svelte/internal/index.mjs";import{onMount}from"../../web_modules/svelte/index.mjs";import Login from"./login.js";import Head from"./head.js";import Header from"./header.js";import Footer from"./footer.js";function create_if_block(e){let t,i,s,o;function a(t){e[8](t)}var n=e[7].menu;function r(e){let t={user:e[4]};return e[0]!==void 0&&(t.content=e[0]),{props:t}}return n&&(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a))),{c(){t&&create_component(t.$$.fragment),s=empty()},l(e){t&&claim_component(t.$$.fragment,e),s=empty()},m(e,n){t&&mount_component(t,e,n),insert_hydration(e,s,n),o=!0},p(e,o){const c={};if(o&16&&(c.user=e[4]),!i&&o&1&&(i=!0,c.content=e[0],add_flush_callback(()=>i=!1)),o&128&&n!==(n=e[7].menu)){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}n?(t=construct_svelte_component(n,r(e)),binding_callbacks.push(()=>bind(t,"content",a)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,s.parentNode,s)):t=null}else n&&t.$set(c)},i(e){if(o)return;t&&transition_in(t.$$.fragment,e),o=!0},o(e){t&&transition_out(t.$$.fragment,e),o=!1},d(e){e&&detach(s),t&&destroy_component(t,e)}}}function create_fragment(e){let a,r,f,s,h,o,b,g,l,p,i,t,u,d,m;r=new Head({props:{title:e[0].filename,env:e[5]}});let n=e[4]&&e[7].isAuthenticated&&create_if_block(e);function _(t){e[9](t)}let j={user:e[4]};e[6]!==void 0&&(j.hash=e[6]),o=new Login({props:j}),binding_callbacks.push(()=>bind(o,"hash",_)),l=new Header({});const v=[e[0].fields,{allContent:e[2]},{allLayouts:e[3]},{content:e[0]}];var c=e[1];function y(){let t={};for(let e=0;e<v.length;e+=1)t=assign(t,v[e]);return{props:t}}return c&&(t=construct_svelte_component(c,y(e))),d=new Footer({}),{c(){a=element("html"),create_component(r.$$.fragment),f=space(),s=element("body"),n&&n.c(),h=space(),create_component(o.$$.fragment),g=space(),create_component(l.$$.fragment),p=space(),i=element("main"),t&&create_component(t.$$.fragment),u=space(),create_component(d.$$.fragment),this.h()},l(e){a=claim_element(e,"HTML",{lang:!0});var c,m,v=children(a);claim_component(r.$$.fragment,v),f=claim_space(v),s=claim_element(v,"BODY",{}),c=children(s),n&&n.l(c),h=claim_space(c),claim_component(o.$$.fragment,c),g=claim_space(c),claim_component(l.$$.fragment,c),p=claim_space(c),i=claim_element(c,"MAIN",{id:!0}),m=children(i),t&&claim_component(t.$$.fragment,m),u=claim_space(m),claim_component(d.$$.fragment,m),m.forEach(detach),c.forEach(detach),v.forEach(detach),this.h()},h(){attr(i,"id","main"),attr(a,"lang","en")},m(e,c){insert_hydration(e,a,c),mount_component(r,a,null),append_hydration(a,f),append_hydration(a,s),n&&n.m(s,null),append_hydration(s,h),mount_component(o,s,null),append_hydration(s,g),mount_component(l,s,null),append_hydration(s,p),append_hydration(s,i),t&&mount_component(t,i,null),append_hydration(i,u),mount_component(d,i,null),m=!0},p(e,[a]){const l={};a&1&&(l.title=e[0].filename),a&32&&(l.env=e[5]),r.$set(l),e[4]&&e[7].isAuthenticated?n?(n.p(e,a),a&144&&transition_in(n,1)):(n=create_if_block(e),n.c(),transition_in(n,1),n.m(s,h)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros());const d={};a&16&&(d.user=e[4]),!b&&a&64&&(b=!0,d.hash=e[6],add_flush_callback(()=>b=!1)),o.$set(d);const m=a&13?get_spread_update(v,[a&1&&get_spread_object(e[0].fields),a&4&&{allContent:e[2]},a&8&&{allLayouts:e[3]},a&1&&{content:e[0]}]):{};if(a&2&&c!==(c=e[1])){if(t){group_outros();const e=t;transition_out(e.$$.fragment,1,0,()=>{destroy_component(e,1)}),check_outros()}c?(t=construct_svelte_component(c,y(e)),create_component(t.$$.fragment),transition_in(t.$$.fragment,1),mount_component(t,i,u)):t=null}else c&&t.$set(m)},i(e){if(m)return;transition_in(r.$$.fragment,e),transition_in(n),transition_in(o.$$.fragment,e),transition_in(l.$$.fragment,e),t&&transition_in(t.$$.fragment,e),transition_in(d.$$.fragment,e),m=!0},o(e){transition_out(r.$$.fragment,e),transition_out(n),transition_out(o.$$.fragment,e),transition_out(l.$$.fragment,e),t&&transition_out(t.$$.fragment,e),transition_out(d.$$.fragment,e),m=!1},d(e){e&&detach(a),destroy_component(r),n&&n.d(),destroy_component(o),destroy_component(l),t&&destroy_component(t),destroy_component(d)}}}function instance(e,t,n){let r,a=noop,c=()=>(a(),a=subscribe(o,e=>n(7,r=e)),o);e.$$.on_destroy.push(()=>a());let{content:s,layout:l,allContent:d,allLayouts:u,user:o,env:h}=t;c();let i;onMount(async()=>{n(6,i=window.location.hash)});function m(e){s=e,n(0,s)}function f(e){i=e,n(6,i)}return e.$$set=e=>{"content"in e&&n(0,s=e.content),"layout"in e&&n(1,l=e.layout),"allContent"in e&&n(2,d=e.allContent),"allLayouts"in e&&n(3,u=e.allLayouts),"user"in e&&c(n(4,o=e.user)),"env"in e&&n(5,h=e.env)},[s,l,d,u,o,h,i,r,m,f]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{content:0,layout:1,allContent:2,allLayouts:3,user:4,env:5})}}export default Component