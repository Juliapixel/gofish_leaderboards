<script lang="ts">
    import top_tournament from "$lib/markdown/leaderboardfish.md?raw";
    import top_count from "$lib/markdown/leaderboardtotalcount.md?raw";
    import top_trophies from "$lib/markdown/leaderboardtrophies.md?raw";
    import top_type from "$lib/markdown/leaderboardtype.md?raw";
    import top_weight from "$lib/markdown/leaderboardweight.md?raw";
    import { marked } from "marked";
</script>

<h1 class="ml-32 mb-4 mt-8">gofish leaderboards woaow!</h1>

<div class="ml-32 mr-32">
    <div class="flex flex-row">
        <div class="w-1/2">
            {@html marked.parse(top_tournament)}
        </div>
        <div class="w-1/2">
            {@html marked.parse(top_count)}
        </div>
    </div>
    <hr />
    <div class="flex flex-row">
        <div class="w-1/2">
            {@html marked.parse(top_trophies)}
        </div>
        <div class="w-1/2">
            {@html marked.parse(top_type)}
        </div>
    </div>
    <hr />
    <div class="flex flex-row shrink">
        <div class="w-1/2">
            {@html marked.parse(top_weight)}
        </div>
    </div>
</div>
<footer class="mt-12 mb-8 ml-32">
    gofish by <a href="https://twitch.tv/breadworms">breadworms</a>
    <br />
    source <a href="https://github.com/Juliapixel/gofish_leaderboards">here</a>
</footer>
