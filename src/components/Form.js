import React from "react";

const Form = props => (
            <form onSubmit={props.getWeather} className="">
                <div className="form-group">
                    <input className="form-control" type="text" name="city" placeholder="City..."/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="country" placeholder="Country..."/>
                </div>
                <button className="btn btn-info">Get Weather</button>
            </form>
        );

export default Form;