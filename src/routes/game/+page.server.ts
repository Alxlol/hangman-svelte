import { getRandomNumberInRange } from '$lib/functions';
import { commonWords } from '$lib/words.json';

export const load = () => {
	let word: string = commonWords[getRandomNumberInRange(0, commonWords.length - 1)];

	while (word.length < 5) {
		console.log('Word to short, getting a new');
		word = commonWords[getRandomNumberInRange(0, commonWords.length - 1)];
	}

	console.log('Found word:', word);
	return {
		word
	};
};
