import{j as i}from"./vendor-map-CE4d5YIX.js";import{A as n,ao as d,ar as g}from"./vendor-refine-YO-08iKi.js";import{Z as p}from"./modulepreload-polyfill-EV7mDuCf.js";import"./vendor-react-PEuRF1c_.js";import"./vendor-echarts-MrFpn7eE.js";import"./vendor-lib-BVPxUOb1.js";import"./vendor-tinymce-D1FYj-JL.js";import"./index-DBcwkRI-.js";import{M as f}from"./form-DFfOm-Vz.js";import{F as u,a7 as x}from"./vendor-tdesign-Bkc5HfQ6.js";import"./vendor-markdown-DBx9sqkl.js";import"./editor-Dg0x6Ku5.js";import"./useSelect-CPLYU2d6.js";import"./cascader-Csfpe9Pf.js";import"./useUpload-DxbIJWgS.js";import"./uploadFile-YsBOGyhm.js";import"./manage-BKyw5xWS.js";const L=t=>{var o,r,e,s;const l=n(),{data:a}=d({url:"tools/magic/config",method:"get",meta:{params:{magic:t.magic}}}),{data:m,isLoading:c}=g({resource:"tools.data",meta:{params:{magic:t.magic}},pagination:{mode:"off"}});return i.jsxs(p,{queryParams:{magic:t.magic},id:t==null?void 0:t.id,useFormProps:{queryOptions:{cacheTime:0}},children:[((o=a==null?void 0:a.data)==null?void 0:o.type)=="tree"&&i.jsx(u.FormItem,{label:l("tools.data.fields.parent"),name:"parent_id",children:i.jsx(x,{checkStrictly:!0,loading:c,options:m==null?void 0:m.data,keys:{label:((r=a==null?void 0:a.data)==null?void 0:r.tree_label)||"name",value:"id"},clearable:!0})}),((e=a==null?void 0:a.data)==null?void 0:e.fields)&&i.jsx(f,{fields:(s=a==null?void 0:a.data)==null?void 0:s.fields})]})};export{L as default};
