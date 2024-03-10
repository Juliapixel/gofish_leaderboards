<script lang="ts">
    import AsyncMarkdownReq from "$lib/AsyncMarkdownReq.svelte";
</script>

<h1 class="ml-32 mb-4 mt-8">gofish leaderboards woaow!</h1>

<div class="ml-32 mr-32">
    <div class="flex flex-row">
        <div class="w-1/2">
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardfish.md"
            />
        </div>
        <div class="w-1/2">
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardtotalcount.md"
            />
        </div>
    </div>
    <hr />
    <div class="flex flex-row">
        <div class="w-1/2">
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardtrophies.md"
            />
        </div>
        <div class="w-1/2">
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardtype.md"
            />
        </div>
    </div>
    <hr />
    <div class="flex flex-row shrink">
        <div class="w-1/2">
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardweight.md"
            />
        </div>
    </div>
</div>
<footer class="mt-12 mb-8 ml-32">
    gofish by <a href="https://twitch.tv/breadworms">breadworms</a>
    <br />
    source <a href="https://github.com/Juliapixel/gofish_leaderboards">here</a>
</footer>
