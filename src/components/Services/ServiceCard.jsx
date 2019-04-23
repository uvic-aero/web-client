import React, { Component } from 'react';
import {Card, CardHeader, CardText, CardActions, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

function ServiceCard(props) {
    
    return (
        <Card>
            <CardTitle title="Image Service" subtitle="status" />
            <CardText>
                OBC: connected<br />
                status: running<br />
                images dropped: 4<br />
            </CardText>
            <CardActions>
                <FlatButton label="Start" />
                <FlatButton label="Stop" />
            </CardActions>
        </Card>
    );
  }

export default ServiceCard;

