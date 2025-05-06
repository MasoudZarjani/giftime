<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';

	let currentTheme = '';

	onMount(() => {
		const userPrefersDarkMode = window.matchMedia('prefers-color-scheme: dark').matches;
		const theme = document.cookie
			.split('; ')
			.find((row) => row.startsWith('siteTheme='))
			?.split('=')[1];
		const userTheme = theme || (userPrefersDarkMode ? 'dark' : 'light');
		setTheme(userTheme);
	});

	const setTheme = (theme: string) => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		document.documentElement.dataset.theme = theme;
		document.cookie = `siteTheme=${theme};max-age=31536000;path=/`;
		currentTheme = theme;
	};
</script>

{#if currentTheme == 'light'}
	<a class="moon" href={'#'} on:click={() => setTheme('dark')}>
		<Icon name="moon" />
	</a>
{:else}
	<a class="sun" href={'#'} on:click={() => setTheme('light')}>
		<Icon name="sun" />
	</a>
{/if}
