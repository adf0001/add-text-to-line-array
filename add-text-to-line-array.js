
// add-text-to-line-array @ npm, add text to line array.

var DEAULT_MAX_LINE_NUMBER = 255;

//var addText = function (lineArray, text [, linePrefix [, maxLineNumber]] )
//NOTE: a property ".lastLinePrefix" will save into `lineArray`, if `linePrefix` is not empty.
var addText = function (lineArray, text, linePrefix, maxLineNumber) {
	//line prefix
	linePrefix = linePrefix || "";

	//init line-array by linePrefix
	if (lineArray.length < 1) {
		lineArray[0] = linePrefix;
		if (linePrefix) lineArray.lastLinePrefix = linePrefix;
	}

	var lastLinePrefix = lineArray.lastLinePrefix || "";

	var sa = text.split(/\r\n|\n\r|\n|\r/);

	//for last line in lineArray and the 1st line of the text
	if (linePrefix == lastLinePrefix) {
		lineArray[lineArray.length - 1] = lineArray[lineArray.length - 1] + sa[0];
	}
	else {
		lineArray[lineArray.length] = linePrefix + sa[0];	//new line
		//save lastLinePrefix to lineArray
		lineArray.lastLinePrefix = linePrefix;		//always save, in all conditions.
	}

	//add the rest
	for (var i = 1; i < sa.length; i++) {
		lineArray[lineArray.length] = linePrefix + sa[i];
	}

	//keep max line number
	maxLineNumber = maxLineNumber || DEAULT_MAX_LINE_NUMBER;

	if (lineArray.length > maxLineNumber) lineArray.splice(0, lineArray.length - maxLineNumber);
}

var addLine = function (lineArray, textArray, linePrefix, maxLineNumber) {
	if (!(textArray instanceof Array)) textArray = [textArray];
	linePrefix = linePrefix || "";

	for (var i = 0; i < textArray.length; i++) {
		lineArray[lineArray.length] = linePrefix + textArray[i];
	}

	//set .lastLinePrefix
	if (linePrefix || lineArray.lastLinePrefix) lineArray.lastLinePrefix = linePrefix;

	if (lineArray.length > maxLineNumber) lineArray.splice(0, lineArray.length - maxLineNumber);
}

module.exports = exports = addText;

exports.addText = addText;
exports.addLine = addLine;
