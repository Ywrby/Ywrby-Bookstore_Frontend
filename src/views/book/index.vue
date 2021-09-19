<template>
  <div class="app-container">
    <el-container>
        <el-header>《平凡的世界》</el-header>
        <el-main>
            <el-table
            :data="tableData"
            stripe
            style="width: 100%">
                <el-table-column
                prop="clsNum"
                label="学号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="college"
                label="学院">
                </el-table-column>
                <el-table-column
                prop="major"
                label="专业">
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, {
          clsNum: '20160502',
          name: '王小虎',
          college: '计算机与信息技术学院，软件学院',
          major: '计算机科学与技术'
        }, 
        
        ]
      }
    }
  }
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>