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
  browserImg = getImage('/images/home/header/browser.webp'),
  folderImg = getImage('/images/home/header/folder.svg'),
  zipImg = getImage('/images/home/header/zip.svg'),
  powerpointImg = getImage('/images/home/header/powerpoint.svg'),
  csvImg = getImage('/images/home/header/csv.svg'),
  previewImg = getImage('/images/home/header/file_item.webp'),
  taskloggerImg = getImage('/images/home/header/tasklogger.webp'),
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
    }, 500);
    setTimeout(() => {
      setHeaderAnimation2(true);
    }, 900);
    setTimeout(() => {
      setHeaderAnimation3(true);
    }, 1200);
    setTimeout(() => {
      setHeaderAnimation4(true);
    }, 1500);
    setTimeout(() => {
      setHeaderAnimation5(true);
    }, 1650);
    setTimeout(() => {
      setHeaderAnimation6(true);
    }, 1800);
    setTimeout(() => {
      setHeaderAnimation7(true);
    }, 2000);
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
            layout="fill"
            className="rounded-2xl"
            alt="desktop, laptop and phone with Internxt app"
          />
        </div>
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
        <Image loading="eager" src={zipImg} draggable="false" layout="fill" alt="folder icon" />
      </div>

      {/* Icon / Powerpoint */}
      <div
        className={`${headerAnimation6 ? 'animate-fade-in-r' : 'hidden'} absolute left-7 top-52`}
        style={{ filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1))', width: '52px', height: '52px' }}
      >
        <Image loading="eager" src={powerpointImg} draggable="false" layout="fill" alt="folder icon" />
      </div>

      {/* Icon / Csv */}
      <div
        className={`${headerAnimation7 ? 'animate-fade-in-r' : 'hidden'} absolute left-14 bottom-20`}
        style={{ filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1))', width: '48px', height: '48px' }}
      >
        <Image loading="eager" src={csvImg} draggable="false" layout="fill" alt="folder icon" />
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
        className={`${headerAnimation3 ? 'animate-fade-in-r-large' : 'hidden'} absolute left-[416px] bottom-0`}
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
          layout="fill"
          alt="file logger with items downloading"
        />
      </div>
    </div>
  );
};

export default Animation;
