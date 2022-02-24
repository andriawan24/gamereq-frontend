import Image from 'next/image';
import React from 'react';

interface SidebarMenuItemProps {
    title: String
}
export default function SidebarMenuItem(props: SidebarMenuItemProps) {
  const { title } = props;
  return (
    <div className="item active mb-30">
      <div className="me-3">
        <Image src="/icon/icon-menu-overview.svg" width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">{title}</a>
      </p>
    </div>
  );
}
