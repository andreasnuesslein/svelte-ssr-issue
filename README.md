this repo is demonstrating the problems with ssr=true and fetching something that the internal vite-proxy should provide.


to test:

- run a small http-server on port 8000, e.g.: `/usr/bin/env python3 -m http.server`
- then run `npm run dev`


there are 4 routes, basically the same, only varying in `ssr=false/true` and `load({fetch}) / load(), js-fetch`:

- http://localhost:3000/ssr_false
- http://localhost:3000/ssr_false_js_fetch
- http://localhost:3000/ssr_true
- http://localhost:3000/ssr_true_js_fetch


ssr_true should show the problem
