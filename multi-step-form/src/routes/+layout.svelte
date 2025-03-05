<script lang="ts">
	import '../app.css';

</script>

<style>
	@font-face {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		src: url('/fonts/Ubuntu-Regular.ttf');
		font-weight: normal;
		font-style: normal;
	}
</style>

 <slot />

<div class="border-amber-400 border-4 flex h-screen items-center justify-center bg-blue-100">
	<div class =  "flex-row flex w-6/10 p-3 relative justify-center bg-white rounded-xl">
		<div class="w-4/10 flex flex-col border-2 p-5 bg-[url(/images/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat text-white grow rounded-xl">
			<div class="flex flex-row items-center p-2">
				<div class="w-10 h-10 p-1 flex items-center justify-center rounded-full border-2 border-cyan-200 text-sm font-bold bg-cyan-200 text-blue-900">1</div>
				<div class="flex flex-col p-2 font-bold text-sm">
					<div class="text-gray-300">STEP 1</div>
					<div class="">YOUR INFO</div>
				</div>
			</div>
			<div class="flex flex-row items-center p-2">
				<div class="w-10 h-10 p-1 flex items-center justify-center rounded-full border-2 border-cyan-200 text-sm font-bold">2</div>
				<div class="flex flex-col p-2 font-bold text-sm">
					<div class="text-gray-300">STEP 2</div>
					<div class="">SELECT PLAN</div>
				</div>
			</div>
			<div class="flex flex-row items-center p-2">
				<div class="w-10 h-10 p-1 flex items-center justify-center rounded-full border-2 border-cyan-200 text-sm font-bold">3</div>
				<div class="flex flex-col p-2 font-bold text-sm">
					<div class="text-gray-300">STEP 3</div>
					<div class="">ADD-ONS</div>
				</div>
			</div>
			<div class="flex flex-row items-center p-2">
				<div class="w-10 h-10 p-1 flex items-center justify-center rounded-full border-2 border-cyan-200 text-sm font-bold">4</div>
				<div class="flex flex-col p-2 font-bold text-sm">
					<div class="text-gray-300">STEP 4</div>
					<div class="">SUMMARY</div>
				</div>
			</div>
		</div>
		<div class="w-full flex justify-center flex-col px-20 text-blue-900">
			<div class="flex flex-col">
				<div class="py-3 my-3 mt-10">
					<h2 class="text-4xl font-bold">Personal Info</h2>
					<div class=" text-gray-400">Please provide your name, email address, and phone number</div>
				</div>
				<div class="py-3">
					<div class=" mb-1">Name</div>
					<input type="text" class="rounded-lg w-full" required>
				</div>
				<div class="py-3">
					<div class=" mb-1">Email Address</div>
					<input type="text" class="rounded-lg w-full" required>
				</div>
				<div class="py-3">
					<div class=" mb-1">Phone Number</div>
					<input type="text" class="rounded-lg w-full" required>
				</div>
			</div>
			<div class="flex flex-row items-center justify-between mt-25 mb-6">
				<div><a href="">Go Back</a></div>
				<div><input type="submit" class="p-3 bg-blue-700 text-white rounded-md hover:cursor-pointer w-30" value="Next Step"></div>
			</div>
		</div>
	</div>
</div>
