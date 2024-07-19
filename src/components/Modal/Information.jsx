import React from 'react'


const Information = ({ show, handleClose }) => {
    return (
        // <div className={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabindex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }} aria-labelledby="exampleModalLabel" aria-hidden={!show}>
        //     <div className="modal-dialog" role="document">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
        //                     <button type="button" onClick={handleClose} className="close" data-dismiss="modal" aria-label="Close">
        //                         <span aria-hidden="true">&times;</span>
        //                     </button>
        //             </div>
        //             <div className="modal-body">
        //                 Modal body text goes here.
        //             </div>
        //             <div className="modal-footer" style={{ height: '40px'}}>
        //                 <button type="button" onClick={handleClose} className="btn btn-danger btn-pill" data-dismiss="modal">Close</button>
        //                 <button type="button" className="btn btn-primary btn-pill">Save Changes</button>
        //             </div>
        //             </div>
        //     </div>
        // </div>



<div className={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabindex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }} aria-labelledby="exampleModalLabel" aria-hidden={!show}>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <p>Modal body text goes here.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
    )
}

export default Information





