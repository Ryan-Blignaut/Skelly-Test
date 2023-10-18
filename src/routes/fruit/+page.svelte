<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>


<dl class="list-dl">
  {#each data.fruits as fruit}
    <div>
      <span class="badge bg-primary-500">💀</span>
      <span class="flex-auto">
			<dd>Id: {fruit.id}</dd>
      <dt>Title: {fruit.name}</dt>
		</span>
    </div>
  {/each}

  <!-- ... -->
</dl>
