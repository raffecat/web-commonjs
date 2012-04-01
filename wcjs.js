/* github.com/raffecat/web-commonjs v3 (MIT license) */
var __cjs;__cjs=__cjs||{};function cjs_provide(n,f){__cjs[n]={f:f}}
function require(n){var G=__cjs,p,q=[],i,s,m,o=G.$,S,t,x;s=n.charAt(0);
if(s==='.'||s==='..')n=o+'/../'+n;p=n.split('/');for(i=0;i<p.length;
i++)s=p[i],s&&s!=="."&&(s===".."?q.pop():q.push(s));n=q.join("/");m=
G[n];if(!m){S=document.getElementsByTagName('script');for(i=0;i<S.length;
i++){t=S[i];if(t.getAttribute('type')==='text/x-commonjs'&&t.id===n){
G[n]=m={f:new Function('exports','require',t.innerText||t.textContent)};
break}}if(!m){x=new XMLHttpRequest();x.open('GET',n+'.js',false);
x.overrideMimeType('text/plain');x.send();if(x.status===200)G[n]=m={
f:new Function('exports','require',x.responseText)};}
if(!m)throw "module not found: "+n;}if(m.e)return m.e;try{G.$=n;
m.f(m.e={},require)}finally{G.$=o}return m.e;}
function cjs_shim(n,e){__cjs[n]={e:e}}
