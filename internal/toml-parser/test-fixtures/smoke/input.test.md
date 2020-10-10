# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/toml-parser/index.test.ts --update-snapshots` to update.

## `smoke`

### `ast`

```javascript
TomlRoot {
	body: Array []
	comments: Array []
	corrupt: false
	filename: "smoke/input.toml"
	mtime: undefined
	loc: Object {
		filename: "smoke/input.toml"
		end: Object {
			column: 11
			line: 1
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/toml"}]
			description: Object {
				advice: Array []
				category: "parse/toml"
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Unable to parse the value associated to key "}
						"foo "
					]
				}
			}
			location: Object {
				filename: "smoke/input.toml"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 7
					line: 1
				}
				start: Object {
					column: 7
					line: 1
				}
			}
		}
	]
}
```

### `diagnostics`

```

 smoke/input.toml:1:7 parse/toml ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unable to parse the value associated to key foo

    foo = "bar"
           ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```