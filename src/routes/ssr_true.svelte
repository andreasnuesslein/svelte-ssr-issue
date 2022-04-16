<script lang="ts" context="module">
  export async function load({fetch}) {

    const res = await fetch('/api');
    if (res.ok)
      return {props: {content: await res.text()}};

    return {
      status: res.status,
      error: new Error(`Could not fetch /api`),
    };
  }
</script>

<script>
  export let content;
</script>

<h1>{content}</h1>
