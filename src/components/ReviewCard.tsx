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
    <div className="flex flex-row gap-5">
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
              <div className="">{rating}</div>
            </div>

            <p className="font-Manrope text-Custom-Gray-60">{reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
