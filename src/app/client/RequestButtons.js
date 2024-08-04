'use client';
import React, { useEffect, useState } from 'react';
import { Button, Flex } from 'antd';

const RequestButtons = () => {
  const [getResult, setGetResult] = useState();
  const [postResult, setPostResult] = useState();
  const [putResult, setPutResult] = useState();
  const [patchResult, setPatchResult] = useState();
  const [deleteResult, setDeleteResult] = useState();

  const sendRequest = async (method) => {
    const response = await fetch('/api/test-requests', {
      method,
    });
    const result = await response.json();

    switch (method) {
      case 'GET':
        setGetResult(JSON.stringify(result));
        break;
      case 'POST':
        setPostResult(JSON.stringify(result));
        break;
      case 'PUT':
        setPutResult(JSON.stringify(result));
        break;
      case 'PATCH':
        setPatchResult(JSON.stringify(result));
        break;
      case 'DELETE':
        setDeleteResult(JSON.stringify(result));
        break;
    }
  };

  useEffect(() => {}, []);

  return (
    <Flex align="flex-start" gap="small" vertical>
      <Flex gap="small">
        <Button type="primary" onClick={() => sendRequest('GET')}>
          Send GET Request
        </Button>
        <div>{getResult}</div>
      </Flex>
      <Flex gap="small">
        <Button type="primary" onClick={() => sendRequest('POST')}>
          Send POST Request
        </Button>
        <div>{postResult}</div>
      </Flex>
      <Flex gap="small">
        <Button type="primary" onClick={() => sendRequest('PUT')}>
          Send PUT Request
        </Button>
        <div>{putResult}</div>
      </Flex>
      <Flex gap="small">
        <Button type="primary" onClick={() => sendRequest('PATCH')}>
          Send PATCH Request
        </Button>
        <div>{patchResult}</div>
      </Flex>
      <Flex gap="small">
        <Button type="primary" onClick={() => sendRequest('DELETE')}>
          Send DELETE Request
        </Button>
        <div>{deleteResult}</div>
      </Flex>
    </Flex>
  );
};

export default RequestButtons;
