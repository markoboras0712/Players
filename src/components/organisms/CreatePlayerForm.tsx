import {
  Button,
  CenteredFlexbox,
  FileInputWithLabel,
  FlexColumn,
  Form,
  HorizontallyCenteredFlexbox,
  Input,
  InputWithLabel,
  Label,
  NumberInputWithLabel,
} from 'components';
import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

export const CreatePlayerForm: React.FC = () => {
  const [selected, setSelected] = useState('');
  const handleSubmit = () => {
    console.log('Selected', selected);
  };
  return (
    <CenteredFlexbox>
      <Form>
        <FlexColumn>
          <InputWithLabel label="Name" placeholder="Your name..." />
          <InputWithLabel label="Nickname" placeholder="Your nickname..." />
          <NumberInputWithLabel
            label="Total earning"
            placeholder="Your earning..."
          />
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            searchable
          />
          <FileInputWithLabel label="Photo" placeholder="Your photo" />
          <HorizontallyCenteredFlexbox>
            <Button type="button" onClick={handleSubmit}>
              Create player
            </Button>
          </HorizontallyCenteredFlexbox>
        </FlexColumn>
      </Form>
    </CenteredFlexbox>
  );
};
