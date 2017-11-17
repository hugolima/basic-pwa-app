import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import { Card, CardHeader, CardText } from 'material-ui/Card'

const style = {
  height: 35,
  width: '100%',
  textAlign: 'center',
  margin: '7px 0 10px 0',
  padding: '7px 0 5px 0',
  display: 'inline-block',
}

class Home extends Component {
  render() {
    return (
      <div>
        <AppBar title='Hugo Lima' />
        <Paper style={style} zDepth={3} rounded={false}><strong>Alertas recebidos</strong></Paper>
        <Card>
          <CardHeader
            title="Titulo do Alerta 1"
            subtitle='10/07/17 12:00'
            actAsExpander={true}
            showExpandableButton={true} />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
        <Card>
          <CardHeader
            title="Titulo do Alerta 2"
            subtitle='13/09/17 16:30'
            actAsExpander={true}
            showExpandableButton={true} />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Home