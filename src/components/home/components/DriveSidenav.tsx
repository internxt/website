import { Clock, ClockCounterClockwise, FolderSimple, ImageSquare, Link, Trash, Users } from '@phosphor-icons/react';
import React from 'react';

const driveItems = [
  {
    item: 'Drive',
    icon: FolderSimple,
  },
  {
    item: 'Photos',
    icon: ImageSquare,
  },
  {
    item: 'Backups',
    icon: ClockCounterClockwise,
  },
  {
    item: 'Shared with me',
    icon: Users,
  },
  {
    item: 'Shared links',
    icon: Link,
  },
  {
    item: 'Recents',
    icon: Clock,
  },
  {
    item: 'Trash',
    icon: Trash,
  },
];

const DriveSidenav = () => {
  return (
    <div className="flex  overflow-hidden rounded-xl shadow-2xl">
      <div className="flex  cursor-default flex-col py-2 px-2">
        {driveItems.map((item) => (
          <div
            className="flex w-screen max-w-[240px] flex-row items-center space-x-2 rounded-lg py-2 pr-3  pl-6 text-gray-60 first:bg-primary first:bg-opacity-10 first:text-primary"
            key={item.item}
          >
            <item.icon size={24} weight={item.icon.displayName === 'FolderSimple' ? 'fill' : 'regular'} />
            <p className=" text-base font-medium first:text-primary">{item.item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriveSidenav;