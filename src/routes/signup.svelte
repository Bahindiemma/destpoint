<script>
	import {isLoggedIn,loginUser,logoutUser} from '../../static/UserAuth.js'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div id="login-box">
	<div class="left">
		{#if !$isLoggedIn}
			<h1 id="status">login</h1>
			<input type="text" id="email" name="email" placeholder="email" />
			<input
					type="password"
					id="password"
					name="password"
					placeholder="password"
			/>
		{/if}


		{#if $isLoggedIn}
			<button type="button" on:click={logoutUser}>Logout</button>
		{:else}
			<button type="button" on:click={loginUser}>Login</button>
		{/if}
	</div>
</div>