webpackJsonp([82],{"2tkS":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,skuId:"",fullCount:"",discount:"",price:"",addOther:""},dataRule:{skuId:[{required:!0,message:"spu_id不能为空",trigger:"blur"}],fullCount:[{required:!0,message:"满几件不能为空",trigger:"blur"}],discount:[{required:!0,message:"打几折不能为空",trigger:"blur"}],price:[{required:!0,message:"折后价不能为空",trigger:"blur"}],addOther:[{required:!0,message:"是否叠加其他优惠[0-不可叠加，1-可叠加]不能为空",trigger:"blur"}]}}},methods:{init:function(t){var e=this;this.dataForm.id=t||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/coupon/skuladder/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&0===a.code&&(e.dataForm.skuId=a.skuLadder.skuId,e.dataForm.fullCount=a.skuLadder.fullCount,e.dataForm.discount=a.skuLadder.discount,e.dataForm.price=a.skuLadder.price,e.dataForm.addOther=a.skuLadder.addOther)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/coupon/skuladder/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,skuId:t.dataForm.skuId,fullCount:t.dataForm.fullCount,discount:t.dataForm.discount,price:t.dataForm.price,addOther:t.dataForm.addOther})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"spu_id",prop:"skuId"}},[a("el-input",{attrs:{placeholder:"spu_id"},model:{value:t.dataForm.skuId,callback:function(e){t.$set(t.dataForm,"skuId",e)},expression:"dataForm.skuId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"满几件",prop:"fullCount"}},[a("el-input",{attrs:{placeholder:"满几件"},model:{value:t.dataForm.fullCount,callback:function(e){t.$set(t.dataForm,"fullCount",e)},expression:"dataForm.fullCount"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"打几折",prop:"discount"}},[a("el-input",{attrs:{placeholder:"打几折"},model:{value:t.dataForm.discount,callback:function(e){t.$set(t.dataForm,"discount",e)},expression:"dataForm.discount"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"折后价",prop:"price"}},[a("el-input",{attrs:{placeholder:"折后价"},model:{value:t.dataForm.price,callback:function(e){t.$set(t.dataForm,"price",e)},expression:"dataForm.price"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否叠加其他优惠",prop:"addOther"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.dataForm.addOther,callback:function(e){t.$set(t.dataForm,"addOther",e)},expression:"dataForm.addOther"}},[a("el-option",{attrs:{label:"不可叠加",value:0}}),t._v(" "),a("el-option",{attrs:{label:"不可叠加",value:1}})],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},d=a("VU/8")(r,o,!1,null,null,null);e.default=d.exports}});