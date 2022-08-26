import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React from 'react';
import SidebarFooter from './footer';
import SidebarMenuItem from './menu-item';
import SidebarProfile from './profile';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;

  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <SidebarProfile />
        <div className="menus">
          <SidebarMenuItem title="Overview" icon="icon-menu-overview" active={activeMenu === 'overview'} href="/member" />
          <SidebarMenuItem title="Transactions" icon="icon-menu-transactions" active={activeMenu === 'transactions'} href="/member/transactions" />
          <SidebarMenuItem title="Messages" icon="icon-menu-message" href="/member" />
          <SidebarMenuItem title="Cards" icon="icon-menu-cards" href="/member" />
          <SidebarMenuItem title="Rewards" icon="icon-menu-rewards" href="/member" />
          <SidebarMenuItem title="Settings" icon="icon-menu-settings" href="/member/edit-profile" active={activeMenu === 'settings'} />
          <SidebarMenuItem title="Log Out" icon="icon-menu-logout" onClick={onLogout} />
        </div>
        <SidebarFooter />
      </div>
    </section>
  );
}
