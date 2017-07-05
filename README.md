# fs-promisified-plus
Simple Promisified NodeJS.fs Wrapper.

### This pakcage is meant to be a quick drop-in replacement for NodeJS module 'fs'.
- All callback functions are promisified with util.promisify.
- Reinterpreted fs.exist with access(path, F_OK).
- All constants inherited.
- All synchronous functions inherited.
- All class inherited.
- All special functions inherited.

### User story:

This packages is designed and targeted at NodeJS v8.0.0+, with extensive use of async/await calls.

### Dependency:

NodeJS v8.0.0 and up (as util.promisify is only provided since v8.0.0). Nothing else.

## Basic Usages:
```javascript
const fs = require(`fspp`);  // Full function of fs module inherited, no need to include both fs and fspp.
// (you stil can require both fs and fspp differently if you want to).

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

## Full API list
### Promisified Functions
  access,
  appendFile,
  chmod,
  chown,
  close,
  exists,
  fchmod,
  fchown,
  fdatasync,
  fstat,
  fsync,
  ftruncate,
  futimes,
  link,
  lstat,
  mkdir,
  mkdtemp,
  open,
  read,
  readdir,
  readFile,
  readlink,
  realpath,
  rename,
  rmdir,
  stat,
  truncate,
  symlink,
  unlink,
  utimes,

### Inherited fs constants

  constants,
  F_OK,
  R_OK,
  W_OK,
  X_OK,

### Inherited fs classes

  FSWatcher,
  ReadStream,
  Stats,
  WriteStream,

### Inherited fs synchronous methods

  accessSync,
  appendFileSync,
  chmodSync,
  chownSync,
  closeSync,
  existsSync,
  fchmodSync,
  fchownSync,
  fdatasyncSync,
  fstatSync,
  fsyncfsyncSync,
  fsyncSync,
  ftruncateSync,
  futimesSync,
  linkSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  openSync,
  readdirSync,
  readFileSync,
  readlinkSync,
  readSync,
  realpathSync,
  renameSync,
  rmdirSync,
  statSync,
  symlinkSync,
  truncateSync,
  unlinkSync,
  utimesSync,
  writeFileSync,
  writeSync,

### Inherited fs special methods

  createReadStream,
  createWriteStream,
  unwatchFile,
  watch,
  watchFile,


## License
This module is licensed under the terms of MIT License. Check the LICENSE file for more info.
