// MIT © 2018 azu
"use strict";
const Style = {
    GitBook: "GitBook"
};
const Pattern = {
    [Style.GitBook]: /{#[a-zA-Z\d.-]+}$/
};
const DefaultOptions = {
    /**
     * Id style
     *
     * GitBook: {#id}
     */
    style: Style.GitBook,
    /**
     * allow to header depth
     * If you want to allow h1, set this option to follows
     * [1]
     */
    allowDepth: []
};
module.exports = (context, options = {}) => {
    const style = options.style || DefaultOptions.style;
    const allowDepth = options.allowDepth || DefaultOptions.allowDepth;
    const pattern = Pattern[style];
    const { Syntax, RuleError, getSource, report } = context;
    return {
        [Syntax.Header](node) {
            const isAllowed = allowDepth.some(depth => {
                return typeof node.depth === "number" && node.depth === depth;
            });
            if (isAllowed) {
                return;
            }
            const text = getSource(node);
            if (pattern.test(text)) {
                return;
            }
            report(node, new RuleError(`Header should have id that match ${String(Pattern[style])}`));
        }
    };
};
