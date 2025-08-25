import {
  CalendarIcon,
  LanguageIcon,
  StarIcon,
} from '@heroicons/react/16/solid';
import {
  Squares2X2Icon,
  StarIcon as StarIconSolid,
} from '@heroicons/react/24/outline';
import type React from 'react';

interface ShowDetailsProps {
  children: React.ReactNode;
}
interface ShowDetailsReleasedYearProps {
  title: string;
  year: string;
}
interface ShowDetailsAvailableLanguageRootProps {
  title: string;
  children: React.ReactNode;
}

interface ShowDetailsLanguageProps {
  textLanguage: string;
}

interface ShowDetailsRatingsRootProps {
  title: string;
  children: React.ReactNode;
}

interface ShowDetailsRatingsProps {
  textRatings: string;
  rating: number;
}

interface ShowDetailsGenderRootProps {
  title: string;
  children: React.ReactNode;
}
interface ShowDetailsGenderProps {
  gender: string;
}
interface ShowDetailsDirectorProps {
  title: string;
  children: React.ReactNode;
}
interface ShowDetailsDirectorItemProps {
  name: string;
  url: string;
  alt: string;
  city: string;
}

interface ShowDetailsMusicProps {
  title: string;
  children: React.ReactNode;
}

interface ShowDetailsMusicItemProps {
  name: string;
  url: string;
  alt: string;
  city: string;
}

function ShowDetails({ children }: ShowDetailsProps) {
  return (
    <div className="col-start-3 row-span-1 row-start-1 flex h-fit flex-1 flex-col rounded-xl border border-Custom-Black-15 bg-Custom-Black-10 p-12.5">
      {children}
    </div>
  );
}

function ShowDetailsReleasedYear({
  title,
  year,
}: ShowDetailsReleasedYearProps) {
  return (
    <div className="mb-7.5">
      <div className="flex flex-1 flex-col gap-3.5">
        <div className="flex flex-row items-center gap-1 ">
          <CalendarIcon className="h-6 w-6 text-Custom-Gray-60" />
          <h1 className="font-Manrope font-medium text-Custom-Gray-60">
            {title}
          </h1>
        </div>
        <span className="font-Manrope font-medium text-white">{year}</span>
      </div>
    </div>
  );
}

function ShowDetailsAvailableLanguageRoot({
  title,
  children,
}: ShowDetailsAvailableLanguageRootProps) {
  return (
    <div className="mb-7.5 flex flex-col gap-3.5">
      <div className="flex flex-row gap-1">
        <LanguageIcon className="h-6 w-6 text-Custom-Gray-60" />
        <h1 className="font-Manrope font-medium text-Custom-Gray-60">
          {title}
        </h1>
      </div>

      <div className="flex flex-row flex-wrap gap-2.5">{children}</div>
    </div>
  );
}

function ShowDetailsLanguage({ textLanguage }: ShowDetailsLanguageProps) {
  return (
    <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
      {textLanguage}
    </span>
  );
}

function ShowDetailsRatingsRoot({
  children,
  title,
}: ShowDetailsRatingsRootProps) {
  return (
    <div className="mb-7.5 flex flex-col gap-3.5 bg-red-500">
      <div className="mt-6 flex flex-row items-center gap-1">
        <StarIconSolid className="h-6 w-6 text-Custom-Gray-60" />
        <h1 className="font-Manrope font-medium text-Custom-Gray-60">
          {title}
        </h1>
      </div>

      <div className="mt-3 flex gap-3">{children}</div>
    </div>
  );
}

function ShowDetailsRatings({ rating, textRatings }: ShowDetailsRatingsProps) {
  return (
    <div className="flex-1 rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 p-4">
      <span className="pl-2.5 font-Manrope font-bold text-white">
        {textRatings}
      </span>
      <div className="flex flex-row items-center gap-0.5 px-2.5 py-1.5">
        <StarIcon className="h-6 w-6 text-Custom-Red-45" />
        <StarIcon className="h-6 w-6 text-Custom-Red-45" />
        <StarIcon className="h-6 w-6 text-Custom-Red-45" />
        <StarIcon className="h-6 w-6 text-Custom-Red-45" />
        <StarIcon className="h-6 w-6 text-Custom-Gray-60" />
        <span className="font-Manrope text-Custom-Gray-60 text-xl">
          {rating}
        </span>
      </div>
    </div>
  );
}

function ShowDetailsGenderRoot({
  children,
  title,
}: ShowDetailsGenderRootProps) {
  return (
    <div className="mb-7.5 flex flex-col gap-3.5">
      <div className="mt-6 flex flex-row items-center gap-1">
        <Squares2X2Icon className="h-6 w-6 text-Custom-Gray-60" />
        <h1 className="font-Manrope font-medium text-Custom-Gray-60">
          {title}
        </h1>
      </div>

      <div className="mt-2 flex flex-row items-center gap-2">{children}</div>
    </div>
  );
}

function ShowDetailsGender({ gender }: ShowDetailsGenderProps) {
  return (
    <span className="rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 px-3.5 py-2 font-Manrope font-medium text-white">
      {gender}
    </span>
  );
}

function ShowDetailsDirector({ children, title }: ShowDetailsDirectorProps) {
  return (
    <div className="mb-7.5 flex flex-col gap-3.5">
      <h1 className="font-Manrope font-medium text-Custom-Gray-60">{title}</h1>

      <div className="space-y-4 rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 p-3.5">
        {children}
      </div>
    </div>
  );
}

function ShowDetailsDirectorItem({
  name,
  url,
  alt,
  city,
}: ShowDetailsDirectorItemProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <picture className="h-15 w-15 justify-between rounded-xl border border-Custom-Black-15">
        <img
          alt={alt}
          className="h-full w-full rounded-xl object-cover"
          src={url}
        />
      </picture>
      <div className="flex flex-col items-start">
        <span className="font-Manrope font-medium text-white">{name}</span>
        <span className="font-Manrope font-medium text-Custom-Gray-60">
          From {city}
        </span>
      </div>
    </div>
  );
}

function ShowDetailsMusic({ children, title }: ShowDetailsMusicProps) {
  return (
    <div className="mb-7.5 flex flex-col gap-3.5">
      <h1 className="font-Manrope font-medium text-Custom-Gray-60">
        Music{title}
      </h1>

      <div className="space-y-4 rounded-xl border border-Custom-Black-15 bg-Custom-Black-08 p-3.5">
        {children}
      </div>
    </div>
  );
}

function ShowDetailsMusicItem({
  alt,
  url,
  city,
  name,
}: ShowDetailsMusicItemProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <picture className="h-15 w-15 justify-between rounded-xl border border-Custom-Black-15">
        <img
          alt={alt}
          className="h-full w-full rounded-xl object-cover"
          src={url}
        />
      </picture>
      <div className="flex flex-col items-start">
        <span className="font-Manrope font-medium text-white">{name}</span>
        <span className="font-Manrope font-medium text-Custom-Gray-60">
          From {city}
        </span>
      </div>
    </div>
  );
}

ShowDetails.Music = ShowDetailsMusic;
ShowDetails.MusicItem = ShowDetailsMusicItem;
ShowDetails.Gender = ShowDetailsGender;
ShowDetails.Ratings = ShowDetailsRatings;
ShowDetails.Director = ShowDetailsDirector;
ShowDetails.Released = ShowDetailsReleasedYear;
ShowDetails.GenderRoot = ShowDetailsGenderRoot;
ShowDetails.RatingsRoot = ShowDetailsRatingsRoot;
ShowDetails.DirectorItem = ShowDetailsDirectorItem;
ShowDetails.AvailableLanguage = ShowDetailsLanguage;
ShowDetails.AvailableRoot = ShowDetailsAvailableLanguageRoot;

export { ShowDetails };
