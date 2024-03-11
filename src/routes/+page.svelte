<script lang="ts">
    import AsyncMarkdownReq from "$lib/AsyncMarkdownReq.svelte";
</script>

<div class="ml-8 mr-8 lg:ml-32 lg:mr-32">
    <h1 class="mb-4 mt-8">gofish leaderboards! 🎣 🤩 🏆</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardfish.md"
            />
        </div>
        <div>
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardtotalcount.md"
            />
        </div>
        <div>
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardtrophies.md"
            />
        </div>
        <div>
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardtype.md"
            />
        </div>
        <div>
            <AsyncMarkdownReq
                url="https://raw.githubusercontent.com/blableblup/gofish/main/leaderboardweight.md"
            />
        </div>
    </div>
    <footer class="mt-12 mb-8">
        <p>
            gofish by <a href="https://twitch.tv/breadworms">breadworms</a>
        </p>
        <p>
            website source code <a href="https://github.com/Juliapixel/gofish_leaderboards">here</a>
        </p>
        <p>
            data sourced from <a href="https://github.com/blableblup/gofish">here</a>
        </p>
        <p class="text-center mt-8 text-neutral-500">
            {">~<"}
        </p>
    </footer>
</div>
