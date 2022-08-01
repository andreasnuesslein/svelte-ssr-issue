<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ params, session }) => {
    return {};
  };
</script>

<script>
</script>

<div>layout</div>

<slot />
