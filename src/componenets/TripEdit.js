import React from "react";
import {connect} from "react-redux"
import {editTrip} from "../actions/editTrip";
import {Redirect} from "react-router"

// class comp. has local state to hold form values
class TripEdit extends React.Component {

    state = {
        destination: "",
        start_date: "",
        end_date: "",
        redirect: false   
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let trip = {...this.state, id: this.props.trip.id}
        this.props.editTrip(trip)
        this.setState({
            destination: "",
            start_date: "",
            end_date: "",
            redirect: true               
        })
    }

    render() {
        const { redirect } = this.state;
        // console.log(this.props)
        if (redirect) {
            return <Redirect to={`/trips/${this.props.trip.id}`}/>;
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Destination </label>
                    <input type="text" value={this.state.destination} name="destination" onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <label>Start Date </label>
                    <input type="date" value={this.state.start_date} name="start_date" onChange={this.handleChange} />
                    <br />
                    <br/>
                    <label>End Date</label>
                    <input type="date" value={this.state.end_date} name="end_date" onChange={this.handleChange} />
                    <br/>
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, {editTrip})(TripEdit)