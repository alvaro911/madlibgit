function myFunction(){
		var verb = document.getElementById("verbs").value;
		var noun = document.getElementById("nouns").value;
		var adverb = document.getElementById("adverbs").value;
		var adjective = document.getElementById("adjectives").value;

		var verbArr = verb.split(",");
		var nounArr = noun.split(",");
		var adverbArr = adverb.split(",");
		var adjectiveArr = adjective.split(",");

		function makeBold(arr){
			return arr.map(function (item){
				return "<strong>" + item + "</strong>";
			});
		}

		function emptyString(arr){
			for(var i=arr.length-1; i > -1 ; i--){
				if(arr[i] === ""){
					arr.splice(i,1);
				}
			}
		}

		emptyString(verbArr);
		emptyString(nounArr);
		emptyString(adverbArr);
		emptyString(adjectiveArr);

		if(verbArr.length < 4){
			while(verbArr.length < 4){
				var temp = Math.floor(Math.random()*4);
					if(verbArr.indexOf(backUpVerb[temp]) === -1){
						verbArr.push(backUpVerb[temp]);

					}
			}
		}

		if(nounArr.length < 4){
			while(nounArr.length < 4){
				var temp1 = Math.floor(Math.random()*4);
					if(nounArr.indexOf(backUpNoun[temp1]) === -1){
						nounArr.push(backUpNoun[temp1]);
					}
			}
		}

		if(adverbArr.length < 4){
			while(adverbArr.length < 4){
				var temp2 = Math.floor(Math.random()*4);
				if(adverbArr.indexOf(backUpAdverb[temp2]) === -1){
						adverbArr.push(backUpAdverb[temp2]);
					}
			}
		}

		if(adjectiveArr.length < 4){
			while(adjectiveArr.length < 4){
				var temp3 = Math.floor(Math.random()*4);
					if(adjectiveArr.indexOf(backUpAdjective[temp3]) === -1){
						adjectiveArr.push(backUpAdjective[temp3]);
					}
			}
		}

		verbArr = makeBold(verbArr);
		nounArr = makeBold(nounArr);
		adverbArr = makeBold(adverbArr);
		adjectiveArr = makeBold(adjectiveArr);

		var story = "Christmas Tree: \nEvery Christmas we "  +  verbArr[0] +  " to a "  + adjectiveArr[0]  +  "  tree farm far away. This is not just any " +  adjectiveArr[1]  + " tree farm. My dad and I " +   verbArr[3] + "  onto the " + nounArr[0] + " to  " +  verbArr[1] + "  for the perfect " +  nounArr[1] + ".  Some people like them" +  adjectiveArr[2]  + ", but I prefer them " +  adjectiveArr[3] + " . After  searching for hours I usually " +  adverbArr[3] + "  exclaim \"Dad! The perfect tree is over   there!\" Off we" +   verbArr[2]  + " to get the tree. The problem is we always forget the " + nounArr[3] + "  and the" + nounArr[2] + " . But at the end of the day we " +  adverbArr[0] + "  get the tree and head home " +   adverbArr[1] + " . \"I wish it was Christmas all year round\"  I " +   adverbArr[2] + " think to myself.";

		

		var shoppingStory = "Today I went shopping. When I arrived at the store I saw a"  + adjectiveArr[0]  +   nounArr[0] + ", who upon noticing me"   + adverbArr[0]  +  "said \"I need to " + verbArr[0] + " \". \"Well,   that was" +   adjectiveArr[1]  + "\" I thought to myself and walked in the store. The store had rearranged it is inventory, so I felt" +   adverbArr[1] + " lost. I   walked up to store clerk and said" +   adverbArr[2] + "  \"I am looking for a" +  adjectiveArr[2]  +   nounArr[1] + "that doesn’t"  +  verbArr[1] + "as often as the last one I had.\" The store clerk    looked at me with a" +  adjectiveArr[3] + " look in his eye and said, \"What you are looking for can be found by the" +  nounArr[2] + ", if you see a" +  nounArr[3] + " that " +   adverbArr[3] +  " can " +   verbArr[2] + " , then you have gone too far.\" As I tried to understand his directions, I thought to myself, \"I should have just ordered it    on amazon.com, Their products seem to " +  verbArr[3] + " the perfect amount\"";

		var tale = document.getElementsByName('stories');

			for(var i=0; i < tale.length; i++){
				if(tale[i].checked){
					document.getElementById("story").innerHTML = story;
					alert(radios[i].value);
				} else{
					document.getElementById("story").innerHTML = shoppingStory;
					alert(radios[i].value);
				}
			}
	}

	var backUpVerb = ["scream", "plug", "contatenate", "confuse"];
	var backUpNoun = ["stethoscope", "hammer", "feline", "marsupial"];
	var backUpAdverb = ["truly", "quietly", "gently", "mainly"];
	var backUpAdjective = ["horrendous", "lovely", "meticulous", "passive"];