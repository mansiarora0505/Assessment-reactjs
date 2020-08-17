import React from "react";
import { eventHeadings } from "../../constants/string";
import { timeFormat, dateFormat } from "../../utils/global";
import { Table } from "reactstrap";

const UserRow = (props) => {
    const { events } = props;
    return (
        <>
            {events.map(item => (
                <tr key={item.id}>
                    <td>{item.e_name}</td>
                    <td>{dateFormat(item.e_date)}</td>
                    <td>{item.start_time && timeFormat(item.start_time)}</td>
                    <td>{item.end_time && timeFormat(item.end_time)}</td>
                    <td style={{ maxWidth: "50px" }}>{item.location}</td>
                </tr>
            ))}
        </>
    )
}

export const renderTable = (props) => {
    const { events } = props;
    return (
        <Table striped hover>
            <thead>
                <tr>
                    {eventHeadings.map(item => (
                        <th key={item}>
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <UserRow events={events} />
            </tbody>
        </Table>
    )
}