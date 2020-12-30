import React, { Component } from 'react'
import {Row,Col} from 'reactstrap'
import { connect } from 'react-redux'

export class index extends Component {
    render() {
        return (
            <Row>
            <Col xl>
            </Col>
            <Col xl="4">
            </Col>
        </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
