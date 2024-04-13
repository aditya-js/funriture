import { Button, Input, Space } from 'antd';
import React from 'react'

function Singup() {
  return (
    <div className='signup-div'>
        <Space direction="vertical" size="middle">
        <Input
              placeholder="Enter Your Name"
            />
        <Input
              placeholder="Enter Your Email"
            />
        <Input.Password
              placeholder="Password"
            />
        <Input.Password
              placeholder="Confirm Password"
            />
            <Button type="primary">
              Sign Up
            </Button>
        </Space>
    </div>
  )
}

export default Singup