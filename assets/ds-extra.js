(function(){
'use strict';
var d=document;function $(s,c){return (c||d).querySelector(s)}function $$(s,c){return [].slice.call((c||d).querySelectorAll(s))}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var loaded=Date.now(),touched=false;['keydown','pointerdown','touchstart'].forEach(function(e){d.addEventListener(e,function(){touched=true},{passive:true,once:true})});
function addr(el){try{return atob(el.getAttribute('data-a'))+String.fromCharCode(64)+atob(el.getAttribute('data-b'))}catch(e){return ''}}
function send(el,data,subj){var a=addr(el);data._subject=subj;data._template='table';data._captcha='false';data.page=location.pathname;
  return fetch('https://formsubmit.co/ajax/'+a,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)}).then(function(r){return r.json()}).then(function(j){return j&&(j.success===true||j.success==='true')?'ok':'unconfirmed'}).catch(function(){return 'fail'})}

/* live load time */
function loadTime(){var n=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];var v=n?(n.loadEventEnd>0?n.loadEventEnd:n.domContentLoadedEventEnd):0;return v>0?v:0}
window.DSload=loadTime;
function fillChips(){var v=loadTime();if(!v){setTimeout(fillChips,300);return}$$('[data-loadtime]').forEach(function(e){e.textContent=(v/1000).toFixed(2)+'s'})}
if($('[data-loadtime]')){if(d.readyState==='complete')fillChips();else window.addEventListener('load',function(){setTimeout(fillChips,50)})}

/* scoper */
$$('.scoper').forEach(function(sc){
  var steps=$$('.sc-step',sc),prog=$('.sc-prog i',sc),back=$('.sc-back',sc),ans={},i=0;
  function go(n){steps.forEach(function(s,k){s.classList.toggle('on',k===n)});i=n;prog.style.width=Math.min(100,(n/(steps.length-2))*100)+'%';back.style.display=(n>0&&n<steps.length-1)?'inline-block':'none'}
  steps.forEach(function(s,k){$$('.sc-opts button',s).forEach(function(b){b.addEventListener('click',function(){$$('button',s).forEach(function(x){x.classList.remove('sel')});b.classList.add('sel');ans[s.getAttribute('data-q')]=b.textContent;setTimeout(function(){go(k+1)},180)})})});
  back.addEventListener('click',function(){if(i>0)go(i-1)});
  var f=$('.sc-form',sc);f.addEventListener('submit',function(e){e.preventDefault();var m=$('.fmsg',f);if(f._honey&&f._honey.value)return;
    if(!touched||Date.now()-loaded<3500){m.className='fmsg err';m.textContent='One second, then tap again.';return}
    var data={};$$('input',f).forEach(function(x){if(x.name&&x.name!=='_honey')data[x.name]=(x.value||'').trim().slice(0,200)});
    if(!data.name||!(data.phone||data.email)){m.className='fmsg err';m.textContent='Add your name and a phone or email.';return}
    Object.keys(ans).forEach(function(k){data[k]=ans[k]});data.topic=sc.getAttribute('data-topic');
    var btn=$('button[type=submit]',f);btn.disabled=true;m.className='fmsg';m.textContent='Sending...';
    send(sc,data,'DenverSEO.io project scope: '+(ans.project||'')).then(function(r){btn.disabled=false;if(r!=='ok'){m.className='fmsg err';m.textContent='That did not go through. Please call 1-800-481-8638.';return}go(steps.length-1)})});
  go(0);
});

/* redirect map builder */
var rb=$('#redirects');
if(rb){
  var oldT=$('#rb-old',rb),newT=$('#rb-new',rb),out=$('#rb-out',rb),stats=$('#rb-stats',rb),fmt='htaccess',map=[];
  function path(u){u=u.trim();if(!u)return '';try{if(/^https?:/i.test(u))u=new URL(u).pathname}catch(e){}u=u.split('#')[0].split('?')[0];if(u[0]!=='/')u='/'+u;return u.toLowerCase()}
  function toks(p){return p.replace(/\.(html?|php|aspx?)$/,'').split(/[\/\-_.]+/).filter(function(t){return t&&!/^(index|www|html|php|page)$/.test(t)})}
  function sim(a,b){var A=toks(a),B=toks(b);if(!A.length||!B.length)return 0;var s=0;A.forEach(function(t){if(B.indexOf(t)>-1)s++});return (2*s)/(A.length+B.length)}
  function build(){var olds=oldT.value.split(/\n/).map(path).filter(Boolean),news=newT.value.split(/\n/).map(path).filter(Boolean),ex=0,fz=0,un=0,ch=0;map=[];
    var seen={};olds.forEach(function(o){if(seen[o])return;seen[o]=1;var best='',bs=0;if(news.indexOf(o)>-1){ex++;return}
      news.forEach(function(n){var s=sim(o,n);if(s>bs){bs=s;best=n}});
      if(bs>=.34){fz++;map.push([o,best,bs])}else{un++;var parent=o.split('/').filter(Boolean).slice(0,-1).join('/');var p='/'+(parent?parent+'/':'');map.push([o,news.indexOf(p)>-1?p:'/',0])}});
    map.forEach(function(m){if(seen[m[1]]&&news.indexOf(m[1])<0)ch++});
    stats.innerHTML='<span>'+olds.length+' old URLs</span><span>'+ex+' unchanged</span><span>'+fz+' auto-matched</span><span style="background:#fef3c7">'+un+' need a human</span>'+(ch?'<span style="background:#fee2e2">'+ch+' possible chains</span>':'');render()}
  function render(){var L=map.map(function(m){var o=m[0],n=m[1],flag=m[2]===0?'  # CHECK: no close match':'';
      if(fmt==='htaccess')return 'Redirect 301 '+o+' '+n+flag;if(fmt==='nginx')return 'location = '+o+' { return 301 '+n+'; }'+flag;if(fmt==='netlify')return o+'  '+n+'  301'+flag;return '"'+o+'","'+n+'",'+(m[2]===0?'check':Math.round(m[2]*100)+'%')});
    if(fmt==='csv')L.unshift('"old","new","match"');out.textContent=L.length?L.join('\n'):'# Paste your old and new URL lists above.'}
  $$('.tabs button',rb).forEach(function(b){b.addEventListener('click',function(){$$('.tabs button',rb).forEach(function(x){x.classList.remove('on')});b.classList.add('on');fmt=b.getAttribute('data-f');render()})});
  [oldT,newT].forEach(function(t){t.addEventListener('input',build)});
  $('#rb-copy',rb).addEventListener('click',function(){var r=d.createRange();r.selectNodeContents(out);var s=getSelection();s.removeAllRanges();s.addRange(r);try{navigator.clipboard.writeText(out.textContent)}catch(e){d.execCommand('copy')}this.textContent='Copied!'});
  build();
}

/* redesign risk scorer */
var rk=$('#risk');
if(rk){var bx=$$('input',rk),out2=$('#rk-out',rk),bar=$('.meter i',rk);
  function score(){var s=0,fix=[];bx.forEach(function(b){if(b.checked){s+=+b.getAttribute('data-w');fix.push(b.getAttribute('data-fix'))}});var mx=bx.reduce(function(a,b){return a+ +b.getAttribute('data-w')},0),p=Math.round(s/mx*100);
    bar.style.width=Math.max(3,p)+'%';bar.style.background=p<30?'#16a34a':p<60?'#f59e0b':'#dc2626';
    out2.innerHTML='<p class="num" style="font-size:34px;margin:0">'+p+'% <small style="font-size:16px">traffic risk</small></p><p>'+(p<30?'Low risk. Still export a baseline and map redirects.':p<60?'Moderate risk. A few of these can quietly cost you rankings for months.':'High risk. This is the kind of launch that shows up as a traffic cliff in Search Console.')+'</p>'+(fix.length?'<h3 style="font-size:19px">Do these before launch</h3><ul>'+fix.map(function(f){return '<li>'+esc(f)+'</li>'}).join('')+'</ul>':'')}
  bx.forEach(function(b){b.addEventListener('change',score)});score()}
})();
