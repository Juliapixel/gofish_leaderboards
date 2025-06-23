<script lang="ts">
    import { dev } from "$app/environment";
    import { USER_MAP } from "$lib";
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

    let markedSetting = USER_MAP.then((map) => {
        // TailwindCSS makes img elements have display: block for *some* reason so
        // this fixes it in this very specific instance ehehe
        const imgFixer: Partial<Renderer> = {
            image(href, title, text) {
                return `<img src=${href} title=${title ?? text} alt=${text} style="display: inline-block; max-width: none;" />`;
            },
            tablecell(content, flags) {
                // TODO: modify the html
                // const parser = new DOMParser()
                // const doc = parser.parseFromString(content, "text/html")
                const elem = flags.header ? "th" : "td"
                let maybeLogin = content.trim().replace(/\*$/, "")
                if (map.get(maybeLogin)) {
                    content = `<a href="/profile?user=${maybeLogin}">${content}</a>`
                }
                return `<${elem}>${content}</${elem}>`
            },
        };

        marked.use({ renderer: imgFixer });
    });


</script>

{#await Promise.all([request(url), markedSetting])}
    <div>
        Loading...
    </div>
{:then [resp, _]}
    <div transition:slide={{ duration: 250 }}>
        {@html marked.parse(resp)}
    </div>
{:catch e}
    {#if dev}
        <div class="text-red-400">{e}</div>
    {/if}
{/await}
