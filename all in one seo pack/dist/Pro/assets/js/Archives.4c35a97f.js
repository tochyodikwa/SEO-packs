import{a as o,m as i}from"./vuex.esm.19624049.js";import{A as c,T as p}from"./TitleDescription.0fbd063c.js";import{C as m}from"./Card.5b6dc094.js";import{C as l}from"./Tabs.7e75fbc5.js";import{n as u}from"./_plugin-vue2_normalizer.d86aa1f3.js";import"./WpTable.975e2bfe.js";import"./helpers.8308b279.js";import"./index.59e9b4d0.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.31663a66.js";import"./attachments.7f95db63.js";import"./cleanForSlug.6a94a785.js";import"./constants.84432201.js";import"./Caret.2b15c7cb.js";import"./_commonjsHelpers.10c44588.js";import"./html.9a057d5c.js";import"./Index.c4701ef0.js";import"./JsonValues.08065e69.js";import"./MaxCounts.5a7ca2fd.js";import"./SaveChanges.68e73792.js";import"./RadioToggle.980c8ff8.js";import"./RobotsMeta.7658d7de.js";import"./Checkbox.eb948ddb.js";import"./Checkmark.57e6a235.js";import"./Row.67f2b082.js";import"./SettingsRow.12bb257d.js";import"./index.49befd74.js";import"./client.1a03de11.js";import"./translations.b7a6f669.js";import"./portal-vue.esm.c4534d19.js";import"./GoogleSearchPreview.323d5e5c.js";import"./HtmlTagsEditor.ee7f8d95.js";import"./Editor.85f5f167.js";import"./UnfilteredHtml.e2571c60.js";import"./Tooltip.e966c16d.js";import"./Slide.fe1da4fd.js";import"./TruSeoScore.98a47fd6.js";import"./Information.1adeabd0.js";const h={components:{Advanced:c,CoreCard:m,CoreMainTabs:l,TitleDescription:p},data(){return{internalDebounce:null,tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}],archives:[{label:"Author Archives",name:"author",singular:"Author",icon:"dashicons-admin-users"},{label:"Date Archives",name:"date",singular:"Date",icon:"dashicons-calendar-alt"},{label:"Search Page",name:"search",singular:"Search Page",icon:"dashicons-search"}]}},computed:{...o(["options","dynamicOptions","settings"]),getArchives(){return this.archives.concat(this.$aioseo.postData.archives.map(e=>({label:`${e.label} Archives`,name:`${e.name}Archive`,icon:"dashicons-category",singular:e.singular,dynamic:!0})))}},methods:{...i(["changeTab"]),processChangeTab(e,t){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${e}Archives`,value:t}),setTimeout(()=>{this.internalDebounce=!1},50))},getOptions(e){return e.dynamic?this.dynamicOptions.searchAppearance.archives[e.name.replace("Archive","")]:this.options.searchAppearance.archives[e.name]}}};var _=function(){var t=this,a=t._self._c;return a("div",{staticClass:"aioseo-search-appearance-archives"},t._l(t.getArchives,function(n,r){return a("core-card",{key:r,attrs:{slug:`${n.name}Archives`},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"icon dashicons",class:`${n.icon||"dashicons-admin-post"}`}),a("div",[t._v(" "+t._s(n.label)+" ")])]},proxy:!0},{key:"tabs",fn:function(){return[a("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[`${n.name}Archives`],internal:""},on:{changed:s=>t.processChangeTab(n.name,s)}})]},proxy:!0}],null,!0)},[a("transition",{attrs:{name:"route-fade",mode:"out-in"}},[a(t.settings.internalTabs[`${n.name}Archives`],{tag:"component",attrs:{object:n,separator:t.options.searchAppearance.global.separator,options:t.getOptions(n),type:"archives","show-bulk":!1,"no-meta-box":"","include-keywords":""}})],1)],1)}),1)},d=[],f=u(h,_,d,!1,null,null,null,null);const et=f.exports;export{et as default};