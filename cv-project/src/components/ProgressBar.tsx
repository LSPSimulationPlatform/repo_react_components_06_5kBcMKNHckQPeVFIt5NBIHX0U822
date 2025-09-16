import React from 'react';
import { Flex, Progress } from 'antd';

const ProgressBar: React.FC = () => (
  <Flex gap="small" vertical>
    <h1><strong>Skills</strong></h1>
    <label>HTML</label>
    <Progress percent={30} status='active' />
    <label>Physics</label>
    <Progress percent={50} status="active" />
    <label>JavaScript</label>
    <Progress percent={50} status="active" />
    <label>Engineering Skills</label>
    <Progress percent={50} status="active" />
  </Flex>
);

export default ProgressBar;