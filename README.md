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

//add_text_to_line_array(lineArray, text [, linePrefix [, maxLineNumber = 255]] )
add_text_to_line_array(buf, "a");
add_text_to_line_array(buf, "b\nc");
add_text_to_line_array(buf, "d\n");
add_text_to_line_array(buf, "\ne\n");
add_text_to_line_array(buf, "e2");
add_text_to_line_array(buf, "f", "p1:");
add_text_to_line_array(buf, "g\nh", "p1:");
add_text_to_line_array(buf, "i\nj", "p2:");
add_text_to_line_array(buf, "k");

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
	"k"
].join("\n")
*/

```
