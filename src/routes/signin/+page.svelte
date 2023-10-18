<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<p>This is the data we got {JSON.stringify(data)}</p>

{#each data.rows as item}
  <p>{item.id}</p>
  <p>{item.name}</p>
{/each}
