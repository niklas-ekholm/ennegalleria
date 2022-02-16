<!-- Header.svelte -->
<style>
	header {
		height: 12vw;
		margin: 0;
		padding: 0.5vw 0;
		width: 100%;
		color: #ff7b00;;
		background: rgb(255, 123, 0);
		animation: color 18s infinite linear;
	}

	nav {
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
