import{S as e,r as t,a,c as o,o as r,b as n,u as s,d as i,w as l,e as d,f as c,g as u,h as p,i as m,C as h,j as g,k as f,l as b,t as v,F as y,m as x,n as D,p as k,q as w}from"./vendor.af862616.js";const q={components:{Switch:e,SunIcon:t,MoonIcon:a},setup(){const e=s(),t=o((()=>e.getters.theme));return{enabledDarkMode:o({get:()=>"dark"===t.value,set:()=>{e.dispatch("toggleTheme")}})}}},I=d("span",{class:"sr-only"},"Dark Mode",-1),S={key:0,class:"m-auto"},M={key:1,class:"m-auto"};q.render=function(e,t,a,o,s,u){const p=i("MoonIcon"),m=i("SunIcon"),h=i("Switch");return r(),n(h,{modelValue:o.enabledDarkMode,"onUpdate:modelValue":t[1]||(t[1]=e=>o.enabledDarkMode=e),class:[o.enabledDarkMode?"bg-black bg-opacity-90":"bg-gray-200","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent border-opacity-0 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"]},{default:l((()=>[I,d("div",{class:["flex",[o.enabledDarkMode?"translate-x-5":"translate-x-0","pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"]]},[o.enabledDarkMode?(r(),n("span",S,[d(p,{class:"h-4 w-4 text-primary"})])):c("",!0),o.enabledDarkMode?c("",!0):(r(),n("span",M,[d(m,{class:"h-4 w-4 text-primary"})]))],2)])),_:1},8,["modelValue","class"])};const j={components:{ThemeToggler:q,CodeIcon:u,HandIcon:p},setup(){const e=s();return{theme:o((()=>e.getters.theme))}}},C={class:"flex justify-between p-4 shadow-lg bg-gray-50 dark:bg-gray-800"},O={href:"https://github.com/gilnd/vue3-smooth-dnd",class:"flex hover:text-primary text-2xl font-bold"},T=d("span",{class:""},"vue3-smooth-dnd",-1),$={class:"flex space-x-6 text-lg"},A={href:"https://kutlugsahin.github.io/vue-smooth-dnd",class:"flex space-x-2 items-center hover:text-primary"},N=d("span",null,"Other Demos",-1),H={href:"https://github.com/gilnd/vue3-smooth-dnd/blob/main/packages/example/src/pages/Kanban.vue",class:"flex space-x-2 items-center hover:text-primary"},B=d("span",null,"View source",-1);j.render=function(e,t,a,o,s,l){const c=i("HandIcon"),u=i("CodeIcon"),p=i("theme-toggler");return r(),n("div",C,[d("a",O,[d(c,{class:"h-8 w-8"}),T]),d("div",$,[d("a",A,[d(u,{class:"h-6 w-6"}),N]),d("a",H,[d(u,{class:"h-6 w-6"}),B]),d(p)])])};const E={name:"App",components:{NavBar:j},beforeMount(){this.$store.dispatch("initTheme")}},F={class:"space-y-4"};E.render=function(e,t,a,o,s,l){const c=i("NavBar"),u=i("router-view");return r(),n("div",F,[d(c),d(u)])};const P=m({modules:{theme:{state:{theme:localStorage.getItem("theme")},getters:{theme:e=>e.theme},mutations:{setTheme(e,t){e.theme=t,localStorage.setItem("theme",t),document.querySelector("html").classList.remove("dark"),"dark"===t&&document.querySelector("html").classList.add("dark")}},actions:{initTheme({commit:e}){const t=!!localStorage.getItem("theme")&&localStorage.getItem("theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches;e("setTheme",t||(a?"dark":"light"))},toggleTheme({commit:e}){switch(localStorage.getItem("theme")){case"light":e("setTheme","dark");break;default:e("setTheme","light")}}}}}});function _(e){return!e||("string"==typeof e||"object"==typeof e&&("string"==typeof e.value||"function"==typeof e.value||"object"==typeof e.value))}function z(e,t){const a=e.$props.tag;if(a){if("string"==typeof a){const e={value:a};return t&&(e.props={class:t}),e}if("object"==typeof a){const e={value:a.value||"div",props:a.props||{}};return t&&(e.props.class?(o=e.props.class,Array.isArray(o)?e.props.class.push(t):e.props.class=[t,e.props.class]):e.props.class=t),e}}var o;return{value:"div"}}h.exports.smoothDnD.dropHandler=h.exports.dropHandlers.reactDropHandler().handler,h.exports.smoothDnD.wrapChild=!1;const K={"drag-start":"onDragStart","drag-end":"onDragEnd",drop:"onDrop","drag-enter":"onDragEnter","drag-leave":"onDragLeave","drop-ready":"onDropReady"};var V=g({name:"Container",mounted(){const e=Object.assign({},this.$props);for(const t in K)e[K[t]]=e=>{this.$emit(t,e)};this.containerElement=this.$refs.container||this.$el,this.container=h.exports.smoothDnD(this.containerElement,e)},unmounted(){this.container&&this.container.dispose()},emits:["drop","drag-start","drag-end","drag-enter","drag-leave","drop-ready"],props:{removeOnDropOut:{type:Boolean,default:!1},autoScrollEnabled:{type:Boolean,default:!0},behaviour:String,groupName:String,orientation:String,dragHandleSelector:String,nonDragAreaSelector:String,lockAxis:String,dragClass:String,dropClass:String,dragBeginDelay:Number,animationDuration:Number,getChildPayload:Function,shouldAnimateDrop:Function,shouldAcceptDrop:Function,getGhostParent:Function,dropPlaceholder:[Object,Boolean],tag:{validator:_,default:"div"}},render(){const e=z(this);return f(e.value,Object.assign({},{ref:"container"},e.props),this.$slots.default())}}),L=g({name:"Draggable",props:{tag:{validator:_,default:"div"}},render:function(){const e=z(this,h.exports.constants.wrapperClass);return f(e.value,Object.assign({},e.props),this.$slots.default())}});const R=(e,t)=>{const{removedIndex:a,addedIndex:o,payload:r}=t;if(null===a&&null===o)return e;const n=[...e];let s=r;return null!==a&&(s=n.splice(a,1)[0]),null!==o&&n.splice(o,0,s),n},U=(e,t)=>{const a=[];for(let o=0;o<e;o++)a.push(t(o));return a},G=e=>{let t="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?".split(" "),a=Math.floor(Math.random()*t.length),o=new Array;for(;o.length<e;)a<t.length||(a=0),o.push(t[a]),a++;return o.join(" ")},Q=["😄","😃","😀","😊","😉","😍","😘","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱","😠","😡","😤","😖","😆","😋","😷","😎","😴","😵","😲","😟","😦","😧","😈","👿","😮","😬","😐","😕","😯","😶","😇","😏","😑","👲","👳","👮","👷","💂","👶","👦","👧","👨","👩","👴","👵","👱","👼","👸","😺","😸","😻","😽","😼","🙀","😿","😹","😾","👹","👺","🙈","🙉","🙊","💀","👽","💩","🔥","✨","🌟","💫","💥","💢","💦","💧","💤","💨","👂","👀","👃","👅","👄","👍","👎","👌","👊","✊","✌","👋","✋","👐","👆","👇","👉","👈","🙌","🙏","☝","👏","💪","🚶","🏃","💃","👫","👪","👬","👭","💏","💑","👯","🙆","🙅","💁","🙋","💆","💇","💅","👰","🙎","🙍","🙇","🎩","👑","👒","👟","👞","👡","👠","👢","👕","👔","👚","👗","🎽","👖","👘","👙","💼","👜","👝","👛","👓","🎀","🌂","💄","💛","💙","💜","💚","❤","💔","💗","💓","💕","💖","💞","💘","💌","💋","💍","💎","👤","👥","💬","👣","💭","🐶","🐺","🐱","🐭","🐹","🐰","🐸","🐯","🐨","🐻","🐷","🐽","🐮","🐗","🐵","🐒","🐴","🐑","🐘","🐼","🐧","🐦","🐤","🐥","🐣","🐔","🐍","🐢","🐛","🐝","🐜","🐞","🐌","🐙","🐚","🐠","🐟","🐬","🐳","🐋","🐄","🐏","🐀","🐃","🐅","🐇","🐉","🐎","🐐","🐓","🐕","🐖","🐁","🐂","🐲","🐡","🐊","🐫","🐪","🐆","🐈","🐩","🐾","💐","🌸","🌷","🍀","🌹","🌻","🌺","🍁","🍃","🍂","🌿","🌾","🍄","🌵","🌴","🌲","🌳","🌰","🌱","🌼","🌐","🌞","🌝","🌚","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌜","🌛","🌙","🌍","🌎","🌏","🌋","🌌","🌠","⭐","☀","⛅","☁","⚡","☔","❄","⛄","🌀","🌁","🌈","🌊","🎍","💝","🎎","🎒","🎓","🎏","🎆","🎇","🎐","🎑","🎃","👻","🎅","🎄","🎁","🎋","🎉","🎊","🎈","🎌","🔮","🎥","📷","📹","📼","💿","📀","💽","💾","💻","📱","☎","📞","📟","📠","📡","📺","📻","🔊","🔉","🔈","🔇","🔔","🔕","📢","📣","⏳","⌛","⏰","⌚","🔓","🔒","🔏","🔐","🔑","🔎","💡","🔦","🔆","🔅","🔌","🔋","🔍","🛁","🛀","🚿","🚽","🔧","🔩","🔨","🚪","🚬","💣","🔫","🔪","💊","💉","💰","💴","💵","💷","💶","💳","💸","📲","📧","📥","📤","✉","📩","📨","📯","📫","📪","📬","📭","📮","📦","📝","📄","📃","📑","📊","📈","📉","📜","📋","📅","📆","📇","📁","📂","✂","📌","📎","✒","✏","📏","📐","📕","📗","📘","📙","📓","📔","📒","📚","📖","🔖","📛","🔬","🔭","📰","🎨","🎬","🎤","🎧","🎼","🎵","🎶","🎹","🎻","🎺","🎷","🎸","👾","🎮","🃏","🎴","🀄","🎲","🎯","🏈","🏀","⚽","⚾","🎾","🎱","🏉","🎳","⛳","🚵","🚴","🏁","🏇","🏆","🎿","🏂","🏊","🏄","🎣","☕","🍵","🍶","🍼","🍺","🍻","🍸","🍹","🍷","🍴","🍕","🍔","🍟","🍗","🍖","🍝","🍛","🍤","🍱","🍣","🍥","🍙","🍘","🍚","🍜","🍲","🍢","🍡","🍳","🍞","🍩","🍮","🍦","🍨","🍧","🎂","🍰","🍪","🍫","🍬","🍭","🍯","🍎","🍏","🍊","🍋","🍒","🍇","🍉","🍓","🍑","🍈","🍌","🍐","🍍","🍠","🍆","🍅","🌽","🏠","🏡","🏫","🏢","🏣","🏥","🏦","🏪","🏩","🏨","💒","⛪","🏬","🏤","🌇","🌆","🏯","🏰","⛺","🏭","🗼","🗾","🗻","🌄","🌅","🌃","🗽","🌉","🎠","🎡","⛲","🎢","🚢","⛵","🚤","🚣","⚓","🚀","✈","💺","🚁","🚂","🚊","🚉","🚞","🚆","🚄","🚅","🚈","🚇","🚝","🚋","🚃","🚎","🚌","🚍","🚙","🚘","🚗","🚕","🚖","🚛","🚚","🚨","🚓","🚔","🚒","🚑","🚐","🚲","🚡","🚟","🚠","🚜","💈","🚏","🎫","🚦","🚥","⚠","🚧","🔰","⛽","🏮","🎰","♨","🗿","🎪","🎭","📍","🚩","⬆","⬇","⬅","➡","🔠","🔡","🔤","↗","↖","↘","↙","↔","↕","🔄","◀","▶","🔼","🔽","↩","↪","ℹ","⏪","⏩","⏫","⏬","⤵","⤴","🆗","🔀","🔁","🔂","🆕","🆙","🆒","🆓","🆖","📶","🎦","🈁","🈯","🈳","🈵","🈴","🈲","🉐","🈹","🈺","🈶","🈚","🚻","🚹","🚺","🚼","🚾","🚰","🚮","🅿","♿","🚭","🈷","🈸","🈂","Ⓜ","🛂","🛄","🛅","🛃","🉑","㊙","㊗","🆑","🆘","🆔","🚫","🔞","📵","🚯","🚱","🚳","🚷","🚸","⛔","✳","❇","❎","✅","✴","💟","🆚","📳","📴","🅰","🅱","🆎","🅾","💠","➿","♻","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","⛎","🔯","🏧","💹","💲","💱","©","®","™","〽","〰","🔝","🔚","🔙","🔛","🔜","❌","⭕","❗","❓","❕","❔","🔃","🕛","🕧","🕐","🕜","🕑","🕝","🕒","🕞","🕓","🕟","🕔","🕠","🕕","🕖","🕗","🕘","🕙","🕚","🕡","🕢","🕣","🕤","🕥","🕦","✖","➕","➖","➗","♠","♥","♣","♦","💮","💯","✔","☑","🔘","🔗","➰","🔱","🔲","🔳","◼","◻","◾","◽","▪","▫","🔺","⬜","⬛","⚫","⚪","🔴","🔵","🔻","🔶","🔷","🔸","🔹"],J={name:"KanbanItem",components:{Draggable:L,RefreshIcon:b},data:()=>({emoji:Q[Math.floor(Math.random()*Q.length)]}),props:{item:Object}},W={class:"cursor-move my-2 rounded-lg shadow-md bg-gray-200 dark:bg-gray-800 hover:border-2 border-primary"},X={key:0,class:"flex space-x-2 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-t-lg"},Y=d("span",null,"Processing...",-1),Z={class:"p-4 space-y-2"},ee={class:"rounded-lg bg-primary p-2 w-max h-max inline-block box-content  "};J.render=function(e,t,a,o,s,u){const p=i("RefreshIcon"),m=i("Draggable");return a.item?(r(),n(m,{key:0},{default:l((()=>[d("div",W,[a.item.loading?(r(),n("div",X,[d(p,{class:"w-6 h-6 animate-spin",viewBox:"0 0 24 24"}),Y])):c("",!0),d("div",Z,[d("div",ee,v(s.emoji),1),d("p",null,v(a.item.data),1)])])])),_:1})):c("",!0)};const te={type:"container",props:{orientation:"horizontal"},children:U(8,(e=>({id:`column${e}`,type:"container",name:G(2*Math.random()+1),props:{orientation:"vertical"},children:U(+(10*Math.random()).toFixed()+5,(t=>({type:"draggable",id:`${e}${t}`,loading:!1,data:G(12*Math.random()+2)})))})))},ae={components:{Container:V,Draggable:L,KanbanItem:J,HandIcon:p,CodeIcon:u},data:()=>({scene:te}),methods:{onColumnDrop(e){const t=Object.assign({},this.scene);t.children=R(t.children,e),this.scene=t},onCardDrop(e,t){if(null!==t.removedIndex||null!==t.addedIndex){const a=Object.assign({},this.scene),o=a.children.filter((t=>t.id===e))[0],r=a.children.indexOf(o),n=Object.assign({},o);null==t.removedIndex&&t.addedIndex>=0&&(t.payload.loading=!0,setTimeout((function(){t.payload.loading=!1}),5e3*Math.random()+1e3)),n.children=R(n.children,t),a.children.splice(r,1,n),this.scene=a}},getCardPayload(e){return t=>this.scene.children.filter((t=>t.id===e))[0].children[t]}}},oe={class:"h-screen overflow-y-auto"},re={class:" bg-gray-50 dark:bg-gray-700 shadow-xl rounded-md mx-4"},ne={class:"cursor-move rounded-t-lg p-4 space-x-4 bg-primary text-white flex space-x-2"},se={class:"text-lg"};ae.render=function(e,t,a,o,s,c){const u=i("HandIcon"),p=i("KanbanItem"),m=i("Container"),h=i("Draggable");return r(),n("div",oe,[d(m,{onDrop:t[1]||(t[1]=e=>c.onColumnDrop(e)),orientation:"horizontal","group-name":"cols",autoScrollEnabled:!0,"drop-placeholder":{className:"bg-primary bg-opacity-10 rounded-lg"}},{default:l((()=>[(r(!0),n(y,null,x(s.scene.children,(e=>(r(),n(h,{key:e.id},{default:l((()=>[d("div",re,[d("div",ne,[d(u,{class:"h-6 w-6"}),d("span",se,v(e.name),1)]),d(m,{class:"m-4 w-60 pb-2",orientation:"vertical",onDrop:t=>c.onCardDrop(e.id,t),"group-name":"col-items",autoScrollEnabled:!0,shouldAcceptDrop:(e,t)=>"col-items"===e.groupName&&!t.loading,"get-child-payload":c.getCardPayload(e.id),"drop-placeholder":{className:"bg-primary bg-opacity-20 rounded-lg border-dotted border-2 border-primary",animationDuration:"200",showOnTop:!0},"drag-class":"bg-primary dark:bg-primary border-2 border-purple-600 text-white transition duration-100 ease-in z-50 transform rotate-6 scale-110 ","drop-class":"transition duration-100 ease-in z-50 transform -rotate-2 scale-90"},{default:l((()=>[(r(!0),n(y,null,x(e.children,(e=>(r(),n(p,{key:e.id,item:e},null,8,["item"])))),128))])),_:2},1032,["onDrop","shouldAcceptDrop","get-child-payload"])])])),_:2},1024)))),128))])),_:1})])};const ie={},le={class:"relative w-full h-full flex flex-row justify-center"},de=d("div",{class:"flex flex-col justify-center"},[d("div",{class:"flex justify-center text-6xl font-bold text-primary"},"4😥4")],-1);ie.render=function(e,t){return r(),n("div",le,[de])};const ce=[{path:"/",name:"kanban",component:ae},{path:"/:pathMatch(.*)*",name:"404",component:ie}],ue=D({history:k(),routes:ce});w(E).use(ue).use(P).mount("#app");