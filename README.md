BioJS Newick Parser 
----------

How to build it 

```javascript 
npm i 
npm start
npm test
```

Now include biojs-io-newick.min.js in build into your html (see example.html).
Just call method `parse_newick(string)` for parsing a newick string into JSON. 

```javascript
var parser = require("biojs-io-newick");
parser.parse_newick('((A,B),C)');
```

Call the method `parse_nhx(string)` for parsing an extended newick formats into JSON.

```javascript
var parser = require("biojs-io-newick");
parser.newick.parse_nhx('((A,B),C)');
```

[Example tree](http://en.wikipedia.org/wiki/Newick_format):

Newick format:

```sh
(A:0.1,B:0.2,(C:0.3,D:0.4)E:0.5)F
```

Converted to JSON:

```javascript
{name : "F",
  children: [
    {name: "A", branch_length: 0.1},
    {name: "B", branch_length: 0.2},
    {
      name: "E",
      length: 0.5,
      children: [
        {name: "C", branch_length: 0.3},
        {name: "D", branch_length: 0.4}
      ]
    }
  ]
}
```
