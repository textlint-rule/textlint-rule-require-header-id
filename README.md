# @textlint-rule/textlint-rule-require-header-id

textlint rule that require `{#id}` for each headers.

## Example

**OK**:

```
# Header {#id1}
## Header {#id2}
### Header {#id3}
#### Header {#id4}
##### Header {#id5}
```

**NG**:

```
# Header
## Header
```



## Install

Install with [npm](https://www.npmjs.com/):

    npm install @textlint-rule/textlint-rule-require-header-id

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "@textlint-rule/require-header-id": true
    }
}
```

Via CLI

```
textlint --rule @textlint-rule/require-header-id README.md
```

## Options

```js
const DefaultOptions = {
    /**
     * Id style
     *
     * GitBook: {#id}
     */
    style: "GitBook",
    /**
     * allow to header depth
     * If you want to allow h1, set this option to follows
     * [1]
     */
    allowDepth: []
};
```

If you want to add another id style, please submit to Pull Request!

## Changelog

See [Releases page](https://github.com/textlint-rule/textlint-rule-require-header-id/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/textlint-rule/textlint-rule-require-header-id/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
