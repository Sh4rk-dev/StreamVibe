import { Header } from "@/components/Header/Header";
import {
  PlayIcon,
  PlusIcon,
  HandThumbUpIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/16/solid";

export default function MoviesInfo() {
  return (
    <div className="px-40">
      <Header />

      <section className="mb-24.5">
        <div className="flex-1 w-full h-[800px] rounded-t-xl border-t border-Custom-Black-15 ">
          <picture className="inset-0 -z-10 mask-b-from-10%">
            <img
              src="/src/assets/photo/KantaraMovie.png"
              alt="image"
              className="rounded-t-xl"
            />
          </picture>

          <div className="flex flex-col z-10 relative -top-50">
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className="font-Manrope font-bold text-white text-4xl">
                Kantara
              </h1>

              <span className="font-Manrope text-Custom-Gray-60 text-lg">
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </span>

              <div className="flex flex-row items-center gap-5 pt-7.5">
                <button className="flex flex-row items-center gap-2 px-6 py-3.5 bg-Custom-Red-45 text-white rounded-lg">
                  <PlayIcon className="w-6 h-6 text-white" />
                  Play Now
                </button>

                <PlusIcon className="w-14 h-14 text-white p-3.5 bg-Custom-Black-06 rounded-lg border border-Custom-Black-15" />
                <HandThumbUpIcon className="w-14 h-14 text-white p-3.5 bg-Custom-Black-06 rounded-lg border border-Custom-Black-15" />
                <SpeakerWaveIcon className="w-14 h-14 text-white p-3.5 bg-Custom-Black-06 rounded-lg border border-Custom-Black-15" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <h1>details</h1>
        </div>
      </section>
    </div>
  );
}
