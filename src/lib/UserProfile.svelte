<script lang="ts">
    import { json } from "@sveltejs/kit";
    import { onMount } from "svelte";

    export let userData: Object;
    let dom: HTMLElement;

    function genEntries(obj: Object, root: HTMLElement, level: number): HTMLElement {
        // let dom = document.createElement("main");
        for (const [k, v] of Object.entries(obj)) {
            if (!v) {
                continue
            }
            let div = document.createElement("div")
            let heading = document.createElement("h1");
            heading.innerText = k
            div.appendChild(heading)
            if (typeof v == "string") {
                let text = document.createElement("p");
                text.innerText = v
                div.appendChild(text)
            } else if (Array.isArray(v)) {
                let list = document.createElement("ul")
                for (const i of v) {
                    let ul = document.createElement("li")
                    ul.innerText = i
                    list.appendChild(ul)
                }
                div.appendChild(list)
            } else if (typeof v == "object") {
                let newSubLevel = document.createElement("div")
                root.appendChild(genEntries(v, newSubLevel, level + 1));

                // let table = document.createElement("table")

                // let thead = document.createElement("thead")
                // let heading = thead.insertRow()
                // for (const k of Object.keys(v)) {
                //     let th = heading.insertCell()
                //     th.innerText = k
                //     heading.appendChild(th)
                // }
                // table.appendChild(thead)

                // let body = document.createElement("tbody")
                // let data_row = body.insertRow();
                // table.appendChild(body)


                // div.appendChild(table)
            }
            root.appendChild(div)
        }
        return root
    }

    onMount(() => {
        genEntries(userData, dom, 0);
    })
</script>

<main bind:this={dom}></main>
