(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{11949:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aipin/trust",function(){return t(56703)}])},23298:function(A,e,t){"use strict";t.d(e,{Z:function(){return WorldLed},N:function(){return c}});var i=t(97458),a=t(93901),s=t(79346),n=t(79707),r=t(12545),o=t(94726),l=t.n(o);let c=[{color:"green",label:"Photo",src:{src:"/_next/static/media/aipin-trust-photo.f1566159.png",height:497,width:372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEUDAwMzJggQKg9vUQAbBySlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNggAJGJiYQxcwIE8APAAG8AAriyd/xAAAAAElFTkSuQmCC",blurWidth:6,blurHeight:8}},{color:"pink",label:"Phone",src:{src:"/_next/static/media/aipin-trust-phone.b11f6f8e.png",height:497,width:372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAElBMVEUCAQILDAwLBQsyJggyEylvUQAstWc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nGNgYGBiYmBgYGRmYWFkZGBkZWZgAPEJAQAFOAAe4+1aqQAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8}},{color:"orange",label:"Mic",src:{src:"/_next/static/media/aipin-trust-mic.e96aefc5.png",height:497,width:372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEUDAwM1JQkpFwpvUQAN/4sYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNggAJGRiYQxcwIE8APAAGOAAnQ8jCcAAAAAElFTkSuQmCC",blurWidth:6,blurHeight:8}},{color:"blueLight",label:"Scan",src:{src:"/_next/static/media/aipin-trust-scan.a84b337b.png",height:497,width:372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAD1BMVEUBAQILCwwyKhQhJylvUQA6yaCwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVR4nGNgYGBkZGBgYGRiYmZkZGBkYWJgAPEJAQADpAAV7hhHqQAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8}},{color:"gradiantOn",label:"Powering On",src:{src:"/_next/static/media/aipin-trust-powering-on.b94c449d.png",height:497,width:372,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAADFBMVEUDAwMwJgogDw9vUQC4Tq6QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNggAJGRiYQxcwIE8APAAGOAAnQ8jCcAAAAAElFTkSuQmCC",blurWidth:6,blurHeight:8}}],d=[{title:"Trust Light",description:"Light bar with 3 RGB LEDs, allowing for an array of colors."}];function WorldLed(){let A=(0,r.Z)(l()._lgMq,!0);return(0,i.jsxs)(n.Z,{heading:"Trust Light: Casting light on courtesy.",description:"Thoughtfully placed and transparently positioned, Ai Pin’s Trust Light was designed to let you and those around you, confidently know when Ai Pin is in use.",descriptionStyle:{maxWidth:"571px"},children:[(0,i.jsx)("div",{className:l().worldLed,children:(0,i.jsx)(s.Z,{items:c,useVertical:!A})}),(0,i.jsx)(a.Z,{tableData:d})]})}},93901:function(A,e,t){"use strict";t.d(e,{Z:function(){return TableInfo}});var i=t(97458),a=t(86698),s=t(72066),n=t(12545),r=t(77177),o=t.n(r);function TableInfo(A){let{tableData:e}=A,t=(0,n.Z)(o()._lgMq,!0),r=t?"heading2":"bodySm",l=t?"body":"heading2";return(0,i.jsx)("div",{className:o().tableInfo,children:e.map(A=>(0,i.jsxs)("div",{className:o().tableRow,children:[(0,i.jsx)(s.ZT,{theme:"dark",variant:r,className:o().tableRowTitle,children:A.title}),(0,i.jsxs)(s.ZT,{theme:"dark",variant:l,className:o().tableRowDescription,children:[(0,i.jsxs)("span",{children:[A.description,(0,i.jsx)("span",{style:{color:"#52FF00",display:"block"},children:A.special})]}),A.cta&&(0,i.jsx)(a.zx,{theme:"dark",buttonStyle:"outlined",css:{borderColor:"$beam",color:"$beam",padding:"8px 16px",fontSize:"12px"},onClick:A.ctaClick,children:A.cta})]})]},A.title))})}},79346:function(A,e,t){"use strict";t.d(e,{Z:function(){return components_NotificationLightsPreview}});var i=t(97458),a=t(52983),s=t(72066),n=t(15577),r=t.n(n),o={green:"#1ED23C",greenBeam:"var(--colors-beam)",greenLight:"#1ED23C",red:"#DC0500",pink:"#FF41F0",orange:"#EB7D23",blueLight:"#DCF3ED",gradiantOn:"linear-gradient(90deg, #89E7BD 0%, #5D9CD5 23%, #BD4BB9 47%, #DE7337 73%, #D6F47E 100%)",gradiantThermal:"linear-gradient(90deg, #DE7337 20%, #D6F47E 100%)"},l=t(90357),c=t.n(l);let MenuItem=A=>{let{item:e,active:t,onClick:a}=A;return(0,i.jsxs)("button",{type:"button",className:c().menuItem,"data-active":t,onClick:()=>{a(e)},children:[(0,i.jsx)("span",{className:c().menuItemCircle,style:{background:o[e.color]}}),(0,i.jsx)(s.ZT,{variant:"heading2",theme:"dark",className:c().menuItemLabel,children:e.label})]})};var components_NotificationLightsPreview=A=>{let{items:e,useVertical:t,imageStyle:n,imageLabelStyle:o,...l}=A,[d,g]=(0,a.useState)(e[0]),handleClick=A=>{g(A)};return(0,i.jsxs)("div",{className:c().wrapper,"data-is-vertical-view":!!t,...l,children:[(0,i.jsx)("div",{className:c().menu,children:e.map(A=>(0,i.jsx)(MenuItem,{item:A,active:d.label===A.label,onClick:handleClick},A.label))}),t&&(0,i.jsx)(s.ZT,{variant:"heading2",theme:"dark",className:c().imageLabel,style:o,children:d.label}),(0,i.jsx)("div",{className:c().imageWrapper,style:n,children:(0,i.jsx)(r(),{src:d.src,alt:d.label,sizes:"100vw",style:{width:"auto",height:"clamp(10dvh, 30dvh, 50dvh)",...n}})})]})}},79707:function(A,e,t){"use strict";t.d(e,{Z:function(){return PageSection}});var i=t(97458),a=t(72066),s=t(87608),n=t.n(s),r=t(86698);function SectionHeading(A){let{children:e,as:t="h1",css:a={},...s}=A;return(0,i.jsx)(r.ZT,{variant:"headline1",theme:"dark",as:t,css:{fontWeight:500,fontSize:"42px",lineHeight:"48px",letterSpacing:"-1px","@md":{fontSize:"56px",lineHeight:"64px",letterSpacing:"-2px"},...a},...s,children:e})}var o=t(12545),l=t(1552),c=t.n(l);function PageSection(A){let{title:e,heading:t,description:s,topBorder:r=!0,children:l,descriptionStyle:d={}}=A,g=(0,o.Z)(c()._lgMq,!0);return(0,i.jsxs)("div",{className:n()(c().root,{[c().topBorder]:r}),children:[(0,i.jsxs)("div",{className:c().typography,children:[e&&(0,i.jsx)(a.ZT,{as:"p",theme:"dark",variant:"bodySm",className:c().title,children:e}),(0,i.jsx)(SectionHeading,{className:c().title,children:t}),s&&(0,i.jsx)("div",{style:{maxWidth:"600px",...d},children:(0,i.jsx)(a.ZT,{as:"p",theme:"dark",variant:g?"heading2":"body",className:c().description,children:s})})]}),l]})}},56703:function(A,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return R},default:function(){return P}});var i=t(97458),a=t(52983),s=t(72066),n=t(80728),r=t(87608),o=t.n(r),l=t(15577),c=t.n(l),d=t(23298),g={src:"/_next/static/media/privacy2.b331d701.png",height:918,width:1440,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEVicnIiMTAlMTAAAAACAgIOEhICAwMICwsbJCQbNDIPFBMWIyCOZ/o+AAAADHRSTlMBPpLcdhfrnFV5xCpaqLL+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIklEQVR4nGNgZmFlAAM4g42LiYmJiZOBgY2dg5GRkREhBQAIlQBfiBqCagAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},h=[{subTitle:"Our Pledge",title:"Privacy that’s yours. Truly.",info:"At Humane, we believe you deserve the ability to own your data from the outset. That personal information should be protected. And, that having transparency as a value isn’t radical. \n\n As a privacy-first company, we build knowing privacy should be a core value and honestly—a given. Our commitment is to you and that which you value most.",imgUrl:{src:"/_next/static/media/privacy-hero.6adbe3d7.jpg",height:1920,width:2396,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIDERNB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAwDAQACEQMRAD8AkdFtMJPvW5xx4k8e+AAWscG//9k=",blurWidth:8,blurHeight:6},imgUrlMobile:{src:"/_next/static/media/privacy-hero-mobile.97465f1b.jpg",height:1688,width:780,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAwADAAAAAAAAAAAAAAAAAQIDEgQRIf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAES/9oADAMBAAIRAxEAPwCSwt4WI7rtc+vcySQAKphKP//Z",blurWidth:4,blurHeight:8},isHero:!0,imgStylesDesktop:{width:"100%"}},{subTitle:"Privacy",title:"Keeping the personal private.",infoExcerpt:"Ai Pin was designed to help you protect the things you value most. With privacy protections featured in its design, you can rest easy knowing that privacy safeguards are top of mind and built in from the outset.",info:"Ai Pin is transparent about what it collects. To view your data—and even manage what Ai Pin can keep and what it should delete, visit .Center’s My Data. You can now rest assured knowing your data remains yours. While processed by Humane to improve your Ai Pin experience, your information is never sold to third parties or monetized for corporate gain or used in training our models. We even omit any personally identifying information whenever Humane uses third party services you’re not signed in to.",imgUrl:{src:"/_next/static/media/privacy1.b28550fe.jpg",height:2048,width:1654,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAhESAQMTQoH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJGqtvGmM57OzcABYf/Z",blurWidth:6,blurHeight:8},imgUrlMobile:{src:"/_next/static/media/privacy1-mobile.78683f76.jpg",height:734,width:780,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABAwUAAAAAAAAAAAAAAAAAAQMTERIhYdH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJMqsQ4V2XdLegAsP//Z",blurWidth:8,blurHeight:8}},{subTitle:".Center",title:"Data you can keep \n or delete.",infoExcerpt:"Ai Pin is transparent about what it collects. .Center gives you control over what data get stored, or erased. To manage your data, visit .Center’s My Data where you can view your data.",info:"Your data stored by .Center is encrypted with user-specific cryptographic keys and these keys are only used by Humane and its authorized services.",imgUrl:g,imgUrlMobile:g,imgStylesMobile:{top:"100px"}},{subTitle:"Trust Light",title:"A public light for peace of mind.",infoExcerpt:"If a photo, video, or audio is being captured or recorded, the Trust Light will let you know. \n There are no ‘wake words’ and therefore no ‘always listening’ or ‘always recording’. ",info:"The device includes a privacy indicator called the Trust Light that is built directly into Ai Pin’s hardware via a dedicated privacy chip. The Trust Light indicates when its input, optical or audio sensors are active, so that you and others can see when Ai Pin is in use. \n\n Ai Pin’s privacy chip also helps to protect the Trust Light from being exploited, which means if Ai Pin is tampered with, it is designed to require service from Humane to restore operation.",className:"aipin",ledComponent:!0},{subTitle:"Trust Lock",title:"Your world. \n Off the record.",infoExcerpt:"Ai Pin’s Trust Lock helps you protect and respect those around you. Giving you control over when Ai Pin’s camera and mic are on, Ai Pin does not start capturing images or audio without your say so.\xa0",imgUrl:{src:"/_next/static/media/privacy3.8d5e6c1a.jpg",height:1472,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAABAwMFAAAAAAAAAAAAAAABAAIDBBESITFRYXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwCRl1CKfEMldJbfQC/PnSIiLX//2Q==",blurWidth:8,blurHeight:8},imgUrlMobile:{src:"/_next/static/media/privacy3-mobile.6c6f0c64.jpg",height:686,width:780,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAgEDBBESUv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AJCtmItErNLPZ661AAC1/9k=",blurWidth:8,blurHeight:7},imgStylesDesktop:{width:"55%"},imgStylesMobile:{width:"100%",top:"120px"}},{subTitle:"Security",title:"The best security. \n Built-In.",infoExcerpt:"Ai Pin uses built-in hardware to store on-device encryption keys securely to help keep your information protected even if your device becomes compromised.",imgUrl:{src:"/_next/static/media/privacy4.743c09fe.jpg",height:2044,width:1654,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAgEDERJB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AI870TXEJUyt7PW6AAP/2Q==",blurWidth:6,blurHeight:8},imgUrlMobile:{src:"/_next/static/media/privacy4-mobile.bda962c3.jpg",height:1372,width:1600,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAwEBAAAAAAAAAAAAAAAAAQIDERQh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AkvenHHRWvMWRQAJCv//Z",blurWidth:8,blurHeight:7}},{subTitle:"Our Principles",title:"Good Ai is Humane.",infoExcerpt:"Why it’s important to advocate and practice good design principles in the intelligence age.",imgUrl:{src:"/_next/static/media/privacy5.da67c57d.jpg",height:1776,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIDBBEFBjFBkf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFhEAAwAAAAAAAAAAAAAAAAAAABFh/9oADAMBAAIRAxEAPwCPJW2lHoVUtsyyXnOJlw3AaMce9oiKhUJw/9k=",blurWidth:6,blurHeight:8},imgUrlMobile:{src:"/_next/static/media/privacy5-mobile.d67eb799.jpg",height:734,width:780,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIFBBESEzH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhEDEQA/AJ05U0azfdKWU35x0kgAMYpf/9k=",blurWidth:8,blurHeight:8},principlesLinks:[{label:"Read more about our principles",to:"/media/designing-for-the-ai-era"},{label:"Download our principles",to:"https://prismic-io.s3.amazonaws.com/humane-content/5989ba9b-2b94-4eee-b923-432a0d979ead_Good+Ai+Design+Principles.pdf",external:!0}]},{footer:!0}],m=t(12545),u=t(81434),p=t.n(u),_=t(84663),b=t(25733),y=t(98637),w=t(56115),f=t(8802),x=t(51407),E=t.n(x);let v=(0,n.q)(s.ZT);var z=(0,a.memo)(function(A){var e;let{data:t,onToggleTrustInfo:r,heroSection:l,...c}=A,d=(0,m.Z)("(min-height: 1000px)"),[g,h]=(0,a.useState)(!1),[u]=(0,n.q_)(()=>({overlay:0,trustInfo:d?1:0,button:d?0:1}));(0,a.useEffect)(()=>{h(!1),u.trustInfo.set(d?1:0),u.button.set(d?0:-1)},[d,u.button,u.trustInfo]),(0,a.useEffect)(()=>{r(g)},[r,g]);let x=(0,a.useRef)(),toggleTrustInfo=async()=>{let A=u.trustInfo.get()>0;h(!A);let e={duration:250,easing:f.to};if(A){let A=x.current,t=A.scrollTop;l&&u.overlay.start(0,{config:e}),(0,w.Z)({...e,onProgress:e=>{A.scrollTop=t*(1-e)}}),u.button.start(0,{config:e}),await u.trustInfo.start(0,{config:e}),u.button.start(-1,{config:e})}else await u.button.start(0,{config:e}),u.trustInfo.start(1,{config:e}),u.button.start(1,{config:e}),l&&u.overlay.start(1,{config:e})},z=(0,a.useRef)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.q.div,{className:E().overlay,style:{opacity:u.overlay}}),(0,i.jsx)("div",{ref:z}),(0,i.jsxs)(_.Z,{ref:x,className:o()(E().main,E().desktop,{[E().hero]:l,[E().expanded]:d}),isActive:!d&&g,...c,children:[(0,i.jsxs)("div",{className:o()(E().content,{[E().heroInfo]:l}),children:[(0,i.jsx)("div",{className:E().heading,children:(0,i.jsx)(s.ZT,{theme:"dark",className:E().title,as:"h3",children:t.title})}),t.infoExcerpt&&(0,i.jsx)(s.ZT,{theme:"dark",className:E().infoExcerpt,as:"p",children:t.infoExcerpt}),t.info&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.q.div,{className:E().info,style:{opacity:u.trustInfo,display:u.trustInfo.to(A=>A?null:"none")},children:(0,i.jsx)(s.ZT,{theme:"dark",className:E().infoRest,as:"p",children:t.info})}),(0,i.jsx)(n.q.button,{className:E().button,style:{opacity:u.button.to([-1,0,1],[1,0,0]),display:u.button.to(A=>A<0?null:"none")},onClick:toggleTrustInfo,children:(0,i.jsx)(s.ZT,{as:"span",theme:"dark",className:E().readMore,children:t.isHero?"Read our pledge +":"Read more +"})}),(0,i.jsx)(v,{as:"button",theme:"dark",className:o()(E().button,E().closeButton),style:{opacity:u.button.to([-1,0,1],[0,0,1]),display:u.button.to(A=>A>0?null:"none")},onClick:toggleTrustInfo,children:(0,i.jsxs)("span",{children:[(0,i.jsx)(y.Z,{className:E().closeIcon}),"Close"]})})]}),(null===(e=t.principlesLinks)||void 0===e?void 0:e.length)>0&&t.principlesLinks.map(A=>(0,i.jsx)(p(),{href:A.to,className:E().link,target:A.external?"_blank":"_self",rel:"noreferrer nopoener",children:(0,i.jsxs)(s.ZT,{theme:"dark",className:E().linkLabel,children:[null==A?void 0:A.label," "," ","\xa0",(0,i.jsx)(b._Q,{className:E().chevronRight})]})},A.label))]}),(0,i.jsx)(_.Z.Scrollbar,{portal:z.current})]})]})}),D=t(1711);let O=(0,n.q)(D.Z),B=(0,n.q)(s.ZT);var I=(0,a.memo)(function(A){var e;let{data:t,onToggleTrustInfo:r,heroSection:l,...c}=A,[d,g]=(0,a.useState)(!1),[h]=(0,n.q_)(()=>({overlay:0,content:-1,trustInfo:0}));(0,a.useEffect)(()=>{r(d)},[r,d]);let toggleTrustInfo=async()=>{let A=h.trustInfo.get()>0;g(!A);let e={duration:250,easing:f.to};A?(h.overlay.start(0,{config:e}),await h.content.start(0,{config:e}),await h.trustInfo.set(0,{config:e}),h.content.start(-1,{config:e})):(h.overlay.start(1,{config:e}),await h.content.start(0,{config:e}),await h.trustInfo.set(1,{config:e}),h.content.start(1,{config:e}))},m=(0,a.useRef)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.q.div,{className:E().overlay,style:{opacity:h.overlay,WebkitBackdropFilter:h.content.to([-1,0,1],["blur(2px)","blur(0px)","blur(2px)"]),backdropFilter:h.content.to([-1,0,1],["blur(2px)","blur(0px)","blur(2px)"])}}),(0,i.jsx)("div",{ref:m}),(0,i.jsxs)(_.Z,{className:o()(E().main,E().mobile,d&&E().infoExpanded),isActive:d,...c,children:[(0,i.jsxs)(O,{className:o()(E().content,{[E().heroInfo]:l}),type:"narrow",style:{opacity:h.content.to([-1,0,1],[1,0,1])},children:[(0,i.jsx)("div",{className:E().heading,children:t.isHero?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B,{theme:"dark",className:E().subTitle,as:"h5",style:{display:h.trustInfo.to(A=>A?null:"none")},children:t.subTitle}),(0,i.jsx)(B,{theme:"dark",className:E().title,as:"h3",style:{display:h.trustInfo.to(A=>A?"none":null)},children:t.title})]}):(0,i.jsx)(s.ZT,{theme:"dark",className:E().title,as:"h3",children:t.title})}),!t.isHero&&(0,i.jsx)(s.ZT,{theme:"dark",className:E().infoExcerpt,as:"p",children:t.infoExcerpt}),t.info&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.q.div,{className:E().trustInfo,style:{display:h.trustInfo.to(A=>A?null:"none")},children:(0,i.jsx)(s.ZT,{theme:"dark",className:E().infoExcerpt,as:"p",children:t.info})}),(0,i.jsx)(n.q.button,{className:E().button,style:{display:h.content.to(A=>A<0?null:"none")},onClick:toggleTrustInfo,children:(0,i.jsx)(s.ZT,{as:"span",theme:"dark",className:E().readMore,children:t.isHero?"Read our pledge +":"Read more +"})}),(0,i.jsx)(B,{as:"button",theme:"dark",className:o()(E().button,E().closeButton),style:{display:h.content.to(A=>A>0?null:"none")},onClick:toggleTrustInfo,children:(0,i.jsxs)("span",{children:[(0,i.jsx)(y.Z,{className:E().closeIcon}),"Close"]})})]}),(null===(e=t.principlesLinks)||void 0===e?void 0:e.length)>0&&t.principlesLinks.map(A=>(0,i.jsx)(p(),{href:A.to,className:E().link,target:A.external?"_blank":"_self",rel:"noreferrer nopoener",download:!0,children:(0,i.jsxs)(s.ZT,{theme:"dark",className:E().linkLabel,children:[null==A?void 0:A.label," "," ","\xa0",(0,i.jsx)(b._Q,{className:E().chevronRight})]})},A.label))]}),(0,i.jsx)(_.Z.Scrollbar,{portal:m.current})]})]})}),M=t(98030),Q=t(99955),C=t(79346),j=t(14183),k=t.n(j);let N=(0,n.q)(c()),L=(0,n.q)(function(A){let e=(0,m.Z)(E()._navbarMq,!0),{onToggleTrustInfo:t}=A;return(0,a.useEffect)(()=>{t(!1)},[e,t]),e?(0,i.jsx)(z,{...A}):(0,i.jsx)(I,{...A})}),S=(0,n.q)(s.ZT),T=(0,n.q)(Q.Z),H=(0,n.q)(C.Z);var R=!0,P=(0,a.forwardRef)(function(A,e){let{className:t,style:s}=A,[n,r]=(0,a.useState)(!0),l=(0,m.Z)(k()._navbarMq,!0),c=(0,a.useCallback)(A=>{r(!A)},[]);return(0,i.jsx)(M.Z,{ref:e,className:t,style:s,isActive:n,itemsNumber:h.length,threshold:600,children:A=>{let{springs:e}=A;return(0,i.jsxs)(i.Fragment,{children:[e.map((A,e)=>{let{position:t}=A;return l&&h[e].imgUrl?(0,i.jsx)(N,{className:o()(k().image,{[k()[h[e].className]]:h[e].className}),src:h[e].imgUrl,alt:h[e].title,style:{opacity:t.to([-1,-.5,0,.5,1],[0,0,1,0,0]),display:t.to(A=>Math.abs(A)>=1?"none":null),...h[e].imgStylesDesktop},loading:"eager"},"privacy-image-".concat(e)):!l&&h[e].imgUrlMobile?(0,i.jsx)(N,{className:o()(k().image,{[k().heroImage]:h[e].isHero,[k()[h[e].className]]:h[e].className}),src:h[e].imgUrlMobile,alt:h[e].title,style:{opacity:t.to([-1,-.5,0,.5,1],[0,0,1,0,0]),display:t.to(A=>Math.abs(A)>=1?"none":null),...h[e].imgStylesMobile},loading:"eager"},"privacy-image-".concat(e)):h[e].ledComponent?l?(0,i.jsx)("div",{className:k().aipin,children:(0,i.jsx)(H,{items:d.N,useVertical:!0,style:{opacity:t.to([-1,-.5,0,.5,1],[0,0,1,0,0]),display:t.to(A=>Math.abs(A)>=1?"none":null),height:"100%"}})},"privacy-image-".concat(e)):(0,i.jsx)("div",{className:k().aipin,children:(0,i.jsx)(H,{items:d.N,useVertical:!0,style:{opacity:t.to([-1,-.5,0,.5,1],[0,0,1,0,0]),display:t.to(A=>Math.abs(A)>=1?"none":null),height:"100%","--button-size":"46px"},imageStyle:{top:"20px"},imageLabelStyle:{margin:"30px 0 10px 0"}})},"privacy-image-".concat(e)):null}),e.map((A,t)=>{let{position:a}=A;return h[t].footer?(0,i.jsx)(T,{className:k().footer,style:{y:e[e.length-1].position.to([-1.1,-1,0,1,1.1],["100%","100%","0%","-100%","-100%"]),display:e[e.length-1].position.to(A=>Math.abs(A)>=2?"none":null)}},"trust-info-".concat(t)):(0,i.jsxs)("div",{children:[h[t].subTitle&&!h[t].isHero&&(0,i.jsx)(S,{theme:"dark",className:k().subTitle,as:"h5",style:{opacity:a.to([-1,-.55,0,.55,1],[0,0,1,0,0]),transform:a.to([-2,-1,0,1,2],[-1,-1,0,1,1]).to(A=>"translateY(".concat(-60*A,"px)")),display:a.to(A=>Math.abs(A)>=1?"none":null)},children:h[t].subTitle},h[t].subTitle),(0,i.jsx)(L,{data:h[t],style:{opacity:a.to([-1,-.55,0,.55,1],[0,0,1,0,0]),transform:a.to([-2,-1,0,1,2],[-1,-1,0,1,1]).to(A=>"translateY(".concat(-60*A,"px)")),display:a.to(A=>Math.abs(A)>=1?"none":null)},heroSection:h[t].isHero,onToggleTrustInfo:c})]},"trust-info-".concat(t))}),(0,i.jsx)(M.Z.Dots,{})]})}})})},94726:function(A){A.exports={_grey:"#838383",_grey2:"#727679",_greyDark:"#5e5e5e",_greyLight1:"#b1b1b1",_greyLight2:"#fafafa",_greyLight3:"#dfdfdf",_red:"#ff6262",_lgMq:"(min-width: 60em)",_mdMq:"(min-width: 48em)",_mediaDesktopMq:"(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",_navbarMq:"(min-width: 67em)",_smMq:"(min-width: 36em)",_xlMq:"(min-width: 80em)",_xxlMq:"(min-width: 100em)",_baseTransition:".15s ease-in-out",_fontFamily:'"Humane",sans-serif',_marginBottomPage:"30px",_marginFromNavbar:"120px",_navbarHeight:"72px",_accountPanelHorizontalPadding:"27px",ledWrapper:"style_ledWrapper__9H0zp",worldLed:"style_worldLed__6rd1w",userLed:"style_userLed__ngSgq"}},77177:function(A){A.exports={_grey:"#838383",_grey2:"#727679",_greyDark:"#5e5e5e",_greyLight1:"#b1b1b1",_greyLight2:"#fafafa",_greyLight3:"#dfdfdf",_red:"#ff6262",_lgMq:"(min-width: 60em)",_mdMq:"(min-width: 48em)",_mediaDesktopMq:"(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",_navbarMq:"(min-width: 67em)",_smMq:"(min-width: 36em)",_xlMq:"(min-width: 80em)",_xxlMq:"(min-width: 100em)",_baseTransition:".15s ease-in-out",_fontFamily:'"Humane",sans-serif',_marginBottomPage:"30px",_marginFromNavbar:"120px",_navbarHeight:"72px",_accountPanelHorizontalPadding:"27px",tableInfo:"style_tableInfo__vHF9E",tableRow:"style_tableRow__n3Vww",tableRowTitle:"style_tableRowTitle__rSJCU",tableRowDescription:"style_tableRowDescription__848XW"}},51407:function(A){A.exports={_grey:"#838383",_grey2:"#727679",_greyDark:"#5e5e5e",_greyLight1:"#b1b1b1",_greyLight2:"#fafafa",_greyLight3:"#dfdfdf",_red:"#ff6262",_lgMq:"(min-width: 60em)",_mdMq:"(min-width: 48em)",_mediaDesktopMq:"(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",_navbarMq:"(min-width: 67em)",_smMq:"(min-width: 36em)",_xlMq:"(min-width: 80em)",_xxlMq:"(min-width: 100em)",_baseTransition:".15s ease-in-out",_fontFamily:'"Humane",sans-serif',_marginBottomPage:"30px",_marginFromNavbar:"120px",_navbarHeight:"72px",_accountPanelHorizontalPadding:"27px",overlay:"style_overlay__w_SH5",closeButton:"style_closeButton__SGXd4",main:"style_main__yT_Hm",mobile:"style_mobile__QUNGW",infoExpanded:"style_infoExpanded__90ipW",role:"style_role___6bXp",desktop:"style_desktop__5eIL0",hero:"style_hero__T0McX",content:"style_content__raWfU",title:"style_title__M3hjX",heroInfo:"style_heroInfo__rhekc",subTitle:"style_subTitle__nm7HM",heading:"style_heading__c2GPJ",expanded:"style_expanded__28EGi",button:"style_button__MpjOM",closeIcon:"style_closeIcon__Maacp",infoExcerpt:"style_infoExcerpt__mgnvz",info:"style_info__a52ld",readMore:"style_readMore__SqMtn",link:"style_link__etGQj",linkLabel:"style_linkLabel__2J6qz"}},90357:function(A){A.exports={_grey:"#838383",_grey2:"#727679",_greyDark:"#5e5e5e",_greyLight1:"#b1b1b1",_greyLight2:"#fafafa",_greyLight3:"#dfdfdf",_red:"#ff6262",_lgMq:"(min-width: 60em)",_mdMq:"(min-width: 48em)",_mediaDesktopMq:"(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",_navbarMq:"(min-width: 67em)",_smMq:"(min-width: 36em)",_xlMq:"(min-width: 80em)",_xxlMq:"(min-width: 100em)",_baseTransition:".15s ease-in-out",_fontFamily:'"Humane",sans-serif',_marginBottomPage:"30px",_marginFromNavbar:"120px",_navbarHeight:"72px",_accountPanelHorizontalPadding:"27px",wrapper:"style_wrapper__o_Vv2",menu:"style_menu__TcCgd",menuItem:"style_menuItem__G3FlK",menuItemCircle:"style_menuItemCircle__76XrW",menuItemLabel:"style_menuItemLabel__IMc4V",imageLabel:"style_imageLabel__B4Bm_",imageWrapper:"style_imageWrapper__I7DDv"}},1552:function(A){A.exports={_grey:"#838383",_grey2:"#727679",_greyDark:"#5e5e5e",_greyLight1:"#b1b1b1",_greyLight2:"#fafafa",_greyLight3:"#dfdfdf",_red:"#ff6262",_lgMq:"(min-width: 60em)",_mdMq:"(min-width: 48em)",_mediaDesktopMq:"(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",_navbarMq:"(min-width: 67em)",_smMq:"(min-width: 36em)",_xlMq:"(min-width: 80em)",_xxlMq:"(min-width: 100em)",_baseTransition:".15s ease-in-out",_fontFamily:'"Humane",sans-serif',_marginBottomPage:"30px",_marginFromNavbar:"120px",_navbarHeight:"72px",_accountPanelHorizontalPadding:"27px",root:"style_root__wdyIg",topBorder:"style_topBorder__8vODv",typography:"style_typography__CBO0J",title:"style_title__eHybt",heading:"style_heading__vviST",description:"style_description__sO_e_"}},14183:function(A){A.exports={_grey:"#838383",_grey2:"#727679",_greyDark:"#5e5e5e",_greyLight1:"#b1b1b1",_greyLight2:"#fafafa",_greyLight3:"#dfdfdf",_red:"#ff6262",_lgMq:"(min-width: 60em)",_mdMq:"(min-width: 48em)",_mediaDesktopMq:"(min-width: 80em) AND (min-aspect-ratio: 1200/1000)",_navbarMq:"(min-width: 67em)",_smMq:"(min-width: 36em)",_xlMq:"(min-width: 80em)",_xxlMq:"(min-width: 100em)",_baseTransition:".15s ease-in-out",_fontFamily:'"Humane",sans-serif',_marginBottomPage:"30px",_marginFromNavbar:"120px",_navbarHeight:"72px",_accountPanelHorizontalPadding:"27px",subTitle:"aipin-trust_subTitle__Wvy7T",image:"aipin-trust_image__GB7ED",heroImage:"aipin-trust_heroImage__0osfH",aipin:"aipin-trust_aipin__V6IS5",footer:"aipin-trust_footer__OECnJ"}}},function(A){A.O(0,[774,888,179],function(){return A(A.s=11949)}),_N_E=A.O()}]);