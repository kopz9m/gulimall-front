webpackJsonp([24,56],{"8L6u":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,orderId:"",orderSn:"",consignee:"",consigneeTel:"",deliveryAddress:"",orderComment:"",paymentWay:"",taskStatus:"",orderBody:"",trackingNo:"",createTime:"",wareId:"",taskComment:""},dataRule:{orderId:[{required:!0,message:"order_id不能为空",trigger:"blur"}],orderSn:[{required:!0,message:"order_sn不能为空",trigger:"blur"}],consignee:[{required:!0,message:"收货人不能为空",trigger:"blur"}],consigneeTel:[{required:!0,message:"收货人电话不能为空",trigger:"blur"}],deliveryAddress:[{required:!0,message:"配送地址不能为空",trigger:"blur"}],orderComment:[{required:!0,message:"订单备注不能为空",trigger:"blur"}],paymentWay:[{required:!0,message:"付款方式【 1:在线付款 2:货到付款】不能为空",trigger:"blur"}],taskStatus:[{required:!0,message:"任务状态不能为空",trigger:"blur"}],orderBody:[{required:!0,message:"订单描述不能为空",trigger:"blur"}],trackingNo:[{required:!0,message:"物流单号不能为空",trigger:"blur"}],createTime:[{required:!0,message:"create_time不能为空",trigger:"blur"}],wareId:[{required:!0,message:"仓库id不能为空",trigger:"blur"}],taskComment:[{required:!0,message:"工作单备注不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/ware/wareordertask/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.orderId=a.wareOrderTask.orderId,t.dataForm.orderSn=a.wareOrderTask.orderSn,t.dataForm.consignee=a.wareOrderTask.consignee,t.dataForm.consigneeTel=a.wareOrderTask.consigneeTel,t.dataForm.deliveryAddress=a.wareOrderTask.deliveryAddress,t.dataForm.orderComment=a.wareOrderTask.orderComment,t.dataForm.paymentWay=a.wareOrderTask.paymentWay,t.dataForm.taskStatus=a.wareOrderTask.taskStatus,t.dataForm.orderBody=a.wareOrderTask.orderBody,t.dataForm.trackingNo=a.wareOrderTask.trackingNo,t.dataForm.createTime=a.wareOrderTask.createTime,t.dataForm.wareId=a.wareOrderTask.wareId,t.dataForm.taskComment=a.wareOrderTask.taskComment)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/ware/wareordertask/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,orderId:e.dataForm.orderId,orderSn:e.dataForm.orderSn,consignee:e.dataForm.consignee,consigneeTel:e.dataForm.consigneeTel,deliveryAddress:e.dataForm.deliveryAddress,orderComment:e.dataForm.orderComment,paymentWay:e.dataForm.paymentWay,taskStatus:e.dataForm.taskStatus,orderBody:e.dataForm.orderBody,trackingNo:e.dataForm.trackingNo,createTime:e.dataForm.createTime,wareId:e.dataForm.wareId,taskComment:e.dataForm.taskComment})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"order_id",prop:"orderId"}},[a("el-input",{attrs:{placeholder:"order_id"},model:{value:e.dataForm.orderId,callback:function(t){e.$set(e.dataForm,"orderId",t)},expression:"dataForm.orderId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"order_sn",prop:"orderSn"}},[a("el-input",{attrs:{placeholder:"order_sn"},model:{value:e.dataForm.orderSn,callback:function(t){e.$set(e.dataForm,"orderSn",t)},expression:"dataForm.orderSn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货人",prop:"consignee"}},[a("el-input",{attrs:{placeholder:"收货人"},model:{value:e.dataForm.consignee,callback:function(t){e.$set(e.dataForm,"consignee",t)},expression:"dataForm.consignee"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货人电话",prop:"consigneeTel"}},[a("el-input",{attrs:{placeholder:"收货人电话"},model:{value:e.dataForm.consigneeTel,callback:function(t){e.$set(e.dataForm,"consigneeTel",t)},expression:"dataForm.consigneeTel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"配送地址",prop:"deliveryAddress"}},[a("el-input",{attrs:{placeholder:"配送地址"},model:{value:e.dataForm.deliveryAddress,callback:function(t){e.$set(e.dataForm,"deliveryAddress",t)},expression:"dataForm.deliveryAddress"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单备注",prop:"orderComment"}},[a("el-input",{attrs:{placeholder:"订单备注"},model:{value:e.dataForm.orderComment,callback:function(t){e.$set(e.dataForm,"orderComment",t)},expression:"dataForm.orderComment"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"付款方式【 1:在线付款 2:货到付款】",prop:"paymentWay"}},[a("el-input",{attrs:{placeholder:"付款方式【 1:在线付款 2:货到付款】"},model:{value:e.dataForm.paymentWay,callback:function(t){e.$set(e.dataForm,"paymentWay",t)},expression:"dataForm.paymentWay"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务状态",prop:"taskStatus"}},[a("el-input",{attrs:{placeholder:"任务状态"},model:{value:e.dataForm.taskStatus,callback:function(t){e.$set(e.dataForm,"taskStatus",t)},expression:"dataForm.taskStatus"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单描述",prop:"orderBody"}},[a("el-input",{attrs:{placeholder:"订单描述"},model:{value:e.dataForm.orderBody,callback:function(t){e.$set(e.dataForm,"orderBody",t)},expression:"dataForm.orderBody"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"物流单号",prop:"trackingNo"}},[a("el-input",{attrs:{placeholder:"物流单号"},model:{value:e.dataForm.trackingNo,callback:function(t){e.$set(e.dataForm,"trackingNo",t)},expression:"dataForm.trackingNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"create_time",prop:"createTime"}},[a("el-input",{attrs:{placeholder:"create_time"},model:{value:e.dataForm.createTime,callback:function(t){e.$set(e.dataForm,"createTime",t)},expression:"dataForm.createTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"仓库id",prop:"wareId"}},[a("el-input",{attrs:{placeholder:"仓库id"},model:{value:e.dataForm.wareId,callback:function(t){e.$set(e.dataForm,"wareId",t)},expression:"dataForm.wareId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"工作单备注",prop:"taskComment"}},[a("el-input",{attrs:{placeholder:"工作单备注"},model:{value:e.dataForm.taskComment,callback:function(t){e.$set(e.dataForm,"taskComment",t)},expression:"dataForm.taskComment"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},n=a("VU/8")(r,o,!1,null,null,null);t.default=n.exports},SOSC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("8L6u").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/ware/wareordertask/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,a=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/ware/wareordertask/delete"),method:"post",data:t.$http.adornData(a,!1)}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("ware:wareordertask:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("ware:wareordertask:delete")?a("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderId","header-align":"center",align:"center",label:"order_id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderSn","header-align":"center",align:"center",label:"order_sn"}}),e._v(" "),a("el-table-column",{attrs:{prop:"consignee","header-align":"center",align:"center",label:"收货人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"consigneeTel","header-align":"center",align:"center",label:"收货人电话"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deliveryAddress","header-align":"center",align:"center",label:"配送地址"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderComment","header-align":"center",align:"center",label:"订单备注"}}),e._v(" "),a("el-table-column",{attrs:{prop:"paymentWay","header-align":"center",align:"center",label:"付款方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.payment?a("el-tag",[e._v("在线付款")]):e._e(),e._v(" "),2==t.row.payment?a("el-tag",[e._v("货到付款")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"taskStatus","header-align":"center",align:"center",label:"任务状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderBody","header-align":"center",align:"center",label:"订单描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"trackingNo","header-align":"center",align:"center",label:"物流单号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"create_time"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wareId","header-align":"center",align:"center",label:"仓库id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"taskComment","header-align":"center",align:"center",label:"工作单备注"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},n=a("VU/8")(r,o,!1,null,null,null);t.default=n.exports}});