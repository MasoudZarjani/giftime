<script>
	import { setContext } from 'svelte';

	import { writable } from 'svelte/store';

	export let active = false;

	const activeStore = writable(active);
	$: activeStore.set(active);
	$: active = $activeStore;

	setContext('context', activeStore);
</script>

<slot />
