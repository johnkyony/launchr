module.exports = {
  //options
  publicPath: '/',
  pages: {
    //entry for the page
    entry: './src/index/main.js',
    //template
    template: './index.html',
    //output as dist/index.html
    filename: 'index.html',
    chunks: ['chunk-vendors' , 'chunk-common' , 'index']
  }
}