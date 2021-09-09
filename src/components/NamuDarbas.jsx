import Galereja from './Galereja'
import trains from '../nd1/data'

function NamuDarbas (props) {
    return ( <>
    <div className = 'container row '> 
    <div className = 'col-12 col-md-6 col-lg-4'>
    {trains.map((train, i ) => <Galereja key={i} img={train.img} desc={train.desc} />)}
   
   </div> 
   </div>
    </>
    );
}

export default NamuDarbas;