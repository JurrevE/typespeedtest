const words = [
	"perplex ",
	"facetious ",
	"elusive ",
	"clandestine ",
	"benevolent ",
	"audacity ",
	"equilibrium ",
	"paradigm ",
	"zealous ",
	"resonance ",
	"quaint ",
	"vigilant ",
	"sporadic ",
	"tangible ",
	"resilient ",
	"prodigious ",
	"cursory ",
	"oblivious ",
	"solace ",
	"conspicuous ",
	"incongruous ",
	"frivolous ",
	"meticulous ",
	"reverence ",
	"lucid ",
	"ephemeral ",
	"ambiguous ",
	"elated ",
	"tenuous ",
	"formidable ",
	"volatile ",
	"eminent ",
	"inevitable ",
	"conundrum ",
	"inept ",
	"audible ",
	"nonchalant ",
	"resilient ",
	"vortex ",
	"disdain ",
	"contemplate ",
	"eloquent ",
	"exuberant ",
	"precarious ",
	"morose ",
	"pervasive ",
	"cynical ",
	"jubilant ",
	"pragmatic ",
	"unwieldy ",
	"succinct ",
	"gregarious ",
	"incipient ",
	"incisive ",
	"scrupulous ",
	"belligerent ",
	"serendipitous ",
	"lament ",
	"avarice ",
	"torrential ",
	"amiable ",
	"intrinsic ",
	"facetious ",
	"melancholy ",
	"unfathomable ",
	"conjecture ",
	"fortitude ",
	"vex ",
	"indignant ",
	"adversary ",
	"prudent ",
	"imminent ",
	"idyllic ",
	"mitigate ",
	"reclusive ",
	"coalesce ",
	"diligent ",
	"arduous ",
	"aptitude ",
	"catalyst ",
	"ardent ",
	"implicit ",
	"ambivalent ",
	"fastidious ",
	"quandary ",
	"austere ",
	"beguile ",
	"convoluted ",
	"banal ",
	"felicity ",
	"dubious ",
	"retract ",
	"stoic ",
	"pertinent ",
	"idiosyncrasy ",
	"placid ",
	"extraneous ",
	"luminous ",
	"voracious ",
	"subtle ",
	"tacit ",
	"obsolete ",
	"fractious ",
	"nonplussed ",
	"deterrent ",
	"quizzical ",
	"relinquish ",
	"flourish ",
	"verbatim ",
	"scourge ",
];

let getwords = function () {
	let randomWords = [];
	while (randomWords.length < 3) {
		const randomIndex = Math.floor(Math.random() * words.length);
		const word = words[randomIndex];

		if (!randomWords.includes(word)) {
			randomWords.push(word);
		}
	}

	wordlist = randomWords.join("").trimEnd();
	console.log(wordlist);
	let wordDisplay = document.getElementById("wordDisplay");
	wordDisplay.textContent = wordlist;
	console.log(typeof wordlist);
};
getwords();

let currentIndex = 0;
document.addEventListener("keydown", function (e) {
	let userinput = e.key;
	console.log("User input:", userinput);

	if (userinput === wordlist[currentIndex]) {
		console.log("Correct letter, onto the next");
		currentIndex++;
		console.log("New letter is:", wordlist[currentIndex]);

		if (currentIndex >= wordlist.length) {
			console.log("Victory!");
		}
	} else {
		console.log(
			"Wrong letter, try again! Current letter is:",
			wordlist[currentIndex]
		);
	}
});
