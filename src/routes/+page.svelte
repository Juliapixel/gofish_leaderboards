<script lang="ts">
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
        window.history.replaceState(null, "", url);
    }

    function storeChannel(this: HTMLSelectElement) {
        localStorage.setItem("channel", this.value);
    }
</script>

<Meta description="Leaderboards for gofish" title="gofish leaderboards" image="/favicon.png" />

<div class="ml-8 mr-8 lg:ml-32 lg:mr-32">
    <h1 class="mb-4 mt-8">gofish leaderboards! 🎣 🤩 🏆</h1>
    <span>channel: </span><select
        bind:value={selected}
        on:change={changeParams}
        on:change={storeChannel}
        class="mt-5 mb-5"
    >
        <option value="global">global</option>
        <option value="breadworms">breadworms</option>
        <option value="psp1g">psp1g</option>
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
