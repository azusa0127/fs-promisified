/**
 * fspp - fs-promisified-plus, a Simple Promisified fs Wrapper.
 *
 * @version 1.1.0
 * @author Phoenix Song (github.com/azusa0127)
 */
/**
 * ============================================================================
 * Requires.
 * ============================================================================
 */
const nodefs = require(`fs`);
const { promisify } = require(`util`);
/**
 * ============================================================================
 * Library.
 * ============================================================================
 */
const fspp = Object.assign({}, nodefs, {
  access: promisify(nodefs.access),
  appendFile: promisify(nodefs.appendFile),
  chmod: promisify(nodefs.chmod),
  chown: promisify(nodefs.chown),
  close: promisify(nodefs.close),
  exists: async path => promisify(nodefs.access)(path, nodefs.F_OK).then(() => true, () => false),
  fchmod: promisify(nodefs.fchmod),
  fchown: promisify(nodefs.fchown),
  fdatasync: promisify(nodefs.fdatasync),
  fstat: promisify(nodefs.fstat),
  fsync: promisify(nodefs.fsync),
  ftruncate: promisify(nodefs.ftruncate),
  futimes: promisify(nodefs.futimes),
  link: promisify(nodefs.link),
  lstat: promisify(nodefs.lstat),
  mkdir: promisify(nodefs.mkdir),
  mkdtemp: promisify(nodefs.mkdtemp),
  open: promisify(nodefs.open),
  read: promisify(nodefs.read),
  readdir: promisify(nodefs.readdir),
  readFile: promisify(nodefs.readFile),
  readlink: promisify(nodefs.readlink),
  realpath: promisify(nodefs.realpath),
  rename: promisify(nodefs.rename),
  rmdir: promisify(nodefs.rmdir),
  stat: promisify(nodefs.stat),
  truncate: promisify(nodefs.truncate),
  symlink: promisify(nodefs.symlink),
  unlink: promisify(nodefs.unlink),
  utimes: promisify(nodefs.utimes),
  write: promisify(nodefs.write),
  writeFile: promisify(nodefs.writeFile),
});
/**
 * ============================================================================
 * Exports.
 * ============================================================================
 */
module.exports = fspp;
