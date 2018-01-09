const fs = require('fs');

// 将每个控制器文件输出的对象中的“路径-处理函数”对注册到路由中
function addMapping(router, mapping) {
  Object.entries(mapping).forEach(([url, method]) => {
    if (url.startsWith('GET ')) {
      const path = url.substring(4);
      router.get(path, method);
      console.log(`register URL mapping: GET ${path}`);
    } else if (url.startsWith('POST ')) {
      const path = url.substring(5);
      router.post(path, method);
      console.log(`register URL mapping: POST ${path}`);
    } else if (url.startsWith('PUT ')) {
      const path = url.substring(4);
      router.put(path, method);
      console.log(`register URL mapping: PUT ${path}`);
    } else if (url.startsWith('DELETE ')) {
      const path = url.substring(7);
      router.del(path, method);
      console.log(`register URL mapping: DELETE ${path}`);
    } else {
      console.log(`invalid URL: ${url}`);
    }
  });
}

// 读取控制器目录下的各个文件
function addControllers(router, dir) {
  const files = fs.readdirSync(`${__dirname}/${dir}`);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  jsFiles.forEach((f) => {
    console.log(`process controller:${f}...`);
    const mapping = require(`${__dirname}/${dir}/${f}`);
    addMapping(router, mapping);
  });
}

// 传入路由处理器所在的文件夹
module.exports = function output(dir) {
  const controllersDir = dir || 'controllers';
  const router = require('koa-router')();
  addControllers(router, controllersDir);
  return router.routes();
};
