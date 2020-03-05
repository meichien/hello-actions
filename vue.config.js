let enableBaseUrl = 'true' === process.env.enableBaseUrl;
let baseUrl = '/';
if (enableBaseUrl) {
  baseUrl = process.env.baseUrl;
}

module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production' ? baseUrl : '/'
};