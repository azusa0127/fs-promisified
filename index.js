/** fs-promisified - Simple Promisified fs Wrapper.
 *
 * @version 1.0.0
 * @author Phoenix Song (github.com/azusa0127)
 */
const fs = require(`fs`);
const { promisify } = require(`util`);

const
  /**
   * Promisified fs members;
   */
  access = promisify(fs.access),
  appendFile = promisify(fs.appendFile),
  chmod = promisify(fs.chmod),
  chown = promisify(fs.chown),
  close = promisify(fs.close),
  exists = async path => access(path, fs.ants.F_OK).then(() => true, () => false),
  fchmod = promisify(fs.fchmod),
  fchown = promisify(fs.fchown),
  fdatasync = promisify(fs.fdatasync),
  fstat = promisify(fs.fstat),
  fsync = promisify(fs.fsync),
  ftruncate = promisify(fs.ftruncate),
  futimes = promisify(fs.futimes),
  lchown = promisify(fs.lchown),
  link = promisify(fs.link),
  lstat = promisify(fs.lstat),
  mkdir = promisify(fs.mkdir),
  mkdtemp = promisify(fs.mkdtemp),
  open = promisify(fs.open),
  read = promisify(fs.read),
  readdir = promisify(fs.readdir),
  readfile = promisify(fs.readfile),
  readlink = promisify(fs.readlink),
  realpath = promisify(fs.realpath),
  rename = promisify(fs.rename),
  rmdir = promisify(fs.rmdir),
  stat = promisify(fs.stat),
  truncate = promisify(fs.truncate),
  symlink = promisify(fs.symlink),
  unlink = promisify(fs.unlink),
  utimes = promisify(fs.utimes),

  {
    /**
     * Inherited fs constants
     */
    constants,
    /**
     * Inherited fs classes
     */
    FSWatcher,
    ReadStream,
    Stats,
    WriteStream,
    /**
     * Inherited fs synchronous methods
     */
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
    lchmodSync,
    lchownSync,
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
    /**
     * Inherited fs special methods
     */
    createReadStream,
    createWriteStream,
    unwatchFile,
    watch,
    watchFile,
} = fs;

// Export
module.exports = {
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
  lchown,
  link,
  lstat,
  mkdir,
  mkdtemp,
  open,
  read,
  readdir,
  readfile,
  readlink,
  realpath,
  rename,
  rmdir,
  stat,
  truncate,
  symlink,
  unlink,
  utimes,
  /**
   * Inherited fs constants
   */
  constants,
  /**
   * Inherited fs classes
   */
  FSWatcher,
  ReadStream,
  Stats,
  WriteStream,
  /**
   * Inherited fs synchronous methods
   */
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
  lchmodSync,
  lchownSync,
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
  /**
   * Inherited fs special methods
   */
  createReadStream,
  createWriteStream,
  unwatchFile,
  watch,
  watchFile,
};
