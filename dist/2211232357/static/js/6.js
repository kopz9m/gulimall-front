webpackJsonp([6,53,96,97],{TdIe:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("cdA+"),s=n("0xDb"),i={data:function(){return{updatePassowrdVisible:!1}},components:{UpdatePassword:a.default},computed:{navbarLayoutType:{get:function(){return this.$store.state.common.navbarLayoutType}},sidebarFold:{get:function(){return this.$store.state.common.sidebarFold},set:function(t){this.$store.commit("common/updateSidebarFold",t)}},mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(t){this.$store.commit("common/updateMainTabs",t)}},userName:{get:function(){return this.$store.state.user.name}}},methods:{updatePasswordHandle:function(){var t=this;this.updatePassowrdVisible=!0,this.$nextTick(function(){t.$refs.updatePassowrd.init()})},logoutHandle:function(){var t=this;this.$confirm("确定进行[退出]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http({url:t.$http.adornUrl("/sys/logout"),method:"post",data:t.$http.adornData()}).then(function(e){var n=e.data;n&&0===n.code&&(Object(s.a)(),t.$router.push({name:"login"}))})}).catch(function(){})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"site-navbar",class:"site-navbar--"+t.navbarLayoutType},[a("div",{staticClass:"site-navbar__header"},[a("h1",{staticClass:"site-navbar__brand",on:{click:function(e){t.$router.push({name:"home"})}}},[a("a",{staticClass:"site-navbar__brand-lg",attrs:{href:"javascript:;"}},[t._v("谷粒商城后台系统")]),t._v(" "),a("a",{staticClass:"site-navbar__brand-mini",attrs:{href:"javascript:;"}},[t._v("人人")])])]),t._v(" "),a("div",{staticClass:"site-navbar__body clearfix"},[a("el-menu",{staticClass:"site-navbar__menu",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-navbar__switch",attrs:{index:"0"},on:{click:function(e){t.sidebarFold=!t.sidebarFold}}},[a("icon-svg",{attrs:{name:"zhedie"}})],1)],1),t._v(" "),a("el-menu",{staticClass:"site-navbar__menu site-navbar__menu--right",attrs:{mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"},on:{click:function(e){t.$router.push({name:"theme"})}}},[a("template",{slot:"title"},[a("el-badge",{attrs:{value:"new"}},[a("icon-svg",{staticClass:"el-icon-setting",attrs:{name:"shezhi"}})],1)],1)],2),t._v(" "),a("el-menu-item",{staticClass:"site-navbar__avatar",attrs:{index:"3"}},[a("el-dropdown",{attrs:{"show-timeout":0,placement:"bottom"}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{attrs:{src:n("zQrT"),alt:t.userName}}),t._v(t._s(t.userName)+"\n          ")]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(e){t.updatePasswordHandle()}}},[t._v("修改密码")]),t._v(" "),a("el-dropdown-item",{nativeOn:{click:function(e){t.logoutHandle()}}},[t._v("退出")])],1)],1)],1)],1)],1),t._v(" "),t.updatePassowrdVisible?a("update-password",{ref:"updatePassowrd"}):t._e()],1)},staticRenderFns:[]},r=n("VU/8")(i,o,!1,null,null,null);e.default=r.exports},YbVU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("oZaA"),s=n("E4LH"),i={data:function(){return{dynamicMenuRoutes:[]}},components:{SubMenu:a.default},computed:{sidebarLayoutSkin:{get:function(){return this.$store.state.common.sidebarLayoutSkin}},sidebarFold:{get:function(){return this.$store.state.common.sidebarFold}},menuList:{get:function(){return this.$store.state.common.menuList},set:function(t){this.$store.commit("common/updateMenuList",t)}},menuActiveName:{get:function(){return this.$store.state.common.menuActiveName},set:function(t){this.$store.commit("common/updateMenuActiveName",t)}},mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(t){this.$store.commit("common/updateMainTabs",t)}},mainTabsActiveName:{get:function(){return this.$store.state.common.mainTabsActiveName},set:function(t){this.$store.commit("common/updateMainTabsActiveName",t)}}},watch:{$route:"routeHandle"},created:function(){this.menuList=JSON.parse(sessionStorage.getItem("menuList")||"[]"),this.dynamicMenuRoutes=JSON.parse(sessionStorage.getItem("dynamicMenuRoutes")||"[]"),this.routeHandle(this.$route)},methods:{routeHandle:function(t){if(t.meta.isTab){var e=this.mainTabs.filter(function(e){return e.name===t.name})[0];if(!e){if(t.meta.isDynamic&&!(t=this.dynamicMenuRoutes.filter(function(e){return e.name===t.name})[0]))return console.error("未能找到可用标签页!");e={menuId:t.meta.menuId||t.name,name:t.name,title:t.meta.title,type:Object(s.c)(t.meta.iframeUrl)?"iframe":"module",iframeUrl:t.meta.iframeUrl||"",params:t.params,query:t.query},this.mainTabs=this.mainTabs.concat(e)}this.menuActiveName=e.menuId+"",this.mainTabsActiveName=e.name}}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"site-sidebar",class:"site-sidebar--"+t.sidebarLayoutSkin},[n("div",{staticClass:"site-sidebar__inner"},[n("el-menu",{staticClass:"site-sidebar__menu",attrs:{"default-active":t.menuActiveName||"home",collapse:t.sidebarFold,collapseTransition:!1}},[n("el-menu-item",{attrs:{index:"home"},on:{click:function(e){t.$router.push({name:"home"})}}},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"shouye"}}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])],1),t._v(" "),n("el-submenu",{attrs:{index:"demo"}},[n("template",{slot:"title"},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"shoucang"}}),t._v(" "),n("span",[t._v("demo")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"demo-echarts"},on:{click:function(e){t.$router.push({name:"demo-echarts"})}}},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"tubiao"}}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("echarts")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"demo-ueditor"},on:{click:function(e){t.$router.push({name:"demo-ueditor"})}}},[n("icon-svg",{staticClass:"site-sidebar__menu-icon",attrs:{name:"editor"}}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v("ueditor")])],1)],2),t._v(" "),t._l(t.menuList,function(e){return n("sub-menu",{key:e.menuId,attrs:{menu:e,dynamicMenuRoutes:t.dynamicMenuRoutes}})})],2)],1)])},staticRenderFns:[]},r=n("VU/8")(i,o,!1,null,null,null);e.default=r.exports},"sRz/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("TdIe"),s=n("YbVU"),i=n("xzNW"),o={provide:function(){return{refresh:function(){var t=this;this.$store.commit("common/updateContentIsNeedRefresh",!0),this.$nextTick(function(){t.$store.commit("common/updateContentIsNeedRefresh",!1)})}}},data:function(){return{loading:!0}},components:{MainNavbar:a.default,MainSidebar:s.default,MainContent:i.default},computed:{documentClientHeight:{get:function(){return this.$store.state.common.documentClientHeight},set:function(t){this.$store.commit("common/updateDocumentClientHeight",t)}},sidebarFold:{get:function(){return this.$store.state.common.sidebarFold}},userId:{get:function(){return this.$store.state.user.id},set:function(t){this.$store.commit("user/updateId",t)}},userName:{get:function(){return this.$store.state.user.name},set:function(t){this.$store.commit("user/updateName",t)}}},created:function(){this.getUserInfo()},mounted:function(){this.resetDocumentClientHeight()},methods:{resetDocumentClientHeight:function(){var t=this;this.documentClientHeight=document.documentElement.clientHeight,window.onresize=function(){t.documentClientHeight=document.documentElement.clientHeight}},getUserInfo:function(){var t=this;this.$http({url:this.$http.adornUrl("/sys/user/info"),method:"get",params:this.$http.adornParams()}).then(function(e){var n=e.data;n&&0===n.code&&(t.loading=!1,t.userId=n.user.userId,t.userName=n.user.username)})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"site-wrapper",class:{"site-sidebar--fold":t.sidebarFold},attrs:{"element-loading-text":"拼命加载中"}},[t.loading?t._e():[n("main-navbar"),t._v(" "),n("main-sidebar"),t._v(" "),n("div",{staticClass:"site-content__wrapper",style:{"min-height":t.documentClientHeight+"px"}},[t.$store.state.common.contentIsNeedRefresh?t._e():n("main-content")],1)]],2)},staticRenderFns:[]},m=n("VU/8")(o,r,!1,null,null,null);e.default=m.exports},xzNW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("E4LH"),s={inject:["refresh"],data:function(){return{}},computed:{documentClientHeight:{get:function(){return this.$store.state.common.documentClientHeight}},menuActiveName:{get:function(){return this.$store.state.common.menuActiveName},set:function(t){this.$store.commit("common/updateMenuActiveName",t)}},mainTabs:{get:function(){return this.$store.state.common.mainTabs},set:function(t){this.$store.commit("common/updateMainTabs",t)}},mainTabsActiveName:{get:function(){return this.$store.state.common.mainTabsActiveName},set:function(t){this.$store.commit("common/updateMainTabsActiveName",t)}},siteContentViewHeight:function(){var t=this.documentClientHeight-50-30-2;return this.$route.meta.isTab?(t-=40,Object(a.c)(this.$route.meta.iframeUrl)?{height:t+"px"}:{minHeight:t+"px"}):{minHeight:t+"px"}}},methods:{selectedTabHandle:function(t){(t=this.mainTabs.filter(function(e){return e.name===t.name})).length>=1&&this.$router.push({name:t[0].name,query:t[0].query,params:t[0].params})},removeTabHandle:function(t){var e=this;if(this.mainTabs=this.mainTabs.filter(function(e){return e.name!==t}),this.mainTabs.length>=1){if(t===this.mainTabsActiveName){var n=this.mainTabs[this.mainTabs.length-1];this.$router.push({name:n.name,query:n.query,params:n.params},function(){e.mainTabsActiveName=e.$route.name})}}else this.menuActiveName="",this.$router.push({name:"home"})},tabsCloseCurrentHandle:function(){this.removeTabHandle(this.mainTabsActiveName)},tabsCloseOtherHandle:function(){var t=this;this.mainTabs=this.mainTabs.filter(function(e){return e.name===t.mainTabsActiveName})},tabsCloseAllHandle:function(){this.mainTabs=[],this.menuActiveName="",this.$router.push({name:"home"})},tabsRefreshCurrentHandle:function(){var t=this,e=this.$route;this.removeTabHandle(e.name),this.$nextTick(function(){t.$router.push({name:e.name,query:e.query,params:e.params})})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"site-content",class:{"site-content--tabs":t.$route.meta.isTab}},[t.$route.meta.isTab?n("el-tabs",{attrs:{closable:!0},on:{"tab-click":t.selectedTabHandle,"tab-remove":t.removeTabHandle},model:{value:t.mainTabsActiveName,callback:function(e){t.mainTabsActiveName=e},expression:"mainTabsActiveName"}},[n("el-dropdown",{staticClass:"site-tabs__tools",attrs:{"show-timeout":0}},[n("i",{staticClass:"el-icon-arrow-down el-icon--right"}),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.tabsCloseCurrentHandle(e)}}},[t._v("关闭当前标签页")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){return t.tabsCloseOtherHandle(e)}}},[t._v("关闭其它标签页")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){return t.tabsCloseAllHandle(e)}}},[t._v("关闭全部标签页")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){t.refresh()}}},[t._v("刷新当前标签页")])],1)],1),t._v(" "),t._l(t.mainTabs,function(e){return n("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name}},[n("el-card",{attrs:{"body-style":t.siteContentViewHeight}},["iframe"===e.type?n("iframe",{attrs:{src:e.iframeUrl,width:"100%",height:"100%",frameborder:"0",scrolling:"yes"}}):n("keep-alive",[e.name===t.mainTabsActiveName?n("router-view"):t._e()],1)],1)],1)})],2):n("el-card",{attrs:{"body-style":t.siteContentViewHeight}},[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]},o=n("VU/8")(s,i,!1,null,null,null);e.default=o.exports},zQrT:function(t,e,n){t.exports=n.p+"static/img/avatar.c58e465.png"}});