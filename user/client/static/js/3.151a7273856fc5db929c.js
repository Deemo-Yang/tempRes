webpackJsonp([3],{"12W2":function(t,a){},ENMl:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("el-collapse-transition",{attrs:{name:"fade"}},[a("div",{staticClass:"img-view",on:{click:this.bigImg}},[a("div",{staticClass:"img-layer"}),this._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:this.imgSrc}})])])])},staticRenderFns:[]};var i={data:function(){return{id:"",imgurl:"",companyname:"",companytype:"",contactperson:"",phone:"",legalperson:"",organizationcode:"",registeraddr:"",workaddr:"",showImg:!1,imgSrc:""}},components:{"big-img":e("VU/8")({props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}},s,!1,function(t){e("TJqq")},"data-v-708a33c5",null).exports},created:function(){this.getdata()},methods:{getdata:function(){var t=this;this.id=localStorage.getItem("companyid"),this.$api.get("/api/Companys/"+this.id,null,function(a){t.companyname=a.companyname,t.companytype=a.companytype,t.contactperson=a.contactperson,t.phone=a.phone,t.legalperson=a.legalperson,t.organizationcode=a.organizationcode,t.registeraddr=a.registeraddr,t.workaddr=a.workaddr,t.imgurl="http://132.232.140.241:3000"+a.licenseurl,console.log(t.imgurl)})},clickImg:function(t){this.showImg=!0,this.imgSrc=t.currentTarget.src},viewImg:function(){this.showImg=!1}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.showImg?e("big-img",{attrs:{imgSrc:t.imgSrc},on:{clickit:t.viewImg}}):t._e(),t._v(" "),t._m(0),t._v(" "),e("div",{staticStyle:{"margin-bottom":"20px"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12,align:"right"}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                        用户名(公司名)\n                    ")]),t._v(" "),e("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                        "+t._s(t.companyname)+"\n                    ")])]),t._v(" "),e("br"),t._v(" "),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                        单位类型\n                    ")]),t._v(" "),e("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                        "+t._s(t.companytype)+"\n                    ")])]),t._v(" "),e("br"),t._v(" "),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                        联系人姓名\n                    ")]),t._v(" "),e("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                        "+t._s(t.contactperson)+"\n                    ")])]),t._v(" "),e("br"),t._v(" "),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                        电话\n                    ")]),t._v(" "),e("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                        "+t._s(t.phone)+"\n                    ")])]),t._v(" "),e("br")],1),t._v(" "),e("el-col",{attrs:{span:12,align:"left"}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                        法人代表\n                    ")]),t._v(" "),e("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                        "+t._s(t.legalperson)+"\n                    ")])]),t._v(" "),e("br"),t._v(" "),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                        统一社会信用代码\n                    ")]),t._v(" "),e("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                        "+t._s(t.organizationcode)+"\n                    ")])]),t._v(" "),e("br"),t._v(" "),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                        注册地址\n                    ")]),t._v(" "),e("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                        "+t._s(t.registeraddr)+"\n                    ")])]),t._v(" "),e("br"),t._v(" "),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                        办公地址\n                    ")]),t._v(" "),e("div",{staticClass:"text item",attrs:{align:"center"}},[t._v("\n                        "+t._s(t.workaddr)+"\n                    ")])]),t._v(" "),e("br")],1)],1),t._v(" "),e("el-row",[e("div",{attrs:{align:"center"}},[e("el-card",{staticClass:"card",staticStyle:{width:"62.5%","border-radius":"15px"}},[e("div",{staticClass:"clearfix",staticStyle:{"margin-bottom":"1px"},attrs:{slot:"header",align:"left"},slot:"header"},[t._v("\n                    营业执照\n                ")]),t._v(" "),e("div",{staticClass:"text item",attrs:{align:"center"}},[e("img",{staticStyle:{width:"200px",height:"200px"},attrs:{src:t.imgurl},on:{click:function(a){t.clickImg(a)}}})])])],1)])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"crumbs"},[a("span",[a("i",{staticClass:"el-icon-tickets"}),this._v("公司基本信息")])])}]};var n=e("VU/8")(i,r,!1,function(t){e("12W2")},"data-v-4ee16b78",null);a.default=n.exports},TJqq:function(t,a){}});