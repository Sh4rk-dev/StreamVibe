import { InputText } from "@/components/Input";

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

        <InputText
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
    </form>
  );
}
