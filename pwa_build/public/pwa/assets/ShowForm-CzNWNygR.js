var w=(b,e,h)=>new Promise((o,r)=>{var m=p=>{try{c(h.next(p))}catch(T){r(T)}},$=p=>{try{c(h.throw(p))}catch(T){r(T)}},c=p=>p.done?o(p.value):Promise.resolve(p.value).then(m,$);c((h=h.apply(b,e)).next())});import{u as ve}from"./formStore-DlFuB_8v.js";import{m as pe,r as n,z as be,h as _,A as B,k as xe,o as l,a as u,b as a,d as f,u as s,_ as v,p as y,t as g,j as C,F as U,q as P,B as x,C as ye,w as N,T as he,D as F,l as D,f as I,x as ge,y as _e,n as we,E as ke}from"./index-W_lnXAtG.js";import{_ as M,a as H,b as Se,c as Ce,d as De,e as $e,f as Te,g as Ae,h as ze,i as O,j as Ve,L as je,k as Ee,l as Be,C as Ie}from"./SectionBreak-Bd97OJzX.js";import{U as qe,D as Le}from"./User-DRURSIwv.js";import"./TextInput.vue_vue_type_script_setup_true_lang-CdzQ2H2L.js";import"./Popover-D9lPCEKX.js";import"./FormControl.vue_vue_type_script_setup_true_lang-DwYvdCJj.js";import"./Avatar.vue_vue_type_script_setup_true_lang-BYVCYYui.js";const Ne=b=>(ge("data-v-da9fde20"),b=b(),_e(),b),Fe={class:"w-full sm:w-96 bg-white flex justify-center h-screen"},Re={class:"w-full flex flex-col"},Ue={class:"w-full sm:w-96 bg-white h-16 shadow-lg fixed top-0 z-10"},Pe={class:"pr-2 flex pt-3 items-center"},Me={class:"font-semibold w-fit text-xl pr-2 truncate"},He={class:"flex"},Oe={key:0,class:"pt-1 b-2 text-xs font-light max-w-[9rem] text-gray-600 truncate"},We={key:1},Ge={key:2,class:"pl-2"},Je={class:"w-full flex justify-end"},Ke={class:"p-1 pr-4"},Qe={class:"flex-1 overflow-y-auto custom-scrollbar pt-20 pb-14 p-2 bg-gray-100"},Xe={class:"bg-white p-2 rounded-lg"},Ye={key:0,class:"w-full sm:w-96 fixed bottom-0 left-0 h-[15%] bg-white border-t border-gray-300 shadow-lg z-[1000] flex flex-col touch-area rounded-t-md"},Ze={class:"text-gray-600 p-2 text-[15px]"},et=Ne(()=>a("div",{class:"w-full border-b-[0.5px] border-gray-300 flex text-center justify-center touchable hover:cursor-pointer"},[a("p",{class:"text-gray-600 p-2 text-[15px]"},"Help")],-1)),tt={class:"flex w-full sm:w-96 pl-3 pb-1 pt-1 fixed bottom-0 z-10 bg-white justify-center shadow-lg"},lt={class:"pt-1 w-[20rem] sm:w-[20rem] ml-3"},at={key:0},st={key:1},rt={key:2,class:y(["fixed bottom-[4rem] leading-5 pr-[60rem] pl-[2.5rem] z-50 w-[20rem] sm:w-96 animate-slide-in"])},ot={key:3,class:y(["fixed bottom-[4rem] leading-5 pr-[60rem] pl-[2.5rem] z-50 w-[20rem] sm:w-96 animate-slide-in"])},nt={key:4,class:"fixed bottom-[4rem] leading-5 pr-[65rem] pl-[2.5rem] z-50 w-full sm:w-96 animate-slide-in"},it={class:"rounded w-[20rem] h-fit p-2 text-left bg-blue-200 text-blue-500"},ut={class:"rounded w-[20rem] h-fit p-2 text-left bg-red-200 text-red-500"},mt={class:"p-2 pr-2 pt-[5px]"},ct={__name:"show_form_builder",props:{frm:Object,docname:String,frmname:String,doctype:String},setup(b){const e=b,h={Data:M,Select:H,Int:Se,Autocomplete:Ce,Dynamic_Link:H,Heading:De,Datetime:$e,Date:Te,"Section Break":Ae,Check:ze,Text:M,"Long Text":O,"Small Text":O,Float:Ve,Link:je,Currency:Ee,Attach:Be,Table:Ie},o=n(!1),r=n(""),m=n(!1),$=n(e.frm.submitable),c=n(e.docname),p=n(e.frm.Docstatus),T=n({}),W=n(e.frm.Saved),G=n(e.frm.Submit),k=n(!1),A=n(!1),z=n(!1),J=n(e.frm.Amend),V=n(""),q=n(""),S=n(!1),L=n(!1),K=()=>{S.value=!S.value};be(e.frm,t=>{p.value=t.Docstatus,W.value=t.Saved,G.value=t.Submit,$.value=t.submitable,J.value=t.Amend,t.action?L.value=!1:L.value=!0});const Q=()=>{e.frm.workflow(),S.value=!1};e.frm.name=e.docname,e.frm.doctype=e.doctype,e.frm.Frm=e.frmname;const X=()=>w(this,null,function*(){o.value=!0,$.value=e.frm.submitable;try{const t=yield e.frm.save();typeof t=="object"?r.value=t:typeof t=="string"&&(c.value=t,r.value="Save successful!",m.value=!0,$.value===1&&(showSubmitButton.value=!0),T.value=e.frm.doc,j.push({path:"/showform",query:{docname:t,frmname:e.frm.Frm,doctype:e.frm.doctype}}))}catch(t){r.value=`Error: ${t.message}`,m.value=!1,console.error(`Error: ${t.message}`)}finally{o.value=!1,setTimeout(()=>{r.value=""},2500)}}),Y=()=>w(this,null,function*(){o.value=!0;try{const t=yield e.frm.amend();c.value=t,r.value="Amend successful!",m.value=!0,j.push({path:"/showform",query:{docname:t}})}catch(t){r.value=`Error: ${t.message}`,m.value=!1,console.error(`Error: ${t.message}`)}finally{o.value=!1,setTimeout(()=>{r.value=""},2500)}}),Z=()=>w(this,null,function*(){o.value=!0;try{const t=yield e.frm.submit(c.value);typeof t=="object"?(m.value=!1,p.value=0,r.value=t):(p.value=t,r.value="Submit successful!",m.value=!0,p.value=1),k.value=!1}catch(t){r.value=`Error: ${t.message}`,m.value=!1,console.error(`Error: ${t.message}`),k.value=!1}finally{o.value=!1,setTimeout(()=>{r.value=""},2500)}}),ee=()=>w(this,null,function*(){z.value=!1;try{yield e.frm.cancel(c.value),V.value="Cancel successful!",q.value=!0}catch(t){V.value=`Error: ${t.message}`,q.value=!1,console.error(`Error: ${t.message}`)}finally{o.value=!1,setTimeout(()=>{V.value=""},2500)}}),te=()=>{k.value=!0},le=()=>{A.value=!0},ae=()=>{z.value=!0},se=_(()=>{const t=[];let d=0;for(const i of e.frm.fields)i.fieldtype==="Section Break"?(d+=1,t.push(i)):d===0&&t.push(i);return t}),re=_(()=>e.frm.style=="Success"?"border-green-200 border-[0.5px] ml-2 rounded-2xl text-center":e.frm.style=="Danger"?"border-red-200 border-[0.5px] ml-2 rounded-2xl text-center":e.frm.style=="Inverse"?"border-black border-[0.5px] ml-2 rounded-2xl text-center":e.frm.style=="Warning"?"border-orange-200 border-[0.5px] ml-2 rounded-2xl text-center":e.frm.style=="Info"?"border-blue-200 border-[0.5px] ml-2 rounded-2xl text-center":e.frm.style=="Primary"?"border-[#9fa8da] border-[0.5px] ml-2 rounded-2xl text-center":"border-gray-500 border-[0.5px] ml-2 rounded-2xl text-center"),oe=_(()=>e.frm.style=="Success"?"text-sm px-2 max-w-[6rem] truncate text-green-500":e.frm.style=="Danger"?"text-sm px-2 max-w-[6rem] truncate text-red-500":e.frm.style=="Inverse"?"text-sm px-2 max-w-[6rem] truncate text-white":e.frm.style=="Warning"?"text-sm px-2 max-w-[6rem] truncate text-orange-500":e.frm.style=="Info"?"text-sm px-2 max-w-[6rem] truncate text-blue-500":e.frm.style=="Primary"?"text-sm px-2 max-w-[6rem] truncate text-[#1a237e]":" text-sm px-2 max-w-[6rem] truncate text-gray-500"),ne=_(()=>{if(e.frm.Saved===0)return"Not Saved";if(e.frm.submitable==0)return"";if(e.frm.Saved===1)return e.frm.submitable===1&&e.frm.Submit!==1?"Draft":e.frm.Docstatus===2?"Cancelled":e.frm.Submit===1?"Submitted":"Saved"}),ie=_(()=>{if(e.frm.Saved===0)return"border-red-500 border-[0.5px] rounded-2xl text-center";if(e.frm.submitable==0)return"";if(e.frm.Saved===1)return e.frm.submitable===1&&e.frm.Submit!==1?"border-red-500 border-[0.5px]  mr-1 rounded-2xl text-center":e.frm.Docstatus===2?"border-red-500 border-[0.5px] rounded-2xl text-center":(e.frm.Submit===1,"border-blue-500 border-[0.5px] rounded-2xl text-center")}),ue=_(()=>{if(e.frm.Saved===0)return"px-2 text-sm w-20 text-red-500";if(e.frm.submitable==0)return"";if(e.frm.Saved===1)return e.frm.submitable===1&&e.frm.Submit!==1?" px-2 w-fit text-[12px] text-red-600":e.frm.Docstatus===2?"px-2 text-[12px] w-20 text-red-500":(e.frm.Submit===1,"px-2 text-[12px] w-20 text-blue-500")}),E=n(""),me=()=>w(this,null,function*(){c.value&&(E.value=yield e.frm.delete(c.value),setTimeout(()=>{E.value=""},2500),A.value=!1,R())}),ce=_(()=>{const t=[{label:"Print",icon:()=>B(v,{name:"printer"})},{label:"Create New "+e.frm.doctype,icon:()=>B(v,{name:"file-plus"}),onClick:()=>{de()}},{label:"Reload",icon:()=>B(v,{name:"refresh-ccw"}),onClick:()=>{window.location.reload()}}];return e.frm.Docstatus!==1&&t.push({label:"Delete",icon:()=>B(v,{name:"trash"}),onClick:le}),[{group:"Actions",items:t}]}),j=xe(),R=()=>{e.frm.doc={docstatus:0},e.frm.name=null,e.frm.fields=[],e.frm.Docstatus=0,e.frm.Saved=0,e.frm.Submit=0,e.frm.Amend=0,j.push({name:"ListPage",query:{frmname:e.frm.Frm,doctype:e.frm.doctype}})},de=()=>{e.frm.doc={docstatus:0},e.frm.name=null,e.frm.fields=[],e.frm.Docstatus=0,e.frm.Saved=0,e.frm.Submit=0,e.frm.Amend=0,j.push({name:"Form",query:{frmname:e.frm.Frm,doctype:e.frm.doctype}})};return(t,d)=>(l(),u("div",Fe,[a("div",Re,[a("div",Ue,[a("div",Pe,[f(s(v),{class:"w-8 h-8 text-gray-600 hover:text-black",name:"chevron-left",onClick:R}),a("div",{class:y({"flex-1 text-center":!c.value})},[a("p",Me,g(b.frm.doctype),1),a("div",He,[c.value?(l(),u("p",Oe,g(c.value),1)):C("",!0),e.frm.workflowStatus?(l(),u("div",We,[a("div",{class:y(re.value)},[a("p",{class:y(oe.value)},g(e.frm.workflow_state),3)],2)])):(l(),u("div",Ge,[a("div",{class:y(ie.value)},[a("p",{class:y(ue.value)},g(ne.value),3)],2)]))])],2),a("div",Je,[a("div",Ke,[f(s(v),{class:"w-6 h-6 text-gray-600 hover:text-black hover:cursor-pointer",name:"bell",onClick:d[0]||(d[0]=i=>s(j).push("/notifications"))})]),f(qe)])])]),a("div",Qe,[a("div",Xe,[(l(!0),u(U,null,P(se.value,i=>(l(),x(ye(h[i.fieldtype]),{key:i.fieldname,para:"",should:"",align:"",perfectly:"",field:i,frm:b.frm},null,8,["field","frm"]))),128))])]),f(he,{name:"slide-up"},{default:N(()=>[S.value?(l(),u("div",Ye,[a("div",null,[a("div",{class:"w-full border-b-[0.5px] border-gray-300 flex text-center justify-center touchable hover:cursor-pointer",onClick:Q},[a("p",Ze,g(e.frm.action),1)]),et])])):C("",!0)]),_:1}),S.value?(l(),u("div",{key:0,class:"fixed inset-0 bg-black opacity-50 z-[999] w-full sm:w-96",onClick:d[1]||(d[1]=i=>S.value=!1)})):C("",!0),a("div",tt,[f(s(F),{options:{title:"Confirm",message:"Are you sure you want to submit this form "+e.docname+"?",size:"sm",actions:[{label:"Confirm",variant:"solid",onClick:Z},{label:"Cancel",variant:"subtle",onClick:()=>{k.value=!1}}]},modelValue:k.value,"onUpdate:modelValue":d[2]||(d[2]=i=>k.value=i)},null,8,["options","modelValue"]),f(s(F),{options:{title:"Confirm Delete",message:"Are you sure you want to delete this form "+e.docname+"?",size:"sm",actions:[{label:"Delete",variant:"solid",onClick:me},{label:"Cancel",variant:"subtle",onClick:()=>{A.value=!1}}]},modelValue:A.value,"onUpdate:modelValue":d[3]||(d[3]=i=>A.value=i)},null,8,["options","modelValue"]),f(s(F),{options:{title:"Confirm Cancel",message:"Are you sure you want to cancel this form "+e.docname+"?",size:"sm",actions:[{label:"Confirm",variant:"solid",onClick:ee},{label:"Cancel",variant:"subtle",onClick:()=>{z.value=!1}}]},modelValue:z.value,"onUpdate:modelValue":d[4]||(d[4]=i=>z.value=i)},null,8,["options","modelValue"]),a("div",lt,[e.frm.workflowStatus?(l(),u("div",at,[f(s(D),{variant:"solid",theme:"gray",size:"sm",label:"Action",loading:o.value,loadingText:"Saving...",disabled:L.value,link:null,class:"w-full h-full p-2",onClick:K},null,8,["loading","disabled"])])):(l(),u("div",st,[e.frm.Saved==0||e.frm.submitable==0?(l(),x(s(D),{key:0,variant:"solid",theme:"gray",size:"sm",label:"Save",loading:o.value,loadingText:"Saving...",disabled:e.frm.saved,link:null,class:"w-full h-full p-2",onClick:X},null,8,["loading","disabled"])):e.frm.Docstatus===1&&e.frm.Saved==1&&e.frm.submitable==1?(l(),x(s(D),{key:1,variant:"solid",theme:"red",size:"sm",label:"Cancel",loading:o.value,loadingText:"Cancelling...",disabled:!1,link:null,class:"w-full h-full p-2",onClick:ae},null,8,["loading"])):e.frm.Docstatus==2&&e.frm.submitable==1?(l(),x(s(D),{key:2,variant:"solid",theme:"gray",size:"sm",label:"Amend",loading:o.value,loadingText:"Amending...",disabled:!1,link:null,class:"w-full h-full p-2",onClick:Y},null,8,["loading"])):(l(),x(s(D),{key:3,variant:"solid",theme:"gray",size:"sm",label:"Submit",loading:o.value,loadingText:"Submitting...",disabled:!1,link:null,class:"w-full h-full p-2",onClick:te},null,8,["loading"]))])),typeof r.value=="object"?(l(),u("div",rt,[(l(!0),u(U,null,P(r.value,(i,fe)=>(l(),u("div",{key:fe,class:y(["rounded w-[20rem] h-fit p-2 text-left mb-2",{"bg-blue-200 text-blue-500":m.value,"bg-red-200 text-red-500":!m.value}])},[m.value?(l(),x(s(v),{key:0,name:"check",class:"inline w-4 h-4 mr-2"})):(l(),x(s(v),{key:1,name:"x",class:"inline w-4 h-4 mr-2"})),I(" "+g(i),1)],2))),128))])):r.value?(l(),u("div",ot,[a("div",{class:y(["rounded w-[20rem] h-fit p-2 text-left",{"bg-blue-200 text-blue-500":m.value,"bg-red-200 text-red-500":!m.value}])},[m.value?(l(),x(s(v),{key:0,name:"check",class:"inline w-4 h-4 mr-2"})):(l(),x(s(v),{key:1,name:"x",class:"inline w-4 h-4 mr-2"})),I(" "+g(r.value),1)],2)])):C("",!0),E.value?(l(),u("div",nt,[a("div",it,[f(s(v),{name:"info",class:"inline w-4 h-4 mr-2"}),I(" "+g(E.value),1)])])):C("",!0),V.value?(l(),u("div",{key:5,class:y(["fixed bottom-[4rem] leading-5 pr-[65rem] pl-[2.5rem] z-50 w-full sm:w-96",q.value?"animate-slide-in":"animate-slide-out"])},[a("div",ut,[f(s(v),{name:"x",class:"inline w-4 h-4 mr-2"}),I(" "+g(V.value),1)])],2)):C("",!0)]),a("div",mt,[f(s(Le),{options:ce.value},{default:N(()=>[f(s(D),null,{icon:N(()=>[f(s(v),{name:"more-vertical",class:"h-6 w-6 text-gray-600 hover:text-black"})]),_:1})]),_:1},8,["options"])])])])]))}},dt=pe(ct,[["__scopeId","data-v-da9fde20"]]),ft={class:"w-full flex-1 overflow-y-auto custom-scrollbar"},vt={key:1},St={__name:"ShowForm",setup(b){const e=ve(),h=_(()=>e.form),o=ke();return we(()=>w(this,null,function*(){yield e.initForm()})),(r,m)=>(l(),u("div",ft,[h.value?(l(),x(dt,{key:0,docname:s(o).query.docname,frm:h.value,doctype:s(o).query.doctype,frmname:s(o).query.frmname},null,8,["docname","frm","doctype","frmname"])):(l(),u("p",vt,"Loading..."))]))}};export{St as default};