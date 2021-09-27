<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of list" :key="index" :timestamp="item.publish_date" placement="top">
        <el-card>
          <h4>{{ item.name }}</h4>
          <p>{{ item.brief_introduction }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  computed: {
    ...mapState('books', ['title'])
  },
  created() {
    this.getBookList()
  },
  methods: {
    ...mapActions('books', ['getStuBookList']),
    getBookList() {
      this.listLoading = true
      this.getStuBookList().then(response => {
        // console.log(response)
        this.list = response
        this.listLoading = false
      })
    }
  }
}
</script>
