<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<p>This is the data we got {JSON.stringify(data)}</p>

<div class="card p-6 space-y-4">
  <div class="flex justify-between items-center">
    <b>Services</b>
    <a href="#actions-grid" class="unstyled text-xs hover:underline">+21 other services</a>
  </div>
  <div class="grid grid-cols-3 gap-4">
    {#each data.rows as item}
      <div
        class="btn flex flex-col gap-2 bg-surface-200-700-token rounded-container-token py-4 hover:scale-105 hover:shadow-md hover:cursor-pointer"
      >
        <p>{item.id}</p>
        <p>{item.name}</p>
        <!--        <svelte:component this={item.icon} class={`text-2xl ${item.color}`} />-->
        <div class="text-xs">{item.title}</div>
      </div>
    {/each}
  </div>
</div>