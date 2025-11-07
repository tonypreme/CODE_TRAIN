const PageSidebar = {
    template: `
        <div class="sidebar-wrapper" data-layout="stroke-svg">
          <div>
            <div class="logo-wrapper"><a href="index.html"><img class="img-fluid" src="assets/images/logo/logo_light.png" alt=""></a>
              <div class="back-btn"><i class="fa fa-angle-left"></i></div>
              <div class="toggle-sidebar">
                <svg class="stroke-icon sidebar-toggle status_toggle middle">
                  <use href="assets/svg/icon-sprite.svg#toggle-icon"></use>
                </svg>
                <svg class="fill-icon sidebar-toggle status_toggle middle">
                  <use href="assets/svg/icon-sprite.svg#fill-toggle-icon"></use>
                </svg>
              </div>
            </div>
            <div class="logo-icon-wrapper"><a href="index.html"><img class="img-fluid" src="assets/images/logo/logo-icon.png" alt=""></a></div>
            <nav class="sidebar-main">
              <div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
              <div id="sidebar-menu">
                <ul class="sidebar-links" id="simple-bar">
                </ul>
              </div>
              <!-- <div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div> -->
            </nav>
          </div>
        </div>
    `,
    mounted() {
        // The menu is loaded by an external script.
        // We need to ensure this script runs after the component is mounted.
        const script = document.createElement('script');
        script.src = 'assets/js/sidebar-menu-load.js';
        document.body.appendChild(script);
    }
};

export default PageSidebar;