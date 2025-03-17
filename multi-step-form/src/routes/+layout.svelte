<script lang="ts">
	import '../app.css';
	import Step from "$lib/step/Step.svelte";
	import { page } from '$app/stores';
    export let steps = ["your info", "select plan", "add-ons", "summary"];

	$: currentStep = steps.findIndex(step => $page.url.pathname.includes(step.replace(/\s/g, "-")));
</script>

<style>
	@font-face {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		src: url('/fonts/Ubuntu-Regular.ttf');
		font-weight: normal;
		font-style: normal;
	}
</style>

<div class="flex h-screen items-center justify-center bg-blue-100 max-sm:relative">
	<div class =  "flex-row flex w-6/10 p-3 relative justify-center bg-white rounded-xl max-sm:flex-col max-sm:w-full max-sm:p-0 max-sm:h-full max-sm:rounded-none max-sm:bg-blue-100 max-sm:h-full">
		<div class="w-4/10 flex flex-col border-2 p-5 bg-[url(/images/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat text-white grow rounded-xl 
		max-sm:bg-[url(/images/bg-sidebar-mobile.svg)] max-sm:w-full max-sm:flex-row max-sm:justify-center max-sm:rounded-none max-sm:bg-center max-sm:items-start
		max-sm:absolute max-sm:top-0 max-sm:h-42">
			{#each steps as step, i}
				<Step
					number={i+1}
					step={step}
					active={i === currentStep}
				/>
			{/each}
		</div>
		<div class="w-full flex justify-center flex-col px-20 text-blue-900 max-sm:px-0 max-sm:bg-blue-100 max-sm:justify-between max-sm:h-full max-sm:mt-25">
			<slot></slot>
		</div>
	</div>
</div>
