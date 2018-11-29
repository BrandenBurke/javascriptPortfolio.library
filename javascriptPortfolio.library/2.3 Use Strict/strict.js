"use strict";
/*For a long time JavaScript was evolving without compatibility issues. New features were added to the language, but the old functionality did not change.

That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript creators got stuck in the language forever.

It had been so until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most modifications are off by default. One needs to enable them explicitly with a special directive "use strict".
*/

/*The directive looks like a string: "use strict" or 'use strict'. When it is located on the top of the script, then the whole script works the “modern” way.
*/

"use strict";

//this code works the modern way now ...

//Please make sure that "use strict" is on the top of the script, otherwise the strict mode may not be enabled.

/*The "use strict" directive switches the engine to the “modern” mode, changing the behavior of some built-in features. We’ll see the details as we study.
The strict mode is enabled by "use strict" at the top. Also there are several language features like “classes” and “modules” that enable strict mode automatically.
The strict mode is supported by all modern browsers.
It’s always recommended to start scripts with "use strict". All examples in this tutorial assume so, unless (very rarely) specified otherwise.
*/