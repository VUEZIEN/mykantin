export default function NotFound() {
  return (
    <div className="expection left-0 right-0 absolute bg-white">
      <span className="relative">
        <figure className="bg-[url('../public/zic.png')] w-[726px] h-[694px]"></figure>
        <figcaption className="absolute left-0 right-0 top-[40vh] text-center space-y-2">
          <h1 className="text-5xl font-semibold">Not Found</h1>
          <p className="font-medium">Sorry, we couldn&apos;t find that page…</p>
        </figcaption>
      </span>
    </div>
  );
}
