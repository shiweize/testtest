
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  proxy: {
    "/ebank": {
      "target": "http://10.4.3.15:8081",
      "changeOrigin": true,
      "pathRewrite": { "^/ebank" : "/ebank" }
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'Myapp',
      dll: false,
      routes: {
        exclude: [
        
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
        
          /components\//,
        ],
      },
    }],
  ],
}
