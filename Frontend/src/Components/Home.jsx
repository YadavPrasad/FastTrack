import './css/Home.css';

const Home = () => {
    return (
        <div>
            <section className="Home">
                <form className="Forms" action="/submit" method="POST">
                    <h1>Enter Your Order ID Below</h1>
                    <label htmlFor="orderID"></label>
                    <input type="text" id="orderID" required />
                </form>
            </section>
        </div>
    )
}

export default Home;

