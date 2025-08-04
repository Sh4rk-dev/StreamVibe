import PhoneInput from "react-phone-input-2";
interface InputCountry extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

export function InputCountry({
  label,
  id,
  name,
  type,
  required,
  placeholder,
}: InputCountry) {
  return (
    <div className="flex flex-1 flex-col space-y-2">
      <label
        className="block font-Manrope font-semibold text-lg text-white"
        htmlFor={id}
      >
        {label}
      </label>

      {type === "tel" ? (
        <PhoneInput
          country={"br"}
          disableDropdown
          inputStyle={{
            backgroundColor: "transparent",
            border: "none",
          }}
          buttonStyle={{
            cursor: "default",
            backgroundColor: "transparent",
            border: "none",
            pointerEvents: "none",
          }}
          dropdownStyle={{
            backgroundColor: "#141414",
            border: "1px solid #262626",
          }}
          containerStyle={{
            fontFamily: "Manrope",
            color: "#fff",
            backgroundColor: "#141414",
            width: "100%",
            padding: 15,
            borderRadius: 5,
            border: "1px solid #262626",
          }}
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
