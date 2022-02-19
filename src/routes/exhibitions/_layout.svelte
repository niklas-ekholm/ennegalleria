<!-- exhibitions/_layout.svelte -->

<script>
  export let title
  export let start
  export let end
</script>

<style>
	.body {
		margin-top: 39vw;
	}
</style>

<content>
<p>
	{start} — {end}
</p>
<h2>
  {title}
</h2>
  
<br>
<br>
<br>

<div class="body">
	<slot />
</div>
</content>