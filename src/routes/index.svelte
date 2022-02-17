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
	export let exhibitions
  let src = '/static/assets/mouth.jpg';
	let alt = 'Image';
</script>

<style>
	.upcoming {
		position: fixed;
		width: 100vw;
		bottom: 14vh;
	}
	
	img {
		z-index: -99999;
		position: absolute;
		bottom: 10vh;
		right: 0;
		margin: 0;
		max-height: 33vh;
		max-width: 50vw;
		opacity: 70%;
	}
</style>

<content>
	<h1>
		<a href="/info">Enne·Galleria</a>
	</h1>
</content>

<div class="upcoming">
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

<img {src} alt="{alt}">