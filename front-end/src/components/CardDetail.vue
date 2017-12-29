<template>
  <el-container class="m-card_detail">
    <el-main class="main">
      <section class="detail">
        <h1>
          {{cardDetails.name}}
        </h1>
        <section class="avg_rate">
          <p><span><strong>评分 </strong>{{avgRate}}</span></p>
          <el-rate v-model="avgRate" disabled :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </el-rate>
        </section>
        <table>
          <tr>
            <td>舰名</td>
            <td>{{cardDetails.shipName}}</td>
          </tr>
          <tr>
            <td>舰种</td>
            <td>{{cardDetails.shipType}}{{cardDetails.shipSubtype}}</td>
          </tr>
          <tr>
            <td>素材来源</td>
            <td>{{cardDetails.source_url}}</td>
          </tr>
          <tr>
            <td>画师</td>
            <td>{{cardDetails.creator}}</td>
          </tr>
          <tr>
            <td>Pixiv ID</td>
            <td>{{cardDetails.pixiv_id}}</td>
          </tr>
          <tr>
            <td>上传者</td>
            <td>{{cardDetails.uploader}}</td>
          </tr>
          <tr>
            <td>上传时间</td>
            <td>{{cardDetails.created_at}}</td>
          </tr>
          <tr>
            <td>评价</td>
            <td>
              <el-rate v-model="privateRate" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
              </el-rate>
            </td>
          </tr>
        </table>
      </section>
      <section class="preview">
        <img :src="cardDetails.preview" alt="cardDetails.name">
        <p><strong>下载次数</strong> {{cardDetails.download_times}}</p>
        <p>
          <a :href="downloadUrl"  target="_blank"><button class="download">下载</button></a>
          <button class="favorite">收藏</button>
        </p>
      </section>
      <section class="comment">
      </section>
    </el-main>
    <el-aside class="aside">
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: 'CardDetail',
  components: {
  },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      cardDetails: {},
      avgRate: 4.5,
      privateRate: 5,
      downloadUrl: '',
    };
  },
  computed: {
  },
  mounted() {
    this.getCardDetails();
  },
  methods: {
    async getCardDetails() {
      const response = await this.$http.get(`/v1/ship_cards/${this.id}`);
      this.cardDetails = response.data;
      this.downloadUrl = `/v1/files/${this.cardDetails.file_name}`;
    },
  },
};
</script>


<style lang="scss" scoped>
.m-card_detail {
  .main,
  .aside {
    position: relative;
    background-color: #efe6da;
    border-radius: 12px;
    border: solid 1px #7b672f;
    box-shadow: 0 0 5px #7b672f;
    &::before {
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      content: "";
      z-index: -1;
      border-radius: 11px;
      border: solid 1px #ead79a;
    }
    &::after {
      position: absolute;
      top: 1px;
      left: 1px;
      bottom: 1px;
      right: 1px;
      content: "";
      z-index: -1;
      border-radius: 10px;
      border: solid 1px #ece6c1;
    }
  }
  .main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 30px;
  }
  .detail {
    position: relative;
    flex-grow: 1;
    h1 {
      font-size: 2rem;
      margin-bottom: 30px;
    }
    .avg_rate {
      position: absolute;
      right: 30px;
      top: 0px;
      font-size: 1.5rem;
      strong {
        color: #1dbdc0;
      }
    }
    table {
      border-collapse: separate;
      border-spacing: 0 0.5rem;
    }
    td {
      padding: 5px;
      text-align: right;
    }
    td:first-child {
      padding-right: 0.5rem;
      color: #816f3b;
      background-color: #e7e0db;
      box-shadow: 0 1px 4px 2px #e1d6c7 inset;
    }
    td:last-child {
      padding-left: 0.5rem;
      width: 300px;
      background-color: #e5d4c5;
      box-shadow: 0 1px 4px 2px #cfc3b2 inset;
    }
  }
  .preview {
    font-size: 0.8rem;
    img {
      height: 300px;
      width: 218px;
    }
    strong {
      color: #79a79e;
    }
    .download,
    .favorite {
      color: #fff;
      height: 50px;
      width: 105px;
      &:focus {
        outline: none;
      }
      border-radius: 20px;
      font-size: 1.5rem;
    }
    .download {
      background-color: #3eaeb2;
      text-shadow: 0 0 2px #405d53, 0 0 2px #405d53, 0 0 2px #405d53,
        0 0 2px #405d53, 0 0 2px #405d53, 0 0 2px #405d53, 0 0 2px #405d53;
    }
    .favorite {
      margin-left: 8px;
      border-style: solid;
      background-color: #565656;
      text-shadow: 0 0 2px #0c354e, 0 0 2px #0c354e, 0 0 2px #0c354e,
        0 0 2px #0c354e, 0 0 2px #0c354e, 0 0 2px #0c354e, 0 0 2px #0c354e;
    }
  }
  .aside {
    margin-left: 20px;
  }
}
</style>
