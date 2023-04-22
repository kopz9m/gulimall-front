webpackJsonp([71],{"4hFf":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={data:function(){return{visible:!1,dataForm:{id:0,flashOrderOvertime:"",normalOrderOvertime:"",confirmOvertime:"",finishOvertime:"",commentOvertime:"",memberLevel:""},dataRule:{flashOrderOvertime:[{required:!0,message:"秒杀订单超时关闭时间(分)不能为空",trigger:"blur"}],normalOrderOvertime:[{required:!0,message:"正常订单超时时间(分)不能为空",trigger:"blur"}],confirmOvertime:[{required:!0,message:"发货后自动确认收货时间（天）不能为空",trigger:"blur"}],finishOvertime:[{required:!0,message:"自动完成交易时间，不能申请退货（天）不能为空",trigger:"blur"}],commentOvertime:[{required:!0,message:"订单完成后自动好评时间（天）不能为空",trigger:"blur"}],memberLevel:[{required:!0,message:"会员等级【0-不限会员等级，全部通用；其他-对应的其他会员等级】不能为空",trigger:"blur"}]}}},methods:{init:function(e){var r=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){r.$refs.dataForm.resetFields(),r.dataForm.id&&r.$http({url:r.$http.adornUrl("/order/ordersetting/info/"+r.dataForm.id),method:"get",params:r.$http.adornParams()}).then(function(e){var t=e.data;t&&0===t.code&&(r.dataForm.flashOrderOvertime=t.orderSetting.flashOrderOvertime,r.dataForm.normalOrderOvertime=t.orderSetting.normalOrderOvertime,r.dataForm.confirmOvertime=t.orderSetting.confirmOvertime,r.dataForm.finishOvertime=t.orderSetting.finishOvertime,r.dataForm.commentOvertime=t.orderSetting.commentOvertime,r.dataForm.memberLevel=t.orderSetting.memberLevel)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(r){r&&e.$http({url:e.$http.adornUrl("/order/ordersetting/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,flashOrderOvertime:e.dataForm.flashOrderOvertime,normalOrderOvertime:e.dataForm.normalOrderOvertime,confirmOvertime:e.dataForm.confirmOvertime,finishOvertime:e.dataForm.finishOvertime,commentOvertime:e.dataForm.commentOvertime,memberLevel:e.dataForm.memberLevel})}).then(function(r){var t=r.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})})}}},i={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(r){e.visible=r}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"秒杀订单超时关闭时间(分)",prop:"flashOrderOvertime"}},[t("el-input",{attrs:{placeholder:"秒杀订单超时关闭时间(分)"},model:{value:e.dataForm.flashOrderOvertime,callback:function(r){e.$set(e.dataForm,"flashOrderOvertime",r)},expression:"dataForm.flashOrderOvertime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"正常订单超时时间(分)",prop:"normalOrderOvertime"}},[t("el-input",{attrs:{placeholder:"正常订单超时时间(分)"},model:{value:e.dataForm.normalOrderOvertime,callback:function(r){e.$set(e.dataForm,"normalOrderOvertime",r)},expression:"dataForm.normalOrderOvertime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"发货后自动确认收货时间（天）",prop:"confirmOvertime"}},[t("el-input",{attrs:{placeholder:"发货后自动确认收货时间（天）"},model:{value:e.dataForm.confirmOvertime,callback:function(r){e.$set(e.dataForm,"confirmOvertime",r)},expression:"dataForm.confirmOvertime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"自动完成交易时间，不能申请退货（天）",prop:"finishOvertime"}},[t("el-input",{attrs:{placeholder:"自动完成交易时间，不能申请退货（天）"},model:{value:e.dataForm.finishOvertime,callback:function(r){e.$set(e.dataForm,"finishOvertime",r)},expression:"dataForm.finishOvertime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"订单完成后自动好评时间（天）",prop:"commentOvertime"}},[t("el-input",{attrs:{placeholder:"订单完成后自动好评时间（天）"},model:{value:e.dataForm.commentOvertime,callback:function(r){e.$set(e.dataForm,"commentOvertime",r)},expression:"dataForm.commentOvertime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"会员等级【0-不限会员等级，全部通用；其他-对应的其他会员等级】",prop:"memberLevel"}},[t("el-input",{attrs:{placeholder:"会员等级【0-不限会员等级，全部通用；其他-对应的其他会员等级】"},model:{value:e.dataForm.memberLevel,callback:function(r){e.$set(e.dataForm,"memberLevel",r)},expression:"dataForm.memberLevel"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(r){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},m=t("VU/8")(a,i,!1,null,null,null);r.default=m.exports}});