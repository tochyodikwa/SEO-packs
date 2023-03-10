import{a as r,c,m as l}from"./vuex.esm.19624049.js";import{A as p,T as u}from"./TitleDescription.0fbd063c.js";import{C as m}from"./Card.5b6dc094.js";import{C as _}from"./Tabs.7e75fbc5.js";import{C as d}from"./Tooltip.e966c16d.js";import{C as f,S as h}from"./Schema.5cd0d551.js";import{B as g}from"./Textarea.55026f9a.js";import{C as y}from"./Blur.ce0e3f00.js";import{C as $}from"./SettingsRow.12bb257d.js";import{C as v}from"./Index.943b1744.js";import{n}from"./_plugin-vue2_normalizer.d86aa1f3.js";import{S as b}from"./index.49befd74.js";import"./WpTable.975e2bfe.js";import"./helpers.8308b279.js";import"./index.59e9b4d0.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.31663a66.js";import"./attachments.7f95db63.js";import"./cleanForSlug.6a94a785.js";import"./constants.84432201.js";import"./Caret.2b15c7cb.js";import"./_commonjsHelpers.10c44588.js";import"./html.9a057d5c.js";import"./Index.c4701ef0.js";import"./JsonValues.08065e69.js";import"./MaxCounts.5a7ca2fd.js";import"./SaveChanges.68e73792.js";import"./RadioToggle.980c8ff8.js";import"./RobotsMeta.7658d7de.js";import"./Checkbox.eb948ddb.js";import"./Checkmark.57e6a235.js";import"./Row.67f2b082.js";import"./GoogleSearchPreview.323d5e5c.js";import"./HtmlTagsEditor.ee7f8d95.js";import"./Editor.85f5f167.js";import"./UnfilteredHtml.e2571c60.js";import"./Slide.fe1da4fd.js";import"./TruSeoScore.98a47fd6.js";import"./Information.1adeabd0.js";import"./client.1a03de11.js";import"./translations.b7a6f669.js";import"./portal-vue.esm.c4534d19.js";const C={components:{BaseTextarea:g,CoreBlur:y,CoreSettingsRow:$,Cta:v},props:{type:{type:String,required:!0},object:{type:Object,required:!0}},data(){return{strings:{customFields:this.$t.__("Custom Fields",this.$td),customFieldsDescription:this.$t.__("List of custom field names to include as post content for tags and the SEO Page Analysis. Add one per line.",this.$td),ctaDescription:this.$t.sprintf(this.$t.__("%1$s %2$s gives you advanced customizations for our page analysis feature, letting you add custom fields to analyze.",this.$td),"AIOSEO","Pro"),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Custom Fields",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Custom Fields are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}},computed:{...r(["options"])},methods:{getSchemaTypeOption(o){return this.schemaTypes.find(t=>t.value===o)}}};var S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-ct-custom-fields lite"},[e("core-blur",[e("core-settings-row",{attrs:{name:t.strings.customFields,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-textarea",{attrs:{"min-height":200}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.customFieldsDescription)+" ")])]},proxy:!0}])})],1),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("custom-fields","custom-fields-upsell",`${t.object.name}-post-type`),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("custom-fields",t.object.name,"home")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},x=[],k=n(C,S,x,!1,null,null,null,null);const A=k.exports,F={components:{CustomFields:f,CustomFieldsLite:A},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0},showBulk:Boolean},computed:{...c(["isUnlicensed"])}};var T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-ct-custom-fields-view"},[t.isUnlicensed?t._e():e("custom-fields",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}),t.isUnlicensed?e("custom-fields-lite",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}):t._e()],1)},j=[],D=n(F,T,j,!1,null,null,null,null);const O=D.exports;const B={components:{Advanced:p,CoreCard:m,CoreMainTabs:_,CoreTooltip:d,CustomFields:O,Schema:h,SvgCircleQuestionMark:b,TitleDescription:u},data(){return{internalDebounce:null,strings:{label:this.$t.__("Label:",this.$td),name:this.$t.__("Slug:",this.$td)},tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"custom-fields",name:this.$t.__("Custom Fields",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:{...r(["options","dynamicOptions","settings"]),postTypes(){return this.$aioseo.postData.postTypes.filter(o=>o.name!=="attachment")}},methods:{...l(["changeTab"]),processChangeTab(o,t){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${o}SA`,value:t}),setTimeout(()=>{this.internalDebounce=!1},50))}}};var w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-search-appearance-content-types"},t._l(t.postTypes,function(s,i){return e("core-card",{key:i,attrs:{slug:`${s.name}SA`},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"icon dashicons",class:`${s.icon||"dashicons-admin-post"}`}),t._v(" "+t._s(s.label)+" "),e("core-tooltip",{attrs:{"z-index":"99999"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.label)+" "),e("strong",[t._v(t._s(s.label))]),e("br"),t._v(" "+t._s(t.strings.name)+" "),e("strong",[t._v(t._s(s.name))]),e("br")])]},proxy:!0}],null,!0)},[e("svg-circle-question-mark")],1)]},proxy:!0},{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[`${s.name}SA`],internal:""},on:{changed:a=>t.processChangeTab(s.name,a)}})]},proxy:!0}],null,!0)},[e("transition",{attrs:{name:"route-fade",mode:"out-in"}},[e(t.settings.internalTabs[`${s.name}SA`],{tag:"component",attrs:{object:s,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[s.name],type:"postTypes"}})],1)],1)}),1)},U=[],q=n(B,w,U,!1,null,null,null,null);const xt=q.exports;export{xt as default};