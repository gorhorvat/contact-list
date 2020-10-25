import { Input } from 'antd';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import contactListStore from '../../stores/contact-list-store';
import './contact-search-container.less';

@observer
class ContactSearchContainer extends Component {
  inputRef = React.createRef<Input>();

  componentDidMount() {
    contactListStore.setSearchReference(this.inputRef);
  }

  render() {
    const { Search } = Input;
    const { onContactSearch } = contactListStore;

    return (
      <div className='contact-search-container'>
        <Search
          size='large'
          allowClear={true}
          onSearch={onContactSearch}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default ContactSearchContainer;
