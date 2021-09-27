<template>
  <el-container>
    <el-header>名著阅读-图书列表</el-header>
    <el-main>
      <el-table :data="list" stripe="true" border="true" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="书名" width="300">
        </el-table-column>
        <el-table-column prop="author" label="作者"> </el-table-column>
        <el-table-column prop="publishing_house" label="出版社">
        </el-table-column>
        <el-table-column prop="pages" label="页数" width="100">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="100">
        </el-table-column>
        <el-table-column prop="isbn" label="ISBN"> </el-table-column>
        <el-table-column  label="选阅人数" width="100"> 500</el-table-column>
        <el-table-column label="图书详细信息">
          <el-button type="primary" round >点击查看</el-button> 
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="sizes, prev, pager, next"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :page-sizes="[15, 20, 30]"
        :page-size="pageSize"
        :total="total"
        :current-page="currentPage"
      >
      </el-pagination>
    </el-main>
    <el-footer> </el-footer>
  </el-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      list: null,
      total: 0,
      currentPage: 1,
      pageSize: 15,
      pages: null,
      listLoading: true,
    };
  },
  computed: {
    ...mapState("books", ["title"]),
  },
  created() {
    this.getAllBookList(this.currentPage, this.pageSize);
  },
  methods: {
    ...mapActions("books", ["getBookList"]),
    getAllBookList(page, pageSize) {
      console.log("test: " + page + " : " + pageSize);
      this.listLoading = true;
      this.getBookList({ page, pageSize }).then((response) => {
        // console.log(response)
        this.list = response.list;
        this.total = response.total;
        this.currentPage = response.pageNum;
        this.pageSize = response.pageSize;
        this.listLoading = false;
      });
    },
    handleCurrentChange(current) {
      this.data = [];
      this.currentPage = current;
      this.getAllBookList(this.currentPage, this.pageSize);
    },
    handleSizeChange(size) {
      this.data = [];
      this.pageSize = size;
      this.getAllBookList(this.currentPage, this.pageSize);
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

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>