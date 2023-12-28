export default function TabButton(props) {
    function handleClick() {
        console.log('click');
    }

    return (
        <li>
            <button onClick={handleClick}>
                {props.children}
            </button>
        </li>
    );
}