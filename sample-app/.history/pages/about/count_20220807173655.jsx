import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Counts = () => {
    const [count, setCounts] = useState(0)

    return (
        <div>
            <Button variant="secondary" onClick={()=>setCounts(count+1)} >♡ {count}</Button>
        </div>
    );
}

export default Counts