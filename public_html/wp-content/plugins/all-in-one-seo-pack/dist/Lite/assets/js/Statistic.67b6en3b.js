import{b as I}from"./_baseClone.B3PqkIxk.js";import{d as L}from"./vue-router.CGjDmB5N.js";import{u as M,i as P,f as T,D as g,x as k}from"./index.ByF2aI-G.js";import{g as _,o as l,c as w,G as m,a as h,v as D,k as R,b as y,x as v,t as x,l as C,C as V}from"./runtime-dom.esm-bundler.DKw-RQqs.js";import{n as c}from"./numbers.D-q54OtM.js";import"./translations.Ur07Kmot.js";import{a as i,_ as f,b as u}from"./default-i18n.DvLqo3S3.js";import{C as A}from"./Tooltip.B0brI66q.js";import{_ as N}from"./_plugin-vue_export-helper.BN1snXvA.js";var E=4;function at(e){return I(e,E)}const nt=(e={})=>{const{processFilterTable:o,showUpsell:t}=e,a=_("clicks"),d=_("desc"),s=_(10),n=L(),S=p=>{n.push({name:"post-detail",query:{postId:p.objectId,previousRoute:n.currentRoute.value.name}})},B=M(),F=P();return{openPostDetail:S,orderBy:a,orderDir:d,processFilter:p=>{t.value=(!B.isPro||F.isUnlicensed)&&p.slug!=="all",o(p)},resultsPerPage:s}},O="all-in-one-seo-pack",U=()=>({formatStatistic:(o,t)=>o==="ctr"?`${Math.abs(t)}%`:o==="position"?Math.abs(t).toFixed(0):o==="decay"?i(f("%1$s Points",O),c.numberFormat(t,0)):o==="decayPercent"?`${t}%`:(t=Math.abs(t),c.compactNumber(t))}),H={props:{direction:{type:String,default(){return"down"}}}},Z=h("path",{d:"M0.25 5.07812L5.25 0.078125L10.25 5.07812H0.25Z",fill:"currentColor"},null,-1),b=[Z];function q(e,o,t,a,d,s){return l(),w("svg",{viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:m(["aioseo-caret-solid","aioseo-caret-solid--"+t.direction])},b,2)}const G=N(H,[["render",q]]),r="all-in-one-seo-pack",j={setup(){const{formatStatistic:e}=U();return{formatStatistic:e,rootStore:M(),searchStatisticsStore:T()}},components:{CoreTooltip:A,SvgCaretSolid:G},props:{total:[Number,String],difference:[Number,String],showCurrent:{type:Boolean,default(){return!0}},showDifference:{type:Boolean,default(){return!0}},showZeroValues:{type:Boolean,default(){return!1}},type:{type:String,required:!0},tooltipOffset:{type:String,default(){return"0,0"}}},computed:{differenceRounded(){return this.type==="position"?parseInt(Math.round(this.difference)):this.difference}},methods:{compareDescription(e,o){const t=o==="up"?f("Up",r):f("Down",r),a=this.searchStatisticsStore.shouldShowSampleReports?g.now().minus({days:14}).toFormat("yyyy-MM-dd"):this.searchStatisticsStore.range.compareStart,d=this.searchStatisticsStore.shouldShowSampleReports?g.now().minus({days:7}).toFormat("yyyy-MM-dd"):this.searchStatisticsStore.range.compareEnd,s=new Date(`${a} 00:00:00`),n=new Date(`${d} 00:00:00`);return i(f("%1$s %2$s %3$s compared to the previous period (%4$s - %5$s)",r),t,"<strong>"+this.points(e)+"</strong>",this.type==="position"?f("in search results",r):"","<strong>"+k(s,this.rootStore.aioseo.data.dateFormat)+"</strong>","<strong>"+k(n,this.rootStore.aioseo.data.dateFormat)+"</strong>")},points(e){switch(this.type){case"clicks":return i(u("%s click","%s clicks",parseInt(this.formatStatistic("clicks",e)),r),c.compactNumber(e));case"impressions":return i(u("%s impression","%s impressions",parseInt(this.formatStatistic("impressions",e)),r),c.compactNumber(e));case"ctr":return this.formatStatistic("ctr",e);case"position":return e=parseInt(Math.round(e)),i(u("%s spot","%s spots",parseInt(this.formatStatistic("position",e)),r),e);case"keywords":return i(u("%s keyword","%s keywords",parseInt(this.formatStatistic("keywords",e)),r),c.compactNumber(e));case"decay":case"diffDecay":return i(u("%s point","%s points",parseInt(this.formatStatistic("keywords",e)),r),c.compactNumber(e));default:return""}}}},z={key:0},Y=["innerHTML"];function J(e,o,t,a,d,s){const n=D("svg-caret-solid"),S=D("core-tooltip");return l(),w("div",{class:m(["statistic",[{"no-margin":!t.showCurrent},`statistic-${t.type}`]])},[t.showCurrent&&(t.total||t.showZeroValues)?(l(),w("span",z,[h("span",{class:m(["statistic-direction",{up:0<t.total,down:0>t.total}])},[t.total!==0&&t.type==="decayPercent"?(l(),R(n,{key:0,direction:0<t.total?"up":"down"},null,8,["direction"])):y("",!0),v(" "+x(a.formatStatistic(t.type,t.total)),1)],2)])):y("",!0),t.showDifference&&s.differenceRounded!==0?(l(),R(S,{key:1,offset:t.tooltipOffset},{tooltip:C(()=>[h("span",{innerHTML:s.compareDescription(Math.abs(s.differenceRounded),0<s.differenceRounded?"up":"down")},null,8,Y)]),default:C(()=>[h("span",{class:m(["statistic-direction",{up:0<s.differenceRounded,down:0>=s.differenceRounded}])},[V(n,{direction:0<s.differenceRounded?"up":"down"},null,8,["direction"]),v(" "+x(a.formatStatistic(t.type,s.differenceRounded)),1)],2)]),_:1},8,["offset"])):y("",!0)],2)}const it=N(j,[["render",J]]);export{it as S,nt as a,at as c,U as u};