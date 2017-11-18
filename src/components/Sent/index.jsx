import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Card, CardHeader, CardText } from 'material-ui/Card'

class Home extends Component {
  componentDidMount() {
    this.state = { x: 1 }
  }

  render() {
    return (
      <div>
        <AppBar title="Enviados" />
        <Card>
          <CardHeader title="Jose" subtitle="10/07/17 12:00" actAsExpander={true} showExpandableButton={true} />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.
            Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam
            dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
        <Card>
          <CardHeader title="Maria" subtitle="13/09/17 16:30" actAsExpander={true} showExpandableButton={true} />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.
            Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam
            dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Home
