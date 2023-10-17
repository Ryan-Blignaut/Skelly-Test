<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
    <div class="space-y-10 text-center flex flex-col items-center">

        <Accordion autocollapse class="card p-8 text-token">
            <AccordionItem open>
                <!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
                <svelte:fragment slot="summary">Die is pis cool</svelte:fragment>
                <svelte:fragment slot="content">trust my, die is impressive en dynamic en confusing</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
                <svelte:fragment slot="summary">classes</svelte:fragment>
                <svelte:fragment slot="content">hoe de bliksem gebruik mens classes?? ek is so confused</svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
                <svelte:fragment slot="summary">docs</svelte:fragment>
                <svelte:fragment slot="content">vind fokkol in docs maar sal uit figure</svelte:fragment>
            </AccordionItem>
        </Accordion>

        <button type="button" class="btn variant-filled-surface"><a href="/">Home</a></button>

    </div>
</div>



