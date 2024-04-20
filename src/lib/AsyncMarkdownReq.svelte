<script lang="ts">
    import { marked } from "marked";
    import { slide } from "svelte/transition";

    export let url: string;

    async function request(url: string): Promise<string> {
        let res = await fetch(url);
        let md = await res.text();
        return md;
    }
</script>

<div>
    {#await request(url)}
        <!-- yea -->
    {:then resp}
        <div transition:slide={{duration: 250}}>
            {@html marked.parse(resp)}
        </div>
    {/await}
</div>
