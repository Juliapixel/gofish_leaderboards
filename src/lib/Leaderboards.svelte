<script lang="ts">
    import AsyncMarkdownReq from "./AsyncMarkdownReq.svelte";

    export let folder: string;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <!-- this is not a hack shut up -->
    {#if folder != "global"}
        <AsyncMarkdownReq
            url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/fishweek.md"
        />
        <AsyncMarkdownReq
            url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/trophy.md"
        />
    {:else}
        <AsyncMarkdownReq
            url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/rare.md"
        />
    {/if}
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/weight.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/count.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/type.md"
    />
</div>
