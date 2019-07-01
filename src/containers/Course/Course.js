import React, { Component } from 'react';

class Course extends Component {
    render () {
        const title = decodeURI(this.props.location.search.split('=')[1])
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;