import React from "react";
import infoImage from "../images/popup-fail.png";
import InfoTooltip from "./InfoTooltip";

export default function ErrorPopup({ isOpen, onClose }) {
  return (
    <InfoTooltip
      popupType="error"
      popupInfoImage={infoImage}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}