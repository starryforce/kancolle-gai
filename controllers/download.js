const path = require('path');
const fs = require('fs');

const downloadFile = async (ctx, next) => {
  // 实现文件下载
  const {
    fileName,
  } = ctx.params;
  const filePath = path.join(__dirname, '../static/ship_cards/files', fileName);
  const stats = fs.statSync(filePath);
  if (stats.isFile()) {
    ctx.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename=${fileName}`,
      'Content-Length': stats.size,
    });
    ctx.response.body = fs.createReadStream(filePath);
    await next();
  } else {
    ctx.response.status = 400;
    await next();
  }
};

module.exports = {
  'GET /v1/files/:fileName': downloadFile,
};
