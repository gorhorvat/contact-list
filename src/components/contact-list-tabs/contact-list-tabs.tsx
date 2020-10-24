import Radio, { RadioChangeEvent } from 'antd/lib/radio';
import { observer } from 'mobx-react';
import React from 'react';
import { ValueLabel } from '../../models/ValueLabel';
import contactListStore from '../../stores/contact-list-store';
import './contact-list-tabs.less';

export enum ContactListTab {
  AllContacts,
  MyFavorites,
}

function ContactListTabs() {
  const { selectedTab, changeSelectedTab } = contactListStore;

  const options: ValueLabel[] = [
    {
      label: 'All contacts',
      value: ContactListTab.AllContacts,
    },
    {
      label: 'My favorites',
      value: ContactListTab.MyFavorites,
    },
  ];

  return (
    <div className='contact-list-tabs'>
      <Radio.Group
        options={options}
        onChange={(event: RadioChangeEvent) =>
          changeSelectedTab(event.target.value as ContactListTab)
        }
        value={selectedTab}
        optionType='button'
      />
    </div>
  );
}

export default observer(ContactListTabs);
