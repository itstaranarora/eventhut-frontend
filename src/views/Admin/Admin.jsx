import React from "react";
import AdminLayout from "components/AdminLayout";
import { useStateValue } from "states/StateProvider";
import MaterialTable from "material-table";
import Logo from "assets/Component-2.svg";

export default function Admin() {
  const [{ user }] = useStateValue();

  if (!user) {
    return (
      <div className="event__loading">
        <img src={Logo} alt="logo" />
      </div>
    );
  }

  console.log(user?.events);

  return (
    <AdminLayout>
      <MaterialTable
        title="Your Events"
        columns={[
          { title: "Name", field: "name" },
          {
            title: "Mode",
            field: "isOnline",
            lookup: { true: "Online", false: "Offline" },
          },
          { title: "Date & Time", field: "datetime", type: "datetime" },
          {
            title: "Price",
            field: "price",
          },
        ]}
        data={user?.events}
        actions={[
          {
            icon: "save",
            tooltip: "Save User",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
        ]}
      />
    </AdminLayout>
  );
}
