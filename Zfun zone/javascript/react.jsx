import { Fragment } from "react"
const greetings = () => {
 const name = "Kibucha";
 return (
    <Fragment>
    <h1 className="title">
        Hello {nameS}
    </h1>
    <p>Nice to meet you.</p>
    </Fragment>
 );
};

const Hierachy = () => {
    const manager = "Jeff"
    return (
        <>
         <h2 className = "title2">
            {manager} here
         </h2>
         <p>I'm the manager</p>
        </>
    )
} 

export default greetings;