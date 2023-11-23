import React, { useState } from "react";
import "./popup.scss";

// Interface to keep TypeScript happy
interface Props {
  setIsPopupActive: React.Dispatch<boolean>;
  popupProps: {
    id: number;
    name: string;
    value: number;
  };
}

export default function Popup(props: Props) {
  // Variable to check if the user has the cursor on the inner popup
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section
      className="popup"
      id="popup"
      // If the cursor is not on the inner popup,
      // the popup will close
      onClick={() => {
        if (!isHovered) {
          props.setIsPopupActive(false);
        }
      }}
    >
      <div
        className="popup-inner"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div className="props-wrap">
          <div>
            <div className="popup-prop">ID: {props.popupProps.id}</div>
            <div className="popup-prop">Nazwa: {props.popupProps.name}</div>
            <div className="popup-prop">Wartość: {props.popupProps.value}</div>
          </div>
          <div>
            <div
              className="close-btn"
              onClick={() => {
                props.setIsPopupActive(false);
              }}
            >
              X
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
