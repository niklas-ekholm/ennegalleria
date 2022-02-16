<script>

	let date = new Date();
	$: yyyy = date.getFullYear();
	$: mm = (date.getMonth() + 1).toString().padStart(2, '0');
	$: dd = date.getDate().toString().padStart(2, '0');
	
</script>

<div> 
	{yyyy}-{mm}-{dd}
</div>