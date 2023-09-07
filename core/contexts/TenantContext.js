import { createContext, useState } from "react";

export const TenantContext = createContext({
  tenant: "apollo",
  updateTenant: (val) => {},
});

export const TenantContextProvider = ({ children }) => {
  const [tenant, setTenant] = useState("apollo");

  const updateTenant = (val) => {
    setTenant(val);
  };

  return (
    <TenantContext.Provider
      value={{
        tenant,
        updateTenant,
      }}
    >
      {children}
    </TenantContext.Provider>
  );
};
