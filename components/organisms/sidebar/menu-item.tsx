import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SidebarMenuItemProps {
    title: String;
    active ?: boolean;
    href: string;
    icon: 'icon-menu-cards' | 'icon-menu-logout' | 'icon-menu-message' | 'icon-menu-overview' | 'icon-menu-rewards' | 'icon-menu-settings' | 'icon-menu-transactions'
}
export default function SidebarMenuItem(props: Partial<SidebarMenuItemProps>) {
  const {
    title, icon, active, href,
  } = props;
  const classItem = classNames({
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={`${href}`}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
