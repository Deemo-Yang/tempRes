webpackJsonp([16],{"+lQc":function(t,e){},Z1dZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={name:"basetable",data:function(){return{filters:[{text:"",value:""}],activeStatus:0,currentid:0,dialogVisible:!1,innerVisible:!1,innerVisible1:!1,active:0,value1:!1,value3:!1,selectTab:"table",tableData:[{contractnumber:11111}],tableData1:[],tableData2:[],tableData_s:[],tableData1_s:[],tableData2_s:[],Companys:[],multipleSelection:[],multipleSelection1:[],contractnumber:"",name:"",contractor:"",begindate:"",enddate:"",budget:"",funding:"",appropriation:"",status:"",currentpoint:"",select_word:"",date:"",form:{assignedfunds:"",contractno:""}}},created:function(){this.getData()},computed:{buttonValue1:function(){if(5===this.active)return!0},buttonValue2:function(){if(0===this.active)return!0}},methods:{getData:function(){var t=this;this.$api.get("/api/Companys",null,function(e){t.Companys=e}),this.$api.get("/api/Intelproperties",null,function(e){var a=0,l=0,n=0;for(var i in t.tableData=[],t.tableData1=[],t.tableData2=[],e){for(var s in t.Companys)e[i].companyid===t.Companys[s].id&&(e[i].contractor=t.Companys[s].companyname);"0"===e[i].status?(t.$set(t.tableData,a,e[i]),a+=1):"1"===e[i].status?(t.$set(t.tableData1,n,e[i]),n+=1):(t.$set(t.tableData2,l,e[i]),l+=1)}})},set1:function(t,e){var a=this;this.$api.patch("/api/Intelproperties/"+e.id,{status:"1"},function(t){console.log(t),a.getData()})},set0:function(t,e){var a=this;this.$api.patch("/api/Intelproperties/"+e.id,{status:"0"},function(t){console.log(t),a.getData()})},set2:function(t,e){var a=this;this.$api.patch("/api/Intelproperties/"+e.id,{status:"2"},function(t){console.log(t),a.getData()})},Delete:function(t,e){var a=this;this.$api.delete("/api/Intelproperties/"+e.id,null,function(t){console.log(t),a.getData()})},search:function(){if(null!=this.select_word)switch(this.selectTab){case"table":for(var t in this.tableData)-1===this.tableData[t].projectname.search(this.select_word.toString())&&(console.log(!0),this.tableData.splice(this.tableData.indexOf(t),1));console.log(this.tableData);break;case"table1":for(var e in this.tableData1)-1===this.tableData1[e].projectname.search(this.select_word)&&(console.log(!0),this.tableData1.splice(this.tableData1.indexOf(e),1));console.log(this.tableData1);break;default:for(var a in this.tableData2)-1===this.tableData2[a].projectname.search(this.select_word)&&(console.log(!0),this.tableData2.splice(this.tableData2.indexOf(a),1));console.log(this.tableData2)}else this.getData()},formatter:function(t,e){return t.address},handleSelectionChange:function(t){this.multipleSelection=t,console.log(this.multipleSelection)},handleSelectionChange1:function(t){this.multipleSelection1=t,console.log(this.multipleSelection1)},handleEdit:function(t,e){this.activeStatus=parseInt(e.currentnode),6!=e.currentnode?this.active=parseInt(e.currentnode):this.active=5,this.dialogVisible=!0,this.currentid=e.id},check:function(t,e){this.$router.push("/drag/"+e.id)},refresh:function(){this.getData()},filterHandler:function(t,e,a){return e[a.property]===t},multipleSet1:function(t){var e=this;for(var a in t)this.$api.patch("/api/Intelproperties/"+t[a].id,{status:1},function(t){console.log(t),e.getData()})},multipleSet2:function(t){var e=this;for(var a in t)this.$api.patch("/api/Intelproperties/"+t[a].id,{status:2},function(t){console.log(t),e.getData()})},mutipleDelete:function(t){for(var e in t)this.$api.delete("/api/Intelproperties/"+t[e].id,null,function(t){})},next:function(){2===this.active&&(this.innerVisible1=!0),4===this.active&&(this.innerVisible=!0),this.active++},back:function(){this.active--},confirm:function(){var t=this;5===this.active?this.$api.patch("/api/Intelproperties/"+this.currentid,{currentnode:this.activeStatus},function(e){t.$message.success("节点状态修改成功"),t.getData(),t.dialogVisible=!1}):this.$api.patch("/api/Intelproperties/"+this.currentid,{currentnode:this.active},function(e){t.$message.success("节点状态修改成功"),t.getData(),t.dialogVisible=!1})},pass:function(){this.activeStatus=5,this.innerVisible=!1},nopass:function(){this.activeStatus=6,this.innerVisible=!1},submit:function(){var t=this;this.$api.patch("/api/Intelproperties/"+this.currentid,{assignedfunds:this.form.assignedfunds,contractno:this.form.contractno},function(e){t.innerVisible1=!1})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-tickets"}),t._v("已申请项目详情")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("label",{staticStyle:{"font-size":"13px",color:"#6f7180"}},[t._v("项目名称筛选")]),t._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"项目名称"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{icon:"el-icon-refresh",round:""},on:{click:t.refresh}},[t._v("刷新")])],1),t._v(" "),a("el-tabs",{model:{value:t.selectTab,callback:function(e){t.selectTab=e},expression:"selectTab"}},[a("el-tab-pane",{attrs:{label:"待受理",name:"table"}},[a("el-switch",{attrs:{"active-text":"批量操作"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v("    \n                "),t.value1?a("el-button",{attrs:{type:"success",size:"mini",round:""},on:{click:function(e){t.multipleSet1(t.multipleSelection)}}},[t._v("通过审核")]):t._e(),t._v("  \n                "),t.value1?a("el-button",{attrs:{type:"danger",size:"mini",round:""},on:{click:function(e){t.multipleSet2(t.multipleSelection)}}},[t._v("不通过审核")]):t._e(),t._v("  \n                "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","font-size":"14px"},attrs:{data:t.tableData,fit:!0},on:{"selection-change":t.handleSelectionChange}},[t.value1?a("el-table-column",{attrs:{type:"selection",width:"55"}}):t._e(),t._v(" "),a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-row",[a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"国内发明专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.inlandnop)+"/"+t._s(e.row.inlandapplyfunds))])]),t._v(" "),a("el-form-item",{attrs:{label:"国外发明专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.foreignnop)+"/"+t._s(e.row.foreignapplyfunds))])]),t._v(" "),a("el-form-item",{attrs:{label:"实用新型专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.practicalnewnop)+"/"+t._s(e.row.practicalnewapplyfunds))])]),t._v(" "),a("el-form-item",{attrs:{label:"外观设计专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.apdesignnop)+"/"+t._s(e.row.apdesignfunds))])])],1),t._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"软件著作权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.softcopyrightcount)+"/"+t._s(e.row.softcopyrightfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"版权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.copyrightcount)+"/"+t._s(e.row.copyrightfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"商标专利权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.logolicensingcount)+"/"+t._s(e.row.logolicensingfunds))])])],1),t._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"集成电路布图权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.iclayoutcount)+"/"+t._s(e.row.iclayoutfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"植物新品种权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.newplantcount)+"/"+t._s(e.row.newplantfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"新药证书数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.newmedicationcount)+"/"+t._s(e.row.newmedicationfunds))])])],1)],1)],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,sortable:"",width:"150px",fixed:"left",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"industrycategory",label:"行业类别",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"authorizeyear",label:"知识产权授权年度",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactperson",label:"项目联系人",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactphone",label:"项目联系人电话",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactemail",label:"项目联系人邮箱",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"memo",label:"备注",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",align:"center",label:"状态",formatter:t.formatter,resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"warning",size:"medium"}},[t._v("待受理")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"currentnode",label:"当前节点",align:"center",formatter:t.formatter,resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"info",size:"medium"}},[t._v("待审核")])],1)])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"项目详情",align:"center",resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.check(e.$index,e.row)}}},[t._v("查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"受理"}},[a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-check",round:""},on:{click:function(a){t.set1(e.$index,e.row)}}})],1),t._v(" "),a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"不受理"}},[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",round:""},on:{click:function(a){t.set2(e.$index,e.row)}}})],1)]}}])})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"已受理",name:"table1"}},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","font-size":"14px"},attrs:{data:t.tableData1,fit:!0},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-row",[a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"国内发明专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.inlandnop)+"/"+t._s(e.row.inlandapplyfunds))])]),t._v(" "),a("el-form-item",{attrs:{label:"国外发明专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.foreignnop)+"/"+t._s(e.row.foreignapplyfunds))])]),t._v(" "),a("el-form-item",{attrs:{label:"实用新型专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.practicalnewnop)+"/"+t._s(e.row.practicalnewapplyfunds))])]),t._v(" "),a("el-form-item",{attrs:{label:"外观设计专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.apdesignnop)+"/"+t._s(e.row.apdesignfunds))])])],1),t._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"软件著作权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.softcopyrightcount)+"/"+t._s(e.row.softcopyrightfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"版权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.copyrightcount)+"/"+t._s(e.row.copyrightfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"商标专利权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.logolicensingcount)+"/"+t._s(e.row.logolicensingfunds))])])],1),t._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"集成电路布图权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.iclayoutcount)+"/"+t._s(e.row.iclayoutfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"植物新品种权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.newplantcount)+"/"+t._s(e.row.newplantfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"新药证书数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.newmedicationcount)+"/"+t._s(e.row.newmedicationfunds))])])],1)],1)],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,sortable:"",width:"150px",fixed:"left",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"industrycategory",label:"行业类别",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"authorizeyear",label:"知识产权授权年度",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactperson",label:"项目联系人",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactphone",label:"项目联系人电话",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactemail",label:"项目联系人邮箱",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"memo",label:"备注",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",align:"center",label:"状态",formatter:t.formatter,resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"success",size:"medium"}},[t._v("已受理")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"currentnode",label:"当前节点",align:"center",formatter:t.formatter,resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},["0"===e.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("专家评审")]):t._e(),t._v(" "),"1"===e.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("立项")]):t._e(),t._v(" "),"2"===e.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("签订合同")]):t._e(),t._v(" "),"3"===e.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("中期检查")]):t._e(),t._v(" "),"4"===e.row.currentnode?a("el-tag",{attrs:{type:"primary",size:"medium"}},[t._v("验收")]):t._e(),t._v(" "),"5"===e.row.currentnode?a("el-tag",{attrs:{type:"success",size:"medium"}},[t._v("验收通过")]):t._e(),t._v(" "),"6"===e.row.currentnode?a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v("验收不通过")]):t._e()],1)])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"项目详情",align:"center",resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.check(e.$index,e.row)}}},[t._v("查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"节点详情",align:"center",resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("管理")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"取消通过审核"}},[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",round:""},on:{click:function(a){t.set2(e.$index,e.row)}}})],1)]}}])})],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"不受理",name:"table2"}},[a("el-switch",{attrs:{"active-text":"批量操作"},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),t._v("    \n                "),t.value3?a("el-button",{attrs:{type:"danger",size:"mini",round:""},on:{click:function(e){t.mutipleDelete(t.multipleSelection1)}}},[t._v("删除")]):t._e(),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","font-size":"14px"},attrs:{data:t.tableData2,fit:!0},on:{"selection-change":t.handleSelectionChange1}},[t.value3?a("el-table-column",{attrs:{type:"selection",width:"55"}}):t._e(),t._v(" "),a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-row",[a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"国内发明专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.inlandnop)+"/"+t._s(e.row.inlandapplyfunds))])]),t._v(" "),a("el-form-item",{attrs:{label:"国外发明专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.foreignnop)+"/"+t._s(e.row.foreignapplyfunds))])]),t._v(" "),a("el-form-item",{attrs:{label:"实用新型专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.practicalnewnop)+"/"+t._s(e.row.practicalnewapplyfunds))])]),t._v(" "),a("el-form-item",{attrs:{label:"外观设计专利数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.apdesignnop)+"/"+t._s(e.row.apdesignfunds))])])],1),t._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"软件著作权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.softcopyrightcount)+"/"+t._s(e.row.softcopyrightfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"版权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.copyrightcount)+"/"+t._s(e.row.copyrightfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"商标专利权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.logolicensingcount)+"/"+t._s(e.row.logolicensingfunds))])])],1),t._v(" "),a("el-col",{attrs:{span:8,align:"center"}},[a("el-form-item",{attrs:{label:"集成电路布图权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.iclayoutcount)+"/"+t._s(e.row.iclayoutfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"植物新品种权数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.newplantcount)+"/"+t._s(e.row.newplantfunds))])]),a("br"),t._v(" "),a("el-form-item",{attrs:{label:"新药证书数量/申请补助金额"}},[a("span",[t._v(t._s(e.row.newmedicationcount)+"/"+t._s(e.row.newmedicationfunds))])])],1)],1)],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"projectname",label:"项目名称",resizable:!1,sortable:"",width:"150px",fixed:"left",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"industrycategory",label:"行业类别",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"authorizeyear",label:"知识产权授权年度",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactperson",label:"项目联系人",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactphone",label:"项目联系人电话",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contactemail",label:"项目联系人邮箱",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"memo",label:"备注",resizable:!1,width:"150px",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",align:"center",label:"状态",formatter:t.formatter,resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"danger",size:"medium"}},[t._v("不受理")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"currentnode",label:"当前节点",align:"center",formatter:t.formatter,resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:"info",size:"medium"}},[t._v("不审核")])],1)])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"项目详情",align:"center",resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.check(e.$index,e.row)}}},[t._v("查看")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",resizable:!1},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"删除"}},[a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-close",round:""},on:{click:function(a){t.Delete(e.$index,e.row)}}})],1),t._v(" "),a("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"撤销至未审核"}},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-back",round:""},on:{click:function(a){t.set0(e.$index,e.row)}}})],1)]}}])})],1)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"节点管理",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-dialog",{attrs:{width:"30%",title:"验收是否通过？",visible:t.innerVisible,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""},on:{"update:visible":function(e){t.innerVisible=e}}},[a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.pass}},[t._v("通过")]),t._v("  \n                "),a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.nopass}},[t._v("不通过")])],1),t._v(" "),a("el-dialog",{attrs:{width:"30%",title:"请填写合同编号及拨付资金",visible:t.innerVisible1,"close-on-click-modal":!1,"show-close":!1,"append-to-body":""},on:{"update:visible":function(e){t.innerVisible1=e}}},[a("el-form",[a("el-form-item",{attrs:{label:"合同编号"}},[a("el-input",{attrs:{placeholder:"合同编号"},model:{value:t.form.contractno,callback:function(e){t.$set(t.form,"contractno",e)},expression:"form.contractno"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"拨付资金"}},[a("el-input",{attrs:{placeholder:"拨付资金"},model:{value:t.form.assignedfunds,callback:function(e){t.$set(t.form,"assignedfunds",e)},expression:"form.assignedfunds"}})],1)],1),t._v(" "),a("el-button",{staticStyle:{"margin-top":"12px"},on:{click:t.submit}},[t._v("确定")]),t._v("  \n            ")],1),t._v(" "),a("el-steps",{staticStyle:{height:"500px"},attrs:{active:t.active,direction:"vertical","finish-status":"success"}},[a("el-step",{attrs:{title:"专家评审"}}),t._v(" "),a("el-step",{attrs:{title:"立项"}}),t._v(" "),a("el-step",{attrs:{title:"签订合同"}}),t._v(" "),a("el-step",{attrs:{title:"中期检查"}}),t._v(" "),5!=t.activeStatus&6!=t.activeStatus?a("el-step",{attrs:{title:"验收"}}):t._e(),t._v(" "),5===t.activeStatus?a("el-step",{attrs:{title:"验收通过"}}):t._e(),t._v(" "),6===t.activeStatus?a("el-step",{attrs:{title:"验收不通过",status:"error"}}):t._e()],1),t._v(" "),a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:t.buttonValue2},on:{click:t.back}},[t._v("上一步")]),t._v("  \n            "),a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{disabled:t.buttonValue1},on:{click:t.next}},[t._v("下一步")]),t._v(" "),a("el-button",{staticStyle:{"margin-top":"12px",float:"right"},on:{click:t.confirm}},[t._v("确定")])],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(l,n,!1,function(t){a("+lQc")},"data-v-3ab087db",null);e.default=i.exports}});