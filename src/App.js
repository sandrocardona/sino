import React,{Component} from 'react';
import {Button} from 'reactstrap';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sino=(props)=>{
  return(<Card
    style={{
      width: '18rem'
    }}
  >
    <img
      alt="Sample"
      src="https://picsum.photos/300/200"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card title
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card‘s content.
      </CardText>
      <Button>
        {props.textobotonSI}
        {props.color}
      </Button>
      {' '}
      <Button>
        {props.textobotonNO}
        {props.color}
      </Button>
    </CardBody>
  </Card>);
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      imagen:"/public/logo192.png",
    }
  }

  si(){this.setState({imagen:"/public/logo192.png"})}
  no(){this.setState({imagen:"/public/logo192.png"})}

  render(){
    return (
      <div className="App">
        <Sino
          imagen={this.state.imagen}
          titulo="Yes or Not"
          textobotonSI="Oh yes!"
          textobotonNO="Oh no!"
        />
      </div>
    );
  }
}

export default App;
