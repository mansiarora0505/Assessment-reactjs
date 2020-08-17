import React from "react";
import {
    Row,
    Button,
} from "reactstrap";
import { logout } from "../../utils/global";
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    return (
        <div style={styles.header}>
            <Row style={styles.content}>
                <h2 align="center">HUBX</h2>
                <Button
                    color="warning"
                    onClick={() => logout(history)}
                >
                    Logout
                    </Button>
            </Row>
        </div>
    )
}

const styles = {
    header: {
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "10vh",
        backgroundColor: "black",
        color: "white",
        alignItems: "center",
        flexWrap: "wrap",
        zIndex: "1"
    },
    content: {
        width: "98%",
        alignItems: "center",
        justifyContent: "space-between"
    }
}

export default Header;