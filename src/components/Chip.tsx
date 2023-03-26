import { Badge } from '@chakra-ui/react';

type ChipProps = {
  label: string;
  color: string;
};
export const Chip = ({ label, color }: ChipProps) => (
  <Badge px={2} py={1} rounded="lg" colorScheme={color} variant="solid">
    {label.toUpperCase()}
  </Badge>
);
