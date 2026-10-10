(function(){
'use strict';
if(window.__root)return;window.__root=1;
var d=document,ss=window.sessionStorage,PH='1-800-481-8638',TEL='tel:18004818638';
function get(k){try{return ss.getItem('root:'+k)}catch(e){return null}}function set(k,v){try{ss.setItem('root:'+k,v)}catch(e){}}
var css='.rt-peek{display:none;position:fixed;right:0;top:58vh;width:132px;height:150px;z-index:80;cursor:pointer;transform:translateX(62px);transition:transform .5s cubic-bezier(.2,1.4,.4,1);border:0;background:none;padding:0}'+
'.rt-peek:hover,.rt-peek:focus-visible{transform:translateX(8px)}.rt-peek .rw{width:132px;height:150px;transform:rotate(-9deg);animation:rtf 4s ease-in-out infinite}'+
'.rt-peek .hand{position:absolute;left:-2px;top:82px;width:34px;height:38px;transition:opacity .3s}.rt-peek:hover .hand{opacity:0}'+
'@keyframes rtf{0%,100%{translate:0 0}50%{translate:0 -7px}}'+
'.rt-bub{position:fixed;right:88px;top:calc(58vh + 16px);z-index:81;background:#fff;color:#0b1f3a;font:600 15px Outfit,system-ui,sans-serif;padding:10px 14px;border-radius:14px 14px 4px 14px;box-shadow:0 12px 30px rgba(11,31,58,.2);opacity:0;transform:translateY(6px) scale(.96);transition:.35s;pointer-events:none;max-width:230px}'+
'.rt-bub.on{opacity:1;transform:none}'+
'.rt-tilt{perspective:700px;width:100%;height:100%}.rt-tilt svg{width:100%;height:100%;transition:transform .15s ease-out;overflow:visible}'+
'.rt-eye{transform-box:fill-box;transform-origin:center;animation:rtb 5s infinite}@keyframes rtb{0%,94%,100%{transform:scaleY(1)}96%{transform:scaleY(.08)}}'+
'.rt-bulb{animation:rtp 2.4s ease-in-out infinite}@keyframes rtp{0%,100%{opacity:.7}50%{opacity:1}}.rt-cur{animation:rtc 1s steps(1) infinite}@keyframes rtc{50%{opacity:0}}'+
'.rt-talk .rt-mb{opacity:1}.rt-talk .rt-pr{opacity:0}.rt-mb{opacity:0}.rt-mb rect{transform-box:fill-box;transform-origin:center;animation:rte .5s ease-in-out infinite alternate}.rt-mb rect:nth-child(2){animation-delay:.12s}.rt-mb rect:nth-child(3){animation-delay:.24s}@keyframes rte{from{transform:scaleY(.3)}to{transform:scaleY(1)}}'+
'.rt-chat{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));width:min(390px,calc(100vw - 20px));height:min(600px,calc(100dvh - 110px));z-index:90;display:flex;flex-direction:column;border-radius:24px;background:rgba(255,255,255,.97);backdrop-filter:blur(18px) saturate(1.4);-webkit-backdrop-filter:blur(18px) saturate(1.4);border:1px solid #fff;box-shadow:0 30px 80px rgba(11,31,58,.3),0 0 0 1px rgba(11,31,58,.07);transform-origin:bottom right;transform:scale(.6) translateY(30px);opacity:0;visibility:hidden;transition:.4s cubic-bezier(.2,1.2,.4,1);font-family:Outfit,system-ui,sans-serif;color:#0b1f3a}'+
'.rt-chat.open{transform:none;opacity:1;visibility:visible}'+
'.rt-hd{display:flex;align-items:flex-end;gap:12px;padding:12px 14px 10px;border-bottom:1px solid #e6ecf3}.rt-hd .av{width:78px;height:88px;margin:-40px 0 -6px -4px;flex:none}'+
'.rt-hd b{font-size:18px}.rt-hd small{display:block;color:#4a5b73;font-size:13px}.rt-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#22c55e;margin-right:6px}'+
'.rt-x{margin-left:auto;align-self:center;width:38px;height:38px;border-radius:50%;border:1px solid #dfe6ef;background:#fff;color:#0b1f3a;font-size:22px;line-height:1;cursor:pointer}'+
'.rt-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}'+
'.rt-m{max-width:88%;padding:10px 13px;border-radius:18px;font-size:15px;line-height:1.5;animation:rti .3s ease-out}@keyframes rti{from{opacity:0;transform:translateY(6px)}}'+
'.rt-b{background:#fff;color:#0b1f3a;border:1px solid #e3eaf2;border-bottom-left-radius:6px}.rt-u{align-self:flex-end;background:#1d4ed8;color:#fff;border-bottom-right-radius:6px}.rt-m a{color:#1d4ed8;font-weight:700}'+
'.rt-ty{display:flex;gap:4px;padding:13px}.rt-ty i{width:7px;height:7px;border-radius:50%;background:#94a3b8;animation:rtt 1s infinite}.rt-ty i:nth-child(2){animation-delay:.15s}.rt-ty i:nth-child(3){animation-delay:.3s}@keyframes rtt{50%{transform:translateY(-5px);background:#1d4ed8}}'+
'.rt-qr{display:flex;flex-wrap:wrap;gap:8px;padding:0 14px 10px}.rt-qr button{font:inherit;font-size:14px;padding:8px 12px;border-radius:999px;border:1px solid #c7d6ea;background:#fff;color:#1d3a66;cursor:pointer}.rt-qr button:hover{background:#eaf2ff;border-color:#1d4ed8}.rt-qr .hot{background:#c2410c;border-color:#c2410c;color:#fff}'+
'.rt-ft{display:flex;gap:8px;padding:10px 14px 14px;border-top:1px solid #e6ecf3}.rt-ft input{flex:1;min-width:0;font:inherit;font-size:16px;padding:11px 13px;border-radius:14px;border:1px solid #cfdae8;background:#fff;color:#0b1f3a}.rt-ft button{width:46px;border-radius:14px;border:0;background:#1d4ed8;color:#fff;font-size:18px;cursor:pointer}'+
'.rt-cb{display:grid;gap:8px;margin-top:6px}.rt-cb input{font:inherit;font-size:15px;padding:9px 11px;border-radius:10px;border:1px solid #cfdae8;color:#0b1f3a;background:#fff}.rt-cb button{font:700 15px Outfit,sans-serif;padding:10px;border-radius:10px;border:0;background:#c2410c;color:#fff;cursor:pointer}'+
'@media (max-width:700px){.rt-peek{top:auto;bottom:calc(84px + env(safe-area-inset-bottom,0px));width:92px;height:105px;transform:translateX(52px)}.rt-peek .rw{width:92px;height:105px}.rt-peek .hand{top:56px;width:24px;height:27px}.rt-bub{top:auto;bottom:calc(150px + env(safe-area-inset-bottom,0px));right:14px}}'+
'@media (prefers-reduced-motion:reduce){.rt-peek .rw,.rt-eye,.rt-bulb,.rt-cur,.rt-mb rect{animation:none}}';
var st=d.createElement('style');st.textContent=css;d.head.appendChild(st);
var defs='<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>'+
'<linearGradient id="rtShell" x1="0" y1="0" x2=".3" y2="1"><stop offset="0" stop-color="#5aa2ff"/><stop offset=".35" stop-color="#1f5fc4"/><stop offset=".75" stop-color="#0c3378"/><stop offset="1" stop-color="#071f4d"/></linearGradient>'+
'<radialGradient id="rtSpec" cx=".32" cy=".18" r=".55"><stop offset="0" stop-color="#fff" stop-opacity=".85"/><stop offset=".35" stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>'+
'<linearGradient id="rtRim" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cf3ff"/><stop offset=".5" stop-color="#7cf3ff" stop-opacity="0"/></linearGradient>'+
'<linearGradient id="rtScr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d2747"/><stop offset="1" stop-color="#04101f"/></linearGradient>'+
'<linearGradient id="rtGl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>'+
'<linearGradient id="rtMet" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6b7a90"/><stop offset=".45" stop-color="#e8eef6"/><stop offset=".6" stop-color="#b9c5d4"/><stop offset="1" stop-color="#55647a"/></linearGradient>'+
'<radialGradient id="rtPod" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#e9f0f9"/><stop offset=".5" stop-color="#9fb0c6"/><stop offset="1" stop-color="#4c5a70"/></radialGradient>'+
'<radialGradient id="rtBulb" cx=".38" cy=".32" r=".7"><stop offset="0" stop-color="#fff6de"/><stop offset=".4" stop-color="#ffb347"/><stop offset="1" stop-color="#d9590b"/></radialGradient>'+
'<radialGradient id="rtSh" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#0b1f3a" stop-opacity=".35"/><stop offset="1" stop-color="#0b1f3a" stop-opacity="0"/></radialGradient>'+
'<radialGradient id="rtEye" cx=".5" cy=".35" r=".7"><stop offset="0" stop-color="#eaffff"/><stop offset=".45" stop-color="#5ff0ff"/><stop offset="1" stop-color="#0ea5c6"/></radialGradient>'+
'<filter id="rtGlow" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>'+
'<filter id="rtSoft"><feGaussianBlur stdDeviation="2"/></filter><filter id="rtDrop" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#0b1f3a" flood-opacity=".28"/></filter>'+
'</defs></svg>';
function head(){return '<svg viewBox="0 0 200 230" class="rt-svg" aria-hidden="true"><ellipse cx="100" cy="218" rx="58" ry="9" fill="url(#rtSh)"/><g filter="url(#rtDrop)">'+
'<path d="M46 212c0-26 24-40 54-40s54 14 54 40z" fill="url(#rtShell)"/><path d="M60 196c10-10 24-15 40-15s30 5 40 15" stroke="#7cf3ff" stroke-opacity=".5" stroke-width="2" fill="none"/>'+
'<rect x="84" y="152" width="32" height="26" rx="6" fill="url(#rtMet)"/><line x1="100" y1="42" x2="100" y2="16" stroke="#c3cfdd" stroke-width="5" stroke-linecap="round"/><line x1="98.5" y1="40" x2="98.5" y2="18" stroke="#fff" stroke-opacity=".7" stroke-width="1.4"/>'+
'<circle class="rt-bulb" cx="100" cy="13" r="12" fill="#ff9a2e" opacity=".45" filter="url(#rtGlow)"/><circle cx="100" cy="13" r="8.5" fill="url(#rtBulb)"/><circle cx="97" cy="10" r="2.6" fill="#fff" opacity=".9"/>'+
'<circle cx="26" cy="100" r="17" fill="url(#rtPod)"/><circle cx="26" cy="100" r="9" fill="none" stroke="#5ff0ff" stroke-width="2.5" filter="url(#rtGlow)" opacity=".85"/><circle cx="174" cy="100" r="17" fill="url(#rtPod)"/><circle cx="174" cy="100" r="9" fill="none" stroke="#5ff0ff" stroke-width="2.5" filter="url(#rtGlow)" opacity=".85"/>'+
'<rect x="32" y="40" width="136" height="122" rx="40" fill="url(#rtShell)"/><rect x="32" y="40" width="136" height="122" rx="40" fill="url(#rtSpec)"/><rect x="33.5" y="41.5" width="133" height="119" rx="39" fill="none" stroke="url(#rtRim)" stroke-width="3"/>'+
'<circle cx="45" cy="130" r="2.6" fill="#b9c5d4"/><circle cx="155" cy="130" r="2.6" fill="#b9c5d4"/><rect x="46" y="58" width="108" height="86" rx="26" fill="url(#rtScr)"/><rect x="46" y="58" width="108" height="86" rx="26" fill="none" stroke="#02070f" stroke-width="3" opacity=".7"/>'+
'<g class="rt-pu"><rect class="rt-eye" x="70" y="80" width="17" height="24" rx="8.5" fill="url(#rtEye)" filter="url(#rtGlow)"/><rect class="rt-eye" x="113" y="80" width="17" height="24" rx="8.5" fill="url(#rtEye)" filter="url(#rtGlow)"/></g>'+
'<ellipse cx="66" cy="114" rx="7" ry="4" fill="#ff6fb1" opacity=".35" filter="url(#rtSoft)"/><ellipse cx="134" cy="114" rx="7" ry="4" fill="#ff6fb1" opacity=".35" filter="url(#rtSoft)"/>'+
'<g class="rt-pr" filter="url(#rtGlow)"><path d="M84 116l7 5-7 5" stroke="#34f5a0" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect class="rt-cur" x="95" y="123" width="15" height="3.4" rx="1.7" fill="#34f5a0"/></g>'+
'<g class="rt-mb" fill="#34f5a0" filter="url(#rtGlow)"><rect x="86" y="114" width="4" height="14" rx="2"/><rect x="94" y="112" width="4" height="18" rx="2"/><rect x="102" y="114" width="4" height="14" rx="2"/><rect x="110" y="116" width="4" height="10" rx="2"/></g>'+
'<path d="M52 64c14-4 38-4 56-2l-36 60c-10-4-18-12-20-24z" fill="url(#rtGl)"/></g></svg>'}
function bodySvg(){return '<svg class="rt-bodysvg" viewBox="0 0 200 360" aria-hidden="true">'+
'<ellipse cx="100" cy="352" rx="46" ry="7" fill="url(#rtSh)"/>'+
'<ellipse class="rt-flame" cx="86" cy="336" rx="7" ry="14" fill="#38bdf8" opacity=".75" filter="url(#rtGlow)"/><ellipse class="rt-flame" cx="114" cy="336" rx="7" ry="14" fill="#38bdf8" opacity=".75" filter="url(#rtGlow)"/>'+
'<ellipse class="rt-flame" cx="86" cy="332" rx="3.5" ry="8" fill="#fff6de"/><ellipse class="rt-flame" cx="114" cy="332" rx="3.5" ry="8" fill="#fff6de"/>'+
'<g filter="url(#rtDrop)">'+
'<g class="rt-arm rt-arml"><rect x="46" y="218" width="16" height="12" rx="6" fill="url(#rtMet)"/><rect x="40" y="231" width="16" height="12" rx="6" fill="url(#rtMet)"/><rect x="35" y="244" width="16" height="12" rx="6" fill="url(#rtMet)"/><path d="M33 258 l-7 16 M43 259 l0 17 M52 258 l7 15" stroke="#9fb0c6" stroke-width="5.5" stroke-linecap="round"/><circle cx="43" cy="258" r="8" fill="url(#rtPod)"/></g>'+
'<g class="rt-arm rt-armr"><rect x="138" y="218" width="16" height="12" rx="6" fill="url(#rtMet)"/><rect x="144" y="231" width="16" height="12" rx="6" fill="url(#rtMet)"/><rect x="149" y="244" width="16" height="12" rx="6" fill="url(#rtMet)"/><path d="M148 258 l-7 15 M157 259 l0 17 M167 258 l7 16" stroke="#9fb0c6" stroke-width="5.5" stroke-linecap="round"/><circle cx="157" cy="258" r="8" fill="url(#rtPod)"/></g>'+
'<rect x="80" y="286" width="14" height="30" rx="6" fill="url(#rtMet)"/><rect x="106" y="286" width="14" height="30" rx="6" fill="url(#rtMet)"/>'+
'<path d="M72 314 h28 v10 q0 8 -8 8 h-12 q-8 0 -8 -8z" fill="url(#rtShell)"/><path d="M100 314 h28 v10 q0 8 -8 8 h-12 q-8 0 -8 -8z" fill="url(#rtShell)"/>'+
'<rect x="60" y="204" width="80" height="88" rx="26" fill="url(#rtShell)"/><rect x="60" y="204" width="80" height="88" rx="26" fill="url(#rtSpec)"/><rect x="61.5" y="205.5" width="77" height="85" rx="24.5" fill="none" stroke="url(#rtRim)" stroke-width="2.5"/>'+
'<rect x="74" y="222" width="52" height="40" rx="10" fill="url(#rtScr)"/><g filter="url(#rtGlow)"><path d="M86 234 l-7 8 7 8 M114 234 l7 8 -7 8 M103 231 l-6 22" stroke="#34f5a0" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>'+
'<circle cx="100" cy="276" r="5" fill="#ff9a2e" filter="url(#rtGlow)"/></g></svg>'}
var hand='<svg class="hand" viewBox="0 0 40 44" aria-hidden="true"><g filter="url(#rtDrop)"><rect x="4" y="4" width="32" height="12" rx="6" fill="url(#rtMet)"/><rect x="4" y="17" width="32" height="12" rx="6" fill="url(#rtMet)"/><rect x="6" y="30" width="28" height="11" rx="5.5" fill="url(#rtMet)"/></g></svg>';
var wrap=d.createElement('div');wrap.className='rt-root';wrap.innerHTML=defs+
'<button class="rt-peek" type="button" aria-label="Open chat with Root, the site guide"><div class="rw"><div class="rt-tilt">'+head()+'</div></div>'+hand+'</button>'+
'<button class="rt-dock" type="button" aria-label="Chat with Root, the site guide"><div class="rt-dk">'+bodySvg()+'<div class="rt-dkh rt-tilt">'+head()+'</div></div><span class="rt-dx" role="button" aria-label="Tuck Root away">&times;</span></button><svg class="rt-bolt" aria-hidden="true"><path d="" fill="none" stroke="#fde047" stroke-width="6" stroke-linejoin="round" stroke-linecap="round" filter="url(#rtGlow)" opacity="0"/></svg>'+'<div class="rt-bub" role="status"></div>'+
'<section class="rt-chat" aria-label="Chat with Root" aria-hidden="true"><div class="rt-hd"><div class="av rt-tilt">'+head()+'</div><div><b>Root</b><small><span class="rt-dot"></span>Site guide, rule-based assistant</small></div><button class="rt-x" type="button" aria-label="Close chat">&times;</button></div>'+
'<div class="rt-log" aria-live="polite"></div><div class="rt-qr"></div><form class="rt-ft"><input aria-label="Message Root" placeholder="Ask about your website" maxlength="400"><button aria-label="Send">&#10148;</button></form></section>';
d.body.appendChild(wrap);
var peek=wrap.querySelector('.rt-peek'),bub=wrap.querySelector('.rt-bub'),chat=wrap.querySelector('.rt-chat'),log=wrap.querySelector('.rt-log'),qr=wrap.querySelector('.rt-qr'),form=wrap.querySelector('.rt-ft'),inp=form.querySelector('input');
var svgs=[].slice.call(wrap.querySelectorAll('.rt-svg'));
var raf=0,mx=0,my=0;
window.addEventListener('pointermove',function(e){mx=e.clientX;my=e.clientY;if(!raf)raf=requestAnimationFrame(track)},{passive:true});
function track(){raf=0;svgs.forEach(function(s){var r=s.getBoundingClientRect();if(!r.width)return;var cx=r.left+r.width/2,cy=r.top+r.height*.42,dx=Math.max(-1,Math.min(1,(mx-cx)/420)),dy=Math.max(-1,Math.min(1,(my-cy)/420));s.style.transform='rotateY('+(dx*18).toFixed(1)+'deg) rotateX('+(-dy*14).toFixed(1)+'deg)';var a=Math.atan2(my-cy,mx-cx),k=Math.min(1,Math.hypot(mx-cx,my-cy)/250);s.querySelector('.rt-pu').setAttribute('transform','translate('+(Math.cos(a)*7*k).toFixed(1)+' '+(Math.sin(a)*5*k).toFixed(1)+')')})}
var page=d.body.getAttribute('data-root')||'default';
var OPEN={
 default:["Hey, I'm Root. I read websites the way Google and ChatGPT do. Want a quick read on what they see on yours?","Hi there. Most sites look fine to people and confusing to machines. Curious how yours reads?","Welcome in. Are you here about getting found, or about a new site?"],
 tech:["Quick one: has Google indexed every page you care about, or are some quietly missing?","Technical SEO is plumbing. When it leaks, nobody sees the water until the bill comes. Want to check yours?"],
 ai:["When someone asks ChatGPT for a business like yours, whose name comes back? Want to find out together?","AI engines cite pages they can quote cleanly. Want to see if yours is quotable?"],
 dev:["Building or rebuilding a site? I can walk you through what separates a pretty site from one that gets found.","Most sites are built to be looked at. We build them to be found. What are you working with now?"],
 lab:["Welcome to The Lab. Want to know what a 3D experience could do for your brand?","Fun, right? Now picture your product in here. Want to talk about it?"],
 tools:["Ran a tool? Tell me what surprised you and I'll point you to the next step.","Tools find the gaps. People fix them. Want help with what you found?"],
 money:["Here's the offer in plain words: a full market-domination website from $99 a month for two to four years, subscribe-to-own, and you can buy it out once it's ranking and earning. Want to see if you qualify?"],
 speed:["Is your site fast on a phone, or just on your office Wi-Fi? Want the real answer?"],
 bot:["You're talking to a sales-trained assistant right now. Want one for your business?"]
};
var seen=+(get('op')||0);
function opener(){var a=OPEN[page]||OPEN.default;return a[seen%a.length]}
var K=[
 [/(call|phone|talk to|speak|someone|human|person|when can)/,'call'],
 [/(are you (a )?(bot|real|human|ai)|who are you|chatgpt behind|are you gpt)/,'who'],
 [/(install|embed|bot like you|chatbot for|sales ?bot|my own bot|chatbot)/,'bot'],
 [/(50k|\$?50,?000|\$99|subscribe|rent to own|lease|buyout|payment plan|monthly)/,'site50'],
 [/(cost|price|pricing|how much|budget|expensive|afford)/,'cost'],
 [/(maint|update|hack|broken|plugin|backup|security)/,'maint'],
 [/(speed|slow|fast|core web|vitals|load)/,'speed'],
 [/(schema|structured|json-?ld|rich result)/,'schema'],
 [/(react|javascript|\bjs\b|next\.?js|vue|angular|spa)/,'js'],
 [/(3d|three|vr|virtual|immersive|lab)/,'td'],
 [/(chatgpt|perplexity|gemini|claude|grok|\bai\b|cite|citation|overview|llm)/,'ai'],
 [/(guarantee|promise|results|how long|timeline)/,'guar'],
 [/(where|located|denver|international|world|office|travel)/,'where'],
 [/(tool|validator|checker|generator|calculator)/,'tools'],
 [/(website|web site|build|redesign|develop|new site)/,'dev'],
 [/(seo|google|rank|traffic|found|search|leads?)/,'seo'],
 [/(email|mail)/,'email'],
 [/(thank|thx|cool|awesome|great)/,'thanks'],
 [/^(hi|hey|hello|yo|sup)\b/,'hello']
];
var R={
 call:function(){return say('Easy. Tap <a href="'+TEL+'">'+PH+'</a> and a real strategist answers, not a phone tree. Or I can have someone call you. Which works better?').then(function(){opts([["Call now",R.dial,1],["Call me back",R.cb]])})},
 dial:function(){location.href=TEL;return say('Dialing '+PH+'. If it did not open, tap here: <a href="'+TEL+'">'+PH+'</a>.').then(menu)},
 cb:function(){return say('Two quick fields and you are done. No spam, no list.').then(cbForm)},
 who:function(){return say("Honest answer: I'm Root, a rule-based site guide. I'm not a person and not a large language model. I know this site, and I know when you should talk to a real strategist.").then(next)},
 bot:function(){return say("You're looking at one. We build sales-trained assistants like me for businesses: they know your services, answer questions at 11pm, and hand hot leads to your phone. Want to talk through what yours would do?").then(next)},
 site50:function(){return say("For businesses we believe in, we build sites valued at $30,000 to $50,000 on our subscribe-to-own plan, from $99 a month. In years two through four you can buy it out at a fair market value we determine once it is ranking and earning.").then(function(){return say("Not every business qualifies, and it is not a promise of results. We pick the ones we can really grow. Want to see if yours is a fit?")}).then(next)},
 cost:function(){return say('Depends on what you need. We build everything from simple sites to large platforms. The <a href="/tools/website-development-cost-calculator/">cost calculator</a> gives you a planning range. For a real number, a 15-minute call beats guessing. Want that?').then(next)},
 maint:function(){return say("Sites decay quietly: plugins age, forms break, speed slips. Maintenance catches it before customers do. Is something acting up right now, or is this prevention?").then(function(){opts([["Something is broken",function(){return say("Then let's not wait on it. A quick call gets eyes on it today.").then(next)}],["Prevention",function(){return say("Smart. We can map what yours needs monthly vs quarterly. Short call?").then(next)}]])})},
 speed:function(){return say("Speed is money. In a Deloitte study for Google, a 0.1-second mobile improvement lifted retail conversions 8.4%. Want to know where your site stands?").then(next)},
 schema:function(){return say('Schema is how machines read your business. Try the free <a href="/tools/schema-markup-validator/">Schema Markup Validator</a>; it shows what is broken. Fixing it right across the whole site is where we come in.').then(next)},
 js:function(){return say("JavaScript sites can look perfect to people and nearly empty to crawlers. Is your site built on React, Next.js, or similar?").then(function(){opts([["Yes",function(){return say("Then rendering is worth checking before anything else. It is a quick look on a call.").then(next)}],["Not sure",function(){return say("No problem. We can tell you in a few minutes.").then(next)}]])})},
 td:function(){return say('3D and interactive sites make people stop scrolling. <a href="/3d-websites/#lab">The Lab</a> is a small taste. Want to picture your product in one?').then(next)},
 ai:function(){return say("AI engines cite pages they can quote cleanly and trust. Does your site answer your customers' top questions in plain sentences?").then(function(){opts([["Probably not",function(){return say("That is the gap, and it is code as much as copy: answers, schema, signals. Want to see what that looks like for you?").then(next)}],["Not sure",function(){return say("Fair. It is quick to check together, and you will leave knowing either way.").then(next)}]])})},
 guar:function(){return say("Straight answer: nobody can honestly guarantee rankings, and anyone who does is guessing. What we can promise is clear work, honest reporting, and a plan built on your real numbers.").then(next)},
 where:function(){return say("Headquartered in Denver, growing businesses worldwide. Where is your business based?").then(next)},
 tools:function(){return say('Our free tools find gaps: <a href="/tools/schema-markup-validator/">schema validator</a>, <a href="/tools/ai-crawler-checker/">AI crawler checker</a>, <a href="/tools/llms-txt-generator/">llms.txt generator</a>, and more in <a href="/tools/">Tools</a>. When you find something, we fix it.').then(next)},
 dev:function(){return say("Good timing. Before design, the question is: what should this site make happen? Calls, bookings, sales?").then(function(){opts([["Calls",R.goal],["Bookings",R.goal],["Online sales",R.goal]])})},
 goal:function(){return say("Then every page should be engineered toward that one action, and built so Google and AI can read it. That is exactly what we do. Want a quick walkthrough of what yours would look like?").then(next)},
 seo:function(){return say("Before I suggest anything: is your site bringing in calls today, or is it mostly quiet?").then(function(){opts([["Mostly quiet",function(){return say("Common, and usually fixable. Most quiet sites have one of three issues: Google cannot crawl them, cannot understand them, or does not trust them yet.").then(function(){return say("Would it help to know which one is yours? A 15-minute look usually answers that.")}).then(next)}],["Some calls, want more",function(){return say("Good problem to have. Do you know which pages bring those calls in? That is usually where the next ones come from.").then(next)}]])})},
 email:function(){var m='sales'+'@'+'eyetoad.com';return say('Sure: <a href="mai'+'lto:'+m+'">'+m+'</a>. For anything urgent, '+PH+' is faster.').then(next)},
 thanks:function(){return say("Anytime. Want to take the next step while it is fresh?").then(next)},
 hello:function(){return say("Hey! What brings you in today?").then(menu)},
 fallback:function(){return say("Good question. The fastest way to a real answer for your business is a quick conversation with a strategist.").then(next)}
};
function menu(){opts([["Getting found on Google",R.seo],["Showing up in AI answers",R.ai],["A new website",R.dev],["The $50K website",R.site50],["Just call me",R.call,1]])}
function next(){opts([["Call "+PH,R.dial,1],["Have someone call me",R.cb],["Keep exploring",function(){return say('Sure. What else is on your mind?').then(menu)}]])}
function talk(on){svgs.forEach(function(s){s.classList.toggle('rt-talk',on)})}
function save(){try{var h=log.innerHTML;if(h.length>40000)h=h.slice(-40000);ss.setItem('root:log',h)}catch(e){}}
function add(cls,html){var m=d.createElement('div');m.className='rt-m '+cls;m.innerHTML=html;log.appendChild(m);log.scrollTop=1e6;save();return m}
function say(t){return new Promise(function(res){var ty=add('rt-b rt-ty','<i></i><i></i><i></i>');talk(true);setTimeout(function(){ty.remove();add('rt-b',t);setTimeout(function(){talk(false)},450);res()},600+Math.min(t.length*10,1300))})}
function me(t){var m=d.createElement('div');m.className='rt-m rt-u';m.textContent=t;log.appendChild(m);log.scrollTop=1e6;save()}
function opts(a){qr.innerHTML='';a.forEach(function(o){var b=d.createElement('button');b.type='button';b.textContent=o[0];if(o[2])b.className='hot';b.onclick=function(){me(o[0]);qr.innerHTML='';o[1]()};qr.appendChild(b)})}
function cbForm(){qr.innerHTML='';var f=d.createElement('form');f.className='rt-m rt-b rt-cb';f.innerHTML='<input name="name" placeholder="Your name" aria-label="Your name" autocomplete="name" required maxlength="80"><input name="phone" type="tel" placeholder="Best phone number" aria-label="Best phone number" autocomplete="tel" required maxlength="25"><input name="_hp" tabindex="-1" autocomplete="off" style="position:absolute;left:-5000px" aria-hidden="true"><button>Call me</button><small class="fm"></small>';log.appendChild(f);log.scrollTop=1e6;var t0=Date.now();
 f.onsubmit=function(e){e.preventDefault();var fd=new FormData(f),fm=f.querySelector('.fm');if(fd.get('_hp'))return;var ph=String(fd.get('phone')).replace(/\D/g,'');if(!String(fd.get('name')).trim()||ph.length<10){fm.textContent='Add your name and a 10-digit number.';return}if(Date.now()-t0<3000){fm.textContent='One sec, then tap again.';return}
 fd.delete('_hp');fd.append('_subject','Root callback request (DenverSEO.io)');fd.append('page',location.pathname);fm.textContent='Sending...';
 fetch('https://formsubmit.co/ajax/'+atob('aW5mbw==')+String.fromCharCode(64)+atob('ZXlldG9hZC5jb20='),{method:'POST',headers:{Accept:'application/json'},body:fd}).then(function(r){return r.json().catch(function(){return {}}).then(function(j){if(!r.ok||String(j&&j.success)!=='true')throw 0})}).then(function(){f.remove();say("Done. A strategist will call you shortly. If you would rather not wait: "+PH+".").then(menu)}).catch(function(){fm.textContent='Could not send. Please call '+PH+'.'})}}
function route(t){t=t.toLowerCase();for(var i=0;i<K.length;i++){if(K[i][0].test(t))return R[K[i][1]]()}return R.fallback()}
form.addEventListener('submit',function(e){e.preventDefault();var v=inp.value.trim();if(!v)return;me(v);inp.value='';qr.innerHTML='';route(v)});
function open(){hideBub();chat.classList.add('open');chat.setAttribute('aria-hidden','false');hideP();set('state','open');if(!log.children.length){seen++;set('op',seen);say(opener()).then(menu)}else{menu()}setTimeout(function(){if(matchMedia('(min-width:701px)').matches)inp.focus({preventScroll:true})},350)}
function close(){chat.classList.remove('open');chat.setAttribute('aria-hidden','true');set('state','closed');showP();set('bub','1');hideBub();}
function hideBub(){bub.classList.remove('on')}
peek.addEventListener('click',open);wrap.querySelector('.rt-x').addEventListener('click',close);
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&chat.classList.contains('open'))close()});
var saved=get('log');if(saved){log.innerHTML=saved;[].slice.call(log.querySelectorAll('.rt-ty,.rt-cb')).forEach(function(x){x.remove()})}

var LS=window.localStorage,dock=wrap.querySelector('.rt-dock'),boltP=wrap.querySelector('.rt-bolt path'),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function pget(){try{return LS.getItem('root:presence')||'dock'}catch(e){return 'dock'}}function pset(v){try{LS.setItem('root:presence',v)}catch(e){}}
function hideP(){peek.style.display='none';dock.style.display='none'}
function showP(){if(chat.classList.contains('open'))return;if(pget()==='peek'){dock.style.display='none';peek.style.display='block'}else{peek.style.display='none';dock.style.display='block'}}
function wave(){dock.classList.remove('rt-wave');void dock.offsetWidth;dock.classList.add('rt-wave')}
dock.addEventListener('click',function(e){if(e.target.closest('.rt-dx')){e.stopPropagation();pset('peek');hideBub();if(!reduce){dock.animate([{transform:'none',opacity:1},{transform:'translate(60px,-40vh) scale(.3)',opacity:0}],{duration:450,easing:'ease-in'}).finished.then(showP)}else showP();return}open()});
peek.addEventListener('click',function(){pset('dock')},true);
function flyIn(){var W=innerWidth,H=innerHeight,big=W<640?150:230,box=dock.getBoundingClientRect();dock.style.display='block';var r=dock.getBoundingClientRect(),dw=r.width,dh=r.height,s=big/dw;
  var sx=W*.12,sy=Math.max(110,H*.16),ex=W-big-24;
  var A1=dock.animate([{transform:'translate('+(sx-r.left)+'px,'+(sy-r.top)+'px) scale(.05)',opacity:0,filter:'blur(8px) hue-rotate(90deg)'},{offset:.6,opacity:1,filter:'blur(0) hue-rotate(0)'},{transform:'translate('+(sx-r.left)+'px,'+(sy-r.top)+'px) scale('+s+')',opacity:1}],{duration:900,easing:'cubic-bezier(.2,.9,.3,1.2)',fill:'forwards'});
  A1.finished.then(function(){return dock.animate([{transform:'translate('+(sx-r.left)+'px,'+(sy-r.top)+'px) scale('+s+')'},{transform:'translate('+(ex-r.left)+'px,'+(sy-r.top+30)+'px) scale('+s+') rotate(4deg)',offset:.5},{transform:'translate('+(ex-r.left)+'px,'+(sy-r.top)+'px) scale('+s+')'}],{duration:2200,easing:'ease-in-out',fill:'forwards'}).finished}).then(function(){
    var tx=ex+big*.5,ty=sy+big*.2,pts=[[tx+40,-10],[tx-15,ty*.35],[tx+25,ty*.55],[tx-10,ty*.8],[tx,ty]];boltP.setAttribute('d','M'+pts.map(function(p){return p[0].toFixed(0)+' '+p[1].toFixed(0)}).join(' L'));var L=boltP.getTotalLength();boltP.style.strokeDasharray=L;
    return boltP.animate([{strokeDashoffset:L,opacity:1},{strokeDashoffset:0,opacity:1}],{duration:380,easing:'ease-in',fill:'forwards'}).finished}).then(function(){
    boltP.animate([{opacity:1},{opacity:0}],{duration:600,fill:'forwards'});
    return dock.animate([{transform:'translate('+(ex-r.left)+'px,'+(sy-r.top)+'px) scale('+s+')'},{transform:'translate('+((ex-r.left)*.4)+'px,'+((sy-r.top)*.4)+'px) scale('+(s*.6)+')',offset:.5},{transform:'none'}],{duration:850,easing:'cubic-bezier(.5,0,.3,1.3)',fill:'forwards'}).finished}).then(function(){dock.getAnimations().forEach(function(a){a.cancel()});try{ss.setItem('root:intro','1')}catch(e){}wave()});}
var isHome=d.body.hasAttribute('data-intro'),introDone=false;try{introDone=!!ss.getItem('root:intro')}catch(e){}
function boot(){if(get('state')==='open')return;if(pget()==='peek'){showP();return}if(isHome&&!introDone&&!reduce){hideP();var go=function(){flyIn()};if(window.__compiled)setTimeout(go,200);else d.addEventListener('ds:compiled',function(){setTimeout(go,200)},{once:true});setTimeout(function(){if(dock.style.display!=='block')go()},9000)}else{showP();if(!reduce)dock.animate([{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'none'}],{duration:500})}}
window.Root={open:open,close:close};
hideP();boot();if(get('state')==='open'){open()}
else if(!get('bub')&&get('state')!=='closed'){var shown=false;var tryBub=function(){if(shown||window.scrollY<200)return;shown=true;window.removeEventListener('scroll',tryBub);setTimeout(function(){if(chat.classList.contains('open'))return;var t={tech:"Psst. Want to see what Google sees?",ai:"Is AI recommending you yet?",lab:"Like the room? Ask me how.",money:"Want the $50K deal in plain words?"}[page]||"Psst. Want to see what Google sees?";bub.textContent=t;bub.classList.add('on');set('bub','1');setTimeout(hideBub,7000)},1500)};window.addEventListener('scroll',tryBub,{passive:true})}
})();
