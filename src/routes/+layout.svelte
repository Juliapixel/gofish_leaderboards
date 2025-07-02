<script>
    import "../app.css";
</script>

<div class="mx-4 lg:mx-8 my-8 lg:ml-32 lg:mr-32">
    <header>
        <a href="/" class="text-inherit font-semibold">
            <h1 class="mb-4 mt-8">unofficial gofish leaderboards! 🎣 🤩 🏆</h1>
        </a>
        <hr class="mb-4 mt-8" />
    </header>
    <main>
        <slot />
    </main>
    <footer class="mb-12 mt-32">
        <p>
            gofish by <a href="https://twitch.tv/breadworms">breadworms</a>
        </p>
        <p>
            website source code <a href="https://github.com/Juliapixel/gofish_leaderboards">here</a>
        </p>
        <p>
            data sourced from <a href="https://github.com/blableblup/gofish">here</a>
        </p>
        <p class="text-center mt-8 text-neutral-500">
            {">~<"}
        </p>
    </footer>
</div>
