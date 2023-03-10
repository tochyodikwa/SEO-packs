import{B as r}from"./Textarea.55026f9a.js";import{C as o}from"./SettingsRow.12bb257d.js";import{n as a}from"./_plugin-vue2_normalizer.d86aa1f3.js";import{c as l}from"./vuex.esm.19624049.js";import{B as n}from"./RadioToggle.980c8ff8.js";import{C as c}from"./Blur.ce0e3f00.js";import{C as u}from"./Index.943b1744.js";const _={components:{BaseTextarea:r,CoreSettingsRow:o},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0}},data(){return{strings:{customFields:this.$t.__("Custom Fields",this.$tdPro),customFieldsDescription:this.$t.__("List of custom field names to include as post content for tags and the SEO Page Analysis. Add one per line.",this.$tdPro)}}},methods:{getSchemaTypeOption(s){return this.schemaTypes.find(t=>t.value===s)}}};var p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-ct-custom-fields"},[e("core-settings-row",{attrs:{name:t.strings.customFields,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-textarea",{attrs:{"min-height":200},model:{value:t.options.customFields,callback:function(i){t.$set(t.options,"customFields",i)},expression:"options.customFields"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.customFieldsDescription)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"customFields",!0))}})])]},proxy:!0}])})],1)},h=[],d=a(_,p,h,!1,null,null,null,null);const D=d.exports;const $={components:{BaseRadioToggle:n,CoreSettingsRow:o},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0}},data(){return{schemaTypes:{post:[{value:"none",label:this.$t.__("None",this.$td)},{value:"Article",label:this.$t.__("Article",this.$td)},{value:"Course",label:this.$t.__("Course",this.$td)},{value:"Dataset",label:this.$t.__("Dataset",this.$td)},{value:"Movie",label:this.$t.__("Movie",this.$td)},{value:"Person",label:this.$t.__("Person",this.$td)},{value:"Product",label:this.$t.__("Product",this.$td)},{value:"Recipe",label:this.$t.__("Recipe",this.$td)},{value:"Service",label:this.$t.__("Service",this.$td)},{value:"SoftwareApplication",label:this.$t.__("Software Application",this.$td)},{value:"WebPage",label:this.$t.__("Web Page",this.$tdPro)}],page:[{value:"none",label:this.$t.__("None",this.$td)},{value:"Course",label:this.$t.__("Course",this.$td)},{value:"Dataset",label:this.$t.__("Dataset",this.$td)},{value:"Movie",label:this.$t.__("Movie",this.$td)},{value:"Person",label:this.$t.__("Person",this.$td)},{value:"Product",label:this.$t.__("Product",this.$td)},{value:"Recipe",label:this.$t.__("Recipe",this.$td)},{value:"Service",label:this.$t.__("Service",this.$td)},{value:"SoftwareApplication",label:this.$t.__("Software Application",this.$td)},{value:"WebPage",label:this.$t.__("Web Page",this.$tdPro)}],attachment:[{value:"none",label:this.$t.__("None",this.$td)},{value:"ItemPage",label:this.$t.__("Item Page",this.$tdPro)}],cpt:[{value:"none",label:this.$t.__("None",this.$td)},{value:"Article",label:this.$t.__("Article",this.$td)},{value:"Course",label:this.$t.__("Course",this.$td)},{value:"Dataset",label:this.$t.__("Dataset",this.$td)},{value:"Movie",label:this.$t.__("Movie",this.$td)},{value:"Person",label:this.$t.__("Person",this.$td)},{value:"Product",label:this.$t.__("Product",this.$td)},{value:"Recipe",label:this.$t.__("Recipe",this.$td)},{value:"Service",label:this.$t.__("Service",this.$td)},{value:"SoftwareApplication",label:this.$t.__("Software Application",this.$td)},{value:"WebPage",label:this.$t.__("Web Page",this.$tdPro)}]},webPageTypes:{cpt:[{value:"WebPage",label:this.$t.__("Web Page",this.$tdPro)},{value:"CollectionPage",label:this.$t.__("Collection Page",this.$tdPro)},{value:"ProfilePage",label:this.$t.__("Profile Page",this.$tdPro)},{value:"ItemPage",label:this.$t.__("Item Page",this.$tdPro)},{value:"FAQPage",label:this.$t.__("FAQ Page",this.$td)},{value:"RealEstateListing",label:this.$t.__("Real Estate Listing",this.$tdPro)}]},strings:{schemaType:this.$t.__("Schema Type",this.$td),webPageType:this.$t.__("Web Page Type",this.$td),articleType:this.$t.__("Article Type",this.$td),article:this.$t.__("Article",this.$td),blogPost:this.$t.__("Blog Post",this.$tdPro),newsArticle:this.$t.__("News Article",this.$tdPro)}}},methods:{getSelectOptions(s){return typeof this[s][this.object.name]<"u"?this[s][this.object.name]:this[s].cpt},getCurrentOption(s,t){return typeof this[s][this.object.name]<"u"?this[s][this.object.name].find(e=>e.value===t):this[s].cpt.find(e=>e.value===t)}}};var m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-ct-schema"},[e("core-settings-row",{attrs:{name:t.strings.schemaType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{staticClass:"schema-type",attrs:{size:"medium",options:t.getSelectOptions("schemaTypes"),value:t.getCurrentOption("schemaTypes",t.options.schemaType)},on:{input:i=>t.options.schemaType=i.value}})]},proxy:!0}])}),t.options.schemaType==="WebPage"?e("core-settings-row",{attrs:{name:t.strings.webPageType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{staticClass:"webpage-type",attrs:{size:"medium",options:t.getSelectOptions("webPageTypes"),value:t.getCurrentOption("webPageTypes",t.options.webPageType)},on:{input:i=>t.options.webPageType=i.value}})]},proxy:!0}],null,!1,3344221424)}):t._e(),t.options.schemaType==="Article"?e("core-settings-row",{attrs:{name:t.strings.articleType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:`${t.object.name}articleType`,options:[{label:t.strings.article,value:"Article"},{label:t.strings.blogPost,value:"BlogPosting"},{label:t.strings.newsArticle,value:"NewsArticle"}]},model:{value:t.options.articleType,callback:function(i){t.$set(t.options,"articleType",i)},expression:"options.articleType"}})]},proxy:!0}],null,!1,3288395150)}):t._e()],1)},g=[],v=a($,m,g,!1,null,null,null,null);const b=v.exports;const y={components:{BaseRadioToggle:n,CoreBlur:c,CoreSettingsRow:o,Cta:u},props:{type:{type:String,required:!0},object:{type:Object,required:!0}},data(){return{schemaTypes:[{value:"none",label:this.$t.__("None",this.$td)},{value:"Article",label:this.$t.__("Article",this.$td)}],strings:{schemaType:this.$t.__("Schema Type",this.$td),articleType:this.$t.__("Article Type",this.$td),article:this.$t.__("Article",this.$td),blogPost:this.$t.__("Blog Post",this.$td),newsArticle:this.$t.__("News Article",this.$td),ctaDescription:this.$t.__("Easily generate unlimited schema markup for your content to help you rank higher in search results. Our schema validator ensures your schema works out of the box.",this.$tdPro),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Schema Generator",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Schema Generator is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},features:[this.$t.__("Unlimited Schema",this.$td),this.$t.__("Validate with Google",this.$td),this.$t.__("Increase Rankings",this.$td),this.$t.__("Additional Schema Types",this.$td)]}},methods:{getSchemaTypeOption(s){return this.schemaTypes.find(t=>t.value===s)}}};var f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-ct-schema-lite"},[e("core-blur",[e("core-settings-row",{attrs:{name:t.strings.schemaType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-select",{staticClass:"schema-type",attrs:{size:"medium",options:t.schemaTypes,value:t.getSchemaTypeOption("Article")}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.articleType,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:`${t.object.name}articleType`,value:"BlogPosting",options:[{label:t.strings.article,value:"Article"},{label:t.strings.blogPost,value:"BlogPosting"},{label:t.strings.newsArticle,value:"NewsArticle"}]}})]},proxy:!0}])})],1),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("schema-markup","schema-markup-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("schema-markup",null,"home"),"feature-list":t.features},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},P=[],S=a(y,f,P,!1,null,null,null,null);const T=S.exports,A={components:{Schema:b,SchemaLite:T},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0},showBulk:Boolean},computed:{...l(["isUnlicensed"])}};var w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-ct-schema-view"},[t.isUnlicensed?t._e():e("schema",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}),t.isUnlicensed?e("schema-lite",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}):t._e()],1)},k=[],C=a(A,w,k,!1,null,null,null,null);const L=C.exports;export{D as C,L as S};