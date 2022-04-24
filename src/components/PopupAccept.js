import React from "react";
import infoImage from '../images/popup-accept.png'
import InfoTooltip from "./InfoTooltip";


export default function PopupAccept({ isOpen, onClose }) {
  return (
    <InfoTooltip
      popupType="accept"
      popupInfoImage={infoImage}
      isOpen={isOpen}
      onClose={onClose}
    />
  );
}