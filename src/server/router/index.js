const path = require('path')

const staticDir = path.join(__dirname, '../../static')
const buildDir = path.join(__dirname, '../../build')
const moduleDir = path.join(__dirname, '../../node_modules')

module.exports = (app) => {
  app.get('/', (req, res) => {
    const filePath = `${staticDir}/index.html`;
    res.sendFile(filePath);
  });

  // node_modules
  app.get('/node_modules/*', (req, res) => {
    const filePath = `${moduleDir}${req.url.split('/node_modules')[1]}`;
    res.sendFile(filePath);
  });

  // 打包文件
  app.get('/build/*', (req, res) => {
    const filePath = `${buildDir}${req.url.split('/build')[1]}`;
    res.sendFile(filePath);
  });

  // 静态文件
  app.get('/static/*', (req, res) => {
    const filePath = `${staticDir}${req.url.split('/static')[1]}`;
    console.log('filePath', filePath)
    res.sendFile(filePath);
  });
}