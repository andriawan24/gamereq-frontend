import React from 'react';
import OverviewContentCategory from './category';
import OverviewContentTableRow from './table-row';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <OverviewContentCategory icon="icon-desktop" nominal={18000500}>
                Game
                <br />
                Desktop
              </OverviewContentCategory>
              <OverviewContentCategory icon="icon-mobile" nominal={8455000}>
                Game
                <br />
                Mobile
              </OverviewContentCategory>
              <OverviewContentCategory icon="icon-desktop" nominal={5000000}>
                Other
                <br />
                Categories
              </OverviewContentCategory>
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
                <OverviewContentTableRow
                  image="overview-1"
                  title="Mobile Legends"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Pending"
                />
                <OverviewContentTableRow
                  image="overview-2"
                  title="Call of Duty: Modern"
                  category="Desktop"
                  item={550}
                  price={740000}
                  status="Success"
                />
                <OverviewContentTableRow
                  image="overview-3"
                  title="Clash of Clans"
                  category="Mobile"
                  item={100}
                  price={120000}
                  status="Failed"
                />
                <OverviewContentTableRow
                  image="overview-4"
                  title="The Royal Games"
                  category="Mobile"
                  item={225}
                  price={200000}
                  status="Pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
