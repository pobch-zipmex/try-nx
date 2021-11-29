import { Button } from 'antd';
import './button.module.less';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function MyButton(props: ButtonProps) {
  return (
    <div>
      <div>Button-Lib:</div>
      <Button type="primary">Btn!!</Button>
    </div>
  );
}
