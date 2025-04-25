import { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import { getImage } from '@/lib/getImage';
interface AnimationProps {
  browserImg?: string;
  folderImg?: string;
  zipImg?: string;
  powerpointImg?: string;
  csvImg?: string;
  previewImg?: string;
  taskloggerImg?: string;
}
const Animation = ({
  browserImg = getImage('/images/home/header/browser.webp', true),
  folderImg = getImage('/images/home/header/folder.svg', true),
  zipImg = getImage('/images/home/header/zip.svg', true),
  powerpointImg = getImage('/images/home/header/powerpoint.svg', true),
  csvImg = getImage('/images/home/header/csv.svg', true),
  previewImg = getImage('/images/home/header/file_item.webp', true),
  taskloggerImg = getImage('/images/home/header/tasklogger.webp', true),
}: AnimationProps) => {
  // Header animation
  const [headerAnimation1, setHeaderAnimation1] = useState<boolean>(false);
  const [headerAnimation2, setHeaderAnimation2] = useState<boolean>(false);
  const [headerAnimation3, setHeaderAnimation3] = useState<boolean>(false);
  const [headerAnimation4, setHeaderAnimation4] = useState<boolean>(false);
  const [headerAnimation5, setHeaderAnimation5] = useState<boolean>(false);
  const [headerAnimation6, setHeaderAnimation6] = useState<boolean>(false);
  const [headerAnimation7, setHeaderAnimation7] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setHeaderAnimation1(true);
    }, 200);
    setTimeout(() => {
      setHeaderAnimation2(true);
    }, 600);
    setTimeout(() => {
      setHeaderAnimation3(true);
    }, 900);
    setTimeout(() => {
      setHeaderAnimation4(true);
    }, 1200);
    setTimeout(() => {
      setHeaderAnimation5(true);
    }, 1350);
    setTimeout(() => {
      setHeaderAnimation6(true);
    }, 1500);
    setTimeout(() => {
      setHeaderAnimation7(true);
    }, 1700);
  }, []);
  return (
    <div className="relative ml-10 hidden max-w-2xl flex-grow lg:flex xl:ml-20">
      {/* Browser window */}
      <div className={`${headerAnimation1 ? 'animate-fade-in-r-large' : 'hidden'} absolute inset-0`}>
        <div
          className="relative left-48 top-1/2 -translate-y-1/2"
          style={{
            boxShadow: '56px 56px 80px rgba(0,0,0,.2)',
            width: '800px',
            height: '520px',
            borderRadius: '24px',
          }}
        >
          <Image
            loading="eager"
            src={browserImg}
            draggable="false"
            width={800}
            height={520}
            className="rounded-2xl"
            alt="drive web app"
          />
        </div>
      </div>
      {/* File preview */}
      <div
        className={`${headerAnimation2 ? 'animate-fade-in-r-large' : 'hidden'} absolute left-20`}
        style={{
          boxShadow: '16px 32px 40px rgba(0,0,0,.1)',
          width: '142px',
          height: '152px',
          bottom: '150px',
          borderRadius: '24px',
        }}
      >
        <Image loading="eager" src={previewImg} draggable="false" layout="fill" alt="photo file preview" />
      </div>

      {/* Tasklogger */}
      <div
        className={`${headerAnimation3 ? 'animate-fade-in-r-large' : 'hidden'} absolute bottom-0 left-[416px]`}
        style={{
          boxShadow: '16px 32px 40px rgba(0,0,0,.1)',
          width: '211px',
          height: '190px',
          borderRadius: '24px',
        }}
      >
        <Image
          loading="eager"
          src={taskloggerImg}
          draggable="false"
          width={211}
          height={190}
          alt="file logger with items downloading"
        />
      </div>
      {/* Icon / Folder */}
      <div
        className={`${headerAnimation4 ? 'animate-fade-in-r' : 'hidden'} absolute left-0 top-12`}
        style={{ filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1))', width: '64px', height: '64px' }}
      >
        <Image loading="eager" src={folderImg} draggable="false" layout="fill" alt="folder icon" />
      </div>

      {/* Icon / Zip */}
      <div
        className={`${headerAnimation5 ? 'animate-fade-in-r' : 'hidden'} absolute left-20 top-32`}
        style={{ filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1))', width: '56px', height: '56px' }}
      >
        <Image loading="eager" src={zipImg} draggable="false" layout="fill" alt="zip icon" />
      </div>
      {/* Icon / Powerpoint */}
      <div
        className={`${headerAnimation6 ? 'animate-fade-in-r' : 'hidden'} absolute left-7 top-52`}
        style={{ filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1))', width: '52px', height: '52px' }}
      >
        <Image loading="eager" src={powerpointImg} draggable="false" layout="fill" alt="powerpoint icon" />
      </div>

      {/* Icon / Csv */}
      <div
        className={`${headerAnimation7 ? 'animate-fade-in-r' : 'hidden'} absolute bottom-20 left-14`}
        style={{ filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1))', width: '48px', height: '48px' }}
      >
        <Image loading="eager" src={csvImg} draggable="false" layout="fill" alt="Csv icon" />
      </div>
    </div>
  );
};
export default Animation;
