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
            className="flex flex-col rounded-xl border border-Custom-Black-15 bg-Custom-Black-06 p-10"
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
          >
            <div className="mb-4 flex flex-row items-center justify-between">
              <div>
                <h2 className="font-Manrope font-semibold text-white">
                  {name}
                </h2>
                <span className="text-Custom-Gray-60">({location})</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-0.5 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 px-2.5 py-1.5">
                  <StarIcon className="h-4 w-4 text-Custom-Red-45" />
                  <StarIcon className="h-4 w-4 text-Custom-Red-45" />
                  <StarIcon className="h-4 w-4 text-Custom-Red-45" />
                  <StarIcon className="h-4 w-4 text-Custom-Red-45" />
                  <StarIcon className="h-4 w-4 text-Custom-Gray-60" />
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
        <button className="rounded-lg bg-Custom-Black-10 p-3" type="button">
          <ArrowLeftIcon className="h-13 w-13 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-3.5 text-Custom-Gray-60" />
        </button>

        <div className="flex gap-1 px-3">
          <div className="h-1 w-5 rounded-lg bg-Custom-Red-45 text-5xl" />
          <div className="h-1 w-3 rounded-lg bg-Custom-Black-20 text-5xl" />
          <div className="h-1 w-3 rounded-lg bg-Custom-Black-20 text-5xl" />
          <div className="h-1 w-3 rounded-lg bg-Custom-Black-20 text-5xl" />
        </div>

        <button className="rounded-lg bg-Custom-Black-10 p-3" type="button">
          <ArrowRightIcon className="h-13 w-13 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-3.5 text-Custom-Gray-60" />
        </button>
      </div>
    </div>
  );
}
