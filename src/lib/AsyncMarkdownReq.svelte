<script lang="ts">
    import { marked, Renderer } from "marked";
    import { slide } from "svelte/transition";

    export let url: string;

    async function request(url: string): Promise<string> {
        let res = await fetch(url);
        let md = await res.text();
        return md;
    }

    const tableDiver: Partial<Renderer> = {
        tablecell(content, _flags) {
            return `<td><div class="flex flex-row gap-1.5">${content}</div></td>`;
        }
    };

    marked.use({ renderer: tableDiver });
</script>

<div>
    {#await request(url)}
        <!-- yea -->
    {:then resp}
        <div transition:slide={{ duration: 250 }}>
            {@html marked.parse(resp)}
        </div>
    {/await}
</div>
