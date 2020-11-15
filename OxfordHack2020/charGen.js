class Character {
	constructor ()
	{
		//Set variables
		this.name = this.generateRandomName();
		this.charClass = this.generateClass();
		this.race = this.generateRace();
		this.background = this.generateBackground();
		this.level = this.generateLevel();
		this.alignment = this.generateAlignment();
		this.proficiencies = this.generateProficiencies(this.background, this.charClass);

		this.str = this.makeAttribution();
		this.dex = this.makeAttribution();
		this.con = this.makeAttribution();
		this.int = this.makeAttribution();
		this.wis = this.makeAttribution();
		this.cha = this.makeAttribution();
		
		this.hitDie = this.getHitDie();
		this.hitDieNum = this.getHitDieNum();
		this.HP = this.getMaxHP();
		this.proficiency = this.getProficieny();
		this.speed = this.getSpeed();
		this.AC = this.getAC();
		
		this.acrobatics = this.makeSkill(this.dex);
		this.animalHandling = this.makeSkill(this.wis);
		this.arcana = this.makeSkill(this.int);
		this.athletics = this.makeSkill(this.str);
		this.deception = this.makeSkill(this.cha);
		this.history = this.makeSkill(this.int);
		this.insight = this.makeSkill(this.wis);
		this.intimidation = this.makeSkill(this.cha);
		this.investigation = this.makeSkill(this.int);
		this.medicine = this.makeSkill(this.wis);
		this.nature = this.makeSkill(this.int);
		this.perception = this.makeSkill(this.wis);
		this.performance = this.makeSkill(this.cha);
		this.persuasion = this.makeSkill(this.cha);
		this.religion = this.makeSkill(this.int);
		this.sleight = this.makeSkill(this.dex);
		this.stealth = this.makeSkill(this.dex);
		this.survival = this.makeSkill(this.wis); 

		this.strSaveThrow = this.makeSkill(this.str);
		this.dexSaveThrow = this.makeSkill(this.dex);
		this.conSaveThrow = this.makeSkill(this.con);
		this.intSaveThrow = this.makeSkill(this.int);
		this.wisSaveThrow = this.makeSkill(this.wis);
		this.chaSaveThrow = this.makeSkill(this.cha);
		
		this.spellSaveDC = this.calculateSpellSaveDC();
		this.spellAttackMod = this.calculateSpellAttackMod();
		//Update skills if proficient
		this.addProficiency();
		
	}
	
	rollDice(die) { // Roll a d(die)
		return Math.floor(Math.random() * die)+1;
	}

	makeAttribution() // Gives attribute modifier
	{
		let rolls = [];

		let i;
		for (i = 0; i < 4; i++)
		{
			rolls.push(this.rollDice(6));
		}
		rolls.sort((a,b) => a - b);
		let attribute = 0;
		for (let i = 1; i < 4; i++) {
			attribute += rolls[i];
		}
		return attribute;
	}

	generateRandomName() // Generates a name
	{
		//generates random number
		let firstNames = ["Adam", "Joe", "Noel", "Anlow", "Bram", "Xandrilla", "Tylsa", "Krynt", "Caskajaro", "Vincent", "Markus", "Remora", "Tura", "Lorelei", "Semil", "Lurtum", "Andujar", "Armagam", "Saxavis", "Tenahn", "Xafiq", "Artana", "Myrka", "Sarcha", "Agaro", "Melgar", "Rozag", "Wolvar", "Tredigar", "Geralt", "Beyla", "Marnia", "Roksana", "Xoneras", "Turue", "Ankhus","Thomas","Umut","Erik","Gabriel","TH3JU1C3"];
		let secondNames = ["Poopy","Amarzian", "Smith", "Frau", "Faringray", "Meklan", "Carnago", "Zeth", "Kazimir", "Incirion", "Dacian", "Archidius", "Xerek", "Tricker", "Skiprock", "Woodenhawk", "Blackwater", "Sunshadow", "Zolerii", "Starfeon", "Zaquivir", "Skalandor", "Lantheon", "Fletcher", "Falck", "Selg", "Varzand", "Webb", "Voortham", "Vrago", "Trevethor", "Lantherval", "Grimthor"];
	
		//Takes random index out of both firstNames and secondNames
		let firstRandName = Math.floor(Math.random() * firstNames.length);
		let secondRandName = Math.floor(Math.random() * secondNames.length);
		return (firstNames[firstRandName] + " " + secondNames[secondRandName]);
	}

	generateClass()
	{
		//random class selection
		let classes = ["Cleric", "Sorcerer", "Barbarian", "Bard", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Warlock", "Wizard"];

		let randomClass = Math.floor(Math.random() * classes.length);
		return classes[randomClass];
	}

	generateRace()
	{
		//random race selection
		let races = ["Dragonborn", "Elf", "Dwarf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"];

		let randomRace = Math.floor(Math.random() * races.length);
		return races[randomRace];
	}

	generateBackground()
	{
		//random background selection
		//add JSON dictionary
		let background = ["Acolyte", "Charlattan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Urchin"];

		let randomBackground = Math.floor(Math.random() * background.length);
		return background[randomBackground];
	}

	generateLevel()
	{
		let level = 1;
		return level;
	}

	generateAlignment()
	{
		//will have to based by race
		//will do later

		let alignments = ["Lawful Good", "Neutral Good", "Neutral", "Chaotic Good", "Lawful Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
		let randomAlignment = Math.floor(Math.random() * alignments.length);

		return alignments[randomAlignment];

	}
	generateProficiencies(background, charClass)
	{
		let proficiencies = [];

		//based on background adds a proficiency
		switch(background)
		{
			case "Acolyte":
				proficiencies.push("Insight");
				proficiencies.push("Religion");
				break;

			case "Charlatan":
				proficiencies.push("Deception");
				proficiencies.push("Sleight of Hand");
				break;

			case "Criminal":
				proficiencies.push("Deception");
				proficiencies.push("Stealth");
				break;

			case "Entertainer":
				proficiencies.push("Acrobatics");
				proficiencies.push("Performance");
				break;

			case "Folk Hero":
				proficiencies.push("Animal Handling");
				proficiencies.push("Survival");
				break;

			case "Gladiator":
				proficiencies.push("Acrobatics");
				proficiencies.push("Performance");
				break;

			case "Guild Artisan":
				proficiencies.push("Insight");
				proficiencies.push("Persuasion");
				break;

			case "Hermit":
				proficiencies.push("Medicine");
				proficiencies.push("Religion");
				break;

			case "Knight":
				proficiencies.push("History");
				proficiencies.push("Persuasion");
				break;

			case "Noble":
				proficiencies.push("History");
				proficiencies.push("Persuasion");
				break;

			case "Outlander":
				proficiencies.push("Athletics");
				proficiencies.push("Survival");
				break;

			case "Pirate":
				proficiencies.push("Athletics");
				proficiencies.push("Perception");
				break;

			case "Sage":
				proficiencies.push("Arcana");
				proficiencies.push("History");
				break;

			case "Sailor":
				proficiencies.push("Athletics");
				proficiencies.push("Perception");
				break;

			case "Soldier":
				proficiencies.push("Athletics");
				proficiencies.push("Intimidation");
				break;

			case "Urchin":
				proficiencies.push("Sleight of Hand");
				proficiencies.push("Stealth");
				break;
		}

		//based on charClass adds a proficiency
		switch(charClass)
		{
			case "Barbarian":
			case "Fighter":
				proficiencies.push("Strength");
				proficiencies.push("Constitution");
				break;
			case "Bard":
				proficiencies.push("Dexterity");
				proficiencies.push("Charisma");
			case "Cleric":
			case "Paladin":
			case "Warlock":
				proficiencies.push("Wisdom");
				proficiencies.push("Charisma");
				break;
			case "Druid":
			case "Wizard":
				proficiencies.push("Intelligence");
				proficiencies.push("Wisdom");
				break;
			case "Monk":
			case "Ranger":
				proficiencies.push("Strength");
				proficiencies.push("Dexterity");
				break;
			case "Rogue":
				proficiencies.push("Dexterity");
				proficiencies.push("Intelligence");
				break;
			case "Sorcerer":
				proficiencies.push("Constitution");
				proficiencies.push("Charisma");
				break;
		}

		//Clear duplicates
		return proficiencies;
	}

	makeSkill(attribute) // Gets Skill Modifier
	{
		if (attribute < 10)
		{
			return parseInt((attribute - 11) / 2);
		}

		else
		{
			return parseInt((attribute - 10) / 2);
		}
	}
	
	getMaxHP() {
		//when level is one
		let HP = this.hitDie + this.makeSkill(this.con);
		//for every level bigger than 1
		for (let i = 1; i < this.level; i++){
			HP += this.hitDie
		}
		return HP;
	}
	
	getHitDie() {
		switch(this.charClass) {
			case "Sorcerer":
			case "Wizard":
				return 6;
				break;
			case "Bard":
			case "Cleric":
			case "Druid":
			case "Monk":
			case "Rogue":
			case "Warlock":
				return 8;
				break;
			case "Fighter":
			case "Paladin":
			case "Ranger":
				return 10;
				break;
			case "Barbarian":
				return 12;
				break;
			default:
				return 8;
				break;
		}
		return 8;
	}
	
	getHitDieNum(){
		return this.level;
	}
	
	getProficieny(){
		if(this.level < 5) {
			return 2;
		}
		else if (this.level < 9) {
			return 3;
		}
		else if (this.level < 13) {
			return 4;
		}
		else if (this.level < 17) {
			return 5;
		}
		else {
			return 6;
		}
		return 2;
	}
	
	getSpeed(){
		switch(this.race) {
			case "Dwarf":
			case "Halfling":
			case "gnome":
				return 25;
				break;
			case "Elf":
			case "Human":
			case "Dragonborn":
			case "Half-Elf":
			case "Half-Orc":
			case "Tiefling":
				return 30;
				break;
		}
		return 25;
	}
	
	getAC(){
		return 10 + this.makeSkill(this.dex);
	}
	
	addProficiency(){
		for(let i = 0; i < this.proficiencies.length; i++) {
			switch(this.proficiencies[i]){
				case "Acrobatics":
					this.acrobatics += this.proficiency;
					break;
				case "Animal Handling":
					this.animalHandling += this.proficiency;
					break;
				case "Arcana":
					this.arcana += this.proficiency;
					break;
				case "Athletics":
					this.athletics += this.proficiency;
					break;
				case "Deception":
					this.deception += this.proficiency;
					break;
				case "History":
					this.history += this.proficiency;
					break;
				case "Insight":
					this.insight += this.proficiency;
					break;
				case "Intimidation":
					this.intimidation += this.proficiency;
					break;
				case "Investigation":
					this.investigation += this.proficiency;
					break;
				case "Medicine":
					this.medicine += this.proficiency;
					break;
				case "Nature":
					this.nature += this.proficiency;
					break;
				case "Perception":
					this.perception += this.proficiency;
					break;
				case "Performance":
					this.performance += this.proficiency;
					break;
				case "Persuasion":
					this.persuasion += this.proficiency;
					break;
				case "Religion":
					this.religion += this.proficiency;
					break;
				case "Sleight of Hand":
					this.sleight += this.proficiency;
					break;
				case "Stealth":
					this.stealth += this.proficiency;
					break;
				case "Survival":
					this.survival += this.proficiency;
					break;
				case "Strength":
					this.strSaveThrow += this.proficiency;
					break;
				case "Dexterity":
					this.dexSaveThrow += this.proficiency;
					break;
				case "Constitution":
					this.conSaveThrow += this.proficiency;
					break;
				case "Intelligence":
					this.intSaveThrow += this.proficiency;
					break;
				case "Wisdom":
					this.wisSaveThrow += this.proficiency;
					break;
				case "Charisma":
					this.chaSaveThrow += this.proficiency;
					break;
			}
		}
	}


	calculateSpellSaveDC(){
		switch(this.charClass) {
			case "Warlock":
			case "Sorcerer":
			case "Bard":
			case "Paladin":
				return 8 + this.makeSkill(this.cha) + this.proficiency;
				break;
			case "Wizard":
				return 8 + this.makeSkill(this.int) + this.proficiency;
				break;
			case "Cleric":
			case "Druid":
			case "Ranger":
				return 8 + this.makeSkill(this.wis) + this.proficiency;
				break;
			default:
				return "N/A";
				break;
		}
	}
	
	calculateSpellAttackMod(){
		switch(this.charClass) {
			case "Warlock":
			case "Sorcerer":
			case "Bard":
			case "Paladin":
				return this.makeSkill(this.wis) + this.proficiency;
				break;
			case "Wizard":
				return this.makeSkill(this.wis) + this.proficiency;
				break;
			case "Cleric":
			case "Druid":
			case "Ranger":
				return this.makeSkill(this.wis) + this.proficiency;
				break;
			default:
				return "N/A";
				break;
		}
	}
}

let character = new Character();

function dlCharacterJSON() { //Courtesy of https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser#30800715
	displayCharacter(character);
	let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(character));
	let dlAnchorElem = document.getElementById('downloadAnchorElem');
	dlAnchorElem.setAttribute("href",     dataStr     );
	dlAnchorElem.setAttribute("download", "character.json");
	dlAnchorElem.click();
}

function uplCharacterJSON() {
	let files = document.getElementById('uploader').files;
	console.log(files);
	if (files.length <= 0) {
		return false;
	}
	
	let fr = new FileReader();
	fr.readAsText(files.item(0));
	fr.onload = function(e) {
		let result = JSON.parse(fr.result);
		for (let key in result){
			character[key] = result[key];
		}
		displayCharacter(character)
	}
	
}

function generateCharacter() {
	character = new Character();
	displayCharacter(character);
}

function changeLevel(mod) {
	character.level += mod;
	if (character.level < 1) {
		character.level = 1;
	}
	else if (character.level > 20) {
		character.level = 20;
	}
	updateCharacter(character);
	displayCharacter(character);
}

function changeAttribute(mod,att) {
	switch(att) {
		case "Str":
			character.str += mod;
			if (character.str < 1) { character.str = 1; }
			else if (character.str > 20) { character.str = 20; }
			break;
		case "Dex":
			character.dex += mod;
			if (character.dex < 1) { character.dex = 1; }
			else if (character.dex > 20) { character.dex = 20; }
			break;
		case "Con":
			character.con += mod;
			if (character.con < 1) { character.con = 1; }
			else if (character.con > 20) { character.con = 20; }
			break;
		case "Int":
			character.int += mod;
			if (character.int < 1) { character.int = 1; }
			else if (character.int > 20) { character.int = 20; }
			break;
		case "Wis":
			character.wis += mod;
			if (character.wis < 1) { character.wis = 1; }
			else if (character.wis > 20) { character.wis = 20; }
			break;
		case "Cha":
			character.cha += mod;
			if (character.cha < 1) { character.cha = 1; }
			else if (character.cha > 20) { character.cha = 20; }
			break;
	}
	updateCharacter(character);
	displayCharacter(character);
}

function changeName() {
	let name = prompt("Enter a new name");
	character.name = name;
	updateCharacter(character);
	displayCharacter(character);
}

function changeClass(mod) {
	let classes = ["Cleric", "Sorcerer", "Barbarian", "Bard", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Warlock", "Wizard"];
	let classIndex = classes.indexOf(character.charClass);
	classIndex = (classIndex+mod)%classes.length;
	if (classIndex == -1) {classIndex	= 11;} 
	character.charClass = classes[classIndex];
	updateCharacter(character);
	displayCharacter(character);
}

function changeBackground(mod) {
	let background = ["Acolyte", "Charlattan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Urchin"];
	let backgroundIndex = background.indexOf(character.background);
	backgroundIndex = (backgroundIndex+mod)%background.length;
	if (backgroundIndex == -1) {backgroundIndex	= 15;} 
	character.background = background[backgroundIndex];
	updateCharacter(character);
	displayCharacter(character);
}

function changeRace(mod) {
	let races = ["Dragonborn", "Elf", "Dwarf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"];
	let raceIndex = races.indexOf(character.race);
	raceIndex = (raceIndex+mod)%races.length;
	if (raceIndex == -1) {raceIndex = 8;}
	character.race = races[raceIndex];
	updateCharacter(character);
	displayCharacter(character);
}

function changeAlignment(mod) {
	let alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
	let alignIndex = alignments.indexOf(character.alignment);
	alignIndex = (alignIndex+mod)%alignments.length
	if (alignIndex == -1) {alignIndex = 8;}
	character.alignment = alignments[alignIndex];
	displayCharacter(character)
}

function updateCharacter(character) { // Changes Derived Stats
	character.proficiencies = character.generateProficiencies(character.background, character.charClass);
	character.hitDie = character.getHitDie();
	character.hitDieNum = character.getHitDieNum();
	character.HP = character.getMaxHP();
	character.proficiency = character.getProficieny();
	character.acrobatics = character.makeSkill(character.dex);
	character.animalHandling = character.makeSkill(character.wis);
	character.arcana = character.makeSkill(character.int);
	character.athletics = character.makeSkill(character.str);
	character.deception = character.makeSkill(character.cha);
	character.history = character.makeSkill(character.int);
	character.insight = character.makeSkill(character.wis);
	character.intimidation = character.makeSkill(character.cha);
	character.investigation = character.makeSkill(character.int);
	character.medicine = character.makeSkill(character.wis);
	character.nature = character.makeSkill(character.int);
	character.perception = character.makeSkill(character.wis);
	character.performance = character.makeSkill(character.cha);
	character.persuasion = character.makeSkill(character.cha);
	character.religion = character.makeSkill(character.int);
	character.sleight = character.makeSkill(character.dex);
	character.stealth = character.makeSkill(character.dex);
	character.survival = character.makeSkill(character.wis); 

	character.strSaveThrow = character.makeSkill(character.str);
	character.dexSaveThrow = character.makeSkill(character.dex);
	character.conSaveThrow = character.makeSkill(character.con);
	character.intSaveThrow = character.makeSkill(character.int);
	character.wisSaveThrow = character.makeSkill(character.wis);
	character.chaSaveThrow = character.makeSkill(character.cha);
	//Update skills if proficient
	character.addProficiency();
	character.AC = character.getAC();
	
	character.spellSaveDC = character.calculateSpellSaveDC();
	character.spellAttackMod = character.calculateSpellAttackMod();
}

function displayCharacter(character){ // updates HTML of character stats so User can see

	//Complete utter shit
	
	document.getElementById("lstCharName").innerHTML = "Character Name: "+character.name;
	document.getElementById("lstRace").innerHTML = "Race: "+character.race;
	document.getElementById("lstClass").innerHTML = "Class: "+character.charClass;
	document.getElementById("lstLevel").innerHTML = "Level: "+character.level;
	document.getElementById("lstBackground").innerHTML = "Background: "+character.background;
	document.getElementById("lstAlignment").innerHTML = "Alignment: "+character.alignment;
	
	document.getElementById("lstSTR").innerHTML = "Strength: "+character.str;
	document.getElementById("lstDEX").innerHTML = "Dexterity: "+character.dex;
	document.getElementById("lstCON").innerHTML = "Constitution: "+character.con;
	document.getElementById("lstINT").innerHTML = "Intelligence: "+character.int;
	document.getElementById("lstWIS").innerHTML = "Wisdom: "+character.wis;
	document.getElementById("lstCHA").innerHTML = "Charisma: "+character.cha;
	
	document.getElementById("lstProf").innerHTML = "Proficiency: "+character.proficiency;
	document.getElementById("lstHP").innerHTML = "Hit Points: "+character.HP;
	document.getElementById("lstHitDie").innerHTML = "Hit Die: d"+character.hitDie;
	document.getElementById("lstHitDieNumber").innerHTML = "Hit Die: "+character.hitDieNum;
	document.getElementById("lstSpeed").innerHTML = "Speed: "+character.speed;
	document.getElementById("lstAC").innerHTML = "Armour Class: "+character.AC;
	

	document.getElementById("lstSklDexAcr").innerHTML = "Acrobatics (Dex): "+character.acrobatics;
	document.getElementById("lstSklWisAnm").innerHTML = "Animal Handling (Wis): "+character.animalHandling;
	document.getElementById("lstSklIntArc").innerHTML = "Arcana (Int): "+character.arcana;
	document.getElementById("lstSklStrAth").innerHTML = "Athletics (Str): "+character.athletics;
	document.getElementById("lstSklChaDec").innerHTML = "Deception (Cha): "+character.deception;
	document.getElementById("lstSklIntHis").innerHTML = "History (Int): "+character.history;
	document.getElementById("lstSklWisIns").innerHTML = "Insight (Wis): "+character.insight;
	document.getElementById("lstSklChaItm").innerHTML = "Intimidation (Cha): "+character.intimidation;
	document.getElementById("lstSklIntInv").innerHTML = "Investigation (Int): "+character.investigation;
	document.getElementById("lstSklWisMed").innerHTML = "Medicine (Wis): "+character.medicine;
	document.getElementById("lstSklIntNat").innerHTML = "Nature (Int): "+character.nature;
	document.getElementById("lstSklWisPrc").innerHTML = "Perception (Wis): "+character.perception;
	document.getElementById("lstSklChaPfm").innerHTML = "Performance (Cha): "+character.performance;
	document.getElementById("lstSklChaPrs").innerHTML = "Persuasion (Cha): "+character.persuasion;
	document.getElementById("lstSklIntRel").innerHTML = "Religion (Int): "+character.religion;
	document.getElementById("lstSklDexSoh").innerHTML = "Sleight of Hand (Dex): "+character.sleight;
	document.getElementById("lstSklDexStl").innerHTML = "Stealth (Dex): "+character.stealth;
	document.getElementById("lstSklWisSur").innerHTML = "Survival (Wis): "+character.survival;

	
	document.getElementById("lstSTRsav").innerHTML = "Strength: "+character.strSaveThrow;
	document.getElementById("lstDEXsav").innerHTML = "Dexterity: "+character.dexSaveThrow;
	document.getElementById("lstCONsav").innerHTML = "Constitution: "+character.conSaveThrow;
	document.getElementById("lstINTsav").innerHTML = "Intelligence: "+character.intSaveThrow;
	document.getElementById("lstWISsav").innerHTML = "Wisdom: "+character.wisSaveThrow
	document.getElementById("lstCHAsav").innerHTML = "Charisma: "+character.chaSaveThrow;
	
	document.getElementById("lstSplSavDC").innerHTML = "Spell Save DC: "+character.spellSaveDC;
	document.getElementById("lstSplAtkMod").innerHTML = "Spell Attack Modifier: "+character.spellAttackMod;
}