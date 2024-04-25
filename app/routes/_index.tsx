import type { MetaFunction } from '@remix-run/node';
import { css } from '../styled-system/css';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div>
      <p className={css({ fontSize: '9xl', fontWeight: 'bold' })}>Hello🐼!</p>
    </div>
  );
}
