##### 3 月 25

##### 上周工作

- 专家提交报告时提交的随访备注
- 是否需要随访可以被撤销，不与已读未读关联
- 阅片工作站菜单栏优化 issue 总结
- Boss 首页增加日订单量的统计
- 随访记录附件优化

##### 本周计划

- 阅片专家工作站 DashBoard 优化
- 阅片工作站菜单栏优化

##### 本周计划

- 阅片专家工作站 DashBoard 优化
- 阅片工作站菜单栏优化
  这个需求率先完成，然后再完成 DashBoard 的优化
- 随访记录列表优化
  按照朱丰富的要求参照着 treatPlan 的实现方式，进行实现
- 随访记录添加附件添加功能
  前端技术设计
  通过 Modal 展示附件，但是不采用附件 form 表单，附件的展示，采取自定义的格式，详细可以参考/cases/:id/attachments 的展示
  后端附件接口
  新增随访列表附件 post 方法 /cases/:case-id/follow-up/:follow-up-id/attachments
  获取随访列表附件 get 方法 /cases/:case-id/follow-up/:follow-up-id/attachments
  删除随访列表附件 delete 方法 /cases/:case-id/follow-up/:follow-up-id/attachments
  修改随访列表附件 put 方法 /cases/:case-id/follow-up/:follow-up-id/attachments

- 查找公务员考试,撰写相关文档

##### 本周计划
