import React, { useState, useEffect } from "react";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import {
    Card,
    CardBody,
    CardHeader,
    Row,
    Alert,
    Col,
    Label,
    Button
} from "reactstrap";
import { AvForm, AvGroup, AvField } from "availity-reactstrap-validation";
import TimePicker from "react-bootstrap-time-picker";
import { createEvent } from "../../actions/event";
import { receiveError } from "../../actions/index";
import { routePath } from "../../constants/appRoutes";
import { Link } from "react-router-dom";
import { disappear } from "../../utils/global";
import { validationMessage, Regex } from "../../constants/string";
import moment from "moment";
import { validation } from "../../inputField/validations";

const CreateEvent = (props) => {
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.Event);
    const [data, setData] = useState({ duration: 15, start_time: 0, end_time: 43200 });
    const [alert, setAlert] = useState("");
    const minDate = moment().add(1, "days").format("YYYY-MM-DD");
    const maxDate = moment(minDate).add(100, "years").format("YYYY-MM-DD")

    const toggleAlert = () => setAlert("");

    useEffect(() => {
        setAlert(error)
    }, [error]);

    useEffect(() => {
        return () => dispatch(receiveError(""));
    }, []);

    const handleInputChange = (e) => {
        console.log("ghgh")
        const name = e.target.name;
        let value = e.target.value;

        if (name === "duration") {
            if (value !== "")
                value = +value
            console.log(typeof value, value)

        }

        setData({ ...data, [name]: value });
    }

    const handleTimeChange = (e, name) => {
        console.log(e)
        setData({ ...data, [name]: e });
    }

    const addEvent = async () => {
        const { e_name, e_date, start_time, end_time, location } = data;
        if (end_time > start_time) {
            const startTime = timeToDate(start_time);
            const endTime = timeToDate(end_time);
            const body = {
                e_name,
                e_date,
                start_time: startTime,
                end_time: endTime,
                location
            };
            const response = await dispatch(createEvent(body));
            response && response.successData && props.history.push(routePath.EVENT_LIST);
        }
        else
            setAlert("end time must be greater than start time")
    }

    const timeToDate = (timeInSec) => {
        const dateInMiliSec = new Date(JSON.stringify(data.e_date)).getTime();
        const total = (timeInSec * 1000) + dateInMiliSec;
        return new Date(total).toISOString();
    }

    return (
        <>
            <Card className="w-50">

                <CardHeader style={{ backgroundColor: "black", color: "white" }}>
                    <Row className="align-items-center m-1 justify-content-between">
                        <Row className="align-items-center">
                            <i className="fa fa-star"></i>
                            <span className="ml-1">Add Event</span>
                        </Row>
                        <Link
                            style={{ color: "orange", float: "right" }}
                            to={routePath.EVENT_LIST}
                        >Back
                        </Link>
                    </Row>
                </CardHeader>
                <CardBody >
                    {alert && (
                        <Alert isOpen={!!alert}
                            toggle={toggleAlert}
                            color="warning"
                            className="w-100"
                        >
                            <span>{alert}</span>
                        </Alert>
                    )}
                    {alert && disappear(toggleAlert)}
                    <AvForm onValidSubmit={addEvent}>
                        <Row className="w-100 justify-content-around">
                            <Col md={5}>
                                <AvGroup>
                                    <Label for="name" style={{ color: "black" }}>Event Name</Label>
                                    <AvField
                                        type="text"
                                        id="name"
                                        name="e_name"
                                        value={data.e_name || ""}
                                        onChange={handleInputChange}
                                        validate={validation.EVENT_NAME}
                                    />
                                </AvGroup>
                            </Col>
                            <Col md={5}>
                                <AvGroup>
                                    <Label for="date" style={{ color: "black" }}>Date</Label>
                                    <AvField
                                        className="inputStyle"
                                        type="date"
                                        value={data.e_date || ""}
                                        name="e_date"
                                        min={minDate}
                                        max={maxDate}
                                        onChange={handleInputChange}
                                        validate={{
                                            required: {
                                                value: true,
                                                errorMessage: validationMessage.DATE1
                                            },
                                            dateRange: {
                                                start: {
                                                    value: moment(minDate),
                                                },
                                                end: {
                                                    value: moment(maxDate),
                                                },
                                                errorMessage: `Date must be in between ${moment(minDate).format("DD-MM-YYYY")} and ${moment(maxDate).format("DD-MM-YYYY")}`
                                            },
                                        }}
                                    />
                                </AvGroup>
                            </Col>
                        </Row>
                        <Row className="w-100 justify-content-around">
                            <Col md={5}>
                                <AvGroup>
                                    <Label for="location" style={{ color: "black" }}
                                    >
                                        Location
                                        </Label>
                                    <AvField
                                        type="textarea"
                                        id="location"
                                        value={data.location || ""}
                                        name="location"
                                        onChange={handleInputChange}
                                        validate={validation.LOCATION}
                                    />
                                </AvGroup>
                            </Col>
                            <Col md={5}>
                                <AvGroup>
                                    <Label for="step" style={{ color: "black" }}
                                    >
                                        Time Duration(in min)
                                        </Label>
                                    <AvField
                                        type={data.duration ? "number" : "text"}
                                        name="duration"
                                        value={data.duration}
                                        onChange={handleInputChange}
                                        validate={{
                                            pattern: {
                                                value: Regex.STEP,
                                                errorMessage: validationMessage.STEP
                                            }
                                        }}
                                    />
                                </AvGroup>
                            </Col>
                        </Row>
                        <Row className="w-100 justify-content-around">
                            <Col md={5}>
                                <AvGroup>
                                    <Label for="start" style={{ color: "black" }}
                                    >
                                        Start Time
                                    </Label>
                                    <TimePicker
                                        start="00:00"
                                        end="24:00"
                                        step={data.duration || 15}
                                        id="start"
                                        name="start_time"
                                        value={data.start_time || ""}
                                        onChange={(e) => handleTimeChange(e, "start_time")}
                                        required
                                    />
                                </AvGroup>
                            </Col>
                            <Col md={5}>
                                <AvGroup>
                                    <Label for="end" style={{ color: "black" }}
                                    >
                                        End Time
                                    </Label>
                                    <TimePicker
                                        start="00:00"
                                        end="24:00"
                                        step={data.duration || 15}
                                        id="end"
                                        name="end_time"
                                        value={data.end_time || ""}
                                        onChange={(e) => handleTimeChange(e, "end_time")}

                                    />
                                </AvGroup>
                            </Col>
                        </Row>
                        <Row className="w-100 justify-content-center">
                            <Button
                                color="info"
                                type="submit">
                                Submit
                        </Button>
                        </Row>
                    </AvForm>
                </CardBody>
            </Card>
        </>
    )
}

export default CreateEvent;