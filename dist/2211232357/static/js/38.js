webpackJsonp([38,76],{"4k+D":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:r("KGN2").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/order/order/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(t){var r=t.data;r&&0===r.code?(e.dataList=r.page.list,e.totalPage=r.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var t=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){t.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var t=this,r=e?[e]:this.dataListSelections.map(function(e){return e.id});this.$confirm("确定对[id="+r.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/order/order/delete"),method:"post",data:t.$http.adornData(r,!1)}).then(function(e){var r=e.data;r&&0===r.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.getDataList()}}):t.$message.error(r.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mod-config"},[r("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.getDataList()}}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(t){e.$set(e.dataForm,"key",t)},expression:"dataForm.key"}})],1),e._v(" "),r("el-form-item",[r("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("order:order:save")?r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("order:order:delete")?r("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(t){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[r("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),r("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),e._v(" "),r("el-table-column",{attrs:{prop:"memberId","header-align":"center",align:"center",label:"member_id"}}),e._v(" "),r("el-table-column",{attrs:{prop:"orderSn","header-align":"center",align:"center",label:"订单号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"couponId","header-align":"center",align:"center",label:"使用的优惠券"}}),e._v(" "),r("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"create_time"}}),e._v(" "),r("el-table-column",{attrs:{prop:"memberUsername","header-align":"center",align:"center",label:"用户名"}}),e._v(" "),r("el-table-column",{attrs:{prop:"totalAmount","header-align":"center",align:"center",label:"订单总额"}}),e._v(" "),r("el-table-column",{attrs:{prop:"payAmount","header-align":"center",align:"center",label:"应付总额"}}),e._v(" "),r("el-table-column",{attrs:{prop:"freightAmount","header-align":"center",align:"center",label:"运费金额"}}),e._v(" "),r("el-table-column",{attrs:{prop:"promotionAmount","header-align":"center",align:"center",label:"促销优化金额（促销价、满减、阶梯价）"}}),e._v(" "),r("el-table-column",{attrs:{prop:"integrationAmount","header-align":"center",align:"center",label:"积分抵扣金额"}}),e._v(" "),r("el-table-column",{attrs:{prop:"couponAmount","header-align":"center",align:"center",label:"优惠券抵扣金额"}}),e._v(" "),r("el-table-column",{attrs:{prop:"discountAmount","header-align":"center",align:"center",label:"后台调整订单使用的折扣金额"}}),e._v(" "),r("el-table-column",{attrs:{prop:"payType","header-align":"center",align:"center",label:"支付方式【1->支付宝；2->微信；3->银联； 4->货到付款；】"}}),e._v(" "),r("el-table-column",{attrs:{prop:"sourceType","header-align":"center",align:"center",label:"订单来源[0->PC订单；1->app订单]"}}),e._v(" "),r("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"订单状态【0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单】"}}),e._v(" "),r("el-table-column",{attrs:{prop:"deliveryCompany","header-align":"center",align:"center",label:"物流公司(配送方式)"}}),e._v(" "),r("el-table-column",{attrs:{prop:"deliverySn","header-align":"center",align:"center",label:"物流单号"}}),e._v(" "),r("el-table-column",{attrs:{prop:"autoConfirmDay","header-align":"center",align:"center",label:"自动确认时间（天）"}}),e._v(" "),r("el-table-column",{attrs:{prop:"integration","header-align":"center",align:"center",label:"可以获得的积分"}}),e._v(" "),r("el-table-column",{attrs:{prop:"growth","header-align":"center",align:"center",label:"可以获得的成长值"}}),e._v(" "),r("el-table-column",{attrs:{prop:"billType","header-align":"center",align:"center",label:"发票类型[0->不开发票；1->电子发票；2->纸质发票]"}}),e._v(" "),r("el-table-column",{attrs:{prop:"billHeader","header-align":"center",align:"center",label:"发票抬头"}}),e._v(" "),r("el-table-column",{attrs:{prop:"billContent","header-align":"center",align:"center",label:"发票内容"}}),e._v(" "),r("el-table-column",{attrs:{prop:"billReceiverPhone","header-align":"center",align:"center",label:"收票人电话"}}),e._v(" "),r("el-table-column",{attrs:{prop:"billReceiverEmail","header-align":"center",align:"center",label:"收票人邮箱"}}),e._v(" "),r("el-table-column",{attrs:{prop:"receiverName","header-align":"center",align:"center",label:"收货人姓名"}}),e._v(" "),r("el-table-column",{attrs:{prop:"receiverPhone","header-align":"center",align:"center",label:"收货人电话"}}),e._v(" "),r("el-table-column",{attrs:{prop:"receiverPostCode","header-align":"center",align:"center",label:"收货人邮编"}}),e._v(" "),r("el-table-column",{attrs:{prop:"receiverProvince","header-align":"center",align:"center",label:"省份/直辖市"}}),e._v(" "),r("el-table-column",{attrs:{prop:"receiverCity","header-align":"center",align:"center",label:"城市"}}),e._v(" "),r("el-table-column",{attrs:{prop:"receiverRegion","header-align":"center",align:"center",label:"区"}}),e._v(" "),r("el-table-column",{attrs:{prop:"receiverDetailAddress","header-align":"center",align:"center",label:"详细地址"}}),e._v(" "),r("el-table-column",{attrs:{prop:"note","header-align":"center",align:"center",label:"订单备注"}}),e._v(" "),r("el-table-column",{attrs:{prop:"confirmStatus","header-align":"center",align:"center",label:"确认收货状态[0->未确认；1->已确认]"}}),e._v(" "),r("el-table-column",{attrs:{prop:"deleteStatus","header-align":"center",align:"center",label:"删除状态【0->未删除；1->已删除】"}}),e._v(" "),r("el-table-column",{attrs:{prop:"useIntegration","header-align":"center",align:"center",label:"下单时使用的积分"}}),e._v(" "),r("el-table-column",{attrs:{prop:"paymentTime","header-align":"center",align:"center",label:"支付时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"deliveryTime","header-align":"center",align:"center",label:"发货时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"receiveTime","header-align":"center",align:"center",label:"确认收货时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"commentTime","header-align":"center",align:"center",label:"评价时间"}}),e._v(" "),r("el-table-column",{attrs:{prop:"modifyTime","header-align":"center",align:"center",label:"修改时间"}}),e._v(" "),r("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.addOrUpdateHandle(t.row.id)}}},[e._v("修改")]),e._v(" "),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.deleteHandle(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?r("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},l=r("VU/8")(a,o,!1,null,null,null);t.default=l.exports},KGN2:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{visible:!1,dataForm:{id:0,memberId:"",orderSn:"",couponId:"",createTime:"",memberUsername:"",totalAmount:"",payAmount:"",freightAmount:"",promotionAmount:"",integrationAmount:"",couponAmount:"",discountAmount:"",payType:"",sourceType:"",status:"",deliveryCompany:"",deliverySn:"",autoConfirmDay:"",integration:"",growth:"",billType:"",billHeader:"",billContent:"",billReceiverPhone:"",billReceiverEmail:"",receiverName:"",receiverPhone:"",receiverPostCode:"",receiverProvince:"",receiverCity:"",receiverRegion:"",receiverDetailAddress:"",note:"",confirmStatus:"",deleteStatus:"",useIntegration:"",paymentTime:"",deliveryTime:"",receiveTime:"",commentTime:"",modifyTime:""},dataRule:{memberId:[{required:!0,message:"member_id不能为空",trigger:"blur"}],orderSn:[{required:!0,message:"订单号不能为空",trigger:"blur"}],couponId:[{required:!0,message:"使用的优惠券不能为空",trigger:"blur"}],createTime:[{required:!0,message:"create_time不能为空",trigger:"blur"}],memberUsername:[{required:!0,message:"用户名不能为空",trigger:"blur"}],totalAmount:[{required:!0,message:"订单总额不能为空",trigger:"blur"}],payAmount:[{required:!0,message:"应付总额不能为空",trigger:"blur"}],freightAmount:[{required:!0,message:"运费金额不能为空",trigger:"blur"}],promotionAmount:[{required:!0,message:"促销优化金额（促销价、满减、阶梯价）不能为空",trigger:"blur"}],integrationAmount:[{required:!0,message:"积分抵扣金额不能为空",trigger:"blur"}],couponAmount:[{required:!0,message:"优惠券抵扣金额不能为空",trigger:"blur"}],discountAmount:[{required:!0,message:"后台调整订单使用的折扣金额不能为空",trigger:"blur"}],payType:[{required:!0,message:"支付方式【1->支付宝；2->微信；3->银联； 4->货到付款；】不能为空",trigger:"blur"}],sourceType:[{required:!0,message:"订单来源[0->PC订单；1->app订单]不能为空",trigger:"blur"}],status:[{required:!0,message:"订单状态【0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单】不能为空",trigger:"blur"}],deliveryCompany:[{required:!0,message:"物流公司(配送方式)不能为空",trigger:"blur"}],deliverySn:[{required:!0,message:"物流单号不能为空",trigger:"blur"}],autoConfirmDay:[{required:!0,message:"自动确认时间（天）不能为空",trigger:"blur"}],integration:[{required:!0,message:"可以获得的积分不能为空",trigger:"blur"}],growth:[{required:!0,message:"可以获得的成长值不能为空",trigger:"blur"}],billType:[{required:!0,message:"发票类型[0->不开发票；1->电子发票；2->纸质发票]不能为空",trigger:"blur"}],billHeader:[{required:!0,message:"发票抬头不能为空",trigger:"blur"}],billContent:[{required:!0,message:"发票内容不能为空",trigger:"blur"}],billReceiverPhone:[{required:!0,message:"收票人电话不能为空",trigger:"blur"}],billReceiverEmail:[{required:!0,message:"收票人邮箱不能为空",trigger:"blur"}],receiverName:[{required:!0,message:"收货人姓名不能为空",trigger:"blur"}],receiverPhone:[{required:!0,message:"收货人电话不能为空",trigger:"blur"}],receiverPostCode:[{required:!0,message:"收货人邮编不能为空",trigger:"blur"}],receiverProvince:[{required:!0,message:"省份/直辖市不能为空",trigger:"blur"}],receiverCity:[{required:!0,message:"城市不能为空",trigger:"blur"}],receiverRegion:[{required:!0,message:"区不能为空",trigger:"blur"}],receiverDetailAddress:[{required:!0,message:"详细地址不能为空",trigger:"blur"}],note:[{required:!0,message:"订单备注不能为空",trigger:"blur"}],confirmStatus:[{required:!0,message:"确认收货状态[0->未确认；1->已确认]不能为空",trigger:"blur"}],deleteStatus:[{required:!0,message:"删除状态【0->未删除；1->已删除】不能为空",trigger:"blur"}],useIntegration:[{required:!0,message:"下单时使用的积分不能为空",trigger:"blur"}],paymentTime:[{required:!0,message:"支付时间不能为空",trigger:"blur"}],deliveryTime:[{required:!0,message:"发货时间不能为空",trigger:"blur"}],receiveTime:[{required:!0,message:"确认收货时间不能为空",trigger:"blur"}],commentTime:[{required:!0,message:"评价时间不能为空",trigger:"blur"}],modifyTime:[{required:!0,message:"修改时间不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/order/order/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var r=e.data;r&&0===r.code&&(t.dataForm.memberId=r.order.memberId,t.dataForm.orderSn=r.order.orderSn,t.dataForm.couponId=r.order.couponId,t.dataForm.createTime=r.order.createTime,t.dataForm.memberUsername=r.order.memberUsername,t.dataForm.totalAmount=r.order.totalAmount,t.dataForm.payAmount=r.order.payAmount,t.dataForm.freightAmount=r.order.freightAmount,t.dataForm.promotionAmount=r.order.promotionAmount,t.dataForm.integrationAmount=r.order.integrationAmount,t.dataForm.couponAmount=r.order.couponAmount,t.dataForm.discountAmount=r.order.discountAmount,t.dataForm.payType=r.order.payType,t.dataForm.sourceType=r.order.sourceType,t.dataForm.status=r.order.status,t.dataForm.deliveryCompany=r.order.deliveryCompany,t.dataForm.deliverySn=r.order.deliverySn,t.dataForm.autoConfirmDay=r.order.autoConfirmDay,t.dataForm.integration=r.order.integration,t.dataForm.growth=r.order.growth,t.dataForm.billType=r.order.billType,t.dataForm.billHeader=r.order.billHeader,t.dataForm.billContent=r.order.billContent,t.dataForm.billReceiverPhone=r.order.billReceiverPhone,t.dataForm.billReceiverEmail=r.order.billReceiverEmail,t.dataForm.receiverName=r.order.receiverName,t.dataForm.receiverPhone=r.order.receiverPhone,t.dataForm.receiverPostCode=r.order.receiverPostCode,t.dataForm.receiverProvince=r.order.receiverProvince,t.dataForm.receiverCity=r.order.receiverCity,t.dataForm.receiverRegion=r.order.receiverRegion,t.dataForm.receiverDetailAddress=r.order.receiverDetailAddress,t.dataForm.note=r.order.note,t.dataForm.confirmStatus=r.order.confirmStatus,t.dataForm.deleteStatus=r.order.deleteStatus,t.dataForm.useIntegration=r.order.useIntegration,t.dataForm.paymentTime=r.order.paymentTime,t.dataForm.deliveryTime=r.order.deliveryTime,t.dataForm.receiveTime=r.order.receiveTime,t.dataForm.commentTime=r.order.commentTime,t.dataForm.modifyTime=r.order.modifyTime)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/order/order/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,memberId:e.dataForm.memberId,orderSn:e.dataForm.orderSn,couponId:e.dataForm.couponId,createTime:e.dataForm.createTime,memberUsername:e.dataForm.memberUsername,totalAmount:e.dataForm.totalAmount,payAmount:e.dataForm.payAmount,freightAmount:e.dataForm.freightAmount,promotionAmount:e.dataForm.promotionAmount,integrationAmount:e.dataForm.integrationAmount,couponAmount:e.dataForm.couponAmount,discountAmount:e.dataForm.discountAmount,payType:e.dataForm.payType,sourceType:e.dataForm.sourceType,status:e.dataForm.status,deliveryCompany:e.dataForm.deliveryCompany,deliverySn:e.dataForm.deliverySn,autoConfirmDay:e.dataForm.autoConfirmDay,integration:e.dataForm.integration,growth:e.dataForm.growth,billType:e.dataForm.billType,billHeader:e.dataForm.billHeader,billContent:e.dataForm.billContent,billReceiverPhone:e.dataForm.billReceiverPhone,billReceiverEmail:e.dataForm.billReceiverEmail,receiverName:e.dataForm.receiverName,receiverPhone:e.dataForm.receiverPhone,receiverPostCode:e.dataForm.receiverPostCode,receiverProvince:e.dataForm.receiverProvince,receiverCity:e.dataForm.receiverCity,receiverRegion:e.dataForm.receiverRegion,receiverDetailAddress:e.dataForm.receiverDetailAddress,note:e.dataForm.note,confirmStatus:e.dataForm.confirmStatus,deleteStatus:e.dataForm.deleteStatus,useIntegration:e.dataForm.useIntegration,paymentTime:e.dataForm.paymentTime,deliveryTime:e.dataForm.deliveryTime,receiveTime:e.dataForm.receiveTime,commentTime:e.dataForm.commentTime,modifyTime:e.dataForm.modifyTime})}).then(function(t){var r=t.data;r&&0===r.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(r.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[r("el-form-item",{attrs:{label:"member_id",prop:"memberId"}},[r("el-input",{attrs:{placeholder:"member_id"},model:{value:e.dataForm.memberId,callback:function(t){e.$set(e.dataForm,"memberId",t)},expression:"dataForm.memberId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单号",prop:"orderSn"}},[r("el-input",{attrs:{placeholder:"订单号"},model:{value:e.dataForm.orderSn,callback:function(t){e.$set(e.dataForm,"orderSn",t)},expression:"dataForm.orderSn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"使用的优惠券",prop:"couponId"}},[r("el-input",{attrs:{placeholder:"使用的优惠券"},model:{value:e.dataForm.couponId,callback:function(t){e.$set(e.dataForm,"couponId",t)},expression:"dataForm.couponId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"create_time",prop:"createTime"}},[r("el-input",{attrs:{placeholder:"create_time"},model:{value:e.dataForm.createTime,callback:function(t){e.$set(e.dataForm,"createTime",t)},expression:"dataForm.createTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户名",prop:"memberUsername"}},[r("el-input",{attrs:{placeholder:"用户名"},model:{value:e.dataForm.memberUsername,callback:function(t){e.$set(e.dataForm,"memberUsername",t)},expression:"dataForm.memberUsername"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单总额",prop:"totalAmount"}},[r("el-input",{attrs:{placeholder:"订单总额"},model:{value:e.dataForm.totalAmount,callback:function(t){e.$set(e.dataForm,"totalAmount",t)},expression:"dataForm.totalAmount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"应付总额",prop:"payAmount"}},[r("el-input",{attrs:{placeholder:"应付总额"},model:{value:e.dataForm.payAmount,callback:function(t){e.$set(e.dataForm,"payAmount",t)},expression:"dataForm.payAmount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"运费金额",prop:"freightAmount"}},[r("el-input",{attrs:{placeholder:"运费金额"},model:{value:e.dataForm.freightAmount,callback:function(t){e.$set(e.dataForm,"freightAmount",t)},expression:"dataForm.freightAmount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"促销优化金额（促销价、满减、阶梯价）",prop:"promotionAmount"}},[r("el-input",{attrs:{placeholder:"促销优化金额（促销价、满减、阶梯价）"},model:{value:e.dataForm.promotionAmount,callback:function(t){e.$set(e.dataForm,"promotionAmount",t)},expression:"dataForm.promotionAmount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"积分抵扣金额",prop:"integrationAmount"}},[r("el-input",{attrs:{placeholder:"积分抵扣金额"},model:{value:e.dataForm.integrationAmount,callback:function(t){e.$set(e.dataForm,"integrationAmount",t)},expression:"dataForm.integrationAmount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"优惠券抵扣金额",prop:"couponAmount"}},[r("el-input",{attrs:{placeholder:"优惠券抵扣金额"},model:{value:e.dataForm.couponAmount,callback:function(t){e.$set(e.dataForm,"couponAmount",t)},expression:"dataForm.couponAmount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"后台调整订单使用的折扣金额",prop:"discountAmount"}},[r("el-input",{attrs:{placeholder:"后台调整订单使用的折扣金额"},model:{value:e.dataForm.discountAmount,callback:function(t){e.$set(e.dataForm,"discountAmount",t)},expression:"dataForm.discountAmount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"支付方式【1->支付宝；2->微信；3->银联； 4->货到付款；】",prop:"payType"}},[r("el-input",{attrs:{placeholder:"支付方式【1->支付宝；2->微信；3->银联； 4->货到付款；】"},model:{value:e.dataForm.payType,callback:function(t){e.$set(e.dataForm,"payType",t)},expression:"dataForm.payType"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单来源[0->PC订单；1->app订单]",prop:"sourceType"}},[r("el-input",{attrs:{placeholder:"订单来源[0->PC订单；1->app订单]"},model:{value:e.dataForm.sourceType,callback:function(t){e.$set(e.dataForm,"sourceType",t)},expression:"dataForm.sourceType"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单状态【0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单】",prop:"status"}},[r("el-input",{attrs:{placeholder:"订单状态【0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单】"},model:{value:e.dataForm.status,callback:function(t){e.$set(e.dataForm,"status",t)},expression:"dataForm.status"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"物流公司(配送方式)",prop:"deliveryCompany"}},[r("el-input",{attrs:{placeholder:"物流公司(配送方式)"},model:{value:e.dataForm.deliveryCompany,callback:function(t){e.$set(e.dataForm,"deliveryCompany",t)},expression:"dataForm.deliveryCompany"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"物流单号",prop:"deliverySn"}},[r("el-input",{attrs:{placeholder:"物流单号"},model:{value:e.dataForm.deliverySn,callback:function(t){e.$set(e.dataForm,"deliverySn",t)},expression:"dataForm.deliverySn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"自动确认时间（天）",prop:"autoConfirmDay"}},[r("el-input",{attrs:{placeholder:"自动确认时间（天）"},model:{value:e.dataForm.autoConfirmDay,callback:function(t){e.$set(e.dataForm,"autoConfirmDay",t)},expression:"dataForm.autoConfirmDay"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"可以获得的积分",prop:"integration"}},[r("el-input",{attrs:{placeholder:"可以获得的积分"},model:{value:e.dataForm.integration,callback:function(t){e.$set(e.dataForm,"integration",t)},expression:"dataForm.integration"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"可以获得的成长值",prop:"growth"}},[r("el-input",{attrs:{placeholder:"可以获得的成长值"},model:{value:e.dataForm.growth,callback:function(t){e.$set(e.dataForm,"growth",t)},expression:"dataForm.growth"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"发票类型[0->不开发票；1->电子发票；2->纸质发票]",prop:"billType"}},[r("el-input",{attrs:{placeholder:"发票类型[0->不开发票；1->电子发票；2->纸质发票]"},model:{value:e.dataForm.billType,callback:function(t){e.$set(e.dataForm,"billType",t)},expression:"dataForm.billType"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"发票抬头",prop:"billHeader"}},[r("el-input",{attrs:{placeholder:"发票抬头"},model:{value:e.dataForm.billHeader,callback:function(t){e.$set(e.dataForm,"billHeader",t)},expression:"dataForm.billHeader"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"发票内容",prop:"billContent"}},[r("el-input",{attrs:{placeholder:"发票内容"},model:{value:e.dataForm.billContent,callback:function(t){e.$set(e.dataForm,"billContent",t)},expression:"dataForm.billContent"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收票人电话",prop:"billReceiverPhone"}},[r("el-input",{attrs:{placeholder:"收票人电话"},model:{value:e.dataForm.billReceiverPhone,callback:function(t){e.$set(e.dataForm,"billReceiverPhone",t)},expression:"dataForm.billReceiverPhone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收票人邮箱",prop:"billReceiverEmail"}},[r("el-input",{attrs:{placeholder:"收票人邮箱"},model:{value:e.dataForm.billReceiverEmail,callback:function(t){e.$set(e.dataForm,"billReceiverEmail",t)},expression:"dataForm.billReceiverEmail"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收货人姓名",prop:"receiverName"}},[r("el-input",{attrs:{placeholder:"收货人姓名"},model:{value:e.dataForm.receiverName,callback:function(t){e.$set(e.dataForm,"receiverName",t)},expression:"dataForm.receiverName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收货人电话",prop:"receiverPhone"}},[r("el-input",{attrs:{placeholder:"收货人电话"},model:{value:e.dataForm.receiverPhone,callback:function(t){e.$set(e.dataForm,"receiverPhone",t)},expression:"dataForm.receiverPhone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"收货人邮编",prop:"receiverPostCode"}},[r("el-input",{attrs:{placeholder:"收货人邮编"},model:{value:e.dataForm.receiverPostCode,callback:function(t){e.$set(e.dataForm,"receiverPostCode",t)},expression:"dataForm.receiverPostCode"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"省份/直辖市",prop:"receiverProvince"}},[r("el-input",{attrs:{placeholder:"省份/直辖市"},model:{value:e.dataForm.receiverProvince,callback:function(t){e.$set(e.dataForm,"receiverProvince",t)},expression:"dataForm.receiverProvince"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"城市",prop:"receiverCity"}},[r("el-input",{attrs:{placeholder:"城市"},model:{value:e.dataForm.receiverCity,callback:function(t){e.$set(e.dataForm,"receiverCity",t)},expression:"dataForm.receiverCity"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"区",prop:"receiverRegion"}},[r("el-input",{attrs:{placeholder:"区"},model:{value:e.dataForm.receiverRegion,callback:function(t){e.$set(e.dataForm,"receiverRegion",t)},expression:"dataForm.receiverRegion"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"详细地址",prop:"receiverDetailAddress"}},[r("el-input",{attrs:{placeholder:"详细地址"},model:{value:e.dataForm.receiverDetailAddress,callback:function(t){e.$set(e.dataForm,"receiverDetailAddress",t)},expression:"dataForm.receiverDetailAddress"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"订单备注",prop:"note"}},[r("el-input",{attrs:{placeholder:"订单备注"},model:{value:e.dataForm.note,callback:function(t){e.$set(e.dataForm,"note",t)},expression:"dataForm.note"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认收货状态[0->未确认；1->已确认]",prop:"confirmStatus"}},[r("el-input",{attrs:{placeholder:"确认收货状态[0->未确认；1->已确认]"},model:{value:e.dataForm.confirmStatus,callback:function(t){e.$set(e.dataForm,"confirmStatus",t)},expression:"dataForm.confirmStatus"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"删除状态【0->未删除；1->已删除】",prop:"deleteStatus"}},[r("el-input",{attrs:{placeholder:"删除状态【0->未删除；1->已删除】"},model:{value:e.dataForm.deleteStatus,callback:function(t){e.$set(e.dataForm,"deleteStatus",t)},expression:"dataForm.deleteStatus"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"下单时使用的积分",prop:"useIntegration"}},[r("el-input",{attrs:{placeholder:"下单时使用的积分"},model:{value:e.dataForm.useIntegration,callback:function(t){e.$set(e.dataForm,"useIntegration",t)},expression:"dataForm.useIntegration"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"支付时间",prop:"paymentTime"}},[r("el-input",{attrs:{placeholder:"支付时间"},model:{value:e.dataForm.paymentTime,callback:function(t){e.$set(e.dataForm,"paymentTime",t)},expression:"dataForm.paymentTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"发货时间",prop:"deliveryTime"}},[r("el-input",{attrs:{placeholder:"发货时间"},model:{value:e.dataForm.deliveryTime,callback:function(t){e.$set(e.dataForm,"deliveryTime",t)},expression:"dataForm.deliveryTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认收货时间",prop:"receiveTime"}},[r("el-input",{attrs:{placeholder:"确认收货时间"},model:{value:e.dataForm.receiveTime,callback:function(t){e.$set(e.dataForm,"receiveTime",t)},expression:"dataForm.receiveTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"评价时间",prop:"commentTime"}},[r("el-input",{attrs:{placeholder:"评价时间"},model:{value:e.dataForm.commentTime,callback:function(t){e.$set(e.dataForm,"commentTime",t)},expression:"dataForm.commentTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"修改时间",prop:"modifyTime"}},[r("el-input",{attrs:{placeholder:"修改时间"},model:{value:e.dataForm.modifyTime,callback:function(t){e.$set(e.dataForm,"modifyTime",t)},expression:"dataForm.modifyTime"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},l=r("VU/8")(a,o,!1,null,null,null);t.default=l.exports}});