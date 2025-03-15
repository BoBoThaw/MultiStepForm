<script lang="ts">
    import Heading from "$lib/components/heading.svelte";
    import { goto } from "$app/navigation";
    import { addOns_optins } from "$lib/utils/shared";
    import { formData } from "$lib/store/formDataStore";
    $: {
        console.log("formData updated:", $formData);
    }
</script>

<div class="flex flex-col">
    
    <Heading
        heading="Pick add-ons"
        heading_text="Add-ons help enhance your gaming experience."
    />
    <div class="flex flex-col w-full gap-5">
        {#each addOns_optins as option}
            <label class="flex flex-row items-center justify-between border border-blue-800 p-5 gap-10 rounded-lg">
                <input type="checkbox" name="add-on" value={option.name} bind:group={$formData.add_ons} class=" w-5 h-5 rounded-sm checked:bg-blue-700 focus:ring-0">
                <div class="flex flex-col flex-1">
                    <div class="text-blue-900 font-bold text-lg">{option.name}</div>
                    <div class="text-gray-400 text-sm">{option.description}</div>
                </div>
                <div class="text-base text-purple-900">
                    {#if $formData.is_yearly}
                        {"$"+option.price*10+"/yr"}
                    {:else}
                        {"$"+option.price+"/mo"}
                    {/if}
                </div>
            </label>
        {/each}
    </div>
</div>
<div class="flex flex-row items-center justify-between mt-25 mb-6">
    <div><a href="/select-plan">Go Back</a></div>
    <div><input type="submit" class="p-3 bg-blue-700 text-white rounded-md hover:cursor-pointer w-30" value="Next Step" on:click={ _ => goto("summary")}></div>
</div>
