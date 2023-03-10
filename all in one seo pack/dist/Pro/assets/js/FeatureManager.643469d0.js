import"./WpTable.975e2bfe.js";import{n as i}from"./_plugin-vue2_normalizer.d86aa1f3.js";import"./index.59e9b4d0.js";import{L as o}from"./License.0917d025.js";import"./SaveChanges.68e73792.js";import{c as n,a as l,m as c}from"./vuex.esm.19624049.js";import{c as u}from"./news-sitemap.36087ff1.js";import{C as d}from"./index.49befd74.js";import{C as m,S as p,a as h}from"./SitemapsPro.d423aa39.js";import{C as g}from"./Index.c4701ef0.js";import{C as _}from"./Index.943b1744.js";import{G as f,a as v}from"./Row.67f2b082.js";import{S as y}from"./Caret.2b15c7cb.js";import{a as $,S as A}from"./ImageSeo.287a8e5c.js";import{S as b}from"./Redirect.9f75a265.js";import"./helpers.8308b279.js";import"./attachments.7f95db63.js";import"./cleanForSlug.6a94a785.js";import"./isArrayLikeObject.44af21ce.js";import"./constants.84432201.js";import"./default-i18n.31663a66.js";import"./html.9a057d5c.js";import"./client.1a03de11.js";import"./_commonjsHelpers.10c44588.js";import"./translations.b7a6f669.js";import"./portal-vue.esm.c4534d19.js";import"./params.bea1a08d.js";import"./Url.781a1d48.js";import"./Tooltip.e966c16d.js";const w={};var k=function(){var t=this,e=t._self._c;return e("svg",{staticClass:"aioseo-code",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"}})])},S=[],C=i(w,k,S,!1,null,null,null,null);const x=C.exports;const F={components:{CoreAlert:d,CoreFeatureCard:m,CoreModal:g,Cta:_,GridColumn:f,GridRow:v,SvgClose:y,SvgCode:x,SvgImageSeo:$,SvgLinkAssistant:p,SvgLocalBusiness:A,SvgRedirect:b,SvgSitemapsPro:h},mixins:[o],data(){return{ctaImg:u,showNetworkModal:!1,maybeActivate:!1,maybeDeactivate:!1,search:null,loading:{activateAll:!1,deactivateAll:!1},strings:{videoNewsSitemaps:this.$t.__("Video and News Sitemaps",this.$td),imageSeoOptimization:this.$t.__("Image SEO Optimization",this.$td),localBusinessSeo:this.$t.__("Local Business SEO",this.$td),advancedWooCommerce:this.$t.__("Advanced WooCommerce",this.$td),customTaxonomies:this.$t.__("SEO for Categories, Tags and Custom Taxonomies",this.$td),andMore:this.$t.__("And many more...",this.$td),activateAllFeatures:this.$t.__("Activate All Features",this.$td),deactivateAllFeatures:this.$t.__("Deactivate All Features",this.$td),searchForFeatures:this.$t.__("Search for Features...",this.$td),ctaHeaderText:this.$t.sprintf(this.$t.__("Upgrade %1$s to Pro and Unlock all Features!",this.$td),"AIOSEO"),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock All Features",this.$td),aValidLicenseIsRequired:this.$t.__("A valid license key is required in order to use our addons.",this.$td),enterLicenseKey:this.$t.__("Enter License Key",this.$td),purchaseLicense:this.$t.__("Purchase License",this.$td),areYouSureNetworkChange:this.$t.__("This is a network-wide change.",this.$td),yesProcessNetworkChange:this.$t.__("Yes, process this network change",this.$td),noChangedMind:this.$t.__("No, I changed my mind",this.$td)},descriptions:{aioseoImageSeo:{description:"<p>"+this.$t.__("Globally control the Title attribute and Alt text for images in your content. These attributes are essential for both accessibility and SEO.",this.$td)+"</p>",version:0},aioseoVideoSitemap:{description:"<p>"+this.$t.__("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",this.$td)+"</p>",version:0},aioseoNewsSitemap:{description:"<p>"+this.$t.__("Our Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours. In order to submit a News Sitemap to Google, you must have added your site to Google\u2019s Publisher Center and had it approved.",this.$td)+"</p>",version:0},aioseoLocalBusiness:{description:"<p>"+this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td)+"</p>",version:0}}}},computed:{...n(["isUnlicensed"]),...l(["addons"]),upgradeToday(){return this.$t.sprintf(this.$t.__("%1$s %2$s comes with many additional features to help take your site's SEO to the next level!",this.$td),"AIOSEO","Pro")},getAddons(){return this.addons.filter(a=>!this.search||a.name.toLowerCase().includes(this.search.toLowerCase()))},networkChangeMessage(){return this.activated?this.$t.__("Are you sure you want to deactivate these addons across the network?",this.$td):this.$t.__("Are you sure you want to activate these addons across the network?",this.$td)}},methods:{...c(["installPlugins","deactivatePlugins"]),closeNetworkModal(a=!1){if(this.showNetworkModal=!1,a){const t=this.maybeActivate?"actuallyActivateAllFeatures":"actuallyDeactivateAllFeatures";this.maybeActivate=!1,this.maybeDeactivate=!1,this[t]()}},getIconComponent(a){return a.startsWith("svg-")?a:"img"},getIconSrc(a,t){return typeof a=="string"&&a.startsWith("svg-")?null:typeof a=="string"?`data:image/svg+xml;base64,${a}`:t},getAddonDescription(a){const t=a.sku.replace(/-./g,e=>e.toUpperCase()[1]);return this.descriptions[t]&&this.descriptions[t].description&&a.descriptionVersion<=this.descriptions[t].version?this.descriptions[t].description:a.description},activateAllFeatures(){if(!this.$isPro||!this.$aioseo.license.isActive)return window.open(this.$links.utmUrl(this.$aioseo.data.isNetworkAdmin?"network-activate-all-features":"activate-all-features"));if(this.$aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeActivate=!0;return}this.actuallyActivateAllFeatures()},actuallyActivateAllFeatures(){this.loading.activateAll=!0;const a=this.addons.filter(t=>!t.requiresUpgrade).map(t=>({plugin:t.basename}));this.installPlugins(a).then(t=>{const e=Object.keys(t.body.completed).map(s=>t.body.completed[s]);this.$refs.addons.forEach(s=>{e.includes(s.feature.basename)&&(s.activated=!0)}),this.loading.activateAll=!1})},deactivateAllFeatures(){if(this.$aioseo.data.isNetworkAdmin){this.showNetworkModal=!0,this.maybeDeactivate=!0;return}this.actuallyDeactivateAllFeatures()},actuallyDeactivateAllFeatures(){this.loading.deactivateAll=!0;const a=this.addons.filter(t=>!t.requiresUpgrade).filter(t=>t.installed).map(t=>({plugin:t.basename}));this.deactivatePlugins(a).then(t=>{const e=Object.keys(t.body.completed).map(s=>t.body.completed[s]);this.$refs.addons.forEach(s=>{e.includes(s.feature.basename)&&(s.activated=!1)}),this.loading.deactivateAll=!1})}}};var N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-feature-manager"},[e("div",{staticClass:"aioseo-feature-manager-header"},[t.getAddons.filter(s=>s.canActivate===!0).length>0?e("div",{staticClass:"buttons"},[e("div",{staticClass:"button-content"},[e("base-button",{attrs:{size:"medium",type:"blue",loading:t.loading.activateAll},on:{click:t.activateAllFeatures}},[t._v(t._s(t.strings.activateAllFeatures))]),t.isUnlicensed?t._e():e("base-button",{attrs:{size:"medium",type:"gray",loading:t.loading.deactivateAll},on:{click:t.deactivateAllFeatures}},[t._v(t._s(t.strings.deactivateAllFeatures))])],1)]):t._e(),e("div",{staticClass:"search"},[e("base-input",{attrs:{size:"medium",placeholder:t.strings.searchForFeatures,"prepend-icon":"search"},model:{value:t.search,callback:function(s){t.search=s},expression:"search"}})],1)]),e("div",{staticClass:"aioseo-feature-manager-addons"},[t.$isPro&&t.isUnlicensed?e("core-alert",{attrs:{type:"red"}},[e("strong",[t._v(t._s(t.yourLicenseIsText))]),t._v(" "+t._s(t.strings.aValidLicenseIsRequired)+" "),e("div",{staticClass:"buttons"},[e("base-button",{attrs:{type:"blue",size:"small",tag:"a",href:t.$aioseo.data.isNetworkAdmin?t.$aioseo.urls.aio.networkSettings:t.$aioseo.urls.aio.settings}},[t._v(" "+t._s(t.strings.enterLicenseKey)+" ")]),e("base-button",{attrs:{type:"green",size:"small",tag:"a",target:"_blank",href:t.$links.getUpsellUrl("feature-manager-upgrade","no-license-key","pricing")}},[t._v(" "+t._s(t.strings.purchaseLicense)+" ")])],1)]):t._e(),e("grid-row",t._l(t.getAddons,function(s,r){return e("grid-column",{key:r,attrs:{sm:"6",lg:"4"}},[e("core-feature-card",{ref:"addons",refInFor:!0,attrs:{"can-activate":s.canActivate,"can-manage":t.$allowed(s.capability),feature:s},scopedSlots:t._u([{key:"title",fn:function(){return[e(t.getIconComponent(s.icon),{tag:"component",attrs:{src:t.getIconSrc(s.icon,s.image)}}),t._v(" "+t._s(s.name)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("div",{domProps:{innerHTML:t._s(t.getAddonDescription(s))}})]},proxy:!0}],null,!0)})],1)}),1)],1),t.isUnlicensed?e("cta",{staticClass:"feature-manager-upsell",attrs:{type:2,"button-text":t.strings.ctaButtonText,floating:!1,"cta-link":t.$links.utmUrl("feature-manager","main-cta"),"learn-more-link":t.$links.getUpsellUrl("feature-manager","main-cta","home"),"feature-list":[t.strings.videoNewsSitemaps,t.strings.imageSeoOptimization,t.strings.localBusinessSeo,t.strings.advancedWooCommerce,t.strings.customTaxonomies,t.strings.andMore]},scopedSlots:t._u([{key:"header-text",fn:function(){return[e("span",{staticClass:"large"},[t._v(t._s(t.strings.ctaHeaderText))])]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.upgradeToday)+" ")]},proxy:!0},{key:"featured-image",fn:function(){return[e("img",{attrs:{alt:"Purchase AIOSEO Today!",src:t.$getAssetUrl(t.ctaImg)}})]},proxy:!0}],null,!1,1960250908)}):t._e(),t.showNetworkModal?e("core-modal",{attrs:{"no-header":""},on:{close:function(s){return t.closeNetworkModal(!1)}},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"aioseo-modal-body"},[e("button",{staticClass:"close",on:{click:function(s){return s.stopPropagation(),t.closeNetworkModal(!1)}}},[e("svg-close",{on:{click:function(s){return s.stopPropagation(),t.closeNetworkModal(!1)}}})],1),e("h3",[t._v(t._s(t.strings.areYouSureNetworkChange))]),e("div",{staticClass:"reset-description",domProps:{innerHTML:t._s(t.networkChangeMessage)}}),e("base-button",{attrs:{type:"blue",size:"medium"},on:{click:function(s){return t.closeNetworkModal(!0)}}},[t._v(" "+t._s(t.strings.yesProcessNetworkChange)+" ")]),e("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(s){return t.closeNetworkModal(!1)}}},[t._v(" "+t._s(t.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,3584506124)}):t._e()],1)},L=[],M=i(F,N,L,!1,null,null,null,null);const nt=M.exports;export{nt as default};
