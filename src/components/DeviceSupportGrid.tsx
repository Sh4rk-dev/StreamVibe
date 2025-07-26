import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export function DeviceSupportGrid() {
  return (
    <div className="flex flex-col rounded-xl border border-Custom-Black-15 bg-linear-to-tr from-55% from-Custom-Black-8 to-Custom-Red-45/10 p-10 ">
      <div className="mb-8 flex flex-row items-center gap-4">
        <DevicePhoneMobileIcon className="h-10 w-10 text-Custom-Red-45" />
        <h1 className="font-Manrope text-white">Smartphone</h1>
      </div>

      <p className="font-Manrope text-Custom-Gray-60">
        StreamVibe is optimized for both Android and iOS smartphones. Download
        our app from the Google Play Store or the Apple App Store
      </p>
    </div>
  );
}
