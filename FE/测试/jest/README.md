# jest 使用

## 问题

1. 基于esm 模块 的jest 导致的一系列问题

* 不支持esm 运行jest 需要`cross-env NODE_OPTIONS=\"--experimental-vm-modules\" jest`

* ts esm 运行 需要按照和使用对应的依赖

  关键是 需要按照 ts-jest-resolver 将 cjs模块 转换为esm模块

  ```sh
  npm i ts-jest jest ts-jest-resolver ts-node typescript -D
  ```

  jest.config.ts

  ```ts
  export default {
    preset: "ts-jest/presets/js-with-ts-esm",
    resolver: "ts-jest-resolver",
  }
  ```

  * esm 模块 `jest.mock` 不生效(esm 模块 导出后是只读属性, 并且mock好像不能模拟为esm模块) 需要改为`jest.unstable_mockModule`。

    我们引入需要测试的代码模块也必须通过`await import(...)`，例如需要以下方式才能生效:

    ```ts
    // moduleName mock
    jest.unstable_mockModule("moduleName", async () => ({
        test() {
            return "mockModule"
        }
    })

    // testModule.ts
    export function test() { return "testModule" }
    
    // testModule.test.ts
    test("test testModule test function", async ()=> {
        const { test } await import("./testModule")
        expect(test()).toBe("mockModule")
    })
    ```

2. 如何模拟方法是否执行过 例如 `process.exit` node 退出

```ts
 // processExit.ts
 export const exit = ()=> process.exit(0)

 // processExit.test.ts
 import { exit } from "./processExit"
 const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => { throw new Error('process.exit: ' + number); });
  test("process.exit", ()=> {
    exit()
    expect(mockExit).toHaveBeenCalledWith(-1)
    mockExit.mockRestore();
  })

```

## 资料

[jest中文官网]<https://www.jestjs.cn/docs/getting-started>

[jest实践指南]<https://github.yanhaixiang.com/jest-tutorial/#%E6%B5%8B%E8%AF%95%E9%9A%BE%E7%82%B9>