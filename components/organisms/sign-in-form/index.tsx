import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setLogin } from '../../../services/auth';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);

    const data = {
      email,
      password,
    };

    if (!data.email || !data.password) {
      toast.error('Email dan password tidak boleh kosong');
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success(response.message);
        useRouter().push('/');
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      <div
        className="pt-50"
      >
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmit();
            }
          }}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        {isLoading
          ? (
            <button
              type="button"
              className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            >
              Please Wait...
            </button>
          )
          : (
            <button
              type="button"
              className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
              onClick={onSubmit}
            >
              Continue to Sign In
            </button>
          )}
        <Link href="/sign-up">
          <a
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
          >
            Sign Up
          </a>
        </Link>
      </div>
      <ToastContainer />
    </>
  );
}
