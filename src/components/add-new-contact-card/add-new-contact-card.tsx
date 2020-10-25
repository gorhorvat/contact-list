import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import React from 'react';
import './add-new-contact-card.less';

interface Props {
  onContactAddClick: () => void;
}

function AddNewContactCard(props: Props) {
  return (
    <div className='add-new-contact-card' onClick={props.onContactAddClick}>
      <PlusOutlined key='addContact' />
      <div>Add new</div>
    </div>
  );
}

export default observer(AddNewContactCard);
