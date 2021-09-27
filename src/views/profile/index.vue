<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="选书情况" name="timeline">
                <timeline />
              </el-tab-pane>
              <el-tab-pane label="账户信息修改" name="account">
                <account :user="user" />
              </el-tab-pane>
              <el-tab-pane label="测试" name="testForProfile">
                <testForProfile/>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserCard from './components/UserCard'
import Timeline from './components/Timeline'
import Account from './components/Account'
import testForProfile from './components/testForProfile'

export default {
  name: 'Profile',
  components: { UserCard, Timeline, Account, testForProfile },
  data() {
    return {
      user: {},
      major: {},
      activeTab: 'timeline'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles',
      'username',
      'sex',
      'nation'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar: this.avatar,
        username: this.username,
        sex: this.sex,
        nation: this.nation
      }
    }
  }
}
</script>
