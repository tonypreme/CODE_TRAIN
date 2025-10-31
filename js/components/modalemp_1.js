const ModalEmp = {
    props: {
        listemployee: {
            type: Array,
            default: () => []
        },
        findemployeedata: {
            type: String,
            default: ''
        }
    },
    template: `
        <div class="modal fade" id="modalemp" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modallabel"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group" id="tablemodalemp">
                            <div class="form-group">
                                <div class="col-12">
                                    <div class="mb-3">
                                        <label class="form-label">Search</label>
                                        <input :value="findemployeedata" @input="$emit('update:findemployeedata', $event.target.value)" @keyup="$emit('findemployee')" class="form-control" type="text" placeholder="input id/name">
                                    </div>
                                </div>
                                <table class="table table-bordered table-hover table-striped tablesorter display">
                                    <thead>
                                        <tr>
                                            <th class="text-center">empname</th>
                                            <th class="text-center">department</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="row in listemployee">
                                            <td scope="row" class="text-left">
                                                <a href="#" @click.prevent="$emit('adddataemp', row)">
                                                    <span style="color:blye;font-weight: bold;">
                                                        {{row.empname}}
                                                    </span>
                                                    <br>
                                                    <span>
                                                        {{row.jobtitle}}
                                                    </span>
                                                </a>
                                            </td>
                                            <td scope="row" class="text-left">
                                                {{row.departmentname}}
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

export default ModalEmp;