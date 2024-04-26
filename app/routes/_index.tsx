import type { MetaFunction } from '@remix-run/node';
import { css } from '@/styled-system/css';
import { vstack } from '@/styled-system/patterns';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className={vstack({ w: 'full', alignItems: 'flex-start' })}>
      <h1 className={css({ fontSize: '9xl', fontWeight: 'bold' })}>Hello🐼!</h1>
      <Link to="/about">about</Link>
    </div>
  );
}
