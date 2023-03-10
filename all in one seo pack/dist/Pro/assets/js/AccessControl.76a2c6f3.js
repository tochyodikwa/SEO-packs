import{a,c as u}from"./vuex.esm.19624049.js";import{A as l}from"./WebmasterTools.78c6e9f2.js";import{B as p}from"./Checkbox.eb948ddb.js";import{G as d,a as h}from"./Row.67f2b082.js";import{n as r}from"./_plugin-vue2_normalizer.d86aa1f3.js";import{C as c}from"./Card.5b6dc094.js";import{C as g}from"./ProBadge.7aea483a.js";import{C as _}from"./SettingsRow.12bb257d.js";import{C as S}from"./Blur.ce0e3f00.js";import{C as m}from"./Index.943b1744.js";import"./WpTable.975e2bfe.js";import"./helpers.8308b279.js";import"./index.59e9b4d0.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.31663a66.js";import"./attachments.7f95db63.js";import"./cleanForSlug.6a94a785.js";import"./constants.84432201.js";import"./Caret.2b15c7cb.js";import"./_commonjsHelpers.10c44588.js";import"./html.9a057d5c.js";import"./Index.c4701ef0.js";import"./MetaTag.ceacc375.js";import"./SaveChanges.68e73792.js";import"./Checkmark.57e6a235.js";import"./Tooltip.e966c16d.js";import"./index.49befd74.js";import"./client.1a03de11.js";import"./translations.b7a6f669.js";import"./portal-vue.esm.c4534d19.js";import"./Slide.fe1da4fd.js";const f={components:{BaseCheckbox:p,GridColumn:d,GridRow:h},props:{disabled:{type:Boolean,default(){return!1}},value:{type:Boolean,required:!0},roleSettings:{type:Object,required:!0}},data(){return{strings:{generalSeoSettings:this.$t.__("General SEO Settings:",this.$tdPro),postSettings:this.$t.__("Post SEO Settings:",this.$tdPro),useDefaultSettings:this.$t.__("Use Default Settings",this.$td),dashboard:this.$t.__("Dashboard",this.$td),setupWizard:this.$t.__("Setup Wizard",this.$td),generalSettings:this.$t.__("General Settings",this.$td),searchAppearanceSettings:this.$t.__("Search Appearance Settings",this.$tdPro),socialNetworksSettings:this.$t.__("Social Networks Settings",this.$tdPro),sitemapSettings:this.$t.__("Sitemap Settings",this.$td),linkAssistantSettings:this.$t.__("Link Assistant Settings",this.$tdPro),redirectsManage:this.$t.__("Manage Redirects",this.$tdPro),pageRedirectsManage:this.$t.__("Manage Redirects",this.$tdPro),redirectsSettings:this.$t.__("Redirects Settings",this.$tdPro),seoAnalysisSettings:this.$t.__("SEO Analysis",this.$td),toolsSettings:this.$t.__("Tools",this.$td),featureManagerSettings:this.$t.__("Feature Manager Settings",this.$tdPro),pageAnalysis:this.$t.__("Page Analysis",this.$td),pageAdvancedSettings:this.$t.__("Advanced Settings",this.$td),pageSchemaSettings:this.$t.__("Schema Settings",this.$tdPro),pageSocialSettings:this.$t.__("Social Settings",this.$tdPro),localSeoSettings:this.$t.__("Local SEO Settings",this.$tdPro),pageLinkAssistantSettings:this.$t.__("Link Assistant",this.$td)}}},computed:{...a(["options"]),settings(){return{general:[{key:"dashboard",label:this.strings.dashboard},{key:"generalSettings",label:this.strings.generalSettings},{key:"searchAppearanceSettings",label:this.strings.searchAppearanceSettings},{key:"socialNetworksSettings",label:this.strings.socialNetworksSettings},{key:"sitemapSettings",label:this.strings.sitemapSettings},{key:"linkAssistantSettings",label:this.strings.linkAssistantSettings},{key:"redirectsManage",label:this.strings.redirectsManage},{key:"redirectsSettings",label:this.strings.redirectsSettings},{key:"seoAnalysisSettings",label:this.strings.seoAnalysisSettings},{key:"toolsSettings",label:this.strings.toolsSettings},{key:"featureManagerSettings",label:this.strings.featureManagerSettings},{key:"localSeoSettings",label:this.strings.localSeoSettings},{key:"setupWizard",label:this.strings.setupWizard}],page:[{key:"pageAnalysis",label:this.strings.pageAnalysis},{key:"pageGeneralSettings",label:this.strings.generalSettings},{key:"pageAdvancedSettings",label:this.strings.pageAdvancedSettings},{key:"pageSchemaSettings",label:this.strings.pageSchemaSettings},{key:"pageSocialSettings",label:this.strings.pageSocialSettings},{key:"pageLocalSeoSettings",label:this.strings.localSeoSettings},{key:"pageLinkAssistantSettings",label:this.strings.pageLinkAssistantSettings},{key:"pageRedirectsManage",label:this.strings.pageRedirectsManage}]}}},methods:{emitInput(n){this.$emit("input",n)}}};var $=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-access-control-toggle"},[e("base-toggle",{attrs:{disabled:t.disabled,value:t.value},on:{input:t.emitInput}},[t._v(" "+t._s(t.strings.useDefaultSettings)+" ")]),t.value?t._t("description"):t._e(),t.value?t._e():e("div",{staticClass:"access-control-settings"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.strings.generalSeoSettings)+" ")]),e("grid-row",t._l(t.settings.general,function(s,i){return e("grid-column",{key:i,attrs:{md:"4"}},[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.roleSettings[s.key],callback:function(o){t.$set(t.roleSettings,s.key,o)},expression:"roleSettings[setting.key]"}},[t._v(" "+t._s(s.label)+" ")])],1)}),1),e("div",{staticClass:"title"},[t._v(" "+t._s(t.strings.postSettings)+" ")]),e("grid-row",t._l(t.settings.page,function(s,i){return e("grid-column",{key:i,attrs:{md:"4"}},[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.roleSettings[s.key],callback:function(o){t.$set(t.roleSettings,s.key,o)},expression:"roleSettings[setting.key]"}},[t._v(" "+t._s(s.label)+" ")])],1)}),1)],1)],2)},y=[],k=r(f,$,y,!1,null,null,null,null);const v=k.exports;const b={components:{CoreAccessControlOptions:v,CoreCard:c,CoreProBadge:g,CoreSettingsRow:_},mixins:[l],computed:{...a(["options","dynamicOptions"])},methods:{canShowRole(n){let t=n.name;return t!=="administrator"?(["seoManager","seoEditor"].includes(t)&&(t=t.replace("seo","aioseo_").toLowerCase()),t in this.$aioseo.user.roles):this.$aioseo.data.isMultisite},getSettings(n){return n.dynamic?this.dynamicOptions.accessControl[n.name]:this.options.accessControl[n.name]}}};var C=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-access-control"},[e("core-card",{attrs:{slug:"accessControl"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.accessControl))]),e("core-pro-badge")]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])},[t._l(t.getRoles,function(s){return[t.canShowRole(s)?e("core-settings-row",{key:s.name,attrs:{name:s.label},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-access-control-options",{attrs:{roleSettings:t.getSettings(s)},scopedSlots:t._u([{key:"description",fn:function(){return[e("p",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(s.description)}})]},proxy:!0}],null,!0),model:{value:t.getSettings(s).useDefault,callback:function(i){t.$set(t.getSettings(s),"useDefault",i)},expression:"getSettings(role).useDefault"}})]},proxy:!0}],null,!0)}):t._e()]})],2)],1)},A=[],x=r(b,C,A,!1,null,null,null,null);const R=x.exports;const P={components:{CoreBlur:S,CoreCard:c,CoreProBadge:g,CoreSettingsRow:_,Cta:m},mixins:[l],data(){return{strings:{wpRoles:this.$t.__("WP Roles (Editor, Author)",this.$td),seoManagerRole:this.$t.__("SEO Manager Role",this.$td),seoEditorRole:this.$t.__("SEO Editor Role",this.$td),defaultSettings:this.$t.__("Default settings that just work",this.$td),granularControl:this.$t.__("Granular controls per role",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Access Control",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Access Control is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}},computed:{getLiteRoles(){const n=this.getRoles;let t=1;for(;8>n.length;)n.push({label:this.$t.__("Custom Role",this.$td)+" "+t,name:"customRole"+t}),t++;return n}}};var M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-access-control-lite"},[e("core-card",{attrs:{slug:"accessControl"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.accessControl))]),e("core-pro-badge")]},proxy:!0},{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])},[e("core-blur",[t._l(t.getLiteRoles,function(s){return[e("core-settings-row",{key:s.name,attrs:{name:s.label},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"toggle"},[e("base-toggle",{attrs:{disabled:!0,value:!0}},[t._v(" "+t._s(t.strings.useDefaultSettings)+" ")])],1)]},proxy:!0}],null,!0)})]})],2),e("cta",{attrs:{"feature-list":[t.strings.granularControl,t.strings.wpRoles,t.strings.seoManagerRole,t.strings.seoEditorRole],"cta-link":t.$links.getPricingUrl("access-control","access-control-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("access-control",null,"home"),"align-top":""},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.tooltip)+" ")]},proxy:!0}])})],1)],1)},w=[],L=r(P,M,w,!1,null,null,null,null);const O=L.exports,E={components:{AccessControl:R,AccessControlLite:O},computed:{...u(["isUnlicensed"])}};var U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-access-control"},[t.isUnlicensed?t._e():e("access-control"),t.isUnlicensed?e("access-control-lite"):t._e()],1)},D=[],B=r(E,U,D,!1,null,null,null,null);const dt=B.exports;export{dt as default};
