<script lang="ts">
    import { browser } from "$app/environment";
    import { replaceState } from "$app/navigation";
    import { page } from "$app/stores";
    import Leaderboards from "$lib/Leaderboards.svelte";
    import Meta from "$lib/Meta.svelte";
    import { onMount } from "svelte";

    let selected: string = "global";
    let loaded = false;
    onMount(() => {
        let stored = localStorage.getItem("channel");
        let params = new URLSearchParams(window.location.search);
        if (params.has("channel")) {
            selected = params.get("channel") as string;
        } else {
            selected = stored === null ? selected : (stored as string);
        }
        loaded = true;
    });

    function changeParams(this: HTMLSelectElement) {
        let params = new URLSearchParams(window.location.search);
        params.set("channel", this.value);
        let url = window.location.pathname + "?" + String(params);
        replaceState(url, $page.state);
    }

    function storeChannel(this: HTMLSelectElement) {
        localStorage.setItem("channel", this.value);
    }

    /** only those which have individual leadeboards */
    const channels = [
        "global",
        "aquaismissing",
        "breadworms",
        "coolishdanker",
        "d_egree",
        "dizzy",
        "e1llas",
        "jellyuh",
        "julialuxel",
        "ovrht",
        "omie",
        "pokirule",
        "psp1g",
        "ryanpotat",
        "swormbeard",
        "vaiastol",
        "wuh6",
        "yopego",
        "xriggby"
    ];
</script>

<Meta
    description="Leaderboards for gofish"
    title="unofficial gofish leaderboards"
    image="/favicon.png"
/>

<div class="mx-8 my-8 lg:ml-32 lg:mr-32">
    <div class="lg:mx-96 p-8 border-2 rounded-lg">
        <h1 class="mb-4 text-4xl text-white">The bot is currently down.</h1>
        <h2 class="text-xl mb-2">A message from breadworms</h2>
        <p class="mb-2">
            Hi, I'm breadworms, the author of GO FISH GAME. My Twitch account has been indefinitely
            suspended and I've submitted an appeal. The account gofishgame was suspended in tandem.
            Aside from GO FISH GAME I'm a streamer and am hoping to have the situation resolved as
            soon as possible.
        </p>
        <p class="mb-2">
            You can contact me @breadworms on Discord or
            <a href="https://x.com/breadworms">Twitter</a>
            if you have any questions.
        </p>
    </div>
    <h1 class="mb-4 mt-8">unofficial gofish leaderboards! 🎣 🤩 🏆</h1>
    <span>channel: </span>
    <select
        bind:value={selected}
        on:change={changeParams}
        on:change={storeChannel}
        class="mt-5 mb-5"
    >
        {#each channels as channel}
            <option value={channel}>{channel}</option>
        {/each}
    </select>

    {#if loaded}
        <Leaderboards folder={selected} />
    {/if}
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
