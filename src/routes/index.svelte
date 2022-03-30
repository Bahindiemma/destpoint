<script>
    import {signout} from "$lib/firebase.js";
    import {isLoggedIn} from "../../static/UserAuth.js";
</script>


<!-- page meta tags -->
<svelte:head>
    <title>Destination Point</title>
</svelte:head>




{#if !$isLoggedIn}
    <header class="w-100">
        <div class="layout-width">
            <div class="navbar-header">
                <div class="d-flex">
                    <!-- LOGO -->
                    <div class="navbar-brand-box horizontal-logo">
                        <a href="index.html" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="/assets/images/logo-sm.png" alt="" height="22">
                        </span>
                            <span class="logo-lg">
                            <img src="/assets/images/logo-dark.png" alt="" height="17">
                        </span>
                        </a>

                        <a href="index.html" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="/assets/images/logo-sm.png" alt="" height="22">
                        </span>
                            <span class="logo-lg">
                            <img src="/assets/images/logo-light.png" alt="" height="17">
                        </span>
                        </a>
                    </div>

                    <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                            id="topnav-hamburger-icon">
                    <span class="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </button>
                </div>

                <!-- App Search-->
                <form class=" my-2">
                    <div class="row g-2">
                        <div class="col">
                            <div class="position-center bg-light">
                                <input type="text" class="form-control form-control-lg bg-white border-light"
                                       placeholder="Enter your token here" value="">
                                <a class="btn btn-link link-success btn-lg position-absolute end-0 top-0"
                                   data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                   aria-controls="offcanvasExample">
                                    <i class="ri-mic-fill"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary btn-lg waves-effect waves-light"><i
                                    class="mdi mdi-magnify me-1"></i>Track
                            </button>
                        </div>
                    </div>
                    <div class="dropdown-menu dropdown-menu-lg" id="search-dropdown">
                        <div data-simplebar style="max-height: 320px;">
                            <!-- item-->
                            <div class="dropdown-header">
                                <h6 class="text-overflow text-muted mb-0 text-uppercase">Recent Searches</h6>
                            </div>

                            <div class="dropdown-item bg-transparent text-wrap">
                                <a href="index.html" class="btn btn-soft-secondary btn-sm btn-rounded">how to setup
                                    <i
                                            class="mdi mdi-magnify ms-1"></i></a>
                                <a href="index.html" class="btn btn-soft-secondary btn-sm btn-rounded">buttons <i
                                        class="mdi mdi-magnify ms-1"></i></a>
                            </div>
                            <!-- item-->
                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-1 text-uppercase">Pages</h6>
                            </div>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="ri-bubble-chart-line align-middle fs-18 text-muted me-2"></i>
                                <span>Analytics Dashboard</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"></i>
                                <span>Help Center</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item">
                                <i class="ri-user-settings-line align-middle fs-18 text-muted me-2"></i>
                                <span>My account settings</span>
                            </a>

                            <!-- item-->
                            <div class="dropdown-header mt-2">
                                <h6 class="text-overflow text-muted mb-2 text-uppercase">Members</h6>
                            </div>

                            <div class="notification-list">
                                <!-- item -->
                                <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                                    <img src="/assets/images/users/avatar-2.jpg"
                                         class="me-3 rounded-circle avatar-xs"
                                         alt="user-pic">
                                    <div class="flex-1">
                                        <h6 class="m-0">Angela Bernier</h6>
                                        <span class="fs-11 mb-0 text-muted">Manager</span>
                                    </div>
                                </a>
                                <!-- item -->
                                <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                                    <img src="/assets/images/users/avatar-3.jpg"
                                         class="me-3 rounded-circle avatar-xs"
                                         alt="user-pic">
                                    <div class="flex-1">
                                        <h6 class="m-0">David Grasso</h6>
                                        <span class="fs-11 mb-0 text-muted">Web Designer</span>
                                    </div>
                                </a>
                                <!-- item -->
                                <a href="javascript:void(0);" class="d-flex dropdown-item notify-item py-2">
                                    <img src="/assets/images/users/avatar-5.jpg"
                                         class="me-3 rounded-circle avatar-xs"
                                         alt="user-pic">
                                    <div class="flex-1">
                                        <h6 class="m-0">Mike Bunch</h6>
                                        <span class="fs-11 mb-0 text-muted">React Developer</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="text-center pt-3 pb-1">
                            <a href="pages-search-results.html" class="btn btn-primary btn-sm">View All Results <i
                                    class="ri-arrow-right-line ms-1"></i></a>
                        </div>
                    </div>
                </form>

                <div class="d-flex align-items-center">

                    <div class="ms-1 header-item d-none d-sm-flex">
                        <a href="/login"
                           class="btn btn-primary btn-outline-light btn-lg waves-effect waves-light">Login</a>
                    </div>

                </div>
            </div>
        </div>
    </header>
{/if}


<div class="container pt-4">
    <div class="row p-0" >
        <div class="col-md-9 h-75 m-0">
            <!-- card -->
            <div class="card card-animate" style="height:70vh">
                <div class="card-body">
                    <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7507202209044!2d32.5653159141575!3d0.3335303997566598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb6d88e54def%3A0xddc6fcfbe10b089d!2sMakerere%20University!5e0!3m2!1sen!2sug!4v1648217138089!5m2!1sen!2sug"
                            width="100%" height="100%"
                            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div>
        <div class="col-md-3 h-75 m-0">
            <!-- card -->
            <div class="card card-animate" style="height:70vh">
                <div class="card-body">
                    <h4></h4>
                </div><!-- end card body -->
            </div><!-- end card -->
        </div>
    </div>
</div>
<!-- end row-->