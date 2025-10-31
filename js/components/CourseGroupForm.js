const CourseGroupFormComponent = {
    props: ['form', 'listcoursemaingroup', 'liststatususe', 'userid'],
    template: `
        <div class="modal fade" id="modalform" tabindex="-1" aria-labelledby="exampleModalLabel" >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modallabel">Course Group</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">CourseGroup Code:</label>
                      <input type="text" v-model="form.coursegroupcode" class="form-control" >
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">CourseGroup Name:</label>
                      <input type="text" v-model="form.coursegroupname" class="form-control" >
                    </div>
                     <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Department/Function:</label>
                       <select  class="form-control btn-square" v-model="form.coursemaingroupcode">
                            <option value="">--Select--</option>
                            <option v-for="opt in listcoursemaingroup" :value="opt.coursemaingroupcode">
                              {{ opt.coursemaingroupname }}
                            </option>
                          </select>
                    </div>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Recorded Training Hours:</label>
                      <select  class="form-control btn-square" v-model="form.recorded_training_hours">
                            <option value="">--Select--</option>
                            <option v-for="opt in liststatususe" :value="opt.value">
                              {{ opt.name }}
                            </option>
                          </select>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" @click="savedata()" class="btn btn-primary">Save</button>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
    `,
    methods: {
        async savedata() {
            if (this.form.coursegroupcode == "") { alert('โปรดระบุรหัส'); return; }
            if (this.form.coursegroupname == "") { alert('โปรดระบุชื่อ'); return; }
            if (this.form.coursemaingroupcode == "") { alert('โปรดระบุ Department/Function'); return; }

            const formData = new FormData();
            formData.append('id', this.form.id);
            formData.append('userid', this.userid);
            formData.append('coursegroupcode', this.form.coursegroupcode);
            formData.append('coursegroupname', this.form.coursegroupname);
            formData.append('coursemaingroupcode', this.form.coursemaingroupcode);
            formData.append('recorded_training_hours', this.form.recorded_training_hours);

            try {
                const res = await axios.post(apiserver + 'controller/coursegroup/savecoursegroup.php', formData);
                console.log(res.data);
                if (res.data == "success") {
                    alert("บันทึกข้อมูลเรียบร้อยแล้ว");
                    this.$emit('saved');
                } else {
                    alert(res.data);
                }
            } catch (error) {
                console.error(error);
                alert("An error occurred while saving.");
            }
        }
    }
};

export default CourseGroupFormComponent;
