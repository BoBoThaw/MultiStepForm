<script lang="ts">
    import Heading from "$lib/components/heading.svelte";
    import Plan from "$lib/components/plan.svelte";
    import { goto } from "$app/navigation";
    import { formData } from "$lib/store/formDataStore";
    import Toggle from "svelte-toggle";
    import { plans } from "$lib/utils/shared";
    let plansArray = Object.entries(plans);
    export let toggled = $formData.is_yearly;
    $: {
        console.log("formData updated:", $formData);
    }
    $: formData.update(data => ({...data, is_yearly: toggled}))
</script>

<div class="flex flex-col max-sm:w-9/10 
max-sm:px-5 max-sm:py-7 max-sm:m-auto max-sm:rounded-xl max-sm:bg-white
max-sm:-mt-0 max-sm:relative ">
    <Heading
        heading="Select your plan"
        heading_text="You have the option of monthly or yearly billing."
    />
    <div class="flex flex-row w-full justify-between relative gap-8 max-sm:flex-col max-sm:gap-4">
        {#each plansArray as [planName, planPrice]}
            <label class="flex flex-col border border-gray-300 rounded-xl py-5 px-3 basis-1/3 hover:cursor-pointer max-sm:flex-row max-sm:items-center"
            class:border-gray-300={$formData.plan !== planName}
            class:border-purple-500={$formData.plan === planName}
            class:bg-blue-50={$formData.plan===planName}>
                <img src="images/icon-{planName.toLowerCase()}.svg" alt="Arcade Icon" class="mb-12 h-12 w-12 max-sm:mb-1 max-sm:m-1 max-sm:mr-3">
                <div class="flex flex-col">
                    <div class="font-bold text-lg">{planName}</div>
                    <div class="text-gray-400 text-sm">{toggled ? "$"+planPrice*10+"/yr" : "$"+planPrice+"/mo"}</div>
                    <div class="text-sm" class:hidden={toggled===false}>2 months free</div>
                </div>
                <input type="radio" class="hidden" value={planName} name="plan" bind:group={$formData.plan}>
            </label>
        {/each}
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
</div>
<div class="flex flex-row items-center justify-between mt-25 mb-6 max-sm:p-5 max-sm:bg-white  max-sm:w-full max-sm:m-0">
    <div><a href="/your-info">Go Back</a></div>
    <div><input type="submit" class="p-3 bg-blue-700 text-white rounded-md hover:cursor-pointer w-30" value="Next Step" on:click={ _ => goto("add-ons")}></div>
</div>