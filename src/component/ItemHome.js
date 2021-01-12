import Typist from 'react-typist';
import '../../node_modules/react-typist/dist/Typist.css';

function ItemHome() {
    return (
      <div  className="bg-faded p-4 my-4" id="title_home">
        <div className="text-lg text-uppercase center">
        <Typist>
          <span> Xin chào các bạn mình là Diễm là một frontend dev</span>
          <Typist.Backspace count={13} delay={500} />
          <span > Nông dân trồng hoa </span>
        </Typist>
        </div>
        
      </div>
    );
  }
  
  export default ItemHome;
  