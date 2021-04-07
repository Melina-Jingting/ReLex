(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[327],{52399:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(67294);const a=n(33434).ZP.button`
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
`,r=({color:e,width:t,children:n,onClick:r})=>i.createElement(a,{color:e,width:t,onClick:r},n)},47672:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var i=n(67294),a=n(82523);const r=({padding:e,border:t,children:n})=>i.createElement(a.W,{padding:e,border:t},n)},82523:(e,t,n)=>{"use strict";n.d(t,{W:()=>i});const i=n(33434).ZP.div`
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
`},49530:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(67294),a=n(12058);const r=n(33434).ZP.div`
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
`,o=()=>i.createElement(r,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},i.createElement(a.Z,{src:"scroll-top.svg",width:"26px",height:"26px"}))},12058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(67294);const a=({src:e,width:t,height:a})=>i.createElement("img",{src:n(66073)(`./${e}`),alt:e,with:t,height:a})},77087:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var i=n(67294),a=n(34051),r=n(31555),o=n(46699),l=n(13327),s=n.n(l),c=n(12058),d=n(33434);const p=d.ZP.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
  }
`,m=d.ZP.p`
  margin: 1.5rem 0 2rem 0;
`,h=d.ZP.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`,u=d.ZP.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,g=d.ZP.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`,x=d.ZP.p`
  font-size: 0.75rem;
`,f=(0,o.Z)()((({icon:e,title:t,content:n,section:o,t:l,id:d})=>i.createElement(p,null,i.createElement(a.Z,{type:"flex",justify:"space-between",align:"middle",id:d},i.createElement(r.Z,{xs:6},i.createElement(s(),{left:!0},i.createElement(c.Z,{src:e,width:"300px",height:"300px"}))),i.createElement(r.Z,{xs:6},i.createElement(s(),{right:!0},i.createElement(h,null,i.createElement("h6",null,l(t)),i.createElement(m,null,l(n)),i.createElement(u,null,i.createElement(a.Z,{type:"flex",justify:"space-between"},o&&"object"==typeof o&&o.map(((e,t)=>i.createElement(r.Z,{key:t,span:11},i.createElement(c.Z,{src:e.icon,width:"60px",height:"60px"}),i.createElement(g,null,l(e.title)),i.createElement(x,null,l(e.content))))))))))))));var w=n(98367),b=n(52399);const v=d.ZP.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;
  }
`,E=d.ZP.p`
  margin: 1.5rem 0 2rem 0;
`,y=d.ZP.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`,Z=d.ZP.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`,k=(0,o.Z)()((({title:e,content:t,button:n,icon:o,t:l,id:s})=>i.createElement(v,null,i.createElement(a.Z,{type:"flex",justify:"space-between",align:"middle",id:s},i.createElement(r.Z,{xs:6},i.createElement(w.ZP,{left:!0},i.createElement(y,null,i.createElement("h6",null,l(e)),i.createElement(E,null,l(t)),i.createElement(Z,null,n&&"object"==typeof n&&n.map(((e,t)=>i.createElement(b.Z,{key:t,color:e.color,width:"true",onClick:()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}},l(e.title)))))))),i.createElement(r.Z,{xs:6},i.createElement(w.ZP,{right:!0},i.createElement(c.Z,{src:o,width:"300px",height:"300px"}))))))),P=e=>"left"===e.type?i.createElement(f,e):"right"===e.type?i.createElement(k,e):null},25018:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var i=n(67294),a=n(34051),r=n(31555),o=n(43950),l=n(95925),s=n(46699),c=(n(52399),n(73727)),d=n(33434),p=n(42762);const m=d.ZP.header`
  padding: 1rem 0.5rem;
`,h=d.ZP.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
`,u=(d.ZP.div`
  display: inline-block;
  text-align: center;
`,d.ZP.div`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`,d.ZP.div`
  cursor: pointer;
  width: ${e=>e.width?"100%":"110px"};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`,d.ZP.div`
  @media only screen and (max-width: 768px) {
    display: block !important;
  }
  padding: 1.25rem 1.25rem;
  display: none;
`),g=d.ZP.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`,x=d.ZP.h5`
  font-size: 1.37rem;
  margin-top: -0.45rem;
  padding: 0 1.56rem 0 0;
  font-weight: 600;
  border-bottom: 5px solid #111b47;
`,f=d.ZP.span`
  font-size: 12px;
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
`,w=(0,d.ZP)(p.Z)`
  font-size: 22px;
  padding-right: ${e=>e.padding?"10px":""};
`;d.ZP.span`
  cursor: pointer;
`,n(82523);const b=(0,s.Z)()((({t:e})=>{const[t]=(0,i.useState)(!1),[n]=(0,i.useState)(!1),[s,d]=(0,i.useState)(!1),p=()=>{d(!s)},b=()=>i.createElement(i.Fragment,null,i.createElement(a.Z,null,i.createElement(r.Z,null,i.createElement(c.Link,{to:"/",style:{width:"180px"}},i.createElement("h5",null,e("seeker")))),i.createElement(r.Z,null,i.createElement(c.Link,{to:"/mentor",style:{width:"180px"}},i.createElement("h5",null,e("mentor"))))));return i.createElement(m,null,i.createElement(h,null,i.createElement(a.Z,{type:"flex",justify:"space-between",gutter:20},i.createElement(r.Z,null,i.createElement("h1",null,"LookUp")),i.createElement(r.Z,null,i.createElement("div",{className:"float-right"},i.createElement(g,null,i.createElement(b,null)),i.createElement(u,{onClick:()=>{d(!s)}},i.createElement(w,null))))),i.createElement(l.Z,{in:!n||t,timeout:350,classNames:"NavAnimation",unmountOnExit:!0},i.createElement(o.Z,{closable:!1,visible:s,onClose:p},i.createElement(r.Z,{style:{marginBottom:"2.5rem"}},i.createElement(f,{onClick:p},i.createElement(r.Z,{span:12},i.createElement(x,null,"Menu")),i.createElement(r.Z,{span:12},i.createElement(w,{padding:"true"})))),i.createElement(b,null)))))}))},35588:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var i=n(67294),a=n(96084),r=n(1635),o=n(46699),l=(n(98367),n(52399)),s=(n(99921),n(33434));const c=s.ZP.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`,d=s.ZP.p`
  padding: 0.75rem 0 0.75rem;
`,p=s.ZP.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;var m=n(82523);const h=(0,o.Z)()((({title:e,content:t,button:n,t:o,linkedin_url:s})=>i.createElement(m.W,null,i.createElement(c,null,i.createElement(a.Z,{type:"flex",justify:"center",align:"middle"},i.createElement(p,null,i.createElement(r.Z,{lg:24,md:24,sm:24,xs:24},i.createElement("h6",null,o(e)),i.createElement(d,null,o(t)),n?i.createElement(l.Z,{name:"submit",type:"submit",onClick:()=>(()=>{const e=s;window.open(e,"_blank")})()},o(n)):"")))))))},89327:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var i=n(67294),a=n(51003),r=n(22662),o=n(47130),l=n(3008),s=n(30256),c=n(79341),d=n(47672),p=n(49530),m=n(35588),h=n(77087),u=n(25018);const g=()=>i.createElement(d.Z,null,i.createElement(u.Z,null),i.createElement(p.Z,null),i.createElement(m.Z,{title:a.TN,content:a.fL,button:a.LI,linkedin_url:"https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ioflr7umfzey&redirect_uri=https%3A%2F%2F6fxspsdl46.execute-api.us-east-2.amazonaws.com%2Fdefault%2Flinkedinsocial"}),i.createElement(d.Z,{className:"py-5"},i.createElement("img",{src:n(84430),alt:"how-it-works.svg",width:1e3})),i.createElement(h.Z,{type:"right",first:"true",title:r.T,content:r.f,button:r.button,icon:"graphs.svg",id:"intro"}),i.createElement(h.Z,{type:"left",title:o.TN,content:o.fL,section:o.section,icon:"look-in-mirror.svg",id:"about"}),i.createElement(h.Z,{type:"right",title:l.TN,content:l.fL,icon:"visualise-map.svg",id:"mission"}),i.createElement(h.Z,{type:"left",title:s.T,content:s.f,icon:"ask-questions.svg",id:"product"}),i.createElement(h.Z,{type:"right",title:c.T,content:c.f,icon:"answer.svg",id:"product"}))},86257:(e,t,n)=>{e.exports=n.p+"f92e16273c092bbbd583ac1dfe70062f.svg"},84985:(e,t,n)=>{e.exports=n.p+"fca7caaa8752997955531ac978e5d679.svg"},50841:(e,t,n)=>{e.exports=n.p+"bb63ce7e0b3feba8ebc7c7f00dd7ffc6.svg"},81948:(e,t,n)=>{e.exports=n.p+"3ba4a27cc397a15fea384261a2f4c6df.svg"},78228:(e,t,n)=>{e.exports=n.p+"cb18519522a84d37c170d56b588cdf7a.svg"},84430:(e,t,n)=>{e.exports=n.p+"b9f542eb21b5c961994bd2e4016e26ce.svg"},15777:(e,t,n)=>{e.exports=n.p+"f0c61969af4444eccd8f52a961b5eba7.svg"},78966:(e,t,n)=>{e.exports=n.p+"cfae69826a7ca25bee3bb7eb998c0952.svg"},64925:(e,t,n)=>{e.exports=n.p+"eeaf8e4cd1d743a66e8e80eaa9158804.svg"},60428:(e,t,n)=>{e.exports=n.p+"50a9bd158a8ccc5ff3f546fbb344455e.svg"},82314:(e,t,n)=>{e.exports=n.p+"87d24d3d6034aa446b06aa0f63cd6789.svg"},14307:(e,t,n)=>{e.exports=n.p+"b2db761c9ebbbc8cbf57c1f0ddcf3f1f.svg"},70384:(e,t,n)=>{e.exports=n.p+"75dfac2bf3bf83a43664b73c19f20e2c.svg"},30319:(e,t,n)=>{e.exports=n.p+"ca4c4f7b352c3a179f79a35fa0566ae1.svg"},59379:(e,t,n)=>{e.exports=n.p+"cd638e8984a702c8313cc705769f52d7.svg"},32983:(e,t,n)=>{e.exports=n.p+"74eca293a479c375370419f5c29d4b8a.svg"},66887:(e,t,n)=>{e.exports=n.p+"d7341601aef0ccf9db5698ed6b086269.svg"},71253:(e,t,n)=>{e.exports=n.p+"c85b56a10d2aca224339e0ad3a004950.svg"},25879:(e,t,n)=>{e.exports=n.p+"aa6e6f43e16b94ffbf9c5716f47bfe30.svg"},99921:(e,t,n)=>{e.exports=n.p+"d28831bc5d9eeb4a9a44805181faaeed.mp4"},79341:e=>{"use strict";e.exports=JSON.parse('{"T":"Pay it forward","f":"Help others find out more about the job you held or are holding, by answering their queries. They might buy you a coffee, and you could choose to save it or let us donate it to partnering educational charities"}')},51003:e=>{"use strict";e.exports=JSON.parse('{"TN":"Build a fulfilling career with LookUp","fL":"Discover the career meant for you and connect with people who have been there, done that.","LI":"Sign in with Linkedin"}')},3008:e=>{"use strict";e.exports=JSON.parse('{"TN":"Visualize your goals","fL":"Add career goals to your dashboard to see a comparison between your chosen paths, and recommendations for skills you can pick up to better your chances of success"}')},30256:e=>{"use strict";e.exports=JSON.parse('{"T":"Need targetted advice?","f":"We know the pain of networking for the sake of more information. The fear of rejection, feeling like it\'s a one-sided relationship. The truth is, many people are just \\"glad to help\\". We connect you with someone from the role you\'re considering who has agreed to answer your queries. If you appreciate the advice, thank them with a cup of coffee!"}')},47130:e=>{"use strict";e.exports=JSON.parse('{"TN":"Not sure where you\'re headed?","fL":"Gain inspiration by discovering the paths of the people who shared similar experiences, skills and interests. We use our wealth of real data and matching algorithms to find paths we think could resonate with you"}')},22662:e=>{"use strict";e.exports=JSON.parse('{"T":"Gain richer insights when you search","f":"At LookUp, we let you see how people landed your dream job, and where they move on to after that. We provide rich analysis on the companies, titles, skills and income."}')},66073:(e,t,n)=>{var i={"./answer.svg":86257,"./ask-questions.svg":84985,"./developer.svg":50841,"./github.svg":81948,"./graphs.svg":78228,"./how-it-works.svg":84430,"./instagram.svg":15777,"./linkedin.svg":78966,"./logo.svg":64925,"./look-in-mirror.svg":60428,"./mailbox.svg":82314,"./medium.svg":14307,"./notes.svg":70384,"./product-launch.svg":30319,"./scroll-top.svg":59379,"./twitter.svg":32983,"./visualise-map.svg":66887,"./waving.svg":71253,"./whiteboard-map.svg":25879};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=66073}}]);