import React,{Component} from 'react';
import {Button} from 'reactstrap';
import {Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sino=(props)=>{
  return(<>
    <Card style={{width: '18rem'}}>
    <CardBody>
      <CardTitle tag="h5">
        {props.titulo}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {props.subtitulo}
      </CardSubtitle>
      <CardImg src={props.imagen}/>
      <CardText>
        {props.definicion}
      </CardText>
      <Button>
        {props.textobotonSI}
      </Button>
      {' '}
      <Button>
        {props.textobotonNO}
      </Button>
    </CardBody>
  </Card>
  </>);
  
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      imagen: "./images/gothic.jpg",
    }
  }

  render(){
    return (
      <div className="App">
        <Sino
          imagen={this.state.imagen}
          titulo="Estilos artísticos"
          subtitulo="pintura"
          definicion="Los estilos artísticos demostrados a través de la pintura"
          textobotonSI="Pop-art"
          textobotonNO="Gothic"
        />
      </div>
    );
  }
}

export default App;
