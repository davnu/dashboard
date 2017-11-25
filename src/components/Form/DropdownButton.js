import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownButton = () => (
  <Dropdown text='Button' floating button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Filter by tag' />
      <Dropdown.Divider />
      <Dropdown.Item label={{ color: 'red', empty: true, circular: true }} text='Important' />
      <Dropdown.Item label={{ color: 'blue', empty: true, circular: true }} text='Announcement' />
      <Dropdown.Item label={{ color: 'black', empty: true, circular: true }} text='Discussion' />
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownButton