

<script>
    import AuthHead from "$lib/AuthHead.svelte";

    import {isLoggedIn} from "../../static/UserAuth.js";
    import {signin, createAccount} from "../lib/firebase.js";
    import {page} from "$app/stores";
    const protectedPages = ["/"]

    function pageChange(page){
        // logged out
        if(!$isLoggedIn){
            if(protectedPages.includes(page.url.pathname)){
                window.location.href = "/login"
            }
        }
    }

    $: pageChange($page)
</script>

<AuthHead />

<slot/>