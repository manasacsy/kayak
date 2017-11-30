import { Route, withRouter,BrowserRouter } from 'react-router-dom';
import '../App.css';
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';
import * as FlightBookingAPI from '../api/FlightBookingAPI';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SetFlight} from '../actions/actionsAll';
import {SetFlightBookingId} from '../actions/actionsAll';
import {SetComponent} from '../actions/actionsAll';

class FlightForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            expirydate:"",
            name:"",
            cardnumber: "",
            cvv: "",
            street :"",
            postalCode:"",
            city:"",
            region:"",
            country:"",
            password: "",
            saveflag:"",
            bill : 0,
            seatType:"",
            travellers: []

        }
       /* firstname:"",
            lastname:"",
            phoneNumber:"",
            email:"",
            middlename:"",
            age:"",
            gender:""*/
    }
    componentWillMount() {
        var stateTemp =this.state;
        for(var i =0; i < this.props.criteria.travellerCount;i++){
            var data={
                firstname:"",
                lastname:"",
                phoneNumber:"",
                email:"",
                middlename:"",
                age:"",
                gender:""
            }
            stateTemp.travellers.push(data);
        }
        var bill = 0;
        var a = this.props.criteria.travellerCount;
        var b;

        if(this.props.criteria.round_trip === "false"){
            if(this.props.criteria.travelClass === "Economy"){
                b = this.props.flightData.flight.EconomyClassFares;
                stateTemp.seatType = "3";
            }
            if(this.props.criteria.travelClass === "Business"){
                b = this.props.flightData.flight.BusinessClassFares;
                stateTemp.seatType = "2";
            }
            if(this.props.criteria.travelClass === "First"){
                b = this.props.flightData.flight.FirstClassFares;
                stateTemp.seatType = "1";
            }
        }
        else{
            if(this.props.criteria.travelClass === "Economy"){
               b = this.props.flightData[0].EconomyClassFares + this.props.flightData[1].EconomyClassFares;
                stateTemp.seatType = "3";
            }
            if(this.props.criteria.travelClass === "Business"){
                b = this.props.flightData[0].BusinessClassFares + this.props.flightData[1].BusinessClassFares;
                stateTemp.seatType = "2";
            }
            if(this.props.criteria.travelClass === "First") {
                b = this.props.flightData[0].FirstClassFares + this.props.flightData[1].FirstClassFares;
                stateTemp.seatType = "1";
            }
        }
        bill = a*b;
        stateTemp.bill = bill;
        this.setState(stateTemp);
        console.log(this.props);
    }

    bookHotelAction = () =>{
        var data={
            bookingData: this.state,
            flightData: this.props.flightData,
            criteria:this.props.criteria
        }
        var bookingid = FlightBookingAPI.submitBookingAction(data,this.props.criteria.round_trip);
        this.props.SetFlightBookingId(bookingid);
        this.props.SetComponent("flight");
        this.props.history.push("/loader");
        //this.props.history.push("/flightconfirmation")
    }

    setView = (view) => {
        console.log("view clicked")
        var stateTemp =this.state;
        stateTemp.view = view;
        this.setState(stateTemp);
    }

    validateCvv(){

        var val = document.getElementById("contactInfoUsr").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationcvv").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
        }
        else{
            var RegExpression =new RegExp("^[0-9]{3}$");
            if( RegExpression.test(val))
            {
                document.getElementById("addValiadationcvv").innerHTML="Valid CVv";
                var x1 = document.getElementById("addValiadationcvv");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationcvv").innerHTML="Cvv number must be of 3 digits";
                var x1 = document.getElementById("addValiadationcvv");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }


    validateCard(){

        var val = document.getElementById("cardnumber").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationcard").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
        }
        else{
            var RegExpression =new RegExp("^[0-9]{16}$");
            if( RegExpression.test(val))
            {
                document.getElementById("addValiadationcard").innerHTML="Valid Card Number";
                var x1 = document.getElementById("addValiadationcard");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationcard").innerHTML="Card number must be of 16 digits";
                var x1 = document.getElementById("addValiadationcard");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }

    validateexpdate(){

        var val = document.getElementById("expdate").value;
        if(val.length==0)
        {
            document.getElementById("addValiadationexpdate").innerHTML="";
            document.getElementById("saveUsrInfo").disabled = false;
        }
        else{
            var RegExpression =new RegExp("^(0[1-9]|1[0-2])\\/([0-9]{2})$");
            if( RegExpression.test(val))
            {
                document.getElementById("addValiadationexpdate").innerHTML="Valid CVv";
                var x1 = document.getElementById("addValiadationexpdate");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="green";
                document.getElementById("saveUsrInfo").disabled = false;

            }
            else{
                document.getElementById("addValiadationexpdate").innerHTML="Expiry Date must be in MM/YY format";
                var x1 = document.getElementById("addValiadationexpdate");
                x1.style.display = "block";
                x1.style.fontSize="small";
                x1.style.float="left";
                x1.style.color="red";
                document.getElementById("saveUsrInfo").disabled = true;

            }
        }
    }




    render() {
        var travellerDataHtml = [];
        var abc =this.state.travellers;
        abc.map(function (temp, j) {

            travellerDataHtml.push(
                <div>
                    <h3>TRAVELLER INFORMATION {j+1}</h3>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <span>FIRST NAME</span><p></p>
                                <span>
        <input
            className="def form-control"
            type="text"
            label="NAME"
            placeholder="NAME"
            value={this.state.firstname}
            onChange={(event) => {
                var state_temp = this.state;
                state_temp.travellers[j].firstname = event.target.value;
                this.setState(state_temp);
            }}
        />
    </span>
                            </div>
                            <div className="form-group">
                                <span>MIDDLE NAME</span><p></p>
                                <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.middlename}
                onChange={(event) => {
                    var state_temp = this.state;
                    state_temp.travellers[j].middlename = event.target.value;
                    this.setState(state_temp);

                }}
            />
                </span>
                            </div>
                            <div className="form-group">
                                <span>AGE</span><p></p>
                                <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.age}
                onChange={(event) => {
                    var state_temp = this.state;
                    state_temp.travellers[j].age = event.target.value;
                    this.setState(state_temp);
                }}
            />
            </span>
                            </div>
                            <div className="form-group">
                                <span>PHONE NUMBER</span><p></p>
                                <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.phoneNumber}
                onChange={(event) => {
                    var state_temp = this.state;
                    state_temp.travellers[j].phoneNumber = event.target.value;
                    this.setState(state_temp);
                }}
            />
            </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <span>LAST NAME</span><p></p>
                                <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.lastname}
                onChange={(event) => {
                    var state_temp = this.state;
                    state_temp.travellers[j].lastname = event.target.value;
                    this.setState(state_temp);
                }}
            />
            </span>
                            </div>
                            <div className="form-group">
                                <span>GENDER</span><p></p>
                                <span>

            <input type="radio" name="gender" value="male" onChange={(event) => {
                var state_temp = this.state;
                state_temp.travellers[j].gender = event.target.value;
                this.setState(state_temp);
            }}/> Male
  <input type="radio" name="gender" value="female" onChange={(event) => {
      this.setState({
          gender: "female"
      });
  }}/> Female
            </span>
                            </div>
                            <div className="form-group">
                                <span>EMAIL</span><p></p>
                                <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.email}
                onChange={(event) => {
                    var state_temp = this.state;
                    state_temp.travellers[j].email = event.target.value;
                    this.setState(state_temp);
                }}
            />
            </span>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }.bind(this));
        return (
            <div className="container-fluid-hotel">
                <div className="row text-align-left">
                    <form>
                        <div className="form-group">
                            <h3>FLIGHT BOOKING DETAILS</h3>
                            {
                                (this.props.criteria.round_trip === "false")?
                                    <div>
                                        <span className="abc">AIRLINES: </span>
                                        <span>{this.props.flightData.flight.AirlinesName}</span>
                                        <br/>
                                        <span className="abc">DATE OF TRAVEL: </span>
                                        <span>{this.props.flightData.flight.FlightId}</span>
                                        <br/>
                                        <span className="abc">DURATION OF TRAVEL: </span>
                                        <span>{this.props.flightData.flight.duration}</span>
                                        <br/>
                                        <span className="abc">FLIGHT ID: </span>
                                        <span>{this.props.flightData.flight.FlightId}</span>
                                        <br/>
                                        <span className="abc">FARE OPTION: </span>
                                        <span>{this.props.flightData.flight.classSelected}</span>
                                        <br/>
                                        <span className="abc">SOURCE AIRPORT: </span>
                                        <span>{this.props.flightData.flight.SourceAirport}</span>
                                        <br/>
                                        <span className="abc">TAKE OFF TIME: </span>
                                        <span>{this.props.flightData.flight.TakeOffTime}</span>
                                        <br/>
                                        <span className="abc">DESTINATION AIRPORT: </span>
                                        <span>{this.props.flightData.flight.DestinationAirport}</span>
                                        <br/>
                                        <span className="abc">LANDING TIME: </span>
                                        <span>{this.props.flightData.flight.LandingTime}</span>
                                        <br/>
                                        <span className="abc">BILL: </span>
                                        <span>{this.state.bill}</span>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>



                                    :
                                    <div>
                                        <div>
                                            <p>FLIGHT FROM {this.props.flightData[0].SourceAirport} TO {this.props.flightData[0].DestinationAirport}</p>
                                            <span className="abc">AIRLINES: </span>
                                            <span>{this.props.flightData[0].AirlinesName}</span>
                                            <br/>
                                            <span className="abc">DATE OF TRAVEL: </span>
                                            <span>{this.props.flightData[0].FlightId}</span>
                                            <br/>
                                            <span className="abc">DURATION OF TRAVEL: </span>
                                            <span>{this.props.flightData[0].duration}</span>
                                            <br/>
                                            <span className="abc">FLIGHT ID: </span>
                                            <span>{this.props.flightData[0].FlightId}</span>
                                            <br/>
                                            <span className="abc">FARE OPTION: </span>
                                            <span>{this.props.flightData[0].classSelected}</span>
                                            <br/>
                                            <span className="abc">SOURCE AIRPORT: </span>
                                            <span>{this.props.flightData[0].SourceAirport}</span>
                                            <br/>
                                            <span className="abc">TAKE OFF TIME: </span>
                                            <span>{this.props.flightData[0].TakeOffTime}</span>
                                            <br/>
                                            <span className="abc">DESTINATION AIRPORT: </span>
                                            <span>{this.props.flightData[0].DestinationAirport}</span>
                                            <br/>
                                            <span className="abc">LANDING TIME: </span>
                                            <span>{this.props.flightData[0].LandingTime}</span>
                                            <br/>
                                            <br/>
                                            <br/>
                                        </div>


                                        <div>
                                            <p>FLIGHT FROM {this.props.flightData[0].DestinationAirport} TO {this.props.flightData[0].SourceAirport} </p>
                                            <span className="abc">AIRLINES: </span>
                                            <span>{this.props.flightData[1].AirlinesName}</span>
                                            <br/>
                                            <span className="abc">DATE OF TRAVEL: </span>
                                            <span>{this.props.flightData[1].FlightId}</span>
                                            <br/>
                                            <span className="abc">DURATION OF TRAVEL: </span>
                                            <span>{this.props.flightData[1].duration}</span>
                                            <br/>
                                            <span className="abc">FLIGHT ID: </span>
                                            <span>{this.props.flightData[1].FlightId}</span>
                                            <br/>
                                            <span className="abc">FARE OPTION: </span>
                                            <span>{this.props.flightData[1].classSelected}</span>
                                            <br/>
                                            <span className="abc">SOURCE AIRPORT: </span>
                                            <span>{this.props.flightData[1].SourceAirport}</span>
                                            <br/>
                                            <span className="abc">TAKE OFF TIME: </span>
                                            <span>{this.props.flightData[1].TakeOffTime}</span>
                                            <br/>
                                            <span className="abc">DESTINATION AIRPORT: </span>
                                            <span>{this.props.flightData[1].DestinationAirport}</span>
                                            <br/>
                                            <span className="abc">LANDING TIME: </span>
                                            <span>{this.props.flightData[1].LandingTime}</span>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <span className="abc">BILL: </span>
                                            <span></span>
                                            <br/>
                                            <br/>
                                            <br/>
                                        </div>
                                    </div>
                            }

                        </div>



                        {travellerDataHtml}




                        <h3>BILLING INFORMATION</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <span>STREET</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.street}
                onChange={(event) => {
                    this.setState({
                        street: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>POSTAL CODE</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.postalCode}
                onChange={(event) => {
                    this.setState({
                        postalCode: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>STATE / REGION</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.region}
                onChange={(event) => {
                    this.setState({
                        region: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <span>CITY</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.city}
                onChange={(event) => {
                    this.setState({
                        city: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>COUNTRY</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.country}
                onChange={(event) => {
                    this.setState({
                        country: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                            </div>
                        </div>
                        <h3>PAYMENT INFORMATION</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <span>ACCEPTED CARDS</span>
                                <img src="card.png" className="pad-left card-img"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <span>NAME ON CARD</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="NAME"
                placeholder="NAME"
                value={this.state.name}
                onChange={(event) => {
                    this.setState({
                        name: event.target.value
                    });
                }}
            />
            </span>
                                </div>
                                <div className="form-group">
                                    <span>CARD NUMBER</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="CARD NUMBER"
                placeholder="CARD NUMBER"
                id = "cardnumber"
                value={this.state.cardnumber}
                onChange={(event) => {
                    this.setState({
                        cardnumber: event.target.value
                    });
                }}
                onBlur={()=>this.validateCard('cardnumber','addValiadationcard')}
            />
            </span>
                                </div>
                                <span id="addValiadationcard"></span>
                            </div>
                            <div className="col-md-6">

                                <div className="form-group">
                                    <span>EXPIRY DATE</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="EXPIRY DATE"
                placeholder="EXPIRY DATE"
                id = "expdate"
                value={this.state.expirydate}
                onChange={(event) => {
                    this.setState({
                        expirydate: event.target.value
                    });
                }}
                onBlur={()=>this.validateexpdate('expdate','addValiadationexpdate')}

            />
            </span>
                                    <span id="addValiadationexpdate"></span>
                                </div>
                                <div className="form-group">
                                    <span>SECURITY CODE</span><p></p>
                                    <span>
            <input
                className="def form-control"
                type="text"
                label="CVV"
                placeholder="CVV"
                id = "contactInfoUsr"
                value={this.state.cvv}
                onChange={(event) => {
                    this.setState({
                        cvv: event.target.value
                    });
                }}
                onBlur={()=>this.validateCvv('contactInfoUsr','addValiadationcvv')}
            />
            </span>
                                    <span id="addValiadationcvv"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    id = "saveUsrInfo"
                                    onClick={() =>
                                        this.bookHotelAction()}>
                                    <Ionicon icon="md-lock"
                                             className="padding-right-3" fontSize="25px" color="#FFFFFF"/>
                                    PROCEED TO PAY
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    console.log(state)
    return {
        flightData: state.flights.flightData,
        criteria: state.flights.criteria
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({SetFlight : SetFlight,SetFlightBookingId:SetFlightBookingId,SetComponent:SetComponent}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlightForm));

