## clownPocket

项目地址：http://114.132.167.29:5021/

技术栈：

- 前端：React18 + Zarm Design + Vite

- 后端：Egg.js + MySQL + PM2

项目实践：

✅ 封装弹窗、导航等通用业务组件 + JWT 前后端认证

✅ 接口、数据表设计 + 一套后端 CRUD

✅ 数据可视化 + 性能优化

✅ 集成前端工程化配置 + 移动端适配

✅ PM 部署上线

待完成

🔲 美化 UI 界面 + 数据可视化 2.0 + ChatGPT 集成

🔲 性能优化 2.0 + SDK 埋点监控

🔲 自制脚手架 + 自动化测试 + CI/CD 流水线

🔲 React18 + TypeScript + Nest.js 重构前后端

🔲 Electron + Android + iOS + Docker 打包部署

#### 项目运行

安装依赖

```bash
npm i
```

项目运行

```bash
npm run dev
```

项目打包

```bash
npm run build
```

单元测试

```bash
npm run test
```

###### H5 端打包成 Android 或 iOS App

初始化 Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
```

项目构建

```bash
npm run build
```

同步项目

```bash
npx cap sync
```

在相应 IDE 进行构建

```bash
npx cap open android
npx cap open ios
```
