/* 16类股权架构师 · 测试逻辑（zxf-site/mbti/app.js）
   纯前端：28 题 -> 计分 -> 4 字母类型码 -> 渲染结果。无后端，分布用示例 BASELINE 兜底。 */
(function () {
  var QUESTIONS = [{"dim": "C/D", "q": "首轮融资，投资人开价 30% 股权但要求让出 CEO 投票权。你会？", "o": [{"t": "用 AB 股把投票权锁死在自己手里", "s": "C"}, {"t": "欢迎，用股权换资源，投票权可以谈", "s": "D"}]}, {"dim": "C/D", "q": "公司重大决策，你更倾向怎么定？", "o": [{"t": "最终拍板权在我，效率优先", "s": "C"}, {"t": "核心合伙人合议，慢但稳", "s": "D"}]}, {"dim": "C/D", "q": "引入联合创始人，股权怎么给？", "o": [{"t": "我控股 67% 以上，保留绝对控制", "s": "C"}, {"t": "相对均衡，设合伙人共治机制", "s": "D"}]}, {"dim": "C/D", "q": "员工持股平台的 GP（执行事务）谁来当？", "o": [{"t": "我控制的公司当 GP，锁住表决权", "s": "C"}, {"t": "由持股员工代表轮值，权力分散", "s": "D"}]}, {"dim": "C/D", "q": "二代接班，你更乐意？", "o": [{"t": "用控股公司锁定控制权，再平稳交班", "s": "C"}, {"t": "用共治董事会慢慢过渡，不一人独大", "s": "D"}]}, {"dim": "C/D", "q": "遇到意见分歧的大股东，你？", "o": [{"t": "保住一票否决，底线不退", "s": "C"}, {"t": "用对赌 / 回购把分歧摆平", "s": "D"}]}, {"dim": "C/D", "q": "多家主体协同时，总部定位是？", "o": [{"t": "强管控中台，统一调度", "s": "C"}, {"t": "松散联邦，各主体自治", "s": "D"}]}, {"dim": "A/B", "q": "账上刚盈利，你优先？", "o": [{"t": "加杠杆扩张 / 提前出海", "s": "A"}, {"t": "先留足安全垫再说", "s": "B"}]}, {"dim": "A/B", "q": "看到一个新赛道，你？", "o": [{"t": "快速试错、敢 all-in", "s": "A"}, {"t": "小步验证、跑通再投", "s": "B"}]}, {"dim": "A/B", "q": "融资节奏，你偏好？", "o": [{"t": "能拿就多拿，弹药为上", "s": "A"}, {"t": "按需少拿，尽量少稀释", "s": "B"}]}, {"dim": "A/B", "q": "税务筹划的风格，你？", "o": [{"t": "激进用足优惠与架构空间", "s": "A"}, {"t": "守住底线、不碰灰色地带", "s": "B"}]}, {"dim": "A/B", "q": "红筹 / VIE 这类架构，你？", "o": [{"t": "为增长早搭，别等要用了再忙", "s": "A"}, {"t": "真要上市 / 融资再搭", "s": "B"}]}, {"dim": "A/B", "q": "利润率和规模，你先保哪个？", "o": [{"t": "规模优先，先把盘子做大", "s": "A"}, {"t": "利润优先，活得好比长得快重要", "s": "B"}]}, {"dim": "A/B", "q": "遇到政策不确定，你？", "o": [{"t": "抢窗口先行，机会不等人", "s": "A"}, {"t": "观望合规，宁可慢一点", "s": "B"}]}, {"dim": "K/T", "q": "激励核心团队，你偏好？", "o": [{"t": "给股权 / 期权，把人绑住", "s": "K"}, {"t": "高薪 + 奖金，现金结清", "s": "T"}]}, {"dim": "K/T", "q": "高管离职，你更接受？", "o": [{"t": "股权成熟 + 回购，股权收回", "s": "K"}, {"t": "现金结清走人，股权本就不多", "s": "T"}]}, {"dim": "K/T", "q": "引入外部顾问，你？", "o": [{"t": "给少量期权，长期绑定", "s": "K"}, {"t": "按项目付咨询费，银货两讫", "s": "T"}]}, {"dim": "K/T", "q": "分红政策，你倾向？", "o": [{"t": "少分，利润再投入 / 充实股权池", "s": "K"}, {"t": "多分现金给股东，落袋为安", "s": "T"}]}, {"dim": "K/T", "q": "合伙人贡献不同，报酬怎么体现？", "o": [{"t": "用股权权重体现长期贡献", "s": "K"}, {"t": "用现金按当期贡献结算", "s": "T"}]}, {"dim": "K/T", "q": "想让员工更稳定，你？", "o": [{"t": "限制性股票四年成熟，慢放", "s": "K"}, {"t": "年终奖 + 涨薪，即时兑现", "s": "T"}]}, {"dim": "K/T", "q": "家族传承，你更乐意？", "o": [{"t": "股权装信托，绑定后代", "s": "K"}, {"t": "现金 / 保险传承，简单清晰", "s": "T"}]}, {"dim": "L/S", "q": "做架构的首要目标，你认为是？", "o": [{"t": "十年可传承、可融资的地基", "s": "L"}, {"t": "当下税负最低 / 最快能退出", "s": "S"}]}, {"dim": "L/S", "q": "持有一家好公司，你？", "o": [{"t": "长期持有，不轻易卖", "s": "L"}, {"t": "估值高点就套现离场", "s": "S"}]}, {"dim": "L/S", "q": "出海架构，你主要为了？", "o": [{"t": "长期全球布局与品牌沉淀", "s": "L"}, {"t": "短期利润合规回流", "s": "S"}]}, {"dim": "L/S", "q": "上市对你而言是？", "o": [{"t": "长期资本平台，不是终点", "s": "L"}, {"t": "套现离场的窗口", "s": "S"}]}, {"dim": "L/S", "q": "品牌 / IP，你更愿？", "o": [{"t": "长期沉淀，慢慢养", "s": "L"}, {"t": "蹭热度尽快变现", "s": "S"}]}, {"dim": "L/S", "q": "和客户 / 供应商的关系，你？", "o": [{"t": "长期共生，一起长大", "s": "L"}, {"t": "单笔最优，谁便宜用谁", "s": "S"}]}, {"dim": "L/S", "q": "学习投入，你更看重？", "o": [{"t": "为长期能力，不急着变现", "s": "L"}, {"t": "为当下直接变现", "s": "S"}]}];
  var TYPES = {"CAKL": {"name": "舰长", "traits": ["远航", "掌控", "远见"], "tagline": "集权 · 进取 · 绑定团队 · 长期远航", "desc": "你是掌舵的舰长：控制权焊在自己手里，也敢加杠杆出海，用股权把核心团队绑成一条船，朝着十年后的资本平台全速前进。", "advice": "你最该补的一课，是把「让权」设计成可控的放权，而非一味紧握。", "keywords": "AB 股 + 期权池 + 控制权", "strengths": ["控制力与战略定力极强，大方向不漂移", "敢投入、敢长期主义，团队愿意跟"], "blinds": ["容易一言堂，关键人才可能因缺乏空间离开", "过度集权让决策链变长、响应变慢"], "arch": "控股公司 + AB 股 + 员工期权池，控制权与激励分层设计。", "pitfall": "期权池过早发完、或 AB 股比例设错，导致上市前控制权争议。", "case": "典型如白手起家、牢牢控股并带公司走完多轮融资的创始人。", "closing": "把舵交出去一点，船反而开得更远。"}, "CAKS": {"name": "猎风者", "traits": ["突进", "套利", "掌控"], "tagline": "集权 · 进取 · 绑定团队 · 窗口套利", "desc": "你是猎风者：紧握控制权，又对市场窗口极度敏感，用股权绑住小团队，在估值高点果断套现、再投下一个风口。", "advice": "别让套利节奏盖过基本功，长期底盘也要有。", "keywords": "控股 + 闪电退出 + 期权激励", "strengths": ["嗅觉锐、出手快，抓住窗口能力强", "小团队绑定紧，执行不掉链"], "blinds": ["套现过早可能错过复利", "频繁切换赛道，品牌难沉淀"], "arch": "控股层 + 项目型持股平台，单项目独立核算、独立退出。", "pitfall": "多个项目主体混同，退出时税务与合规一地鸡毛。", "case": "典型如连续创业、每轮高点退出再起盘的老炮。", "closing": "风会停，但你的船要能自己航行。"}, "CATL": {"name": "铁腕实业家", "traits": ["务实", "掌控", "深耕"], "tagline": "集权 · 进取 · 现金为王 · 长期做实", "desc": "你是铁腕实业家：控制权在手，敢扩张，但更信现金流，用真金白银把实业一层层做实，不靠故事估值。", "advice": "适度用股权留住操盘手，别全靠工资绑人。", "keywords": "控股 + 现金流 + 实业底盘", "strengths": ["经营稳健、抗周期强", "扩张有利润支撑，不虚胖"], "blinds": ["现金偏好过强，可能舍不得为人才和期权让利", "重资产沉淀多，转身慢"], "arch": "控股公司 + 多业务主体分设，重资产独立持有。", "pitfall": "业务主体与资产主体不分，融资或处置时牵一发动全身。", "case": "典型如制造业起家、一步步并购做大的实业老板。", "closing": "实业的厚度，是你最大的议价权。"}, "CATS": {"name": "套利猎手", "traits": ["敏锐", "套利", "务实"], "tagline": "集权 · 进取 · 现金为王 · 窗口套利", "desc": "你是套利猎手：控制权在手、出手快，用现金逻辑捕捉每一次结构性价差，赚完即走，不谈长期情怀。", "advice": "套利的钱要落袋为安，更要留一笔做「不套利」的底仓。", "keywords": "控股 + 价差套利 + 快速退出", "strengths": ["对价差极度敏感，转化快", "现金回笼快，弹药充足"], "blinds": ["缺乏长期资产，抗周期弱", "过度交易，税费与合规成本高"], "arch": "控股层 + 交易型主体，资金通道清晰、独立结算。", "pitfall": "个人与公司账户混用收付款，公转私红线高发区。", "case": "典型如靠信息差与结构差做交易的贸易 / 投资老手。", "closing": "猎手也要有窝，别永远在野外。"}, "CBKL": {"name": "基石管家", "traits": ["稳健", "守护", "远见"], "tagline": "集权 · 保守 · 绑定团队 · 长期守护", "desc": "你是基石管家：控制权牢牢在握，但风格克制，用股权把老班底绑住，只为把家业稳稳传下去、传得久。", "advice": "守住是本事，但别把「不变」误当成「安全」。", "keywords": "控股 + 家族信托 + 股权绑定", "strengths": ["底盘极稳，传承有序", "团队忠诚度高，流失低"], "blinds": ["过于保守，可能错失转型窗口", "接班安排拖太久，突发交棒易乱"], "arch": "控股公司 + 家族信托 + 员工股权池，控制权与受益权分离。", "pitfall": "代持未还原、或信托架构不清晰，传承时权属纠纷。", "case": "典型如守业一代、把企业当家族资产经营的掌门人。", "closing": "守得住，才传得下去。"}, "CBKS": {"name": "精算师", "traits": ["精算", "守护", "套利"], "tagline": "集权 · 保守 · 绑定团队 · 窗口套利", "desc": "你是精算师：控制权在手、风格谨慎，用股权留人，但每一笔套现与架构都算到小数点后两位，绝不多冒一分险。", "advice": "算得清是优势，但别因算太细而错过 timing。", "keywords": "控股 + 税务精算 + 期权", "strengths": ["风险敞口极小，合规扎实", "激励成本算得准，不浪费"], "blinds": ["决策慢，窗口易过", "过度精算让团队觉得「抠」"], "arch": "控股层 + 递延纳税备案的期权池，税务前置设计。", "pitfall": "为省税把架构做得过绕，未来上市梳理成本反超高。", "case": "典型如财务出身、把税务合规做到极致的老板。", "closing": "精确是一种力量，但速度也是。"}, "CBTL": {"name": "现金奶牛主", "traits": ["稳健", "收息", "务实"], "tagline": "集权 · 保守 · 现金为王 · 长期收息", "desc": "你是现金奶牛主：控制权在手、不爱冒险，把企业当稳定现金流机器，分红落袋，不玩虚的。", "advice": "现金流好是福，但留点利润再投入，别把牛挤干。", "keywords": "控股 + 高分红 + 现金管理", "strengths": ["经营安全垫厚，抗风险强", "股东回报稳定，口碑好"], "blinds": ["再投入不足，增长停滞", "股权集中度过高，治理单一"], "arch": "控股公司 + 业务主体，分红路径清晰合规。", "pitfall": "分红与公转私边界模糊，个人与公司资金混同。", "case": "典型如区域龙头、稳定盈利慢慢分的老板。", "closing": "牛要养，奶才长流。"}, "CBTS": {"name": "避险套利客", "traits": ["谨慎", "套利", "守成"], "tagline": "集权 · 保守 · 现金为王 · 窗口套利", "desc": "你是避险套利客：控制权在手、极度厌恶风险，只在看得清的窗口做低风险套利，赚稳妥的钱。", "advice": "低风险没错，但全仓避险也可能被通胀慢慢吃掉。", "keywords": "控股 + 低风险套利 + 现金", "strengths": ["几乎不踩大雷", "现金灵活，随时可调"], "blinds": ["收益天花板低", "过度谨慎，机会成本偏高"], "arch": "控股层 + 多独立账户主体，风险隔离清晰。", "pitfall": "主体过多却无统一管理，合规与记账成本上升。", "case": "典型如稳健型投资人、低风险价差交易者。", "closing": "不输，也是一种赢法。"}, "DAKL": {"name": "盟主", "traits": ["共治", "远航", "聚人"], "tagline": "分权 · 进取 · 绑定团队 · 长期共建", "desc": "你是盟主：愿意把决策分给合伙人，用股权把一帮能人绑成联盟，一起冲一个十年的大目标。", "advice": "共治很美，但关键时刻仍要有「最终协调人」。", "keywords": "合伙人制 + 期权池 + 共治", "strengths": ["聚人能力强，人才愿意来", "网络效应，扩张快"], "blinds": ["决策慢、易扯皮", "控制权稀释后，遇危机难统一"], "arch": "合伙人持股平台 + 期权池 + 一致行动协议。", "pitfall": "一致行动协议缺失，融资后控制权意外旁落。", "case": "典型如靠合伙人网络快速做大的平台型创始人。", "closing": "一个人走得快，一群人走得远。"}, "DAKS": {"name": "生态拓荒者", "traits": ["拓荒", "套利", "聚人"], "tagline": "分权 · 进取 · 绑定团队 · 窗口套利", "desc": "你是生态拓荒者：用分权聚起一群人，在新兴赛道抢窗口，用股权绑定生态伙伴，套现反哺下一程。", "advice": "生态要共生，别把伙伴变成纯套利对象。", "keywords": "生态股权 + 合伙人 + 退出", "strengths": ["拓荒快、结盟广", "资本与资源滚动效率高"], "blinds": ["生态松散，管控弱", "套利节奏快，根基易浮"], "arch": "生态控股层 + 多家参股 / 跟投主体，独立核算。", "pitfall": "关联交易与利益输送边界不清，合规风险高。", "case": "典型如做产业生态、广撒网投资的老大哥。", "closing": "拓荒者死后，才有人叫它路。"}, "DATL": {"name": "平台操盘手", "traits": ["操盘", "深耕", "聚人"], "tagline": "分权 · 进取 · 现金为王 · 长期操盘", "desc": "你是平台操盘手：用分权调动多方，敢投入做平台，但更信现金流健康，把平台一层层做厚。", "advice": "平台越大，越要把规则与分润写清楚。", "keywords": "平台架构 + 分润 + 现金", "strengths": ["资源整合与操盘能力强", "现金流意识好，活得久"], "blinds": ["分润机制复杂，易生内耗", "平台重，转身不易"], "arch": "平台控股层 + 区域 / 业务分主体，分润清晰。", "pitfall": "分润与股权混淆，合伙人变股东后反目。", "case": "典型如做 SaaS / 交易平台、靠分润做大的操盘人。", "closing": "平台的价值，在于让每个人都有位置。"}, "DATS": {"name": "流量猎人", "traits": ["敏锐", "套利", "聚人"], "tagline": "分权 · 进取 · 现金为王 · 窗口套利", "desc": "你是流量猎人：用分权拉起团队，追着流量与窗口跑，用现金逻辑快速变现，赚完一波换一波。", "advice": "流量会枯，把猎到的「用户资产」沉淀下来。", "keywords": "流量架构 + 快速变现 + 分权", "strengths": ["反应极快，跟得上风口", "团队轻、转身快"], "blinds": ["流量依赖重，底盘薄", "缺乏长期资产，难以估值"], "arch": "运营主体 + 多账号 / 多店铺分设，风险隔离。", "pitfall": "店铺 / 账号集中或混同，一处被封全盘受影响。", "case": "典型如 MCN / 跨境卖货、追流量的操盘手。", "closing": "追流量的人，最终要自己成为流量。"}, "DBKL": {"name": "共治管家", "traits": ["共治", "守护", "稳健"], "tagline": "分权 · 保守 · 绑定团队 · 长期共治", "desc": "你是共治管家：把权力分给合伙人，风格克制，用股权把团队留住，慢慢把家业共治着传下去。", "advice": "共治要制度兜底，别靠人情维持。", "keywords": "共治 + 股权池 + 传承", "strengths": ["团队稳定、冲突少", "传承平稳，代际摩擦小"], "blinds": ["决策偏慢", "责任分散，遇大事易推诿"], "arch": "合伙人平台 + 家族 / 员工股权池，章程先行。", "pitfall": "章程与退出机制缺失，合伙人纠纷难解。", "case": "典型如兄弟 / 夫妻合伙、平稳经营的老牌企业。", "closing": "共治不是没有船长，而是大家认同航向。"}, "DBKS": {"name": "分散套利者", "traits": ["分散", "套利", "守成"], "tagline": "分权 · 保守 · 绑定团队 · 窗口套利", "desc": "你是分散套利者：权力分散，风险也分散，用股权留小团队，只在多个低相关窗口做稳妥套利。", "advice": "分散是护城河，但也要有一个「主心骨」主体。", "keywords": "分散持股 + 套利 + 合规", "strengths": ["风险极度分散，不把蛋放一篮", "合规意识强"], "blinds": ["精力分散，难做深", "缺乏旗舰，品牌弱"], "arch": "多个独立持股主体，统一记账与合规中台。", "pitfall": "主体过多、无中台，合规与税务管理失控。", "case": "典型如多线小规模投资、分散布局的老板。", "closing": "不把所有的船，都系在同一根桩上。"}, "DBTL": {"name": "分润守成者", "traits": ["守成", "收息", "务实"], "tagline": "分权 · 保守 · 现金为王 · 长期分润", "desc": "你是分润守成者：把利益分给合伙人，自己守着现金流，不冒进，慢慢收、慢慢长。", "advice": "守成可以，但留点利润给未来买门票。", "keywords": "分润 + 现金 + 稳健", "strengths": ["合伙人体验好，留得住人", "现金流稳，睡得着"], "blinds": ["增长动力不足", "股权过于分散，融资时议价弱"], "arch": "控股层 + 分润型合伙主体，分红合规。", "pitfall": "分润与股权混淆，后续融资结构不清。", "case": "典型如区域连锁、靠分润稳稳扩张的老板。", "closing": "把蛋糕分好，蛋糕才会变大。"}, "DBTS": {"name": "保守现金客", "traits": ["谨慎", "守成", "务实"], "tagline": "分权 · 保守 · 现金为王 · 窗口套利", "desc": "你是保守现金客：权力与风险都分散，极度看重落袋为安，只在看清的窗口做点小套利。", "advice": "安全感的来源，不该只有现金一种。", "keywords": "分散 + 现金 + 低风险", "strengths": ["几乎不踩雷", "现金自由度高"], "blinds": ["资产增值慢", "过度分散，难成规模"], "arch": "多独立主体 + 统一现金管理，隔离清晰。", "pitfall": "过度保守导致资产被通胀缓慢侵蚀。", "case": "典型如极度稳健、现金为王的小企业主。", "closing": "手里有力，心里不慌——但也别只握着不动。"}};
  var GROUPS = {"CA": {"name": "赤焰统帅", "color": "#c0392b", "desc": "集权 + 进取：把控制权焊死，也敢加杠杆抢窗口。"}, "CB": {"name": "金石诸侯", "color": "#b8893b", "desc": "集权 + 保守：底盘稳、边界清，不冒险但守得牢。"}, "DA": {"name": "紫气宗主", "color": "#8e44ad", "desc": "分权 + 进取：用合伙人网络扩张，敢闯敢合。"}, "DB": {"name": "绿洲之王", "color": "#27ae60", "desc": "分权 + 保守：把风险分散，慢慢长出一片生态。"}};
  var BASELINE = {"CAKL": 182, "CAKS": 96, "CATL": 121, "CATS": 88, "CBKL": 154, "CBKS": 73, "CBTL": 139, "CBTS": 61, "DAKL": 167, "DAKS": 102, "DATL": 118, "DATS": 84, "DBKL": 143, "DBKS": 69, "DBTL": 126, "DBTS": 57};
  var BASELINE_TOTAL = 1780;
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
      '<p class="lead">28 道题，测出你的股权人格：控制权、资本观、激励观、时间窗——四个维度，拼出只属于你的类型。</p>' +
      '<div class="mbti-points"><span>🕹 约 3 分钟</span><span>🧭 四轴十六型</span><span>📊 看看老板们都在哪</span></div>' +
      '<p><a class="btn" href="javascript:void(0)" id="startBtn">开始测试 →</a></p>' +
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
    if (key==='C/D') return '控制权倾向';
    if (key==='A/B') return '资本观 / 风险';
    if (key==='K/T') return '激励观';
    return '视野 / 时间窗';
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
      '<p><a class="btn btn--ghost" href="javascript:void(0)" id="checkBtn">返回检查</a></p>' +
      '<p class="mbti-foot-note">提交即表示你同意以匿名方式参与统计（仅记录类型码，不收集个人信息）。</p>';
    app.appendChild(c);
    c.querySelector('#submitBtn').addEventListener('click', startLoading);
    c.querySelector('#checkBtn').addEventListener('click', function(){ step=0; renderQuestion(); });
  }

  // ---------- 步骤4：生成动画 ----------
  var LOAD_STEPS = ['正在读取你的控制权倾向…','正在测算你的资本观…','正在解析你的激励观…','正在定位你的时间窗…','正在生成专属股权人格…'];
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
      barsHTML(type, accent) +
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

  function barsHTML(myType, accent){
    var counts = BASELINE;
    var total = BASELINE_TOTAL;
    var rows = Object.keys(counts).map(function(k){ return {code:k, n:counts[k]}; })
                .sort(function(a,b){ return b.n-a.n; });
    var max = rows[0].n;
    var html = '<div class="bars"><h3>老板们都在哪一类？</h3>' +
      '<p class="bars-note">累计 '+total+' 份样本（示例分布 · 接入数据收集后将显示真实占比）</p>';
    rows.forEach(function(r){
      var w = Math.round(r.n/max*100);
      var me = (r.code===myType) ? ' bar--me' : '';
      html += '<div class="bar-row'+me+'"><span class="bar-code">'+r.code+'</span>' +
        '<span class="bar-track"><span class="bar-fill" style="width:'+w+'%"></span></span>' +
        '<span class="bar-val">'+r.n+'</span></div>';
    });
    html += '</div>';
    return html;
  }

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
