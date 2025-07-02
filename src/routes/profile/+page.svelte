<script lang="ts">
    import { browser } from "$app/environment";
    import { USER_MAP } from "$lib";
    import UserProfile from "$lib/UserProfile.svelte";

    const urlParams = browser ? new URLSearchParams(location.search) : new URLSearchParams();
    let user = urlParams.get("user")?.toLowerCase();
    let searchedUser = user ?? "";

    async function getUserID(user: string): Promise<number | undefined> {
        return (await USER_MAP).get(user);
    }

    function setUser(value: string) {
        user = value.toLowerCase();
        let url = new URL(location.href);
        let search = new URLSearchParams(location.search);
        search.set("user", value.toLowerCase());
        url.search = search.toString();
        window.history.replaceState(null, "", url);
    }

    let timeout: number | undefined;
    function debounce(fn: () => any): void {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn();
        }, 500);
    }
</script>

<label for="user_search" class="text-lg">Search user:</label>
<input
    id="user_search"
    class="bg-neutral-300 text-black p-0.5 rounded my-6"
    type="text"
    bind:value={searchedUser}
    on:keydown={() => {
        debounce(() => {
            setUser(searchedUser);
        });
    }}
/>

{#if user}
    {#await getUserID(user)}
        Loading...
    {:then userId}
        {#if userId}
            <UserProfile id={userId} />
        {:else}
            <h2 class="text-red-400">No user with that name</h2>
            <a href="/">Go back</a>
        {/if}
    {/await}
{:else}
    <h1 class="text-neutral-800 text-center mt-12">Nothing...</h1>
{/if}
