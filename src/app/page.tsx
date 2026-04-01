'use client';

import Image from 'next/image';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
              <span className="text-background font-bold text-sm">椰</span>
            </div>
            <span className="font-medium text-foreground">清蒸椰子鸡</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              关于我
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              履历
            </button>
            <button onClick={() => scrollToSection('education')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              教育
            </button>
            <a href="mailto:will.wen1996@gmail.com" className="text-sm text-background bg-foreground px-4 py-2 rounded-sm hover:bg-foreground/90 transition-colors">
              联系我
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative pt-20">
        <div className="absolute left-0 top-1/3 -translate-y-1/2 writing-mode-vertical text-muted-foreground text-sm tracking-widest transform -rotate-180" style={{ writingMode: 'vertical-rl' }}>
          CREATIVE DESIGNER · 2024
        </div>
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground tracking-widest uppercase">欢迎来到我的世界</p>
                <h1 className="text-6xl lg:text-8xl font-bold text-foreground tracking-tight">
                  Hello,
                </h1>
                <h2 className="text-4xl lg:text-6xl font-bold text-foreground/80 tracking-tight">
                  我是清蒸椰子鸡 Will.Wen
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                一位热爱研究与分享的数字世界分析师。专注于企业战略与数字化场景落地，
                致力于打造丰富而有深度的数字品牌。
              </p>

              {/* Stats */}
              <div className="flex gap-12 pt-4">
                <div>
                  <p className="text-5xl font-light text-foreground">5+</p>
                  <p className="text-sm text-muted-foreground mt-1">年咨询与产品经验</p>
                </div>
                <div>
                  <p className="text-5xl font-light text-foreground">20+</p>
                  <p className="text-sm text-muted-foreground mt-1">完成项目</p>
                </div>
                <div>
                  <p className="text-5xl font-light text-foreground">10+</p>
                  <p className="text-sm text-muted-foreground mt-1">合作客户</p>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('about')} 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="text-sm">向下滚动了解更多</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden bg-muted rounded-sm">
                <Image
                  src="https://coze-coding-project.tos.coze.site/coze_storage_7623680022263496719/image/will_image_personal.jpg?sign=4897094954-81415f2316-0-ca09db860fcf8a278108b9950469d5b89c0c4ff9c6b6732742686b92edb7d9f7"
                  alt="清蒸椰子鸡"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-border rounded-sm -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">关于我</p>
              <h3 className="text-4xl font-bold text-foreground">个人简介</h3>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                一名对世界具有好奇心的央企数字化先锋，持续热爱任何有趣的人和事，具有超过5年的数字化战略咨询、to B软件产品实施经验。
                我相信科技能推动实现社会主义现代化理想，并有助于在将来实现共产。
                我致力于将复杂的社会现象和企业问题转化为精确、有效、前瞻性的解决方案。
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                在我的职业生涯中，我有幸与众多优秀的前辈和同事合作，参与了从战略规划到经营绩效提升的各类项目。
                我专注于数字化战略规划、项目管理和业务产品设计，帮助客户实现他们的业务目标。
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 pt-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">专业技能</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      数字化战略咨询与规划
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      产品界面及交互原型设计
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      企业级信息系统架构与集成架构
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      政府政策研究及行业前沿动态跟踪
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">兴趣爱好</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      摄影与视觉艺术
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      极简主义设计
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      Soccer⚽足球爱好者 司职中卫、中锋
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                      AIGC创意制作
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">职业历程</p>
            <h3 className="text-4xl font-bold text-foreground">个人履历</h3>
          </div>

          <div className="space-y-12">
            {/* Timeline Item */}
            <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
              <div className="lg:col-span-3">
                <p className="text-sm text-muted-foreground">2023 - 至今</p>
              </div>
              <div className="lg:col-span-9">
                <h4 className="text-xl font-semibold text-foreground mb-2">高级咨询经理</h4>
                <p className="text-muted-foreground mb-4">某央企数科公司</p>
                <p className="text-muted-foreground leading-relaxed">
                  负责公司对外咨询业务线，主导推动咨询服务的交付和辅导。
                  与商务和研发团队紧密合作，推动项目从咨询到解决方案到软件实施的全过程。
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
              <div className="lg:col-span-3">
                <p className="text-sm text-muted-foreground">2019 - 2022</p>
              </div>
              <div className="lg:col-span-9">
                <h4 className="text-xl font-semibold text-foreground mb-2">产品经理</h4>
                <p className="text-muted-foreground mb-4">某央企采购产品团队</p>
                <p className="text-muted-foreground leading-relaxed">
                  负责产品品类管理、用户交互设计、采供方准入、供方审计风控、采购授信等功能模块设计，参与了多个大型To B软件实施项目交付。
                  规划了产品授信、品类、风控等基础功能模块及数据标准，建立了完整的UE交互体系规范，提升了产品的市场竞争力。
                </p>
              </div>
            </div>      
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">学习之路</p>
            <h3 className="text-4xl font-bold text-foreground">教育背景</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-sm border border-border">
              <p className="text-sm text-muted-foreground mb-4">2017 - 2019</p>
              <h4 className="text-xl font-semibold text-foreground mb-2">金融学 研究生</h4>
              <p className="text-muted-foreground mb-4">佛罗里达州立大学</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                系统学习金融学理论知识，探索金融与科技相结合实践。
                在校期间负责学生基金运作管理，参与多个基金投资模拟比赛，获得多项冠军。
              </p>
            </div>

            <div className="bg-background p-8 rounded-sm border border-border">
              <p className="text-sm text-muted-foreground mb-4">2014 - 2018</p>
              <h4 className="text-xl font-semibold text-foreground mb-2">信息管理与信息系统 本科</h4>
              <p className="text-muted-foreground mb-4">华中科技大学</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                深入学习信息系统架构、编程及数据结构，理解软件制作、硬件维护、企业管理信息系统相关知识。
                在校期间获得多项表彰，获优秀应届毕业生，绩点3.85，担任管理学院学生会主席。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl lg:text-6xl font-bold text-foreground mb-8">
            让我们一起创造
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            如果你有任何项目合作或数字化咨询的需求，或者您对未来我国产业发展有独特的看法，欢迎随时联系我。
            我期待与你一起探讨未来业务的可能性。
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="mailto:will.wen1996@gmail.com" 
              className="flex items-center gap-2 text-background bg-foreground px-6 py-3 rounded-sm hover:bg-foreground/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>发送邮件</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 mt-12">
            <a href="https://github.com/willwen1996-cloud" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/willwen1996" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 清蒸椰子鸡. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              用心体验，创造未来
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
