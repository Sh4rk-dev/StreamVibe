export function Footer() {
  return (
    <footer className="bg-Custom-Black-06 px-40 pt-25">
      <div className="grid grid-cols-6 grid-rows-1 gap-7.5 pb-25">
        <div>
          <h1 className="text- mb-3 font-Manrope font-bold text-white">Home</h1>
          <div className="flex flex-col gap-3.5">
            <h1 className="font-Manrope text-Custom-Gray-60">Categories</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">Devices</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">Pricing</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">FAQ</h1>
          </div>
        </div>

        <div>
          <h1 className="text- mb-3 font-Manrope font-bold text-white">
            Movies
          </h1>
          <div className="flex flex-col gap-3.5">
            <h1 className="font-Manrope text-Custom-Gray-60">Gernes</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">Trending</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">New Release</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">Popular</h1>
          </div>
        </div>

        <div>
          <h1 className="text- mb-3 font-Manrope font-bold text-white">
            Shows
          </h1>
          <div className="flex flex-col gap-3.5">
            <h1 className="font-Manrope text-Custom-Gray-60">Gernes</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">Trending</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">New Release</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">Popular</h1>
          </div>
        </div>

        <div>
          <h1 className="text- mb-3 font-Manrope font-bold text-white">
            Support
          </h1>
          <div>
            <h1 className="font-Manrope text-Custom-Gray-60">Contact Us</h1>
          </div>
        </div>

        <div>
          <h1 className="text- mb-3 font-Manrope font-bold text-white">
            Subscription
          </h1>
          <div className="flex flex-col gap-3.5">
            <h1 className="font-Manrope text-Custom-Gray-60">Plans</h1>
            <h1 className="font-Manrope text-Custom-Gray-60">Features</h1>
          </div>
        </div>

        <div>
          <div className="gap-3.5">
            <h1 className="text- mb-3 font-Manrope font-bold text-white">
              Connect With Us
            </h1>
          </div>
          <div className="flex flex-row gap-3.5">
            <picture className=" rounded-lg border border-Custom-Black-15 bg-Custom-Black-10 p-4">
              <img
                alt="Facebook Icon"
                src="./src/assets/icons/FacebookIcon.svg"
              />
            </picture>
            <picture className=" rounded-lg border border-Custom-Black-15 bg-Custom-Black-10 p-4">
              <img
                alt="Twitter Icon"
                src="./src/assets/icons/TwitterIcon.svg"
              />
            </picture>
            <picture className=" rounded-lg border border-Custom-Black-15 bg-Custom-Black-10 p-4">
              <img
                alt="LinkedIn Icon"
                src="./src/assets/icons/LinkedInIcon.svg"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between border-Custom-Black-15 border-t pt-4 pb-12.5 ">
        <div className="">
          <h1 className="font-Manrope text-Custom-Gray-60">
            @2023 streamvib, All Rights Reserved
          </h1>
        </div>

        <div className="">
          <div className="flex flex-row items-center gap-3.5">
            <h1 className="font-Manrope text-Custom-Gray-60">Terms of Use</h1>

            <div className="h-4 w-px bg-Custom-Gray-60/50" />

            <h1 className="font-Manrope text-Custom-Gray-60">Privacy Policy</h1>

            <div className="h-4 w-px bg-Custom-Gray-60/50" />

            <h1 className="font-Manrope text-Custom-Gray-60">Cookie Policy</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
