import{C as p,i as c}from"./Map.76b9efbf.js";import{a as u}from"./vuex.esm.19624049.js";import{C as d}from"./index.49befd74.js";import{C as o}from"./Card.5b6dc094.js";import{C as r}from"./SettingsRow.12bb257d.js";import{L as _,a as m}from"./DefaultStyle.d8dd98ab.js";import{C as h}from"./AttributesList.d54c6943.js";import{C as l}from"./DisplayInfo.a84d27f8.js";import{n as i}from"./_plugin-vue2_normalizer.d86aa1f3.js";import{b as f,f as y}from"./Caret.2b15c7cb.js";import{A as $,U as g}from"./UpdateCta.f351e783.js";import{C as v}from"./Blur.ce0e3f00.js";import{R as M}from"./RequiredPlans.edf2165a.js";import{C as b}from"./ProBadge.7aea483a.js";import{C as A}from"./Index.943b1744.js";import{A as S}from"./WpTable.975e2bfe.js";import"./index.59e9b4d0.js";import"./SaveChanges.68e73792.js";import"./isEqual.a6913dc6.js";import"./_baseIsEqual.e22c67bc.js";import"./isArrayLikeObject.44af21ce.js";import"./_getTag.3036b7b0.js";import"./constants.84432201.js";import"./default-i18n.31663a66.js";import"./client.1a03de11.js";import"./_commonjsHelpers.10c44588.js";import"./translations.b7a6f669.js";import"./helpers.8308b279.js";import"./portal-vue.esm.c4534d19.js";import"./Tooltip.e966c16d.js";import"./Slide.fe1da4fd.js";import"./Row.67f2b082.js";import"./Image.000e1fc0.js";import"./attachments.7f95db63.js";import"./cleanForSlug.6a94a785.js";import"./html.9a057d5c.js";import"./Img.e81d8dfc.js";import"./Plus.e2e13f40.js";import"./Php.d95d6395.js";import"./CheckSolid.10f380cf.js";import"./Index.c4701ef0.js";const K={components:{CoreAttributesList:h,CoreDisplayInfo:l},props:{label:null,displayOptions:{type:Object,required:!0}},data(){return{strings:{shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$td),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td)},attributes:[{name:"location_id",description:this.$t.__("A Location ID if Multiple Locations is on.",this.$td)},{name:"show_label",description:this.$t.__("Show or hide the label.",this.$td)},{name:"show_icon",description:this.$t.__("Show or hide the icon.",this.$td)},{name:"width",description:this.$t.__("The width of the map. You may use a percentage or a fixed width in pixels.",this.$td)},{name:"height",description:this.$t.__("The height of the map. You may use a percentage or a fixed height in pixels.",this.$td)},{name:"label",description:this.$t.__("The label.",this.$td)}]}}};var w=function(){var t=this,s=t._self._c;return s("core-display-info",{attrs:{label:t.label,options:t.displayOptions},scopedSlots:t._u([{key:"shortcodeAdvanced",fn:function(){return[s("core-attributes-list",{attrs:{description:t.strings.shortcodeAttributesDescription,attributes:t.attributes}})]},proxy:!0},{key:"phpAdvanced",fn:function(){return[s("core-attributes-list",{attrs:{description:t.strings.phpArgumentsDescription,attributes:t.attributes}})]},proxy:!0}])})},k=[],B=i(K,w,k,!1,null,null,null,null);const x=B.exports;const C={components:{CoreAlert:d,CoreCard:o,CoreMap:p,CoreSettingsRow:r,LocalBusinessMapCustomMarker:_,LocalBusinessMapDefaultStyle:m,LocalBusinessMapDisplayInfo:x,SvgCircleClose:f},data(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td),description:this.$t.sprintf(this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),apiKey:this.$t.__("API Key",this.$td),apiKeyDescription:this.$t.sprintf(this.$t.__("A Google API Key is necessary to render your maps. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),mapSettings:this.$t.__("Map Settings",this.$td),apiKeyInvalid:this.$t.sprintf(this.$t.__("Your API Key is invalid. Please make sure you have set your key correctly. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),placeSelected:this.$t.sprintf(this.$t.__("For a more seamless experience with rich information cards, we recommend that you enable the Maps Embed API for your Google Maps API Key. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapEmbedApi",!0)),displayMap:this.$t.__("Display Map",this.$td),mapPreview:this.$t.__("Map Preview",this.$td)},displayInfo:{block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Map" block.',this.$td),"AIOSEO")},shortcode:{copy:"[aioseo_local_map]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the location map. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeMap",!0))},widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Map" widget.',this.$td),`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_map' ) ) aioseo_local_map(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the location map. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionMap",!0))}},debouncedApiKey:null}},computed:{...u(["options"]),defaultMapOptions(){return{...this.options.localBusiness.maps.mapOptions,...this.$aioseo.localBusiness.mapDefaults}},currentMarker(){return{position:this.options.localBusiness.maps.mapOptions.center,icon:this.options.localBusiness.maps.customMarker}}},methods:{apiKeyFailed(){this.options.localBusiness.maps.apiKeyValid=!1},checkApiKey(){y(()=>{this.debouncedApiKey=this.options.localBusiness.maps.apiKey,this.options.localBusiness.maps.apiKeyValid=!0,this.options.localBusiness.maps.mapsEmbedApiEnabled=null,window.gm_authFailure=this.apiKeyFailed,this.checkMapEmbedApi()},1500)},checkMapEmbedApi(){c(this.options.localBusiness.maps.apiKey,"places/embed").then(e=>{this.options.localBusiness.maps.mapsEmbedApiEnabled=e})}},mounted(){this.options.localBusiness.maps.apiKey&&(this.debouncedApiKey=this.options.localBusiness.maps.apiKey,this.checkMapEmbedApi())}};var L=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s(t.strings.googleMapsApiKey))])]},proxy:!0}])},[s("div",{staticClass:"aioseo-settings-row"},[s("p",{staticClass:"apikey-description",domProps:{innerHTML:t._s(t.strings.description)}})]),s("core-settings-row",{attrs:{name:t.strings.apiKey,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-input",{class:{"aioseo-error":t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid===!1},attrs:{size:"medium",spellcheck:!1},on:{input:function(n){return t.checkApiKey()}},scopedSlots:t._u([{key:"append-icon",fn:function(){return[s("div",{staticClass:"append-icon"},[[t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid===!1?s("svg-circle-close"):t._e()]],2)]},proxy:!0}]),model:{value:t.options.localBusiness.maps.apiKey,callback:function(n){t.$set(t.options.localBusiness.maps,"apiKey",n)},expression:"options.localBusiness.maps.apiKey"}}),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(t.strings.apiKeyDescription)}}),t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid===!1?s("core-alert",{attrs:{type:"red"},domProps:{innerHTML:t._s(t.strings.apiKeyInvalid)}}):t._e(),t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid&&t.options.localBusiness.maps.mapsEmbedApiEnabled===!1?s("core-alert",{attrs:{type:"blue"},domProps:{innerHTML:t._s(t.strings.placeSelected)}}):t._e()]},proxy:!0}])}),t.debouncedApiKey?s("core-settings-row",{attrs:{name:t.strings.mapPreview,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("core-map",{attrs:{apiKey:t.debouncedApiKey,options:t.defaultMapOptions,placeId:t.options.localBusiness.maps.placeId,marker:t.currentMarker}})]},proxy:!0}],null,!1,2126454560)}):t._e()],1),t.options.localBusiness.maps.apiKey?s("core-card",{attrs:{slug:"localBusinessMapsSettings"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s(t.strings.mapSettings))])]},proxy:!0}],null,!1,285057541)},[s("local-business-map-display-info",{attrs:{label:t.strings.displayMap,displayOptions:t.displayInfo}}),s("local-business-map-default-style"),s("local-business-map-custom-marker")],1):t._e()],1)},I=[],P=i(C,L,I,!1,null,null,null,null);const G=P.exports,O={components:{CoreBlur:v,CoreDisplayInfo:l,CoreSettingsRow:r},data(){return{strings:{description:this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations.",this.$td),apiKey:this.$t.__("API Key",this.$td),mapPreview:this.$t.__("Map Preview",this.$td)},displayInfo:{block:{copy:"",desc:""}}}}};var D=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-maps-blur"},[s("core-blur",[s("div",{staticClass:"aioseo-settings-row"},[s("p",{staticClass:"apikey-description"},[t._v(t._s(t.strings.description))])]),s("core-settings-row",{attrs:{name:t.strings.apiKey,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-input",{attrs:{size:"medium"}})]},proxy:!0}])}),s("core-display-info",{attrs:{options:t.displayInfo}}),s("core-settings-row",{attrs:{name:t.strings.mapPreview,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[t._v(" "+t._s(t.strings.description)+" ")]},proxy:!0}])})],1)],1)},R=[],T=i(O,D,R,!1,null,null,null,null);const a=T.exports,E={components:{ActivateCta:$,Blur:a,CoreCard:o},data(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td)}}}};var F=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey","header-text":t.strings.googleMapsApiKey,noSlide:!0}},[s("blur"),s("activate-cta")],1)],1)},U=[],H=i(E,F,U,!1,null,null,null,null);const N=H.exports;const V={components:{Blur:a,RequiredPlans:M,CoreCard:o,CoreProBadge:b,Cta:A},data(){return{features:[this.$t.__("Google Places Support",this.$td),this.$t.__("Google Reviews",this.$td),this.$t.__("Driving Directions",this.$td),this.$t.__("Multiple Locations",this.$td)],strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO Maps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),ctaDescription:this.$t.__("Show your location to your visitors using an interactive Google Map. Create multiple maps for use with multiple locations.",this.$td)}}}};var q=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey",noSlide:!0},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s(t.strings.googleMapsApiKey))]),s("core-pro-badge")]},proxy:!0}])},[s("blur"),s("cta",{attrs:{"cta-link":t.$links.getPricingUrl("local-seo","local-seo-upsell","maps"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":t.features},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[s("required-plans",{attrs:{addon:"aioseo-local-business"}}),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)],1)},z=[],Y=i(V,q,z,!1,null,null,null,null);const j=Y.exports,J={components:{UpdateCta:g,Blur:a,CoreCard:o},data(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td)}}}};var Q=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey","header-text":t.strings.googleMapsApiKey,noSlide:!0}},[s("blur"),s("update-cta")],1)],1)},W=[],X=i(J,Q,W,!1,null,null,null,null);const Z=X.exports,tt={mixins:[S],components:{Maps:G,Activate:N,Lite:j,Update:Z},data(){return{addonSlug:"aioseo-local-business"}}};var st=function(){var t=this,s=t._self._c;return s("div",{staticClass:"aioseo-maps"},[t.shouldShowMain?s("maps"):t._e(),t.shouldShowActivate?s("activate"):t._e(),t.shouldShowUpdate?s("update"):t._e(),t.shouldShowLite?s("lite"):t._e()],1)},et=[],it=i(tt,st,et,!1,null,null,null,null);const qt=it.exports;export{qt as default};