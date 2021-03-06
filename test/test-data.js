// global, for html page
add_text_to_line_array = require("../add-text-to-line-array.js");

module.exports = {

	"add_text_to_line_array()": function (done) {

		var buf = [];

		//.addText(lineArray, text [, linePrefix [, maxLineNumber = 255]] )
		add_text_to_line_array(buf, "a");
		add_text_to_line_array(buf, "b\nc");
		add_text_to_line_array(buf, "d\n");
		add_text_to_line_array(buf, "\ne\n");
		add_text_to_line_array(buf, "e2");
		add_text_to_line_array(buf, "f", "p1:");
		add_text_to_line_array(buf, "g\nh", "p1:");
		add_text_to_line_array(buf, "i\nj", "p2:");
		add_text_to_line_array(buf, "k");
		add_text_to_line_array(buf, "k2");
		//.addLine(lineArray, textArray [, linePrefix [, maxLineNumber = 255]] )
		add_text_to_line_array.addLine(buf, ["k3", "k4"]);
		add_text_to_line_array(buf, "k5");
		add_text_to_line_array.addLine(buf, ["k6", ""]);
		add_text_to_line_array(buf, "k7");
		add_text_to_line_array.addLine(buf, "k8");

		console.log(buf.join("\n"));

		done(!(
			buf.join("\n") === [
				"ab",
				"cd",
				"",
				"e",
				"e2",
				"p1:fg",
				"p1:h",
				"p2:i",
				"p2:j",
				"kk2",
				"k3",
				"k4k5",
				"k6",
				"k7",
				"k8",
			].join("\n")
		));
	},

	"prefix at first": function (done) {

		var buf = [];

		add_text_to_line_array(buf, "f", "p1:");
		add_text_to_line_array(buf, "g\nh", "p1:");
		add_text_to_line_array(buf, "i\nj", "p2:");
		add_text_to_line_array(buf, "k");
		add_text_to_line_array(buf, "k2");

		console.log(buf.join("\n"));

		done(!(
			buf.join("\n") === [
				"p1:fg",
				"p1:h",
				"p2:i",
				"p2:j",
				"kk2",
			].join("\n")
		));
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
