import React from "react";
import AdminLayout from "components/AdminLayout";
import { useStateValue } from "states/StateProvider";
import Logo from "assets/Component-2.svg";
import { Typography } from "@material-ui/core";

export default function CreateEvent() {
  const [{ user }] = useStateValue();

  if (!user) {
    return (
      <div className="event__loading">
        <img src={Logo} alt="logo" />
      </div>
    );
  }

  return (
    <AdminLayout>
      <Typography variant="h3" align="center">
        Under Development
      </Typography>
    </AdminLayout>
  );
}
