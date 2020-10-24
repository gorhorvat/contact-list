import { observer } from 'mobx-react';
import React from 'react';
import './contact-list-header.less';

function ContactListHeader() {
  return (
    <div className='contact-list-header'>
      <div>Typeqast</div>
    </div>
  );
}

export default observer(ContactListHeader);
