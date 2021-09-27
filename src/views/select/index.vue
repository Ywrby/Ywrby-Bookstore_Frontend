<template>
  <div class="app-container">
    <el-container>
      <el-header>图书选择</el-header>
      <el-main>
        <div class="grid-content">
          <el-form label-width="120px" ref="bookForm" >
            <el-row>
              <el-col :span="12">
                <el-form-item label="阅读书目一">
                  <el-cascader
                    ref="cascader1"
                    v-model="value1"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
              
              <el-col :span="12">
                <el-form-item label="阅读书目二">
                  <el-cascader
                    ref="cascader2"
                    v-model="value2"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="12">
                <el-form-item label="阅读书目三">
                  <el-cascader
                    ref="cascader3"
                    v-model="value3"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
              
              <el-col :span="12">
                <el-form-item label="阅读书目四">
                  <el-cascader
                    ref="cascader4"
                    v-model="value4"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
            </el-row>

            
            <el-row>
              <el-col :span="12">
                <el-form-item label="阅读书目五">
                  <el-cascader
                    ref="cascader5"
                    v-model="value5"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
              
              <el-col :span="12">
                <el-form-item label="阅读书目六">
                  <el-cascader
                    ref="cascader6"
                    v-model="value6"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
            </el-row>

            
            <el-row>
              <el-col :span="12">
                <el-form-item label="阅读书目七">
                  <el-cascader
                    ref="cascader7"
                    v-model="value7"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
              
              <el-col :span="12">
                <el-form-item label="阅读书目八">
                  <el-cascader
                    ref="cascader8"
                    v-model="value8"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
            </el-row>

            
            <el-row>
              <el-col :span="12">
                <el-form-item label="阅读书目九">
                  <el-cascader
                    ref="cascader9"
                    v-model="value9"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
              
              <el-col :span="12">
                <el-form-item label="阅读书目十">
                  <el-cascader
                    ref="cascader10"
                    v-model="value10"
                    :props="defaultParams"
                    :options="options"
                  ></el-cascader>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <el-card class="box-card">
          <div slot="header">
            <span>名著阅读选书要求：</span>
          </div>
          <div>
            1.只能够提交一次，提交之后不能修改。请认真选择。<br />
            2.本次选书只能在本专业领域以外进行选择，例如美术学院不能选择美学和艺术学两个大类，若对本专业领域不清楚，请咨询辅导员老师。<br />
            3.每个大类最多选择两本书籍！例如：若文学类选择了《骆驼祥子》和《呐喊》，该领域则不能再进行选择。<br />
          </div>
        </el-card>
      </el-main>
      <el-footer>
        <el-button type="primary" @click="cancel">取消</el-button>
        <el-button type="success" @click="submit">保存</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      value1: [],
      value2: [],
      value3: [],
      value4: [],
      value5: [],
      value6: [],
      value7: [],
      value8: [],
      value9: [],
      value10: [],
      options: [],
      valueList: [],
      selectedOptions: [],
      defaultParams: {
        label: "name",
        value: "id",
        children: "children",
      }
    };
  },
  computed: {
    ...mapState("classify", ["title"]),
  },
  created() {
    this.getClassify();
  },
  methods: {
    ...mapActions("classify", ["getClassifyAndBookList"]),
    ...mapActions("books", ["updateStuBookList"]),
    getClassify() {
      this.getClassifyAndBookList().then((response) => {
        this.options = response;
      });
    },
    cancel() {
      this.$confirm('是否停止选书，清空当前内容?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.value1=[],
        this.value2=[],
        this.value3=[],
        this.value4=[],
        this.value5=[],
        this.value6=[],
        this.value7=[],
        this.value8=[],
        this.value9=[],
        this.value10=[],
        this.$message({
          type: 'success',
          message: '已清空内容!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消清空'
        });          
      });
    },
    dataCheck() {
      this.valueList=[this.value1,this.value2,this.value3,this.value4,this.value5,
                    this.value6,this.value7,this.value8,this.value9,this.value10]
      
      var classifyList=[]
      var bookList=[]
      for(var i=0;i<this.valueList.length;i++){
        classifyList[i]=this.valueList[i][0]
        bookList[i]=this.valueList[i][1]
        if(this.valueList[i][0]==null){
          this.$message({
            type: 'info',
            message: '所选书目不足十本，请继续选择'
          })
          return false
        }
      }
      bookList.sort()
      classifyList.sort()
      for(var i=0;i<bookList.length-1;i++){
        // console.log(classifyList[i]+" : "+bookList[i])
        if(bookList[i]==bookList[i+1]){
          this.$message({
            type: 'info',
            message: '所选书目重复，请重新选择书目'
          })
          return false
        }
      }
      for(var i=0;i<classifyList.length-2;i++){
        if(classifyList[i]==classifyList[i+2]){
          this.$message({
            type: 'info',
            message: '每个大类最多选择两本书籍，请重新选择书目'
          })
          return false
        }
      }
      
      console.log(classifyList)
      console.log(bookList)
      return true
    },
    update() {
      this.valueList=[this.value1,this.value2,this.value3,this.value4,this.value5,
                    this.value6,this.value7,this.value8,this.value9,this.value10]
      var bookList=[]
      for(var i=0;i<this.valueList.length;i++){
        bookList[i]=this.valueList[i][1]
      }
      this.updateStuBookList(bookList).then(response => {
            this.$message({
              type: 'success',
              message: '已提交!'
            });
            this.$router.push("/profile/index")
      })
    },
    submit() {
      this.$confirm('请仔细阅读选书要求，是否确定提交选书情况?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if(this.dataCheck()){
          this.update()
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消提交'
        });          
      });
    },
    submitTest() {
      console.log(this.value1)
    }
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
.el-cascader {
  text-align: center;
  width: 600px;
}
.el-main {
  text-align: center;
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
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
</style>
