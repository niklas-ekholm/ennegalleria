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
  let src = 'https://i.imgur.com/dijXFly.jpeg';
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
		bottom: 18vw;
		right: 1vw;
		transform: rotate(-1.5deg);
		margin: 0;
		width: 70vw;
		@media only screen and (orientation: landscape) {
			top: 12vw;
	}

	}
</style>

<content>
<a href="/exhibitions/2">
Exhibition<br>
<br>
<br>
&emsp; Forty Three Days in Finland <br>
<br>
<br>
10 April 2022 <br>
15:00 – 18:00 <br>
<br>
<br>
Poems <br>
by Haydée Touitou <br>
<br>
Images <br>
by Hikari Nishida <br>
</a>
</content>


<!-- 
	
	yritin tehdä dynaamiseksi mutta en jaksanut tehdä loppuun
	
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
</div> -->

<a href="/exhibitions/2"><img {src} alt="{alt}"></a>