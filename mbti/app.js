/* 16类股权架构师 · 测试逻辑（zxf-site/mbti/app.js）
   纯前端：20 题 -> 计分 -> 4 字母类型码 -> 渲染结果。无后端。 */
(function () {
  var QUESTIONS = [{"dim": "C/D", "q": "接手一家公司的股权咨询，你第一反应通常是？", "o": [{"t": "先拉出集团股权全景图，看清控制链与持股层级", "s": "C"}, {"t": "先翻具体合同与工商底档，从一笔交易查起", "s": "D"}]}, {"dim": "C/D", "q": "客户说\"我想做个股权架构调整\"，你先谈？", "o": [{"t": "先谈顶层架构目标，再拆步骤", "s": "C"}, {"t": "先盘点现有协议与工商现状，再谈目标", "s": "D"}]}, {"dim": "C/D", "q": "项目信息很乱，你习惯？", "o": [{"t": "先搭框架，再往里填内容", "s": "C"}, {"t": "先把每一份文件啃透，再连起来看", "s": "D"}]}, {"dim": "C/D", "q": "评审一份方案，你最看重？", "o": [{"t": "整体结构是否自洽、控制链是否清晰", "s": "C"}, {"t": "单点条款是否站得住、能不能落地", "s": "D"}]}, {"dim": "C/D", "q": "向客户汇报，你先讲？", "o": [{"t": "全局架构图与控制逻辑", "s": "C"}, {"t": "具体动作清单与时间节点", "s": "D"}]}, {"dim": "A/B", "q": "有个能大幅节税的架构但边界略模糊，你？", "o": [{"t": "在合规框架内大胆用，控制好披露节奏", "s": "A"}, {"t": "宁可少省，也要确定性", "s": "B"}]}, {"dim": "A/B", "q": "红筹 / VIE 这类高阶架构，你的态度？", "o": [{"t": "该上就上，勇于提前设计", "s": "A"}, {"t": "非必要不碰，优先境内确定性", "s": "B"}]}, {"dim": "A/B", "q": "客户想做激进的员工激励，你？", "o": [{"t": "设计有张力的方案，把人绑紧", "s": "A"}, {"t": "先守住合规与现金流，稳着来", "s": "B"}]}, {"dim": "A/B", "q": "面对监管新规，你？", "o": [{"t": "先找新规里的筹划空间", "s": "A"}, {"t": "先把红线一条条标清楚", "s": "B"}]}, {"dim": "A/B", "q": "一个架构两种走法，你选？", "o": [{"t": "收益更高、稍冒险的那条", "s": "A"}, {"t": "更稳、收益低一点的那条", "s": "B"}]}, {"dim": "K/T", "q": "你更享受的工作环节是？", "o": [{"t": "画出架构图、写出制度文本与测算模型", "s": "K"}, {"t": "陪客户跑完工商、谈判与交割", "s": "T"}]}, {"dim": "K/T", "q": "方案交付后，你倾向于？", "o": [{"t": "把蓝图和测算讲清楚就交付", "s": "K"}, {"t": "一直陪跑到真正落地", "s": "T"}]}, {"dim": "K/T", "q": "你更被同行评价为？", "o": [{"t": "\"方案写得好、想得深\"", "s": "K"}, {"t": "\"落地靠谱、能办成事\"", "s": "T"}]}, {"dim": "K/T", "q": "客户说\"你帮我把这事办了\"，你？", "o": [{"t": "出一份标准方案包，交给执行", "s": "K"}, {"t": "亲自下场推进每一环", "s": "T"}]}, {"dim": "K/T", "q": "你的强项更偏？", "o": [{"t": "建模测算与文本起草", "s": "K"}, {"t": "现场协调与执行推动", "s": "T"}]}, {"dim": "L/S", "q": "创始人和投资人利益冲突，你本能站？", "o": [{"t": "创始团队与控制权一方", "s": "L"}, {"t": "平衡多方，找公约数", "s": "S"}]}, {"dim": "L/S", "q": "设计股权激励，你优先？", "o": [{"t": "绑定核心创始与操盘手", "s": "L"}, {"t": "兼顾员工广度与投资人接受度", "s": "S"}]}, {"dim": "L/S", "q": "一轮融资条款，你重点守？", "o": [{"t": "创始人的控制权与反稀释", "s": "L"}, {"t": "投资人保护条款的公平性", "s": "S"}]}, {"dim": "L/S", "q": "一个架构要取舍，你更在意？", "o": [{"t": "创始人能不能说了算", "s": "L"}, {"t": "各方利益是否平衡可持续", "s": "S"}]}, {"dim": "L/S", "q": "你觉得自己更像客户的？", "o": [{"t": "\"军师\"，站在创始一方出谋划策", "s": "L"}, {"t": "\"协调者\"，在生态里平衡多方", "s": "S"}]}];
  var TYPES = {"CAKL": {"name": "总师", "traits": ["全局", "前瞻", "主导"], "tagline": "全局架构 · 进取筹划 · 方案设计 · 创始导向", "desc": "你是股权架构的总师：习惯先画集团股权全景图，从控制链与资本平台入手，在合规框架内敢做进取筹划，输出可落地的顶层蓝图，并始终站在创始团队与控制权一方。", "advice": "总师最该补的一课，是把「放权设计」做成可控的授权，而非一味自己扛。", "keywords": "顶层架构 + 控股设计 + 方案蓝图", "strengths": ["看全局、定方向的能力极强，方案有前瞻性", "敢设计复杂架构（如红筹 / 跨境），客户敢跟"], "blinds": ["容易结构先行、忽略一线执行细节", "过于主导，可能弱化客户与团队的参与感"], "arch": "控股公司 + AB 股 / 一致行动 + 员工期权池，控制权与激励分层设计。", "pitfall": "蓝图过于宏大，落地时工商与税务细节衔接不上，执行成本高。", "case": "典型如为拟上市集团做整体顶层重构的牵头架构师，先搭三年后的资本平台。", "closing": "把图交出去一点，方案反而落得更稳。"}, "CAKS": {"name": "远谋", "traits": ["全局", "平衡", "筹谋"], "tagline": "全局架构 · 进取筹划 · 方案设计 · 资本导向", "desc": "你是远谋型的架构师：同样先画全局，却更擅长在创始人与财务投资人之间找平衡，用进取但有节制的方案，把资本方、员工激励与创始人诉求都装进同一张图里。", "advice": "平衡是艺术，但别为了讨好所有方，把控制权结构做得太软。", "keywords": "资本结构 + 融资架构 + 多方平衡", "strengths": ["融资条款与股权结构吃得透，投资人沟通顺", "方案兼顾多方，后续融资阻力小"], "blinds": ["过度平衡，创始人的核心诉求可能被稀释", "方案复杂，客户理解成本偏高"], "arch": "多轮融资架构 + 投资人保护条款 + 员工激励池，分层治理。", "pitfall": "条款堆得太满，上市前清理对赌与特殊权利耗时费力。", "case": "典型如陪伴企业走完 A 到 Pre-IPO 多轮融资的架构设计师。", "closing": "把各方的账算平，船才开得久。"}, "CATL": {"name": "领航", "traits": ["全局", "实干", "护盘"], "tagline": "全局架构 · 进取筹划 · 陪跑落地 · 创始导向", "desc": "你是领航型的架构师：定了全局方向后，亲自下场陪客户跑完工商、谈判与交割，始终护住创始人的控制盘，既敢规划也肯动手。", "advice": "陪跑很加分，但也要培养能独立交付的陪跑团队，别把自己累成唯一节点。", "keywords": "落地陪跑 + 控制权守护 + 执行推动", "strengths": ["从设计到落地一竿子插到底，客户省心", "现场协调与危机处理能力强"], "blinds": ["事必躬亲，规模化交付难", "重执行轻沉淀，方法论外化不足"], "arch": "控股层 + 业务主体分设，陪跑完成变更与协议闭环。", "pitfall": "陪跑过深、与客户资金账户边界不清，合规风险上升。", "case": "典型如既出方案又跟工商交割的实战型架构顾问。", "closing": "方向你定，路你陪跑，客户才敢走远。"}, "CATS": {"name": "纵横", "traits": ["全局", "周旋", "整合"], "tagline": "全局架构 · 进取筹划 · 陪跑落地 · 资本导向", "desc": "你是纵横型的架构师：在全局视野下穿行于资本方、生态伙伴与团队之间，既做方案也跑落地，擅长把多方利益编织进一套可执行的交易结构。", "advice": "周旋多方是强项，但别让客户觉得你更像是资本的代言人。", "keywords": "交易结构 + 生态整合 + 落地执行", "strengths": ["资源整合与谈判推进能力强", "复杂交易结构落地经验足"], "blinds": ["站位偏资本方，创始团队信任需额外经营", "项目杂，深度沉淀不足"], "arch": "控股层 + 多家参股 / 跟投主体，独立核算、独立交割。", "pitfall": "关联交易与利益输送边界不清，合规风险高。", "case": "典型如做产业生态整合、串联多方交易的架构操盘手。", "closing": "把多方连成网，价值才最大。"}, "CBKL": {"name": "基石", "traits": ["全局", "稳健", "守护"], "tagline": "全局架构 · 稳健合规 · 方案设计 · 创始导向", "desc": "你是基石型的架构师：以全局视角打底，风格克制、合规优先，输出稳当的顶层蓝图，始终把创始人的底盘与控制权护得牢牢的。", "advice": "守得住是本事，但别把「不变」误当成「安全」，结构性机会也要接得住。", "keywords": "稳健架构 + 控制权守护 + 合规蓝图", "strengths": ["底盘极稳，方案经得起监管与审计推敲", "创始团队信任度高"], "blinds": ["过于保守，可能错过转型与融资窗口", "方案偏标准，定制感不足"], "arch": "控股公司 + 家族 / 员工股权池，控制权与受益权清晰分离。", "pitfall": "代持未还原或架构不清晰，未来融资梳理成本陡增。", "case": "典型如为家族企业与守业一代做稳健顶层设计的架构师。", "closing": "守得住底盘，才谈得上远航。"}, "CBKS": {"name": "守衡", "traits": ["全局", "审慎", "制衡"], "tagline": "全局架构 · 稳健合规 · 方案设计 · 资本导向", "desc": "你是守衡型的架构师：全局视角、合规为先，擅长在投资人、员工与创始人之间做出审慎的制衡方案，每一处结构都经得起推敲。", "advice": "审慎没错，但也要给客户留出适度的进取空间，别把方案做成铁桶。", "keywords": "合规制衡 + 资本结构 + 风险隔离", "strengths": ["风险敞口小，合规扎实", "多方制衡设计公平，争议少"], "blinds": ["决策偏慢，窗口易过", "方案偏防御，增长性不足"], "arch": "控股层 + 递延纳税备案的激励池，税务前置、风险隔离。", "pitfall": "为合规把架构做得过绕，未来上市梳理成本反超高。", "case": "典型如财务 / 税务背景、把合规做到极致的架构师。", "closing": "平衡好每一方，结构才立得住。"}, "CBTL": {"name": "稳舵", "traits": ["全局", "踏实", "护行"], "tagline": "全局架构 · 稳健合规 · 陪跑落地 · 创始导向", "desc": "你是稳舵型的架构师：定了全局框架后，踏实陪客户落每一步，护住创始人的控制盘，不冒进、不甩锅，把架构稳稳建起来。", "advice": "稳是优势，但也要在关键节点给客户一点加速度。", "keywords": "稳健陪跑 + 控制权守护 + 合规执行", "strengths": ["落地节奏稳，客户安心", "执行细节把控严，少返工"], "blinds": ["节奏偏慢，急单吃不消", "创新方案供给不足"], "arch": "控股层 + 业务主体分设，按节奏完成变更与备案。", "pitfall": "过度谨慎导致架构僵化，难适应业务快速变化。", "case": "典型如陪伴区域龙头稳步做股权激励与架构梳理的顾问。", "closing": "把舵稳住，船自然走得平。"}, "CBTS": {"name": "调和", "traits": ["全局", "协调", "中和"], "tagline": "全局架构 · 稳健合规 · 陪跑落地 · 资本导向", "desc": "你是调和型的架构师：在全局框架下，以稳健的方式陪跑落地，更擅长在资本方、员工与创始人之间做中和与协调，让多方都能接受。", "advice": "调和各方是长处，但别为了和气，模糊了最关键的控制权底线。", "keywords": "多方协调 + 稳健落地 + 合规平衡", "strengths": ["冲突化解与沟通能力强", "落地过程平稳，摩擦少"], "blinds": ["站位偏中，创始人核心诉求易让步", "推进偏温吞"], "arch": "控股层 + 分润 / 合伙主体，条款公平、分红合规。", "pitfall": "分润与股权混淆，后续融资结构不清。", "case": "典型如做连锁 / 合伙分润、协调多方落地的架构师。", "closing": "把各方调顺，生意才长久。"}, "DAKL": {"name": "精构", "traits": ["单点", "精巧", "主创"], "tagline": "单点切入 · 进取筹划 · 方案设计 · 创始导向", "desc": "你是精构型的架构师：从一笔具体交易或协议切入，用精巧的设计把结构做漂亮，敢做进取筹划，并站在创始团队一方守住核心。", "advice": "单点做得精，也别忘了把单点连回集团全局，避免结构割裂。", "keywords": "交易设计 + 精巧架构 + 创始守护", "strengths": ["单点结构设计巧，条款滴水不漏", "敢设计进阶架构，客户敢用"], "blinds": ["重单点轻全局，可能留下跨主体隐患", "过于精巧，客户理解门槛高"], "arch": "交易型持股平台 + 关键协议控制，单点独立、闭环清晰。", "pitfall": "多个精巧单点未拉通，集团层面权属与税务混乱。", "case": "典型如专攻并购 / 重组单点设计的进阶架构师。", "closing": "把单点做绝，也要连成线。"}, "DAKS": {"name": "腾挪", "traits": ["单点", "灵活", "调度"], "tagline": "单点切入 · 进取筹划 · 方案设计 · 资本导向", "desc": "你是腾挪型的架构师：从具体交易入手，灵活调度股权与资本，擅长在资本方与团队之间做结构腾挪，把复杂交易设计得既进取又可行。", "advice": "腾挪很妙，但每一步都要留合规与税务的退路。", "keywords": "资本腾挪 + 交易设计 + 结构调度", "strengths": ["资本与股权调度灵活，方案弹性大", "复杂交易设计经验足"], "blinds": ["站位偏资本，创始信任需经营", "结构变化频繁，客户易晕"], "arch": "控股层 + 多家参股 / 跟投主体，独立核算、灵活进出。", "pitfall": "进出频繁，关联交易与计税基础混乱。", "case": "典型如做投融资交易结构、资本调度的架构师。", "closing": "腾挪之间，留出余地最关键。"}, "DATL": {"name": "巧匠", "traits": ["单点", "实干", "落地"], "tagline": "单点切入 · 进取筹划 · 陪跑落地 · 创始导向", "desc": "你是巧匠型的架构师：盯准具体交易，亲手把架构搭起来，陪客户跑完每一步，并始终护住创始人的核心利益，动手能力强、敢突破。", "advice": "巧在动手，也要把经验沉淀成方法，别只做『救火匠』。", "keywords": "单点落地 + 陪跑执行 + 创始守护", "strengths": ["现场落地能力强，复杂变更也能办", "敢突破常规，解决硬骨头"], "blinds": ["重执行轻体系", "项目依赖个人，难复制"], "arch": "交易主体 + 协议控制，陪跑完成交割与备案。", "pitfall": "陪跑过深与资金账户边界不清，合规红线高发。", "case": "典型如既设计又下场办工商交割的实战顾问。", "closing": "把巧劲用在落点，价值才实。"}, "DATS": {"name": "穿针", "traits": ["单点", "串联", "协同"], "tagline": "单点切入 · 进取筹划 · 陪跑落地 · 资本导向", "desc": "你是穿针型的架构师：从具体交易入手，把资本方、生态伙伴与团队像穿针一样连起来，既做方案也跑落地，擅长串联多方做成交易。", "advice": "串联是强项，但针脚要密、边界要清，别让利益线打结。", "keywords": "交易串联 + 生态协同 + 落地执行", "strengths": ["多方协调与落地推进强", "交易结构落地经验足"], "blinds": ["站位偏资本 / 生态，创始信任需经营", "项目杂，深度沉淀不足"], "arch": "运营主体 + 多合作方分设，风险隔离、独立结算。", "pitfall": "合作方过多、协议混同，一处的风险传导全盘。", "case": "典型如做产业链 / 生态合作架构串联的操盘手。", "closing": "把线穿顺，网才织得开。"}, "DBKL": {"name": "细算", "traits": ["单点", "精细", "守底"], "tagline": "单点切入 · 稳健合规 · 方案设计 · 创始导向", "desc": "你是细算型的架构师：从一笔具体交易或细节切入，用精细的方案把每个数字算清，守合规底线，并站在创始团队一方护住核心利益。", "advice": "算得清是硬功，但别因过度抠细节，错过整体最优。", "keywords": "精细测算 + 单点方案 + 创始守护", "strengths": ["数字与税务算得准，方案扎实", "创始团队信任度高"], "blinds": ["重细节轻全局", "决策慢，窗口易过"], "arch": "单点主体 + 递延纳税 / 备案设计，税务前置、风险隔离。", "pitfall": "为精确把架构做复杂，未来上市梳理成本高。", "case": "典型如财务 / 税务背景、专攻单点测算的架构师。", "closing": "把账算细，底气才足。"}, "DBKS": {"name": "明账", "traits": ["单点", "透明", "制衡"], "tagline": "单点切入 · 稳健合规 · 方案设计 · 资本导向", "desc": "你是明账型的架构师：从具体交易入手，把账目与结构做得透明清晰，在资本方与团队之间做稳健制衡，每一笔都经得起查。", "advice": "透明是信任基础，但也要保护创始人的合理控制权空间。", "keywords": "透明账目 + 稳健制衡 + 合规设计", "strengths": ["账务与结构透明，审计无忧", "多方制衡公平，争议少"], "blinds": ["偏防御，增长性不足", "决策偏慢"], "arch": "单点主体 + 清晰分账 / 分润，独立核算、合规备案。", "pitfall": "分润与股权混淆，融资时结构不清。", "case": "典型如做合伙 / 分账透明化设计的架构师。", "closing": "把账做明，大家都安心。"}, "DBTL": {"name": "笃行", "traits": ["单点", "踏实", "落地"], "tagline": "单点切入 · 稳健合规 · 陪跑落地 · 创始导向", "desc": "你是笃行型的架构师：盯准具体交易，踏实陪客户把每一步落地，守合规底线，护住创始人的核心，节奏不快但每一步都稳。", "advice": "笃行可贵，但关键节点也要敢于给客户提速。", "keywords": "稳健陪跑 + 单点落地 + 合规守护", "strengths": ["落地细、少返工，客户放心", "合规把控严"], "blinds": ["节奏偏慢", "创新方案供给不足"], "arch": "单点主体 + 按节奏完成变更与备案，边界清晰。", "pitfall": "架构偏僵，难适配业务快速变化。", "case": "典型如陪伴中小企业做规范落地与股权激励的顾问。", "closing": "一步步走实，路才走得远。"}, "DBTS": {"name": "合规", "traits": ["单点", "守规", "审慎"], "tagline": "单点切入 · 稳健合规 · 陪跑落地 · 资本导向", "desc": "你是合规型的架构师：从具体交易入手，以合规为先陪客户落地，更擅长在资本方、员工与创始人之间守住规则红线，把风险压到最低。", "advice": "守规是底线，但也要给客户留一点灵活生长的空间。", "keywords": "合规落地 + 风险隔离 + 稳健陪跑", "strengths": ["几乎不踩大雷，合规扎实", "多方协调平稳"], "blinds": ["偏审慎，增长动力不足", "结构偏保守"], "arch": "多个独立主体 + 统一合规中台，隔离清晰。", "pitfall": "过度保守，资产增值与灵活性受限。", "case": "典型如做强监管行业合规架构落地的顾问。", "closing": "守住规矩，才走得长远。"}};
  var GROUPS = {"CA": {"name": "远图派", "color": "#c0392b", "desc": "全局架构 + 进取筹划：先画全景，也敢在合规框架内做进取设计。"}, "CB": {"name": "磐石派", "color": "#b8893b", "desc": "全局架构 + 稳健合规：底盘稳、边界清，不冒险但守得牢。"}, "DA": {"name": "巧手派", "color": "#8e44ad", "desc": "单点切入 + 进取筹划：从一笔交易下手，敢做精巧的进阶结构。"}, "DB": {"name": "精算派", "color": "#27ae60", "desc": "单点切入 + 稳健合规：把数字与细节算清，慢慢长出扎实方案。"}};
  var DOMAIN = 'https://xiaofen.pro';
  var MBTI = '/mbti';

  var answers = new Array(QUESTIONS.length).fill(null);
  var step = 0;            // 当前题号（0-based）
  var app = document.getElementById('app');

  function el(html){ var d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstChild; }

  // ---------- 步骤1：介绍 ----------
  function renderIntro(){
    app.innerHTML = '';
    var h = el('<section class="mbti-hero"></section>');
    h.innerHTML =
      '<p class="section__kicker">趣味测试 · 16 类股权架构师</p>' +
      '<h1>你是哪一类股权架构师？</h1>' +
      '<p class="lead">20 道题，测出你的股权人格：诊断起点、风险取向、交付方式、服务重心——四个维度，拼出只属于你的专业类型。</p>' +
      '<div class="mbti-points"><span>🕹 约 2 分钟</span><span>🧭 四轴十六型</span><span>📊 看看同行都在哪</span></div>' +
      '<p><a class="btn" href="javascript:void(0)" id="startBtn">开始测试 →</a></p>' +
      '<p><a class="btn btn--ghost" href="./types.html">先看看 16 类图鉴 →</a></p>' +
      '<p class="mbti-foot-note">本测试仅供娱乐与自我觉察，不构成任何投资或法律意见。</p>';
    app.appendChild(h);
    h.querySelector('#startBtn').addEventListener('click', function(){ step=0; renderQuestion(); });
  }

  // ---------- 步骤2：答题 ----------
  function renderQuestion(){
    var q = QUESTIONS[step];
    app.innerHTML = '';
    var wrap = el('<section></section>');
    var pct = Math.round((step)/(QUESTIONS.length)*100);
    wrap.innerHTML =
      '<div class="q-count">第 '+(step+1)+' / '+QUESTIONS.length+' 题 · '+axisName(q.dim)+'</div>' +
      '<div class="q-progress"><i style="width:'+pct+'%"></i></div>' +
      '<div class="q-text">'+esc(q.q)+'</div>' +
      '<div id="opts"></div>' +
      '<div class="q-nav">' +
        (step>0 ? '<button class="q-back" id="backBtn">← 上一题</button>' : '<span></span>') +
        (answers[step] ? '<a class="btn btn--ghost" href="javascript:void(0)" id="nextBtn">下一题 →</a>' : '<span></span>') +
      '</div>';
    app.appendChild(wrap);
    var opts = wrap.querySelector('#opts');
    q.o.forEach(function(o, i){
      var b = el('<button class="q-opt"></button>');
      b.textContent = o.t;
      if (answers[step]===o.s) b.style.borderColor = 'var(--blue)';
      b.addEventListener('click', function(){
        answers[step] = o.s;
        if (step < QUESTIONS.length-1){ step++; renderQuestion(); }
        else { renderConfirm(); }
      });
      opts.appendChild(b);
    });
    var nb = wrap.querySelector('#nextBtn'); if (nb) nb.addEventListener('click', function(){ step++; renderQuestion(); });
    var bb = wrap.querySelector('#backBtn'); if (bb) bb.addEventListener('click', function(){ step--; renderQuestion(); });
  }

  function axisName(key){
    if (key==='C/D') return '诊断起点';
    if (key==='A/B') return '风险取向';
    if (key==='K/T') return '交付方式';
    return '服务重心';
  }

  // ---------- 步骤3：确认 ----------
  function renderConfirm(){
    var done = answers.filter(function(a){return a;}).length;
    app.innerHTML = '';
    var c = el('<section class="mbti-center"></section>');
    c.innerHTML =
      '<h2 class="section__title" style="font-size:32px">确认提交？</h2>' +
      '<p class="section__lead">已作答 '+done+' / '+QUESTIONS.length+' 题。</p>' +
      '<p><a class="btn" href="javascript:void(0)" id="submitBtn">生成我的类型 →</a></p>' +
      '<p class="mbti-foot-note">提交即表示你同意以匿名方式参与统计（仅记录类型码，不收集个人信息）。</p>';
    app.appendChild(c);
    c.querySelector('#submitBtn').addEventListener('click', startLoading);
  }

  // ---------- 步骤4：生成动画 ----------
  var LOAD_STEPS = ['正在读取你的诊断起点…','正在测算你的风险取向…','正在解析你的交付方式…','正在定位你的服务重心…','正在生成专属股权人格…'];
  function startLoading(){
    app.innerHTML = '';
    var l = el('<section class="mbti-center"></section>');
    l.innerHTML = '<div class="spinner"></div><div class="load-step" id="lst"></div>';
    app.appendChild(l);
    submitResult(); // 无后端：静默，不阻塞
    var i = 0;
    var timer = setInterval(function(){
      l.querySelector('#lst').textContent = LOAD_STEPS[i] || '';
      i++;
      if (i >= LOAD_STEPS.length){ clearInterval(timer); setTimeout(renderResult, 350); }
    }, 340);
  }

  // ---------- 步骤5：结果 ----------
  function computeType(){
    var s = {C:0,D:0,A:0,B:0,K:0,T:0,L:0,S:0};
    answers.forEach(function(p){ if (p) s[p]++; });
    return (s.C>=s.D?'C':'D') + (s.A>=s.B?'A':'B') + (s.K>=s.T?'K':'T') + (s.L>=s.S?'L':'S');
  }

  function renderResult(){
    var type = computeType();
    var t = TYPES[type] || FALLBACK;
    var g = GROUPS[type.slice(0,2)] || {name:'股权架构师', color:'#0066cc'};
    var accent = (TYPES[type] && GROUP_ACCENT[type]) ? GROUP_ACCENT[type] : g.color;
    // 本地留存
    try { var hist = JSON.parse(localStorage.getItem('mbti_hist')||'[]'); hist.unshift(type); hist=hist.slice(0,20); localStorage.setItem('mbti_hist', JSON.stringify(hist)); } catch(e){}
    app.innerHTML = '';
    var r = el('<section></section>');
    r.innerHTML =
      '<div class="result-card" style="--accent:'+accent+'">' +
        ava(type, accent, true) +
        '<div class="result-code">'+type+'</div>' +
        '<div class="result-name">'+esc(t.name)+'</div>' +
        '<div class="result-tagline">'+esc(t.tagline)+'</div>' +
        '<div class="result-traits">'+t.traits.map(function(x){return '<span>'+esc(x)+'</span>';}).join('')+'</div>' +
        '<p class="result-desc">'+esc(t.desc)+'</p>' +
        '<div class="result-kw">关键词：'+esc(t.keywords)+'</div>' +
        '<div class="result-actions">' +
          '<a class="btn" href="types/'+type+'.html">查看完整画像 →</a>' +
          '<a class="btn btn--ghost" href="javascript:void(0)" id="shareBtn">分享</a>' +
          '<a class="btn btn--ghost" href="javascript:void(0)" id="retakeBtn">再测一次</a>' +
        '</div>' +
      '</div>' +
      '<div class="sharecard" style="--accent:'+accent+'">' +
        '<div class="sc-code">'+type+'</div>' +
        '<div class="sc-name">'+esc(t.name)+'</div>' +
        '<div class="sc-tag">'+esc(t.tagline)+'</div>' +
        '<div class="sc-foot">'+DOMAIN+MBTI+' · 张晓芬股权战略</div>' +
      '</div>' +
      '<p class="mbti-foot-note">测试仅供娱乐，不构成投资或法律意见。想落地你的真实架构，欢迎预约咨询。</p>';
    app.appendChild(r);
    r.querySelector('#shareBtn').addEventListener('click', function(){ share(type, t); });
    r.querySelector('#retakeBtn').addEventListener('click', function(){ answers=new Array(QUESTIONS.length).fill(null); step=0; renderIntro(); });
  }

  var FALLBACK = { name:'神秘架构师', traits:['未知','多变','自在'], tagline:'你的类型介于边界之间', desc:'你是一位难以被框定的股权人格，四种取向在你身上动态平衡。', keywords:'灵活', advice:'' };
  var GROUP_ACCENT = {};
  Object.keys(TYPES).forEach(function(k){ GROUP_ACCENT[k] = (GROUPS[k.slice(0,2)]||{}).color || '#0066cc'; });

  function ava(code, color, big){
    return '<div class="ava'+(big?' ava--lg':'')+'" style="--tc:'+color+'">'+code+'</div>';
  }
  function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function submitResult(){ /* 静态版无后端：预留接口，静默返回 */ }

  function shareText(type, t){
    return '我是 '+type+' · '+t.name+'（'+t.tagline+'）——“16类股权架构师”测试 @ 张晓芬股权战略 '+DOMAIN+MBTI;
  }
  function share(type, t){
    var text = shareText(type, t);
    if (navigator.share){ navigator.share({ title:'16类股权架构师', text:text }).catch(function(){}); return; }
    if (navigator.clipboard){ navigator.clipboard.writeText(text).then(function(){ alert('已复制分享文案：\n'+text); }).catch(function(){ alert(text); }); }
    else { alert(text); }
  }

  // 启动
  renderIntro();
})();
