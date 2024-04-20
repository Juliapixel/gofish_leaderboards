<script lang="ts">
    import { marked } from "marked";

    export let url: string;

    async function request(url: string): Promise<string> {
        let res = await fetch(url);
        let md = await res.text();
        return md;
    }
</script>

<div>
    {#await request(url)}
        Loading...
    {:then resp}
        {@html marked.parse(resp)}
    {/await}
</div>
