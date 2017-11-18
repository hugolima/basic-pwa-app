import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import MainAppBar from '../Layout/mainAppBar'

function Received() {
  return (
    <div>
      <MainAppBar title="Recebidos" />
      <Card>
        <CardHeader title="Fulando de Tal" subtitle="10/07/17 12:00" actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.
          Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui
          mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
      <Card>
        <CardHeader title="Siclano Silva" subtitle="13/09/17 16:30" actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat.
          Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui
          mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    </div>
  )
}

export default Received
