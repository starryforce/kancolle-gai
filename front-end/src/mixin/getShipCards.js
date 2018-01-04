export default {
  methods: {
    async getShipCards({
      type = 'detail',
      values = [],
      offset = 0,
      limit = 8,
      sortBy = 'downloadTimes',
      order = 'DESC',
    } = {}) {
      const response = await this.$http.get('/v1/ship_cards', {
        params: {
          type,
          values,
          offset,
          limit,
          sortBy,
          order,
        },
      });
      return response.data;
    },
  },
};
