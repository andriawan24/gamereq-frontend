import React from 'react';
import OverviewContent from '../../components/organisms/overview-content';
import Sidebar from '../../components/organisms/sidebar';

export default function MemberIndex() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <OverviewContent />
    </section>

  );
}
