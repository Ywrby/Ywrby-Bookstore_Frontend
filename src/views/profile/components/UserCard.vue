<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>About me</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>Hello</div>
          {{ user.role }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ user.name }}</div>
        <div class="user-role text-center text-muted">{{ user.role | uppercaseFirst }}</div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>学生编号</span></div>
        <div class="user-bio-section-body">
          <div> {{ user.username }} </div>
        </div>
      </div>

      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="user" /><span>学生性别</span></div>
        <div class="user-bio-section-body">
          <div> {{ user.sex }} </div>
        </div>
      </div>
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="peoples" /><span>民族</span></div>
        <div class="user-bio-section-body">
          <div> {{ user.nation }} 族</div>
        </div>
      </div>
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="tree" /><span>所属学院</span></div>
        <div class="user-bio-section-body">
          <div> {{ college }} </div>
        </div>
      </div>
      <div class="user-education user-bio-section">
        <div class="user-bio-section-header"><svg-icon icon-class="star" /><span>专业班级</span></div>
        <div class="user-bio-section-body">
          <div> {{ majorName }} {{ clsNo }} 班</div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PanThumb from '@/components/PanThumb'

export default {
  name: 'UserCard',
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          avatar: '',
          role: '',
          schNum: '',
          sex: '',
          nation: ''
        }
      }
    }
  },
  computed: {
    ...mapState('major', ['title', 'majorName', 'college', 'clsNo'])
  },
  created() {
    this.getStuClsInfo()
  },
  methods: {
    ...mapActions('major', ['getStuClsInfo'])
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
