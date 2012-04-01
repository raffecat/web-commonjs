No-fuss CommonJS modules in your web pages
==========================================

Embed [CommonJS][1] modules directly in your web pages, dynamically load modules
from disk or server, or package your modules as a single minified script for
deployment.

[1]: http://www.commonjs.org/specs/modules/1.0/ "CommonJS Modules 1.0 Specification"


Dynamic loading
---------------

Note: this feature **requires a web server**, because web browsers do not allow
local pages to load content (via XMLHttpRequest) when using the file:// protocol.

Include wcjs.js at the top of your web page...

    <script src="wcjs.js"></script>

... and include a script in your page that uses the `require` function:

    <script>
      require('example/website');
    </script>

This feature is intended for development, **not for production** - it uses a
_blocking_ XMLHttpRequest to load modules. For production deployment, package
your modules as described below.

Note: the dynamic loader does not cache your scripts, since it is intended for
development only. Your web browser _will_ cache your scripts if your web server
tells it to; check the response headers!

You can also inject a global object, such as jQuery's *$*, into the module
system as follows:

    cjs_shim('jQuery', $);

Modules can now use jQuery via `require('jQuery')`.


Packaged modules
----------------

This feature is not yet implemented. It will work as follows: concatenate wcjs.js
and all modules into one file, wrapping each module source with the following:

    cjs_provide('path/to/module', function(exports,require) {
        // ... module code goes here ...
    });

Then, pass the result through a javascript minifier.


Direct embedding
----------------

Include wcjs.js at the top of your web page (or paste its contents into a
script tag!) and you can embed CommonJS modules directly in your page.

    <script src="wcjs.js"></script>

Wrap the source code for each CommonJS module in a script tag, replacing
*modulePath* with the module's CommonJS path (which is usually just the file
system path with no extension.)

    <script type="text/x-commonjs" id="modulePath">
        ... paste the module source code here ...
    </script>

Finally, your page must actually use one of the modules you've provided,
otherwise nothing will happen.

    require('website/mainpage');


Examples
--------

The `hello.html` sample demonstrates _direct embedding_ in a web page.
This sample can be loaded locally in a web browser using the file:/// protocol.

The `hello-dynamic.html` sample demonstrates _dynamic loading_ from a web page.
This sample requires the files to be served by a web server.


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
