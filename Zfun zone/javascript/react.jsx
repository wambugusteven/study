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

export default function Hieracy ()  {
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