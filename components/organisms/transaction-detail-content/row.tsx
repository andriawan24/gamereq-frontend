import React from 'react';

interface TransactionDetailContentRowProps {
    label: string;
    value: string|number;
    classNames?: string;
}
export default
function TransactionDetailContentRow(props: Partial<TransactionDetailContentRowProps>) {
  const { label, value, classNames } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span
        className={`purchase-details ${classNames}`}
      >
        {value}
      </span>
    </p>
  );
}
