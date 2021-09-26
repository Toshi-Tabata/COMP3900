import React, { FC } from 'react'

interface Props {
    firstParameter: string;
    secondParameter: number;
}

// TODO: delete this component
// this is here just as an example on how to create a basic component that takes in 2 args (string and number)
const ExampleComponent: FC<Props> = ({ firstParameter, secondParameter }) => {

    return (
        <div> first was {firstParameter} second was {secondParameter} </div>
    );
}

export default ExampleComponent;