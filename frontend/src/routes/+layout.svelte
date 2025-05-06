<script lang="ts">
	import AppHeader from '$lib/components/AppHeader.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen overflow-hidden bg-slate-100 text-xs md:text-base dark:bg-slate-900">
	<div class="h-30 relative z-50 w-full md:h-40">
		<AppHeader />
	</div>
	{@render children()}
</div>
