import React from 'react';
import TransactionDetailContent from '../../../components/organisms/transaction-detail-content';

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent />
    </section>
  );
}
