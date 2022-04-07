<!-- src/routes/exhibitions/index.svelte -->

<style>
	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
	li {
		padding-bottom: 1vw;
	}
</style>

<script context="module"> // Runs before the component is created
  export const load = async ({ fetch }) => {
		const exhibitions = await fetch('/api/exhibitions.json')
		const allExhibitions = await exhibitions.json()
		
		return {
			props: {
				exhibitions: allExhibitions
			}
		}
    
  }
</script>

<script> // This is the "normal" client-side script
	export let exhibitions
</script>

<content>
	<ul>
		{#each exhibitions as exhibition}
		<li>
			<a href={exhibition.path}>
				<div>
					<p>{exhibition.meta.start} — {exhibition.meta.end}</p>
					<h3> {exhibition.meta.title} </h3>
				</div>
			</a>
		</li>
		<br/>
		{/each}
	</ul>	
</content>