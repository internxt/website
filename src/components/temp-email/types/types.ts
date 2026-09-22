export interface MessageObjProps {
  body: string;
  date: number;
  from: string;
  html: string;
  id: string;
  subject: string;
  to: string;
  seen: boolean;
}

export interface StateProps {
  user: UserProps | undefined;
  borderColor: boolean;
  openedMessages: number;
  messages: MessageObjProps[];
  selectedMessage: MessageObjProps | null;
  generateEmail: boolean | undefined;
  isChangeEmailIconAnimated: boolean;
}

export const ActionTypes = {
  SET_USER: 'SET_USER',
  SET_BORDER_COLOR: 'SET_BORDER_COLOR',
  SET_OPENED_MESSAGES: 'SET_OPENED_MESSAGES',
  SET_MESSAGES: 'SET_MESSAGES',
  SET_SELECTED_MESSAGES: 'SET_SELECTED_MESSAGES',
  SET_GENERATE_EMAIL: 'SET_GENERATE_EMAIL',
  SET_IS_CHANGE_EMAIL_ICON_ANIMATED: 'SET_IS_CHANGE_EMAIL_ICON_ANIMATED',
};

export interface UserProps {
  address: string;
  token: string;
}

export type ActionType =
  | { type: 'SET_USER'; payload: UserProps | undefined }
  | { type: 'SET_BORDER_COLOR'; payload: boolean }
  | { type: 'SET_OPENED_MESSAGES'; payload: number }
  | { type: 'SET_MESSAGES'; payload: MessageObjProps[] | undefined }
  | { type: 'SET_SELECTED_MESSAGES'; payload: MessageObjProps | null }
  | { type: 'SET_GENERATE_EMAIL'; payload: boolean | undefined }
  | { type: 'SET_IS_CHANGE_EMAIL_ICON_ANIMATED'; payload: boolean };

type FileExtensionMap = Record<string, string[]>;

export enum FileExtensionGroup {
  Audio,
  Code,
  Figma,
  Image,
  Pdf,
  Ppt,
  Txt,
  Video,
  Word,
  Xls,
  Xml,
  Csv,
  Zip,
  Default,
}

const audioExtensions = {
  '3gp': ['3gp'],
  aa: ['aa'],
  aac: ['aac'],
  aax: ['aax'],
  act: ['act'],
  aiff: ['aiff'],
  alac: ['alac'],
  amr: ['amr'],
  ape: ['ape'],
  au: ['au'],
  awd: ['awd'],
  dss: ['dss'],
  dvf: ['dvf'],
  flac: ['flac'],
  gsm: ['gsm'],
  iklax: ['iklax'],
  ivs: ['ivs'],
  m4a: ['m4a'],
  m4b: ['m4b'],
  m4p: ['m4p'],
  mmf: ['mmf'],
  mp3: ['mp3'],
  mpc: ['mpc'],
  msv: ['msv'],
  nmf: ['nmf'],
  ogg: ['ogg', 'oga', 'mogg'],
  opus: ['opus'],
  ra: ['ra', 'rm'],
  rf64: ['rf64'],
  sln: ['sln'],
  tta: ['tta'],
  voc: ['voc'],
  vox: ['vox'],
  wav: ['wav'],
  wma: ['wma'],
  wv: ['wv'],
  webm: ['webm'],
  '8svx': ['8svx'],
  cda: ['cda'],
};

const codeExtensions = {
  c: ['c', 'h'],
  'c++': ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
  cobol: ['cob', 'cpy'],
  'c#': ['cs'],
  cmake: ['cmake'],
  coffee: ['coffee'],
  css: ['css'],
  less: ['less'],
  sass: ['sass'],
  scss: ['scss'],
  fortran: ['f', 'for', 'f77', 'f90'],
  'asp.net': ['aspx'],
  html: ['html', 'hmn'],
  java: ['java'],
  jsp: ['jsp'],
  javascript: ['js'],
  typescript: ['ts'],
  json: ['json'],
  jsx: ['jsx'],
  kotlin: ['kt'],
  mathematica: ['m', 'nb'],
  php: ['php', 'php3', 'php4', 'php5', 'phtml'],
  python: ['BUILD', 'bzl', 'py', 'pyw'],
  ruby: ['rb'],
  sql: ['sql'],
  vue: ['vue'],
  yaml: ['yaml', 'yml'],
};

const figmaExtensions = {
  fig: ['fig'],
};

const imageExtensions = {
  tiff: ['tif', 'tiff'],
  bmp: ['bmp'],
  heic: ['heic'],
  jpg: ['jpg', 'jpeg'],
  gif: ['gif'],
  png: ['png'],
  eps: ['eps'],
  raw: ['raw', 'cr2', 'nef', 'orf', 'sr2'],
};

const pdfExtensions = {
  pdf: ['pdf'],
};

const pptExtensions = {
  ppt: ['ppt', 'pptx', 'pptm'],
};

const txtExtensions = {
  txt: ['txt', 'text', 'conf', 'def', 'list', 'log', 'md', 'lock'],
};

const videoExtensions = {
  webm: ['webm'],
  mkv: ['mkv'],
  vob: ['vob'],
  ogg: ['ogv', 'ogg'],
  drc: ['drc'],
  avi: ['avi'],
  mts: ['mts', 'm2ts'],
  quicktime: ['mov', 'qt'],
  'windows-media-video': ['wmv'],
  raw: ['yuv'],
  'real-media': ['rm', 'rmvb'],
  'vivo-active': ['viv'],
  asf: ['asf'],
  amv: ['amv'],
  'mpeg-4': ['mp4', 'm4p', 'm4v'],
  'mpeg-1': ['mpg', 'mp2', 'mpeg', 'mpe', 'mpv'],
  'mpeg-2': ['mpg', 'mpeg', 'm2v'],
  m4v: ['m4v'],
  svi: ['svi'],
  '3gpp': ['3gp'],
  '3gpp2': ['3g2'],
  mxf: ['mxf'],
  roq: ['roq'],
  nsv: ['nsv'],
  flv: ['flv', 'f4v', 'f4p', 'f4a', 'f4b'],
};

const WordExtensions = {
  doc: ['doc', 'docx'],
};

const xlsExtensions = {
  xls: ['xls', 'xlsx'],
};

const xmlExtensions = {
  xml: ['xml', 'xsl', 'xsd'],
  svg: ['svg'],
};

const csvExtensions = {
  csv: ['csv'],
};

const zipExtensions = {
  zip: ['zip', 'zipx'],
};

const defaultExtensions = {};

type fileExtensionsDictionary = Record<FileExtensionGroup, FileExtensionMap>;

const fileExtensionGroups: fileExtensionsDictionary = {
  [FileExtensionGroup.Audio]: audioExtensions,
  [FileExtensionGroup.Code]: codeExtensions,
  [FileExtensionGroup.Figma]: figmaExtensions,
  [FileExtensionGroup.Image]: imageExtensions,
  [FileExtensionGroup.Pdf]: pdfExtensions,
  [FileExtensionGroup.Ppt]: pptExtensions,
  [FileExtensionGroup.Txt]: txtExtensions,
  [FileExtensionGroup.Video]: videoExtensions,
  [FileExtensionGroup.Word]: WordExtensions,
  [FileExtensionGroup.Xls]: xlsExtensions,
  [FileExtensionGroup.Xml]: xmlExtensions,
  [FileExtensionGroup.Csv]: csvExtensions,
  [FileExtensionGroup.Zip]: zipExtensions,
  [FileExtensionGroup.Default]: defaultExtensions,
};

export default fileExtensionGroups;
