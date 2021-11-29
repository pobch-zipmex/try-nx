import { Typography } from 'antd';
import './fancy-text.module.less';

/* eslint-disable-next-line */
export interface FancyTextProps {}

export function FancyText(props: FancyTextProps) {
  return (
    <Typography.Text copyable mark>
      Fancy Text!
    </Typography.Text>
  );
}
