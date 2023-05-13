<script lang="ts">
	import { onMount } from "svelte";

type Animal = {
    name: string
}

type Bear = Animal & {
    honey: boolean
}
// Type Assertions
let asd:Bear = {honey: false, name: 'Qwe'}



function handleRequest(url:string, method: 'GET' | 'POST'){

}
const req = { url: "https://example.com", method: "GET" as 'GET'}
// const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method as "GET")
handleRequest(req.url, req.method)


function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

onMount(() => {
    // as
    const myCanvas1 = document.getElementById("1") as HTMLDivElement;
    // angle-bracket syntax
    const myCanvas2 = <HTMLDivElement>document.getElementById("1");
})
</script>

<div id="1">Qwe</div>