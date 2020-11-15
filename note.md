首先就是需要下载的包和插件

1.请求 axios
2.redux
3.react-redux
4.redux-saga
5.浏览器调试工具   redux-devtools-extension



然后就是使用的架构

src下的
1.index
和正常的index一样  从redux中拿到Provider  然后包裹项目
然后从redux中拿到store  穿进去  别的没啥了

2.redux
里面定义总store  定义总的reducer  一样合并reducer
创建store和正常一样

**只是使用的中间件是sage
**在创建完了store之后  在调用redux-saga中的一个函数运行一下  总的saga  其实就是启动saga进程

3.Home  组件
里面一样有一个redux的文件夹  定义action   定义小reducer  定义constant
然后里面的组件一样去使用connect包裹  然后封装action  然后从总的state上拿到值


3.saga
里面定义各种组件需要的saga    可以模块化分出去最后汇总成总saga  暴露出去

小saga文件
一个异步操作需要两个生成器配合
其中一个负责监视异步action然后指定运行哪个生成器   然后这个生成器里面发异步请求  拿到结果  调用api put  就是dispatch  就可以了



4.saga基本模式

关键节点其实就是异步任务结果回来的时候  怎么拿到dispatch

其实就是原来使用thunk时候  异步的请求是在  异步action中操作的  这里面可以拿到dispatch

而saga  就是在saga文件中 去监视异步操作的action  然后处理异步请求 拿到结果  在有saga中的api  dispatch 提交 

其实原理不太一样  但是效果就是那么回事


5.具体的api操作  就看案例里面  那个user  和num 和index 还有store   那几个文件 怎么操作的