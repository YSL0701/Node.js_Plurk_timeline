(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-142498a5"],{"07fb":function(t,e,n){},"0bfb":function(t,e,n){"use strict";var a=n("cb7c");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";var a=n("32e9"),i=n("2aba"),r=n("79e5"),s=n("be13"),o=n("2b4c");t.exports=function(t,e,n){var c=o(t),l=n(s,c,""[t]),u=l[0],p=l[1];r(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,u),a(RegExp.prototype,c,2==e?function(t,e){return p.call(t,this,e)}:function(t){return p.call(t,this)}))}},2348:function(t,e,n){"use strict";var a=n("86f1"),i=n.n(a);i.a},"28a5":function(t,e,n){n("214f")("split",2,function(t,e,a){"use strict";var i=n("aae3"),r=a,s=[].push,o="split",c="length",l="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[c]||2!="ab"[o](/(?:ab)*/)[c]||4!="."[o](/(.?)(.?)/)[c]||"."[o](/()()/)[c]>1||""[o](/.?/)[c]){var u=void 0===/()??/.exec("")[1];a=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!i(t))return r.call(n,t,e);var a,o,p,d,v,f=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,h=void 0===e?4294967295:e>>>0,y=new RegExp(t.source,g+"g");u||(a=new RegExp("^"+y.source+"$(?!\\s)",g));while(o=y.exec(n)){if(p=o.index+o[0][c],p>m&&(f.push(n.slice(m,o.index)),!u&&o[c]>1&&o[0].replace(a,function(){for(v=1;v<arguments[c]-2;v++)void 0===arguments[v]&&(o[v]=void 0)}),o[c]>1&&o.index<n[c]&&s.apply(f,o.slice(1)),d=o[0][c],m=p,f[c]>=h))break;y[l]===o.index&&y[l]++}return m===n[c]?!d&&y.test("")||f.push(""):f.push(n.slice(m)),f[c]>h?f.slice(0,h):f}}else"0"[o](void 0,0)[c]&&(a=function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)});return[function(n,i){var r=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,r,i):a.call(String(r),n,i)},a]})},3215:function(t,e,n){},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"63ed":function(t,e,n){"use strict";var a=n("07fb"),i=n.n(a);i.a},"6b54":function(t,e,n){"use strict";n("3846");var a=n("cb7c"),i=n("0bfb"),r=n("9e1e"),s="toString",o=/./[s],c=function(t){n("2aba")(RegExp.prototype,s,t,!0)};n("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)}):o.name!=s&&c(function(){return o.call(this)})},8274:function(t,e,n){},"86f1":function(t,e,n){},"9d67":function(t,e,n){"use strict";var a=n("8274"),i=n.n(a);i.a},aae3:function(t,e,n){var a=n("d3f4"),i=n("2d95"),r=n("2b4c")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},ade6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"data"},[n("div",{staticClass:"input_area"},[n("div",{staticClass:"account"},[n("span",[t._v("帳號 : ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text"},domProps:{value:t.account},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getTimeline(e):null},input:function(e){e.target.composing||(t.account=e.target.value)}}})]),n("div",{staticClass:"date"},[n("span",[t._v("日期 : ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date"},domProps:{value:t.date},on:{input:function(e){e.target.composing||(t.date=e.target.value)}}})])]),n("div",{staticClass:"goTimeline",on:{click:t.getTimeline}},[t.isLoading?n("img",{attrs:{src:"/loading.gif"}}):n("span",[t._v("啟動時光機!")])])]),t.timeline.length>0?n("div",{staticClass:"plurkContentGroup"},[t._l(t.timeline,function(e,a){return n("plurkContent",{key:a,staticClass:"plurkContent",attrs:{plurk:e,"display-name":t.displayName,account:t.currentAccount,avatar:t.targetAvatar}})}),this.timeline.length>0&&t.canGetMore?n("div",{staticClass:"more",on:{click:t.getMoreTimeline}},[t.moreLoading?n("img",{attrs:{src:"/loading.gif"}}):n("span",[t._v("看更多")])]):t._e()],2):t._e(),t.error?n("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e()])},i=[];n("28a5");function r(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return r(t)||s(t)||o()}var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content_card"},[n("div",{staticClass:"main_content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.avatar,alt:"avatar"}})]),n("div",{staticClass:"article"},[n("div",{staticClass:"displayName"},[n("a",{attrs:{href:t.accountLink,target:"_blank"}},[t._v(t._s(t.displayName))])]),n("div",{staticClass:"text_content",domProps:{innerHTML:t._s(t.plurk.content)}})])]),n("div",{staticClass:"date"},[t._v(t._s(t.postedDate))]),n("div",{staticClass:"info"},[n("div",{staticClass:"response_count",attrs:{title:t.replyOpenTitle},on:{click:t.getReply}},[n("i",{staticClass:"fas fa-comments"}),n("div",{staticClass:"count"},[t._v("\n          "+t._s(t.plurk.response_count)+"\n        ")])]),n("a",{staticClass:"link",attrs:{href:t.originLink,target:"_blank"}},[n("i",{staticClass:"fas fa-external-link-alt"}),n("div",{staticClass:"text"},[t._v("連結")])])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.replyOpen,expression:"replyOpen"}],staticClass:"reply_group"},[t._l(t.reply,function(e){return n("replyCard",{directives:[{name:"show",rawName:"v-show",value:!t.replyLoading,expression:"!replyLoading"}],key:e.posted,attrs:{"reply-data":e,ownerAccount:t.account}})}),t.replyLoading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:"/ball-loading.gif"}})]):t._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.replyOpen&&!t.replyLoading,expression:"replyOpen && !replyLoading"}],staticClass:"close",on:{click:function(e){t.openCloseReply(!1)}}},[t._v("收起回覆")])])},u=[],p=(n("6b54"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reply_content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.replyData.avatar,alt:"avatar"}})]),n("div",{staticClass:"article"},[n("div",{staticClass:"displayName"},[n("a",{class:{owner:t.replyData.account===t.ownerAccount},style:t.nameColor,attrs:{href:t.accountLink,target:"_blank"}},[t._v(t._s(t.replyData.displayName))])]),n("div",{staticClass:"text_content",domProps:{innerHTML:t._s(t.replyData.content)}})])]),n("div",{staticClass:"date"},[t._v(t._s(t.postedDate))])])}),d=[],v={props:["replyData","ownerAccount"],computed:{accountLink:function(){return"https://www.plurk.com/".concat(this.replyData.account)},postedDate:function(){return new Date(this.replyData.posted).toLocaleString()},nameColor:function(){return this.replyData.nameColor?{color:"#".concat(this.replyData.nameColor)}:void 0}}},f=v,g=(n("9d67"),n("2877")),m=Object(g["a"])(f,p,d,!1,null,"7b9ec7ab",null);m.options.__file="replyCard.vue";var h=m.exports,y={props:["plurk","displayName","account","avatar"],data:function(){return{replyLoading:!1,replyOpen:!1,reply:[]}},methods:{getReply:function(){var t=this;!this.reply.length>0&&this.plurk.response_count>0?(this.replyOpen=!0,this.replyLoading=!0,this.$axios.post("https://plurk-timeline.herokuapp.com/reply",{plurk_id:this.plurk.plurk_id}).then(function(e){t.reply=e.data.reply,t.replyLoading=!1})):this.reply.length>0&&this.plurk.response_count>0&&(this.replyOpen=!this.replyOpen)},openCloseReply:function(t){this.replyOpen=t}},computed:{accountLink:function(){return"https://www.plurk.com/".concat(this.account)},postedDate:function(){return new Date(this.plurk.posted).toLocaleString()},originLink:function(){return"https://www.plurk.com/p/".concat(this.plurk.plurk_id.toString(36))},replyOpenTitle:function(){return this.replyOpen?"收起回覆":"展開回覆"}},components:{replyCard:h}},_=y,k=(n("63ed"),n("2348"),Object(g["a"])(_,l,u,!1,null,"28acc70e",null));k.options.__file="plurk_content.vue";var C=k.exports,b={data:function(){return{account:"",date:"",timeline:[],isLoading:!1,error:"",displayName:"",moreLoading:!1,currentAccount:"",targetAvatar:"",canGetMore:!0}},methods:{getTimeline:function(){var t=this;this.timeline=[],this.error="",this.canGetMore=!0,this.account&&!this.isLoading&&(this.isLoading=!0,this.$axios.post("https://plurk-timeline.herokuapp.com/getTimeline",{account:this.account,offset:this.isoDate}).then(function(e){"success"===e.data.success?(t.timeline=e.data.plurks,t.displayName=e.data.displayName,t.currentAccount=e.data.account,t.targetAvatar=e.data.avatar,t.timeline.length<1&&(t.error="在這時間之前沒有噗文喔")):t.error=e.data.message,t.isLoading=!1}))},getMoreTimeline:function(){var t=this,e=new Date(this.timeline[this.timeline.length-1].posted).toISOString();this.currentAccount&&!this.moreLoading&&(this.moreLoading=!0,this.$axios.post("https://plurk-timeline.herokuapp.com/getTimeline",{account:this.currentAccount,offset:e}).then(function(e){"success"===e.data.success?(t.timeline=c(t.timeline).concat(c(e.data.plurks)),0===e.data.plurks.length&&(t.canGetMore=!1,t.error="已經沒有更多的噗文囉")):t.error=e.message,t.moreLoading=!1}).catch(function(t){console.log("錯誤:",t)}))},clearError:function(){this.error=""}},computed:{isoDate:function(){return this.date?new Date("".concat(this.date,"T23:59:59")).toISOString():(new Date).toISOString()}},components:{plurkContent:C},created:function(){this.date=(new Date).toLocaleDateString().split("/").map(function(t){return 1*t<10&&(t="0"+t),t}).join("-")}},w=b,x=(n("c79f"),Object(g["a"])(w,a,i,!1,null,"ba733f46",null));x.options.__file="timeline.vue";e["default"]=x.exports},c79f:function(t,e,n){"use strict";var a=n("3215"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-142498a5.ccbbaf45.js.map