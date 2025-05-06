<script lang="ts">
	import ColorMode from './ColorMode.svelte';
	import Icon from './Icon.svelte';

	let search = '';

	function handleSearch() {}
</script>

<section>
	<div
		class="flex flex-col items-start justify-between gap-1 bg-violet-400 p-2 text-slate-50 md:flex-row md:items-center md:gap-0 dark:bg-violet-950"
	>
		<div class="flex items-center space-x-4">
			<a href="/" data-sveltekit-data="tap" class="flex items-center space-x-2">
				<enhanced:img
					src="$lib/assets/logo.png?w=1280;640;400"
					sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
					alt="لوگو گیفتایم"
					class="h-12 w-12 rounded-full"
					fetchpriority="high"
					loading="eager"
				/>
				<h1 class="text-2xl font-extrabold">گیفتایم</h1>
			</a>
		</div>
		<div class="relative order-2 w-full md:order-1 md:w-1/2 lg:w-1/3">
			<input
				bind:value={search}
				on:input={handleSearch}
				class="h-10 w-full rounded-full bg-slate-50 px-2 text-xs text-slate-900 focus:outline-none focus:ring-0 lg:px-4 lg:text-base"
				type="text"
				autocomplete="off"
				placeholder="جستجو در گیفتایم"
				aria-label="جستجو در گیفتایم"
			/>
			<Icon name="search" class="absolute left-2 top-2 h-6 w-6 text-violet-900" />
		</div>
		<div class="order-1 flex items-center space-x-4 md:order-2">
			<ColorMode />
			<a href={'#'}>
				<Icon name="user" width="2rem" height="2rem" />
			</a>
		</div>
	</div>
	<nav></nav>
</section>
