function Modal(props){
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }
    return (
    <div className='modal'>
        <p>Are you Sure you want to Delete this?</p>
        <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
        <button className='btn' onClick={confirmHandler}>Confirm</button>
    </div>
    );
}
export default Modal;