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
  onContactFavoriteClick: (id: number) => void;
  onContactEditClick: (id: number) => void;
  onContactDeleteClick: (id: number) => void;
}

function ContactCard(props: Props) {
  const {
    contact: { id, fullName, avatar, isFavorite },
    onContactFavoriteClick,
    onContactEditClick,
    onContactDeleteClick,
  } = props;

  return (
    <Card
      className='contact-card'
      hoverable={true}
      onClick={() => onContactEditClick(id)}
      actions={[
        isFavorite ? (
          <HeartFilled
            key='favorite'
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              onContactFavoriteClick(id);
            }}
          />
        ) : (
          <HeartOutlined
            key='favorite'
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              onContactFavoriteClick(id);
            }}
          />
        ),
        <EditOutlined
          key='edit'
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            onContactEditClick(id);
          }}
        />,
        <DeleteOutlined
          key='delete'
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            onContactDeleteClick(id);
          }}
        />,
      ]}
    >
      <Avatar src={avatar} shape='circle' size={100} />
      <div>{fullName}</div>
    </Card>
  );
}

export default observer(ContactCard);
