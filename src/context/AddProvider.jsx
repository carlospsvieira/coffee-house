import React, { createContext, useMemo, useState } from "react";

export const Context = createContext();

function AddProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const value = useMemo(
    () => ({
      menuOpen,
      setMenuOpen,
    }),
    [menuOpen, setMenuOpen]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AddProvider;
