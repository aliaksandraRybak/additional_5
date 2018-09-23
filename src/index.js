module.exports = function check(str, bracketsConfig) {
  	var arr = str.split("");

  	for (var i = 0; i < bracketsConfig.length; i++) {
  		for (var j = 0; j < arr.length; j++) {
	  		if (bracketsConfig[i][0] == bracketsConfig[i][1]) {
		  		if (!hasAPair(bracketsConfig[i][0])) return false;
		  		var position = arr.indexOf(bracketsConfig[i][0]);

		  		if (position != -1 && arr.indexOf(bracketsConfig[i][0], position + 1) != -1) {
					var sub = arr.slice(position + 1, arr.indexOf(bracketsConfig[i][0], position + 1));
					if ((sub.length > 0 && checkedInside(sub)) || sub.length == 0) {
						setNull(position, arr.indexOf(bracketsConfig[i][0], position + 1));
					} else return false;
				}
		  	} else {
		  		var position = arr.lastIndexOf(bracketsConfig[i][0]);

		  		if (position != -1) {
			  		var sub = arr.slice(position + 1, arr.indexOf(bracketsConfig[i][1], position));

					if ((sub.length == 0 && arr.indexOf(bracketsConfig[i][1], position) !== -1) || (sub.length > 0 && checkedInside(sub))) {
					  	setNull(position, arr.indexOf(bracketsConfig[i][1], position + 1));
					} else return false;
				}
		  	}
		 }
  	}

	function hasAPair(bracket) {  
		var numOfBrackets = [];

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === bracket) numOfBrackets.push(arr[i]);
		}

		if(!(numOfBrackets.length % 2 == 0)) return false;

		return true;
	}

	function checkedInside(arr) {
		if (arr.length == 1 || arr.length % 2 != 0) return false;

		return true;
	}


	function setNull(elem1, elem2) {
		arr[elem1] = null;
		arr[elem2] = null;
	}



	for (var i = 0; i < arr.length; i++) {
	  	if (arr[i] != null) return false;
	} 

	return true;
}