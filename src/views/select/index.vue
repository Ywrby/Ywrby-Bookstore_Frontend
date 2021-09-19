<template>
  <div class="app-container">
    <el-container>
      <el-header>图书选择</el-header>
      <el-main>
        <el-row>
          <el-col :span="12">
              <div class="grid-content">
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="阅读书目一">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="阅读书目二">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="阅读书目三">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="阅读书目四">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="阅读书目五">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              </div>
              </el-col>
          <el-col :span="12"><div class="grid-content">
              
              <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="阅读书目六">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="阅读书目七">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="阅读书目八">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="阅读书目九">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>

                <el-form-item label="阅读书目十">
                  <el-select v-model="form.region" placeholder="请选择书目">
                    <el-option label="书目一" value="1"></el-option>
                    <el-option label="书目二" value="2"></el-option>
                    <el-option label="书目三" value="3"></el-option>
                    <el-option label="书目四" value="4"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
              </div></el-col>
        </el-row>
        </el-main>
        <el-footer>  
            <el-button type="primary">取消</el-button>
            <el-button type="success">保存</el-button>
        </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>