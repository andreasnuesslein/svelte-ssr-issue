this repo is demonstrating the problem where hydration of the page resets input fields

see https://github.com/sveltejs/svelte/issues/1755

to test:
- run `npm run dev`
- open new tab
- set web browser "Throttling" to Fast 3G
- navigate to http://localhost:5173/
- as soon as possible enter something in the input field
- after input you can disable throttling again
- > the input field will be reset

it is also reproducable with `npm run build && npm run preview`. however I had to set it to "slow 3g" to be fast enough to catch it in that case.
