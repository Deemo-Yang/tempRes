webpackJsonp([23],{uXp4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{file:[],form:{id:0,companyid:"",name:"",sex:"男",nation:"",birth:"",politicsstatus:"",value:"",educationbackground:"",company:"",duty:"",companyaddress:"",phone:"",workexperience:"",workperformance:"",opinion1:"",opinion2:"",opinion3:"",ts:0,reportdate:"",status:0},filelist:[],rules:{name:[{required:!0,message:"该项不能为空",trigger:"blur"}],sex:[{required:!0,message:"该项不能为空",trigger:"blur"}],nation:[{required:!0,message:"该项不能为空",trigger:"blur"}],birth:[{required:!0,message:"该项不能为空",trigger:"blur"}],politicsstatus:[{required:!0,message:"该项不能为空",trigger:"blur"}],value:[{required:!0,message:"该项不能为空",trigger:"blur"}],educationbackground:[{required:!0,message:"该项不能为空",trigger:"blur"}],company:[{required:!0,message:"该项不能为空",trigger:"blur"}],duty:[{required:!0,message:"该项不能为空",trigger:"blur"}],companyaddress:[{required:!0,message:"该项不能为空",trigger:"blur"}],phone:[{required:!0,message:"该项不能为空",trigger:"blur"},{type:"number",message:"请输入电话号码"}],workexperience:[{required:!0,message:"该项不能为空",trigger:"blur"}],workperformance:[{required:!0,message:"该项不能为空",trigger:"blur"}],opinion1:[{required:!0,message:"该项不能为空",trigger:"blur"}]}}},created:function(){this.getdata()},methods:{saveapp:function(){var e=this;this.$api.patch("api/Intellectualpropertyapplies",this.form,function(t){e.form.id=t.id,e.$message.success("保存成功")})},submit:function(){var e=this;this.$refs.form.validate(function(t){t?e.$api.get("api/Intellectualpropertyapplystorages?filter="+encodeURI('{"where":{"and":[{"intellectualpropertyapplyid":'+e.form.id+"}]}}"),null,function(t){0!==t.length?(e.form.status=1,e.$api.patch("api/Intellectualpropertyapplies",e.form,function(t){e.$alert("提交成功","提示",{confirmButtonText:"确定",type:"success"}),e.$router.push("/gwtable")})):e.$alert("文件未上传","提示",{confirmButtonText:"确定",type:"error"})}):e.$alert("表单未全部填写完成","提示",{confirmButtonText:"确定",type:"error"})})},getdata:function(){var e=this;this.form.companyid=localStorage.getItem("companyid"),this.form.reportdate=this.getdate(),this.$route.query.proid&&(this.$api.get("api/Intellectualpropertyapplystorages?filter="+encodeURI('{"where":{"and":[{"intellectualpropertyapplyid":'+this.$route.query.proid+"}]}}"),null,function(t){0!==t.length&&(e.file=[{name:t[0].name.slice(14),url:t[0].url}])}),this.$api.get("api/Intellectualpropertyapplies/"+this.$route.query.proid,null,function(t){e.form=t}))},getdate:function(){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,o=e.getDate();return r>=1&&r<=9&&(r="0"+r),o>=0&&o<=9&&(o="0"+o),t+"-"+r+"-"+o},pagejump:function(){this.$router.push("/gwtable")},beforeupload:function(){if(0===this.form.id)return this.$alert("请先保存再上传文件","提示",{confirmButtonText:"确定",type:"error"}),!1},uploadsuccess:function(e,t,r){var o=this;this.$api.post("api/Intellectualpropertyapplystorages",{id:0,name:e[0].name,url:e[0].url,type:"file1",intellectualpropertyapplyid:this.form.id},function(e){o.file=[{name:e.name.slice(14),url:e.url}]})},fileremove:function(e){var t=this;this.$api.get("api/Intellectualpropertyapplystorages?filter="+encodeURI('{"where":{"url":{"like":"%'+e.url+'%"}}}'),null,function(e){0!==e.length?(t.$api.delete("api/Intellectualpropertyapplystorages/"+e[0].id,null,function(e){}),t.$message.success("删除成功")):t.$alert("文件未上传成功，文件不存在，删除错误","提示",{confirmButtonText:"确定"})})}}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),r("div",{staticClass:"container"},[r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{on:{click:e.pagejump}},[e._v("草稿箱")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")])],1),r("br"),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,mar:"","label-width":"100px","label-position":"left",rules:e.rules}},[r("el-row",{attrs:{gutter:40}},[r("el-col",{attrs:{span:12}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"姓名",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"民族",prop:"nation"}},[r("el-input",{model:{value:e.form.nation,callback:function(t){e.$set(e.form,"nation",t)},expression:"form.nation"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"性别",prop:"sex"}},[r("el-radio",{attrs:{label:"男"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("男")]),e._v(" "),r("el-radio",{attrs:{label:"女"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女")])],1),e._v(" "),r("el-form-item",{attrs:{label:"出生年月",prop:"birth"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期时间",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"政治面貌",prop:"politicsstatus"}},[r("el-select",{attrs:{placeholder:"请选择政治面貌"},model:{value:e.form.politicsstatus,callback:function(t){e.$set(e.form,"politicsstatus",t)},expression:"form.politicsstatus"}},[r("el-option",{key:"中共党员",attrs:{label:"中共党员",value:"中共党员"}}),e._v(" "),r("el-option",{key:"群众",attrs:{label:"群众",value:"群众"}}),e._v(" "),r("el-option",{key:"其他",attrs:{label:"其他",value:"其他"}})],1)],1)],1),e._v(" "),r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"学历",prop:"educationbackground"}},[r("el-select",{attrs:{placeholder:"请选择学历"},model:{value:e.form.educationbackground,callback:function(t){e.$set(e.form,"educationbackground",t)},expression:"form.educationbackground"}},[r("el-option",{key:"博士",attrs:{label:"博士",value:"博士"}}),e._v(" "),r("el-option",{key:"硕士",attrs:{label:"硕士",value:"硕士"}}),e._v(" "),r("el-option",{key:"本科",attrs:{label:"本科",value:"本科"}}),e._v(" "),r("el-option",{key:"专科",attrs:{label:"专科",value:"专科"}}),e._v(" "),r("el-option",{key:"专科以下",attrs:{label:"专科以下",value:"专科以下"}})],1)],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"工作单位",prop:"company"}},[r("el-input",{model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),e._v(" "),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"职务",prop:"duty"}},[r("el-input",{model:{value:e.form.duty,callback:function(t){e.$set(e.form,"duty",t)},expression:"form.duty"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"单位地址",prop:"companyaddress"}},[r("el-input",{model:{value:e.form.companyaddress,callback:function(t){e.$set(e.form,"companyaddress",t)},expression:"form.companyaddress"}})],1),e._v(" "),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{md:12}},[r("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[r("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",e._n(t))},expression:"form.phone"}})],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"工作经历",prop:"workexperience"}},[r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容"},model:{value:e.form.workexperience,callback:function(t){e.$set(e.form,"workexperience",t)},expression:"form.workexperience"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"工作成绩",prop:"workperformance"}},[r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容"},model:{value:e.form.workperformance,callback:function(t){e.$set(e.form,"workperformance",t)},expression:"form.workperformance"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"单位推荐意见",prop:"opinion1"}},[r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入内容"},model:{value:e.form.opinion1,callback:function(t){e.$set(e.form,"opinion1",t)},expression:"form.opinion1"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"区中小企业服务中心意见",prop:"opinion2"}},[r("el-input",{attrs:{disabled:!0,type:"textarea",rows:6},model:{value:e.form.opinion2,callback:function(t){e.$set(e.form,"opinion2",t)},expression:"form.opinion2"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"区经发局审批意见",prop:"opinion3"}},[r("el-input",{attrs:{disabled:!0,type:"textarea",rows:6},model:{value:e.form.opinion3,callback:function(t){e.$set(e.form,"opinion3",t)},expression:"form.opinion3"}})],1),e._v(" "),r("br"),r("br"),e._v(" "),r("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"http://132.232.146.190:3000/api/StorageFiles/upload","on-success":e.uploadsuccess,"on-remove":e.fileremove,"before-upload":e.beforeupload,"file-list":e.file,"show-file-list":!0,limit:1,"list-type":"list"}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取材料文件")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("相关证明材料上传，不超过10MB")])],1)],1)],1),r("br"),e._v(" "),r("div",{attrs:{align:"center"}},[r("el-button",{on:{click:e.saveapp}},[e._v("保存")])],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"crumbs"},[t("span",[this._v("知识产权先进个人/优秀工作者认定申请表")])])}]},a=r("VU/8")(o,l,!1,null,null,null);t.default=a.exports}});