const Model = (props) => {

    const cancelHandler = () =>{props.onCancel()}
    const confirmHandler = () => {props.onConfirm()}

    return ( 
        <div className="model">
            <p>Are you sure?</p>
            <button className="btn btn-alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
     );
}
 
export default Model;