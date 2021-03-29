(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[779],{24779:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ve});var a=n(67294);const i=JSON.parse('{"TN":"Predict and build your own future with Vicarious","fL":"Discover your dream jobs and how to land them through real data and advice directly from the people who have made it.","LI":"Sign in with Linkedin"}'),r=JSON.parse('{"TN":"Gain richer insights when you search","fL":"At Vicarious, we let you see how people landed your dream job, and where they move on to after that. We provide rich analysis on the companies, titles and skills they held, and the projected compensation the alumni of this job earn.","LI":[{"title":"Get Started"}]}'),l=JSON.parse('{"TN":"Not sure where you\'re headed?","fL":"Gain inspiration by discovering the paths of the people who shared similar experiences, skills and interests. We use our wealth of real data and matching algorithms to find paths we think could resonate with you"}'),o=JSON.parse('{"TN":"Visualize your goals","fL":"Add career goals to your dashboard to see a comparison between your chosen paths, and recommendations for skills you can pick up to better your chances of success"}'),d=JSON.parse('{"T":"Need targetted advice?","f":"We know the pain of networking for the sake of more information. The fear of rejection, feeling like it\'s a one-sided relationship. The truth is, many people are just \\"glad to help\\". We connect you with someone from the role you\'re considering who has agreed to answer your queries. If you appreciate the advice, thank them with a cup of coffee!"}'),c=JSON.parse('{"T":"Pay it forward","f":"Help others find out more about the job you held or are holding, by answering their queries. They might buy you a coffee, and you could choose to save it or let us donate it to partnering educational charities"}');var s=n(29163);const m=s.ZP.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: ${e=>e.padding?"2.8rem":"0 25px"};
  overflow: hidden;
  border-top: ${e=>e.border?"1px solid #CDD1D4":""};

  @media only screen and (max-width: 1024px) {
    max-width: 950px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 700px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 370px;
  }
`,p=({padding:e,border:t,children:n})=>a.createElement(m,{padding:e,border:t},n),h=({src:e,width:t,height:i})=>a.createElement("img",{src:n(66073)(`./${e}`),alt:e,with:t,height:i}),u=s.ZP.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  right: 100px;
  bottom: 50px;
  z-index: 10;
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`,g=()=>a.createElement(u,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},a.createElement(h,{src:"scroll-top.svg",width:"26px",height:"26px"}));var x=n(96084),f=n(1635),b=n(46699),E=n(98367);const w=s.ZP.button`
  background: ${e=>e.color||"#2e186a"};
  color: ${e=>e.color?"#2E186A":"#fff"};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${e=>e.color?"1px solid #2E186A":"0px"};
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;

  @media only screen and (max-width: 1024px) {
    width: ${e=>e.width?"160px":"100%"};
  }

  @media only screen and (max-width: 768px) {
    width: ${e=>e.width?"140px":"100%"};
  }

  @media only screen and (max-width: 480px) {
    width: ${e=>e.width?"130px":"100%"};
  }
`,y=({color:e,width:t,children:n,onClick:i})=>a.createElement(w,{color:e,width:t,onClick:i},n),v=s.ZP.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`,Z=s.ZP.p`
  padding: 0.75rem 0 0.75rem;
`,k=s.ZP.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`,P=(0,b.Z)()((({title:e,content:t,button:n,t:i})=>a.createElement(v,null,a.createElement(x.Z,{type:"flex",justify:"center",align:"middle"},a.createElement(E.ZP,{bottom:!0},a.createElement(k,null,a.createElement(f.Z,{lg:24,md:24,sm:24,xs:24},a.createElement("h6",null,i(e)),a.createElement(Z,null,i(t)),n?a.createElement(y,{name:"submit",type:"submit",onClick:()=>{window.open("https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=78ioflr7umfzey&redirect_uri=https://lookup-demo.herokuapp.com/discover","_blank")}},i(n)):"")))))));var C=n(29954),N=n(9669),j=n.n(N);function S(e){let t={};return e.name||(t.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email address is required",e.message||(t.message="Message is required"),t}const z=s.ZP.p`
  margin-top: 1.5rem;
`,T=s.ZP.div`
  position: relative;
  max-width: 700px;
`,L=s.ZP.div`
  border-radius: 3rem;
  max-width: 400px;
`,O=(0,b.Z)()((({title:e,content:t,t:n})=>a.createElement(T,null,a.createElement(E.ZP,{left:!0},a.createElement("h6",null,n(e)),a.createElement(L,null,a.createElement(z,null,n(t))))))),I=s.ZP.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,$=s.ZP.input`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  outline: none;
  font-size: 0.875rem;
  padding: 1rem 1.25rem;
  transition: border-color 0.3s ease-in;
  border-radius: 8px;
  color: #000;

  &:focus,
  &:hover {
    border-color: #2e186a;
  }
`,q=(0,b.Z)()((({id:e,name:t,placeholder:n,onChange:i,t:r})=>a.createElement(I,null,a.createElement("label",{htmlFor:t},r(e)),a.createElement($,{spellcheck:"false",placeholder:r(n),name:t,id:t,onChange:i})))),D=s.ZP.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,V=s.ZP.textarea`
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  transition: border-color 0.3s ease-in;

  &:focus,
  &:hover {
    border-color: #2e186a;
  }
`,_=(0,b.Z)()((({name:e,id:t,placeholder:n,onChange:i,t:r})=>a.createElement(D,null,a.createElement("label",{htmlFor:e},r(t)),a.createElement(V,{spellcheck:"false",placeholder:r(n),id:e,name:e,onChange:i})))),A=s.ZP.div`
  padding: 5rem 0;
`,J=s.ZP.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
`,M=(s.ZP.div`
  @media only screen and (min-width: 980px) {
    padding: 10rem 7rem;
  }
`,s.ZP.form`
  width: 100%;
  max-width: 520px;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`),B=s.ZP.span`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,F=s.ZP.div`
  text-align: end;
  position: relative;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;(0,b.Z)()((({title:e,content:t,id:n,t:i})=>{const{values:r,errors:l,handleChange:o,handleSubmit:d}=(e=>{const[t,n]=(0,a.useState)({}),[i,r]=(0,a.useState)({}),[l,o]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{0===Object.keys(i).length&&l&&(n(""),C.Z.success({message:"Success",description:"Your message has been sent!"}))}),[i,l]),{handleChange:e=>{e.persist(),n((t=>({...t,[e.target.name]:e.target.value}))),r((t=>({...t,[e.target.name]:""})))},handleSubmit:n=>{n.preventDefault(),r(e(t)),3===Object.keys(t).length&&j().post("",{...t}).then((()=>{o(!0)}))},values:t,errors:i}})(S),c=({type:e})=>{const t=l[e];return l[e]?a.createElement(E.ZP,{cascade:!0},a.createElement(B,null,t)):a.createElement(B,null)};return a.createElement(A,{id:n},a.createElement(J,null,a.createElement(x.Z,{type:"flex",justify:"space-between",align:"middle"},a.createElement(f.Z,{lg:12,md:11,sm:24},a.createElement(O,{padding:!0,title:e,content:t})),a.createElement(f.Z,{lg:12,md:12,sm:24},a.createElement(M,{autoComplete:"off",onSubmit:d},a.createElement(f.Z,{span:24},a.createElement(q,{type:"text",name:"name",id:"Name",placeholder:"Your Name",value:r.name||"",onChange:o}),a.createElement(c,{type:"name"})),a.createElement(f.Z,{span:24},a.createElement(q,{type:"text",name:"email",id:"Email",placeholder:"Your Email",value:r.email||"",onChange:o}),a.createElement(c,{type:"email"})),a.createElement(f.Z,{span:24},a.createElement(_,{placeholder:"Your Message",value:r.message||"",name:"message",id:"Message",onChange:o}),a.createElement(c,{type:"message"})),a.createElement(F,null,a.createElement(y,{name:"submit",type:"submit"},i("Submit"))))))))}));var W=n(34051),Y=n(31555),G=n(13327),U=n.n(G);const H=s.ZP.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
  }
`,K=s.ZP.p`
  margin: 1.5rem 0 2rem 0;
`,Q=s.ZP.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`,R=s.ZP.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,X=s.ZP.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`,ee=s.ZP.p`
  font-size: 0.75rem;
`,te=(0,b.Z)()((({icon:e,title:t,content:n,section:i,t:r,id:l})=>a.createElement(H,null,a.createElement(W.Z,{type:"flex",justify:"space-between",align:"middle",id:l},a.createElement(Y.Z,{xs:6},a.createElement(U(),{left:!0},a.createElement(h,{src:e,width:"300px",height:"300px"}))),a.createElement(Y.Z,{xs:6},a.createElement(U(),{right:!0},a.createElement(Q,null,a.createElement("h6",null,r(t)),a.createElement(K,null,r(n)),a.createElement(R,null,a.createElement(W.Z,{type:"flex",justify:"space-between"},i&&"object"==typeof i&&i.map(((e,t)=>a.createElement(Y.Z,{key:t,span:11},a.createElement(h,{src:e.icon,width:"60px",height:"60px"}),a.createElement(X,null,r(e.title)),a.createElement(ee,null,r(e.content)))))))))))))),ne=s.ZP.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;
  }
`,ae=s.ZP.p`
  margin: 1.5rem 0 2rem 0;
`,ie=s.ZP.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`,re=s.ZP.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`,le=(0,b.Z)()((({title:e,content:t,button:n,icon:i,t:r,id:l})=>a.createElement(ne,null,a.createElement(W.Z,{type:"flex",justify:"space-between",align:"middle",id:l},a.createElement(Y.Z,{xs:6},a.createElement(E.ZP,{left:!0},a.createElement(ie,null,a.createElement("h6",null,r(e)),a.createElement(ae,null,r(t)),a.createElement(re,null,n&&"object"==typeof n&&n.map(((e,t)=>a.createElement(y,{key:t,color:e.color,width:"true",onClick:()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}},r(e.title)))))))),a.createElement(Y.Z,{xs:6},a.createElement(E.ZP,{right:!0},a.createElement(h,{src:i,width:"300px",height:"300px"}))))))),oe=e=>"left"===e.type?a.createElement(te,e):"right"===e.type?a.createElement(le,e):null;var de=n(16753),ce=n(95925),se=n(42762);const me=s.ZP.header`
  padding: 1rem 0.5rem;
`,pe=s.ZP.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
`,he=s.ZP.div`
  display: inline-block;
  text-align: center;
`,ue=(s.ZP.div`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`,s.ZP.div`
  cursor: pointer;
  width: ${e=>e.width?"100%":"110px"};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`,s.ZP.div`
  @media only screen and (max-width: 768px) {
    display: block !important;
  }
  padding: 1.25rem 1.25rem;
  display: none;
`),ge=s.ZP.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`,xe=s.ZP.h5`
  font-size: 1.37rem;
  margin-top: -0.45rem;
  padding: 0 1.56rem 0 0;
  font-weight: 600;
  border-bottom: 5px solid #111b47;
`,fe=(0,s.ZP)(he)`
  font-size: 1rem;
  color: #000000;
  transition: color 0.2s ease-in;
  margin: 0.25rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`,be=s.ZP.span`
  font-size: 12px;
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
`,Ee=(0,s.ZP)(se.Z)`
  font-size: 22px;
  padding-right: ${e=>e.padding?"10px":""};
`,we=s.ZP.span`
  cursor: pointer;
`,ye=(0,b.Z)()((({t:e})=>{const[t]=(0,a.useState)(!1),[n]=(0,a.useState)(!1),[i,r]=(0,a.useState)(!1),l=()=>{r(!i)},o=()=>{const t=e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"}),r(!1)};return a.createElement(a.Fragment,null,a.createElement(fe,{onClick:()=>t("about")},a.createElement(we,null,e("About"))),a.createElement(fe,{onClick:()=>t("mission")},a.createElement(we,null,e("Mission"))),a.createElement(fe,{onClick:()=>t("product")},a.createElement(we,null,e("Product"))),a.createElement(fe,{style:{width:"180px"},onClick:()=>t("contact")},a.createElement(we,null,a.createElement(y,null,e("Contact")))))};return a.createElement(me,null,a.createElement(pe,null,a.createElement(W.Z,{type:"flex",justify:"space-between",gutter:20},a.createElement(Y.Z,null,"Vicarious"),a.createElement(Y.Z,{justify:"flex-row-reverse",xs:8},a.createElement(ge,null,a.createElement(o,null)),a.createElement(ue,{onClick:()=>{r(!i)}},a.createElement(Ee,null)))),a.createElement(ce.Z,{in:!n||t,timeout:350,classNames:"NavAnimation",unmountOnExit:!0},a.createElement(de.Z,{closable:!1,visible:i,onClose:l},a.createElement(Y.Z,{style:{marginBottom:"2.5rem"}},a.createElement(be,{onClick:l},a.createElement(Y.Z,{span:12},a.createElement(xe,null,"Menu")),a.createElement(Y.Z,{span:12},a.createElement(Ee,{padding:"true"})))),a.createElement(o,null)))))})),ve=()=>a.createElement(p,null,a.createElement(ye,null),a.createElement(g,null),a.createElement(P,{title:i.TN,content:i.fL,button:i.LI}),a.createElement(oe,{type:"right",first:"true",title:r.TN,content:r.fL,button:r.LI,icon:"graphs.svg",id:"intro"}),a.createElement(oe,{type:"left",title:l.TN,content:l.fL,section:l.section,icon:"look-in-mirror.svg",id:"about"}),a.createElement(oe,{type:"right",title:o.TN,content:o.fL,icon:"visualise-map.svg",id:"mission"}),a.createElement(oe,{type:"left",title:d.T,content:d.f,icon:"ask-questions.svg",id:"product"}),a.createElement(oe,{type:"right",title:c.T,content:c.f,icon:"answer.svg",id:"product"}))},86257:(e,t,n)=>{e.exports=n.p+"f92e16273c092bbbd583ac1dfe70062f.svg"},84985:(e,t,n)=>{e.exports=n.p+"fca7caaa8752997955531ac978e5d679.svg"},50841:(e,t,n)=>{e.exports=n.p+"bb63ce7e0b3feba8ebc7c7f00dd7ffc6.svg"},81948:(e,t,n)=>{e.exports=n.p+"3ba4a27cc397a15fea384261a2f4c6df.svg"},78228:(e,t,n)=>{e.exports=n.p+"cb18519522a84d37c170d56b588cdf7a.svg"},15777:(e,t,n)=>{e.exports=n.p+"f0c61969af4444eccd8f52a961b5eba7.svg"},78966:(e,t,n)=>{e.exports=n.p+"cfae69826a7ca25bee3bb7eb998c0952.svg"},64925:(e,t,n)=>{e.exports=n.p+"2dcfb7c0af4a2c5bc5a1494cf4fba3fd.svg"},60428:(e,t,n)=>{e.exports=n.p+"50a9bd158a8ccc5ff3f546fbb344455e.svg"},14307:(e,t,n)=>{e.exports=n.p+"b2db761c9ebbbc8cbf57c1f0ddcf3f1f.svg"},70384:(e,t,n)=>{e.exports=n.p+"5e0695a3b6fc31639371b7e4cf75bdc6.svg"},30319:(e,t,n)=>{e.exports=n.p+"0bac05f737e3aaac6b4ea6edddd6dfa6.svg"},59379:(e,t,n)=>{e.exports=n.p+"230d5dc98fb088246ab83842b4e3ea68.svg"},32983:(e,t,n)=>{e.exports=n.p+"74eca293a479c375370419f5c29d4b8a.svg"},66887:(e,t,n)=>{e.exports=n.p+"d7341601aef0ccf9db5698ed6b086269.svg"},71253:(e,t,n)=>{e.exports=n.p+"c3cd2c8be5c00ababbcc1c40cc2d7c87.svg"},66073:(e,t,n)=>{var a={"./answer.svg":86257,"./ask-questions.svg":84985,"./developer.svg":50841,"./github.svg":81948,"./graphs.svg":78228,"./instagram.svg":15777,"./linkedin.svg":78966,"./logo.svg":64925,"./look-in-mirror.svg":60428,"./medium.svg":14307,"./notes.svg":70384,"./product-launch.svg":30319,"./scroll-top.svg":59379,"./twitter.svg":32983,"./visualise-map.svg":66887,"./waving.svg":71253};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=66073}}]);