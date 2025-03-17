<script lang="ts">
    export let number : number;
    export let step: string;
    export let active = false;
</script>
<div class="flex flex-row items-center p-2">
    <div class="w-10 h-10 p-1 flex items-center justify-center rounded-full border-2 border-cyan-200 text-sm font-bold"
    class:bg-cyan-200={active===true}
    class:text-blue-900={active===true}
    >{number}</div>
    <div class="flex flex-col p-2 font-bold text-sm max-sm:hidden">
        <div class="text-gray-300">STEP {number}</div>
        <div class="">{step.toUpperCase()}</div>
    </div>
</div>