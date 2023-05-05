import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const WhatsAppButton = ({ phoneNumber }: { phoneNumber: string }) => {
  return (
    <div className="whatsapp-icon">
      {" "}
      <Link href={`https://wa.me/${phoneNumber}`}>
        <FontAwesomeIcon
          icon={["fab", "whatsapp"]}
          size="3x"
          className="text-green-500 hover:text-green-600 hover-scale transition-all  duration-300"
        />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
