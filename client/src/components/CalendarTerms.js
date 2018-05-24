import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleTerm } from '../actions/calendarActions';

class CalendarTerms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: "t1"
        }
        this.toggleTerm = this.toggleTerm.bind(this)
    }


    toggleTerm = (term) => e => {
        console.log("Togglign term")
        if (this.state.term !== term) {
            this.props.toggleTerm(term)
        }
        e.stopPropagation();
    }

    render() {
        return (
            <div className="calendar__term-container">
                <div 
                    className={"calendar__term " + (this.state.term === "t1" ? "calendar__term--selected" : "")}
                    onClick={this.toggleTerm("t1")}
                >Term 1</div>
                <div 
                    className={"calendar__term " + (this.state.term === "t2" ? "calendar__term--selected" : "")}
                    onClick={this.toggleTerm("t2")}
                >Term 2</div>
            </div>
        )
    }
}


CalendarTerms.getDerivedStateFromProps = (nextProps, prevState) => {
    console.log("CalendarTerms.getDerivedStateFromProps", nextProps)
    return {
        term: nextProps.term
    }
}

const mapStateToProps = state => ({
    term: state.scheduler.term
});

export default connect(mapStateToProps, {toggleTerm})(CalendarTerms)