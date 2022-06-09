const Header = (props) => {
    return (
        <div className="p-4 bg-dark text-white d-flex justify-content-between align-items-center rounded-top">
            <div className="me-3">
                <img src={'./assets/' + props.img + '.png'} width="50" />
            </div>
                <span className="me-3 display-5">
                    {props.name}
                </span>
                <span className="me-3">
                    {props.nick}
                </span>
        </div>
    );
}

export default Header;