<script lang="ts">
    import Leaderboards from "$lib/Leaderboards.svelte";
    import Meta from "$lib/Meta.svelte";
</script>

<Meta description="Leaderboards for gofish" title="gofish leaderboards" image="/favicon.png" />

<div class="ml-8 mr-8 lg:ml-32 lg:mr-32">
    <h1 class="mb-4 mt-8">gofish leaderboards! 🎣 🤩 🏆</h1>

    <Leaderboards folder="bw" />
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
