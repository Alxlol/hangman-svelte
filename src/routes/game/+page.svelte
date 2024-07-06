<script lang="ts">
	import { alphabet } from '$lib/functions';
	export let data;

	const secretWord = data.word;
	let selectedLetters: string[] = [];
	let lives: number = 8;

	function selectLetter(letter: string) {
		selectedLetters.push(letter);
		selectedLetters = [...selectedLetters];

		if (secretWord.includes(letter)) {
			console.log('Letter is in word');
		} else {
			console.log('wrong');
		}
	}
</script>

<!-- <p>Word: {secretWord}</p> -->
<div class="flex items-center gap-20 px-36">
	<div class="flex flex-1 items-center justify-center gap-2 text-6xl">
		{#each [...secretWord] as character}
			{#if selectedLetters.includes(character)}
				<p class="uppercase">{character}</p>
			{:else}
				<p>_</p>
			{/if}
		{/each}
	</div>
	<div class="flex max-w-[66rem] flex-1 flex-wrap items-center justify-center gap-8 text-3xl">
		{#each [...alphabet] as letter}
			<button
				disabled={selectedLetters.includes(letter)}
				on:click={() => selectLetter(letter)}
				class="h-14 w-14 rounded-full bg-blue-500 uppercase hover:bg-blue-400
                {selectedLetters.includes(letter) ? 'bg-gray-500 hover:bg-gray-500' : ''}">
				{letter}
			</button>
		{/each}
	</div>
</div>
