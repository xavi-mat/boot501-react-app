const Home = (props) => {
    const bioLine = props.bioItems.map((line, num) => <p key={num}>{line}</p>)
    return (
        <div className="container row">
            <div className="col-md-6">
                <img className="img-fluid rounded" src={'./assets/' + props.img + '.jpg'} alt="careto" />
            </div>
            <div className="col-md-6 mt-3">
                <h4>Bio</h4>
                {bioLine}
            </div>
        </div>
    );
}

export default Home;