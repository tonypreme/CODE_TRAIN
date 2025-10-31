const ModalCourse = {
    props: {
        listcourseall: {
            type: Array,
            default: () => []
        },
        findcoursedata: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            modal: null,
            filteredcourse: []
        };
    },
    watch: {
        listcourseall: {
            handler(newVal) {
                this.filteredcourse = newVal;
            },
            immediate: true
        }
    },
    methods: {
        show() {
            if (!this.modal) {
                this.modal = new bootstrap.Modal(this.$el);
            }
            this.modal.show();
        },
        hide() {
            if (this.modal) {
                this.modal.hide();
            }
        },
        findcourse() {
            if (!this.findcoursedata) {
                this.filteredcourse = this.listcourseall;
                return;
            }
            let listcourse = this.listcourseall.filter(e => e.coursecode.toLowerCase().includes(this.findcoursedata.toLowerCase()));
            if (!listcourse.length) {
                listcourse = this.listcourseall.filter(e => e.coursename.toLowerCase().includes(this.findcoursedata.toLowerCase()));
            }
            this.filteredcourse = listcourse;
        },
        selectCourse(course) {
            this.$emit('course-selected', course);
            this.hide();
        }
    },
    template: `
       <div class="modal fade"  id="modalcourse"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg"  >
            <div class="modal-content"  >
              <div class="modal-header">
                <h5 class="modal-title" id="modallabelcourse">Select Course</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="form-group" id="tablemodalcourse">
                  <div class="form-group">
                      <div class="col-12">
                        <div class="mb-3">
                          <label class="form-label">Search</label>
                          <input :value="findcoursedata" @input="$emit('update:findcoursedata', $event.target.value)" @keyup="findcourse" class="form-control" type="text" placeholder="input id/name">
                        </div>
                      </div>
                      <table class="table table-bordered table-hover table-striped tablesorter display">
                          <thead>
                              <tr>
                                  <th class="text-center">Course Name</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="row in filteredcourse">
                                  <td scope="row" class="text-left">
                                    <a href="#" @click.prevent="selectCourse(row)" >
                                      <span style="color:blye;font-weight: bold;">
                                        {{row.coursename}}
                                      </span>
                                    </a>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    `
};

export default ModalCourse;