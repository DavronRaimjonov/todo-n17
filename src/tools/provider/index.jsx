import React from "react";
import { ModalContext } from "../../context/modal";
import { TodoContext } from "../../context/todo-context";
import { GetIdContext } from "../../context/getid-context";

const ProiverConf = ({ children }) => {
  return (
    <GetIdContext>
      <ModalContext>
        <TodoContext> {children} </TodoContext>
      </ModalContext>
    </GetIdContext>
  );
};

export default ProiverConf;
