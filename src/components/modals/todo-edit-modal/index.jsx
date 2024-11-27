import { Modal, Input } from "antd";
import React, { useContext, useRef, useState } from "react";
import { ModalAppContext } from "../../../context/modal";
import { TodoAppContext } from "../../../context/todo-context";
import { GetIdAppContext } from "../../../context/getid-context";
import { NotificationApi } from "../../../generic/notification";

const ModalEdit = () => {
  const ref = useRef(null);
  const notify = NotificationApi();

  const { editModalVisibility, setEditModalVisiblty } =
    useContext(ModalAppContext);
  const { id } = useContext(GetIdAppContext);
  const { dispatch } = useContext(TodoAppContext);
  const handleOk = () => {
    setEditModalVisiblty(false);
    dispatch({ type: "edit", new_text: ref.current.input.value, id2: id });
    notify({ type: "edit" });
  };
  const handleCancel = () => setEditModalVisiblty(false);

  return (
    <div>
      <Modal
        closable={false}
        open={editModalVisibility}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Input ref={ref} placeholder="ediitts" />
      </Modal>
    </div>
  );
};

export default ModalEdit;
