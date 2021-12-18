# add-text-to-line-array
add text to line array

# Install
```
npm install add-text-to-line-array
```

# Usage & Api
```javascript

var add_text_to_line_array = require("add-text-to-line-array");

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
add_text_to_line_array.addLine(buf, ["k6",""]);
add_text_to_line_array(buf, "k7");
add_text_to_line_array.addLine(buf, "k8");

console.log(buf.join("\n"));

/*
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
*/

```
