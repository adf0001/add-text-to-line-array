
// add-text-to-line-array @ npm, add text to line array.

var DEAULT_MAX_LINE_NUMBER = 255;

//module.exports = function (lineArray, text [, linePrefix [, maxLineNumber]] )
module.exports = function (lineArray, text, linePrefix, maxLineNumber) {
	var sa = text.split(/\r\n|\n\r|\n|\r/);
	if (lineArray.length < 1) lineArray[0] = "";

	//for last line in lineArray
	linePrefix = linePrefix || "";
	var lastLinePrefix = lineArray.lastLinePrefix || "";

	if (linePrefix == lastLinePrefix) {
		lineArray[lineArray.length - 1] = lineArray[lineArray.length - 1] + sa[0];
	}
	else {
		lineArray[lineArray.length] = linePrefix + sa[0];
		//save lastLinePrefix to lineArray
		lineArray.lastLinePrefix = linePrefix;
	}

	//add the rest
	for (var i = 1; i < sa.length; i++) {
		lineArray[lineArray.length] = linePrefix + sa[i];
	}

	//keep max line number
	maxLineNumber = maxLineNumber || DEAULT_MAX_LINE_NUMBER;

	while (lineArray.length > maxLineNumber) { lineArray.shift(); }
}
