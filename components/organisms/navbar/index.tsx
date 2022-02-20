import Image from 'next/image';
import React from 'react';
import NavbarAuth from './auth';
import NavbarMenu from './menu';
import ToggleMenu from './toggle-menu';

export default function Navbar() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/about-us">
            <Image src="/icon/logo.svg" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <NavbarMenu title="Home" active href="/" />
              <NavbarMenu title="Games" />
              <NavbarMenu title="Reward" />
              <NavbarMenu title="Discover" />
              <NavbarMenu title="Global Friends" />
              <NavbarAuth isLogin />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
