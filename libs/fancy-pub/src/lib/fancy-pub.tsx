import { Typography } from 'antd';
import './fancy-pub.module.less';

/* eslint-disable-next-line */
export interface FancyPubProps {}

export function FancyPub(props: FancyPubProps) {
  return (
    <Typography.Text copyable mark>
      Fancy Text!
    </Typography.Text>
  );
}

export default FancyPub;
