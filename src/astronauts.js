import React from 'react';
import {
  List,
  Edit,
  Create,
  Filter,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  SimpleForm,
  ReferenceInput,
  TextInput,
  DateInput,
  DateField,
  SelectInput,
} from 'react-admin';

const AstronautFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn/>
    <ReferenceInput label="Planet" source="planet.id" reference="Planet" allowEmpty>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>
);

export const AstronautList = (props) => {
  return <List filters={<AstronautFilter/>} {...props}>
    <Datagrid>
      <TextField source="id"/>
      <TextField source="firstName"/>
      <TextField source="lastName"/>
      <ReferenceField label="Planet" source="planet.id" reference="Planet">
        <TextField source="name"/>
      </ReferenceField>
      <DateField source="birthDate"/>
      <EditButton/>
    </Datagrid>
  </List>;
};

const AstronautTitle = ({ record }) => {
  return <span>Astronaut {record ? `"${record.firstName} ${record.lastName}"` : ''}</span>;
};

export const AstronautEdit = props => (
  <Edit title={<AstronautTitle/>} {...props}>
    <SimpleForm>
      <TextField disabled source="id"/>
      <TextInput source="firstName"/>
      <TextInput source="lastName"/>
      <ReferenceInput source="planet.id" reference="Planet">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <DateInput source="birthDate"/>
    </SimpleForm>
  </Edit>
);

export const AstronautCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName"/>
      <TextInput source="lastName"/>
      <ReferenceInput source="planet.id" reference="Planet">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <DateInput source="birthDate"/>
    </SimpleForm>
  </Create>
);
