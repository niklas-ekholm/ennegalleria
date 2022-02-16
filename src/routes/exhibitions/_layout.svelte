<!-- exhibitions/_layout.svelte -->

<script>
  export let title
  export let date
</script>

<h1>
  {title}
</h1>
<p>
  {date}
</p>
  

<br>

<slot />
