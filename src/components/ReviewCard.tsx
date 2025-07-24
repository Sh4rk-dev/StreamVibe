import {
  ArrowLeftIcon,
  ArrowRightIcon,
  StarIcon
} from "@heroicons/react/16/solid";

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  reviewText: string;
}

export function ReviewCard({
  name,
  rating,
  location,
  reviewText
}: ReviewCardProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-row gap-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col p-10 bg-Custom-Black-06 rounded-xl border border-Custom-Black-15"
          >
            <div className="flex flex-row items-center justify-between mb-4">
              <div>
                <h2 className="font-semibold font-Manrope text-white">
                  {name}
                </h2>
                <span className="text-Custom-Gray-60">({location})</span>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center px-2.5 py-1.5 gap-0.5 rounded-full bg-Custom-Black-08 border border-Custom-Black-15">
                  <StarIcon className="w-4 h-4 text-Custom-Red-45" />
                  <StarIcon className="w-4 h-4 text-Custom-Red-45" />
                  <StarIcon className="w-4 h-4 text-Custom-Red-45" />
                  <StarIcon className="w-4 h-4 text-Custom-Red-45" />
                  <StarIcon className="w-4 h-4 text-Custom-Gray-60" />
                  <span className="font-Manrope text-Custom-Gray-60">
                    {rating}
                  </span>
                </div>
              </div>
            </div>

            <p className="font-Manrope text-Custom-Gray-60">{reviewText}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center p-4">
        <button className="bg-Custom-Black-10 rounded-lg p-3">
          <ArrowLeftIcon className="w-13 h-13 text-Custom-Gray-60 bg-Custom-Black-08 border border-Custom-Black-15 rounded-full p-3.5" />
        </button>

        <div className="flex gap-1 px-3">
          <div className="w-5 h-1 text-5xl rounded-lg bg-Custom-Red-45" />
          <div className="w-3 h-1 text-5xl rounded-lg bg-Custom-Black-20" />
          <div className="w-3 h-1 text-5xl rounded-lg bg-Custom-Black-20" />
          <div className="w-3 h-1 text-5xl rounded-lg bg-Custom-Black-20" />
        </div>

        <button className="bg-Custom-Black-10 rounded-lg p-3">
          <ArrowRightIcon className="w-13 h-13 text-Custom-Gray-60 bg-Custom-Black-08 border border-Custom-Black-15 rounded-full p-3.5" />
        </button>
      </div>
    </div>
  );
}
