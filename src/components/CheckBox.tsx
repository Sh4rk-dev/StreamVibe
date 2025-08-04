import { useState } from "react";

export function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <input
      type="checkbox"
      style={{
        width: "20px",
        height: "20px",
        marginRight: "10px",
        cursor: "pointer",
        accentColor: "#FF0000",
        appearance: `${isChecked ? "checkbox" : "none"}`,
        border: "2px solid #262626",
        borderRadius: "4px",
      }}
      required
      onChange={(e) => {
        setIsChecked(e.target.checked);
      }}
    />
  );
}
