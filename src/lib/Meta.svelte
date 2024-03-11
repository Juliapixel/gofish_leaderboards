<script lang="ts">
    export let description: string;
    export let title: string;
    export let image: string | undefined = undefined;
</script>

<svelte:head>
    <meta name="description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <title>{title}</title>
    {#if image}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
    {:else}
        <meta name="twitter:card" content="summary" />
    {/if}
</svelte:head>
