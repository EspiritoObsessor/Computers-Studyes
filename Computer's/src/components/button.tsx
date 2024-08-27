import { useState } from "react";

const button = () => {
    const [count, setCount] = useState(0);
    
    return (
        <button
            onClick={() => {
                setCount((count) => count +1);
            }}
        >Você clicou {count} vezes</button>
    )
}

export default button;