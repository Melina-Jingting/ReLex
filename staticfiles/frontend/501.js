(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[501],{52399:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(67294);const i=n(33434).ZP.button`
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
`,l=()=>a.createElement(r,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})}},a.createElement(i.Z,{src:"scroll-top.svg",width:"26px",height:"26px"}))},12058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294);const i=({src:e,width:t,height:i})=>a.createElement("img",{src:n(66073)(`./${e}`),alt:e,with:t,height:i})},77087:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var a=n(67294),i=n(34051),r=n(31555),l=n(46699),o=n(13327),c=n.n(o),s=n(12058),d=n(33434);const m=d.ZP.section`
  position: relative;
  padding: 0rem 0 0rem;

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 4rem;
  }
`,p=d.ZP.p`
  margin: 1.5rem 0 2rem 0;
`,h=d.ZP.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`,x=d.ZP.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,g=d.ZP.h6`
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`,u=d.ZP.p`
  font-size: 0.75rem;
`,f=(0,l.Z)()((({icon:e,title:t,content:n,section:l,t:o,id:d})=>a.createElement(m,null,a.createElement(i.Z,{type:"flex",justify:"space-between",align:"middle",id:d},a.createElement(r.Z,{xs:6},a.createElement(c(),{left:!0},a.createElement(s.Z,{src:e,width:"300px",height:"300px"}))),a.createElement(r.Z,{xs:6},a.createElement(c(),{right:!0},a.createElement(h,null,a.createElement("h3",null,o(t)),a.createElement(p,null,a.createElement("h5",null,o(n))),a.createElement(x,null,a.createElement(i.Z,{type:"flex",justify:"space-between"},l&&"object"==typeof l&&l.map(((e,t)=>a.createElement(r.Z,{key:t,span:11},a.createElement(s.Z,{src:e.icon,width:"60px",height:"60px"}),a.createElement(g,null,o(e.title)),a.createElement(u,null,o(e.content))))))))))))));var b=n(98367),v=n(52399);const w=d.ZP.section`
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
`,k=(0,l.Z)()((({title:e,content:t,button:n,icon:l,t:o,id:c})=>a.createElement(w,null,a.createElement(i.Z,{type:"flex",justify:"space-between",align:"middle",id:c},a.createElement(r.Z,{xs:6},a.createElement(b.ZP,{left:!0},a.createElement(y,null,a.createElement("h3",null,o(e)),a.createElement(E,null,a.createElement("h5",null,o(t))),a.createElement(Z,null,n&&"object"==typeof n&&n.map(((e,t)=>a.createElement(v.Z,{key:t,color:e.color,width:"true",onClick:()=>{document.getElementById("about").scrollIntoView({behavior:"smooth"})}},o(e.title)))))))),a.createElement(r.Z,{xs:6},a.createElement(b.ZP,{right:!0},a.createElement(s.Z,{src:l,width:"300px",height:"300px"}))))))),P=e=>"left"===e.type?a.createElement(f,e):"right"===e.type?a.createElement(k,e):null},25018:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(67294),i=n(34051),r=n(31555),l=n(43950),o=n(95925),c=n(46699),s=(n(52399),n(73727)),d=n(33434),m=n(42762);const p=d.ZP.header`
  padding: 1rem 0.5rem;
`,h=d.ZP.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
`,x=(d.ZP.div`
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
`,u=d.ZP.h5`
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
`,b=(0,d.ZP)(m.Z)`
  font-size: 22px;
  padding-right: ${e=>e.padding?"10px":""};
`;d.ZP.span`
  cursor: pointer;
`,n(82523);const v=(0,c.Z)()((({t:e})=>{const[t]=(0,a.useState)(!1),[c]=(0,a.useState)(!1),[d,m]=(0,a.useState)(!1),v=()=>{m(!d)},w=()=>a.createElement(a.Fragment,null,a.createElement(s.Link,{to:"/",style:{width:"180px"}},a.createElement("h5",null,e("contact"))));return a.createElement(p,null,a.createElement(h,null,a.createElement(i.Z,{type:"flex",justify:"space-between",gutter:20},a.createElement(r.Z,null,a.createElement("a",null,a.createElement("img",{src:n(64925),alt:"how-it-works.svg",width:"200"}))),a.createElement(r.Z,null,a.createElement("div",{className:"float-right"},a.createElement(g,null,a.createElement(w,null)),a.createElement(x,{onClick:()=>{m(!d)}},a.createElement(b,null))))),a.createElement(o.Z,{in:!c||t,timeout:350,classNames:"NavAnimation",unmountOnExit:!0},a.createElement(l.Z,{closable:!1,visible:d,onClose:v},a.createElement(r.Z,{style:{marginBottom:"2.5rem"}},a.createElement(f,{onClick:v},a.createElement(r.Z,{span:12},a.createElement(u,null,"Menu")),a.createElement(r.Z,{span:12},a.createElement(b,{padding:"true"})))),a.createElement(w,null)))))}))},35588:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var a=n(67294),i=n(96084),r=n(1635),l=n(46699),o=(n(98367),n(52399)),c=(n(99921),n(33434));const s=c.ZP.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`,d=c.ZP.p`
  padding: 0.75rem 0 0.75rem;
`,m=c.ZP.div`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;var p=n(82523);const h=(0,l.Z)()((({title:e,content:t,button:n,t:l,linkedin_url:c})=>a.createElement(p.W,null,a.createElement(s,null,a.createElement(i.Z,{type:"flex",justify:"center",align:"middle"},a.createElement(m,null,a.createElement(r.Z,{lg:24,md:24,sm:24,xs:24},a.createElement("h2",{style:{color:"black"}},a.createElement("b",null,l(e))),a.createElement(d,null,a.createElement("h5",{style:{color:"black"}},l(t))),a.createElement(d,null,a.createElement("h5",{style:{color:"black"}},"Begin your journey to career fulfillment with us today!")),n?a.createElement(o.Z,{name:"submit",type:"submit",onClick:()=>(()=>{const e=c;window.open(e,"_blank")})()},l(n)):"")))))))},77501:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var a=n(67294),i=n(51003);const r=JSON.parse('{"T":"Discover possibilities","f":"Get an overview of career paths available to you based on the paths of those who shared the same education and experiences."}'),l=JSON.parse('{"TN":"Learn from others\' successes","fL":"Gain insights on what it took for others to land the job you’re aiming for to see if or how you can stand a chance"}'),o=JSON.parse('{"TN":"Weigh your options","fL":"Compare the long term benefits of choosing one education or experience over another"}');var c=n(47672),s=n(49530),d=n(35588),m=n(77087),p=n(25018),h=n(26013),x=n.n(h);const g=()=>a.createElement(c.Z,null,a.createElement(p.Z,null),a.createElement(s.Z,null),a.createElement(c.Z,null,a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,style:{position:"absolute",objectFit:"fill",zIndex:"-1",opacity:"0.3"}},a.createElement("source",{src:x(),type:"video/mp4"})),a.createElement(d.Z,{title:i.TN,content:i.fL,button:i.LI,linkedin_url:"https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ioflr7umfzey&redirect_uri=https%3A%2F%2F6fxspsdl46.execute-api.us-east-2.amazonaws.com%2Fdefault%2Flinkedinsocial"})),a.createElement(m.Z,{type:"right",first:"true",title:r.T,content:r.f,icon:"look-in-mirror.svg",id:"intro"}),a.createElement(m.Z,{type:"left",title:l.TN,content:l.fL,section:l.section,icon:"visualise-map.svg",id:"about"}),a.createElement(m.Z,{type:"right",title:o.TN,content:o.fL,icon:"graphs.svg",id:"mission"}))},86257:(e,t,n)=>{e.exports=n.p+"f92e16273c092bbbd583ac1dfe70062f.svg"},84985:(e,t,n)=>{e.exports=n.p+"fca7caaa8752997955531ac978e5d679.svg"},58820:(e,t,n)=>{e.exports=n.p+"ed89c5e0972c5e478686979a0d40cddb.svg"},50841:(e,t,n)=>{e.exports=n.p+"bb63ce7e0b3feba8ebc7c7f00dd7ffc6.svg"},81948:(e,t,n)=>{e.exports=n.p+"3ba4a27cc397a15fea384261a2f4c6df.svg"},78228:(e,t,n)=>{e.exports=n.p+"cb18519522a84d37c170d56b588cdf7a.svg"},84430:(e,t,n)=>{e.exports=n.p+"b9f542eb21b5c961994bd2e4016e26ce.svg"},15777:(e,t,n)=>{e.exports=n.p+"f0c61969af4444eccd8f52a961b5eba7.svg"},78966:(e,t,n)=>{e.exports=n.p+"cfae69826a7ca25bee3bb7eb998c0952.svg"},64925:(e,t,n)=>{e.exports=n.p+"ea00bf9f0215541f76756cb363564eac.svg"},60428:(e,t,n)=>{e.exports=n.p+"50a9bd158a8ccc5ff3f546fbb344455e.svg"},82314:(e,t,n)=>{e.exports=n.p+"87d24d3d6034aa446b06aa0f63cd6789.svg"},14307:(e,t,n)=>{e.exports=n.p+"b2db761c9ebbbc8cbf57c1f0ddcf3f1f.svg"},70384:(e,t,n)=>{e.exports=n.p+"75dfac2bf3bf83a43664b73c19f20e2c.svg"},30319:(e,t,n)=>{e.exports=n.p+"ca4c4f7b352c3a179f79a35fa0566ae1.svg"},59379:(e,t,n)=>{e.exports=n.p+"cd638e8984a702c8313cc705769f52d7.svg"},32983:(e,t,n)=>{e.exports=n.p+"74eca293a479c375370419f5c29d4b8a.svg"},66887:(e,t,n)=>{e.exports=n.p+"d7341601aef0ccf9db5698ed6b086269.svg"},71253:(e,t,n)=>{e.exports=n.p+"c85b56a10d2aca224339e0ad3a004950.svg"},25879:(e,t,n)=>{e.exports=n.p+"aa6e6f43e16b94ffbf9c5716f47bfe30.svg"},26013:(e,t,n)=>{e.exports=n.p+"d0daed8b0f36ebde79d70305052ad529.mp4"},99921:(e,t,n)=>{e.exports=n.p+"d28831bc5d9eeb4a9a44805181faaeed.mp4"},51003:e=>{"use strict";e.exports=JSON.parse('{"TN":"Data-driven insights to inform your career decisions","fL":"We help you make smarter career decisions by presenting career paths taken by real people and deriving insights you care about.","LI":"Sign in with Linkedin"}')},66073:(e,t,n)=>{var a={"./answer.svg":86257,"./ask-questions.svg":84985,"./compare.svg":58820,"./developer.svg":50841,"./github.svg":81948,"./graphs.svg":78228,"./how-it-works.svg":84430,"./instagram.svg":15777,"./linkedin.svg":78966,"./logo.svg":64925,"./look-in-mirror.svg":60428,"./mailbox.svg":82314,"./medium.svg":14307,"./notes.svg":70384,"./product-launch.svg":30319,"./scroll-top.svg":59379,"./twitter.svg":32983,"./visualise-map.svg":66887,"./waving.svg":71253,"./whiteboard-map.svg":25879};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=66073}}]);