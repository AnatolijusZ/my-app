//import trains from '../nd1/data.jsx';


function Galereja(props) {
    return (
    <div className ='container row'>
        <div className='galereja col-12 col-md-6 col-lg-4'>
            <img src={props.img} alt={props.desc} />
            <span>{props.desc}</span>
        </div>
    </div>    
    )
}

export default Galereja;