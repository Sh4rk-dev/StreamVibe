import { ArrowDownIcon, ClockIcon } from '@heroicons/react/24/outline';
import { createContext, useContext, useState } from 'react';

interface SeasonEpisodesProps {
  children: React.ReactNode;
}

interface SeasonEpisodesRootProps {
  season: string;
  totalEpisodes: number;
}

type SeasonEpisodesContentProps = {
  title: string;
  description: string;
  duration: string;
  position: string;
  url: string;
};

type SeasonEpisodesContextProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SeasonEpisodesContext = createContext<SeasonEpisodesContextProps>(
  {} as SeasonEpisodesContextProps
);

function SeasonEpisodes({ children }: SeasonEpisodesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SeasonEpisodesContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="mb-3">
        <div className="flex flex-1 flex-col items-center justify-between rounded-xl border border-Custom-Black-15 bg-Custom-Black-06 p-8">
          {children}
        </div>
      </div>
    </SeasonEpisodesContext.Provider>
  );
}

function SeasonEpisodesRoot({
  season,
  totalEpisodes,
}: SeasonEpisodesRootProps) {
  const { isOpen, setIsOpen } = useContext(SeasonEpisodesContext);

  return (
    <button
      className="w-full cursor-pointer "
      onClick={() => setIsOpen(!isOpen)}
      type="button"
    >
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between gap-2.5">
          <h1 className="font-Manrope font-medium text-2xl text-white">
            {season}
          </h1>
          <span className="font-Manrope font-medium text-Custom-Gray-60">
            {totalEpisodes} Episodes
          </span>
        </div>

        {isOpen ? (
          <ArrowDownIcon className="h-10 w-10 rotate-180 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-2.5 text-Custom-Gray-60 transition-transform duration-300" />
        ) : (
          <ArrowDownIcon className="h-10 w-10 rounded-full border border-Custom-Black-15 bg-Custom-Black-08 p-2.5 text-Custom-Gray-60 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
}

function SeasonEpisodesContent({
  title,
  description,
  duration,
  position,
  url,
}: SeasonEpisodesContentProps) {
  const { isOpen } = useContext(SeasonEpisodesContext);
  if (!isOpen) {
    return null;
  }

  return (
    <div className="mt-10 flex w-full flex-row items-center gap-5 border-Custom-Red-45/20 border-t p-6">
      <div className="flex-1 pr-5">
        <span className="font-Manrope font-semibold text-3xl text-Custom-Gray-60">
          {position}
        </span>
      </div>

      <picture className="flex h-[100px] w-[300px] items-center justify-center rounded-lg bg-Custom-Black-08">
        <img
          alt="Stranger Things"
          className="h-full w-full rounded-lg object-cover"
          src={url}
        />
      </picture>

      <div className="flex flex-col">
        <div className=" mb-4 flex flex-row items-center justify-between gap-1">
          <h2 className="font-Manrope font-medium text-white text-xl">
            {title}
          </h2>
          <div className="flex flex-row items-center gap-2 rounded-lg border border-Custom-Black-15 bg-Custom-Black-08 px-2.5 py-1">
            <ClockIcon className="h-5 w-5 text-Custom-Gray-60" />
            <span className="font-Manrope text-Custom-Gray-60">{duration}</span>
          </div>
        </div>

        <p className="font-Manrope text-Custom-Gray-60">{description}</p>
      </div>
    </div>
  );
}

SeasonEpisodes.Root = SeasonEpisodesRoot;
SeasonEpisodes.Content = SeasonEpisodesContent;

export { SeasonEpisodes };
