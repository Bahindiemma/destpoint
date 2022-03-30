
<!-- page meta tags -->
<svelte:head>
	<title>Luggage</title>
</svelte:head>


<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title mb-0">Dispatch Form</h4>
            </div><!-- end card header -->

            <div class="card-body">
                <div id="customerList">
                    <div class="row g-4 mb-3">
                        <div class="col-sm-auto">
                            <div>
                                <button type="button" class="btn btn-success add-btn" data-bs-toggle="modal" id="create-btn" data-bs-target="#showModal"><i class="ri-add-line align-bottom me-1"></i> Add</button>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="d-flex justify-content-sm-end">
                                <div class="search-box ms-2">
                                    <input type="text" class="form-control search" placeholder="Search...">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="table-responsive table-card mt-3 mb-1">
                        <table class="table align-middle table-nowrap" id="customerTable">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col" style="width: 50px;">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="checkAll" value="option">
                                        </div>
                                    </th>
                                    <th class="sort" data-sort="customer_name">ID</th>
                                    <td class="sort">Sender</td>
                                    <td class="sort">Sender Phone</td>
                                    <th class="sort" data-sort="email">Receiver</th>
                                    <th class="sort" data-sort="phone">Receiver Phone</th>
                                    <th class="sort" data-sort="phone">Luggage</th>
                                    <th class="sort" data-sort="date">Amount Paid</th>
                                    <th class="sort" data-sort="phone">Receipt No.</th>
                                    <th class="sort" data-sort="action">Action</th>
                                    </tr>
                            </thead>
                            <tbody class="list form-check-all">
                                <tr>
                                    <th scope="row">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="checkAll" value="option1">
                                        </div>
                                    </th>
                                    <td class="id" style="display:none;"><a href="javascript:void(0);" class="fw-medium link-primary"></a></td>
                                    <td class="customer_name">1</td>
                                    <td class="sort">Box of Books</td>
                                    <td class="sort">5</td>
                                    <td class="sort">LK0002F</td>
                                    <td class="sort">Emma</td>
                                    <td class="phone">+256 773165989</td>
                                    <td class="sort">Brian</td>
                                    <td class="phone">+256 750329751</td>
                                    <td>
                                        <div class="d-flex gap-2">
                                            <div class="edit">
                                                <button class="btn btn-sm btn-success edit-item-btn" data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="noresult" style="display: none">
                            <div class="text-center">
                                <lord-icon src="../../../msoeawqm-1.json" trigger="loop" colors="primary:#121331,secondary:#08a88a" style="width:75px;height:75px">
                                </lord-icon>
                                <h5 class="mt-2">Sorry! No Result Found</h5>
                                <p class="text-muted mb-0">We've searched more than 150+ Orders We did not find any
                                    orders for you search.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="d-flex justify-content-end">
                        <div class="pagination-wrap hstack gap-2">
                            <a class="page-item pagination-prev disabled" href="#">
                                Previous
                            </a>
                            <ul class="pagination listjs-pagination mb-0"></ul>
                            <a class="page-item pagination-next" href="#">
                                Next
                            </a>
                        </div>
                    </div>
                </div>
            </div><!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end col -->
</div>

<!-- Modals -->

<div class="modal fade" id="showModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-light p-3">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-modal"></button>
            </div>
            <form>
                <div class="modal-body">

                    <div class="mb-3">
                        <label class="form-label">Sender Name</label>
                        <input type="text" class="form-control" placeholder="Enter sender name" required="">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Sender Phone</label>
                        <input type="text" class="form-control" placeholder="Enter sender phone" required="">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Receiver Name</label>
                        <input type="text" class="form-control" placeholder="Enter receiver name" required="">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Receiver Phone</label>
                        <input type="text" class="form-control" placeholder="Enter receiver phone" required="">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Luggage Name</label>
                        <input type="text" class="form-control" placeholder="Enter luggage name" required="">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Amount paid</label>
                        <input type="text" class="form-control" placeholder="Enter amount paid" required="">
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Receipt Number</label>
                        <input type="text" class="form-control" placeholder="Enter receipt number" required="">
                    </div>

                </div>
                <div class="modal-footer">
                    <div class="hstack gap-2 justify-content-end">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-success" id="add-btn">Add</button>
                        <button type="button" class="btn btn-success" id="edit-btn">Update</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade zoomIn" id="deleteRecordModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="btn-close"></button>
            </div>
            <div class="modal-body">
                <div class="mt-2 text-center">
                    <lord-icon src="../../../gsqxdxog-1.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style="width:100px;height:100px"></lord-icon>
                    <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you Sure ?</h4>
                        <p class="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
                    </div>
                </div>
                <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button type="button" class="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn w-sm btn-danger " id="delete-record">Yes, Delete It!</button>
                </div>
            </div>
        </div>
    </div>
</div>
<!--end modal -->