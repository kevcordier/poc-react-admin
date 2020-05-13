import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    Create,
    TextInput, EditButton,
} from 'react-admin';

export const PlanetList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id"/>
        <TextField source="name"/>
        <TextField source="color"/>
        <EditButton/>
      </Datagrid>
    </List>
  );
};

const AstronautTitle = ({ record }) => {
  return <span>Planet {record ? `"${record.name}"` : ''}</span>;
};

export const PlanetEdit = props => (
  <Edit title={<AstronautTitle/>} {...props}>
    <SimpleForm>
      <TextField disabled source="id"/>
      <TextInput source="name"/>
      <TextInput source="color"/>
    </SimpleForm>
  </Edit>
);

export const PlanetCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name"/>
      <TextInput source="color"/>
    </SimpleForm>
  </Create>
);
