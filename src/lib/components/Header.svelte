<!-- Header.svelte -->
<style>
	header {
		position: fixed;
		top: 0;
		height: 10vh;
		margin: 0;
		padding: 0.5vw 0;
		width: 100vw;
		color: hsl(33, 100%, 50%);;
		background: #ff7b00;
		animation: color 18s infinite linear;
	}

	nav {
		position: fixed;
		top: 0;
		margin: 0;
		padding: 0;
		display: flex;
	}

	ul {
		text-align: left;
		width: 100vw;
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		justify-content: space-between;
		padding-inline-start: 0em;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

</style>
<header>
	<nav>
		<ul>
			<li><a href="/">/ˈenːeˣ/</a></li>·
			<li><a href="/exhibitions">exhibitions</a></li>·
			<li><a href="/info">info</a></li>
		</ul>
	</nav>
</header>
