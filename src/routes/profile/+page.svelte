<script lang="ts">
    import { browser } from "$app/environment";
    import { USER_MAP } from "$lib";
    import UserProfile from "$lib/UserProfile.svelte";

    const urlParams = browser ? new URLSearchParams(location.search) : new URLSearchParams();
    const user = urlParams.get("user")

    async function getUserInfo(user: string) {
        let id = (await USER_MAP).get(user)
        const resp = await fetch(`https://raw.githubusercontent.com/blableblup/gofish/refs/heads/main/leaderboards/global/profiles/${id}.json`)
        if (resp.ok) {
            return await resp.json()
        } else {
            return
        }
    }
</script>

{#if user}
    {#await getUserInfo(user)}
        Loading...
    {:then userInfo}
        <UserProfile userData={userInfo} />
    {/await}
{:else}
    <a href="/">Go back</a>
{/if}
