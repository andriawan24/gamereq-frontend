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
          <SidebarMenuItem title="Overview" icon="icon-menu-overview" active />
          <SidebarMenuItem title="Transactions" icon="icon-menu-transactions" />
          <SidebarMenuItem title="Messages" icon="icon-menu-message" />
          <SidebarMenuItem title="Cards" icon="icon-menu-cards" />
          <SidebarMenuItem title="Rewards" icon="icon-menu-rewards" />
          <SidebarMenuItem title="Settings" icon="icon-menu-settings" />
          <SidebarMenuItem title="Log Out" icon="icon-menu-logout" />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
