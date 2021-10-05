export default function Custom500() {
  return (
    <section>
      <div className="content flex flex-col w-screen h-screen items-center justify-center">
        <h1 className="text-neutral-500 text-4xl font-semibold">500</h1>
        <p className="text-neutral-100 text-xl">Server-side error occurred</p>
      </div>
    </section>
  );
}
