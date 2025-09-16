import React from 'react';
import { Flex, Progress } from 'antd';

const ProgressBar: React.FC = () => (
  <Flex gap="small" vertical>
    <h2><strong>Skills</strong></h2>
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