import React from 'react';
import cx from 'classnames';

interface OverviewContentTableRowProps {
    image: string;
    title: string;
    category: string;
    item: number;
    price: number;
    status: 'pending' | 'success' | 'failed';
}
export default function OverviewContentTableRow(props: OverviewContentTableRowProps) {
  const {
    title, category, item, price, status, image,
  } = props;

  const URL_IMAGE = process.env.NEXT_PUBLIC_IMAGE;

  const statusClass = cx({
    'float-start icon-status': true,
    pending: status === 'pending',
    success: status === 'success',
    failed: status === 'failed',
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`${URL_IMAGE}/${image}`}
          width={80}
          height={60}
          alt="Thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {item}
          {' '}
          Gold
        </p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </p>
        </div>
      </td>
    </tr>
  );
}
