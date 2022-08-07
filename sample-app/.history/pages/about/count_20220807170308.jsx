import { useState } from 'react';

const Counts = () => {
    const [count, setCounts] = useState(0)

    return (
        <div>
            <button onClick={()=>setCounts(count+1)} >♡ {count}</button>
        </div>
    );
}

export default Counts