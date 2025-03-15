<script lang="ts">
    import { errorStore } from '$lib/store/errorStore';
    import type { InputEventType, Validator } from '$lib/types/form';
    import { slide } from 'svelte/transition';

    export let label = '';
    export let value: string | number;
    export let type: 'text' | 'number' | 'date' | 'password' = 'text';
    export let validators: Validator[] = [];
    export let placeholder = '';
    export let disabled = false;

    let dirty = false;

    $: errors = validators
        .map((v) => {
            value = value || '';
            if(v.length === 2) return v(value.toString());
            else {
                return v(value.toString());
            }
            
        })
        .filter((v) => v !== null);
    
    $: isError = errors.length && (dirty || $errorStore);

    let showValue = false;

    $: inputId = label.toLowerCase().replaceAll(' ', '-');

    function inputHandler(e: InputEventType) {
        if (!e.target) return;
        if (type === 'number') {
            value = parseFloat((e.target as HTMLInputElement).value);
            if (isNaN(value)) {
                value = 0;
            }
        } else {
            value = (e.target as HTMLInputElement).value;
        }
    }
</script>
<div class="py-3">
    {#if label}
        <label class="mb-1 inline-block" for={inputId}>{label}</label>
    {/if}  
    {#if isError}
        <span transition:slide|local={{ duration: 100 }} class="inline-block text-red-500 font-bold float-right">
            {errors.join(', ')}
        </span>
    {/if}
    <input 
        type={type}   
        id={inputId}
        {disabled}
        on:input={inputHandler}
        on:blur={() => (dirty = true)}
        {value}
        {placeholder}
        class="rounded-lg w-full"
    >
</div>

