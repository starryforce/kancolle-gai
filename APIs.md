# GET /v1/ship_cards

## 设计接口分为三个部分
1. 前端函数调用
既要在参数不足情况下定义默认行为
也要在传递参数时具备相应的能力

2. 前端函数定义
调用传递的参数肯定是不可以丢失的

3. 后端接口定义

## 用途：获取多个 card 结果，主要关注 card 的 ID 及 preview 链接。其他信息较为次要

## 参数列表：

一级参数（决定查询方式，count/findAll）
type:['quantity','detail']
value:[id]  // 需求值
offset:     // 偏移
limit:      // 限定查询数量
sortBy:['uploadTime','rate','downloadTimes']    // 默认按下载次数排序
order:['DESC','ASE']    // 升降序


