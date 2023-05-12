import React, { useState } from 'react';
import ToggleButton from './ToggleButton';

//TODO подключить логику, когда данные пользователя получены с signIn, а когда с register. Сейчас данные по умолчанию кладутся в локал сторадж по ключу user_data

export default function Toggle() {
  // есть 2 варианта состояния - 'signIn' или 'register'
  const [activeTab, setActiveTab] = useState('signIn');

  return (
    <div className="mt-16 flex bg-light-gray-100 rounded-lg p-1">
      <ToggleButton
        id="signIn"
        isActive={activeTab === 'signIn'}
        onClick={setActiveTab}
      >
        Sign in
      </ToggleButton>

      <ToggleButton
        id="register"
        isActive={activeTab === 'register'}
        onClick={setActiveTab}
      >
        Register
      </ToggleButton>
    </div>
  );
}
