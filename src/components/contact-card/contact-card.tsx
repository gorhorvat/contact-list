import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  DeleteOutlined,
  HeartOutlined,
  HeartFilled,
} from '@ant-design/icons';
import { observer } from 'mobx-react';
import React from 'react';
import { ContactModel } from '../../models/ContactModel';
import './contact-card.less';

interface Props {
  contact: ContactModel;
  onContactFavorite: (id: number) => void;
  onContactEdit: (id: number) => void;
  onContactDelete: (id: number) => void;
}

function ContactCard(props: Props) {
  const {
    contact: { id, fullName, avatar, isFavorite },
    onContactFavorite,
    onContactEdit,
    onContactDelete,
  } = props;

  return (
    <Card
      className='contact-card'
      hoverable={true}
      onClick={() => onContactEdit(id)}
      actions={[
        isFavorite ? (
          <HeartFilled key='favorite' onClick={() => onContactFavorite(id)} />
        ) : (
          <HeartOutlined key='favorite' onClick={() => onContactFavorite(id)} />
        ),
        <EditOutlined key='edit' onClick={() => onContactEdit(id)} />,
        <DeleteOutlined key='delete' onClick={() => onContactDelete(id)} />,
      ]}
    >
      <Avatar src={avatar} shape='circle' size={100} />
      <div>{fullName}</div>
    </Card>
  );
}

export default observer(ContactCard);
