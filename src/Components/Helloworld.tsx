import React from 'react';

const Helloworld: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
            {/* First Layout */}
            <div style={{ border: '1px solid black', padding: '20px', width: '40%' }}>
                <h2>First Layout</h2>
                <label htmlFor="firstInput">First Input:</label>
                <input id="firstInput" type="text" style={{ display: 'block', marginTop: '10px' }} />
            </div>

            {/* Second Layout */}
            <div style={{ border: '1px solid black', padding: '20px', width: '40%' }}>
                <h2>Second Layout</h2>
                <label htmlFor="secondInputlabel">Second Input:</label>gi
                <input id="secondInput" type="text" style={{ display: 'block', marginTop: '10px' }} />
            </div>
        </div>
    );
};

interface FuncNameProps {
    param1: string;
    param2: number;
}

const FuncName: React.FC<FuncNameProps> = ({ param1, param2 }) => {
    return (
        <div>
            Hello {param1}, you have {param2} new messages.
        </div>
    );
};

export default Helloworld ;
export { FuncName};
