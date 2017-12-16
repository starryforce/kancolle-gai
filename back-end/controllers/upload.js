// const inspect = require('util').inspect
const path = require('path');
const os = require('os');
const fs = require('fs');
const Busboy = require('busboy');

/**
 * 同步创建文件目录
 * @param  {string} dirname 目录绝对地址
 * @return {boolean}        创建目录结果
 */
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  }
  if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
}

/**
 * 获取上传文件的后缀名
 * @param  {string} fileName 获取上传文件的后缀名
 * @return {string}          文件后缀名
 */
function getSuffixName(fileName) {
  const nameList = fileName.split('.');
  return nameList[nameList.length - 1];
}

/**
 * 上传文件
 * @param  {object} ctx     koa上下文
 * @param  {object} options 文件上传参数 fileType文件类型， path文件存放路径
 * @return {promise}
 */
function upload(ctx, options) {
  const {
    req,
    res,
  } = ctx;
  const busboy = new Busboy({
    headers: req.headers,
  });

  // 获取类型
  const fileType = options.fileType || 'common';
  const filePath = path.join(options.path, fileType);
  const mkdirResult = mkdirsSync(filePath);

  return new Promise((resolve, reject) => {
    console.log('文件上传中...');
    const result = {
      success: false,
      formData: {},
    };

    // 解析请求文件事件
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const fileName = `${Math.random().toString(16).substr(2)}.${getSuffixName(filename)}`;
      const _uploadFilePath = path.join(filePath, fileName);
      const saveTo = path.join(_uploadFilePath);
      result.fileName = fileName;

      // 文件保存到制定路径
      file.pipe(fs.createWriteStream(saveTo));

      // 文件写入事件结束
      file.on('end', () => {
        result.success = true;
        result.message = '文件上传成功';

        console.log('文件上传成功！');
        resolve(result);
      });
    });

    // 解析表单中其他字段信息
    // busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
    //   console.log('表单字段数据 [' + fieldname + ']: value: ' + inspect(val));
    //   result.formData[fieldname] = inspect(val);
    // });

    // 解析结束事件
    busboy.on('finish', () => {
      console.log('文件上传结束');
      resolve(result);
    });

    // 解析错误事件
    busboy.on('error', (err) => {
      console.log('文件上传出错');
      reject(result);
    });

    req.pipe(busboy);
  });
}
const serverFilePath = path.join(__dirname, 'upload-files');
// 上传文件请求处理
let result = {
  success: false,
};
const uploadPreview = async (ctx, next) => {
  // 上传文件事件
  result = await upload(ctx, {
    fileType: 'previews', // common or album
    path: serverFilePath,
  });
  result.path = 'previews';
  ctx.rest(result);
};
const uploadFile = async (ctx, next) => {
  // 上传文件事件
  result = await upload(ctx, {
    fileType: 'files', // common or album
    path: serverFilePath,
  });
  result.path = 'files';
  ctx.rest(result);
};


module.exports = {
  'POST /v1/previews': uploadPreview,
  'POST /v1/files': uploadFile,
};
