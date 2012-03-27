/* github.com/raffecat/web-commonjs v1 */
var __cjs;__cjs=__cjs||{};function cjs_provide(n,f){__cjs[n]={f:f}}
function require(n){var G=__cjs,p,q=[],i,s,m,r,o=G.$;s=n.charAt(0);
if(s==='.'||s==='..')n=o+'/../'+n;p=n.split('/');for(i=0;i<p.length
;i++)s=p[i],s!=="."&&(s===".."?q.pop():q.push(s));n=q.join("/");m=G
[n];if(!m)throw "Module not found: "+n;if(m.e)return m.e;try{G.$=n;
m.f(m.e={},require)}finally{G.$=o}return m.e;}
function cjs_shim(n,e){__cjs[n]={e:e}}
