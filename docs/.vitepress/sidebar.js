const sidebar =  {
  // This sidebar gets displayed when user is
  // under `guide` directory.
  // 租用版说明文档左侧菜单
  '/guide/': [
    {
      text: '简介',
      collapsible: true,
      items:[
        { text: '软件介绍', link: '/guide/introduce' }         
      ]
    } ,
    {
      text: '快速上手',
      collapsible: true,
      items:[
        { text: '准备', link: '/guide/start' },
        { text: '注册服务端', link: '/guide/regserver' },
        { text: '软件登陆', link: '/guide/login' },
        { text: '添加会员信息', link: '/guide/addmember' },
        { text: '刷卡积分签到', link: '/guide/signin' },
        { text: '客户积分签到统计报表', link: '/guide/signlog' },
        { text: '短信群发', link: '/guide/smssend' }      
      ]
    },
    {
      text: '高级功能',
      collapsible: true,
      collapsed: true,
      items:[
        { text: '会员等级设置', link: '/guide/memberlevel' },
        { text: '兑换礼品设置', link: '/guide/giftset' },
        { text: '系统参数设置', link: '/guide/sysset' },
        { text: '小票打印格式设置', link: '/guide/printset' }
      ]
    }
  ]
}

module.exports = sidebar;
