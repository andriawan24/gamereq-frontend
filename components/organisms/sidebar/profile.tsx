import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { Player, TokenResult } from '../../../services/data-types';

export default function SidebarProfile() {
  const [user, setUser] = useState<Player>({
    name: '',
    id: '',
    phoneNumber: '',
    avatar: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = Buffer.from(token ?? '', 'base64').toString();
      const payload: TokenResult = jwtDecode(jwtToken);
      setUser(payload.player);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE}/${user.avatar}`}
        width="90"
        height="90"
        alt="Some Errors"
        className="img-fluid mb-20"
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">
        {user.name}
      </h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
