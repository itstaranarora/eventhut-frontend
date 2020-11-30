import React from "react";
import {
  Admin,
  Resource,
  List,
  Datagrid,
  TextField,
  DateField,
} from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const dataProvider = simpleRestProvider("https://eventhut.herokuapp.com");

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="datetime" />
    </Datagrid>
  </List>
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="events" list={PostList} />
  </Admin>
);

export default App;
