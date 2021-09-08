import Galereja from './Galereja'
import trains from '../nd1/data'

function NamuDarbas (props) {
    return ( <>
    {trains.map((train, i ) => <Galereja key={i} img={train.img} desc={train.desc} />)}
    </>
    );
}

export default NamuDarbas;