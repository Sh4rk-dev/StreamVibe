/** biome-ignore-all lint/style/useFilenamingConvention: <explanation> */
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/16/solid';

interface ReviewProps {
  children: React.ReactNode;
}

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  reviewText: string;
}

interface ReviewHeaderProps {
  title: string;
  nameButton: string;
}

export function ReviewCard({
  name,
  rating,
  location,
  reviewText,
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
    </div>
  );
}

function ReviewHeader({ nameButton, title }: ReviewHeaderProps) {
  return (
    <div className="mb-10 flex flex-row items-center justify-between">
      <h1 className="font-Manrope font-medium text-Custom-Gray-60">{title}</h1>

      <button
        className="mt-4 flex flex-row items-center gap-2 rounded-lg bg-Custom-Red-45 px-6 py-3.5 text-white"
        type="button"
      >
        <PlusIcon className="h-6 w-6 text-white" />
        <span>{nameButton}</span>
      </button>
    </div>
  );
}

function ReviewArrow() {
  return (
    <div className="flex flex-row items-center justify-center p-4">
      <button className="rounded-lg bg-Custom-Black-10 p-3" type="button">
        <ArrowLeftIcon className="h-13 w-13 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-3.5 text-Custom-Gray-60" />
      </button>

      <div className="flex gap-1">
        <div className="h-1 w-5 rounded-lg bg-Custom-Red-45 text-5xl" />
        <div className="h-1 w-3 rounded-lg bg-Custom-Black-20 text-5xl" />
        <div className="h-1 w-3 rounded-lg bg-Custom-Black-20 text-5xl" />
        <div className="h-1 w-3 rounded-lg bg-Custom-Black-20 text-5xl" />
      </div>

      <button className="rounded-lg bg-Custom-Black-10 p-3" type="button">
        <ArrowRightIcon className="h-13 w-13 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-3.5 text-Custom-Gray-60" />
      </button>
    </div>
  );
}

function Review({ children }: ReviewProps) {
  return (
    <div className="col-span-2 col-start-1 row-start-3 flex flex-col rounded-lg border border-Custom-Black-15 bg-Custom-Black-10 p-12.5 overflow-hidden">
      {children}
    </div>
  );
}

Review.Card = ReviewCard;
Review.Arrow = ReviewArrow;
Review.Header = ReviewHeader;

export { Review };
