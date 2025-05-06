<script>
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import Icon from './Icon.svelte';

	export let id;
	export let title;
	export let subTitle = '';
	let isHovered = false;
	let isFocused = false;

	const active = getContext('context');

	$: isCurrentActive = $active === id;

	const onClickHandler = () => {
		if (isCurrentActive) {
			$active = null;
		} else {
			$active = id;
		}
	};
</script>

<div
	class="
      rounded-sm
      border
      border-slate-100
      dark:border-slate-900
  "
>
	<button
		on:click={onClickHandler}
		on:mouseenter={() => (isHovered = true)}
		on:mouseleave={() => (isHovered = false)}
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
		class="flex w-full items-center p-4 text-left focus:outline-none"
	>
		<div class="w-full">
			<div
				class="mb-1 text-right font-semibold transition md:text-sm md:font-bold"
				class:text-emerald-400={isHovered || isFocused}
			>
				<span
					class="inline-block border-b-2 border-transparent transition"
					class:border-opacity-50={isFocused}
					class:border-emerald-300={isFocused}
				>
					{title}
				</span>
			</div>
			{#if !!subTitle}
				<div class="text-gray-400 md:text-sm">
					{subTitle}
				</div>
			{/if}
		</div>
		<div
			class="w-8 transform transition"
			class:rotate-180={isCurrentActive}
			class:text-emerald-400={isHovered || isFocused}
		>
			<Icon name="arrowUp" />
		</div>
	</button>

	{#if isCurrentActive}
		<div class="mt-4 px-4 pb-4" transition:slide>
			<slot />
		</div>
	{/if}
</div>
