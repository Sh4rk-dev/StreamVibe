import "react-phone-input-2/lib/style.css";

interface InputTextProps {
  label?: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

export function InputText({
  label,
  id,
  name,
  type,
  required,
  placeholder
}: InputTextProps) {
  return (
    <div className="flex flex-1 flex-col space-y-2">
      <label
        className="block font-Manrope font-semibold text-lg text-white"
        htmlFor={id}
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          className="min-h-[160px] w-full rounded-md border border-Custom-Black-15 bg-Custom-Black-08 p-5 text-white shadow-sm"
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <div>
          <input
            className="w-full rounded-md border border-Custom-Black-15 bg-Custom-Black-08 p-5 text-white shadow-sm"
            id={id}
            name={name}
            placeholder={placeholder}
            required={required}
            type={type}
          />
        </div>
      )}
    </div>
  );
}
