const PageFooter = {
    template: `
        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 footer-copyright d-flex flex-wrap align-items-center justify-content-between">
                <p class="mb-0 f-w-600">Copyright <span class="year-update"></span> © Docflow  </p>
                <p class="mb-0 f-w-600">Document Flow
                </p>
              </div>
            </div>
          </div>
        </footer>
    `,
    mounted() {
        // Ensure the copyright year is always up to date.
        const yearSpan = this.$el.querySelector('.year-update');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }
};

export default PageFooter;