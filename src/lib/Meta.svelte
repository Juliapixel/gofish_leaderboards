<script lang="ts">
    /** description shown on embedded cards */
    export let description: string;
    /** applies both `<title>` and `<meta name="twitter:title">` */
    export let title: string;
    /**
     * applies both `<meta name="og:image">` and `<meta name="twitter:image">`
     *
     * must be a URL to static image, preferably a .png or .jpeg
     */
    export let image: string | URL | undefined = undefined;
</script>

<!--
@component
Modifies the `<head>` of the document to add embed card info to the current page
-->

<svelte:head>
    <meta name="description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <title>{title}</title>
    {#if image}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={String(image)} />
        <meta property="og:image" content={String(image)} />
    {:else}
        <meta name="twitter:card" content="summary" />
    {/if}
</svelte:head>
