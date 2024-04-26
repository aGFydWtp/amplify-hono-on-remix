import { css } from '@/styled-system/css';
import { vstack } from '@/styled-system/patterns';
import { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'About' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className={vstack({ alignItems: 'flex-start' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>About</h1>
      <Link to="/">home</Link>
    </div>
  );
}
