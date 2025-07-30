import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneFlagOnly.css"; // vamos criar esse arquivo abaixo

export function PhoneFlagOnly() {
  return (
    <PhoneInput
      buttonClass="flag-button-only" // ou 'br', 'us', etc.
      containerClass="flag-container" // mantém o dropdown
      country={"in"} // busca países pelo nome ou código
      disableDropdown={false}
      enableSearch={true}
      inputClass="hide-phone-input"
    />
  );
}
