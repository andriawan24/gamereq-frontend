import jwtDecode from 'jwt-decode';
import React from 'react';
import OverviewContent from '../../components/organisms/overview-content';
import Sidebar from '../../components/organisms/sidebar';
import { TokenResult } from '../../services/data-types';

export default function MemberIndex() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
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
}
