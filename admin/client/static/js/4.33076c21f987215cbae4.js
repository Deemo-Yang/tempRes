webpackJsonp([4],{GF4k:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("j8vk"),o=t.n(s),a=t("mtWM"),n=t.n(a),i={data:function(){return{img:o.a,ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var t=r;"djqsys"===r.ruleForm.username?n.a.post("http://132.232.140.241:3000/api/myusers/login",{username:r.ruleForm.username,password:r.ruleForm.password}).then(function(e){t.$router.push("/table"),localStorage.setItem("token",e.data.id)}).catch(function(e){t.$alert("用户名或密码不正确","登录失败",{confirmButtonText:"确定",type:"error"})}):t.$alert("用户名不正确","登录失败",{confirmButtonText:"确定",type:"error"})})},register:function(){this.$router.push("/register")}}},u={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-wrap",staticStyle:{position:"relative",width:"100%",height:"100%",background:"no-repeat fixed center url('../static/img/pic3.jpg')"}},[t("div",{staticClass:"ms-title"},[e._v("度假区创业创新项目后台管理系统")]),e._v(" "),t("div",{staticClass:"ms-login"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px"}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.submitForm("ruleForm")}},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),t("br"),e._v(" "),t("div",{staticClass:"login-btn"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var l=t("VU/8")(i,u,!1,function(e){t("wdGR")},"data-v-4f85754e",null);r.default=l.exports},j8vk:function(e,r,t){e.exports=t.p+"static/img/pic3.12e356f.jpg"},wdGR:function(e,r){}});