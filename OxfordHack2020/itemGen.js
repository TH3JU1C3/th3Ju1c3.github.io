var adjectives = ["Shrunken", "Red", "Holy", "Brass", "Dead", "Boomerang-shaped", "Rhombus-shaped", "Circular", "Glass", "Seductive", "Dank", "Golden", "Silver", "Small", "Big", "Tiny", "Gigantic", "Heavy", "Light", "Diamond", "Wooden", "Expensive", "Cheap", "Dirty", "Used", "Brand-new", "Broken", "Exotic", "Powerful", "Burning", "Wireless", "Invisible", "Cringey", "Clean", "Creepy", "Useless", "German-made"];


class Item {
	constructor(type) {

		if (type != null && type != "") {
			this.stats = [];
			this.type = type;
			this.item = this.createItem(this.type);
		}
		else
		{
			this.stats = [];
			this.type;
			this.item = this.createItem(0);
        }
		
		
	}

	//all of the possible adjectives for each item besides food (maybe for food as well)

	createItem(typeIn) {
		let typeOfItem = ["Trinket", "Weapon", "Armour", "Food"];
		let itemTomake;

		if (typeIn == 0) {
			itemTomake = Math.floor(Math.random() * typeOfItem.length);
			this.typeIn = typeOfItem[itemTomake];
			this.type = typeOfItem[itemTomake];
		}
		else
		{
			this.typeIn = typeIn;
        }

		this.createStats(this.typeIn);

		switch (this.typeIn) {
			case "Trinket":
				return this.makeTrinket();
				break;

			case "Weapon":
				return this.makeWeapon();
				break;

			case "Armour":
				return this.makeArmour();
				break;

			case "Food":
				return this.makeFood();
				break;
		}
	}

	createStats(item) {
		//could make a second method for this, however it would probably require more case statements
		switch (item) {
			case "Trinket":
				this.stats.push(this.randomWeight(10));
				break;
			case "Weapon":
				this.stats.push(this.randomWeight(20));
				this.stats.push(this.makeDamage());
				break;
			case "Armour":
				this.stats.push(this.randomWeight(30));
				this.stats.push(Math.floor(Math.random() * 20));
				break;
			case "Food":
				this.stats.push(this.randomWeight(3));
				break;
		}
	}


	makeDamage() {
		let finalDamage = "";
		let sidesOfDice = ["d4", "d6", "d10", "d12", "d20"];
		let amountOfThrows = Math.floor(Math.random() * 6);

		let randSide = Math.floor(Math.random() * sidesOfDice.length);
		let randThrow = Math.floor(Math.random() * amountOfThrows) + 1;

		finalDamage = randThrow + sidesOfDice[randSide];
		return finalDamage;
	}

	//returns random weight based by given max value
	randomWeight(maxi) {
		return (Math.floor(Math.random() * maxi));
	}

	makeTrinket() {

		//add more typesOfEffects, needs more funny ones
		//takes random positions from typesOfTrinkets and typesOfEffects and concats them into one string
		let finalItem = '';
		let typesOfTrinkets = ["statue", "feather", "finger bone", "casket", "spirit", "rod", "small fan", "symbol", "whistle", "vape pen", "dreamcatcher", "rubber duck", "cigarettes", "amulet", "ring", "tooth", "earring", "spoon", "mirror", "cup", "hairbrush", "doorknob", "book", "eye", "deck of cards", "bag of dice", "keychain"];
		let typesOfEffects = ["allows you to speak any language you wish", "makes you instantly cool", "never gets lost", "gives you the ability to see in the night", "that opens any door you wish", "never gets dirty", "dimly glows any colour you want it to", "gives you teleportation skills", "makes you laugh constantly", "turns you invisible", "makes you go mad", "turns you into a wolf", "allows you to hear to demons", "turns you into a pickle", "makes you really hungry all the time", "you can't take off", "makes you forget", "allows the demons to speak back", "makes you psychic", "makes you addicted to garlic bread"];

		let randAdj = Math.floor(Math.random() * adjectives.length);
		let randType = Math.floor(Math.random() * typesOfTrinkets.length);
		let randEff = Math.floor(Math.random() * typesOfEffects.length);


		//this can be probably done using concat, stays like for now however
		//i can not be bothered to make this nicer
		finalItem = adjectives[randAdj] + " " + typesOfTrinkets[randType] + " that " + typesOfEffects[randEff];
		return finalItem;
	}

	makeWeapon() {

		//attack bonus implement later
		//figure out dictonaries and type it all into it 

		let finalItem = '';

		let typesOfWeapons = ["rocket launcher", "ring sword", "halberd", "shuriken", "knife", "hidden blade", "chainsword", "whip", "dagger", "flail", "door", "sword", "axe", "bow", "shovel", "spear", "automatic rifle", "crossbow", "shortsword", "katana", "pike", "dead fish", "briefcase", "sack of doorknobs", "staff"];
		let typesOfDamage = ["with fire damage", "with blunt damage", "with piercing damage", "with bludgeoning damage", "with cold damage", "with poison damage", "with acid damage", "with psychic damage", "with necrotic damage", "with radiant damage", "with force damage", "with thunder damage", "with lightning damage"];

		let randAdj = Math.floor(Math.random() * adjectives.length);
		let randWep = Math.floor(Math.random() * typesOfWeapons.length);
		let randDmg = Math.floor(Math.random() * typesOfDamage.length);


		finalItem = adjectives[randAdj] + " " + typesOfWeapons[randWep] + " " + typesOfDamage[randDmg];
		return finalItem;
	}

	makeArmour() {
		let finalItem = '';

		let typesOfArmour = ["splint", "half plate", "hide", "hood", "clogs", "underwear", "shirt", "t-shirt", "trousers", "breastplate", "sliders", "boots", "helmet", "tin-foil hat", "gloves", "gauntlets", "greaves", "sunglasses", "cloak", "veil", "robe", "chainveil armour"];
		let typesOfProtection = ["makes you very fast", "regenerates you slowly overnight", "with protection from germans", "with protection from goblins", "with protection from zombies", "with protection from fire", "with protection from ice", "with protection from dragons", "with protection from monkeys", "with protection from devils", "with protection from demons", "that make you slightly uncomfortable", "that gives you a lot of confidence", "that minimise your confidence", "that makes you look funny"];

		let randAdj = Math.floor(Math.random() * adjectives.length);
		let randArmour = Math.floor(Math.random() * typesOfArmour.length);
		let randPro = Math.floor(Math.random() * typesOfProtection.length);

		finalItem = adjectives[randAdj] + " " + typesOfArmour[randArmour] + " " + typesOfProtection[randPro];
		return finalItem;
	}

	makeFood() {
		let finalItem = '';

		let foodAdjectives = ["Poisoned", "Chewy", "Burnt", "Acidic", "Scrumptious", "Sour", "Greasy", "Moldy", "Stale", "Suspiciously gray", "Fresh", "Wet", "Dry", "Crunchy", "Rotten", "Stale", "Garlic", "Salty", "Sweet", "Cheesy", "Kosher", "Halal", "Deep-fried", "Plain", "Succulent", "Tangy", "Crommulent", "Appetising", "Embiggening"];
		let foods = ["bread", "pizza", "soup", "baguette", "steak", "kebab", "rice", "cake", "egg", "ham", "honey", "chicken", "turkey", "fish", "fungi", "burrito", "curry", "duck", "gnocchi", "hamburger", "jerky", "quiche", "yogurt", "zucchini", "tangerine", "oatmeal", "urchins"];
		let foodAttributes = ["looks very delicious", "looks very suspicious", "tastes poorly", "is moving around slightly", "is uncomfortably large", "is very tiny", "tastes like chicken", "is poisoned", "looks like it is poisoned"];

		let randFoodAdj = Math.floor(Math.random() * foodAdjectives.length);
		let randFood = Math.floor(Math.random() * foods.length);
		let randFoodAtr = Math.floor(Math.random() * foodAttributes.length);

		finalItem = foodAdjectives[randFoodAdj] + " " + foods[randFood] + " that " + foodAttributes[randFoodAtr];

		return finalItem;

	}
}

function generateItem() {
	let item = new Item("");

	document.getElementById("Item").innerHTML = item.item + ".";
	document.getElementById("lstWeight").innerHTML = "Weight is: " + item.stats[0];
	if (item.type == "Weapon") {
		let changingElement = document.getElementById("lstDam");
		changingElement.innerHTML = "Damage is: " + item.stats[1];
		changingElement.setAttribute("class", "notHidden");
		let otherElement = document.getElementById("lstArm");
		otherElement.setAttribute("class", "hidden");
	}
	else if (item.type == "Armour") {
		let changingElement = document.getElementById("lstArm");
		changingElement.innerHTML = "AC is: " + item.stats[1];
		changingElement.setAttribute("class", "notHidden");
		let otherElement = document.getElementById("lstDam");
		otherElement.setAttribute("class", "hidden");
	}
	else {
		document.getElementById("lstDam").setAttribute("class", "hidden");
		document.getElementById("lstArm").setAttribute("class", "hidden");
	}

}

function generateTrinket() {
	let item = new Item("Trinket");

	document.getElementById("Item").innerHTML = item.item + ".";
	document.getElementById("lstWeight").innerHTML = "Weight is: " + item.stats[0];
	
	document.getElementById("lstDam").setAttribute("class", "hidden");
	document.getElementById("lstArm").setAttribute("class", "hidden");
}

function generateWeapon() {
	let item = new Item("Weapon");

	document.getElementById("Item").innerHTML = item.item + ".";
	document.getElementById("lstWeight").innerHTML = "Weight is: " + item.stats[0];
	
	document.getElementById("lstDam").innerHTML = "Damage is: " + item.stats[1];
	document.getElementById("lstDam").setAttribute("class", "notHidden");
	document.getElementById("lstArm").setAttribute("class", "hidden");
}

function generateArmour() {
	let item = new Item("Armour");

	document.getElementById("Item").innerHTML = item.item + ".";
	document.getElementById("lstWeight").innerHTML = "Weight is: " + item.stats[0];

	document.getElementById("lstArm").innerHTML = "AC is: " + item.stats[1];
	document.getElementById("lstArm").setAttribute("class", "notHidden");
	document.getElementById("lstDam").setAttribute("class", "hidden");

}

function generateFood() {
	let item = new Item("Food");

	document.getElementById("Item").innerHTML = item.item + ".";
	document.getElementById("lstWeight").innerHTML = "Weight is: " + item.stats[0];
	document.getElementById("lstDam").setAttribute("class", "hidden");
	document.getElementById("lstArm").setAttribute("class", "hidden");
}