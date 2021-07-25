import React, { Component } from 'react';

import { Result, Button, Typography } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { Paragraph, Text } = Typography;


class FeedBack extends Component {
    render() {
        return (
            <Result
            status="error"
            title="Submission Successful"
            subTitle="You didnot meet the tender criteria"
            extra={[
              <Button key="Home" type="primary">
                  <Link to="/supplier">Home</Link>
              </Button>,
            ]}
          >
          </Result>
        );
    }
}

export default FeedBack;