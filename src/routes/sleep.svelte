<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ params, session }) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return {};
  };
</script>

<script lang="ts">
    export let value;
</script>

<div>{value}</div>
<input bind:value placeholder="Enter text"/>
