import h from './style.module.scss'
import {Link} from 'react-router-dom'
const Home = ()=>{
    return(
        <div className={h.home__page}>
            <h1>home</h1>
            <Link to={'/korzinka'}>Korzinka</Link>

        </div>
    )
}
export default Home;