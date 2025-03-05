<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<style>
	@font-face {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		src: url('/fonts/Ubuntu-Regular.ttf');
		font-weight: normal;
		font-style: normal;
	}
</style>

{@render children()}

<div class="border-amber-400 border-4 flex h-screen items-center justify-center">
	<div class = "border-b-emerald-800 border-4 flex-row flex w-3/5 p-3 relative">
		<div class="w-2/5 flex flex-col border-2 p-5">
			<div class="flex flex-row items-center p-2">
				<div class="w-12 h-12 p-2 flex items-center justify-center rounded-full border-3 border-cyan-200 text-lg font-bold">1</div>
				<div class="flex flex-col p-3">
					<div>STEP 1</div>
					<div>YOUR INFO</div>
				</div>
			</div>
			<div class="flex flex-row items-center p-2">
				<div class="w-12 h-12 p-2 flex items-center justify-center rounded-full border-3 border-cyan-200 text-lg font-bold">2</div>
				<div class="flex flex-col p-3">
					<div>STEP 2</div>
					<div>SELECT PLAN</div>
				</div>
			</div>
			<div class="flex flex-row items-center p-2">
				<div class="w-12 h-12 p-2 flex items-center justify-center rounded-full border-3 border-cyan-200 text-lg font-bold">3</div>
				<div class="flex flex-col p-3">
					<div>STEP 3</div>
					<div>ADD-ONS</div>
				</div>
			</div>
			<div class="flex flex-row items-center p-2">
				<div class="w-12 h-12 p-2 flex items-center justify-center rounded-full border-3 border-cyan-200 text-lg font-bold">4</div>
				<div class="flex flex-col p-3">
					<div>STEP 4</div>
					<div>SUMMARY</div>
				</div>
			</div>
		</div>
		<div class="w-3/5 flex justify-center border-2 flex-col p-6">
			<div class="flex flex-col">
				<div>
					<h2>Personal Info</h2>
					<div>Please provide your name, email address, and phone number</div>
				</div>
				<div>
					<div>Name</div>
					<div>
						<input type="text">
					</div>
				</div>
				<div>
					<div>Email Address</div>
					<div><input type="text"></div>
				</div>
				<div>
					<div>Phone Number</div>
					<div><input type="text"></div>
				</div>
			</div>
			<div class="flex flex-row items-center justify-between">
				<div>Go Back</div>
				<div><button class="p-2 bg-blue-700 text-white rounded-md">Next Step</button></div>
			</div>
		</div>
	</div>
</div>
