import React from "react";
import { useSelector } from "react-redux";
import "./loader.css";
const Loader = () => {
    const { isFetching } = useSelector(state => state.Login);
    return (
        <>
            {isFetching && (
                <div className="loader-wrapper">
                    <div className="loader"></div>
                </div>
            )}
        </>
    )
}
export default Loader;