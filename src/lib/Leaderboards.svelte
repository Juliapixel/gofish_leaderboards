<script lang="ts">
    import AsyncMarkdownReq from "./AsyncMarkdownReq.svelte";

    export let folder: string;
</script>

{#if folder == "global"}
    <div class="w-fit max-w-full my-24 mx-auto">
        <AsyncMarkdownReq
            url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/chats.md"
        />
    </div>
{/if}
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
        <AsyncMarkdownReq
            url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/averageweight.md"
        />
    {/if}
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/type.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/typesmall.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/typefirst.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/typelast.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/count.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/uniquefish.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/weight.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/weight2.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/weighttotal.md"
    />
    <AsyncMarkdownReq
        url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/records.md"
    />
    {#if folder == "global"}
        <AsyncMarkdownReq
            url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/weightmouth.md"
        />
        <AsyncMarkdownReq
            url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/shiny.md"
        />
    {/if}
</div>
