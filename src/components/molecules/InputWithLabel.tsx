import {
  FileInput,
  FlexRow,
  Input,
  Label,
  MarginLeftRow,
  NumberInput,
} from 'components';

interface Props {
  label: string;
  placeholder?: string;
}

export const InputWithLabel: React.FC<Props> = ({ label, placeholder }) => {
  return (
    <MarginLeftRow>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </MarginLeftRow>
  );
};

export const NumberInputWithLabel: React.FC<Props> = ({
  label,
  placeholder,
}) => {
  return (
    <MarginLeftRow>
      <Label>{label}</Label>
      <NumberInput placeholder={placeholder} />
    </MarginLeftRow>
  );
};

export const FileInputWithLabel: React.FC<Props> = ({ label }) => {
  return (
    <MarginLeftRow>
      <Label>{label}</Label>
      <FileInput />
    </MarginLeftRow>
  );
};
