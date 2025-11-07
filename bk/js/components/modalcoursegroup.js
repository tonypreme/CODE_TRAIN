const ModalCourseGroup = {
    props: {
        listcoursegroupall: {
            type: Array,
            default: () => []
        },
        findcoursegroupdata: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            modal: null,
            filteredcoursegroup: []
        };
    },
    watch: {
        listcoursegroupall: {
            handler(newVal) {
                this.filteredcoursegroup = newVal;
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
        findcoursegroup() {
            if (!this.findcoursegroupdata) {
                this.filteredcoursegroup = this.listcoursegroupall;
                return;
            }
            let listcoursegroup = this.listcoursegroupall.filter(e => e.coursegroupcode.toLowerCase().includes(this.findcoursegroupdata.toLowerCase()));
            if (!listcoursegroup.length) {
                listcoursegroup = this.listcoursegroupall.filter(e => e.coursegroupname.toLowerCase().includes(this.findcoursegroupdata.toLowerCase()));
            }
            this.filteredcoursegroup = listcoursegroup;
        },
        selectCourseGroup(group) {
            this.$emit('course-group-selected', group);
            this.hide();
        }
    },
    template: `
       <div class="modal fade" id="modalcoursegroup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modallabelcoursegroup">Select Course Group</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="form-group" id="tablemodalcoursegroup">
                  <div class="form-group">
                      <div class="col-12">
                        <div class="mb-3">
                          <label class="form-label">Search</label>
                          <input :value="findcoursegroupdata" @input="$emit('update:findcoursegroupdata', $event.target.value)" @keyup="findcoursegroup" class="form-control" type="text" placeholder="input id/name">
                        </div>
                      </div>
                      <table class="table table-bordered table-hover table-striped tablesorter display">
                          <thead>
                              <tr>
                                  <th class="text-center">Department and Function</th>
                                  <th class="text-center">Description</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="row in filteredcoursegroup">
                                  <td scope="row" class="text-left">
                                    <a href="#" @click.prevent="selectCourseGroup(row)">
                                      <span style="color:blye;font-weight: bold;">
                                        {{row.coursegroupcode}}
                                      </span>
                                    </a>
                                  </td>
                                  <td scope="row" class="text-left">
                                    {{row.coursegroupname}}
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

export default ModalCourseGroup;