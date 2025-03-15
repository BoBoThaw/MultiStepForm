<script lang="ts">
	import '../app.css';
	import Step from "$lib/step/Step.svelte";
	import { page } from '$app/stores';
    export let steps = ["your info", "select plan", "add-ons", "summary"];

	$: currentStep = steps.findIndex(step => $page.url.pathname.includes(step.replace(/\s/g, "-")));

	let formData = {
		name: "",
		email: "",
		phone: "",
		plan: "",
		is_yearly: false,
		add_ons: {},
	};
</script>

<style>
	@font-face {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		src: url('/fonts/Ubuntu-Regular.ttf');
		font-weight: normal;
		font-style: normal;
	}
</style>

<div class="flex h-screen items-center justify-center bg-blue-100">
	<div class =  "flex-row flex w-6/10 p-3 relative justify-center bg-white rounded-xl">
		<div class="w-4/10 flex flex-col border-2 p-5 bg-[url(/images/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat text-white grow rounded-xl">
			<div>
				{#each steps as step, i}
					<Step
						number={i+1}
						step={step}
						active={i === currentStep}
					/>
				{/each}
			</div>
		</div>
		<div class="w-full flex justify-center flex-col px-20 text-blue-900">
			<slot {formData}></slot>
		</div>
	</div>
</div>
