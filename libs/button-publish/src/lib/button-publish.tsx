import { Button } from 'antd';
import './button-publish.module.less';
import picSrc from './pic.png';
import styles from './style.module.css';
import stylesLess from './styleLess.module.less';

/* eslint-disable-next-line */
export interface ButtonPublishProps {}

export function MyButtonPublish(props: ButtonPublishProps) {
  return (
    <div>
      <div>
        <img src={picSrc} alt="" />{' '}
        <span className={stylesLess.pob}>Button</span>-
        <span className={styles.pob}>Publish</span>:
      </div>
      <Button type="primary">Btn-Pub!!</Button>
    </div>
  );
}
