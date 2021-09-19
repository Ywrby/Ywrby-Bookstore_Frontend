<template>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
    <el-form-item label="名称 (Name)">
      <el-input v-model="user.name"></el-input>
    </el-form-item>
    <el-form-item label="原密码 (Old Password)">
      <el-input v-model="oldPassword" show-password></el-input>
    </el-form-item>
    <el-form-item label="新密码 (New Password)">
      <el-input v-model="newPassword" show-password></el-input>
    </el-form-item>
    <el-form-item label="再次确认新密码 (Confirm Password)">
      <el-input v-model="confirmNewPassword" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">确认更新 (Update)</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: ''
        }
      }
    }
  },
  data() {
    return {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      labelPosition: 'top'
    }
  },
  computed: {
    ...mapState('user', ['name'])
  },
  methods: {
    ...mapActions('user', ['updateStuInfo']),
    submit() {
      if (this.user.name === '') {
        this.$message.error('fail: 用户姓名不可为空!')
      } else if (this.oldPassword === '' || this.newPassword === '' || this.confirmNewPassword === '') {
        this.$message.error('fail: 密码不可为空!')
      } else if (this.confirmNewPassword !== this.newPassword) {
        this.$message.error('fail: 两次密码输入不一致!')
      } else if (this.oldPassword === this.newPassword) {
        this.$message.error('fail: 修改前后密码不可相同!')
      } else {
        this.updateStuInfo({ name: this.user.name, oldPassword: this.oldPassword, newPassword: this.newPassword }).then(response => {
        })
      }
    }
  }
}
</script>
