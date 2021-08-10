const Home = (props) => {
    function toLogIn()
    {
        props.setLoading("Loading...");
        setTimeout(()=>{
             props.setLogin("loggedIn");
             props.setLoading("");
        },1000)
    }

    function toLogOut()
    {
        props.setLoading("Loading...");

        setTimeout(()=>{
             props.setLogin("notLoggedIn");
             props.setLoading("");
        },1000)
    }
    function printLoad(){
        return <p>Loading...</p>
    }
    return (
        <div className="home page-container">
            <div className="titile">
                HOME
            </div>
            <div className="content">
                if not logged in cant access profile and dashboard
            </div>
            <div className="btn">
                {
                    props.loading===""?
                    (
                        props.login==="loggedIn"?
                        (
                            <button onClick={toLogOut}>logout</button>
                        ):(
                            <button onClick={toLogIn}>login</button>
                        )
                    ):(" ")
                }
            </div>
            {
                props.loading==="Loading....."?
                <div className="progress-bar"><div class="loader-5 center"><span></span></div></div>
                :
                <></>
            }
        </div>
    )
}
export default Home;
