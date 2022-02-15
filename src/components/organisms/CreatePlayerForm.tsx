import {
  CenteredFlexbox,
  FileInputWithLabel,
  FlexColumn,
  Form,
  HorizontallyCenteredFlexbox,
  InputWithLabel,
  LoadingButton,
  NumberInputWithLabel,
} from 'components';
import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

export const CreatePlayerForm: React.FC = () => {
  const [selected, setSelected] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Selected', selected);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 5000);
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
            <LoadingButton
              text="Load me"
              loading={isLoading}
              onClick={handleOnClick}
            />
          </HorizontallyCenteredFlexbox>
        </FlexColumn>
      </Form>
    </CenteredFlexbox>
  );
};
