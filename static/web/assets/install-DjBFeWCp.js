import{j as e}from"./vendor-map-CE4d5YIX.js";import{u as E,i as A,j as C,k as y,z as U,m as H,n as B,o as k,r as P,g as z,D as W,h as L,p as M}from"./modulepreload-polyfill-EV7mDuCf.js";import{r as g}from"./vendor-react-PEuRF1c_.js";import"./vendor-echarts-MrFpn7eE.js";import"./vendor-lib-BVPxUOb1.js";import"./vendor-tinymce-D1FYj-JL.js";import"./index-DBcwkRI-.js";import{S as c,B as b,D as R,b as S,L as N,F as r,I as h,A as w,c as Y,d as q,e as D,f as G,g as K,h as J,i as V}from"./vendor-tdesign-Bkc5HfQ6.js";import"./vendor-refine-YO-08iKi.js";import"./vendor-markdown-DBx9sqkl.js";import"./editor-Dg0x6Ku5.js";import"./useSelect-CPLYU2d6.js";import"./cascader-Csfpe9Pf.js";import"./useUpload-DxbIJWgS.js";import"./uploadFile-YsBOGyhm.js";import"./manage-BKyw5xWS.js";const X=({setTab:d})=>{const{t:u,i18n:j}=E(),x=j.language;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-component p-4 pt-1",children:e.jsxs("div",{className:"max-w-full prose",children:[e.jsx("p",{className:"text-center text-lg font-bold",children:"MIT License Copyright (c) 2023 duxweb"}),e.jsx("p",{children:'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:'}),e.jsx("p",{children:"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."}),e.jsx("p",{children:'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'})]})}),e.jsxs(T,{children:[e.jsx("div",{children:e.jsxs(c,{value:x,onChange:s=>{j.changeLanguage(s)},children:[e.jsx(c.Option,{value:"en-US",children:"English"}),e.jsx(c.Option,{value:"zh-CN",children:"简体中文"}),e.jsx(c.Option,{value:"zh-TW",children:"繁体中文"}),e.jsx(c.Option,{value:"ja-JP",children:"日本語"}),e.jsx(c.Option,{value:"ko-KR",children:"한국어"}),e.jsx(c.Option,{value:"ru-RU",children:"русск"})]})}),e.jsx(b,{theme:"default",onClick:()=>{window.alert(u("install.close",{ns:"extend"}))},children:u("install.disagree",{ns:"extend"})}),e.jsx(b,{onClick:()=>{d(1)},children:u("install.agree",{ns:"extend"})})]})]})},$=({setTab:d,config:u,path:j})=>{const{t:x}=E(),[s,n]=g.useState({});g.useEffect(()=>{A.get((u.apiUrl||"")+j).then(a=>{var i;n((i=a==null?void 0:a.data)==null?void 0:i.data)})},[]);const o=s==null?void 0:s.ext,t=s==null?void 0:s.packages,l=(s==null?void 0:s.status)||!1;return e.jsxs(e.Fragment,{children:[e.jsx(R,{align:"center",layout:"horizontal",children:x("install.pakcage",{ns:"extend"})}),e.jsx(S,{loading:!t||!(t!=null&&t.length),theme:"paragraph",children:e.jsx(N,{children:t==null?void 0:t.map((a,i)=>e.jsx(N.ListItem,{action:e.jsx("div",{className:"text-gray-6",children:a==null?void 0:a.ver}),children:a==null?void 0:a.name},i))})}),e.jsx(R,{align:"center",layout:"horizontal",children:x("install.extend",{ns:"extend"})}),e.jsx(S,{loading:!o||!(o!=null&&o.length),theme:"paragraph",children:e.jsx(N,{children:o==null?void 0:o.map((a,i)=>e.jsx(N.ListItem,{action:e.jsx("div",{className:C(["h-4 w-4 flex items-center justify-center rounded-full p-1 text-white ",a!=null&&a.status?"bg-success":"bg-error"]),children:a!=null&&a.status?e.jsx("div",{className:"i-tabler:check"}):e.jsx("div",{className:"i-tabler:x"})}),children:a==null?void 0:a.name},i))})}),e.jsxs(T,{children:[e.jsx(b,{theme:"default",onClick:()=>{d(0)},children:x("install.prev",{ns:"extend"})}),e.jsx(b,{disabled:!l,onClick:()=>{d(2)},children:x("install.next",{ns:"extend"})})]})]})},Q=({setTab:d,setData:u,config:j,path:x,types:s})=>{const{t:n,i18n:o}=E(),t=o.language,[l,a]=g.useState({}),i=f=>{A.post((j.apiUrl||"")+x,f.fields).then(m=>{var F,v;a((F=m==null?void 0:m.data)==null?void 0:F.data);const O=(v=m==null?void 0:m.data)==null?void 0:v.data;O!=null&&O.error||(d(3),u(f.fields))}).catch(m=>{console.log(m),a({error:!0,message:(m==null?void 0:m.message)||"Unknown"})})},[p]=r.useForm(),I=r.useWatch(["database","type"],p);return e.jsx(e.Fragment,{children:e.jsxs(r,{onSubmit:i,form:p,children:[e.jsx(R,{align:"center",layout:"horizontal",children:n("install.system",{ns:"extend"})}),e.jsx(r.FormItem,{initialData:t,label:n("install.systemLang",{ns:"extend"}),name:["use","lang"],children:e.jsxs(c,{children:[e.jsx(c.Option,{value:"en-US",children:"English"}),e.jsx(c.Option,{value:"zh-CN",children:"简体中文"}),e.jsx(c.Option,{value:"zh-TW",children:"繁体中文"}),e.jsx(c.Option,{value:"ja-JP",children:"日本語"}),e.jsx(c.Option,{value:"ko-KR",children:"한국어"}),e.jsx(c.Option,{value:"ru-RU",children:"русск"})]})}),e.jsx(r.FormItem,{initialData:"Dux",label:n("install.systemName",{ns:"extend"}),name:["use","name"],children:e.jsx(h,{})}),e.jsx(r.FormItem,{initialData:"http://localhost",label:n("install.systemDomain",{ns:"extend"}),name:["use","domain"],children:e.jsx(h,{})}),e.jsx(R,{align:"center",layout:"horizontal",children:n("install.database",{ns:"extend"})}),(l==null?void 0:l.error)&&e.jsx("div",{className:"mb-6",children:e.jsx(w,{theme:"error",message:l==null?void 0:l.message})}),e.jsx(r.FormItem,{initialData:s[0],label:n("install.databaseType",{ns:"extend"}),name:["database","type"],children:e.jsx(c,{options:s==null?void 0:s.map(f=>({label:f,value:f}))})}),I=="mysql"&&e.jsxs(e.Fragment,{children:[e.jsx(r.FormItem,{initialData:"localhost",label:n("install.databaseHost",{ns:"extend"}),name:["database","host"],children:e.jsx(h,{})}),e.jsx(r.FormItem,{initialData:"dux",label:n("install.databaseName",{ns:"extend"}),name:["database","name"],children:e.jsx(h,{})}),e.jsx(r.FormItem,{initialData:"root",label:n("install.databaseUsername",{ns:"extend"}),name:["database","username"],children:e.jsx(h,{})}),e.jsx(r.FormItem,{initialData:"",label:n("install.databasePassword",{ns:"extend"}),name:["database","password"],children:e.jsx(h,{})}),e.jsx(r.FormItem,{initialData:"3306",label:n("install.databasePort",{ns:"extend"}),name:["database","port"],children:e.jsx(h,{})})]}),I=="postgresql"&&e.jsxs(e.Fragment,{children:[e.jsx(r.FormItem,{initialData:"localhost",label:n("install.databaseHost",{ns:"extend"}),name:["database","host"],children:e.jsx(h,{})}),e.jsx(r.FormItem,{initialData:"dux",label:n("install.databaseName",{ns:"extend"}),name:["database","name"],children:e.jsx(h,{})}),e.jsx(r.FormItem,{initialData:"root",label:n("install.databaseUsername",{ns:"extend"}),name:["database","username"],children:e.jsx(h,{})}),e.jsx(r.FormItem,{initialData:"",label:n("install.databasePassword",{ns:"extend"}),name:["database","password"],children:e.jsx(h,{})}),e.jsx(r.FormItem,{initialData:"5432",label:n("install.databasePort",{ns:"extend"}),name:["database","port"],children:e.jsx(h,{})})]}),e.jsxs(T,{children:[e.jsx(b,{theme:"default",onClick:()=>{d(1)},children:n("install.prev",{ns:"extend"})}),e.jsx(b,{type:"submit",children:n("install.next",{ns:"extend"})})]})]})})},Z=({config:d,data:u,path:j})=>{const[x,s]=g.useState(!0),[n,o]=g.useState(!1),[t,l]=g.useState({}),{t:a}=E();return g.useEffect(()=>{A.post((d.apiUrl||"")+j,u).then(i=>{var p,I;s(!1),o(!0),i.status==200?l((p=i.data)==null?void 0:p.data):l({error:!0,message:((I=i==null?void 0:i.data)==null?void 0:I.message)||"Unknown Error"})}).catch(i=>{s(!1),l({error:!0,message:(i==null?void 0:i.message)||"Unknown"})})},[]),e.jsxs(e.Fragment,{children:[e.jsx(Y,{size:"small",loading:x,showOverlay:!0,text:a("install.loading",{ns:"extend"}),children:e.jsx("div",{className:"",children:e.jsx(S,{theme:"paragraph",animation:"flashed",loading:x,children:t!=null&&t.error?e.jsx(w,{theme:"error",message:t==null?void 0:t.message}):e.jsx("div",{className:"bg-component p-4",children:e.jsx("pre",{children:t.logs})})})})}),n&&e.jsx(T,{children:e.jsx(b,{onClick:()=>{window.location.href="/manage"},children:a("install.login",{ns:"extend"})})})]})},_="/web/assets/background-DLLzPY35.svg",ee=({config:d,logo:u,pathDetection:j,pathConfig:x,pathComplete:s,databaseTypes:n=["mysql"]})=>{const[o,t]=g.useState(0),{t:l,i18n:a}=E(),[i,p]=g.useState({});return g.useEffect(()=>{a.addResourceBundle("en-US","extend",y),a.addResourceBundle("zh-CN","extend",U),a.addResourceBundle("zh-TW","extend",H),a.addResourceBundle("ja-JP","extend",B),a.addResourceBundle("ko-KR","extend",k),a.addResourceBundle("ru-RU","extend",P),a.changeLanguage(a.language)},[]),e.jsx("div",{className:"h-screen w-screen overflow-x-hidden overflow-y-auto flex justify-center bg-repeat bg-page",style:{backgroundImage:`url(${_})`},children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"mt-8",children:u}),e.jsxs("div",{className:"m-8 max-w-full w-200 rounded-lg p-10 shadow bg-container",children:[e.jsxs(q,{current:o,children:[e.jsx(D,{icon:e.jsx(G,{}),title:l("install.agreement",{ns:"extend"}),content:l("install.agreementDesc",{ns:"extend"})}),e.jsx(D,{icon:e.jsx(K,{}),title:l("install.detection",{ns:"extend"}),content:l("install.detectionDesc",{ns:"extend"})}),e.jsx(D,{icon:e.jsx(J,{}),title:l("install.config",{ns:"extend"}),content:l("install.configDesc",{ns:"extend"})}),e.jsx(D,{icon:e.jsx(V,{}),title:l("install.complete",{ns:"extend"}),content:l("install.completeDesc",{ns:"extend"})})]}),e.jsx("div",{className:"mt-10",children:e.jsxs("div",{children:[o===0&&e.jsx(X,{setTab:t}),o===1&&e.jsx($,{setTab:t,config:d,path:j}),o===2&&e.jsx(Q,{setTab:t,config:d,setData:p,path:x,types:n}),o===3&&e.jsx(Z,{setTab:t,config:d,data:i,path:s})]})})]})]})})},T=({children:d})=>e.jsx("div",{className:"mt-4 flex flex justify-end gap-2",children:d}),ae=document.getElementById("root"),ne=z(ae);ne.render(e.jsx(W,{config:L,children:e.jsx(ee,{config:L,pathDetection:"/install/detection",pathConfig:"/install/config",pathComplete:"/install/complete",logo:e.jsx(M,{className:"h-10"}),databaseTypes:["sqlite","mysql","postgresql"]})}));
