<!-- Header.svelte -->
<style>
	header {
		position: fixed;
		top: 0;
		height: 8vw;
		margin: 0;
		padding: 0.5vw 0;
		width: 100vw;
		color: #ff8800;;
		background: #ff7b00;
		animation: bg 18s infinite linear;
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
		color: inherit;
	}

	.ss03 {
		font-feature-settings: "ss03";
	}

</style>
<header>
	<nav>
		<ul>
			<a class="ss03" href="/"><li>/ˈenːeˣ/</li></a>·
			<a href="/exhibitions"><li>exhibitions</li></a>·
			<a href="/info"><li>info</li></a>
		</ul>
	</nav>
</header>
