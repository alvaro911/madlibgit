function myFunction(){
		var verb = document.getElementById("verbs").value;
		var noun = document.getElementById("nouns").value;
		var adverb = document.getElementById("adverbs").value;
		var adjective = document.getElementById("adjectives").value;

		var verbbArr = verb.split(",");
		var nounArr = noun.split(",");
		var adverbArr = adverb.split(",");
		var adjectiveArr = adjective.split(",");

		if(verbArr.length < 4){
			while(verbArr.length < 4){
				var temp = Math.floor(Math.random()*4);
				verbArr.push(backUpVerb[temp]);
			}
		}
	}

	var backUpVerb = ["scream", "plug", "contatenate", "confuse"];
	var backUpNoun = ["stethoscope", "hammer", "feline", "marsupial"];
	var backUpAdverb = ["truly", "quiet", "gentle", "there"];
	var backUpAdjective = ["horrendous", "lovely", "meticulous", "passive"];