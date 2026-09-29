(function(){
'use strict';
var box=document.getElementById('lab');if(!box)return;
var btn=box.querySelector('.lab-enter'),cap=box.querySelector('.lab-cap');
btn.addEventListener('click',function(){btn.disabled=true;btn.textContent='Loading The Lab...';if(window.THREE){start();return}var s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';s.onload=start;s.onerror=function(){btn.textContent='3D could not load on this device'};document.head.appendChild(s)});
function panel(draw){var c=document.createElement('canvas');c.width=1024;c.height=640;var g=c.getContext('2d');draw(g,0);var t=new THREE.CanvasTexture(c);return{t:t,g:g,draw:draw}}
function rr(g,x,y,w,h,r){g.beginPath();g.moveTo(x+r,y);g.arcTo(x+w,y,x+w,y+h,r);g.arcTo(x+w,y+h,x,y+h,r);g.arcTo(x,y+h,x,y,r);g.arcTo(x,y,x+w,y,r);g.closePath()}
function start(){var cv=box.querySelector('canvas'),R;try{R=new THREE.WebGLRenderer({canvas:cv,antialias:true})}catch(e){btn.textContent='3D is not supported on this device';return}box.classList.add('live');var W=cv.clientWidth,H=cv.clientHeight;
 R.setPixelRatio(Math.min(2,window.devicePixelRatio||1));R.setSize(W,H,false);
 var S=new THREE.Scene();S.background=new THREE.Color(0x0a1830);S.fog=new THREE.Fog(0x0a1830,14,30);
 var C=new THREE.PerspectiveCamera(62,W/H,.1,100);C.position.set(0,1.6,0.01);
 S.add(new THREE.HemisphereLight(0x9ecbff,0x1a1030,.6));var sp=new THREE.SpotLight(0xffffff,1.1,30,.7,.5);sp.position.set(0,7,0);S.add(sp);
 var pl=new THREE.PointLight(0x22d3ee,1.2,12);pl.position.set(-3,2.5,-3);S.add(pl);var pl2=new THREE.PointLight(0xf97316,1,12);pl2.position.set(3,2.5,3);S.add(pl2);
 var floor=new THREE.Mesh(new THREE.PlaneGeometry(14,14),new THREE.MeshStandardMaterial({color:0x10284a,metalness:.6,roughness:.35}));floor.rotation.x=-Math.PI/2;S.add(floor);
 var grid=new THREE.GridHelper(14,28,0x22d3ee,0x1d4ed8);grid.material.opacity=.25;grid.material.transparent=true;grid.position.y=.01;S.add(grid);
 var panels=[
  ['A billboard that moves',function(g,t){var gr=g.createLinearGradient(0,0,1024,640);gr.addColorStop(0,'#1d4ed8');gr.addColorStop(1,'#0e7490');g.fillStyle=gr;g.fillRect(0,0,1024,640);for(var i=0;i<14;i++){g.fillStyle='rgba(255,255,255,'+(.05+.05*Math.sin(t+i))+')';g.beginPath();g.arc(512+Math.cos(t*.6+i)*380,320+Math.sin(t*.8+i*1.3)*220,40+i*6,0,7);g.fill()}g.fillStyle='#fff';g.font='800 104px Arial';g.textAlign='center';g.fillText('YOUR BRAND',512,300);g.font='600 44px Arial';g.fillStyle='#fde68a';g.fillText('Motion stops the scroll',512,380);g.textAlign='left'}],
  ['An AI answer that names you',function(g,t){g.fillStyle='#f8fafc';g.fillRect(0,0,1024,640);g.fillStyle='#0b1f3a';g.font='600 34px Arial';g.fillText('Who is the best plumber near me?',60,90);rr(g,50,130,924,440,24);g.fillStyle='#fff';g.fill();g.strokeStyle='#cbd5e1';g.lineWidth=3;g.stroke();var w=Math.abs(Math.sin(t))*300;g.fillStyle='rgba(34,211,238,.35)';g.fillRect(90,172,w,36);g.fillStyle='#0b1f3a';g.font='30px Arial';['A top choice is Your Business, known for','same-day service and clear pricing.','Customers mention fast response and','licensed technicians.'].forEach(function(l,i){g.fillText(l,90,200+i*52)});g.fillStyle='#1d4ed8';g.font='600 28px Arial';g.fillText('Source: yourbusiness.com',90,470)}],
  ['A rich result that wins the click',function(g,t){g.fillStyle='#fff';g.fillRect(0,0,1024,640);g.fillStyle='#1a0dab';g.font='40px Arial';g.fillText('Your Business | Denver Service Pros',60,120);g.fillStyle='#0f6b0f';g.font='26px Arial';g.fillText('https://yourbusiness.com',60,160);g.fillStyle='#d97706';g.font='40px Arial';g.fillText('\u2605\u2605\u2605\u2605\u2605',60,225);g.fillStyle='#475569';g.font='26px Arial';g.fillText('Open now \u00b7 Free estimates',270,222);g.fillStyle='#334155';g.font='28px Arial';g.fillText('Licensed, insured, same-day service across the metro.',60,285);['Do you offer financing?','How fast can you come out?','Are estimates free?'].forEach(function(q,i){g.strokeStyle='#e2e8f0';g.lineWidth=2;g.strokeRect(60,320+i*90,900,74);g.fillStyle='#0b1f3a';g.fillText(q,85,366+i*90);g.fillText(i===Math.floor(t/1.5)%3?'\u2212':'+',920,366+i*90)})}],
  ['A product you can spin',function(g){var gr=g.createRadialGradient(512,320,40,512,320,600);gr.addColorStop(0,'#fff7ed');gr.addColorStop(1,'#fed7aa');g.fillStyle=gr;g.fillRect(0,0,1024,640);g.fillStyle='#9a3412';g.font='800 64px Arial';g.textAlign='center';g.fillText('Turn it. Zoom it. Want it.',512,120);g.font='34px Arial';g.fillText('Interactive products outsell flat photos',512,560);g.textAlign='left'}]
 ];
 var P=[],walls=[[0,1.9,-5.9,0],[5.9,1.9,0,-Math.PI/2],[0,1.9,5.9,Math.PI],[-5.9,1.9,0,Math.PI/2]];
 panels.forEach(function(p,i){var pn=panel(p[1]);var m=new THREE.Mesh(new THREE.PlaneGeometry(5.2,3.25),new THREE.MeshStandardMaterial({map:pn.t,emissive:0xffffff,emissiveMap:pn.t,emissiveIntensity:.55,roughness:.5}));var w=walls[i];m.position.set(w[0],w[1],w[2]);m.rotation.y=w[3];m.userData={i:i};S.add(m);P.push({m:m,pn:pn});
  var fr=new THREE.Mesh(new THREE.BoxGeometry(5.5,3.55,.08),new THREE.MeshStandardMaterial({color:0x0f172a,metalness:.8,roughness:.3}));fr.position.copy(m.position);fr.rotation.y=w[3];fr.translateZ(-.06);S.add(fr)});
 var ped=new THREE.Mesh(new THREE.CylinderGeometry(.55,.7,1,40),new THREE.MeshStandardMaterial({color:0xe2e8f0,metalness:.3,roughness:.4}));ped.position.set(-3.2,.5,0);S.add(ped);
 var prod=new THREE.Mesh(new THREE.TorusKnotGeometry(.42,.14,160,24),new THREE.MeshStandardMaterial({color:0xf97316,metalness:.7,roughness:.18}));prod.position.set(-3.2,1.55,0);prod.userData={i:3};S.add(prod);
 var orb=new THREE.Mesh(new THREE.IcosahedronGeometry(.35,1),new THREE.MeshStandardMaterial({color:0x22d3ee,emissive:0x0891b2,emissiveIntensity:.6,flatShading:true,metalness:.4}));orb.position.set(0,3.4,0);S.add(orb);
 var yaw=0,pitch=0,drag=null,auto=true,spinP=false;
 cv.addEventListener('pointerdown',function(e){drag={x:e.clientX,y:e.clientY,t:Date.now()};auto=false;try{cv.setPointerCapture(e.pointerId)}catch(x){}});
 cv.addEventListener('pointermove',function(e){if(!drag)return;yaw+=(e.clientX-drag.x)*.005;pitch=Math.max(-.6,Math.min(.6,pitch+(e.clientY-drag.y)*.004));drag.x=e.clientX;drag.y=e.clientY});
 cv.addEventListener('pointerup',function(e){var quick=drag&&Date.now()-drag.t<250;drag=null;if(!quick)return;var r=cv.getBoundingClientRect(),v=new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),rc=new THREE.Raycaster();rc.setFromCamera(v,C);var hit=rc.intersectObjects(P.map(function(x){return x.m}).concat([prod]))[0];if(hit){show(hit.object.userData.i);if(hit.object===prod)spinP=true}});
 var CAP=['Motion graphics and 3D banners stop the scroll. We build them in code, so they load fast and stay sharp on every screen.','AI answers quote businesses whose pages are clear, structured and trusted. We engineer that on purpose.','Rich results such as stars, FAQs and hours come from structured data done right. More space on the page, more clicks.','Interactive 3D products let buyers turn, zoom and explore before they buy. No app required.'];
 function show(i){cap.innerHTML='<b>'+panels[i][0]+'.</b> '+CAP[i]+' Drag to look around.'}
 function resize(){W=cv.clientWidth;H=cv.clientHeight;R.setSize(W,H,false);C.aspect=W/H;C.updateProjectionMatrix()}window.addEventListener('resize',resize);
 var clock=new THREE.Clock(),last=0;
 (function loop(){requestAnimationFrame(loop);var t=clock.getElapsedTime();if(auto)yaw+=.0022;C.rotation.order='YXZ';C.rotation.y=yaw;C.rotation.x=pitch;
  prod.rotation.y+=spinP?.05:.012;prod.rotation.x=Math.sin(t*.7)*.3;orb.rotation.y=t*.6;orb.position.y=3.4+Math.sin(t*1.4)*.12;
  if(t-last>.05){last=t;P.forEach(function(p){p.pn.g.clearRect(0,0,1024,640);p.pn.draw(p.pn.g,t);p.pn.t.needsUpdate=true})}
  R.render(S,C)})();show(0)}
})();
