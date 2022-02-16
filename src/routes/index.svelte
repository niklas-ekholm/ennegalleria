<script context="module"> // Runs before the component is created
  export const load = async ({ fetch }) => {
		const exhibitions = await fetch('api/exhibitions.json')
		const allExhibitions = await exhibitions.json()
		
		return {
			props: {
				exhibitions: allExhibitions
			}
		}
    
  }
</script>

<script> // This is the "normal" client-side script
	import Enne from '/src/routes/Enne.md' 
	export let exhibitions

</script>



{#each exhibitions as exhibition}
	{#if exhibition.meta.start == "2022-02-24" }
	<a href="{exhibition.path}">
		<em>upcoming exhibition</em>
		<h1>{exhibition.meta.title}</h1>
		<p>{exhibition.meta.start} — {exhibition.meta.end}</p>
		<br>
	</a>
	{/if}
{/each}


<Enne />