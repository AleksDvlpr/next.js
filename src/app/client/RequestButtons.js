'use client';
import React from 'react';

const RequestButtons = () => {
  const sendRequest = async (method) => {
    const response = await fetch('/api/test-requests', {
      method,
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <button onClick={() => sendRequest('POST')}>Send POST Request</button>
      <button onClick={() => sendRequest('PUT')}>Send PUT Request</button>
      <button onClick={() => sendRequest('GET')}>Send GET Request</button>
      <button onClick={() => sendRequest('DELETE')}>Send DELETE Request</button>
    </div>
  );
};

export default RequestButtons;
