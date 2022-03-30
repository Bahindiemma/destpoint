<script>
	import {page} from "$app/stores";
	import {isLoggedIn} from "../../../static/UserAuth.js";
    import TopNavbar from "$lib/navigation/TopNavbar.svelte";
    import SideNavbar from "$lib/navigation/SideNavbar.svelte";
    import Footer from "$lib/navigation/Footer.svelte";
    //const userPages = ["/","contact"]
	const protectedPages = ["admin"]

	function pageChange(page){
        console.log(page.url.pathname)
        console.log($isLoggedIn)
		// logged out
		if(!$isLoggedIn){
			if(protectedPages.includes(page.url.pathname)){
				window.location.href = "/login"
			}
		}
	}

	$: pageChange($page)

    $: console.log($isLoggedIn)
</script>

{#if $isLoggedIn}
    <!-- Begin page -->
    <div id="layout-wrapper">

        <!-- import top navigation bar -->
        <TopNavbar/>

        <!-- import sidebar component -->
        <SideNavbar/>

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col">

                            <div class="h-100">

                                <!-- render all other pages -->
                                <slot />

                            </div> <!-- end .h-100-->

                        </div> <!-- end col -->
                    </div>

                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->

            <!-- import footer component -->
            <Footer/>
        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->
{/if}

{#if !$isLoggedIn}
    <div class="main-content">

        <div class="page-content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col">

                        <div class="h-100">

                            <!-- render all other pages -->
                            <slot>

                            </slot>

                        </div> <!-- end .h-100-->

                    </div> <!-- end col -->
                </div>

            </div>
            <!-- container-fluid -->
        </div>
        <!-- End Page-content -->

        <!-- import footer component -->
        <Footer/>
    </div>
{/if}



