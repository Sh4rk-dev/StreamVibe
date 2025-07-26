export function CardPlan() {
  return (
    <div className="flex flex-col rounded-xl border border-Custom-Black-15 bg-Custom-Black-10">
      <div className="flex flex-col gap-y-4 p-12.5">
        <h1 className="font-Manrope text-2xl text-white">Basic Plan</h1>
        <p className="font-Manrope text-Custom-Gray-60 text-lg">
          Enjoy an extensive library of movies and shows, featuring a range of
          content, including recently released titles.
        </p>

        <div className="my-12 flex flex-row items-end">
          <span className="font-Manrope font-bold text-4xl text-white">
            $9.99
          </span>
          <span className="font-Manrope text-Custom-Gray-60">/month</span>
        </div>

        <div className="flex flex-row gap-5">
          <button
            className="flex-1 items-center justify-center rounded-lg border border-Custom-Black-15 bg-Custom-Black-08 py-4.5 font-Manrope text-white"
            type="button"
          >
            Start Free Trial
          </button>
          <button
            className="flex-1 items-center justify-center rounded-lg bg-Custom-Red-45 py-4.5 font-Manrope text-white"
            type="button"
          >
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
