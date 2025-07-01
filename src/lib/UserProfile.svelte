<script lang="ts">
    import AsyncMarkdownReq from "./AsyncMarkdownReq.svelte";

    export let id: string | number;
</script>

<AsyncMarkdownReq
    url={`https://raw.githubusercontent.com/blableblup/gofish/refs/heads/main/leaderboards/global/profiles/${id}.md`}
/>
