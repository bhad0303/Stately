import notFound from './../../assets/notFound.svg'
const NotFound = () =>{
    return (
        <div style={{
            height :'100vh',
            display :'flex',
            justifyContent : 'center',
            alignItems : 'center',
            flexDirection :'column'

        }}>
              <img src={notFound} alt="" />
               <p style={ {
                   fontSize : '2rem'
               }}>This Page Is Not Found </p>
        </div>
    )
}


export default NotFound;

