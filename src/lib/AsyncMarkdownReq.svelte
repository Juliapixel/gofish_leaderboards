<script lang="ts">
    import { dev } from "$app/environment";
    import { marked, type Renderer } from "marked";
    import { slide } from "svelte/transition";

    export let url: string;

    async function request(url: string): Promise<string> {
        let res = await fetch(url);
        if (!res.ok) {
            let err = new Error(`request to ${url} failed: ${res.status}`);
            if (dev) {
                console.warn(err);
            }
            throw err;
        }
        let md = await res.text();
        return md;
    }

    // TailwindCSS makes img elements have display: block for *some* reason so
    // this fixes it in this very specific instance ehehe
    const imgFixer: Partial<Renderer> = {
        image(href, title, text) {
            return `<img src=${href} title=${title ?? text} alt=${text} style="display: inline-block; max-width: none;" />`;
        }
    };

    marked.use({ renderer: imgFixer });
</script>

{#await request(url)}
    <!-- yea -->
{:then resp}
    <div transition:slide={{ duration: 250 }}>
        {@html marked.parse(resp)}
    </div>
{:catch}
    <!-- nothing if it errors -->
{/await}
