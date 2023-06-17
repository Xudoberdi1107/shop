import k from './style.module.scss'
import {Link} from 'react-router-dom'
const Korzinka = ()=>{
    return(
        <div className={k.div}>
            <h1>Korzinka</h1>
            <Link to={'/'}>Home</Link>
        </div>
    )
}
export default Korzinka;