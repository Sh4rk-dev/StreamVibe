import { CheckBox } from "@/components/CheckBox";
import { InputText } from "@/components/Input";
import { InputCountry } from "@/components/InputCountry";

export function Form() {
  return (
    <form className="flex flex-1 flex-col rounded-lg border border-Custom-Black-15 bg-Custom-Black-06 p-12.5 shadow-md">
      <div className="flex flex-1 flex-row gap-12.5 space-y-4">
        <InputText
          id="name"
          label="First Name"
          name="name"
          placeholder="Enter First Name"
          required
          type="text"
        />
        <InputText
          id="last-name"
          label="Last Name"
          name="last-name"
          placeholder="Enter Last Name"
          required
          type="text"
        />
      </div>

      <div className="mt-4 flex flex-row gap-12.5 space-y-4">
        <InputText
          id="email"
          label="Email"
          name="email"
          placeholder="Enter Email Address"
          required
          type="email"
        />

        <InputCountry
          id="phone"
          label="Phone Number"
          name="phone"
          placeholder="Enter Phone number"
          required
          type="tel"
        />
      </div>

      <div>
        <InputText
          id="message"
          label="Message"
          name="message"
          placeholder="Enter your message"
          required
          type="textarea"
        />
      </div>

      <div className="flex mt-10 flex-row justify-between items-center">
        <div className="flex flex-row gap-1 items-center">
          <CheckBox />
          <span className="font-Manrope font-light text-sm text-Custom-Gray-60">
            I agree with Terms of Use and Privacy Policy
          </span>
        </div>

        <button
          className="flex items-center justify-center rounded-lg bg-Custom-Red-45 py-4 px-2 font-Manrope font-semibold text-white"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
