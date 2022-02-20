import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
    title: String;
    active?: Boolean;
    href: String;
}
export default function NavbarMenu(props: Partial<MenuProps>) {
  const { title, active, href = '/' } = props;
  const classTitle = cx({
    'nav-link': true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={`${href}`}>
        <a className={classTitle} aria-current="page">{title}</a>
      </Link>
    </li>
  );
}
