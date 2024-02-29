import { useEffect } from 'react';
import { Button } from 'antd';

function Button1() {
  useEffect(() => {
    console.log('rerendered Button1');
  }, []);

  return <Button>122211</Button>;
}

export default Button1;
