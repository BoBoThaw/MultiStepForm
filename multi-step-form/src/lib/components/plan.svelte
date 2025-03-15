<script lang="ts">
    export let selectedPlan = "Arcade";
    import Toggle from "svelte-toggle";
    export let toggled = false;
</script>

<div class="flex flex-row w-full justify-between relative gap-8">
    <label class="flex flex-col border border-gray-300 rounded-xl py-5 px-3 basis-1/3 hover:cursor-pointer"
    class:border-gray-300={selectedPlan !== "Arcade"}
    class:border-purple-500={selectedPlan === "Arcade"}
    class:bg-blue-50={selectedPlan==="Arcade"}>
        <img src="images/icon-arcade.svg" alt="Arcade Icon" class="mb-12 h-12 w-12">
        <div class="font-bold text-lg">Arcade</div>
        <div class="text-gray-400 text-sm">{toggled ? '$90/yr' : '$9/mo'}</div>
        <div class="text-sm" class:hidden={toggled===false}>2 months free</div>
        <input type="radio" class="hidden" value="Arcade" name="plan" bind:group={selectedPlan}>
    </label>
    <label class="flex flex-col border border-gray-300 rounded-xl py-5 px-3 basis-1/3 hover:cursor-pointer"
    class:border-gray-300={selectedPlan !== "Advanced"}
    class:border-purple-500={selectedPlan === "Advanced"}
    class:bg-blue-50={selectedPlan==="Advanced"}>
        <img src="images/icon-advanced.svg" alt="Advanced Icon" class="mb-12 h-12 w-12">
        <div class="font-bold text-lg">Advanced</div>
        <div class="text-gray-400 text-sm">{toggled ? '$120/yr' : '$12/mo'}</div>
        <div class="text-sm" class:hidden={toggled===false}>2 months free</div>
        <input type="radio" class="hidden" value="Advanced" name="plan" bind:group={selectedPlan}>
    </label>
    <label class="flex flex-col border border-gray-300 rounded-xl py-5 px-3 basis-1/3 hover:cursor-pointer"
    class:border-gray-300={selectedPlan !== "Pro"}
    class:border-purple-500={selectedPlan === "Pro"}
    class:bg-blue-50={selectedPlan==="Pro"}>
        <img src="images/icon-pro.svg" alt="Pro Icon" class="h-12 w-12 mb-12">
        <div class="font-bold text-lg">Pro</div>
        <div class="text-gray-400 text-sm">{toggled ? '$150/yr' : '$15/mo'}</div>
        <div class="text-sm" class:hidden={toggled===false}>2 months free</div>
        <input type="radio" class="hidden" value="Pro" name="plan" bind:group={selectedPlan}>
    </label>
</div>
<div class="flex flex-row w-full justify-center bg-blue-50 py-3 mt-10 rounded-lg">
    <div class="mx-5">Monthly</div>
    <Toggle
        label=""
        hideLabel
        switchColor="#eee"
        toggledColor="#1c398e"
        untoggledColor="#1c398e"
        bind:toggled
    />
    <div class="mx-5">Yearly</div>
</div>