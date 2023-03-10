import{m as r,b as c,a as v}from"./vuex.esm.19624049.js";import{C as h}from"./Blur.ce0e3f00.js";import{C as u}from"./SettingsRow.12bb257d.js";import{S as m}from"./External.d2f08f8f.js";import{B as _}from"./RadioToggle.980c8ff8.js";import{n as o}from"./_plugin-vue2_normalizer.d86aa1f3.js";import{C as d}from"./index.49befd74.js";import{C as a}from"./Card.5b6dc094.js";import{C as l}from"./Index.943b1744.js";import{R as g}from"./RequiredPlans.edf2165a.js";import{C as $}from"./ProBadge.7aea483a.js";import{A as f}from"./WpTable.975e2bfe.js";import"./index.59e9b4d0.js";import{J as y}from"./JsonValues.08065e69.js";import"./SaveChanges.68e73792.js";import{C as S}from"./CommonSitemap.7f174e42.js";import{B as x}from"./Checkbox.eb948ddb.js";import{C as b}from"./ExcludePosts.682ba407.js";import{C as k}from"./PostTypeOptions.d425d6af.js";import"./Row.67f2b082.js";import"./client.1a03de11.js";import"./_commonjsHelpers.10c44588.js";import"./translations.b7a6f669.js";import"./default-i18n.31663a66.js";import"./Caret.2b15c7cb.js";import"./constants.84432201.js";import"./isArrayLikeObject.44af21ce.js";import"./helpers.8308b279.js";import"./portal-vue.esm.c4534d19.js";import"./Tooltip.e966c16d.js";import"./Slide.fe1da4fd.js";import"./attachments.7f95db63.js";import"./cleanForSlug.6a94a785.js";import"./html.9a057d5c.js";import"./Index.c4701ef0.js";import"./Checkmark.57e6a235.js";import"./AddPlus.cf0828ed.js";import"./HighlightToggle.a9c09bdd.js";import"./Radio.2eaa81c8.js";const n={data(){return{strings:{customFieldSupport:this.$t.__("Custom Field Support",this.$td),exclude:this.$t.__("Exclude Pages/Posts",this.$td),video:this.$t.__("Video Sitemap",this.$td),description:this.$t.__("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),openSitemap:this.$t.__("Open Video Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Video Sitemaps",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Video Sitemaps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),linksPerSitemap:this.$t.__("Links Per Sitemap",this.$td),maxLinks:this.$t.__("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",this.$td),enableSitemapIndexes:this.$t.__("Enable Sitemap Indexes",this.$td)}}}},L={components:{CoreBlur:h,CoreSettingsRow:u,SvgExternal:m,BaseRadioToggle:_},mixins:[n]};var P=function(){var t=this,e=t._self._c;return e("core-blur",[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"videoSitemaps",!0))}})]),e("core-settings-row",{attrs:{name:t.strings.enableSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-toggle",{attrs:{value:!0}})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"aioseo-sitemap-preview"},[e("base-button",{attrs:{size:"medium",type:"blue"}},[e("svg-external"),t._v(" "+t._s(t.strings.openSitemap)+" ")],1)],1),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.noIndexDisplayed)+" "),e("br"),t._v(" "+t._s(t.strings.doYou404)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0))}})])]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.enableSitemapIndexes},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"sitemapIndexes",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.sitemapIndexes)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0))}})])]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.linksPerSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-input",{staticClass:"aioseo-links-per-site",attrs:{type:"number",size:"medium",min:1,max:5e4}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.maxLinks)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0))}})])]},proxy:!0}])})],1)},T=[],A=o(L,P,T,!1,null,null,null,null);const p=A.exports,w={components:{Blur:p,CoreAlert:d,CoreCard:a,Cta:l},mixins:[n],data(){return{failed:!1,activationLoading:!1,strings:{videoSitemapHeader:this.$t.__("Enable Video Sitemap on your Site",this.$tdPro),ctaButtonTextActivate:this.$t.__("Activate Video Sitemap",this.$tdPro),learnMoreText:this.$t.__("Learn more about Video Sitemaps",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)}}},methods:{...r(["installPlugins"]),...c(["updateAddon"]),activateAddon(){this.failed=!1,this.activationLoading=!0;const s=this.$addons.getAddon("aioseo-video-sitemap");this.installPlugins([{plugin:s.basename}]).then(t=>{if(this.activationLoading=!1,t.body.failed.length){this.failed=!0;return}s.hasMinimumVersion=!0,s.isActive=!0,this.updateAddon(s)}).catch(()=>{this.activationLoading=!1})}}};var C=function(){var t=this,e=t._self._c;return e("div",[e("core-card",{attrs:{slug:"videoSitemap","header-text":t.strings.video}},[e("blur"),e("cta",{attrs:{"cta-button-visible":t.$addons.userCanInstallOrActivate("aioseo-video-sitemap"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-video-sitemap","same-tab":"","cta-button-action":"","cta-button-loading":t.activationLoading,"button-text":t.strings.ctaButtonTextActivate,"learn-more-link":t.$links.getDocUrl("videoSitemaps"),"feature-list":[t.strings.customFieldSupport,t.strings.exclude]},on:{"cta-button-click":t.activateAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.videoSitemapHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.failed?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.description)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)],1)},I=[],G=o(w,C,I,!1,null,null,null,null);const O=G.exports;const R={components:{Blur:p,RequiredPlans:g,CoreCard:a,CoreProBadge:$,Cta:l},mixins:[n]};var B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-video-sitemap-lite"},[e("core-card",{attrs:{slug:"videoSitemap",noSlide:!0},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.video))]),e("core-pro-badge")]},proxy:!0}])},[e("blur"),e("cta",{attrs:{"feature-list":[t.strings.customFieldSupport,t.strings.exclude],"cta-link":t.$links.getPricingUrl("video-sitemap","video-sitemap-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("video-sitemap",null,"home")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("required-plans",{attrs:{addon:"aioseo-video-sitemap"}}),t._v(" "+t._s(t.strings.description)+" ")]},proxy:!0}])})],1)],1)},M=[],D=o(R,B,M,!1,null,null,null,null);const V=D.exports;const F={components:{BaseCheckbox:x,BaseRadioToggle:_,CoreAlert:d,CoreCard:a,CoreExcludePosts:b,CorePostTypeOptions:k,CoreSettingsRow:u,SvgExternal:m},mixins:[y,S,n],data(){return{pagePostOptions:[],strings:{additionalPages:this.$t.__("Additional Pages",this.$td),additionalPagesTooltip:this.$t.__("You can use this section to add any URLs to your sitemap which aren\u2019t a part of your WordPress installation. For example, if you have a contact form that you would like to be included on your sitemap you can enter the information manually.",this.$td),sitemapSettings:this.$t.__("Video Sitemap Settings",this.$tdPro),enableSitemapIndexes:this.$t.__("Enable Sitemap Indexes",this.$td),sitemapIndexes:this.$t.__("Organize sitemap entries into distinct files in your sitemap. We recommend you enable this setting if your sitemap contains more than 1,000 URLs.",this.$td),linksPerSitemap:this.$t.__("Links Per Sitemap",this.$td),maxLinks:this.$t.__("Allows you to specify the maximum number of posts in a sitemap (up to 50,000).",this.$td),postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap. Categories and Tags are excluded by default since these do not support video embedding.",this.$td),includeCustomFields:this.$t.__("Include Custom Fields",this.$tdPro),includeCustomFieldsDescription:this.$t.__("Enable this option to look for videos in custom fields as well.",this.$tdPro),advancedSettings:this.$t.__("Advanced Settings",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td),excludeTermsDescription:this.$t.__("Any posts that are assigned to these terms will also be excluded from your sitemap.",this.$td),priorityScore:this.$t.__("Priority Score",this.$td),dynamicallyGenerate:this.$t.__("Dynamically Generate",this.$td),dynamicallyGenerateDescription:this.$t.__("Dynamically creates the Video Sitemap instead of using a static file.",this.$tdPro),videoEmbedSettings:this.$t.__("Video Embed Settings",this.$tdPro),embedSettingsTooltip:this.$t.__("This section allows you to manage your video embeds, such as features for Facebook or making them responsive to automatically fit your content width.",this.$tdPro),embed:this.$t.__("Embed",this.$tdPro),playDirectly:this.$t.__("Allow videos to be played directly on other websites, such as Facebook or Twitter.",this.$tdPro),responsive:this.$t.sprintf(this.$t.__("Try to make videos responsive using %1$s?",this.$tdPro),'<a href="http://fitvidsjs.com/" target="_blank">FitVids.js</a>'),contentWidth:this.$t.__("Content Width",this.$tdPro),contentWidthDescription:this.$t.__("This defaults to your theme's content width, but if it's empty, setting a value here will make sure videos are embedded with the right width.",this.$tdPro),wistiaDomain:this.$t.__("Wistia Domain",this.$tdPro),wistiaDomainDescription:this.$t.__("If you use Wistia in combination with a custom domain, set this to the domain name you use for your Wistia videos. Don't include https: or slashes as they are not needed.",this.$tdPro),embedlyApiKey:this.$t.__("Embedly API Key",this.$tdPro),embedlyApiKeyDescription:this.$t.sprintf(this.$t.__("By default, we try to provide enriched information about your videos. A lot of video services are supported by default. For those services which aren't supported, we can try to retrieve enriched video information using %1$s. If you want to use this option, you'll need to sign up for a (free) %2$s account and provide the API key you receive.",this.$tdPro),'<a href="https://embed.ly/" target="_blank">embed.ly</a>','<a href="https://embed.ly/" target="_blank">embed.ly</a>'),warningLinksPerSitemap:this.$t.__("We recommend setting the amount of URLs per sitemap index to 1,000 or less. The more links, the longer it will take for the sitemap to load.",this.$td),warningStaticRegeneration:this.$t.__("Your static sitemap is currently being regenerated. This may take some time based on the size of your site. This may also cause the sitemap content to look outdated.",this.$td)}}},computed:{...v(["options","internalOptions"]),getFrequencyOptions(){return[{label:this.$t.__("default",this.$tdPro),value:"default"}].concat(this.$constants.FREQUENCY_OPTIONS)},getPriorityOptions(){return[{label:this.$t.__("default",this.$tdPro),value:"default"}].concat(this.$constants.PRIORITY_OPTIONS)},getExcludedTaxonomies(){return["category","post_tag"]},noOptions(){return this.type==="posts"?this.strings.noOptionsPosts:this.strings.noOptionsTerms}},methods:{...r(["getObjects"]),processGetPagesPosts(s){return this.getObjects(s).then(t=>{this.pagePostOptions=t.body.posts})},getOptionTitle(s,t){const e=new RegExp(`(${t})`,"gi");return s.replace(e,'<span class="search-term">$1</span>')}}};var E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-video-sitemap"},[e("core-card",{attrs:{slug:"videoSitemap","header-text":t.strings.video}},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"videoSitemaps",!0))}})]),e("core-settings-row",{attrs:{name:t.strings.enableSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-toggle",{model:{value:t.options.sitemap.video.enable,callback:function(i){t.$set(t.options.sitemap.video,"enable",i)},expression:"options.sitemap.video.enable"}})]},proxy:!0}])}),t.options.sitemap.video.enable?e("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview},scopedSlots:t._u([{key:"content",fn:function(){return[e("div",{staticClass:"aioseo-sitemap-preview"},[e("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:t.$aioseo.urls.videoSitemapUrl,target:"_blank"}},[e("svg-external"),t._v(" "+t._s(t.strings.openSitemap)+" ")],1)],1),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.noIndexDisplayed)+" "),e("br"),t._v(" "+t._s(t.strings.doYou404)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0))}})]),!t.options.deprecated.sitemap.video.advancedSettings.dynamic&&t.$aioseo.scheduledActions.sitemap&&t.$aioseo.scheduledActions.sitemap.includes("staticSitemapRegeneration")?e("core-alert",{staticClass:"static-regeneration-notice",attrs:{type:"blue"}},[t._v(" "+t._s(t.strings.warningStaticRegeneration)+" ")]):t._e()]},proxy:!0}],null,!1,837577859)}):t._e()],1),t.options.sitemap.video.enable?e("core-card",{attrs:{slug:"videoSitemapSettings","header-text":t.strings.sitemapSettings}},[e("core-settings-row",{attrs:{name:t.strings.enableSitemapIndexes},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"sitemapIndexes",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]},model:{value:t.options.sitemap.video.indexes,callback:function(i){t.$set(t.options.sitemap.video,"indexes",i)},expression:"options.sitemap.video.indexes"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.sitemapIndexes)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"sitemapIndexes",!0))}})])]},proxy:!0}],null,!1,498101041)}),t.options.sitemap.video.indexes?e("core-settings-row",{attrs:{name:t.strings.linksPerSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-input",{staticClass:"aioseo-links-per-site",attrs:{type:"number",size:"medium",min:1,max:5e4},on:{keyup:t.validateLinksPerIndex},model:{value:t.options.sitemap.video.linksPerIndex,callback:function(i){t.$set(t.options.sitemap.video,"linksPerIndex",i)},expression:"options.sitemap.video.linksPerIndex"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.maxLinks)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"maxLinks",!0))}})]),t.options.sitemap.video.indexes&&1e3<t.options.sitemap.video.linksPerIndex?e("core-alert",{attrs:{type:"blue"}},[t._v(" "+t._s(t.strings.warningLinksPerSitemap)+" ")]):t._e()]},proxy:!0}],null,!1,1583919153)}):t._e(),e("core-settings-row",{attrs:{name:t.strings.postTypes},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.sitemap.video.postTypes.all,callback:function(i){t.$set(t.options.sitemap.video.postTypes,"all",i)},expression:"options.sitemap.video.postTypes.all"}},[t._v(" "+t._s(t.strings.includeAllPostTypes)+" ")]),t.options.sitemap.video.postTypes.all?t._e():e("core-post-type-options",{attrs:{options:t.options.sitemap.video,type:"postTypes"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.selectPostTypes)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesVideo",!0))}})])]},proxy:!0}],null,!1,1183354883)}),e("core-settings-row",{attrs:{name:t.strings.taxonomies},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.sitemap.video.taxonomies.all,callback:function(i){t.$set(t.options.sitemap.video.taxonomies,"all",i)},expression:"options.sitemap.video.taxonomies.all"}},[t._v(" "+t._s(t.strings.includeAllTaxonomies)+" ")]),t.options.sitemap.video.taxonomies.all?t._e():e("core-post-type-options",{attrs:{options:t.options.sitemap.video,type:"taxonomies",excluded:t.getExcludedTaxonomies}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.selectTaxonomies)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"selectTaxonomiesVideo",!0))}})])]},proxy:!0}],null,!1,3832818898)})],1):t._e(),t.options.sitemap.video.enable?e("core-card",{attrs:{slug:"videoAdvancedSettings",toggles:t.options.sitemap.video.advancedSettings.enable},scopedSlots:t._u([{key:"header",fn:function(){return[e("base-toggle",{model:{value:t.options.sitemap.video.advancedSettings.enable,callback:function(i){t.$set(t.options.sitemap.video.advancedSettings,"enable",i)},expression:"options.sitemap.video.advancedSettings.enable"}}),e("span",[t._v(t._s(t.strings.advancedSettings))])]},proxy:!0}],null,!1,218343662)},[e("core-settings-row",{staticClass:"aioseo-exclude-pages-posts",attrs:{name:t.strings.excludePostsPages,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-exclude-posts",{attrs:{options:t.options.sitemap.video.advancedSettings,type:"posts"}})]},proxy:!0}],null,!1,31633293)}),e("core-settings-row",{staticClass:"aioseo-exclude-terms",attrs:{name:t.strings.excludeTerms,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-exclude-posts",{attrs:{options:t.options.sitemap.video.advancedSettings,type:"terms"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.excludeTermsDescription)+" ")])]},proxy:!0}],null,!1,446157304)}),t.internalOptions.internal.deprecatedOptions.includes("staticVideoSitemap")?e("core-settings-row",{attrs:{name:t.strings.dynamicallyGenerate},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"dynamic",options:[{label:t.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:t.options.deprecated.sitemap.video.advancedSettings.dynamic,callback:function(i){t.$set(t.options.deprecated.sitemap.video.advancedSettings,"dynamic",i)},expression:"options.deprecated.sitemap.video.advancedSettings.dynamic"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.dynamicallyGenerateDescription)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"dynamicallyGenerateVideo",!0))}})])]},proxy:!0}],null,!1,2638026720)}):t._e(),e("core-settings-row",{attrs:{name:t.strings.includeCustomFields,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"includeCustomFields",options:[{label:t.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:t.options.sitemap.video.advancedSettings.customFields,callback:function(i){t.$set(t.options.sitemap.video.advancedSettings,"customFields",i)},expression:"options.sitemap.video.advancedSettings.customFields"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.includeCustomFieldsDescription)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"includeCustomFields",!0))}})])]},proxy:!0}],null,!1,225844562)})],1):t._e()],1)},N=[],H=o(F,E,N,!1,null,null,null,null);const U=H.exports,W={components:{Blur:p,CoreAlert:d,CoreCard:a,Cta:l},mixins:[n],data(){return{failed:!1,activationLoading:!1,strings:{videoSitemapHeader:this.$t.__("Enable Video Sitemap on your Site",this.$tdPro),ctaButtonTextActivate:this.$t.__("Update Video Sitemap",this.$tdPro),learnMoreText:this.$t.__("Learn more about Video Sitemaps",this.$tdPro),activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to update this addon. Please ask a site administrator to update.",this.$td),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$td),"AIOSEO","Pro",this.$addons.getAddon("aioseo-video-sitemap").minimumVersion,"Video Sitemap",this.$addons.getAddon("aioseo-video-sitemap").installedVersion)}}},methods:{...r(["upgradePlugins"]),...c(["updateAddon"]),upgradeAddon(){this.failed=!1,this.activationLoading=!0;const s=this.$addons.getAddon("aioseo-video-sitemap");this.upgradePlugins([{plugin:s.sku}]).then(t=>{if(t.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const e=t.body.completed[s.sku];this.activationLoading=!1,s.hasMinimumVersion=!0,s.isActive=!0,s.installedVersion=e.installedVersion,this.updateAddon(s)}).catch(()=>{this.activationLoading=!1})}}};var Y=function(){var t=this,e=t._self._c;return e("div",[e("core-card",{attrs:{slug:"videoSitemap","header-text":t.strings.video}},[e("blur"),e("cta",{attrs:{"cta-button-visible":t.$addons.userCanUpdate("aioseo-video-sitemap"),"cta-button-visible-warning":t.strings.permissionWarning,"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-video-sitemap","same-tab":"","cta-button-action":"","cta-button-loading":t.activationLoading,"button-text":t.strings.ctaButtonTextActivate,"learn-more-link":t.$links.getDocUrl("videoSitemaps"),"feature-list":[t.strings.customFieldSupport,t.strings.exclude]},on:{"cta-button-click":t.upgradeAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.videoSitemapHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("core-alert",{attrs:{type:"yellow"}},[t._v(" "+t._s(t.strings.updateRequired)+" ")]),t.failed?e("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.description)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)],1)},z=[],q=o(W,Y,z,!1,null,null,null,null);const j=q.exports;const K={mixins:[f],components:{Activate:O,Lite:V,VideoSitemap:U,Update:j},data(){return{addonSlug:"aioseo-video-sitemap"}}};var J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-video-sitemap"},[t.shouldShowMain?e("video-sitemap"):t._e(),t.shouldShowActivate?e("activate"):t._e(),t.shouldShowUpdate?e("update"):t._e(),t.shouldShowLite?e("lite"):t._e()],1)},X=[],Q=o(K,J,X,!1,null,null,null,null);const Vt=Q.exports;export{Vt as default};