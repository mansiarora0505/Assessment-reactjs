import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Card,
    CardBody,
    CardHeader,
    Row
} from "reactstrap";
import PaginationList from "../Pagination/Pagination";
import { getAllEvents } from "../../actions/event";
import { PAGE_SIZE } from "../../constants/globalConstants";
import { renderTable } from "./eventTable";
import { routePath } from "../../constants/appRoutes";
import { Link } from "react-router-dom";

const EventList = () => {
    const dispatch = useDispatch();
    const { events, totalEvents } = useSelector(state => state.Event);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(+totalEvents / PAGE_SIZE);

    useEffect(() => {
        getEvents();
    }, [currentPage]);

    const setPage = (page) => {
        if (page > 0 && page <= totalPages)
            setCurrentPage(page);
    }

    const getEvents = async () => {
        const params = {
            pageno: currentPage,
            pagesize: PAGE_SIZE
        };
        await dispatch(getAllEvents(params));
    }

    return (
        <div className="w-100"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Card className="w-75 mt-5">
                <CardHeader style={{ backgroundColor: "black", color: "white" }}>
                    <Row className="align-items-center m-1 justify-content-between">
                        <Row className="align-items-center">
                            <i className="fa fa-star"></i>
                            <span className="ml-1">Event List</span>
                        </Row>
                        <Link
                            style={{ color: "orange", float: "right" }}
                            to={routePath.CREATE_EVENT}
                        >Add Event
                        </Link>
                    </Row>
                </CardHeader>
                <CardBody style={{ maxHeight: "500px", overflow: "auto" }} >
                    {renderTable({ events })}
                </CardBody>
            </Card>
            <PaginationList
                currentPage={currentPage}
                total={+totalEvents}
                totalPages={totalPages}
                setCurrentPage={setPage}
            />
        </div>
    )
}

export default EventList;