<script lang="ts">
    import Heading from "$lib/components/heading.svelte";
    import Summary from "$lib/components/summary.svelte";
    import { goto } from "$app/navigation";
    import { formData } from "$lib/store/formDataStore";
    import { plans, addOns_optins } from "$lib/utils/shared";
    $: planPrice = plans[$formData.plan] || 0;
    $: selectedAddOns = addOns_optins.filter(option => $formData.add_ons.includes(option.name));
    $: totalAddOnsPrice = selectedAddOns.reduce((total, addOn) => total + addOn.price, 0);
    $: total = planPrice + totalAddOnsPrice;
</script>

<div class="flex flex-col">
    
    <Heading
        heading="Finishing up"
        heading_text="Double-check everything looks OK before confirming."
    />
    <div class="flex flex-col w-full relative">
        <div class="flex flex-col w-full bg-blue-50 rounded-xl">
            <div class="flex flex-row justify-between items-center p-5">
                <div class="my-3">
                    <div class="font-bold text-lg">{$formData.plan}
                        {#if $formData.is_yearly}
                            (Yearly)
                        {:else}
                            (Monthly)
                        {/if}
                    </div>
                    <a href="/select-plan" class="underline text-gray-500">Change</a>
                </div>
                <div class="my-3 font-bold text-lg">
                    {#if $formData.is_yearly}
                        {"$"+planPrice*10+"/yr"}
                    {:else}
                        {"$"+planPrice+"/mo"}
                    {/if}
                </div>
            </div>
            <hr class="mx-7">
            <div class="flex flex-col w-full p-5">
                {#each selectedAddOns as add_on}
                <div class="flex flex-row w-full justify-between my-3"> 
                    <div class="text-gray-500">{add_on.name}</div>
                    <div>
                        {#if $formData.is_yearly}
                            {"$"+add_on.price*10+"/yr"}
                        {:else}
                            {"$"+add_on.price+"/mo"}
                        {/if}
                    </div>
                </div>
                {/each}
            </div>
        </div>
        <div class="flex flex-row w-full justify-between p-5"> 
            <div class="text-gray-500">Total</div>
            <div class="font-bold text-2xl text-violet-500">
                {#if $formData.is_yearly}
                    {"$"+total*10+"/yr"}
                {:else}
                    {"$"+total+"/mo"}
                {/if}
            </div>
        </div>
    </div>
</div>
<div class="flex flex-row items-center justify-between mt-25 mb-6">
    <div><a href="/add-ons">Go Back</a></div>
    <div><input type="submit" class="p-3 bg-blue-700 text-white rounded-md hover:cursor-pointer w-30" value="Next Step" on:click={ _ => goto("final")}></div>
</div>