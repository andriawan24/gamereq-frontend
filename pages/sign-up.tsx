import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SignUpForm from '../components/organisms/sign-up-form';

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <div className="pb-50">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
            </a>
          </Link>
        </div>
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
        <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
        <SignUpForm />
      </div>
    </section>
  );
}
