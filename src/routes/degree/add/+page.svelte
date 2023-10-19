<script lang="ts">
  import { FileDropzone } from "@skeletonlabs/skeleton";

  /*
    const uploadForm = document.querySelector('.upload')
    uploadForm.addEventListener('submit', function(e) {
      e.preventDefault()
      let file = e.target.uploadFile.files[0]
    })
  */
  import type { PageData } from "./$types";

  export let data: PageData;
</script>
<p>This is the data we got {JSON.stringify(data)}</p>

<form method="POST" enctype="multipart/form-data">
  <div class="card p-4 w-full text-token space-y-4">
    <label class="label">
      <span>Input</span>
      <input name="title" class="input" type="text" placeholder="title" />
    </label>
    <label class="label">
      <span>Input</span>
      <input name="description" class="input" type="text" placeholder="description" />
    </label>
    <label class="label">
      <span>Input</span>
      <input name="requirements" class="input" type="text" placeholder="requirements" />
    </label>
    <div class="space-y-4 w-full">
      <FileDropzone name="file" type="file" accept="image/*">
        <svelte:fragment slot="lead"><i class="fa-solid fa-file-arrow-up text-4xl" /></svelte:fragment>
        <svelte:fragment slot="meta">PNG, JPG, and GIF allowed.</svelte:fragment>
      </FileDropzone>
    </div>
    <div class="flex justify-end">
      <button class="upload btn btn-primary">Submit</button>
    </div>
  </div>
</form>

