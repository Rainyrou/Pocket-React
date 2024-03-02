## clownPocket

技术栈：

- 前端：React18 + Zarm Design + Vite

- 后端：Egg.js + MySQL

项目实践：

✅ 封装弹窗、导航等 8 个组件

✅ JWT 前后端认证 + 跨域代理

✅ 1 套后端 crud + 10+ 接口设计

✅ 可视化工具 Echart + DBevaer

✅ 按需引入 Zarm Design + 懒加载等性能优化

✅ 集成 Vite + Husky + ESLint + lint-staged 等前端工程化配置

✅ 移动端适配 + 从用户角度设计数据表

待完成

🔲 优化 UI 界面 + 可视化

🔲 React18 + TypeScript + Nest.js 重构前后端

🔲 接入 ChatGPT

🔲 SDK 埋点监控

🔲 PM + Docker 打包部署

🔲 Electron + Android + iOS 打包部署

🔲 自制脚手架 + 自动化测试 + CICD

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
