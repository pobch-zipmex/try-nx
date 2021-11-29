import { Button } from 'antd';
import './button-publish.module.less';

/* eslint-disable-next-line */
export interface ButtonPublishProps {}

export function MyButtonPublish(props: ButtonPublishProps) {
  return (
    <div>
      <div>Button-Publish:</div>
      <Button type="primary">Btn-Pub!!</Button>
    </div>
  );
}
