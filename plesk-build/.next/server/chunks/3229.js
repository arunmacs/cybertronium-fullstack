"use strict";exports.id=3229,exports.ids=[3229],exports.modules={20439:(a,b,c)=>{c.r(b),c.d(b,{"001fb09a7c3f19cc7d9b59a33451fc794fbe46a25d":()=>f.CF,"006b83f0f3f91832b0d86f374a686f615bbda571f2":()=>f.lo,"00897476b9d7ad8ef0fb1e5e8487d164a78217e451":()=>d.P_,"008ee802bc3d29db751851507e30319f9a624ad45c":()=>d.Nr,"402813af948ac37753911576ce9d7bbd6d69a6128a":()=>f.kg,"4044369f87512872bdfc639a0c6275c6732645e7bb":()=>e.pD,"408c605ba318554e4b99dd1e12371fe7c4f17ff13b":()=>f.r7,"40a461cc6c11f6d6b233a1998b6f56029f60994801":()=>d.AY,"40d2ccae81f5b563c19184700bca7cc1186a067e0a":()=>e.ys,"40da5f7486507a313df101b9cef40ab162e77d4cd4":()=>d.Om,"40e5ce196789d9b181a665fe12504b5245bdbe5cc6":()=>f.hG,"6009c63a169a801995b5810c6794fa1a9613f45968":()=>f.qP,"608f60206106431535ee785cb9c06ffdab878464a6":()=>f.Vc,"60ce3be8532c15975e39c88e42671a56854f20f843":()=>e.gg,"60e61519b25e7a8dff42397c37e86e234896f8cb4b":()=>f.v_});var d=c(32867),e=c(24421),f=c(58808)},24421:(a,b,c)=>{c.d(b,{gg:()=>k,pD:()=>j,ys:()=>l});var d=c(49796),e=c(50172),f=c(75587),g=c(93061),h=c(16949),i=c(91970);async function j(a){let b=await (0,e.getServerSession)(f.N);b?.user?.email||(0,i.redirect)("/cms-admin/login");let c=await g.z.user.findUnique({where:{email:b.user.email}});c||(0,i.redirect)("/cms-admin/login");let d=a.get("authorId"),j=d&&"ADMIN"===b.user.role?d:c.id,k=a.get("title"),l=a.get("content"),m=a.get("excerpt")||null,n=a.get("coverImage")||null,o=a.get("thumbnailImage")||null,p=a.get("status")||"DRAFT";"AUTHOR"===b.user.role&&"REVIEW"!==p&&(p="DRAFT");let q=a.get("publishedAt"),r=q?new Date(q):null;if(!k?.trim())return{error:"Title is required"};if(!l?.trim())return{error:"Content is required"};let s=a.get("slug")?.trim();s||(s=k.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,""));let t="PUBLISHED"!==p||r?r:new Date,u=(a.get("tags")||"").split(",").map(a=>a.trim()).filter(a=>a.length>0),v=await Promise.all(u.map(a=>{let b=a.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"");return g.z.tag.upsert({where:{slug:b},update:{},create:{name:a,slug:b}})}));try{await g.z.post.create({data:{title:k,slug:s,content:l,excerpt:m,coverImage:n,thumbnailImage:o,status:p,publishedAt:t,authorId:j,tags:{connect:v.map(a=>({id:a.id}))}}})}catch(a){if(console.error("[createPost]",a),a?.code==="P2002")return{error:"Slug is already taken. Please choose another title or slug."};if(a?.code==="P2000"){let b=a.meta?.column_name?String(a.meta.column_name):"one of the fields";return{error:`The text entered for ${b} is too long. Please shorten it.`}}return{error:"An unexpected error occurred while saving the post. Please try again."}}(0,h.revalidatePath)("/cms-admin/dashboard/posts"),(0,i.redirect)("/cms-admin/dashboard/posts")}async function k(a,b){let c=await (0,e.getServerSession)(f.N);c?.user?.email||(0,i.redirect)("/cms-admin/login");let d=b.get("title"),j=b.get("content"),k=b.get("excerpt")||null,l=b.get("coverImage")||null,m=b.get("thumbnailImage")||null,n=b.get("slug"),o=b.get("status")||"DRAFT";"AUTHOR"===c.user.role&&"REVIEW"!==o&&(o="DRAFT");let p=b.get("publishedAt"),q=p?new Date(p):null,r=b.get("authorId");if(!d?.trim())return{error:"Title is required"};if(!j?.trim())return{error:"Content is required"};let s=await g.z.post.findUnique({where:{id:a},select:{deletedAt:!0,authorId:!0}});if(!s||null!==s.deletedAt)return{error:"Post not found"};if("AUTHOR"===c.user.role&&s.authorId!==c.user.id)return{error:"Unauthorized to edit this post"};let t="PUBLISHED"!==o||q?q:new Date,u={title:d,slug:n,content:j,excerpt:k,coverImage:l,thumbnailImage:m,status:o,publishedAt:t};r&&"ADMIN"===c.user.role&&(u.authorId=r);let v=(b.get("tags")||"").split(",").map(a=>a.trim()).filter(a=>a.length>0),w=[];v.length>0&&(w=(await Promise.all(v.map(a=>{let b=a.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"");return g.z.tag.upsert({where:{slug:b},update:{},create:{name:a,slug:b}})}))).map(a=>({id:a.id})));try{await g.z.post.update({where:{id:a},data:{...u,tags:{set:w}}})}catch(a){if(console.error("[updatePost]",a),a?.code==="P2002")return{error:"Slug is already taken. Please choose another title or slug."};if(a?.code==="P2000"){let b=a.meta?.column_name?String(a.meta.column_name):"one of the fields";return{error:`The text entered for ${b} is too long. Please shorten it.`}}return{error:"An unexpected error occurred while updating the post. Please try again."}}(0,h.revalidatePath)("/cms-admin/dashboard/posts"),(0,h.revalidatePath)(`/cms-admin/dashboard/posts/${a}`),(0,i.redirect)("/cms-admin/dashboard/posts")}async function l(a){let b=await (0,e.getServerSession)(f.N);b?.user?.email||(0,i.redirect)("/cms-admin/login");let c=await g.z.post.findUnique({where:{id:a},select:{deletedAt:!0,authorId:!0}});c&&null===c.deletedAt||(0,i.redirect)("/cms-admin/dashboard/posts?error=not_found"),"AUTHOR"===b.user.role&&c.authorId!==b.user.id&&(0,i.redirect)("/cms-admin/dashboard/posts?error=unauthorized"),await g.z.post.update({where:{id:a},data:{deletedAt:new Date}}),(0,h.revalidatePath)("/cms-admin/dashboard/posts")}(0,c(24424).D)([j,k,l]),(0,d.A)(j,"4044369f87512872bdfc639a0c6275c6732645e7bb",null),(0,d.A)(k,"60ce3be8532c15975e39c88e42671a56854f20f843",null),(0,d.A)(l,"40d2ccae81f5b563c19184700bca7cc1186a067e0a",null)},39724:(a,b,c)=>{c.d(b,{TagInput:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call TagInput() from the server but TagInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mind-Graph\\cybertronium-fullstack\\src\\components\\ui\\tag-input.tsx","TagInput")},49517:(a,b,c)=>{c.d(b,{SlugInput:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call SlugInput() from the server but SlugInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mind-Graph\\cybertronium-fullstack\\src\\components\\ui\\slug-input.tsx","SlugInput")},53229:(a,b,c)=>{c.d(b,{TagInput:()=>h});var d=c(48249),e=c(67484),f=c(88877),g=c(46674);function h({name:a,defaultValue:b="",placeholder:c="Add a tag..."}){let[i,j]=(0,e.useState)(b.split(",").map(a=>a.trim()).filter(Boolean)),[k,l]=(0,e.useState)("");return(0,d.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,d.jsx)("div",{className:"flex flex-wrap gap-2",children:i.map(a=>(0,d.jsxs)("div",{className:"flex items-center gap-1 bg-slate-100 text-slate-800 px-2 py-1 rounded-md text-xs font-medium dark:bg-slate-800 dark:text-slate-200",children:[(0,d.jsx)("span",{children:a}),(0,d.jsx)("button",{type:"button",onClick:()=>{j(i.filter(b=>b!==a))},className:"text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200",children:(0,d.jsx)(g.A,{className:"h-3 w-3"})})]},a))}),(0,d.jsx)(f.Input,{type:"text",placeholder:c,value:k,onChange:a=>l(a.target.value),onKeyDown:a=>{if("Enter"===a.key||","===a.key){a.preventDefault();let b=k.trim();b&&!i.includes(b)&&j([...i,b]),l("")}},className:"h-9 text-sm",onBlur:()=>{let a=k.trim();a&&!i.includes(a)&&j([...i,a]),l("")}}),(0,d.jsx)("input",{type:"hidden",name:a,value:i.join(", ")})]})}},64894:(a,b,c)=>{c.d(b,{MarkdownEditor:()=>z});var d=c(48249),e=c(67484),f=c.n(e),g=c(68677),h=c(25297),i=c(20159);function j({level:a}){return(0,d.jsxs)("span",{style:{fontSize:11,fontWeight:700,fontFamily:"inherit",letterSpacing:"-0.02em",lineHeight:1},children:["H",a]})}let k=a=>({name:`heading${a}`,keyCommand:`heading${a}`,buttonProps:{"aria-label":`Heading ${a}`,title:`Heading ${a}`},icon:(0,d.jsx)(j,{level:a}),execute(b,c){let d="#".repeat(a)+" ",e=b.selectedText||"Heading";c.replaceSelection(d+e)}}),l={name:"table",keyCommand:"table",buttonProps:{"aria-label":"Insert table",title:"Insert table"},icon:(0,d.jsx)("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"currentColor",children:(0,d.jsx)("path",{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm6 0v4h4V2H6zm4 5H6v4h4V7zm1 4h3V7h-3v4zm0-5h3V2h-3v4zM5 2H2v4h3V2zM2 7v4h3V7H2zm0 5v2h3v-2H2zm4 2h4v-2H6v2zm5 0h3v-2h-3v2z"})}),execute(a,b){b.replaceSelection("\n| Header 1 | Header 2 | Header 3 |\n|----------|----------|----------|\n| Cell     | Cell     | Cell     |\n| Cell     | Cell     | Cell     |\n")}},m={name:"callout",keyCommand:"callout",buttonProps:{"aria-label":"Callout / Note block",title:"Note callout"},icon:(0,d.jsxs)("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"currentColor",children:[(0,d.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),(0,d.jsx)("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]}),execute(a,b){let c=a.selectedText||"Important note here";b.replaceSelection(`
> 💡 **Note:** ${c}
`)}},n={name:"hr",keyCommand:"hr",buttonProps:{"aria-label":"Horizontal rule",title:"Horizontal rule"},icon:(0,d.jsx)("svg",{viewBox:"0 0 16 16",width:"14",height:"14",fill:"currentColor",children:(0,d.jsx)("path",{d:"M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"})}),execute(a,b){b.replaceSelection("\n\n---\n\n")}},o=(a,b)=>({name:`align-${a}`,keyCommand:`align-${a}`,buttonProps:{"aria-label":`Align ${a}`,title:`Align ${a}`},icon:b,execute(b,c){let d=b.selectedText||"Aligned content";c.replaceSelection(`
<div align="${a}">

${d}

</div>
`)}}),p=o("left",(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("line",{x1:"17",y1:"10",x2:"3",y2:"10"}),(0,d.jsx)("line",{x1:"21",y1:"6",x2:"3",y2:"6"}),(0,d.jsx)("line",{x1:"21",y1:"14",x2:"3",y2:"14"}),(0,d.jsx)("line",{x1:"17",y1:"18",x2:"3",y2:"18"})]})),q=o("center",(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("line",{x1:"18",y1:"10",x2:"6",y2:"10"}),(0,d.jsx)("line",{x1:"21",y1:"6",x2:"3",y2:"6"}),(0,d.jsx)("line",{x1:"21",y1:"14",x2:"3",y2:"14"}),(0,d.jsx)("line",{x1:"18",y1:"18",x2:"6",y2:"18"})]})),r=o("right",(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("line",{x1:"21",y1:"10",x2:"7",y2:"10"}),(0,d.jsx)("line",{x1:"21",y1:"6",x2:"3",y2:"6"}),(0,d.jsx)("line",{x1:"21",y1:"14",x2:"3",y2:"14"}),(0,d.jsx)("line",{x1:"21",y1:"18",x2:"7",y2:"18"})]})),s=(a,b)=>({name:`color-${a}`,keyCommand:`color-${a}`,buttonProps:{"aria-label":`${a} text`,title:`${a} text`},icon:(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)("div",{className:"w-3 h-3 rounded-full border border-slate-200 dark:border-slate-700",style:{backgroundColor:b}}),(0,d.jsx)("span",{className:"text-[12px]",children:a})]}),execute(a,c){let d=a.selectedText||"colored text";c.replaceSelection(`<span style="color: ${b}">${d}</span>`)}}),t=g.Pi.group([s("Red","#ef4444"),s("Blue","#3b82f6"),s("Green","#22c55e"),s("Yellow","#eab308"),s("Purple","#a855f7"),s("Gray","#64748b")],{name:"colors",groupName:"colors",buttonProps:{"aria-label":"Text Color",title:"Text Color"},icon:(0,d.jsxs)("div",{className:"flex items-center gap-0.5",children:[(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("path",{d:"M4 20h16"}),(0,d.jsx)("path",{d:"m6 16 6-12 6 12"}),(0,d.jsx)("path",{d:"M8 12h8"})]}),(0,d.jsx)("svg",{viewBox:"0 0 24 24",width:"8",height:"8",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:(0,d.jsx)("polyline",{points:"6 9 12 15 18 9"})})]})}),u=g.Pi.group([k(1),k(2),k(3),k(4),k(5),k(6)],{name:"headings",groupName:"headings",buttonProps:{"aria-label":"Select Heading Level",title:"Headings"},icon:(0,d.jsxs)("div",{className:"flex items-center gap-0.5",children:[(0,d.jsx)("span",{style:{fontSize:11,fontWeight:800},children:"H"}),(0,d.jsx)("svg",{viewBox:"0 0 24 24",width:"8",height:"8",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:(0,d.jsx)("polyline",{points:"6 9 12 15 18 9"})})]})}),v=[g.Pi.bold,g.Pi.italic,g.Pi.strikethrough,g.Pi.divider,u,g.Pi.divider,g.Pi.unorderedListCommand,g.Pi.orderedListCommand,g.Pi.checkedListCommand,g.Pi.divider,g.Pi.quote,m],w={name:"media-library",keyCommand:"media-library",buttonProps:{"aria-label":"Insert from Media Library",title:"Media Library"},icon:(0,d.jsxs)("svg",{viewBox:"0 0 24 24",width:"14",height:"14",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,d.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,d.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),(0,d.jsx)("polyline",{points:"21 15 16 10 5 21"})]}),execute(a,b){let c=new CustomEvent("open-media-library",{detail:b});window.dispatchEvent(c)}},x=[g.Pi.code,g.Pi.codeBlock,g.Pi.divider,p,q,r,g.Pi.divider,t,g.Pi.divider,l,g.Pi.link,w,g.Pi.image,n],y=[g.Pi.codeEdit,g.Pi.codeLive,g.Pi.codePreview,g.Pi.divider,g.Pi.fullscreen];function z({name:a,initialValue:b="",placeholder:c}){let[e,j]=f().useState(b),[k,l]=f().useState(!1),[m,n]=f().useState(null),o=e.trim()?e.split(/\s+/).filter(Boolean).length:0,p=e.length;return(0,d.jsxs)("div",{className:"rich-editor-wrapper w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/25 focus-within:border-indigo-400 transition-all",children:[(0,d.jsx)("style",{children:`
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
      `}),(0,d.jsx)("input",{type:"hidden",name:a,value:e}),(0,d.jsxs)("div",{className:"flex items-center justify-between px-4 py-2.5 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800",children:[(0,d.jsxs)("div",{className:"flex items-center gap-2",children:[(0,d.jsx)("div",{className:"w-1.5 h-4 rounded-full bg-indigo-500"}),(0,d.jsx)("span",{className:"text-[11px] font-semibold tracking-widest text-slate-400 uppercase",children:"Content Editor"})]}),(0,d.jsxs)("div",{className:"flex items-center gap-3",children:[o>0&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("span",{className:"text-[11px] text-slate-400 tabular-nums",children:[(0,d.jsx)("span",{className:"font-medium text-slate-600 dark:text-slate-300",children:o})," words"]}),(0,d.jsx)("span",{className:"text-slate-300 dark:text-slate-700",children:"\xb7"}),(0,d.jsxs)("span",{className:"text-[11px] text-slate-400 tabular-nums",children:[(0,d.jsx)("span",{className:"font-medium text-slate-600 dark:text-slate-300",children:p})," chars"]})]}),0===o&&(0,d.jsx)("span",{className:"text-[11px] italic text-slate-400",children:"Start writing…"})]})]}),(0,d.jsx)("div",{"data-color-mode":"light",children:(0,d.jsx)(g.Ay,{value:e,onChange:a=>j(a||""),textareaProps:{placeholder:c},preview:"edit",height:380,commands:[...v,g.Pi.divider,...x],extraCommands:y,visibleDragbar:!1})}),(0,d.jsxs)("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800",children:[(0,d.jsxs)("span",{className:"text-[11px] text-slate-400",children:["Supports"," ",(0,d.jsx)("span",{className:"font-semibold text-slate-500",children:"Markdown"})," ","\xb7 ",(0,d.jsx)("kbd",{className:"font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded text-[10px]",children:"**bold**"})," ",(0,d.jsx)("kbd",{className:"font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded text-[10px]",children:"_italic_"})," ",(0,d.jsx)("kbd",{className:"font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 px-1 py-0.5 rounded text-[10px]",children:"# Heading"})]}),(0,d.jsxs)("span",{className:"text-[11px] text-slate-400",children:["Toggle"," ",(0,d.jsx)("span",{className:"font-medium text-slate-500",children:"Live Preview"})," ","from the toolbar →"]})]}),k&&(0,d.jsx)("div",{className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4",children:(0,d.jsxs)("div",{className:"bg-white dark:bg-slate-950 rounded-xl max-w-5xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800",children:[(0,d.jsxs)("div",{className:"px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center shrink-0",children:[(0,d.jsx)("h3",{className:"font-semibold text-slate-900 dark:text-slate-100",children:"Insert Media"}),(0,d.jsx)(h.Button,{size:"sm",variant:"ghost",onClick:()=>l(!1),children:"Close"})]}),(0,d.jsx)("div",{className:"p-5 overflow-auto flex-1",children:(0,d.jsx)(i.MediaLibrary,{onSelect:a=>{m&&m.replaceSelection(`
![image](${a})
`),l(!1)}})})]})})]})}},65252:(a,b,c)=>{c.d(b,{MarkdownEditor:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call MarkdownEditor() from the server but MarkdownEditor is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Mind-Graph\\cybertronium-fullstack\\src\\components\\ui\\markdown-editor.tsx","MarkdownEditor")},97067:(a,b,c)=>{c.d(b,{SlugInput:()=>j});var d=c(48249),e=c(67484),f=c(88877),g=c(90863),h=c(25297),i=c(12820);function j({initialValue:a="",sourceId:b}){let[c,k]=(0,e.useState)(a),[l,m]=(0,e.useState)(!a);return(0,d.jsxs)("div",{className:"space-y-1",children:[(0,d.jsx)("div",{className:"flex items-center justify-between",children:(0,d.jsxs)(g.Label,{htmlFor:"slug",className:"text-xs",children:["Slug ",(0,d.jsx)("span",{className:"text-slate-400",children:"(unique URL identifier)"})]})}),(0,d.jsxs)("div",{className:"flex items-center gap-1",children:[(0,d.jsx)(f.Input,{id:"slug",name:"slug",placeholder:"my-awesome-post",className:"h-9 text-sm font-mono",value:c,onChange:a=>{k(a.target.value),m(!1)}}),(0,d.jsxs)(h.Button,{type:"button",variant:"secondary",size:"sm",className:"h-9 px-2 shrink-0",onClick:()=>{let a=document.getElementById(b);a&&a.value&&(k(a.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"")),m(!1))},title:"Generate from Title",children:[(0,d.jsx)(i.A,{className:"w-4 h-4 mr-1.5"}),"Generate"]})]})]})}}};