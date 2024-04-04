<script lang="ts">
    import AsyncMarkdownReq from "./AsyncMarkdownReq.svelte";

    export let folder: string;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <!-- this is not a hack shut up -->
    {#if folder != "global"}
        <div>
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/leaderboardfish.md"
            />
        </div>
        <div>
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/leaderboardtotalcount.md"
            />
        </div>
        <div>
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/leaderboardtrophies.md"
            />
        </div>
    {/if}
    <div>
        <AsyncMarkdownReq
            url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/leaderboardtype.md"
        />
    </div>
    <div>
        <AsyncMarkdownReq
            url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboards/{folder}/leaderboardweight.md"
        />
    </div>
</div>
