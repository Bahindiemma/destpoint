<script>
    import {addLuggage} from "../lib/luggage.js";
    import {getAllLuggage} from "../lib/luggage.js";
    import {writable} from "svelte/store";
    import {persist_store} from "../../static/persist_store.js";

    const searchedToken = writable({})
    const current_token = persist_store('current_token',"")

    // let promise = getAllLuggage();

    import { all_luggage } from '../lib/luggage.js'

    $: items = $all_luggage

    $: console.log(items)
    $: console.log(typeof items)

    getAllLuggage()

    const getLuggageByTokenStore = (items) => {

        if(items){
            let tokenMatch = items.filter( obj => {
                return obj.luggage_token === $current_token
            })[0]

            searchedToken.set(tokenMatch)
            console.log("Hi")
            console.log(tokenMatch)
        }
    }

    $: getLuggageByTokenStore(items)

    const getLuggageByToken = (e) => {

        const data = new FormData(e.target);

        const luggage_token = data.get('luggage_token');

        current_token.set(luggage_token)

        let tokenMatch = items.filter( obj => {
            return obj.luggage_token === luggage_token
        })[0]

        console.log(luggage_token)

        searchedToken.set(tokenMatch)
    }
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<h3>Search Token</h3>
<form method="post" on:submit|preventDefault={getLuggageByToken}>
    <input type="text" name="luggage_token" placeholder="Enter Ticket ID" required/>
    <button type="submit">Get Token</button>
</form>
Current Token: {$current_token}
<br><br>

{#if typeof $searchedToken !== "undefined" && typeof $searchedToken.itemName !== "undefined"}
    Luggage: {$searchedToken.itemName}
{/if}

<h3>Register Luggage</h3>
<form method="post" on:submit|preventDefault={addLuggage}>
    <input type="text" name="itemName" placeholder="Name of Item(s)" required/>
    <input type="text" name="senderPoint" placeholder="senderPoint" required/>
    <input type="text" name="destPoint" placeholder="destPoint" required/>

    <input type="text" name="senderName" placeholder="Name of Sender" required/>
    <input type="number" name="senderPhone" placeholder="Sender Telephone" required/>
    <input type="email" name="senderEmail" placeholder="Sender Email"/>

    <input type="text" name="receiverName" placeholder="Name of Receiver" required/>
    <input type="number" name="receiverPhone" placeholder="Receiver Telephone" required/>
    <input type="email" name="receiverEmail" placeholder="receiver Email"/>

    <input type="hidden" name="driver_id" value="2"/>
    <input type="hidden" name="bus_owner_id" value="1"/>

    <button type="submit">Register Luggage</button>
</form>

<ul>
    {#if items.length > 0}
        {#each items as item}
            <li>{item.itemName}: {item.luggage_token}</li>
        {/each}
    {/if}
</ul>
