<script lang="ts">
	export let link = '#';
	export let target = '_self';
	$: outline = $$props.outline
		? 'border text-emerald-400 border-emerald-400 hover:bg-emerald-100 hover:dark:bg-transparent'
		: 'bg-emerald-400 text-slate-950 hover:bg-emerald-500 hover:dark:bg-emerald-500';
</script>

<a
	data-sveltekit-data="tap"
	href={link}
	{target}
	class="text-button-medium relative flex h-10 min-w-16 items-center justify-center gap-x-2 text-nowrap rounded-md px-3 py-3 transition duration-150
    focus:outline-none focus-visible:outline-none active:bg-emerald-400 disabled:bg-gray-400 disabled:text-gray-500 md:h-12 disabled:dark:bg-gray-700 disabled:dark:text-gray-500 {outline}"
>
	<slot />
</a>
