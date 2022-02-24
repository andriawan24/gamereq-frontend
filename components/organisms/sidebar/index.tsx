import React from 'react';
import SidebarFooter from './footer';
import SidebarMenuItem from './menu-item';
import SidebarProfile from './profile';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <SidebarProfile />
        <div className="menus">
          <SidebarMenuItem title="Overview" />
          <SidebarMenuItem title="Transactions" />
          <SidebarMenuItem title="Messages" />
          <SidebarMenuItem title="Cards" />
          <SidebarMenuItem title="Rewards" />
          <SidebarMenuItem title="Settings" />
          <SidebarMenuItem title="Log Out" />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
