import { useEffect } from 'react';
import { Button } from 'antd';

function Button2() {
  useEffect(() => {
    console.log('rerendered Button2');
  }, []);

  return <Button>33333</Button>;
}

export default Button2;
