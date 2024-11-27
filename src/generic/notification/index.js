import { notification } from "antd";

export const NotificationApi = () => {
  const notify = ({ type }) => {
    switch (type) {
      case "add":
        return notification.success({ message: "Add new task" });
      case "delete":
        return notification.error({ message: "Delete task" });
      case "edit":
        return notification.info({ message: "Edited task" });
    }
  };
  return notify;
};
