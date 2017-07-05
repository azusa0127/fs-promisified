# fs-promisified-plus
Simple Promisified NodeJS.fs Wrapper.

### This pakcage is meant to be a quick drop-in replacement for NodeJS module 'fs'.
- All callback functions are promisified with util.promisify.
- Reinterpreted fs.exist with access(path, F_OK).
- fs.constants inherited.
- All synchronous functions inherited. 
- All class inherited.
- All special functions inherited.

### User story:

This packages is designed and targeted at NodeJS v8.0.0+, with extensive use of async/await calls.

### Dependency:

NodeJS v8.0.0 and up (as util.promisify is only provided since v8.0.0). Nothing else.

## Usages:
```
const fs = require(`fspp`);

// Promise use example
fs.mkdir(`sample`).then( () => console.log(`sample folder created.`) ).catch(err => console.error(err));

// Async functions example
const main = async () => {
  const data = await fs.readfile(`README.md`, `utf8`); // data = `# fs-promisified-plus...`
  await fs.access(`X:/NON_EXIST_PATH`, fs.constants.R_OK); // This should fail and reject the main promise.
}
// Sync functions example
fs.rmdirSync(`sample`);
```
