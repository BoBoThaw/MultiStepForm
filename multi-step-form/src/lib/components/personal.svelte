<script>
    import Input from "$lib/form/Input.svelte";
    import { emailValidator, requiredValidator, phoneValidator } from "$lib/utils/validators";
</script>

<Input
    label="Name"
    placeholder="e.g. Stephen King"
    validators={[requiredValidator]}
    value=""
/>
<Input
    label="Email Address"
    placeholder="e.g. stephenking@lorem.com"
    validators={[requiredValidator, emailValidator]}
    value=""
/>
<Input
    label="Phone Number"
    placeholder="e.g.+1 234 567 890"
    validators={[requiredValidator, phoneValidator]}
    value=""
/>
