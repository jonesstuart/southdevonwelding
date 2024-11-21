import{v as e,o as m,c as p,C as a,a as k,E as r,b as f,Y as _}from"./js/runtime-dom.esm-bundler.DKw-RQqs.js";import{l as h}from"./js/index.9ItM203B.js";import{l as L}from"./js/index.Olu2afa7.js";import{l as S}from"./js/index.3BJ3ZnWB.js";import{i as g,b as w,u as A,e as y,l as v}from"./js/index.ByF2aI-G.js";import{e as C}from"./js/elemLoaded.COgXIo-H.js";import{G as F}from"./js/constants.DfsCWbZk.js";import{a as E}from"./js/addons.C_QAj7aO.js";import{u as x}from"./js/url.Z97bVDwS.js";import{S as V}from"./js/Information.CzCa0jo7.js";import{S as P}from"./js/Caret.DMa7g0j7.js";import"./js/translations.Ur07Kmot.js";import{_ as D}from"./js/_plugin-vue_export-helper.BN1snXvA.js";import{a as I,_ as b}from"./js/default-i18n.DvLqo3S3.js";import"./js/helpers.yjC6K_2A.js";import"./js/upperFirst.BjBqmCj-.js";import"./js/_stringToArray.DnK4tKcY.js";import"./js/toString.Dc7QMRQR.js";const N="all-in-one-seo-pack",U={setup(){return{licenseStore:g(),postEditorStore:w(),rootStore:A()}},components:{SvgCircleInformation:V,SvgClose:P},data(){return{linkFormatValue:{},disabled:!1,url:null,strings:{upsell:I(b("Did you know you can automatically add internal links using Link Assistant? %1$s",N),y.getPlainLink(F.learnMore,this.rootStore.aioseo.urls.aio.linkAssistant,!0))}}},computed:{canShowUpsell(){const o=E.getAddon("aioseo-link-assistant"),{options:t}=this.postEditorStore.currentPost,i=t.linkFormat.internalLinkCount,n=t.linkFormat.linkAssistantDismissed;return(this.licenseStore.isUnlicensed||!o||!o.isActive||o.requiresUpgrade)&&2<i&&!n&&!this.disabled&&this.linkFormatValue.url&&this.isInternalLink(this.linkFormatValue.url)}},methods:{async linkAdded(o){var s;await this.$nextTick();const{options:t}=this.postEditorStore.currentPost,i=t.linkFormat.internalLinkCount,n=t.linkFormat.linkAssistantDismissed;2<i||n||this.isInternalLink(o.url||((s=o.suggestion)==null?void 0:s.url)||null)&&this.postEditorStore.incrementInternalLinkCount()},async setLinkFormatValue(){await this.$nextTick();const o=document.querySelector("#aioseo-link-assistant-education input");!this.linkFormatValue.url&&(o!=null&&o.value)&&(this.linkFormatValue=JSON.parse(o.value))},isInternalLink(o){const t=x.parse(o,!1,!0);return o.indexOf("//")===-1&&o.indexOf("/")===0?!0:o.indexOf("#")===0?!1:t.host?t.host===this.rootStore.aioseo.urls.domain:!0}},created(){this.setLinkFormatValue();const{addAction:o,hasAction:t}=window.wp.hooks;t("aioseo-link-format-link-added","aioseo")||o("aioseo-link-format-link-added","aioseo",this.linkAdded)}},B={key:0,class:"aioseo-link-assistant-did-you-know"},O=["innerHTML"];function T(o,t,i,n,s,u){const c=e("svg-circle-information"),d=e("svg-close");return u.canShowUpsell?(m(),p("div",B,[a(c),k("span",{onClick:t[0]||(t[0]=r(Y=>s.disabled=!0,["stop"])),innerHTML:s.strings.upsell},null,8,O),a(d,{onClick:r(n.postEditorStore.disableLinkAssistantEducation,["stop"])},null,8,["onClick"])])):f("",!0)}const M=D(U,[["render",T]]),l=()=>{let o=_({...M,name:"Standalone/LinkFormat"});o=h(o),o=L(o),o=S(o),v(o),o.mount("#aioseo-link-assistant-education-mount")};window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&(document.getElementById("aioseo-link-assistant-education")?l():(C("#aioseo-link-assistant-education","aioseoLaDidYouKnow"),document.addEventListener("animationstart",function(t){t.animationName==="aioseoLaDidYouKnow"&&l()},{passive:!0})));