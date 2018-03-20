const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/textlint-rule-require-header-id");
// ruleName, rule, { valid, invalid }
tester.run("textlint-rule-require-header-id", rule, {
    valid: [
        "# Header {#id1}",
        "## Header {#id2}",
        "### Header {#id3}",
        "#### Header {#id4}",
        "##### Header {#id5}",
        `
# Header {#id1}
## Header {#id2}
### Header {#id3}
#### Header {#id4}
##### Header {#id5}
        `,
        {
            text: "# allow",
            options: {
                allowDepth: [1]
            }
        }
    ],
    invalid: [
        // line, column
        {
            text: "# Header",
            errors: [
                {
                    message: "Header should have id that match /{#[a-zA-Z\\d.-]+}$/",
                    index: 0
                }
            ]
        },
        // index
        {
            text: `# Header
   
## Header`,
            errors: [
                {
                    message: "Header should have id that match /{#[a-zA-Z\\d.-]+}$/",
                    line: 1
                },
                {
                    message: "Header should have id that match /{#[a-zA-Z\\d.-]+}$/",
                    line: 3
                }
            ]
        }
    ]
});
