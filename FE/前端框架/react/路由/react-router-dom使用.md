# react-router-dom 使用

## 技巧

### 基本使用

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  // 它可以重定向路由  
  redirect,
  From,
  // 传入提交的表单
  useSubmit
} from "react-router-dom";

function Root() {
    return <div>Hello world!
        {/* 子路由组件显示 */}
         <Outlet />
    </div>
}

function NewPage() {
    return <div>new Page!</div>;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: (<div>
        {/* 它可以拦截form标签的请求 从 action触发  */}
       <Form method="post">
            <button type="submit">New</button>
        </Form>
    </div>),
    errorElement: <ErrorPage />, // 定义错误的页面
    loader: ()=> {
        // loader 应该 就是将所有需要的数据拿到 把要渲染的数据返回就好了
        // 返回的值可以通过 useLoaderData 拿到
        return {
            name: "root"
        }
    },
    action({ request, params }) {
         // 配合<Form> 拦截表单请求

        // 拿到表单的数据 request 是原生的
        // const formData = await request.formData();
        // const firstName = formData.get("first");
        // const lastName = formData.get("last");
        
        // params 就是路由参数
    },
    children: [
        {
            index: true,
            element: <div>子路由默认内容</div>
        },
        {
            path: "new:id",
            element: <NewPage />
        }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```




