<script lang="ts">
	import { page } from '$app/state';
</script>

<h1>{page.error ? page.error.message : 'An unknown error occurred'}</h1>
