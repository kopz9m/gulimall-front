webpackJsonp([4,12],{HjMj:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={components:{BaseAttr:e("TBtL").default},props:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},r={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",[t("base-attr",{attrs:{attrtype:0}})],1)},staticRenderFns:[]};var l=e("VU/8")(a,r,!1,function(n){e("aNo4")},"data-v-5e6ef5ef",null);t.default=l.exports},OYQj:function(n,t,e){var a=e("iLR3");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("2d47b685",a,!0)},TBtL:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("8i7I"),r=e("Iaca"),l={components:{Category:a.default,AddOrUpdate:r.default},props:{attrtype:{type:Number,default:1}},data:function(){return{catId:0,type:1,dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},activated:function(){this.getDataList()},methods:{treenodeclick:function(n,t,e){3==t.level&&(this.catId=n.catId,this.getDataList())},getAllDataList:function(){this.catId=0,this.getDataList()},getDataList:function(){var n=this;this.dataListLoading=!0;var t=0==this.attrtype?"sale":"base";this.$http({url:this.$http.adornUrl("/product/attr/"+t+"/list/"+this.catId),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var e=t.data;e&&0===e.code?(n.dataList=e.page.list,n.totalPage=e.page.totalCount):(n.dataList=[],n.totalPage=0),n.dataListLoading=!1})},sizeChangeHandle:function(n){this.pageSize=n,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(n){this.pageIndex=n,this.getDataList()},selectionChangeHandle:function(n){this.dataListSelections=n},addOrUpdateHandle:function(n){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(n)})},deleteHandle:function(n){var t=this,e=n?[n]:this.dataListSelections.map(function(n){return n.attrId});this.$confirm("确定对[id="+e.join(",")+"]进行["+(n?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/product/attr/delete"),method:"post",data:t.$http.adornData(e,!1)}).then(function(n){var e=n.data;e&&0===e.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(e.msg)})})}}},i={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[e("category",{on:{"tree-node-click":n.treenodeclick}})],1),n._v(" "),e("el-col",{attrs:{span:18}},[e("div",{staticClass:"mod-config"},[e("el-form",{attrs:{inline:!0,model:n.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&n._k(t.keyCode,"enter",13,t.key,"Enter"))return null;n.getDataList()}}},[e("el-form-item",[e("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:n.dataForm.key,callback:function(t){n.$set(n.dataForm,"key",t)},expression:"dataForm.key"}})],1),n._v(" "),e("el-form-item",[e("el-button",{on:{click:function(t){n.getDataList()}}},[n._v("查询")]),n._v(" "),e("el-button",{attrs:{type:"success"},on:{click:function(t){n.getAllDataList()}}},[n._v("查询全部")]),n._v(" "),n.isAuth("product:attr:save")?e("el-button",{attrs:{type:"primary"},on:{click:function(t){n.addOrUpdateHandle()}}},[n._v("新增")]):n._e(),n._v(" "),n.isAuth("product:attr:delete")?e("el-button",{attrs:{type:"danger",disabled:n.dataListSelections.length<=0},on:{click:function(t){n.deleteHandle()}}},[n._v("批量删除")]):n._e()],1)],1),n._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:n.dataList,border:""},on:{"selection-change":n.selectionChangeHandle}},[e("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),n._v(" "),e("el-table-column",{attrs:{prop:"attrId","header-align":"center",align:"center",label:"id"}}),n._v(" "),e("el-table-column",{attrs:{prop:"attrName","header-align":"center",align:"center",label:"属性名"}}),n._v(" "),1==n.attrtype?e("el-table-column",{attrs:{prop:"searchType","header-align":"center",align:"center",label:"可检索"},scopedSlots:n._u([{key:"default",fn:function(n){return[1==n.row.searchType?e("i",{staticClass:"el-icon-success"}):e("i",{staticClass:"el-icon-error"})]}}])}):n._e(),n._v(" "),e("el-table-column",{attrs:{prop:"valueType","header-align":"center",align:"center",label:"值类型"},scopedSlots:n._u([{key:"default",fn:function(t){return[0==t.row.valueType?e("el-tag",{attrs:{type:"success"}},[n._v("单选")]):e("el-tag",[n._v("多选")])]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"icon","header-align":"center",align:"center",label:"图标"}}),n._v(" "),e("el-table-column",{attrs:{prop:"valueSelect","header-align":"center",align:"center",label:"可选值"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},n._l(t.row.valueSelect.split(";"),function(t,a){return e("span",{key:a},[n._v(n._s(t)),e("br")])})),n._v(" "),e("el-tag",[n._v(n._s(t.row.valueSelect.split(";")[0]+" ..."))])],1)]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"enable","header-align":"center",align:"center",label:"启用"},scopedSlots:n._u([{key:"default",fn:function(n){return[1==n.row.enable?e("i",{staticClass:"el-icon-success"}):e("i",{staticClass:"el-icon-error"})]}}])}),n._v(" "),e("el-table-column",{attrs:{prop:"catelogName","header-align":"center",align:"center",label:"所属分类"}}),n._v(" "),1==n.attrtype?e("el-table-column",{attrs:{prop:"groupName","header-align":"center",align:"center",label:"所属分组"}}):n._e(),n._v(" "),1==n.attrtype?e("el-table-column",{attrs:{prop:"showDesc","header-align":"center",align:"center",label:"快速展示"},scopedSlots:n._u([{key:"default",fn:function(n){return[1==n.row.showDesc?e("i",{staticClass:"el-icon-success"}):e("i",{staticClass:"el-icon-error"})]}}])}):n._e(),n._v(" "),e("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){n.addOrUpdateHandle(t.row.attrId)}}},[n._v("修改")]),n._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){n.deleteHandle(t.row.attrId)}}},[n._v("删除")])]}}])})],1),n._v(" "),e("el-pagination",{attrs:{"current-page":n.pageIndex,"page-sizes":[10,20,50,100],"page-size":n.pageSize,total:n.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":n.sizeChangeHandle,"current-change":n.currentChangeHandle}}),n._v(" "),n.addOrUpdateVisible?e("add-or-update",{ref:"addOrUpdate",attrs:{type:n.attrtype},on:{refreshDataList:n.getDataList}}):n._e()],1)])],1)},staticRenderFns:[]};var o=e("VU/8")(l,i,!1,function(n){e("OYQj")},"data-v-ecb5db0e",null);t.default=o.exports},aNo4:function(n,t,e){var a=e("tMpW");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("30e0ce38",a,!0)},iLR3:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},tMpW:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});