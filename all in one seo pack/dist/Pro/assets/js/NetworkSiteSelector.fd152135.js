import{c as o}from"./WpTable.975e2bfe.js";import{n as i}from"./_plugin-vue2_normalizer.d86aa1f3.js";import"./index.59e9b4d0.js";import"./SaveChanges.68e73792.js";const r={mixins:[o],props:{showNetwork:Boolean},data(){return{site:null,network:{value:"network",label:this.$t.__("Network Admin (no site)",this.$td)}}},watch:{site(e){let t=this.$aioseo.data.network.sites.sites.find(n=>this.getUniqueSiteId(n)===e.value);e.value==="network"&&(t={blog_id:"network"}),this.$emit("selected-site",t)}},computed:{sites(){const e=this.getSites.filter(t=>!t.parentDomain).map(t=>({value:this.getUniqueSiteId(t),label:`${t.domain}${t.path}`}));return this.showNetwork?[this.network].concat(e):e}},created(){this.showNetwork&&(this.site=this.network)}};var a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"aioseo-network-site-selector"},[n("base-select",{attrs:{size:"medium",options:t.sites},model:{value:t.site,callback:function(s){t.site=s},expression:"site"}})],1)},l=[],c=i(r,a,l,!1,null,null,null,null);const f=c.exports;export{f as C};
