import { Button, Input, Table } from "antd";
import { Form } from "antd";
import { useContext } from "react";
import { TodoAppContext } from "../../context/todo-context";
import ModalEdit from "../modals/todo-edit-modal";
import { columns } from "../../utils";
import { NotificationApi } from "../../generic/notification";
import { GetIdAppContext } from "../../context/getid-context";
import { ModalAppContext } from "../../context/modal";

const HomeComponent = () => {
  const [form] = Form.useForm();
  const { setId } = useContext(GetIdAppContext);
  const { data, dispatch } = useContext(TodoAppContext);
  const { setEditModalVisiblty } = useContext(ModalAppContext);

  const notify = NotificationApi();
  const submit = (e) => {
    dispatch({
      type: "add",
      newTask: {
        id: Date.now(),
        key: Date.now() + 1,
        ...e,
      },
    });
    notify({ type: "add" });
    form.resetFields();
  };
  let dataMap = data.data.map((value) => {
    return {
      ...value,
      delete: (
        <Button
          onClick={() => {
            dispatch({ type: "delete", id: value.id });
            notify({ type: "delete" });
          }}
        >
          Delete
        </Button>
      ),
      update: (
        <Button
          onClick={() => {
            setEditModalVisiblty(true);
            setId(value.id);
          }}
        >
          Update
        </Button>
      ),
    };
  });
  return (
    <div className="w-[60%] m-auto">
      <Form
        form={form}
        onFinish={submit}
        className="my-[20px] flex gap-2 h-[40px]"
      >
        <Form.Item
          name={"task"}
          rules={[{ required: true, message: "Please entar task.." }]}
          className="w-full"
        >
          <Input placeholder="Add task..." className="w-full h-[40px]" />
        </Form.Item>
        <button
          className="bg-[#46A358]  rounded-md text-base text-white w-[100px]"
          type="primary"
        >
          Send
        </button>
      </Form>
      <Table columns={columns} dataSource={dataMap} />
      <ModalEdit />
    </div>
  );
};

export default HomeComponent;
