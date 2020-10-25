import { Form, Input } from 'antd';
import { observer } from 'mobx-react';
import React from 'react';
import { ContactModel } from '../../models/ContactModel';

interface Props {
  contact: ContactModel;
  onFormValuesChange: (changedValues: any, values: any) => void;
}

function ContactForm(props: Props) {
  const [form] = Form.useForm();

  return (
    <>
      <Form
        layout='vertical'
        form={form}
        initialValues={props.contact}
        onValuesChange={props.onFormValuesChange}
      >
        <Form.Item name='avatar'>
          <Input />
        </Form.Item>
        <Form.Item label='Full name' name='fullName'>
          <Input />
        </Form.Item>
        <Form.Item label='Email' name='email'>
          <Input />
        </Form.Item>
        <Form.Item label='Numbers' name='numbers'>
          <Input />
        </Form.Item>
      </Form>
    </>
  );
}

export default observer(ContactForm);
