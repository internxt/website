import { FunctionComponent, SVGProps } from 'react';
import fileExtensionGroups from '../types/types';

import LightFolder from '../public/icons/file-types/folder.svg';
import DefaultFile from '../public/icons/file-types/default.svg';
import AudioFile from '../public/icons/file-types/audio.svg';
import CodeFile from '../public/icons/file-types/code.svg';
import FigmaFile from '../public/icons/file-types/figma.svg';
import ImageFile from '../public/icons/file-types/image.svg';
import PdfFile from '../public/icons/file-types/pdf.svg';
import PptFile from '../public/icons/file-types/ppt.svg';
import TxtFile from '../public/icons/file-types/txt.svg';
import VideoFile from '../public/icons/file-types/video.svg';
import WordFile from '../public/icons/file-types/word.svg';
import XlsFile from '../public/icons/file-types/excel.svg';
import CsvFile from '../public/icons/file-types/csv.svg';
import ZipFile from '../public/icons/file-types/zip.svg';

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

const iconsByFileExtensionGroup = {
  [FileExtensionGroup.Audio]: AudioFile,
  [FileExtensionGroup.Code]: CodeFile,
  [FileExtensionGroup.Figma]: FigmaFile,
  [FileExtensionGroup.Image]: ImageFile,
  [FileExtensionGroup.Pdf]: PdfFile,
  [FileExtensionGroup.Ppt]: PptFile,
  [FileExtensionGroup.Txt]: TxtFile,
  [FileExtensionGroup.Video]: VideoFile,
  [FileExtensionGroup.Word]: WordFile,
  [FileExtensionGroup.Xls]: XlsFile,
  [FileExtensionGroup.Xml]: CodeFile,
  [FileExtensionGroup.Csv]: CsvFile,
  [FileExtensionGroup.Zip]: ZipFile,
  [FileExtensionGroup.Default]: DefaultFile,
};

function computeExtensionsLists(
  filter: { [key in FileExtensionGroup]?: string[] } = {},
): Record<FileExtensionGroup, string[]> {
  const extensionsLists: Partial<Record<FileExtensionGroup, string[]>> = {};

  Object.values(FileExtensionGroup)
    .filter((groupId) => isNaN(Number(groupId)))
    .forEach((groupId: string | FileExtensionGroup) => {
      extensionsLists[groupId as FileExtensionGroup] = computeExtensionsList(
        FileExtensionGroup[groupId],
        filter[FileExtensionGroup[groupId]],
      );
    });

  return extensionsLists as Record<FileExtensionGroup, string[]>;
}

function computeExtensionsList(groupId: FileExtensionGroup, filter: string[]): string[] {
  return Object.entries(fileExtensionGroups[groupId])
    .filter(([formatKey]) => !filter || filter.includes(formatKey))
    .reduce((t, [, formatExtensions]): string[] => {
      return t.concat(formatExtensions);
    }, [] as string[]);
}

const extensionList = computeExtensionsLists();

export const icons = {
  AudioFile,
  CodeFile,
  FigmaFile,
  ImageFile,
  PdfFile,
  PptFile,
  TxtFile,
  VideoFile,
  WordFile,
  XlsFile,
  ZipFile,
  DefaultFile,
  LightFolder,
};

export const getItemIcon = (isFolder: boolean, itemExtension?: string): FunctionComponent<SVGProps<SVGSVGElement>> => {
  let groupId: FileExtensionGroup = FileExtensionGroup.Default;

  if (itemExtension) {
    Object.entries(extensionList).every(([key, list]) => {
      const matched = list.includes(itemExtension.toLowerCase());

      if (matched) {
        groupId = FileExtensionGroup[key];
      }

      return !matched;
    });
  }

  return !isFolder ? iconsByFileExtensionGroup[groupId] : LightFolder;
};

const iconService = {
  getItemIcon,
};

export default iconService;
