(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[807],{30385:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>k});var a=s(67294),n=s(10682),r=s(80864),l=s(34051),o=s(31555),c=s(46799);const i=({title:e})=>a.createElement(r.Z,null,a.createElement(r.Z.Header,null,e),a.createElement(r.Z.Body,null,a.createElement(c.n4,{data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of people",data:[1,2,3,4,5,3]}]},options:{maintainAspectRatio:!1}}))),j=()=>a.createElement(r.Z,null,a.createElement(r.Z.Body,null,a.createElement(r.Z.Title,{className:"text-center"},"Microsoft",a.createElement("br",null),a.createElement("small",{class:" text-muted"},"Singapore"),a.createElement("p",{style:{padding:"2px"}},a.createElement("i",{class:"fas fa-star"}),a.createElement("i",{class:"fas fa-star"}),a.createElement("i",{class:"fas fa-star"}),a.createElement("i",{class:"fas fa-star"}),a.createElement("i",{class:"fas fa-star"}))),a.createElement(l.Z,null,a.createElement(o.Z,null,a.createElement("div",{class:"px-2 bg-success text-white text-center"},"Pros"),a.createElement("small",null,a.createElement("ul",null,a.createElement("li",null,'"Lots of guidance and smart people"'),a.createElement("li",null,'"Great benefit package"')))),a.createElement(o.Z,null,a.createElement("div",{class:"px-2 bg-danger text-white text-center"},"Cons"),a.createElement("small",null,a.createElement("ul",null,a.createElement("li",null,'"Performance review system not too fair"'),a.createElement("li",null,'"Usual struggles of working at a large company"'))))),a.createElement("div",{class:"text-center"},a.createElement("a",{href:"#"},"Review Details"))));var d=s(78851),m=s(91033);var u=s(69745),f=s(94017),h=s(25109);const p=e=>{const t=(0,a.useRef)();return(0,a.useEffect)((()=>{t.current=e})),t.current},y=({leftData:e,rightData:t,margin:s,translate:n,zoom:r,scaleExtent:l})=>{console.log(e),console.log(t);const o=(0,a.useRef)(),c=(0,a.useRef)(),i=(0,a.useRef)(),j=(e=>{const[t,s]=(0,a.useState)(null);return(0,a.useEffect)((()=>{const t=e.current,a=new m.Z((e=>{e.forEach((e=>{s(e.contentRect)}))}));return a.observe(t),()=>{a.unobserve(t)}}),[e]),t})(i),y=p(e),g=p(t);return(0,a.useEffect)((()=>{const a=(0,f.Z)(c.current),m=(0,f.Z)(o.current),{width:p,height:E}=j||i.current.getBoundingClientRect(),k=(0,d.bT9)(e),b=(0,d.bT9)(t),x=(0,d.G_s)().size([E-s.top-s.bottom,p/2-s.left-s.right]),v=(0,d.h5h)().x((e=>e.y+p/2+s.left)).y((e=>e.x)),z=(0,d.h5h)().x((e=>p/2-e.y+s.left)).y((e=>e.x));x(k),x(b);var w=k.links(),Z=b.links();console.warn("descendants",k.descendants()),console.warn("links",w),console.warn("descendants",b.descendants()),console.warn("links",Z),a.call((0,u.zoom)().transform,u.zoomIdentity.translate(n.x,n.y).scale(r)),a.call((0,u.zoom)().scaleExtent([l.min,l.max]).on("zoom",(()=>{m.attr("transform",h.B.transform),"function"==typeof onUpdate&&(onUpdate({node:null,zoom:h.B.transform.k,translate:{x:h.B.transform.x,y:h.B.transform.y}}),(void 0).state.d3.scale=h.B.transform.k,(void 0).state.d3.translate={x:h.B.transform.x,y:h.B.transform.y})}))),a.selectAll(".leftNode").data(k.descendants()).join((e=>e.append("circle").attr("opacity",0).attr("r",(e=>20*e)))).attr("class","leftNode node").attr("cx",(e=>p/2-e.y+s.left)).attr("cy",(e=>e.x)).attr("r",4).transition().duration(500).delay((e=>300*e.depth)).attr("opacity",1),a.selectAll(".rightNode").data(b.descendants()).join((e=>e.append("circle").attr("opacity",0))).attr("class","rightNode node").attr("cx",(e=>e.y+p/2+s.left)).attr("cy",(e=>e.x)).attr("r",4).transition().duration(500).delay((e=>300*e.depth)).attr("opacity",1);const L=a.selectAll(".leftLink").data(w).join("path").attr("class","leftLink").attr("d",z).attr("stroke-dasharray",(function(){const e=this.getTotalLength();return`${e} ${e}`})).attr("stroke","black").attr("fill","none").attr("opacity",1);e!==y&&L.attr("stroke-dashoffset",(function(){return this.getTotalLength()})).transition().duration(500).delay((e=>500*e.source.depth)).attr("stroke-dashoffset",0);const B=a.selectAll(".rightLink").data(Z).join("path").attr("class","rightLink").attr("d",v).attr("stroke-dasharray",(function(){const e=this.getTotalLength();return`${e} ${e}`})).attr("stroke","black").attr("fill","none").attr("opacity",1);return t!==g&&B.attr("stroke-dashoffset",(function(){return this.getTotalLength()})).transition().duration(500).delay((e=>500*e.source.depth)).attr("stroke-dashoffset",0),a.selectAll(".leftLabel").data(k.descendants()).join((e=>e.append("text").attr("opacity",0))).attr("class","leftLabel").attr("x",(e=>p/2-e.y+s.left)).attr("y",(e=>e.x-12)).attr("text-anchor","middle").attr("font-size",12).text((e=>e.data.name)).transition().duration(500).delay((e=>300*e.depth)).attr("opacity",1),a.selectAll(".rightLabel").data(b.descendants()).join((e=>e.append("text").attr("opacity",0))).attr("class","rightLabel").attr("x",(e=>p/2+e.y+s.left)).attr("y",(e=>e.x-12)).attr("text-anchor","middle").attr("font-size",12).attr("clip-path","circle() fill-box").text((e=>e.data.name)).transition().duration(500).delay((e=>300*e.depth)).attr("opacity",1),()=>{a.innerHTML="",console.log("cleanup ran")}}),[e,t,j,y,g]),a.createElement("div",{className:"rd3t-tree-container rd3t-grabbable",ref:i,style:{height:"100%",width:"100%"}},a.createElement("svg",{ref:c,s:!0,viewBox:"100 0s 400 400",style:{height:"100%",width:"100%",overflow:"visible"},class:"zoom"},a.createElement("g",{ref:o})))};var g=s(9669),E=s.n(g);const k=()=>{const[e,t]=(0,a.useState)([]),[s,c]=(0,a.useState)([]);return(0,a.useEffect)((()=>{!async function(){const{data:e}=await E().get("http://127.0.0.1:8000/api/leftTree");t(e),c(e),console.log("PRINTING OUT DATA"),console.log(e)}()}),[]),a.createElement(n.Z,null,a.createElement(r.Z,{style:{height:"500px"}},a.createElement(r.Z.Body,null,a.createElement(y,{leftData:e,rightData:s,margin:{top:25,bottom:25,left:0,right:50},translate:{x:25,y:25},zoom:1,scaleExtent:{min:.1,max:1}}))),a.createElement(j,null),a.createElement("div",{class:"analysis-section py-5"},a.createElement(l.Z,null,a.createElement(o.Z,{xs:6},a.createElement("h5",null,"Before this role, people -"),a.createElement(i,{title:"Had these skills"}),a.createElement(i,{title:"Worked at these companies"}),a.createElement(i,{title:"Held these roles"})),a.createElement(o.Z,{xs:6},a.createElement("h5",null,"After this role, people -"),a.createElement(i,{title:"Earn this much"}),a.createElement(i,{title:"Work at these companies"}),a.createElement(i,{title:"Hold these roles"})))))}},46700:(e,t,s)=>{var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=46700}}]);