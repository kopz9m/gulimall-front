webpackJsonp([62],{jbja:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-log"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"用户名／用户操作",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""}},[a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",width:"80",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username","header-align":"center",align:"center",label:"用户名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"operation","header-align":"center",align:"center",label:"用户操作"}}),e._v(" "),a("el-table-column",{attrs:{prop:"method","header-align":"center",align:"center",width:"150","show-overflow-tooltip":!0,label:"请求方法"}}),e._v(" "),a("el-table-column",{attrs:{prop:"params","header-align":"center",align:"center",width:"150","show-overflow-tooltip":!0,label:"请求参数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"time","header-align":"center",align:"center",label:"执行时长(毫秒)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ip","header-align":"center",align:"center",width:"150",label:"IP地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createDate","header-align":"center",align:"center",width:"180",label:"创建时间"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1)},staticRenderFns:[]},l=a("VU/8")({data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,selectionDataList:[]}},created:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/sys/log/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()}}},n,!1,null,null,null);t.default=l.exports}});