const Home = (props) => {
    const bioLine = props.bioItems.map(line => <p>{line}</p>)
    return (
        <div className="container d-flex">
            <div className="w-50 me-3">
                <img className="img-fluid" src={'./assets/'+props.img+'.jpg'} />
            </div>
            <div className="w-50 px-3">
                {bioLine}
            </div>
        </div>
    );
}

export default Home;