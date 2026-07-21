"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6151],{5218:(e,t,r)=>{r.d(t,{TagInput:()=>l});var a=r(95155),i=r(12115),o=r(45369),n=r(33210);function l({name:e,defaultValue:t="",placeholder:r="Add a tag..."}){let[d,s]=(0,i.useState)(t.split(",").map(e=>e.trim()).filter(Boolean)),[p,c]=(0,i.useState)("");return(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:d.map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-1 bg-slate-100 text-slate-800 px-2 py-1 rounded-md text-xs font-medium dark:bg-slate-800 dark:text-slate-200",children:[(0,a.jsx)("span",{children:e}),(0,a.jsx)("button",{type:"button",onClick:()=>{s(d.filter(t=>t!==e))},className:"text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200",children:(0,a.jsx)(n.A,{className:"h-3 w-3"})})]},e))}),(0,a.jsx)(o.Input,{type:"text",placeholder:r,value:p,onChange:e=>c(e.target.value),onKeyDown:e=>{if("Enter"===e.key||","===e.key){e.preventDefault();let t=p.trim();t&&!d.includes(t)&&s([...d,t]),c("")}},className:"h-9 text-sm",onBlur:()=>{let e=p.trim();e&&!d.includes(e)&&s([...d,e]),c("")}}),(0,a.jsx)("input",{type:"hidden",name:e,value:d.join(", ")})]})}},26233:(e,t,r)=>{r.d(t,{ImageInputWithUpload:()=>h});var a=r(95155),i=r(12115),o=r(6296),n=r(77531),l=r(17243),d=r(33210);let s=3;function p({onUploadSuccess:e,maxSizeMB:t=s}){let[r,c]=(0,i.useState)(!1),[m,x]=(0,i.useState)(!1),[h,u]=(0,i.useState)(null),b=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),"dragenter"===e.type||"dragover"===e.type?c(!0):"dragleave"===e.type&&c(!1)},[]),g=async r=>{if(u(null),r.size>1024*t*1024)return void u(`File size exceeds the ${t}MB limit.`);if(!r.type.startsWith("image/"))return void u("Unsupported file type. Please upload an image.");x(!0);try{let t=new FormData;t.append("file",r);let a=await fetch("/api/upload",{method:"POST",body:t}),i=await a.json();if(!a.ok)throw Error(i.error||"Failed to upload image");e(i.asset.url,i.asset)}catch(e){u(e.message||"An error occurred during upload.")}finally{x(!1)}},w=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),c(!1);let t=Array.from(e.dataTransfer.files);t.length>0&&g(t[0])},[]);return(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg transition-colors ${r?"border-primary bg-primary/5":"border-muted-foreground/25 hover:bg-muted/50"}`,onDragEnter:b,onDragLeave:b,onDragOver:b,onDrop:w,children:[(0,a.jsx)("input",{type:"file",className:"absolute inset-0 w-full h-full opacity-0 cursor-pointer",onChange:e=>{let t=Array.from(e.target.files||[]);t.length>0&&g(t[0])},accept:"image/*",disabled:m}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6 text-center px-4",children:[m?(0,a.jsx)(o.A,{className:"w-10 h-10 mb-3 text-muted-foreground animate-spin"}):(0,a.jsx)(n.A,{className:"w-10 h-10 mb-3 text-muted-foreground"}),(0,a.jsxs)("p",{className:"mb-2 text-sm text-muted-foreground",children:[(0,a.jsx)("span",{className:"font-semibold text-foreground",children:"Click to upload"})," or drag and drop"]}),(0,a.jsxs)("p",{className:"text-xs text-muted-foreground mt-2 max-w-xs",children:["Supported formats: Images only (Max ",t,"MB)."]}),(0,a.jsxs)("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-md text-xs border border-blue-100 dark:border-blue-800/30 flex items-start gap-2 max-w-xs text-left",children:[(0,a.jsx)(l.A,{className:"w-4 h-4 shrink-0 mt-0.5"}),(0,a.jsxs)("span",{children:[(0,a.jsx)("strong",{children:"Pro Tip:"})," We highly recommend using the ",(0,a.jsx)("strong",{children:"WebP"})," format for better quality and significant space retention."]})]})]})]}),h&&(0,a.jsxs)("div",{className:"mt-2 text-sm text-destructive flex items-center gap-1",children:[(0,a.jsx)(d.A,{className:"w-4 h-4"}),h]})]})}var c=r(45369),m=r(39703),x=r(28783);function h({name:e,label:t,defaultUrl:r="",placeholder:o,description:n}){let[l,d]=(0,i.useState)("url"),[s,u]=(0,i.useState)(r),[b,g]=(0,i.useState)(!1);return(0,a.jsxs)("div",{className:"space-y-2 border border-slate-100 dark:border-slate-800 rounded-md p-3 bg-slate-50/50 dark:bg-slate-900/20 transition-colors duration-200",onDragEnter:e=>{e.dataTransfer.types.includes("Files")&&"url"===l&&!b&&d("upload")},onDragOver:e=>{e.dataTransfer.types.includes("Files")&&e.preventDefault()},children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(m.Label,{className:"text-xs font-semibold",children:t}),(0,a.jsxs)("div",{className:"flex gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-md",children:[(0,a.jsx)(x.Button,{type:"button",variant:"ghost",size:"sm",disabled:b,onClick:()=>d("url"),className:`h-6 px-2 text-[10px] ${"url"===l?"bg-white dark:bg-slate-950 shadow-sm":""} ${b?"opacity-50":""}`,children:"URL"}),(0,a.jsx)(x.Button,{type:"button",variant:"ghost",size:"sm",disabled:b,onClick:()=>d("upload"),className:`h-6 px-2 text-[10px] ${"upload"===l?"bg-white dark:bg-slate-950 shadow-sm":""} ${b?"opacity-50":""}`,children:"Upload"})]})]}),(0,a.jsx)("input",{type:"hidden",name:e,value:s}),"url"===l?(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(c.Input,{value:s,onChange:e=>u(e.target.value),placeholder:o||"https://example.com/image.jpg",className:"h-9 text-sm bg-white dark:bg-slate-950 flex-1",readOnly:b}),s&&(0,a.jsx)(x.Button,{type:"button",variant:"outline",size:"sm",onClick:()=>{u(""),g(!1)},className:"h-9 shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20",children:"Clear"})]}),b&&(0,a.jsxs)("p",{className:"text-[10px] text-slate-500 mt-1.5 flex items-center gap-1 px-1",children:[(0,a.jsx)("span",{className:"w-3 h-3 inline-flex items-center justify-center rounded-full border border-slate-400 text-[8px] font-bold",children:"i"}),"This is the public URL of your uploaded image."]}),s&&(0,a.jsx)("div",{className:"mt-2 relative h-32 w-full rounded-md overflow-hidden border border-slate-200 dark:border-slate-800",children:(0,a.jsx)("img",{src:s,alt:"Preview",className:"object-contain w-full h-full",onError:e=>{e.currentTarget.style.display="none"}})})]}):(0,a.jsx)("div",{className:"pt-1",children:(0,a.jsx)(p,{onUploadSuccess:e=>{u(e),g(!0),d("url")}})}),n&&(0,a.jsx)("p",{className:"text-[11px] text-slate-400 mt-1",children:n})]})}},39703:(e,t,r)=>{r.d(t,{Label:()=>o});var a=r(95155);r(12115);var i=r(6380);function o({className:e,...t}){return(0,a.jsx)("label",{"data-slot":"label",className:(0,i.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...t})}},58113:(e,t,r)=>{r.d(t,{SlugInput:()=>s});var a=r(95155),i=r(12115),o=r(45369),n=r(39703),l=r(28783),d=r(34220);function s({initialValue:e="",sourceId:t}){let[r,p]=(0,i.useState)(e),[c,m]=(0,i.useState)(!e);return(0,i.useEffect)(()=>{let e=document.getElementById(t);if(!e)return;let r=()=>{c&&e.value&&p(e.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,""))};return e.addEventListener("blur",r),()=>e.removeEventListener("blur",r)},[t,c]),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)("div",{className:"flex items-center justify-between",children:(0,a.jsxs)(n.Label,{htmlFor:"slug",className:"text-xs",children:["Slug ",(0,a.jsx)("span",{className:"text-slate-400",children:"(unique URL identifier)"})]})}),(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)(o.Input,{id:"slug",name:"slug",placeholder:"my-awesome-post",className:"h-9 text-sm font-mono",value:r,onChange:e=>{p(e.target.value),m(!1)}}),(0,a.jsxs)(l.Button,{type:"button",variant:"secondary",size:"sm",className:"h-9 px-2 shrink-0",onClick:()=>{let e=document.getElementById(t);e&&e.value&&(p(e.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"")),m(!1))},title:"Generate from Title",children:[(0,a.jsx)(d.A,{className:"w-4 h-4 mr-1.5"}),"Generate"]})]})]})}},96505:(e,t,r)=>{r.d(t,{ClientForm:()=>o});var a=r(95155),i=r(12115);function o({action:e,children:t,className:r}){let[n,l]=(0,i.useState)(null),d=(0,i.useRef)(null);async function s(t){t.preventDefault(),l(null);let r=new FormData(t.currentTarget);try{let t=await e(r);t?.error&&l(t.error)}catch(e){if(e.message&&e.message.includes("NEXT_REDIRECT"))throw e;console.error(e)}}return(0,i.useEffect)(()=>{n&&d.current&&d.current.scrollIntoView({behavior:"smooth",block:"center"})},[n]),(0,a.jsxs)("form",{onSubmit:s,className:r,children:[n&&(0,a.jsx)("div",{ref:d,className:"mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm",children:n}),t]})}},98750:(e,t,r)=>{r.d(t,{MarkdownEditor:()=>N});var a=r(95155),i=r(12115),o=r(19756),n=r(28783),l=r(65711);function d({level:e}){return(0,a.jsxs)("span",{style:{fontSize:11,fontWeight:700,fontFamily:"inherit",letterSpacing:"-0.02em",lineHeight:1},children:["H",e]})}let s=e=>({name:`heading${e}`,keyCommand:`heading${e}`,buttonProps:{"aria-label":`Heading ${e}`,title:`Heading ${e}`},icon:(0,a.jsx)(d,{level:e}),execute(t,r){let a="#".repeat(e)+" ",i=t.selectedText||"Heading";r.replaceSelection(a+i)}}),p={name:"table",keyCommand:"table",buttonProps:{"aria-label":"Insert table",title:"Insert table"},icon:(0,a.jsx)("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"currentColor",children:(0,a.jsx)("path",{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm6 0v4h4V2H6zm4 5H6v4h4V7zm1 4h3V7h-3v4zm0-5h3V2h-3v4zM5 2H2v4h3V2zM2 7v4h3V7H2zm0 5v2h3v-2H2zm4 2h4v-2H6v2zm5 0h3v-2h-3v2z"})}),execute(e,t){t.replaceSelection("\n| Header 1 | Header 2 | Header 3 |\n|----------|----------|----------|\n| Cell     | Cell     | Cell     |\n| Cell     | Cell     | Cell     |\n")}},c={name:"callout",keyCommand:"callout",buttonProps:{"aria-label":"Callout / Note block",title:"Note callout"},icon:(0,a.jsxs)("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"currentColor",children:[(0,a.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),(0,a.jsx)("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]}),execute(e,t){let r=e.selectedText||"Important note here";t.replaceSelection(`
> 💡 **Note:** ${r}
`)}},m={name:"hr",keyCommand:"hr",buttonProps:{"aria-label":"Horizontal rule",title:"Horizontal rule"},icon:(0,a.jsx)("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"currentColor",children:(0,a.jsx)("path",{d:"M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"})}),execute(e,t){t.replaceSelection("\n\n---\n\n")}},x=(e,t)=>({name:`align-${e}`,keyCommand:`align-${e}`,buttonProps:{"aria-label":`Align ${e}`,title:`Align ${e}`},icon:t,execute(t,r){let a=t.selectedText||"Aligned content";r.replaceSelection(`
<div align="${e}">

${a}

</div>
`)}}),h=x("left",(0,a.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("line",{x1:"17",y1:"10",x2:"3",y2:"10"}),(0,a.jsx)("line",{x1:"21",y1:"6",x2:"3",y2:"6"}),(0,a.jsx)("line",{x1:"21",y1:"14",x2:"3",y2:"14"}),(0,a.jsx)("line",{x1:"17",y1:"18",x2:"3",y2:"18"})]})),u=x("center",(0,a.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("line",{x1:"18",y1:"10",x2:"6",y2:"10"}),(0,a.jsx)("line",{x1:"21",y1:"6",x2:"3",y2:"6"}),(0,a.jsx)("line",{x1:"21",y1:"14",x2:"3",y2:"14"}),(0,a.jsx)("line",{x1:"18",y1:"18",x2:"6",y2:"18"})]})),b=x("right",(0,a.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("line",{x1:"21",y1:"10",x2:"7",y2:"10"}),(0,a.jsx)("line",{x1:"21",y1:"6",x2:"3",y2:"6"}),(0,a.jsx)("line",{x1:"21",y1:"14",x2:"3",y2:"14"}),(0,a.jsx)("line",{x1:"21",y1:"18",x2:"7",y2:"18"})]})),g=(e,t)=>({name:`color-${e}`,keyCommand:`color-${e}`,buttonProps:{"aria-label":`${e} text`,title:`${e} text`},icon:(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("div",{className:"w-3 h-3 rounded-full border border-slate-200 dark:border-slate-700",style:{backgroundColor:t}}),(0,a.jsx)("span",{className:"text-[12px]",children:e})]}),execute(e,r){let a=e.selectedText||"colored text";r.replaceSelection(`<span style="color: ${t}">${a}</span>`)}}),w=o.Pi.group([g("Red","#ef4444"),g("Blue","#3b82f6"),g("Green","#22c55e"),g("Yellow","#eab308"),g("Purple","#a855f7"),g("Gray","#64748b")],{name:"colors",groupName:"colors",buttonProps:{"aria-label":"Text Color",title:"Text Color"},icon:(0,a.jsxs)("div",{className:"flex items-center gap-0.5",children:[(0,a.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M4 20h16"}),(0,a.jsx)("path",{d:"m6 16 6-12 6 12"}),(0,a.jsx)("path",{d:"M8 12h8"})]}),(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"8",height:"8",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("polyline",{points:"6 9 12 15 18 9"})})]})}),f=o.Pi.group([s(1),s(2),s(3),s(4),s(5),s(6)],{name:"headings",groupName:"headings",buttonProps:{"aria-label":"Select Heading Level",title:"Headings"},icon:(0,a.jsxs)("div",{className:"flex items-center gap-0.5",children:[(0,a.jsx)("span",{style:{fontSize:11,fontWeight:800},children:"H"}),(0,a.jsx)("svg",{viewBox:"0 0 24 24",width:"8",height:"8",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("polyline",{points:"6 9 12 15 18 9"})})]})}),v=[o.Pi.bold,o.Pi.italic,o.Pi.strikethrough,o.Pi.divider,f,o.Pi.divider,o.Pi.unorderedListCommand,o.Pi.orderedListCommand,o.Pi.checkedListCommand,o.Pi.divider,o.Pi.quote,c],j={name:"media-library",keyCommand:"media-library",buttonProps:{"aria-label":"Insert from Media Library",title:"Media Library"},icon:(0,a.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,a.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),(0,a.jsx)("polyline",{points:"21 15 16 10 5 21"})]}),execute(e,t){let r=new CustomEvent("open-media-library",{detail:t});window.dispatchEvent(r)}},k=[o.Pi.code,o.Pi.codeBlock,o.Pi.divider,h,u,b,o.Pi.divider,w,o.Pi.divider,p,o.Pi.link,j,o.Pi.image,m],y=[o.Pi.codeEdit,o.Pi.codeLive,o.Pi.codePreview,o.Pi.divider,o.Pi.fullscreen];function N({name:e,initialValue:t="",placeholder:r}){let[d,s]=i.useState(t),[p,c]=i.useState(!1),[m,x]=i.useState(null);i.useEffect(()=>{let e=e=>{x(e.detail),c(!0)};return window.addEventListener("open-media-library",e),()=>window.removeEventListener("open-media-library",e)},[]);let h=d.trim()?d.split(/\s+/).filter(Boolean).length:0,u=d.length;return(0,a.jsxs)("div",{className:"rich-editor-wrapper w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/25 focus-within:border-indigo-400 transition-all",children:[(0,a.jsx)("style",{children:`
        /* ── Root ── */
        .rich-editor-wrapper .w-md-editor {
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          background: transparent !important;
          font-family: inherit;
        }

        /* ── Toolbar ── */
        .rich-editor-wrapper .w-md-editor-toolbar {
          background: #f8fafc !important;
          border-bottom: 1px solid #e2e8f0 !important;
          padding: 5px 12px !important;
          min-height: unset !important;
          height: auto !important;
          flex-wrap: wrap !important;
          row-gap: 4px !important;
          column-gap: 1px !important;
          align-items: center !important;
        }

        /* hide the built-in ul that wraps commands */
        .rich-editor-wrapper .w-md-editor-toolbar > ul {
          display: flex !important;
          flex-wrap: wrap !important;
          align-items: center !important;
          gap: 1px !important;
          margin: 0 !important;
          padding: 0 !important;
          list-style: none !important;
        }

        /* ── Toolbar buttons ── */
        .rich-editor-wrapper .w-md-editor-toolbar li > button {
          width: 32px !important;
          height: 28px !important;
          min-width: 28px !important;
          border-radius: 6px !important;
          color: #64748b !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
          background: transparent !important;
          border: none !important;
          cursor: pointer !important;
          transition: background 0.12s, color 0.12s !important;
          line-height: 1 !important;
        }

        /* ── Dropdown / Group Menu ── */
        .rich-editor-wrapper .w-md-editor-toolbar ul > li:hover > .w-md-editor-drop-down {
          display: block !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down {
          background: #fff !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 8px !important;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
          padding: 4px !important;
          z-index: 50 !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down ul {
          display: flex !important;
          flex-direction: column !important;
          gap: 2px !important;
          padding: 0 !important;
          margin: 0 !important;
          list-style: none !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down ul li {
          width: 100% !important;
          padding: 0 !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down ul li button {
          width: 100% !important;
          height: 32px !important;
          padding: 0 12px !important;
          justify-content: flex-start !important;
          font-size: 12px !important;
          border-radius: 4px !important;
          color: #475569 !important;
          background: transparent !important;
        }
        .rich-editor-wrapper .w-md-editor-drop-down ul li button:hover {
          background: #f1f5f9 !important;
          color: #4f46e5 !important;
        }

        .dark .rich-editor-wrapper .w-md-editor-drop-down {
          background: #0f172a !important;
          border-color: #1e293b !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-drop-down ul li button {
          color: #94a3b8 !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-drop-down ul li button:hover {
          background: #1e293b !important;
          color: #a5b4fc !important;
        }
        .rich-editor-wrapper .w-md-editor-toolbar li > button:hover {
          background: #e0e7ff !important;
          color: #4f46e5 !important;
        }
        .rich-editor-wrapper .w-md-editor-toolbar li.active > button,
        .rich-editor-wrapper .w-md-editor-toolbar li > button[data-active="true"] {
          background: #e0e7ff !important;
          color: #4338ca !important;
          font-weight: 700 !important;
        }
        .rich-editor-wrapper .w-md-editor-toolbar li > button svg {
          width: 13px !important;
          height: 13px !important;
          display: block !important;
        }

        /* ── Dividers ── */
        .rich-editor-wrapper .w-md-editor-toolbar-divider {
          width: 1px !important;
          height: 18px !important;
          background: #cbd5e1 !important;
          margin: 0 5px !important;
          flex-shrink: 0 !important;
          display: inline-block !important;
          vertical-align: middle !important;
        }
        .rich-editor-wrapper .w-md-editor-toolbar li.w-md-editor-toolbar-divider {
          padding: 0 !important;
          background: #cbd5e1 !important;
          width: 1px !important;
          height: 18px !important;
          margin: 0 4px !important;
        }

        /* ── Right-side extra commands ── */
        .rich-editor-wrapper .w-md-editor-toolbar > ul:last-child {
          margin-left: auto !important;
        }

        /* ── Text area — TOTAL SYNC REQUIRED ── */
        .rich-editor-wrapper .w-md-editor-content {
          background: #fff !important;
        }
        .rich-editor-wrapper .w-md-editor-text {
          margin: 0 !important;
        }
        
        /* Target BOTH the layers AND all syntax tokens inside them */
        .rich-editor-wrapper .w-md-editor-text-pre,
        .rich-editor-wrapper .w-md-editor-text-input,
        .rich-editor-wrapper .w-md-editor-text-pre *,
        .rich-editor-wrapper .w-md-editor-text-input * {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
          font-size: 14px !important;
          line-height: 1.7 !important;
          font-weight: 400 !important; /* NO BOLD in editor - prevents width drift */
          letter-spacing: normal !important;
          word-spacing: normal !important;
          tab-size: 2 !important;
          -moz-tab-size: 2 !important;
          white-space: pre-wrap !important;
          word-break: break-all !important;
          padding: 0 !important; /* Padding moved to parent to avoid desync */
          margin: 0 !important;
          text-indent: 0 !important;
          box-sizing: border-box !important;
          border: none !important;
          outline: none !important;
        }

        /* Container for the layers to handle padding safely */
        .rich-editor-wrapper .w-md-editor-text {
          padding: 20px 24px !important;
          position: relative !important;
        }

        .rich-editor-wrapper .w-md-editor-text-input {
          background: transparent !important;
          color: #1e293b !important;
          caret-color: #4f46e5 !important;
          resize: none !important;
          position: absolute !important;
          top: 20px !important;
          left: 24px !important;
          width: calc(100% - 48px) !important;
          height: calc(100% - 40px) !important;
        }
        
        .rich-editor-wrapper .w-md-editor-text-pre {
          background: transparent !important;
          color: #1e293b !important;
          pointer-events: none !important;
        }

        .rich-editor-wrapper .w-md-editor-text-input::placeholder {
          color: #94a3b8 !important;
          font-style: italic !important;
        }

        /* ── Preview ── */
        .rich-editor-wrapper .w-md-editor-preview {
          padding: 20px 24px !important;
          border-left: 1px solid #e2e8f0 !important;
          background: #fff !important;
        }

        /* ── Drag handle ── */
        .rich-editor-wrapper .w-md-editor-bar {
          display: none !important;
        }

        /* ── Dark mode ── */
        .dark .rich-editor-wrapper .w-md-editor-toolbar {
          background: #0f172a !important;
          border-bottom-color: #1e293b !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-toolbar li > button { color: #94a3b8 !important; }
        .dark .rich-editor-wrapper .w-md-editor-toolbar li > button:hover {
          background: #1e293b !important; color: #a5b4fc !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-toolbar li.active > button {
          background: #1e293b !important; color: #818cf8 !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-toolbar-divider,
        .dark .rich-editor-wrapper .w-md-editor-toolbar li.w-md-editor-toolbar-divider {
          background: #334155 !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-content,
        .dark .rich-editor-wrapper .w-md-editor-text-pre,
        .dark .rich-editor-wrapper .w-md-editor-text-input,
        .dark .rich-editor-wrapper .w-md-editor-text-pre *,
        .dark .rich-editor-wrapper .w-md-editor-text-input * {
          background: #0f172a !important;
          color: #e2e8f0 !important;
          font-size: 14px !important;
          line-height: 1.7 !important;
          letter-spacing: normal !important;
          word-spacing: normal !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-text-input {
          background: transparent !important;
        }
        .dark .rich-editor-wrapper .w-md-editor-preview {
          background: #0f172a !important; border-left-color: #1e293b !important;
        }
      `}),(0,a.jsx)("input",{type:"hidden",name:e,value:d}),(0,a.jsxs)("div",{className:"flex items-center justify-between px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("div",{className:"w-1.5 h-4 rounded-full bg-indigo-500"}),(0,a.jsx)("span",{className:"text-[11px] font-semibold tracking-widest text-slate-400 uppercase",children:"Content Editor"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[h>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{className:"text-[11px] text-slate-400 tabular-nums",children:[(0,a.jsx)("span",{className:"font-medium text-slate-600 dark:text-slate-300",children:h})," words"]}),(0,a.jsx)("span",{className:"text-slate-300 dark:text-slate-700",children:"\xb7"}),(0,a.jsxs)("span",{className:"text-[11px] text-slate-400 tabular-nums",children:[(0,a.jsx)("span",{className:"font-medium text-slate-600 dark:text-slate-300",children:u})," chars"]})]}),0===h&&(0,a.jsx)("span",{className:"text-[11px] italic text-slate-400",children:"Start writing…"})]})]}),(0,a.jsx)("div",{"data-color-mode":"light",children:(0,a.jsx)(o.Ay,{value:d,onChange:e=>s(e||""),textareaProps:{placeholder:r},preview:"edit",height:380,commands:[...v,o.Pi.divider,...k],extraCommands:y,visibleDragbar:!1})}),(0,a.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800",children:[(0,a.jsxs)("span",{className:"text-[11px] text-slate-400",children:["Supports"," ",(0,a.jsx)("span",{className:"font-semibold text-slate-500",children:"Markdown"})," ","\xb7 ",(0,a.jsx)("kbd",{className:"font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded text-[10px]",children:"**bold**"})," ",(0,a.jsx)("kbd",{className:"font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded text-[10px]",children:"_italic_"})," ",(0,a.jsx)("kbd",{className:"font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded text-[10px]",children:"# Heading"})]}),(0,a.jsxs)("span",{className:"text-[11px] text-slate-400",children:["Toggle"," ",(0,a.jsx)("span",{className:"font-medium text-slate-500",children:"Live Preview"})," ","from the toolbar →"]})]}),p&&(0,a.jsx)("div",{className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-slate-950 rounded-xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800",children:[(0,a.jsxs)("div",{className:"px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0",children:[(0,a.jsx)("h3",{className:"font-semibold text-slate-900 dark:text-slate-100",children:"Insert Media"}),(0,a.jsx)(n.Button,{size:"sm",variant:"ghost",onClick:()=>c(!1),children:"Close"})]}),(0,a.jsx)("div",{className:"p-5 overflow-auto flex-1",children:(0,a.jsx)(l.MediaLibrary,{onSelect:e=>{m&&m.replaceSelection(`
![image](${e})
`),c(!1)}})})]})})]})}}}]);