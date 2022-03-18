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
  let src = 'https://i.imgur.com/GibN0sp.jpg';
	let alt = 'Image';
</script>

<style lang="scss">
	.upcoming {
		position: fixed;
		width: 100vw;
		bottom: 27.5vw;
		@media only screen and (orientation: landscape) {
			position: absolute;
			top: 19.5vw;
		}
	}
	
	img {
		z-index: -99999;
		position: absolute;
		bottom: 8vw;
		right: 0;
		margin: 0;
		width: 50vw;
		opacity: 70%;
		@media only screen and (orientation: landscape) {
			top: 39vw;
	}

	}
</style>

<content>
		<a href="/info"><h1>Enne·Galleria</h1></a>
</content>

<div class="upcoming"> 
	{#each exhibitions as exhibition}
	{#if exhibition.meta.start == "2022-02-24" }
	<a href="{exhibition.path}">
		<p>previous {exhibition.meta.start} — {exhibition.meta.end}</p>
		<h2>{exhibition.meta.title}</h2>
		<br>
	</a>
	{/if}
	{/each}
</div>

<img {src} alt="{alt}">