<script lang="ts">
    import { browser } from "$app/environment";
    import UserProfile from "$lib/UserProfile.svelte";

    const urlParams = browser ? new URLSearchParams(location.search) : new URLSearchParams();
    const id = urlParams.get("id")

    async function getUserInfo(id: string) {
        const resp = await fetch(`https://raw.githubusercontent.com/blableblup/gofish/refs/heads/main/leaderboards/global/profiles/${id}.json`)
        if (resp.ok) {
            return await resp.json()
        } else {
            return
        }
    }
</script>

{#if id}
    {#await getUserInfo(id)}
        Loading...
    {:then userInfo}
        <UserProfile userData={userInfo} />
    {/await}
{:else}
    <a href="/">Go back</a>
{/if}
