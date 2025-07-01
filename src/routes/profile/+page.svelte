<script lang="ts">
    import { browser } from "$app/environment";
    import { USER_MAP } from "$lib";
    import UserProfile from "$lib/UserProfile.svelte";

    const urlParams = browser ? new URLSearchParams(location.search) : new URLSearchParams();
    const user = urlParams.get("user");

    async function getUserID(user: string): Promise<number | undefined> {
        return (await USER_MAP).get(user);
    }
</script>

{#if user}
    {#await getUserID(user)}
        Loading...
    {:then userId}
        {#if userId}
            <UserProfile id={userId} />
        {:else}
            <a href="/">Go back</a>
        {/if}
    {/await}
{:else}
    <a href="/">Go back</a>
{/if}
