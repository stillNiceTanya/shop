import React from 'react';

import { Header } from '../components/Header';
import Form from '../components/Forms/Form';

export default function UserAccount() {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center pt-10 md:pt-16 lg:pt-32">
        <h2 className="text-4xl font-medium">My account</h2>

        <div className="w-3/4 smalltablet:w-3/5 lg:w-1/3">
          <Form />
        </div>
      </div>
    </>
  );
}
