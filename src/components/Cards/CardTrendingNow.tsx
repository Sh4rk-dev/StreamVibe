import { ClockIcon, EyeIcon } from "@heroicons/react/16/solid";

export function CardTrendingNow() {
  {
    return (
      <div className="rounded-xl bg-Custom-Black-10 border border-Custom-Black-15">
        <div className="p-5">
          <picture className="mx-auto">
            <img src="./src/assets/photo/TrendingNow.png" alt="image" />
          </picture>

          <div className="flex flex-row justify-between items-center pt-5">
            <div className="flex flex-row items-center px-2.5 py-1.5 gap-0.5 rounded-full bg-Custom-Black-08 border border-Custom-Black-15">
              <ClockIcon className="w-4 h-4 text-Custom-Gray-60" />
              <span className="font-Manrope text-Custom-Gray-60">1h 30min</span>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center px-2.5 py-1.5 gap-0.5 rounded-full bg-Custom-Black-08 border border-Custom-Black-15">
                <EyeIcon className="w-4 h-4 text-Custom-Gray-60" />
                <span className="font-Manrope text-Custom-Gray-60">2k</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
