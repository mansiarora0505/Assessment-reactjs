import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../index.css";
import {
    Row,
    Card,
    CardImg,
    CardBody,
    Alert,
    Label,
    Button,
    Col
} from "reactstrap";
import { AvForm, AvGroup, AvField, AvInput } from "availity-reactstrap-validation";
import { images } from "../../images";
import { disappear } from "../../utils/global";
import { routePath } from "../../constants/appRoutes";
import { Link } from "react-router-dom";
import { signup } from "../../actions/auth";
import { receiveError } from "../../actions/index";
import { validation } from "../../inputField/validations";
import { authStrings } from "../../constants/string";

const Signup = (props) => {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.Login);
    const [data, setData] = useState({});
    const [alert, setAlert] = useState("");
    const [showPass, setShowPass] = useState(false);

    const toggleAlert = () => setAlert("");

    useEffect(() => {
        setAlert(error)
    }, [error]);

    useEffect(() => {
        return () => dispatch(receiveError(""));
    }, []);

    const showHide = () => setShowPass(!showPass);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    }

    const submit = async () => {
        const { email, password, cpassword, userName } = data;
        if (password === cpassword) {
            const body = {
                userName: userName,
                email: email,
                password: password
            }
            const response = await dispatch(signup(body));
            response && response.successData && props.history.push(routePath.EVENT_LIST);
        }
        else
            setAlert(authStrings.ALERT);
    }
    return (
        <div className="screen">
            <Card className="p-2 d-flex align-items-center" style={{ width: "40%" }}>
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
                <CardImg
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "20px"
                    }}
                    src={images.USER}
                />
                <Row className="mt-1 mb-1">
                    <h4>{authStrings.TEXT3}</h4>
                </Row>
                <CardBody style={{ display: "flex", justifyContent: "center" }}>
                    <AvForm onValidSubmit={submit}>
                        <AvGroup>
                            <Label for="username" style={{ color: "black" }}
                            >
                                {authStrings.NAME_LABEL}
                            </Label>
                            <AvField
                                type="text"
                                id="username"
                                name="userName"
                                value={data.userName || ""}
                                placeholder="Enter user name"
                                onChange={(e) => handleInputChange(e)}
                                validate={validation.USER_NAME}
                            />
                        </AvGroup>
                        <AvGroup>
                            <Label for="email" style={{ color: "black" }}
                            >
                                {authStrings.EMAIL_LABEL}
                            </Label>
                            <AvField
                                type="text"
                                id="email"
                                name="email"
                                value={data.email || ""}
                                placeholder="Enter Email"
                                onChange={(e) => handleInputChange(e)}
                                validate={validation.EMAIL}
                            />
                        </AvGroup>
                        <Row>
                            <Col>
                                <AvGroup>
                                    <Label for="password" style={{ color: "black" }}
                                    >
                                        {authStrings.PASSWORD_LABEL}
                                    </Label>
                                    <AvField
                                        type={showPass ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        value={data.password || ""}
                                        placeholder="Enter password"
                                        onChange={(e) => handleInputChange(e)}
                                        validate={validation.PASSWORD}
                                    />
                                </AvGroup>
                            </Col>
                            <Col>
                                <AvGroup>
                                    <Label for="cpassword" style={{ color: "black" }}
                                    >
                                        {authStrings.C_PASSWORD}
                                    </Label>
                                    <AvField
                                        type={showPass ? "text" : "password"}
                                        id="cpassword"
                                        name="cpassword"
                                        value={data.cpassword || ""}
                                        placeholder="Enter password"
                                        onChange={(e) => handleInputChange(e)}
                                        validate={validation.CPASSWORD}
                                    />
                                </AvGroup>
                            </Col>
                        </Row>
                        <AvGroup check>
                            <AvInput
                                name="mycheckbox"
                                type="checkbox"
                                onClick={showHide}
                            />
                            <span>{authStrings.SHOW_PASSWORD}</span>
                        </AvGroup>
                        <Row className="mt-2 justify-content-center" align="center">
                            <Button
                                className="w-50"
                                color="primary"
                                type="submit"
                                block
                            >
                                {authStrings.SIGNUP}
                            </Button>
                        </Row>
                    </AvForm>
                </CardBody>
                <Row className="justify-content-center">
                    <span className="mr-1">{authStrings.TEXT4}</span>
                    <Link to={routePath.LOGIN}>{authStrings.LOGIN}</Link>
                </Row>
            </Card>
        </div>
    )
}
export default Signup;