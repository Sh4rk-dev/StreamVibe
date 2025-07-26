export function CardNewReleases() {
  return (
    <div className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-10">
      <div className="p-5">
        <picture className="mx-auto">
          <img
            alt="Image: New Releases"
            src="./src/assets/photo/NewReleases.png"
          />
        </picture>

        <div className="items-center pt-5">
          <div className="flex items-center justify-center rounded-full border border-Custom-Black-15 bg-Custom-Black-08 px-2.5 py-1.5">
            <span className="font-Manrope text-Custom-Gray-60 text-sm">
              Released at 14 April 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
