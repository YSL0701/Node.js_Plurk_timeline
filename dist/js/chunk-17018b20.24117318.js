(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17018b20"],{"0982":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"response_content"},[e("div",{staticClass:"content"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.responseData.avatar,alt:"avatar"}})]),e("div",{staticClass:"article"},[e("div",{staticClass:"displayName"},[e("a",{class:{owner:t.responseData.account===t.ownerAccount},style:t.nameColor,attrs:{href:t.accountLink,target:"_blank"}},[t._v(t._s(t.responseData.displayName))])]),e("div",{staticClass:"text_content",domProps:{innerHTML:t._s(t.responseData.content)}})])]),e("div",{staticClass:"date"},[t._v(t._s(t.postedDate))])])},n=[],r={props:{responseData:{type:Object,required:!0},ownerAccount:{tryp:String,required:!0}},computed:{accountLink:function(){return"https://www.plurk.com/".concat(this.responseData.account)},postedDate:function(){return new Date(this.responseData.posted).toLocaleString()},nameColor:function(){return this.responseData.nameColor?{color:"#".concat(this.responseData.nameColor)}:void 0}}},o=r,i=(e("39e0"),e("2877")),c=Object(i["a"])(o,a,n,!1,null,"0a11c92c",null);c.options.__file="responseCard.vue";s["a"]=c.exports},"0bfb":function(t,s,e){"use strict";var a=e("cb7c");t.exports=function(){var t=a(this),s="";return t.global&&(s+="g"),t.ignoreCase&&(s+="i"),t.multiline&&(s+="m"),t.unicode&&(s+="u"),t.sticky&&(s+="y"),s}},3846:function(t,s,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"39e0":function(t,s,e){"use strict";var a=e("fef1"),n=e.n(a);n.a},"6b54":function(t,s,e){"use strict";e("3846");var a=e("cb7c"),n=e("0bfb"),r=e("9e1e"),o="toString",i=/./[o],c=function(t){e("2aba")(RegExp.prototype,o,t,!0)};e("79e5")(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?c(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?n.call(t):void 0)}):i.name!=o&&c(function(){return i.call(this)})},"727e":function(t,s,e){},d3a4:function(t,s,e){"use strict";var a=e("727e"),n=e.n(a);n.a},f21d:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"page"}},[e("div",{staticClass:"content_card"},[e("div",{staticClass:"main_content"},[e("div",{staticClass:"content"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.avatar,alt:"avatar"}})]),e("div",{staticClass:"article"},[e("div",{staticClass:"displayName"},[e("a",{attrs:{href:t.accountLink,target:"_blank"}},[t._v(t._s(t.displayName))])]),e("div",{staticClass:"text_content",domProps:{innerHTML:t._s(t.plurk.content)}})])]),e("div",{staticClass:"date"},[t._v(t._s(t.postedDate))]),e("div",{staticClass:"info"},[e("div",{staticClass:"response_count"},[e("i",{staticClass:"fas fa-comments"}),e("div",{staticClass:"count"},[t._v("\n            "+t._s(t.plurk.response_count)+"\n          ")])]),e("a",{staticClass:"link",attrs:{href:t.originLink,target:"_blank"}},[e("i",{staticClass:"fas fa-external-link-alt"}),e("div",{staticClass:"text"},[t._v("連結")])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.responseOpen,expression:"responseOpen"}],staticClass:"response_group"},[e("transition-group",{attrs:{name:"responseCard"}},t._l(t.responses,function(s){return e("responseCard",{directives:[{name:"show",rawName:"v-show",value:!t.responseLoading,expression:"!responseLoading"}],key:s.posted,attrs:{"response-data":s,ownerAccount:t.account}})})),t.responseLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:"/ball-loading.gif"}})]):t._e()],1),t.responseLoading||0!==t.plurk.response_count?t._e():e("div",{staticClass:"noResponses"},[t._v("目前沒有回應喔")])])])},n=[],r=(e("6b54"),e("0982")),o={data:function(){return{responseLoading:!1,responseOpen:!1,responses:[]}},methods:{getResponse:function(){var t=this;!this.responses.length>0&&this.plurk.response_count>0?(this.responseOpen=!0,this.responseLoading=!0,this.$axios.post("https://plurk-timeline.herokuapp.com/response",{plurk_id:this.plurk.plurk_id}).then(function(s){t.responses=s.data.response,t.responseLoading=!1})):this.responses.length>0&&this.plurk.response_count>0&&(this.responseOpen=!this.responseOpen)}},computed:{accountLink:function(){return"https://www.plurk.com/".concat(this.account)},postedDate:function(){if(this.plurk.posted)return new Date(this.plurk.posted).toLocaleString()},originLink:function(){if(this.plurk.plurk_id)return"https://www.plurk.com/p/".concat(this.plurk.plurk_id.toString(36))},plurk:function(){return this.$store.state.plurk.plurkPageData.plurk},displayName:function(){return this.$store.state.plurk.plurkPageData.displayName},account:function(){return this.$store.state.plurk.plurkPageData.account},avatar:function(){return this.$store.state.plurk.plurkPageData.avatar}},components:{responseCard:r["a"]},mounted:function(){this.plurk.plurk_id?this.getResponse():this.$route.params.plurk_id===localStorage.getItem("plurk_id")&&(this.$store.commit("setPlurkPageData",JSON.parse(localStorage.getItem("ownerData"))),this.getResponse())}},i=o,c=(e("d3a4"),e("2877")),p=Object(c["a"])(i,a,n,!1,null,"2c50ea1e",null);p.options.__file="plurkPage.vue";s["default"]=p.exports},fef1:function(t,s,e){}}]);
//# sourceMappingURL=chunk-17018b20.24117318.js.map