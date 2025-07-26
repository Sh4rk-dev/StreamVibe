import { ClockIcon, EyeIcon } from "@heroicons/react/16/solid";

export function CardTrendingNow() {
  return (
    <div className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-10">
      <div className="p-5">
        <picture className="mx-auto">
          <img
            alt="Image: Trending Now"
            src="./src/assets/photo/TrendingNow.png"
          />
        </picture>

        <div className="flex flex-row items-center justify-between pt-5">
          <div className="flex flex-row items-center gap-0.5 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 px-2.5 py-1.5">
            <ClockIcon className="h-4 w-4 text-Custom-Gray-60" />
            <span className="font-Manrope text-Custom-Gray-60">1h 30min</span>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-0.5 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 px-2.5 py-1.5">
              <EyeIcon className="h-4 w-4 text-Custom-Gray-60" />
              <span className="font-Manrope text-Custom-Gray-60">2k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
