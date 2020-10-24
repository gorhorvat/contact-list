import { PlusOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import React from 'react';
import './add-new-contact-card.less';

function AddNewContactCard() {
  return (
    <div className='add-new-contact-card'>
      <PlusOutlined key='addContact' />
      <div>Add new</div>
    </div>
  );
}

export default observer(AddNewContactCard);
