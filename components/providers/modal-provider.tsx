"use client";

import { useEffect, useState } from "react";
import RenameModal from "../modals/rename-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { // this ensure component will run in the client side not the server side
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <RenameModal />
    </>
  );
};
