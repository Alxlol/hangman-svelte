<script lang="ts">
	import { alphabet } from '$lib/functions';
	export let data;

	const secretWord = data.word;
	let selectedLetters: string[] = [];
	let lives: number = 8;
	let gameState: 'play' | 'won' | 'over' = 'play';

	function selectLetter(letter: string) {
		selectedLetters.push(letter);
		selectedLetters = [...selectedLetters];

		if (secretWord.includes(letter)) {
			let allLettersGuessed: boolean = true;
			secretWord.split('').forEach((element) => {
				if (!selectedLetters.includes(element)) {
					allLettersGuessed = false;
					return;
				}
			});
			if (allLettersGuessed) {
				gameState = 'won';
			}
		} else {
			lives--;
			if (lives <= 0) {
				gameState = 'over';
			}
		}
	}
</script>

{#if gameState === 'play'}
	<div class="flex flex-col items-center gap-20 px-36">
		<div class="mt-20">
			<p>HP: {lives}</p>
		</div>
		<div class="flex items-center justify-center gap-4 text-7xl">
			{#each [...secretWord] as character}
				{#if selectedLetters.includes(character)}
					<p class="uppercase">{character}</p>
				{:else}
					<p>_</p>
				{/if}
			{/each}
		</div>
		<div class="flex max-w-[50rem] flex-wrap items-center justify-center gap-8 text-3xl">
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
{:else if gameState === 'over'}
	<div class="flex min-h-screen flex-col items-center justify-center gap-4">
		<p class="text-4xl font-bold">GAME OVER</p>
		<p class="text-lg">The word was <span class="font-bold">{secretWord}</span></p>
		<button
			class="rounded-md bg-blue-500 px-4 py-2"
			on:click={() => {
				location.reload();
			}}>Try Again</button>
	</div>
{:else if gameState === 'won'}
	<div class="flex min-h-screen flex-col items-center justify-center gap-4">
		<p class="text-4xl font-bold">YOU WON 😁</p>
		<p class="text-lg">The word was <span class="font-bold">{secretWord}</span></p>
		<button
			class="rounded-md bg-blue-500 px-4 py-2"
			on:click={() => {
				location.reload();
			}}>Play again</button>
	</div>
{/if}
