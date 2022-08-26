import React from 'react';
import cx from 'classnames';

interface TransactionContentCategoryTabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}
export default
function TransactionContentCategoryTab(props: Partial<TransactionContentCategoryTabProps>) {
  const { title, active, onClick } = props;
  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {title}
    </button>
  );
}
