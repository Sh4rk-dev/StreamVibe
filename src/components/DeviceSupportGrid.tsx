import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export function DeviceSupportGrid() {
  return (
    <div className="flex flex-col p-10 border border-Custom-Black-15 rounded-xl bg-linear-to-tr from-Custom-Black-8 from-55% to-Custom-Red-45/10 ">
      <div className="flex flex-row gap-4 items-center mb-8">
        <DevicePhoneMobileIcon className="w-10 h-10 text-Custom-Red-45" />
        <h1 className="font-Manrope text-white">Smartphone</h1>
      </div>

      <p className="font-Manrope text-Custom-Gray-60">
        StreamVibe is optimized for both Android and iOS smartphones. Download
        our app from the Google Play Store or the Apple App Store
      </p>
    </div>
  );
}
