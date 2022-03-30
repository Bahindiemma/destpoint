<script>
  import Header from '$lib/header/Header.svelte'
</script>

<!-- ========== App Menu ========== -->
<div class="app-menu navbar-menu">
  <!-- LOGO -->
  <div class="navbar-brand-box">
    <!-- Dark Logo-->
    <a href="index.html" class="logo logo-dark">
      <span class="logo-sm">
        <img src="/logo.png" alt="" height="200" />
      </span>
      <span class="logo-lg">
        <img src="/logo.png" alt="" height="100" />
      </span>
    </a>
    <!-- Light Logo-->
    <a href="index.html" class="logo logo-light">
      <span class="logo-sm">
        <img src="/logo.png" alt="" height="200" />
      </span>
      <span class="logo-lg">
        <img src="/logo.png" alt="" height="100" />
      </span>
    </a>
    <button
      type="button"
      class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
      id="vertical-hover">
      <i class="ri-record-circle-line" />
    </button>
  </div>

  <div id="scrollbar">
    <div class="container-fluid">

      <div id="two-column-menu" />
      <ul class="navbar-nav" id="navbar-nav">
        <li class="nav-item">
          <a class="nav-link menu-link" href="/admin">
            <i class="ri-dashboard-2-line" />
            <span data-key="t-dashboards">Dashboard</span>
          </a>
        </li>
        <!-- end Dashboard Menu -->

        <!--
        <li class="nav-item">
          <a class="nav-link menu-link" href="/admin/receipts">
            <i class=" ri-bill-line" />
            <span data-key="t-layouts">Receipts</span>
          </a>
        </li>
        -->

        <!-- end Dashboard Menu -->
        <!-- <li class="nav-item">
          <a class="nav-link menu-link" href="#sidebarPages">
            <i class="ri-eye-line" />
            <span data-key="t-pages">View</span>
          </a>
        </li> -->

        <li class="nav-item">
            <a class="nav-link menu-link" href="/admin/luggage">
              <i class=" ri-article-line" />
              <span data-key="t-authentication">Dispatch Forms</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menu-link" href="/admin/reports">
              <i class="ri-file-copy-2-fill" />
              <span data-key="t-authentication">Reports</span>
            </a>
          </li>

        <!--
        <li class="nav-item">
          <a class="nav-link menu-link" href="/admin/routes">
            <i class="ri-route-line" />
            <span data-key="t-pages">Routes</span>
          </a>
        </li>
        -->

        <li class="nav-item">
          <a class="nav-link menu-link" href="/admin/users">
            <i class="ri-walk-line" />
            <span data-key="t-authentication">Users</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- Sidebar -->
  </div>
</div>
<!-- Left Sidebar End -->

<!-- Vertical Overlay-->
<div class="vertical-overlay" />
