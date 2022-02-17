<!-- exhibitions/_layout.svelte -->

<script>
  export let title
  export let start
  export let end
  let src = '/static/assets/mouth.jpg';
	let alt = 'Misa Asanuma';
</script>

<style>
  img {
		z-index: -99999;
		position: fixed;
		top: 21vh;
		right: 0;
		margin: 0;
		height: 21vh;
    opacity: 70%;
	}
</style>

<img {src} alt="{alt}">

<content>
<h1>
  {title}
</h1>
<p>
  {start} — {end}
</p>
  
<br>
<br>
<br>

<slot />
</content>