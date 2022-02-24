import React from 'react';
import Sidebar from '../../../components/organisms/sidebar';
import TransactionContent from '../../../components/organisms/transaction-content';

export default function TransactionIndex() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
