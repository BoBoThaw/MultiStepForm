<script lang="ts">
    import Heading from "$lib/components/heading.svelte";
    import Personal from "$lib/components/personal.svelte";
    import { goto } from "$app/navigation";
    import Input from "$lib/form/Input.svelte";
    import { formData } from "$lib/store/formDataStore";
    import { emailValidator, requiredValidator, phoneValidator } from "$lib/utils/validators";
    $: {
        console.log("formData updated:", $formData);
    }
</script>

<div class="flex flex-col max-sm:w-9/10 
max-sm:px-5 max-sm:py-7 max-sm:m-auto max-sm:rounded-xl max-sm:bg-white
max-sm:-mt-0 max-sm:relative ">
    
    <Heading
        heading="Personal info"
        heading_text="Please provide your name, email address and phone number."
    />
    <Input
        label="Name"
        placeholder="e.g. Stephen King"
        bind:value={$formData.name}
        validators={[requiredValidator]}
    />
    <Input
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        validators={[requiredValidator, emailValidator]}
        bind:value={$formData.email}
    />
    <Input
        label="Phone Number"
        placeholder="e.g.+1 234 567 890"
        validators={[requiredValidator, phoneValidator]}
        bind:value={$formData.phone}
    />
</div>
<div class="flex flex-row items-center justify-end mt-25 mb-6 max-sm:p-5 max-sm:bg-white  max-sm:w-full max-sm:m-0">
    <div><input type="submit" class="p-3 bg-blue-700 text-white rounded-md hover:cursor-pointer w-30" value="Next Step" on:click={ _ => goto("select-plan")}></div>
</div>
