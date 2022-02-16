<!-- src/routes/exhibitions/index.svelte -->

<style>
	ul {
		list-style-type: none;
		padding: 0;
		margin: 1vw 0;
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

<ul>
	{#each exhibitions as exhibition}
	<li>
		<a href={exhibition.path}><h1> {exhibition.meta.title} </h1> {exhibition.meta.date}
		</a>
	</li>
	<br/>
	{/each}
</ul>	
