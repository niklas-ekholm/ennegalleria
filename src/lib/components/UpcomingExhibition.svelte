
<!-- Tried to make it dynamic, but does not work. probably routing problem-->

<script context="module"> // Runs before the component is created
  export const load = async ({ fetch }) => {
		const exhibitions = await fetch('$src/routes/api/exhibitions.json')
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
  let src = '/static/assets/mouth.jpg';
	let alt = 'Image';
</script>


<style>
	.featured {
		margin-bottom: 33vh;
	}

	img {
		z-index: -99999;
		position: fixed;
		top: 6vw;
		right: 0;
		margin: 0;
		max-width: 75vw;
		max-height: 75vh;
	}
</style>

<img {src} alt="{alt}">

<div class="featured">
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
</div>