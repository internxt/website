import React from 'react';

export default function iframe() {
  const onSuccess = () => {
    window.top.postMessage('redirect', '*');
  };
  return (
    <div className="flex flex-row">
      <div onClick={onSuccess} className="flex flex-row px-4 py-1.5 rounded-md bg-primary text-white">
        Redirect
      </div>
    </div>
  );
}
