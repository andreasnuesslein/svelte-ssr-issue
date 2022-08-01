this repo is demonstrating the problem where hydration of the page resets input fields

see https://github.com/sveltejs/svelte/issues/1755

there are two ways to test this:

## option http://localhost:5173/sleep/

this is the easier way, but it has a `context="module"` block.
- run `npm run dev`
- go to http://localhost:5173/sleep
- after waiting ~5 seconds until the form loads, enter something.
- wait another 5 seconds.
- > the input field will be reset

## option http://localhost:5173/

the same problem can be reproduced without a `context="module"` block:

- run `npm run dev`
- open new tab
- set web browser "Throttling" to Fast 3G
- navigate to http://localhost:5173/
- as soon as possible enter something in the input field
- after input you can disable throttling again
- > the input field will be reset

### npm run preview

both cases are also reproducable with `npm run build && npm run preview`. however I had to set it to "slow 3g" to be fast enough to catch it in the second case.
