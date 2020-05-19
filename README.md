## training-typescript

安装、执行 TS 

```bash
npm install -g typescript
# 监听文件
tsc ./src/XXX.ts --outDir ./dist --watch
# 监听文件夹
tsc ./src/*.ts --outDir ./dist --watch
```

命令

- --outDir 重定向输出目录。
- --outFile 将输出文件合并为一个文件。

### SEE ALSO

- [TypeScript](https://www.typescriptlang.org/docs/home.html)
