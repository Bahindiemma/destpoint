
<script>
    export let title;
    export let parent_page_name;
    export let parent_page_link;
    export let current_page_name;
</script>

<!-- start page title -->
<div class="row">
    <div class="col-12">
        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0">{title}</h4>

            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="{parent_page_link}">{parent_page_name}</a></li>
                    <li class="breadcrumb-item active">{current_page_name}</li>
                </ol>
            </div>

        </div>
    </div>
</div>
<!-- end page title -->