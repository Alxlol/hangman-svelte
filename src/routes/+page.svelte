<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-1 items-center justify-center">
	<button
		on:click={() => {
			goto('/game');
		}}
		class="rounded-md bg-blue-500 px-8 py-4 text-2xl font-bold">Play Hangman</button>
</div>
