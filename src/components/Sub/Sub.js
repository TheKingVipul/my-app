const Sub = (props) => {
    return (
        <div>
            <p> This is Sub Component</p>
            <p> Subtraction = {parseInt(props.a) + parseInt(props.b)} </p>
        </div>
    )
};

export default Sub;