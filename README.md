No-fuss CommonJS modules in your web pages
==========================================

Embed [CommonJS][1] modules directly in your web pages; dynamically load modules
from disk or server, or package your modules as a single minified script for
deployment.

[1]: http://www.commonjs.org/specs/modules/1.0/ "CommonJS Modules 1.0 Specification"

Direct embedding
----------------

With one chunk of script at the top of your web page, you can embed CommonJS
modules directly in your page.

    /* github.com/raffecat/web-commonjs v2 (MIT license) */
    var __cjs;__cjs=__cjs||{};function cjs_provide(n,f){__cjs[n]={f:f}}
    function require(n){var G=__cjs,p,q=[],i,s,m,o=G.$,S,t;s=n.charAt(0);
    if(s==='.'||s==='..')n=o+'/../'+n;p=n.split('/');for(i=0;i<p.length;
    i++)s=p[i],s&&s!=="."&&(s===".."?q.pop():q.push(s));n=q.join("/");m=
    G[n];if(!m){S=document.getElementsByTagName('script');for(i=0;i<S.length;
    i++){t=S[i];if(t.getAttribute('type')==='text/x-commonjs'&&t.id===n){
    G[n]=m={f:new Function('exports','require',t.innerText||t.textContent)};
    break}}if(!m)throw "module not found: "+n;}if(m.e)return m.e;try{G.$=n;
    m.f(m.e={},require)}finally{G.$=o}return m.e;}
    function cjs_shim(n,e){__cjs[n]={e:e}}

Then, wrap the source code for each CommonJS module in a script tag, replacing
*modulePath* with the module's CommonJS path (which is usually just the file
system path with no extension.)

    <script type="text/x-commonjs" id="modulePath">
        ... paste the module source code here ...
    </script>

You can also inject a global object, such as jQuery's *$*, into the module
system as follows:

    cjs_shim('jQuery', $);

Modules can now use jQuery via `require('jQuery')`.

Finally, your page must actually use one of the modules you've provided,
otherwise nothing will happen.

    require('website/mainpage');

Dynamic loading
---------------

This feature is not yet implemented.

Packaged modules
----------------

This feature is not yet implemented.

Examples
--------

The `hello.html` sample demonstrates _direct embedding_ in a web page.
This sample can be loaded locally in a web browser using the file:/// protocol.

Tests
-----

The `tests.html` page contains an embedded test-suite, which can be run
locally in a web browser using the file:/// protocol.


MIT License
-----------

Copyright (c) 2012 Andrew Towers, http://github.com/raffecat/web-commonjs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
