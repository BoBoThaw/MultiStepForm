<script lang="ts">
    import Step from "$lib/step/Step.svelte";
    export let steps = ["your info", "select plan", "add-ons", "summary"];
    import Heading from "$lib/components/heading.svelte";
    export let heading = "Personal Info";
    export let heading_text = "Please provide your name, email address, and phone number."
</script>

<div class="w-4/10 flex flex-col border-2 p-5 bg-[url(/images/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat text-white grow rounded-xl">
    <div>
        {#each steps as step, i}
            <Step
                number={i+1}
                step={step}
            />
        {/each}
    </div>
</div>
<div class="w-full flex justify-center flex-col px-20 text-blue-900">
    <div class="flex flex-col">
        <Heading
            heading={heading}
            heading_text={heading_text}
        />
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