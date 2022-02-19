<!-- exhibitions/_layout.svelte -->

<script>
  export let title
  export let start
  export let end
</script>

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

<slot />
</content>