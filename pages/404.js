import React from 'react';

export default function Custom404() {
  return (
    <section>
      <div className="content flex flex-col w-screen h-screen items-center justify-center">
        <h1 className="text-neutral-500 text-4xl font-semibold">404</h1>
        <p className="text-neutral-100 text-xl">Page not found</p>
        <p className="text-blue-60 mt-4"><a href="/">Go back home</a></p>
      </div>
    </section>
  );
}
