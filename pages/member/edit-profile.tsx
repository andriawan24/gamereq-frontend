import Image from 'next/image';
import React from 'react';
import Input from '../../components/atoms/input';
import Sidebar from '../../components/organisms/sidebar';

export default function MemberEditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <div className="photo d-flex">
              <div className="position-relative me-20">
                <img src="/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" alt="Error" />
                <div
                  className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center"
                >
                  <Image src="/icon/upload-image.svg" alt="icon upload" width={90} height={90} />
                </div>
              </div>
              <div className="image-upload">
                <label htmlFor="avatar">
                  <Image src="/icon/upload-image.svg" alt="icon upload" width={90} height={90} />
                </label>
                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
              </div>
            </div>
            <div className="pt-30">
              <Input label="Full Name" />
            </div>
            <div className="pt-30">
              <Input label="Email Address" />
            </div>
            <div className="pt-30">
              <Input label="Phone" />
            </div>
            <div className="button-group d-flex flex-column pt-50">
              <button
                type="submit"
                className="btn btn-save fw-medium text-lg text-white rounded-pill"
              >
                Save My Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
