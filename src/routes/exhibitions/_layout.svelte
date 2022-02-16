<!-- exhibitions/_layout.svelte -->

<script>
  export let title
  export let start
  export let end
  // let src = '/static/assets/placeholder.svg';
	// let alt = 'Image';
</script>

<!-- <img {src} alt="{alt}"> -->


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
