<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<p>This is the data we got {JSON.stringify(data)}</p>
<div class="">
  <div class="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
    {#each data.rows as item}

      <a href="/fruit/{item.id}" class="card card-hover overflow-hidden">
        <header>
          <img
            class="bg-black/50 w-full"
            src="data:image/PNG;base64:{item.image}"
            alt="" />

        </header>
        <!--<section class="p-4">(content)</section>-->
        <div class="p-4 space-y-4">
          <h6 class="h6" data-toc-ignore>Announcements</h6>
          <h3 class="h3" data-toc-ignore>{item.title}</h3>
          <article>
            <p>
              {item.description}
            </p>
          </article>
        </div>
        <hr class="opacity-50" />
        <footer class="p-4 flex justify-start items-center space-x-4">
          <!--        <Avatar src={getImageLink({ id: 'YOErFW8AfkI', w: 32, h: 32 })} width="w-8" />-->
          <div class="flex-auto flex justify-between items-center">
            <h6 class="font-bold" data-toc-ignore>By Alex</h6>
            <small>On {new Date().toLocaleDateString()}</small>
          </div>
        </footer>
      </a>
    {/each}
  </div>

</div>