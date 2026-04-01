/**
 * 个人网站配置文件
 * 所有可修改的内容都在这里集中管理
 */

export const siteConfig = {
  // ==================== 基础信息 ====================
  name: "清蒸椰子鸡",
  title: "清蒸椰子鸡 - 个人网站",
  description: "一位热爱创造与设计的数字产品设计师",
  
  // ==================== 导航栏 ====================
  logo: {
    icon: "椰",  // Logo 图标文字
    text: "清蒸椰子鸡"  // Logo 旁边的名字
  },
  
  // ==================== 首屏 Hero ====================
  hero: {
    sideText: "CREATIVE DESIGNER · 2024",  // 左侧竖排文字
    welcomeText: "欢迎来到我的世界",  // 小标题
    mainTitle: "Hello,",  // 大标题
    name: "我是清蒸椰子鸡",  // 名字
    introduction: "一位热爱创造与设计的数字产品设计师。专注于用户体验与界面设计，致力于打造简洁而富有意义的数字体验。",
    
    // 数据统计
    stats: [
      { number: "+5", label: "年设计经验" },
      { number: "+50", label: "完成项目" },
      { number: "+20", label: "合作客户" }
    ],
    
    // 个人照片（可以是 URL 或本地路径 /xxx.jpg）
    profileImage: "https://coze-coding-project.tos.coze.site/coze_storage_7623680022263496719/image/generate_image_d535a985-3b6d-40bb-8a7c-104bef74d5b6.jpeg?sign=1806563041-a96689a810-0-06fb21ccebdcd055a7c7820ee6cd28dc42e6f043e66eaa3ea6440e77f609b8ba"
  },
  
  // ==================== 关于我 ====================
  about: {
    title: "个人简介",
    paragraphs: [
      "我是一名充满热情的数字产品设计师，拥有超过5年的设计经验。我相信好的设计应该是简洁、直观且富有意义的。每一个项目都是一次探索的机会，我致力于将复杂的问题转化为优雅的解决方案。",
      "在我的职业生涯中，我有幸与众多优秀的团队合作，参与了从品牌设计到产品设计的各类项目。我专注于用户体验设计、界面设计以及品牌视觉系统构建，帮助客户实现他们的业务目标。"
    ],
    
    // 专业技能
    skills: {
      title: "专业技能",
      items: [
        "UI/UX 设计",
        "品牌视觉设计",
        "交互原型设计",
        "设计系统构建"
      ]
    },
    
    // 兴趣爱好
    hobbies: {
      title: "兴趣爱好",
      items: [
        "摄影与视觉艺术",
        "极简主义设计",
        "用户体验研究",
        "创意编程"
      ]
    }
  },
  
  // ==================== 个人履历 ====================
  experience: {
    title: "个人履历",
    subtitle: "职业历程",
    items: [
      {
        time: "2022 - 至今",
        position: "高级产品设计师",
        company: "某科技公司",
        description: "负责公司核心产品的用户体验设计，主导设计系统的构建与维护。与产品和开发团队紧密合作，推动产品从概念到上线的完整设计流程。"
      },
      {
        time: "2019 - 2022",
        position: "UI/UX 设计师",
        company: "某设计工作室",
        description: "参与多个品牌设计项目，从品牌视觉到数字产品的全链路设计。建立了完整的品牌设计规范，提升了团队的设计效率。"
      },
      {
        time: "2017 - 2019",
        position: "初级设计师",
        company: "某互联网公司",
        description: "负责移动端应用的界面设计，学习并实践以用户为中心的设计方法。参与用户研究，理解用户需求，将洞察转化为设计方案。"
      }
    ]
  },
  
  // ==================== 教育背景 ====================
  education: {
    title: "教育背景",
    subtitle: "学习之路",
    items: [
      {
        time: "2013 - 2017",
        degree: "视觉传达设计 · 本科",
        school: "某知名美术学院",
        description: "系统学习视觉传达设计理论与方法，培养设计思维和审美能力。在校期间参与多个设计竞赛，获得多项设计奖项。"
      },
      {
        time: "2019",
        degree: "交互设计课程",
        school: "在线学习平台",
        description: "深入学习交互设计原理和方法，掌握用户研究、原型设计等核心技能。完成多个实战项目，获得课程认证证书。"
      },
      {
        time: "2020",
        degree: "设计系统工作坊",
        school: "某设计学院",
        description: "学习设计系统的构建方法和最佳实践，理解组件化设计思维。实践设计系统的搭建流程，提升设计效率和一致性。"
      },
      {
        time: "持续学习",
        degree: "在线课程与研讨会",
        school: "各大设计平台",
        description: "保持对设计趋势的关注，定期参加行业研讨会和在线课程。不断拓展设计边界，学习新技术和新方法。"
      }
    ]
  },
  
  // ==================== 联系方式 ====================
  contact: {
    title: "让我们一起创造",
    description: "如果你有任何项目合作或设计咨询的需求，欢迎随时联系我。我期待与你一起探讨设计的可能性。",
    email: "will.wen1996@gmail.com",  // 你的邮箱
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername"
    }
  },
  
  // ==================== 页脚 ====================
  footer: {
    copyright: "© 2024 清蒸椰子鸡. All rights reserved.",
    motto: "用心设计，用爱创造"
  }
};

export type SiteConfig = typeof siteConfig;
