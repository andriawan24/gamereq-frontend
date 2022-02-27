import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../components/molecules/step-item/indes';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;

function Template(args: StepItemProps) {
  return <StepItem {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  title: 'Super Mechs',
  icon: 'step-one',
  desc1: 'Pilih salah satu game',
  desc2: 'Yang ingin kamu topup',
};
