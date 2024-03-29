import React from 'react';

interface TransactionDetailContentRowProps {
    label: string;
    value: string|number;
    className?: string;
}
export default
function TransactionDetailContentRow(props: Partial<TransactionDetailContentRowProps>) {
  const { label, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span
        className={`purchase-details ${className}`}
      >
        {value}
      </span>
    </p>
  );
}
