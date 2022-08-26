import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getMemberOverview } from '../../../services/player';
import OverviewContentCategory from './category';
import OverviewContentTableRow from './table-row';

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getMemberOverviewAPI = async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setCount(response.data.count);
      setData(response.data.data);
    }
  };

  useEffect(() => {
    getMemberOverviewAPI();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count.map((c: any) => (
                <OverviewContentCategory
                  key={c._id}
                  icon="icon-desktop"
                  nominal={c.value}
                >
                  {c.name}
                </OverviewContentCategory>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d: any) => (
                  <OverviewContentTableRow
                    key={d._id}
                    image={d.historyVoucherTopup.thumbnail}
                    title={d.historyVoucherTopup.gameName}
                    category={d.historyVoucherTopup.category}
                    item={d.historyVoucherTopup.coinQuantity}
                    price={d.historyVoucherTopup.price}
                    status={d.status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
