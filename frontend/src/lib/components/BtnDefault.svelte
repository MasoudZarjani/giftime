<script lang="ts">
	$: outline = $$props.outline
		? 'border text-emerald-400 border-emerald-400 hover:bg-emerald-100 hover:dark:bg-transparent'
		: 'bg-emerald-400 text-slate-950 hover:bg-emerald-500 hover:dark:bg-emerald-500';
	$: rounded = $$props.rounded ? 'rounded-full h-12 w-12 md:w-14' : 'rounded-md h-10 min-w-16';
	$: isLoading = $$props.rounded ? 'transition ease-in-out duration-150 cursor-not-allowed' : '';
</script>

<button
	on:click
	class="text-button-medium relative flex items-center justify-center gap-x-2 text-nowrap px-3 transition duration-150 focus:outline-none
    focus-visible:outline-none active:bg-emerald-400 disabled:bg-gray-400 disabled:text-gray-500 disabled:dark:bg-gray-700 disabled:dark:text-gray-500 {outline} {rounded} {isLoading} {$$props.class}"
	disabled={$$props.isLoading}
>
	{#if $$props.isLoading}
		<div class="flex items-center justify-center">
			درحال پردازش...
			<svg
				class="-ml-1 mr-3 h-5 w-5 animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				>
				</path>
			</svg>
		</div>
	{:else}
		<slot />
	{/if}
</button>
