(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"13d8":function(t,e,n){"use strict";var o=n("a49f"),r=n.n(o);r.a},"1ff7":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r=a(n("a34a")),u=a(n("66fd")),c=n("8fce");function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,r,u,c){try{var a=t[u](c),i=a.value}catch(s){return void n(s)}a.done?e(i):Promise.resolve(i).then(o,r)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var u=t.apply(e,n);function c(t){i(u,o,r,c,a,"next",t)}function a(t){i(u,o,r,c,a,"throw",t)}c(void 0)}))}}var f={onLaunch:function(){o=this;var e=t.getUpdateManager();e.onCheckForUpdate((function(t){console.log("新版本===>",t.hasUpdate)})),e.onUpdateReady((function(n){t.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(t){t.confirm&&e.applyUpdate()}})})),e.onUpdateFailed((function(t){})),t.getSystemInfo({success:function(t){u.default.prototype.StatusBar=t.statusBarHeight;var e=wx.getMenuButtonBoundingClientRect();u.default.prototype.Custom=e,u.default.prototype.CustomBar=e.bottom+e.top-t.statusBarHeight}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},methods:{inquire:function(e){return s(r.default.mark((function n(){var u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.inquire)(e);case 3:u=n.sent,0===u.status&&(o.$store.commit("bg/SET_HOME_BG",u.data.background),o.$store.commit("user/SET_USER_INFO",u.data),console.log("store-info====>")),n.next=11;break;case 7:n.prev=7,n.t0=n["catch"](0),console.log(n.t0),t.showToast({title:"系统异常",icon:"none"});case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))()},getOpenId:function(){return s(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{t.login({success:function(t){return s(r.default.mark((function e(){var n,u;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.code,!n){e.next=8;break}return e.next=4,(0,c.getOpenId)({code:n});case 4:u=e.sent,0===u.status&&(o.$store.commit("user/SET_OPENID",u.data.openid),o.inquire({openId:u.data.openid})),e.next=9;break;case 8:console.log("登录失败！"+res.errMsg);case 9:case"end":return e.stop()}}),e)})))()}})}catch(n){console.log(n),t.showToast({title:"系统异常",icon:"none"})}case 1:case"end":return e.stop()}}),e)})))()}}};e.default=f}).call(this,n("543d")["default"])},"4ce3":function(t,e,n){"use strict";n.r(e);var o=n("1ff7"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},9279:function(t,e,n){"use strict";n.r(e);var o=n("4ce3");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("13d8");var u,c,a,i,s=n("f0c5"),f=Object(s["a"])(o["default"],u,c,!1,null,null,null,!1,a,i);e["default"]=f.exports},a49f:function(t,e,n){},e570:function(t,e,n){"use strict";(function(t){n("a0f9");var e=u(n("66fd")),o=u(n("9279")),r=u(n("9372"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){n.e("colorui/components/cu-custom").then(function(){return resolve(n("b8db"))}.bind(null,n)).catch(n.oe)};e.default.prototype.$store=r.default,e.default.component("cu-custom",s),e.default.mixin({methods:{toggleAppTheme:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blue";this.$store.commit("setting/TOGGLE_APP_THEME",t)}}}),e.default.config.productionTip=!1,o.default.mpType="app";var f=new e.default(a({},o.default));t(f).$mount()}).call(this,n("543d")["createApp"])}},[["e570","common/runtime","common/vendor"]]]);