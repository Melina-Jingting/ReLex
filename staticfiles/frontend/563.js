(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[563],{52399:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(67294);const i=n(33434).ZP.button`
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
`,r=({color:e,width:t,children:n,onClick:r})=>a.createElement(i,{color:e,width:t,onClick:r},n)},47672:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(67294),i=n(82523);const r=({padding:e,border:t,children:n})=>a.createElement(i.W,{padding:e,border:t},n)},82523:(e,t,n)=>{"use strict";n.d(t,{W:()=>a});const a=n(33434).ZP.div`
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
`},49530:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(67294),i=n(12058);const r=n(33434).ZP.div`
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
`,l=()=>a.createElement(r,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},a.createElement(i.Z,{src:"scroll-top.svg",width:"26px",height:"26px"}))},12058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294);const i=({src:e,width:t,height:i})=>a.createElement("img",{src:n(66073)(`./${e}`),alt:e,with:t,height:i})},77087:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var a=n(67294),i=n(34051),r=n(31555),l=n(46699),c=n(13327),o=n.n(c),d=n(12058),s=n(33434);const m=s.ZP.section`
  position: relative;
  padding: 0rem 0 0rem;

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
  }
`,p=s.ZP.p`
  margin: 1.5rem 0 2rem 0;
`,x=s.ZP.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`,h=s.ZP.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,g=s.ZP.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`,u=s.ZP.p`
  font-size: 0.75rem;
`,f=(0,l.Z)()((({icon:e,title:t,content:n,section:l,t:c,id:s})=>a.createElement(m,null,a.createElement(i.Z,{type:"flex",justify:"space-between",align:"middle",id:s},a.createElement(r.Z,{xs:6},a.createElement(o(),{left:!0},a.createElement(d.Z,{src:e,width:"300px",height:"300px"}))),a.createElement(r.Z,{xs:6},a.createElement(o(),{right:!0},a.createElement(x,null,a.createElement("h3",null,c(t)),a.createElement(p,null,a.createElement("h5",null,c(n))),a.createElement(h,null,a.createElement(i.Z,{type:"flex",justify:"space-between"},l&&"object"==typeof l&&l.map(((e,t)=>a.createElement(r.Z,{key:t,span:11},a.createElement(d.Z,{src:e.icon,width:"60px",height:"60px"}),a.createElement(g,null,c(e.title)),a.createElement(u,null,c(e.content))))))))))))));var b=n(98367),w=n(52399);const v=s.ZP.section`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 768px) {
    padding: 8rem 0 6rem;
  }
`,E=s.ZP.p`
  margin: 1.5rem 0 2rem 0;
`,Z=s.ZP.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`,y=s.ZP.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`,k=(0,l.Z)()((({title:e,content:t,button:n,icon:l,t:c,id:o})=>a.createElement(v,null,a.createElement(i.Z,{type:"flex",justify:"space-between",align:"middle",id:o},a.createElement(r.Z,{xs:6},a.createElement(b.ZP,{left:!0},a.createElement(Z,null,a.createElement("h3",null,c(e)),a.createElement(E,null,a.createElement("h5",null,c(t))),a.createElement(y,null,n&&"object"==typeof n&&n.map(((e,t)=>a.createElement(w.Z,{key:t,color:e.color,width:"true",onClick:()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}},c(e.title)))))))),a.createElement(r.Z,{xs:6},a.createElement(b.ZP,{right:!0},a.createElement(d.Z,{src:l,width:"300px",height:"300px"}))))))),P=e=>"left"===e.type?a.createElement(f,e):"right"===e.type?a.createElement(k,e):null},25018:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var a=n(67294),i=n(34051),r=n(31555),l=n(43950),c=n(95925),o=n(46699),d=(n(52399),n(73727)),s=n(33434),m=n(42762);const p=s.ZP.header`
  padding: 1rem 0.5rem;
`,x=s.ZP.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
`,h=(s.ZP.div`
  display: inline-block;
  text-align: center;
`,s.ZP.div`
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
`),g=s.ZP.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`,u=s.ZP.h5`
  font-size: 1.37rem;
  margin-top: -0.45rem;
  padding: 0 1.56rem 0 0;
  font-weight: 600;
  border-bottom: 5px solid #111b47;
`,f=s.ZP.span`
  font-size: 12px;
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
`,b=(0,s.ZP)(m.Z)`
  font-size: 22px;
  padding-right: ${e=>e.padding?"10px":""};
`;s.ZP.span`
  cursor: pointer;
`,n(82523);const w=(0,o.Z)()((({t:e})=>{const[t]=(0,a.useState)(!1),[o]=(0,a.useState)(!1),[s,m]=(0,a.useState)(!1),w=()=>{m(!s)},v=()=>a.createElement(a.Fragment,null,a.createElement(d.Link,{to:"/",style:{width:"180px"}},a.createElement("h5",null,e("contact"))));return a.createElement(p,null,a.createElement(x,null,a.createElement(i.Z,{type:"flex",justify:"space-between",gutter:20},a.createElement(r.Z,null,a.createElement("a",null,a.createElement("img",{src:n(64925),alt:"how-it-works.svg",width:"200"}))),a.createElement(r.Z,null,a.createElement("div",{className:"float-right"},a.createElement(g,null,a.createElement(v,null)),a.createElement(h,{onClick:()=>{m(!s)}},a.createElement(b,null))))),a.createElement(c.Z,{in:!o||t,timeout:350,classNames:"NavAnimation",unmountOnExit:!0},a.createElement(l.Z,{closable:!1,visible:s,onClose:w},a.createElement(r.Z,{style:{marginBottom:"2.5rem"}},a.createElement(f,{onClick:w},a.createElement(r.Z,{span:12},a.createElement(u,null,"Menu")),a.createElement(r.Z,{span:12},a.createElement(b,{padding:"true"})))),a.createElement(v,null)))))}))},35588:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var a=n(67294),i=n(96084),r=n(1635),l=n(46699),c=(n(98367),n(52399)),o=(n(99921),n(33434));const d=o.ZP.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`,s=o.ZP.p`
  padding: 0.75rem 0 0.75rem;
`,m=o.ZP.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;var p=n(82523);const x=(0,l.Z)()((({title:e,content:t,button:n,t:l,linkedin_url:o})=>a.createElement(p.W,null,a.createElement(d,null,a.createElement(i.Z,{type:"flex",justify:"center",align:"middle"},a.createElement(m,null,a.createElement(r.Z,{lg:24,md:24,sm:24,xs:24},a.createElement("h2",{style:{color:"black"}},a.createElement("b",null,l(e))),a.createElement(s,null,a.createElement("h5",{style:{color:"black"}},l(t))),a.createElement(s,null,a.createElement("h5",{style:{color:"black"}},"Begin your journey to career fulfillment with us today!")),n?a.createElement(c.Z,{name:"submit",type:"submit",onClick:()=>(()=>{const e=o;window.open(e,"_blank")})()},l(n)):"")))))))},71563:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var a=n(67294),i=n(51003),r=n(47672),l=n(49530),c=n(35588),o=(n(77087),n(25018));const d=()=>a.createElement(r.Z,null,a.createElement(o.Z,null),a.createElement(l.Z,null),a.createElement(c.Z,{title:"Want to become a mentor?",content:"Join industry experts on our platform enthusiastic in sharing their knowledge and helping others grow",button:i.LI,linkedin_url:"https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ioflr7umfzey&redirect_uri=https%3A%2F%2F5sx1wjvswf.execute-api.us-east-2.amazonaws.com%2Fdefault%2Flinkedinsocial-mentor"}))},86257:(e,t,n)=>{e.exports=n.p+"f92e16273c092bbbd583ac1dfe70062f.svg"},84985:(e,t,n)=>{e.exports=n.p+"fca7caaa8752997955531ac978e5d679.svg"},58820:(e,t,n)=>{e.exports=n.p+"ed89c5e0972c5e478686979a0d40cddb.svg"},50841:(e,t,n)=>{e.exports=n.p+"bb63ce7e0b3feba8ebc7c7f00dd7ffc6.svg"},81948:(e,t,n)=>{e.exports=n.p+"3ba4a27cc397a15fea384261a2f4c6df.svg"},78228:(e,t,n)=>{e.exports=n.p+"cb18519522a84d37c170d56b588cdf7a.svg"},84430:(e,t,n)=>{e.exports=n.p+"b9f542eb21b5c961994bd2e4016e26ce.svg"},15777:(e,t,n)=>{e.exports=n.p+"f0c61969af4444eccd8f52a961b5eba7.svg"},78966:(e,t,n)=>{e.exports=n.p+"cfae69826a7ca25bee3bb7eb998c0952.svg"},64925:(e,t,n)=>{e.exports=n.p+"ea00bf9f0215541f76756cb363564eac.svg"},60428:(e,t,n)=>{e.exports=n.p+"50a9bd158a8ccc5ff3f546fbb344455e.svg"},82314:(e,t,n)=>{e.exports=n.p+"87d24d3d6034aa446b06aa0f63cd6789.svg"},14307:(e,t,n)=>{e.exports=n.p+"b2db761c9ebbbc8cbf57c1f0ddcf3f1f.svg"},70384:(e,t,n)=>{e.exports=n.p+"75dfac2bf3bf83a43664b73c19f20e2c.svg"},30319:(e,t,n)=>{e.exports=n.p+"ca4c4f7b352c3a179f79a35fa0566ae1.svg"},59379:(e,t,n)=>{e.exports=n.p+"cd638e8984a702c8313cc705769f52d7.svg"},32983:(e,t,n)=>{e.exports=n.p+"74eca293a479c375370419f5c29d4b8a.svg"},66887:(e,t,n)=>{e.exports=n.p+"d7341601aef0ccf9db5698ed6b086269.svg"},71253:(e,t,n)=>{e.exports=n.p+"c85b56a10d2aca224339e0ad3a004950.svg"},25879:(e,t,n)=>{e.exports=n.p+"aa6e6f43e16b94ffbf9c5716f47bfe30.svg"},99921:(e,t,n)=>{e.exports=n.p+"d28831bc5d9eeb4a9a44805181faaeed.mp4"},51003:e=>{"use strict";e.exports=JSON.parse('{"TN":"Data-driven insights to inform your career decisions","fL":"We help you make smarter career decisions by presenting career paths taken by real people and deriving insights you care about.","LI":"Sign in with Linkedin"}')},66073:(e,t,n)=>{var a={"./answer.svg":86257,"./ask-questions.svg":84985,"./compare.svg":58820,"./developer.svg":50841,"./github.svg":81948,"./graphs.svg":78228,"./how-it-works.svg":84430,"./instagram.svg":15777,"./linkedin.svg":78966,"./logo.svg":64925,"./look-in-mirror.svg":60428,"./mailbox.svg":82314,"./medium.svg":14307,"./notes.svg":70384,"./product-launch.svg":30319,"./scroll-top.svg":59379,"./twitter.svg":32983,"./visualise-map.svg":66887,"./waving.svg":71253,"./whiteboard-map.svg":25879};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=66073}}]);