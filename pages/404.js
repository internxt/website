import React from 'react';

export default function Custom404() {
  return (
    <section>
      <div className="content flex flex-col w-screen h-screen items-center justify-center">
        <h1 className="text-cool-gray-90 text-4xl font-medium">404</h1>
        <p className="text-cool-gray-60 text-xl">Page not found</p>
        <p className="text-primary mt-4">
          <a href="/">Go back home</a>
        </p>
      </div>
    </section>
  );
}
