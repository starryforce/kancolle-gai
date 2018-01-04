<template>
  <el-container>
    <el-header>魔改管理</el-header>
    <el-main>
      <el-form
        ref="card"
        :model="card"
        label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="card.name" />
        </el-form-item>
        <el-form-item label="预览图">
          <el-upload
            class="avatar-uploader"
            action="/v1/previews"
            :show-file-list="false"
            :on-success="uploadPreviewSuccess"
            :before-upload="beforeAvatarUpload">
            <img
              v-if="imageUrl"
              :src="imageUrl"
              class="avatar">
            <i
              v-else
              class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="类型">
          <el-cascader
            expand-trigger="hover"
            :options="shipTypes"
            v-model="card.type"
            @change="getShipsByType(card.type[1])" />
        </el-form-item>
        <el-form-item label="舰名">
          <el-select
            v-model="card.shipName"
            clearable
            placeholder="请选择">
            <el-option
              v-for="item in shipsOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="附件上传">
          <el-upload
            class="upload-demo"
            drag
            action="/v1/files"
            :on-success="uploadFileSuccess"
            :multiple="false">
            <i class="el-icon-upload" />
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div
              class="el-upload__tip"
              slot="tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="画师名">
          <el-input v-model="card.creator" />
        </el-form-item>
        <el-form-item label="上传者">
          <el-input v-model="card.uploader" />
        </el-form-item>
        <el-form-item label="素材图源">
          <el-input v-model="card.sourceUrl" />
        </el-form-item>
        <el-form-item label="Pixiv ID">
          <el-input v-model="card.pixivId" />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'MainConsoleCard',
  components: {
  },
  data() {
    return {
      card: {
        preview: '',
        name: '',
        type: [],
        shipName: '',
        fileName: '',
        creator: '',
        sourceUrl: '',
        uploader: '',
        pixivId: '',
      },
      shipTypeList: [],
      ships: [],
      imageUrl: '',
    };
  },
  computed: {
    shipTypes() {
      const options = [];
      const arr = [];
      this.shipTypeList.forEach((item) => {
        arr.push(item.ship_type);
      });
      const unique = [...new Set(arr)];
      unique.forEach((item) => {
        options.push({
          value: item,
          label: item,
          children: [],
        });
      });
      this.shipTypeList.forEach((item) => {
        for (let i = 0; i < options.length; i += 1) {
          if (item.ship_type === options[i].value) {
            options[i].children.push({
              value: item.id,
              label: item.ship_subtype,
            });
          }
        }
      });
      return options;
    },
    shipsOptions() {
      const shipsOptions = [];
      this.ships.forEach((item) => {
        shipsOptions.push({
          value: item.id,
          label: item.name,
        });
      });
      return shipsOptions;
    },
  },
  mounted() {
    this.initTypeDatas();
  },
  methods: {
    async submit() {
      await this.$http.post('/v1/ship_cards', {
        preview: this.card.preview,
        name: this.card.name,
        ship_id: this.card.shipName,
        file_name: this.card.fileName,
        creator: this.card.creator,
        source_url: this.card.sourceUrl,
        uploader: this.card.uploader,
        pixiv_id: this.card.pixivId,
      });
    },
    async getShipsByType(type) {
      const result = await this.$http.get(`/v1/ships?type=${type}`);
      this.ships = result.data;
    },
    async initTypeDatas() {
      const result = await this.$http.get('/v1/ship_types');
      this.shipTypeList = result.data;
    },
    uploadPreviewSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.card.preview = res.path;
    },
    uploadFileSuccess(res) {
      this.card.fileName = res.fileName;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-form {
  width: 500px;
}
</style>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  max-width: 512px;
  display: block;
}
</style>
