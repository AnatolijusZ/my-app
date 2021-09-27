import { Link, Switch, Route } from "react-router-dom";
import Street from "./Street";
function LinkuMiskas() {

    return(
    <div className="forest"><nav>
        <Link to={'home'}><h3>Linku Miskas</h3></Link>
        <Link to={'road'}><h3>Misko Takelis</h3></Link>
        <div>
        <Link to={'1'}><h3>Misko Plentas 1</h3></Link>
        <Link to={'2'}><h3>Misko Plentas 2</h3></Link>
        <Link to={'3'}><h3>Misko Plentas 3</h3></Link>
        <Link to={'4'}><h3>Misko Plentas 4</h3></Link>
        <Link to={'5'}><h3>Misko Plentas 5</h3></Link>

        </div>
        <Link to={'something'}><h3>Not forest</h3></Link>
    </nav>
        <Switch>

            <Route path={'/home'}>
                <h1>The Home</h1>
            </Route>

            <Route path={'/road'}>
                <h1>The Road</h1>
            </Route>

            <Route path={'/:street'} children={<Street/>}/>

            <Route path={'/'}>
                <h1>The begining</h1>
            </Route>
        </Switch>
    </div>)
}

export default LinkuMiskas;