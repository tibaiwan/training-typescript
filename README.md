## training-typescript

安装、执行 TS 

```bash
npm install -g typescript
## 查看版本
tsc -v
# 监听文件
tsc ./src/XXX.ts --outDir ./dist --watch
# 监听文件夹
tsc ./src/*.ts --outDir ./dist --watch
```

> SEE ALSO


命令

- --outDir 重定向输出目录。
- --outFile 将输出文件合并为一个文件。

### SEE ALSO

- [官网](https://www.typescriptlang.org/)
- [中文官网](https://www.tslang.cn/index.html)
- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)
