

<script>
import AuthHead from "$lib/AuthHead.svelte";

import {isLoggedIn} from "../../../static/UserAuth.js";
import {signin, createAccount} from "../../lib/firebase.js";
</script>

<AuthHead />

<slot/>
