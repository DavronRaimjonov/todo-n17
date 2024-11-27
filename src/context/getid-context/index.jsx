import { createContext, useState } from "react";

const GetIdAppContext = createContext({});

const GetIdContext = ({ children }) => {
  const [id, setId] = useState(null);

  return (
    <GetIdAppContext.Provider value={{ id, setId }}>
      {children}
    </GetIdAppContext.Provider>
  );
};

export { GetIdContext, GetIdAppContext };
