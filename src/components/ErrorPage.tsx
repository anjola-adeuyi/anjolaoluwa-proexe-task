import { Result, Button } from 'antd';
import { FC } from 'react';

interface ErrorPageProps {
  error: string;
}

const ErrorPage: FC<ErrorPageProps> = ( {error} ) => {
  return (
    <>
      <Result
        status="error"
        title= {error}
        subTitle="Please check and modify your internet connection"
        extra={
          <Button type="primary" key="console">
            Refresh Page 
          </Button>
        }
      />,
    </>
  )
}

export default ErrorPage;