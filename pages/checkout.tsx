import Image from 'next/image';
import React from 'react';
import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';
import CheckoutConfirmation from '../components/organisms/checkout-confirmation';
import CheckoutDetail from '../components/organisms/checkout-detail';
import CheckoutItem from '../components/organisms/checkout-item';
import { Player, TokenResult } from '../services/data-types';

interface CheckkoutProps {
  user: Player
}
export default function Checkout(props: CheckkoutProps) {
  const { user } = props;
  console.log(user);

  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="#">
            <Image src="/icon/logo.svg" width={60} height={60} alt="Logo" />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = context.req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const jwtToken = Buffer.from(token ?? '', 'base64').toString();
  const payload: TokenResult = jwtDecode(jwtToken);
  const user = payload.player;
  user.avatar = `${process.env.NEXT_PUBLIC_IMAGE}/${user.avatar}`;
  return {
    props: {
      user,
    },
  };
};
