const VotersModal = ({ active, votersSelection }) => {

    return (
        <div>
            {active == 0 && <button onClick={() => votersSelection()} class="btn btn-elect rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#exampleModal" disabled>Create</button>}
            {active != 0 && <button onClick={() => votersSelection()} class="btn btn-elect rounded-pill px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Create</button>}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" id="exampleModalLabel">Add Voters</h3>
                            <button type="button" class="btn-close pink" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2 border rounded-pill" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-elect rounded-pill" type="submit">Search</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-right rounded-pill" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-elect rounded-pill">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default VotersModal;