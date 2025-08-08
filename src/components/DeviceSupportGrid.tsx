import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

interface DeviceSupportGridProps {
  title: string;
  description: string;
}

export function DeviceSupportGrid({
  description,
  title,
}: DeviceSupportGridProps) {
  return (
    <div className="flex flex-col rounded-xl border border-Custom-Black-15 bg-linear-to-tr from-55% from-Custom-Black-8 to-Custom-Red-45/10 p-10 ">
      <div className="mb-8 flex flex-row items-center gap-4">
        <DevicePhoneMobileIcon className="h-10 w-10 text-Custom-Red-45" />
        <h1 className="font-Manrope text-white">{title}</h1>
      </div>

      <p className="font-Manrope text-Custom-Gray-60">{description}</p>
    </div>
  );
}
