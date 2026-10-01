// Mỗi phần tử trong CHINESE_LESSONS gắn với 1 ngày dương lịch cụ thể (trường `date`, định dạng YYYY-MM-DD).
// Chỉ các ngày từ MIN_DATE (ngày bắt đầu học) trở đi mới được hiển thị/chọn.
const CHINESE_LESSONS = [
  {
    date: "2026-09-28",
    topic: "Giới thiệu bản thân (自我介绍)",
    sentences: [
      {
        zh: "大家好，我叫玲，今年二十五岁。",
        pinyin: "Dàjiā hǎo, wǒ jiào Líng, jīnnián èrshíwǔ suì.",
        vi: "Xin chào mọi người, tôi tên là Linh, năm nay hai mươi lăm tuổi."
      },
      {
        zh: "我来自越南，现在住在胡志明市。",
        pinyin: "Wǒ láizì Yuènán, xiànzài zhù zài Húzhìmíng Shì.",
        vi: "Tôi đến từ Việt Nam, hiện tại đang sống ở Thành phố Hồ Chí Minh."
      },
      {
        zh: "我是一名软件工程师，在一家科技公司工作。",
        pinyin: "Wǒ shì yī míng ruǎnjiàn gōngchéngshī, zài yī jiā kējì gōngsī gōngzuò.",
        vi: "Tôi là một kỹ sư phần mềm, làm việc tại một công ty công nghệ."
      },
      {
        zh: "我平时喜欢看书，也喜欢学习新的语言。",
        pinyin: "Wǒ píngshí xǐhuān kànshū, yě xǐhuān xuéxí xīn de yǔyán.",
        vi: "Bình thường tôi thích đọc sách, và cũng thích học ngôn ngữ mới."
      },
      {
        zh: "很高兴认识你，希望我们能成为好朋友。",
        pinyin: "Hěn gāoxìng rènshi nǐ, xīwàng wǒmen néng chéngwéi hǎo péngyou.",
        vi: "Rất vui được quen biết bạn, hy vọng chúng ta có thể trở thành bạn tốt."
      },
      {
        zh: "我和父母还有妹妹一起住在一个小公寓里。",
        pinyin: "Wǒ hé fùmǔ hái yǒu mèimei yìqǐ zhù zài yí gè xiǎo gōngyù lǐ.",
        vi: "Tôi sống cùng bố mẹ và em gái trong một căn hộ nhỏ."
      },
      {
        zh: "我每天早上很早起床，然后去跑步，跑完再吃早饭。",
        pinyin: "Wǒ měitiān zǎoshang hěn zǎo qǐchuáng, ránhòu qù pǎobù, pǎo wán zài chī zǎofàn.",
        vi: "Mỗi buổi sáng tôi dậy rất sớm, sau đó đi chạy bộ, chạy xong mới ăn sáng."
      },
      {
        zh: "下班以后，我常常和朋友们一起喝咖啡，或者去健身房。",
        pinyin: "Xiàbān yǐhòu, wǒ chángcháng hé péngyoumen yìqǐ hē kāfēi, huòzhě qù jiànshēnfáng.",
        vi: "Sau khi tan làm, tôi thường cùng bạn bè uống cà phê hoặc đi tập gym."
      },
      {
        zh: "我打算明年去日本旅行，了解一下那里的文化。",
        pinyin: "Wǒ dǎsuàn míngnián qù Rìběn lǚxíng, liǎojiě yíxià nàlǐ de wénhuà.",
        vi: "Tôi dự định năm sau đi Nhật Bản du lịch, tìm hiểu một chút về văn hóa nơi đó."
      },
      {
        zh: "总的来说，我觉得自己是一个友好又努力、喜欢挑战的人。",
        pinyin: "Zǒngdeláishuō, wǒ juéde zìjǐ shì yí gè yǒuhǎo yòu nǔlì, xǐhuān tiǎozhàn de rén.",
        vi: "Nhìn chung, tôi thấy mình là một người thân thiện, chăm chỉ và thích thử thách."
      }
    ],
    vocabulary: [
      { word: "大家", pinyin: "dàjiā", type: "n", meaning: "mọi người" },
      { word: "现在", pinyin: "xiànzài", type: "adv", meaning: "hiện tại, bây giờ" },
      { word: "来自", pinyin: "láizì", type: "v", meaning: "đến từ" },
      { word: "软件工程师", pinyin: "ruǎnjiàn gōngchéngshī", type: "n", meaning: "kỹ sư phần mềm" },
      { word: "科技公司", pinyin: "kējì gōngsī", type: "n", meaning: "công ty công nghệ" },
      { word: "平时", pinyin: "píngshí", type: "adv", meaning: "bình thường, thường ngày" },
      { word: "喜欢", pinyin: "xǐhuān", type: "v", meaning: "thích" },
      { word: "认识", pinyin: "rènshi", type: "v", meaning: "quen biết, nhận biết" },
      { word: "朋友", pinyin: "péngyou", type: "n", meaning: "bạn bè" },
      { word: "父母", pinyin: "fùmǔ", type: "n", meaning: "bố mẹ" },
      { word: "公寓", pinyin: "gōngyù", type: "n", meaning: "căn hộ" },
      { word: "起床", pinyin: "qǐchuáng", type: "v", meaning: "thức dậy" },
      { word: "跑步", pinyin: "pǎobù", type: "v", meaning: "chạy bộ" },
      { word: "健身房", pinyin: "jiànshēnfáng", type: "n", meaning: "phòng tập gym" },
      { word: "打算", pinyin: "dǎsuàn", type: "v", meaning: "dự định" },
      { word: "文化", pinyin: "wénhuà", type: "n", meaning: "văn hóa" }
    ],
    grammar: [
      {
        sentence: "大家好，我叫玲，今年二十五岁。",
        explain: "<b>大家好</b> là cách chào phổ biến khi nói với nhiều người. Cấu trúc giới thiệu tên: <b>我叫 + tên</b>. Nói tuổi không cần động từ 'là': <b>今年 + số tuổi + 岁</b>."
      },
      {
        sentence: "我来自越南，现在住在胡志明市。",
        explain: "<b>来自 + nơi chốn</b> nghĩa là 'đến từ'. <b>住在 + địa điểm</b> nghĩa là 'sống ở'. <b>现在</b> (hiện tại) đứng trước động từ để nhấn mạnh thời điểm."
      },
      {
        sentence: "我是一名软件工程师，在一家科技公司工作。",
        explain: "Lượng từ (measure word) <b>一名</b> dùng trước danh từ chỉ người/nghề nghiệp, <b>一家</b> dùng trước danh từ chỉ công ty/cửa hàng. Cấu trúc <b>在 + nơi chốn + 工作</b> nghĩa là 'làm việc tại'."
      },
      {
        sentence: "我平时喜欢看书，也喜欢学习新的语言。",
        explain: "<b>平时</b> (bình thường) là trạng từ chỉ tần suất. Sau động từ <b>喜欢</b> là một động từ khác (không cần dạng như 'to V' hay V-ing như tiếng Anh). Từ <b>也</b> (cũng) dùng để nối hai sở thích."
      },
      {
        sentence: "很高兴认识你，希望我们能成为好朋友。",
        explain: "<b>很高兴认识你</b> là câu chào xã giao thông dụng nghĩa 'rất vui được quen biết bạn'. <b>希望 + mệnh đề</b> diễn tả điều mong muốn. Động từ năng nguyện <b>能</b> (có thể) đứng trước động từ chính <b>成为</b> (trở thành)."
      },
      {
        sentence: "我和父母还有妹妹一起住在一个小公寓里。",
        explain: "<b>和...还有...</b> dùng để liệt kê nhiều người. <b>一起</b> (cùng nhau) đứng trước động từ <b>住</b>. Lượng từ <b>一个</b> đứng trước danh từ <b>公寓</b>, câu kết thúc bằng phương vị từ <b>里</b> (bên trong)."
      },
      {
        sentence: "我每天早上很早起床，然后去跑步，跑完再吃早饭。",
        explain: "<b>每天早上</b> (mỗi buổi sáng) là trạng ngữ chỉ thời gian đứng đầu câu. Liên từ <b>然后</b> (sau đó) và <b>再</b> (rồi mới) dùng để nối các hành động theo đúng trình tự thời gian."
      },
      {
        sentence: "下班以后，我常常和朋友们一起喝咖啡，或者去健身房。",
        explain: "<b>下班以后</b> (sau khi tan làm) là cụm trạng ngữ chỉ thời gian đứng đầu câu. <b>常常</b> (thường xuyên) là trạng từ tần suất. Liên từ <b>或者</b> nối hai lựa chọn hành động."
      },
      {
        sentence: "我打算明年去日本旅行，了解一下那里的文化。",
        explain: "Cấu trúc <b>打算 + động từ</b> diễn tả dự định. Cụm <b>了解一下</b> (tìm hiểu một chút) dùng <b>一下</b> sau động từ để làm nhẹ hành động, giống 'thử làm gì đó một chút'."
      },
      {
        sentence: "总的来说，我觉得自己是一个友好又努力、喜欢挑战的人。",
        explain: "<b>总的来说</b> (nhìn chung) mở đầu câu tổng kết. Cấu trúc <b>觉得 + mệnh đề</b> nghĩa 'cảm thấy/cho rằng'. <b>又...又...</b> hoặc dấu phẩy dùng để liệt kê nhiều tính từ mô tả tính cách trước danh từ <b>人</b>."
      }
    ],
    speaking: [
      {
        cues: "叫 / 岁",
        question: "你叫什么名字？你今年多大？",
        vi: "Bạn tên gì? Năm nay bạn bao nhiêu tuổi?",
        hint: "Dùng cấu trúc <b>我叫...</b> để nói tên, <b>我今年...岁</b> để nói tuổi."
      },
      {
        cues: "来自 / 住",
        question: "你来自哪里？现在住在哪儿？",
        vi: "Bạn đến từ đâu? Hiện đang sống ở đâu?",
        hint: "Dùng <b>我来自...</b> chỉ quê quán, <b>我现在住在...</b> chỉ nơi ở hiện tại."
      },
      {
        cues: "工作 / 做什么",
        question: "你做什么工作？",
        vi: "Bạn làm công việc gì?",
        hint: "Dùng cấu trúc <b>我是一名 + nghề nghiệp</b>, hoặc <b>我在...工作</b>."
      },
      {
        cues: "平时 / 喜欢",
        question: "你平时喜欢做什么？",
        vi: "Bình thường bạn thích làm gì?",
        hint: "Dùng <b>我平时喜欢 + động từ</b>, có thể nối hai hoạt động bằng <b>也</b>."
      },
      {
        cues: "早上 / 以后",
        question: "你每天早上做什么？下班以后呢？",
        vi: "Mỗi sáng bạn làm gì? Sau khi tan làm thì sao?",
        hint: "Dùng <b>然后...再...</b> để nối các hành động theo trình tự thời gian."
      },
      {
        cues: "父母 / 妹妹",
        question: "你和谁一起住？",
        vi: "Bạn sống cùng ai?",
        hint: "Dùng <b>我和...一起住在...</b> để nói về người sống cùng."
      },
      {
        cues: "打算 / 旅行",
        question: "你打算去哪里旅行？为什么？",
        vi: "Bạn dự định đi du lịch ở đâu? Vì sao?",
        hint: "Dùng <b>我打算 + động từ</b> để nói dự định, thêm <b>了解一下...文化</b> để nêu lý do."
      },
      {
        cues: "觉得 / 自己",
        question: "你觉得自己是一个什么样的人？",
        vi: "Bạn thấy mình là người như thế nào?",
        hint: "Dùng <b>我觉得自己是一个...的人</b> kèm tính từ mô tả tính cách."
      }
    ]
  },
  {
    date: "2026-09-29",
    topic: "Gia đình (家庭)",
    sentences: [
      {
        zh: "我家一共有五口人：爸爸、妈妈、哥哥、姐姐和我。",
        pinyin: "Wǒ jiā yígòng yǒu wǔ kǒu rén: bàba, māma, gēge, jiějie hé wǒ.",
        vi: "Nhà tôi tổng cộng có năm người: bố, mẹ, anh trai, chị gái và tôi."
      },
      {
        zh: "我爸爸是医生，在医院工作，每天都很忙。",
        pinyin: "Wǒ bàba shì yīshēng, zài yīyuàn gōngzuò, měitiān dōu hěn máng.",
        vi: "Bố tôi là bác sĩ, làm việc ở bệnh viện, ngày nào cũng rất bận."
      },
      {
        zh: "我妈妈是小学老师，她教学生画画和唱歌。",
        pinyin: "Wǒ māma shì xiǎoxué lǎoshī, tā jiāo xuésheng huàhuà hé chànggē.",
        vi: "Mẹ tôi là giáo viên tiểu học, cô ấy dạy học sinh vẽ tranh và hát."
      },
      {
        zh: "我哥哥比我大三岁，他在银行工作。",
        pinyin: "Wǒ gēge bǐ wǒ dà sān suì, tā zài yínháng gōngzuò.",
        vi: "Anh trai tôi lớn hơn tôi ba tuổi, anh ấy làm việc ở ngân hàng."
      },
      {
        zh: "我姐姐还在读大学，她的专业是经济学。",
        pinyin: "Wǒ jiějie hái zài dú dàxué, tā de zhuānyè shì jīngjìxué.",
        vi: "Chị gái tôi vẫn đang học đại học, chuyên ngành của chị ấy là kinh tế học."
      },
      {
        zh: "我们家客厅里挂着很多全家福照片。",
        pinyin: "Wǒmen jiā kètīng lǐ guà zhe hěn duō quánjiāfú zhàopiàn.",
        vi: "Trong phòng khách nhà tôi treo rất nhiều ảnh chụp cả gia đình."
      },
      {
        zh: "每个星期日，全家人都会一起吃晚饭。",
        pinyin: "Měi gè xīngqīrì, quán jiā rén dōu huì yìqǐ chī wǎnfàn.",
        vi: "Mỗi Chủ nhật, cả nhà đều cùng nhau ăn tối."
      },
      {
        zh: "吃完饭以后，我们常常一边喝茶，一边聊天。",
        pinyin: "Chī wán fàn yǐhòu, wǒmen chángcháng yìbiān hē chá, yìbiān liáotiān.",
        vi: "Sau khi ăn xong, chúng tôi thường vừa uống trà vừa trò chuyện."
      },
      {
        zh: "春节的时候，我们全家都回奶奶家过年。",
        pinyin: "Chūnjié de shíhou, wǒmen quán jiā dōu huí nǎinai jiā guònián.",
        vi: "Vào dịp Tết, cả nhà tôi đều về nhà bà nội để đón năm mới."
      },
      {
        zh: "我很爱我的家人，他们对我来说非常重要。",
        pinyin: "Wǒ hěn ài wǒ de jiārén, tāmen duì wǒ lái shuō fēicháng zhòngyào.",
        vi: "Tôi rất yêu gia đình mình, họ vô cùng quan trọng đối với tôi."
      }
    ],
    vocabulary: [
      { word: "一共", pinyin: "yígòng", type: "adv", meaning: "tổng cộng" },
      { word: "口", pinyin: "kǒu", type: "m", meaning: "lượng từ đếm người trong nhà" },
      { word: "医生", pinyin: "yīshēng", type: "n", meaning: "bác sĩ" },
      { word: "医院", pinyin: "yīyuàn", type: "n", meaning: "bệnh viện" },
      { word: "教", pinyin: "jiāo", type: "v", meaning: "dạy" },
      { word: "比", pinyin: "bǐ", type: "prep", meaning: "so với" },
      { word: "银行", pinyin: "yínháng", type: "n", meaning: "ngân hàng" },
      { word: "专业", pinyin: "zhuānyè", type: "n", meaning: "chuyên ngành" },
      { word: "客厅", pinyin: "kètīng", type: "n", meaning: "phòng khách" },
      { word: "挂", pinyin: "guà", type: "v", meaning: "treo" },
      { word: "全家福", pinyin: "quánjiāfú", type: "n", meaning: "ảnh chụp cả gia đình" },
      { word: "一边...一边...", pinyin: "yìbiān...yìbiān...", type: "phrase", meaning: "vừa...vừa..." },
      { word: "聊天", pinyin: "liáotiān", type: "v", meaning: "trò chuyện" },
      { word: "春节", pinyin: "chūnjié", type: "n", meaning: "Tết Nguyên đán" },
      { word: "过年", pinyin: "guònián", type: "v", meaning: "đón năm mới, ăn Tết" },
      { word: "重要", pinyin: "zhòngyào", type: "adj", meaning: "quan trọng" }
    ],
    grammar: [
      {
        sentence: "我家一共有五口人：爸爸、妈妈、哥哥、姐姐和我。",
        explain: "Cấu trúc tồn tại <b>有 + số lượng + 量词 + danh từ</b> dùng để nói 'có bao nhiêu người/vật'. Lượng từ <b>口</b> chuyên dùng để đếm số người trong một gia đình. <b>一共</b> (tổng cộng) đứng trước <b>有</b> để nhấn mạnh tổng số."
      },
      {
        sentence: "我爸爸是医生，在医院工作，每天都很忙。",
        explain: "<b>是 + nghề nghiệp</b> giới thiệu nghề nghiệp. <b>在 + nơi chốn + 工作</b> nghĩa là 'làm việc tại'. <b>每天都</b> + tính từ nhấn mạnh một trạng thái diễn ra đều đặn mỗi ngày."
      },
      {
        sentence: "我妈妈是小学老师，她教学生画画和唱歌。",
        explain: "Động từ <b>教</b> có thể mang hai tân ngữ liên tiếp: <b>教 + người + việc</b> (dạy ai việc gì). Hai hoạt động <b>画画</b> và <b>唱歌</b> được nối bằng <b>和</b>."
      },
      {
        sentence: "我哥哥比我大三岁，他在银行工作。",
        explain: "Cấu trúc so sánh <b>A + 比 + B + tính từ (+ mức chênh lệch)</b>: <b>比我大三岁</b> nghĩa là 'lớn hơn tôi ba tuổi'. Mức chênh lệch (三岁) đặt sau tính từ <b>大</b>."
      },
      {
        sentence: "我姐姐还在读大学，她的专业是经济学。",
        explain: "<b>还在 + động từ</b> diễn tả một hành động vẫn đang tiếp diễn ('vẫn đang'). Trợ từ <b>的</b> nối <b>她</b> với danh từ <b>专业</b> để chỉ sự sở hữu."
      },
      {
        sentence: "我们家客厅里挂着很多全家福照片。",
        explain: "Câu tồn tại kiểu <b>nơi chốn + 里 + động từ着 + tân ngữ</b> miêu tả vật gì đang ở trạng thái tồn tại tại một nơi. Trợ từ <b>着</b> sau động từ <b>挂</b> diễn tả trạng thái được duy trì (đang treo)."
      },
      {
        sentence: "每个星期日，全家人都会一起吃晚饭。",
        explain: "Cụm <b>每个 + danh từ thời gian</b> đứng đầu câu làm trạng ngữ, kết hợp với <b>都会</b> diễn tả một thói quen luôn lặp lại. <b>一起</b> (cùng nhau) đứng trước động từ chính."
      },
      {
        sentence: "吃完饭以后，我们常常一边喝茶，一边聊天。",
        explain: "Bổ ngữ kết quả <b>完</b> sau động từ <b>吃</b> cho biết hành động ăn đã hoàn tất, kết hợp với <b>...以后</b> nghĩa 'sau khi'. Cấu trúc <b>一边...一边...</b> diễn tả hai hành động xảy ra đồng thời."
      },
      {
        sentence: "春节的时候，我们全家都回奶奶家过年。",
        explain: "<b>...的时候</b> chỉ thời điểm 'vào lúc/khi'. Cấu trúc <b>回 + nơi chốn + động từ mục đích</b> (回奶奶家过年) diễn tả quay về đâu để làm gì."
      },
      {
        sentence: "我很爱我的家人，他们对我来说非常重要。",
        explain: "Cụm <b>对...来说</b> nghĩa 'đối với... mà nói', dùng để nêu quan điểm/cảm nhận của ai đó về một điều gì. Đứng trước tính từ vị ngữ <b>重要</b>."
      }
    ],
    speaking: [
      {
        cues: "家 / 口人",
        question: "你家一共有几口人？",
        vi: "Nhà bạn tổng cộng có mấy người?",
        hint: "Dùng cấu trúc <b>我家一共有...口人</b>."
      },
      {
        cues: "爸爸 / 工作",
        question: "你爸爸做什么工作？",
        vi: "Bố bạn làm công việc gì?",
        hint: "Dùng <b>我爸爸是...</b> hoặc <b>他在...工作</b>."
      },
      {
        cues: "妈妈 / 老师",
        question: "你妈妈是做什么的？",
        vi: "Mẹ bạn làm nghề gì?",
        hint: "Dùng <b>我妈妈是...</b> để giới thiệu nghề nghiệp."
      },
      {
        cues: "比 / 岁",
        question: "你哥哥或姐姐比你大几岁？",
        vi: "Anh trai hoặc chị gái bạn lớn hơn bạn mấy tuổi?",
        hint: "Dùng cấu trúc so sánh <b>比...大/小 + số + 岁</b>."
      },
      {
        cues: "客厅 / 挂着",
        question: "你家客厅里挂着什么？",
        vi: "Trong phòng khách nhà bạn treo gì?",
        hint: "Dùng câu tồn tại <b>...里挂着...</b>."
      },
      {
        cues: "星期日 / 一起",
        question: "你们家星期日通常做什么？",
        vi: "Nhà bạn Chủ nhật thường làm gì?",
        hint: "Dùng <b>每个星期日，我们都会...</b>."
      },
      {
        cues: "父母 / 妹妹",
        question: "吃完饭以后你们家常常做什么？",
        vi: "Sau khi ăn xong, nhà bạn thường làm gì?",
        hint: "Dùng cấu trúc <b>一边...一边...</b> để nói hai việc cùng lúc."
      },
      {
        cues: "春节 / 过年",
        question: "春节的时候你们家做什么？",
        vi: "Vào dịp Tết, nhà bạn làm gì?",
        hint: "Dùng <b>春节的时候，我们...</b>."
      }
    ]
  },
  {
    date: "2026-09-30",
    topic: "Đồ ăn & Nhà hàng (饮食与餐厅)",
    sentences: [
      {
        zh: "我很喜欢吃中国菜，特别是四川菜。",
        pinyin: "Wǒ hěn xǐhuān chī Zhōngguó cài, tèbié shì Sìchuān cài.",
        vi: "Tôi rất thích ăn món Trung Quốc, đặc biệt là món Tứ Xuyên."
      },
      {
        zh: "四川菜又辣又香，我每次吃都觉得很过瘾。",
        pinyin: "Sìchuān cài yòu là yòu xiāng, wǒ měi cì chī dōu juéde hěn guòyǐn.",
        vi: "Món Tứ Xuyên vừa cay vừa thơm, mỗi lần ăn tôi đều thấy rất đã."
      },
      {
        zh: "昨天晚上，我和朋友一起去了一家新开的餐厅。",
        pinyin: "Zuótiān wǎnshang, wǒ hé péngyou yìqǐ qùle yì jiā xīn kāi de cāntīng.",
        vi: "Tối hôm qua, tôi cùng bạn đến một nhà hàng mới mở."
      },
      {
        zh: "服务员先给我们一份菜单，然后问我们要喝什么。",
        pinyin: "Fúwùyuán xiān gěi wǒmen yí fèn càidān, ránhòu wèn wǒmen yào hē shénme.",
        vi: "Nhân viên phục vụ đưa cho chúng tôi thực đơn trước, sau đó hỏi chúng tôi muốn uống gì."
      },
      {
        zh: "我点了一份麻婆豆腐和一碗米饭。",
        pinyin: "Wǒ diǎnle yí fèn mápó dòufu hé yì wǎn mǐfàn.",
        vi: "Tôi gọi một phần đậu phụ Ma Bà và một bát cơm."
      },
      {
        zh: "我朋友点的鱼比我点的菜贵一点儿。",
        pinyin: "Wǒ péngyou diǎn de yú bǐ wǒ diǎn de cài guì yìdiǎnr.",
        vi: "Món cá bạn tôi gọi đắt hơn món tôi gọi một chút."
      },
      {
        zh: "菜上得很快，味道也做得非常好吃。",
        pinyin: "Cài shàng de hěn kuài, wèidào yě zuò de fēicháng hǎochī.",
        vi: "Món ăn được mang lên rất nhanh, hương vị cũng được nấu rất ngon."
      },
      {
        zh: "吃饭的时候，我们一边吃一边聊最近发生的事情。",
        pinyin: "Chīfàn de shíhou, wǒmen yìbiān chī yìbiān liáo zuìjìn fāshēng de shìqing.",
        vi: "Trong lúc ăn, chúng tôi vừa ăn vừa nói chuyện về những việc gần đây."
      },
      {
        zh: "吃完以后，我们叫服务员买单，一共花了两百块钱。",
        pinyin: "Chī wán yǐhòu, wǒmen jiào fúwùyuán mǎidān, yígòng huāle liǎngbǎi kuài qián.",
        vi: "Ăn xong, chúng tôi gọi nhân viên tính tiền, tổng cộng hết hai trăm tệ."
      },
      {
        zh: "那家餐厅的菜真的很不错，我下次还想再去。",
        pinyin: "Nà jiā cāntīng de cài zhēn de hěn búcuò, wǒ xiàcì hái xiǎng zài qù.",
        vi: "Món ăn của nhà hàng đó thực sự rất ngon, lần sau tôi vẫn muốn đến lại."
      }
    ],
    vocabulary: [
      { word: "中国菜", pinyin: "Zhōngguó cài", type: "n", meaning: "món ăn Trung Quốc" },
      { word: "特别是", pinyin: "tèbié shì", type: "phrase", meaning: "đặc biệt là" },
      { word: "辣", pinyin: "là", type: "adj", meaning: "cay" },
      { word: "香", pinyin: "xiāng", type: "adj", meaning: "thơm" },
      { word: "过瘾", pinyin: "guòyǐn", type: "adj", meaning: "đã, sướng miệng (thỏa mãn)" },
      { word: "餐厅", pinyin: "cāntīng", type: "n", meaning: "nhà hàng" },
      { word: "服务员", pinyin: "fúwùyuán", type: "n", meaning: "nhân viên phục vụ" },
      { word: "菜单", pinyin: "càidān", type: "n", meaning: "thực đơn" },
      { word: "点", pinyin: "diǎn", type: "v", meaning: "gọi (món ăn)" },
      { word: "碗", pinyin: "wǎn", type: "m", meaning: "bát (lượng từ)" },
      { word: "味道", pinyin: "wèidào", type: "n", meaning: "hương vị" },
      { word: "聊", pinyin: "liáo", type: "v", meaning: "trò chuyện, tán gẫu" },
      { word: "买单", pinyin: "mǎidān", type: "v", meaning: "thanh toán, tính tiền" },
      { word: "花", pinyin: "huā", type: "v", meaning: "tiêu, chi (tiền)" },
      { word: "不错", pinyin: "búcuò", type: "adj", meaning: "khá tốt, không tệ" }
    ],
    grammar: [
      {
        sentence: "我很喜欢吃中国菜，特别是四川菜。",
        explain: "<b>特别是</b> dùng để nhấn mạnh một trường hợp cụ thể trong nhóm chung vừa nêu, tương tự 'đặc biệt là'."
      },
      {
        sentence: "四川菜又辣又香，我每次吃都觉得很过瘾。",
        explain: "Cấu trúc <b>又...又...</b> liệt kê đồng thời hai đặc điểm của cùng một sự vật. <b>每次...都...</b> nghĩa 'mỗi lần đều'."
      },
      {
        sentence: "昨天晚上，我和朋友一起去了一家新开的餐厅。",
        explain: "Trợ từ <b>了</b> sau động từ <b>去</b> đánh dấu hành động đã hoàn thành. Định ngữ <b>新开的</b> + <b>的</b> bổ nghĩa cho danh từ <b>餐厅</b> phía sau."
      },
      {
        sentence: "服务员先给我们一份菜单，然后问我们要喝什么。",
        explain: "<b>先...然后...</b> diễn tả trình tự hành động 'trước tiên... sau đó...'. Động từ <b>给</b> mang hai tân ngữ: <b>给 + người + vật</b>."
      },
      {
        sentence: "我点了一份麻婆豆腐和一碗米饭。",
        explain: "Các lượng từ khác nhau đi với các món ăn khác nhau: <b>一份</b> cho món ăn theo phần, <b>一碗</b> cho món đựng trong bát. <b>点了</b> dùng <b>了</b> vì hành động đã hoàn tất."
      },
      {
        sentence: "我朋友点的鱼比我点的菜贵一点儿。",
        explain: "Cấu trúc so sánh <b>A + 比 + B + tính từ + 一点儿</b>: <b>一点儿</b> đặt sau tính từ để diễn tả mức chênh lệch nhỏ ('đắt hơn một chút')."
      },
      {
        sentence: "菜上得很快，味道也做得非常好吃。",
        explain: "Bổ ngữ trình độ <b>得</b> đứng sau động từ (<b>上得</b>, <b>做得</b>) rồi theo sau là tính từ/trạng từ miêu tả mức độ hoặc cách thức của hành động."
      },
      {
        sentence: "吃饭的时候，我们一边吃一边聊最近发生的事情。",
        explain: "<b>...的时候</b> chỉ thời điểm diễn ra hành động. <b>一边...一边...</b> lặp lại cấu trúc diễn tả hai hành động cùng lúc."
      },
      {
        sentence: "吃完以后，我们叫服务员买单，一共花了两百块钱。",
        explain: "Bổ ngữ kết quả <b>完</b> sau <b>吃</b> cho biết hành động ăn đã xong. <b>叫 + người + động từ</b> nghĩa 'nhờ/gọi ai làm gì'. <b>花了 + số tiền</b> diễn tả đã tiêu bao nhiêu."
      },
      {
        sentence: "那家餐厅的菜真的很不错，我下次还想再去。",
        explain: "Cụm <b>还想再 + động từ</b> diễn tả mong muốn lặp lại một hành động trong tương lai ('vẫn muốn... lần nữa')."
      }
    ],
    speaking: [
      {
        cues: "喜欢 / 菜",
        question: "你喜欢吃什么样的菜？",
        vi: "Bạn thích ăn món kiểu gì?",
        hint: "Dùng <b>我喜欢吃...，特别是...</b>."
      },
      {
        cues: "又...又...",
        question: "你最喜欢的菜味道怎么样？",
        vi: "Món bạn thích nhất có vị như thế nào?",
        hint: "Dùng <b>又...又...</b> để miêu tả hai đặc điểm cùng lúc."
      },
      {
        cues: "餐厅 / 去了",
        question: "你上次去餐厅是什么时候？和谁一起去的？",
        vi: "Lần trước bạn đi nhà hàng là khi nào? Đi cùng ai?",
        hint: "Dùng <b>我和...一起去了...</b>."
      },
      {
        cues: "点 / 菜单",
        question: "你一般会点什么菜？",
        vi: "Bạn thường gọi món gì?",
        hint: "Dùng <b>我点了一份/一碗...</b>."
      },
      {
        cues: "比 / 贵",
        question: "你点的菜和朋友点的菜，哪个更贵？",
        vi: "Món bạn gọi và món bạn của bạn gọi, món nào đắt hơn?",
        hint: "Dùng cấu trúc so sánh <b>A比B贵/便宜(一点儿)</b>."
      },
      {
        cues: "味道 / 好吃",
        question: "那家餐厅的菜味道怎么样？",
        vi: "Món ăn của nhà hàng đó vị thế nào?",
        hint: "Dùng bổ ngữ trình độ <b>做得/上得 + 很 + tính từ</b>."
      },
      {
        cues: "买单 / 花了",
        question: "你们一共花了多少钱？",
        vi: "Các bạn tổng cộng tiêu hết bao nhiêu tiền?",
        hint: "Dùng <b>一共花了...钱</b>."
      },
      {
        cues: "下次 / 再",
        question: "你下次还想再去那家餐厅吗？为什么？",
        vi: "Lần sau bạn có muốn quay lại nhà hàng đó không? Vì sao?",
        hint: "Dùng <b>我下次还想再去...，因为...</b>."
      }
    ]
  },
  {
    date: "2026-10-01",
    topic: "Thời tiết & Các mùa (天气与季节)",
    sentences: [
      {
        zh: "越南的天气跟中国不太一样，一年四季分得不太清楚。",
        pinyin: "Yuènán de tiānqì gēn Zhōngguó bú tài yíyàng, yì nián sìjì fēn de bú tài qīngchu.",
        vi: "Thời tiết Việt Nam không giống Trung Quốc lắm, bốn mùa trong năm không phân chia rõ ràng lắm."
      },
      {
        zh: "不过在北方，春夏秋冬还是很明显的。",
        pinyin: "Búguò zài běifāng, chūn xià qiū dōng háishi hěn míngxiǎn de.",
        vi: "Tuy nhiên ở miền Bắc, xuân hạ thu đông vẫn khá rõ rệt."
      },
      {
        zh: "春天的时候常常下雨，天气不冷也不热。",
        pinyin: "Chūntiān de shíhou chángcháng xiàyǔ, tiānqì bù lěng yě bú rè.",
        vi: "Vào mùa xuân trời thường mưa, thời tiết không lạnh cũng không nóng."
      },
      {
        zh: "夏天非常热，有时候一天比一天热。",
        pinyin: "Xiàtiān fēicháng rè, yǒu shíhou yì tiān bǐ yì tiān rè.",
        vi: "Mùa hè rất nóng, có lúc ngày này nóng hơn ngày kia."
      },
      {
        zh: "秋天最舒服，天气凉爽，天空也特别蓝。",
        pinyin: "Qiūtiān zuì shūfu, tiānqì liángshuǎng, tiānkōng yě tèbié lán.",
        vi: "Mùa thu dễ chịu nhất, thời tiết mát mẻ, bầu trời cũng đặc biệt xanh."
      },
      {
        zh: "冬天气温会降到十度左右，需要穿厚衣服。",
        pinyin: "Dōngtiān qìwēn huì jiàng dào shí dù zuǒyòu, xūyào chuān hòu yīfu.",
        vi: "Mùa đông nhiệt độ có thể giảm xuống khoảng mười độ, cần mặc quần áo dày."
      },
      {
        zh: "在四个季节里，我最喜欢秋天，因为不冷也不热。",
        pinyin: "Zài sì gè jìjié lǐ, wǒ zuì xǐhuān qiūtiān, yīnwèi bù lěng yě bú rè.",
        vi: "Trong bốn mùa, tôi thích mùa thu nhất, vì không lạnh cũng không nóng."
      },
      {
        zh: "每次秋天到了，我都喜欢出去拍照、散步。",
        pinyin: "Měi cì qiūtiān dàole, wǒ dōu xǐhuān chūqù pāizhào, sànbù.",
        vi: "Mỗi lần mùa thu đến, tôi đều thích ra ngoài chụp ảnh, đi dạo."
      },
      {
        zh: "出门以前，我一定会先看一下天气预报。",
        pinyin: "Chūmén yǐqián, wǒ yídìng huì xiān kàn yíxià tiānqì yùbào.",
        vi: "Trước khi ra ngoài, tôi nhất định sẽ xem dự báo thời tiết trước."
      },
      {
        zh: "如果天气突然变化，我就会带一把伞出门。",
        pinyin: "Rúguǒ tiānqì tūrán biànhuà, wǒ jiù huì dài yì bǎ sǎn chūmén.",
        vi: "Nếu thời tiết đột nhiên thay đổi, tôi sẽ mang theo một chiếc ô khi ra ngoài."
      }
    ],
    vocabulary: [
      { word: "天气", pinyin: "tiānqì", type: "n", meaning: "thời tiết" },
      { word: "四季", pinyin: "sìjì", type: "n", meaning: "bốn mùa" },
      { word: "春天", pinyin: "chūntiān", type: "n", meaning: "mùa xuân" },
      { word: "夏天", pinyin: "xiàtiān", type: "n", meaning: "mùa hè" },
      { word: "秋天", pinyin: "qiūtiān", type: "n", meaning: "mùa thu" },
      { word: "冬天", pinyin: "dōngtiān", type: "n", meaning: "mùa đông" },
      { word: "下雨", pinyin: "xiàyǔ", type: "v", meaning: "mưa, trời mưa" },
      { word: "凉爽", pinyin: "liángshuǎng", type: "adj", meaning: "mát mẻ" },
      { word: "气温", pinyin: "qìwēn", type: "n", meaning: "nhiệt độ (không khí)" },
      { word: "降", pinyin: "jiàng", type: "v", meaning: "giảm, hạ xuống" },
      { word: "度", pinyin: "dù", type: "m", meaning: "độ (đơn vị nhiệt độ)" },
      { word: "季节", pinyin: "jìjié", type: "n", meaning: "mùa, mùa trong năm" },
      { word: "天气预报", pinyin: "tiānqì yùbào", type: "n", meaning: "dự báo thời tiết" },
      { word: "变化", pinyin: "biànhuà", type: "v", meaning: "thay đổi, biến đổi" },
      { word: "把", pinyin: "bǎ", type: "m", meaning: "lượng từ (cho ô, dao, ghế...)" },
      { word: "伞", pinyin: "sǎn", type: "n", meaning: "ô, dù" }
    ],
    grammar: [
      {
        sentence: "越南的天气跟中国不太一样，一年四季分得不太清楚。",
        explain: "Cấu trúc so sánh <b>跟...(不)一样</b> dùng để nói hai đối tượng giống hay khác nhau. Bổ ngữ trình độ <b>得</b> sau <b>分</b> miêu tả mức độ của việc phân chia."
      },
      {
        sentence: "不过在北方，春夏秋冬还是很明显的。",
        explain: "<b>不过</b> là liên từ chuyển ý, nghĩa 'tuy nhiên'. <b>还是</b> (vẫn) nhấn mạnh một đặc điểm vẫn tồn tại dù có sự khác biệt vừa nêu."
      },
      {
        sentence: "春天的时候常常下雨，天气不冷也不热。",
        explain: "<b>...的时候</b> chỉ thời điểm. Cấu trúc phủ định kép <b>不...也不...</b> nghĩa 'không...cũng không...', diễn tả mức độ vừa phải."
      },
      {
        sentence: "夏天非常热，有时候一天比一天热。",
        explain: "Cấu trúc <b>一 + lượng từ + 比 + 一 + lượng từ + tính từ</b> (ví dụ <b>一天比一天热</b>) diễn tả mức độ tăng dần theo thời gian, nghĩa 'ngày càng...'."
      },
      {
        sentence: "秋天最舒服，天气凉爽，天空也特别蓝。",
        explain: "Trạng từ <b>最</b> đứng trước tính từ để diễn tả mức độ cao nhất (so sánh hơn nhất), tương đương 'nhất' trong tiếng Việt."
      },
      {
        sentence: "冬天气温会降到十度左右，需要穿厚衣服。",
        explain: "Bổ ngữ kết quả <b>到</b> sau động từ <b>降</b> cho biết kết quả đạt đến mức nào. <b>左右</b> đặt sau số từ diễn tả 'khoảng chừng'."
      },
      {
        sentence: "在四个季节里，我最喜欢秋天，因为不冷也不热。",
        explain: "Cụm <b>在...里</b> chỉ phạm vi ('trong số...'). Liên từ <b>因为</b> dùng để nêu lý do cho lựa chọn vừa nói."
      },
      {
        sentence: "每次秋天到了，我都喜欢出去拍照、散步。",
        explain: "<b>每次...都...</b> nghĩa 'mỗi lần đều'. Bổ ngữ xu hướng <b>出去</b> sau động từ chính diễn tả hướng ra ngoài của hành động."
      },
      {
        sentence: "出门以前，我一定会先看一下天气预报。",
        explain: "<b>...以前</b> nghĩa 'trước khi'. <b>一定会</b> diễn tả sự chắc chắn sẽ xảy ra trong tương lai. <b>一下</b> sau động từ làm nhẹ hành động."
      },
      {
        sentence: "如果天气突然变化，我就会带一把伞出门。",
        explain: "Cấu trúc điều kiện <b>如果...就...</b> nghĩa 'nếu...thì...'. Lượng từ <b>把</b> dùng cho các vật có cán/tay cầm như <b>伞</b>."
      }
    ],
    speaking: [
      {
        cues: "天气 / 一样",
        question: "你们那里的天气跟中国一样吗？",
        vi: "Thời tiết chỗ bạn có giống Trung Quốc không?",
        hint: "Dùng <b>跟...(不)一样</b> để so sánh."
      },
      {
        cues: "春天 / 下雨",
        question: "你们那里春天天气怎么样？",
        vi: "Thời tiết mùa xuân chỗ bạn thế nào?",
        hint: "Dùng <b>不...也不...</b> để miêu tả mức độ vừa phải."
      },
      {
        cues: "夏天 / 热",
        question: "你们那里夏天热不热？",
        vi: "Mùa hè chỗ bạn có nóng không?",
        hint: "Dùng <b>一天比一天...</b> để diễn tả mức độ tăng dần."
      },
      {
        cues: "最 / 喜欢 / 季节",
        question: "你最喜欢哪个季节？为什么？",
        vi: "Bạn thích mùa nào nhất? Vì sao?",
        hint: "Dùng <b>我最喜欢...，因为...</b>."
      },
      {
        cues: "冬天 / 度",
        question: "冬天气温会降到多少度？",
        vi: "Mùa đông nhiệt độ giảm xuống bao nhiêu độ?",
        hint: "Dùng <b>气温会降到...度左右</b>."
      },
      {
        cues: "出去 / 拍照",
        question: "天气好的时候你喜欢做什么？",
        vi: "Khi trời đẹp bạn thích làm gì?",
        hint: "Dùng bổ ngữ xu hướng <b>出去 + động từ</b>."
      },
      {
        cues: "天气预报 / 以前",
        question: "出门以前你会看天气预报吗？",
        vi: "Trước khi ra ngoài bạn có xem dự báo thời tiết không?",
        hint: "Dùng <b>...以前，我(不)会先...</b>."
      },
      {
        cues: "如果 / 就",
        question: "如果天气突然变化，你会怎么做？",
        vi: "Nếu thời tiết đột nhiên thay đổi, bạn sẽ làm gì?",
        hint: "Dùng cấu trúc điều kiện <b>如果...就...</b>."
      }
    ]
  },
  {
    date: "2026-10-02",
    topic: "Mua sắm (购物)",
    sentences: [
      {
        zh: "我平时不太爱逛街，但是每个月都会去超市买东西。",
        pinyin: "Wǒ píngshí bú tài ài guàngjiē, dànshì měi gè yuè dōu huì qù chāoshì mǎi dōngxi.",
        vi: "Bình thường tôi không thích đi dạo phố mua sắm lắm, nhưng mỗi tháng đều đi siêu thị mua đồ."
      },
      {
        zh: "上个周末，我去商场给自己买了一件新衣服。",
        pinyin: "Shàng gè zhōumò, wǒ qù shāngchǎng gěi zìjǐ mǎile yí jiàn xīn yīfu.",
        vi: "Cuối tuần trước, tôi đến trung tâm thương mại mua cho mình một chiếc áo mới."
      },
      {
        zh: "那件衣服的颜色很好看，可是尺码有点儿小。",
        pinyin: "Nà jiàn yīfu de yánsè hěn hǎokàn, kěshì chǐmǎ yǒudiǎnr xiǎo.",
        vi: "Màu của chiếc áo đó rất đẹp, nhưng cỡ hơi nhỏ một chút."
      },
      {
        zh: "售货员帮我换了一件大一号的。",
        pinyin: "Shòuhuòyuán bāng wǒ huànle yí jiàn dà yí hào de.",
        vi: "Nhân viên bán hàng giúp tôi đổi lấy một chiếc lớn hơn một cỡ."
      },
      {
        zh: "后来，我又去旁边的市场买水果和蔬菜。",
        pinyin: "Hòulái, wǒ yòu qù pángbiān de shìchǎng mǎi shuǐguǒ hé shūcài.",
        vi: "Sau đó, tôi lại đến khu chợ bên cạnh mua hoa quả và rau củ."
      },
      {
        zh: "在市场买东西的时候，有时候可以跟老板讲价。",
        pinyin: "Zài shìchǎng mǎi dōngxi de shíhou, yǒu shíhou kěyǐ gēn lǎobǎn jiǎngjià.",
        vi: "Khi mua đồ ở chợ, đôi khi có thể mặc cả với người bán."
      },
      {
        zh: "我问老板：“这个可以便宜一点儿吗？”",
        pinyin: "Wǒ wèn lǎobǎn: “Zhège kěyǐ piányi yìdiǎnr ma?”",
        vi: "Tôi hỏi người bán: “Cái này có thể rẻ hơn một chút không?”"
      },
      {
        zh: "老板笑着说可以，最后便宜了五块钱。",
        pinyin: "Lǎobǎn xiàozhe shuō kěyǐ, zuìhòu piányile wǔ kuài qián.",
        vi: "Người bán cười nói được, cuối cùng bớt cho năm tệ."
      },
      {
        zh: "网上购物比去商场方便，可是我更喜欢试穿以后再买。",
        pinyin: "Wǎngshàng gòuwù bǐ qù shāngchǎng fāngbiàn, kěshì wǒ gèng xǐhuān shìchuān yǐhòu zài mǎi.",
        vi: "Mua sắm trực tuyến tiện hơn đến trung tâm thương mại, nhưng tôi thích thử đồ xong rồi mới mua hơn."
      },
      {
        zh: "这次购物我买到了自己喜欢的东西，觉得特别开心。",
        pinyin: "Zhè cì gòuwù wǒ mǎidàole zìjǐ xǐhuān de dōngxi, juéde tèbié kāixīn.",
        vi: "Lần mua sắm này tôi đã mua được món đồ mình thích, cảm thấy rất vui."
      }
    ],
    vocabulary: [
      { word: "逛街", pinyin: "guàngjiē", type: "v", meaning: "đi dạo phố (mua sắm)" },
      { word: "超市", pinyin: "chāoshì", type: "n", meaning: "siêu thị" },
      { word: "商场", pinyin: "shāngchǎng", type: "n", meaning: "trung tâm thương mại" },
      { word: "颜色", pinyin: "yánsè", type: "n", meaning: "màu sắc" },
      { word: "尺码", pinyin: "chǐmǎ", type: "n", meaning: "cỡ, kích cỡ" },
      { word: "售货员", pinyin: "shòuhuòyuán", type: "n", meaning: "nhân viên bán hàng" },
      { word: "换", pinyin: "huàn", type: "v", meaning: "đổi" },
      { word: "市场", pinyin: "shìchǎng", type: "n", meaning: "chợ" },
      { word: "蔬菜", pinyin: "shūcài", type: "n", meaning: "rau củ" },
      { word: "讲价", pinyin: "jiǎngjià", type: "v", meaning: "mặc cả, trả giá" },
      { word: "老板", pinyin: "lǎobǎn", type: "n", meaning: "chủ cửa hàng, ông chủ" },
      { word: "便宜", pinyin: "piányi", type: "adj", meaning: "rẻ" },
      { word: "网上购物", pinyin: "wǎngshàng gòuwù", type: "n", meaning: "mua sắm trực tuyến" },
      { word: "方便", pinyin: "fāngbiàn", type: "adj", meaning: "tiện lợi" },
      { word: "试穿", pinyin: "shìchuān", type: "v", meaning: "mặc thử" }
    ],
    grammar: [
      {
        sentence: "我平时不太爱逛街，但是每个月都会去超市买东西。",
        explain: "<b>不太 + động từ/tính từ</b> diễn tả mức độ phủ định nhẹ ('không...lắm'). <b>每个 + đơn vị thời gian + 都</b> diễn tả một việc lặp lại đều đặn."
      },
      {
        sentence: "上个周末，我去商场给自己买了一件新衣服。",
        explain: "Cụm <b>给 + đối tượng + động từ</b> nghĩa 'làm gì cho ai'. Lượng từ <b>件</b> dùng cho áo, quần."
      },
      {
        sentence: "那件衣服的颜色很好看，可是尺码有点儿小。",
        explain: "<b>有点儿</b> đặt trước tính từ diễn tả mức độ nhẹ, thường mang nghĩa hơi tiêu cực ('hơi nhỏ'). <b>可是</b> là liên từ chuyển ý."
      },
      {
        sentence: "售货员帮我换了一件大一号的。",
        explain: "Cụm <b>帮 + người + động từ</b> nghĩa 'giúp ai làm gì'. Cấu trúc <b>大/小 + 一号</b> diễn tả chênh lệch một cỡ (số) so với ban đầu."
      },
      {
        sentence: "后来，我又去旁边的市场买水果和蔬菜。",
        explain: "Trạng từ <b>又</b> diễn tả một hành động lặp lại hoặc tiếp diễn thêm. <b>旁边的</b> + danh từ chỉ vị trí liền kề."
      },
      {
        sentence: "在市场买东西的时候，有时候可以跟老板讲价。",
        explain: "Cụm <b>跟 + người + động từ</b> nghĩa 'cùng ai làm gì'. Động từ năng nguyện <b>可以</b> diễn tả khả năng/được phép làm việc gì."
      },
      {
        sentence: "我问老板：“这个可以便宜一点儿吗？”",
        explain: "Câu trích dẫn trực tiếp lời nói dùng dấu hai chấm và ngoặc kép sau động từ <b>问</b>. <b>一点儿</b> sau tính từ diễn tả mức độ nhẹ ('rẻ hơn một chút')."
      },
      {
        sentence: "老板笑着说可以，最后便宜了五块钱。",
        explain: "Trợ từ <b>着</b> sau động từ <b>笑</b> diễn tả một hành động đi kèm ('vừa cười vừa nói'). <b>了</b> sau tính từ <b>便宜</b> diễn tả sự thay đổi trạng thái (đã trở nên rẻ hơn)."
      },
      {
        sentence: "网上购物比去商场方便，可是我更喜欢试穿以后再买。",
        explain: "Cấu trúc so sánh <b>比</b> có thể đặt giữa hai cụm động từ làm chủ ngữ (网上购物 và 去商场). <b>再</b> diễn tả một hành động xảy ra sau khi hành động khác kết thúc."
      },
      {
        sentence: "这次购物我买到了自己喜欢的东西，觉得特别开心。",
        explain: "Bổ ngữ kết quả <b>到</b> sau động từ <b>买</b> diễn tả đạt được kết quả mong muốn ('mua được'). Định ngữ <b>自己喜欢的</b> + <b>的</b> bổ nghĩa cho danh từ phía sau."
      }
    ],
    speaking: [
      {
        cues: "逛街 / 超市",
        question: "你平时喜欢逛街还是喜欢去超市买东西？",
        vi: "Bình thường bạn thích đi dạo phố hay thích đi siêu thị mua đồ?",
        hint: "Dùng <b>我平时(不太)爱/喜欢...</b>."
      },
      {
        cues: "商场 / 衣服",
        question: "你最近去商场买了什么？",
        vi: "Gần đây bạn đến trung tâm thương mại mua gì?",
        hint: "Dùng <b>我去...给自己买了一件/一个...</b>."
      },
      {
        cues: "颜色 / 尺码",
        question: "你买衣服的时候，最在意颜色还是尺码？",
        vi: "Khi mua áo, bạn quan tâm màu sắc hay kích cỡ hơn?",
        hint: "Dùng <b>...很好看，可是...有点儿...</b>."
      },
      {
        cues: "换 / 号",
        question: "如果尺码不合适，你会怎么办？",
        vi: "Nếu cỡ không vừa, bạn sẽ làm thế nào?",
        hint: "Dùng <b>(售货员)帮我换了一件大/小一号的</b>."
      },
      {
        cues: "市场 / 讲价",
        question: "你会不会跟老板讲价？",
        vi: "Bạn có mặc cả với người bán không?",
        hint: "Dùng <b>可以跟老板讲价</b> hoặc <b>我问老板：“...吗？”</b>."
      },
      {
        cues: "便宜 / 一点儿",
        question: "讲价以后，价格便宜了多少？",
        vi: "Sau khi mặc cả, giá đã rẻ hơn bao nhiêu?",
        hint: "Dùng <b>最后便宜了...钱</b>."
      },
      {
        cues: "网上购物 / 方便",
        question: "你觉得网上购物和去商场，哪个更方便？",
        vi: "Bạn thấy mua sắm trực tuyến và đến trung tâm thương mại, cái nào tiện hơn?",
        hint: "Dùng cấu trúc so sánh <b>A比B方便</b>."
      },
      {
        cues: "买到 / 开心",
        question: "买到自己喜欢的东西时，你的心情怎么样？",
        vi: "Khi mua được món đồ mình thích, tâm trạng bạn thế nào?",
        hint: "Dùng bổ ngữ kết quả <b>买到了...，觉得...</b>."
      }
    ]
  },
  {
    date: "2026-10-03",
    topic: "Ôn tập tuần 1: Từ vựng & Ngữ pháp (Weekly Review 1 — 词语与语法)",
    sentences: [
      {
        zh: "这星期，我练习了做自我介绍，说了自己的名字、年龄和工作。",
        pinyin: "Zhè xīngqī, wǒ liànxíle zuò zìwǒ jièshào, shuōle zìjǐ de míngzi, niánlíng hé gōngzuò.",
        vi: "Tuần này, tôi đã luyện tự giới thiệu bản thân, nói về tên, tuổi và công việc của mình."
      },
      {
        zh: "我学会了用“口”这个量词，比如说“我家一共有五口人”。",
        pinyin: "Wǒ xuéhuìle yòng “kǒu” zhège liàngcí, bǐrú shuō “wǒ jiā yígòng yǒu wǔ kǒu rén”.",
        vi: "Tôi đã học cách dùng lượng từ “口”, ví dụ như câu “nhà tôi tổng cộng có năm người”."
      },
      {
        zh: "我还记得比较句型“比”，可以说“哥哥比我大三岁”。",
        pinyin: "Wǒ hái jìde bǐjiào jùxíng “bǐ”, kěyǐ shuō “gēge bǐ wǒ dà sān suì”.",
        vi: "Tôi còn nhớ mẫu câu so sánh “比”, có thể nói “anh trai lớn hơn tôi ba tuổi”."
      },
      {
        zh: "“一边...一边...”这个句型也很有用，比如一边喝茶一边聊天。",
        pinyin: "“Yìbiān...yìbiān...” zhège jùxíng yě hěn yǒuyòng, bǐrú yìbiān hē chá yìbiān liáotiān.",
        vi: "Mẫu câu “vừa...vừa...” cũng rất hữu ích, ví dụ vừa uống trà vừa trò chuyện."
      },
      {
        zh: "关于饮食，我学了怎么点菜，比如说“我点了一份麻婆豆腐”。",
        pinyin: "Guānyú yǐnshí, wǒ xuéle zěnme diǎncài, bǐrú shuō “wǒ diǎnle yí fèn mápó dòufu”.",
        vi: "Về chủ đề ăn uống, tôi đã học cách gọi món, ví dụ như “tôi gọi một phần đậu phụ Ma Bà”."
      },
      {
        zh: "我记得“又...又...”可以同时说两个特点，比如四川菜又辣又香。",
        pinyin: "Wǒ jìde “yòu...yòu...” kěyǐ tóngshí shuō liǎng gè tèdiǎn, bǐrú Sìchuān cài yòu là yòu xiāng.",
        vi: "Tôi nhớ “vừa...vừa...” có thể nói cùng lúc hai đặc điểm, ví dụ món Tứ Xuyên vừa cay vừa thơm."
      },
      {
        zh: "说到天气，我学会了“一天比一天热”这种表示程度变化的说法。",
        pinyin: "Shuōdào tiānqì, wǒ xuéhuìle “yì tiān bǐ yì tiān rè” zhè zhǒng biǎoshì chéngdù biànhuà de shuōfǎ.",
        vi: "Nói đến thời tiết, tôi đã học được cách nói “ngày càng nóng hơn” để diễn tả mức độ thay đổi."
      },
      {
        zh: "我也复习了“如果...就...”，比如“如果天气变化，我就带伞”。",
        pinyin: "Wǒ yě fùxíle “rúguǒ...jiù...”, bǐrú “rúguǒ tiānqì biànhuà, wǒ jiù dài sǎn”.",
        vi: "Tôi cũng ôn lại “nếu...thì...”, ví dụ “nếu thời tiết thay đổi, tôi sẽ mang ô”."
      },
      {
        zh: "在购物这一课，我学会了怎么讲价，比如问老板“可以便宜一点儿吗”。",
        pinyin: "Zài gòuwù zhè yí kè, wǒ xuéhuìle zěnme jiǎngjià, bǐrú wèn lǎobǎn “kěyǐ piányi yìdiǎnr ma”.",
        vi: "Trong bài mua sắm, tôi đã học cách mặc cả, ví dụ hỏi người bán “có thể rẻ hơn một chút không”."
      },
      {
        zh: "总的来说，这一周我学到了很多关于自己、家庭、饮食、天气和购物的实用词语。",
        pinyin: "Zǒngdeláishuō, zhè yì zhōu wǒ xuédàole hěn duō guānyú zìjǐ, jiātíng, yǐnshí, tiānqì hé gòuwù de shíyòng cíyǔ.",
        vi: "Nhìn chung, tuần này tôi đã học được rất nhiều từ ngữ thực dụng về bản thân, gia đình, ăn uống, thời tiết và mua sắm."
      }
    ],
    vocabulary: [
      { word: "自我介绍", pinyin: "zìwǒ jièshào", type: "n", meaning: "tự giới thiệu bản thân (Ngày 1)" },
      { word: "口", pinyin: "kǒu", type: "m", meaning: "lượng từ đếm người trong nhà (Ngày 2)" },
      { word: "比", pinyin: "bǐ", type: "prep", meaning: "so với (Ngày 2)" },
      { word: "一边...一边...", pinyin: "yìbiān...yìbiān...", type: "phrase", meaning: "vừa...vừa... (Ngày 2)" },
      { word: "点菜", pinyin: "diǎncài", type: "v", meaning: "gọi món (Ngày 3)" },
      { word: "又...又...", pinyin: "yòu...yòu...", type: "phrase", meaning: "vừa...vừa... (đặc điểm) (Ngày 3)" },
      { word: "味道", pinyin: "wèidào", type: "n", meaning: "hương vị (Ngày 3)" },
      { word: "一天比一天", pinyin: "yì tiān bǐ yì tiān", type: "phrase", meaning: "ngày càng... (Ngày 4)" },
      { word: "如果...就...", pinyin: "rúguǒ...jiù...", type: "phrase", meaning: "nếu...thì... (Ngày 4)" },
      { word: "天气预报", pinyin: "tiānqì yùbào", type: "n", meaning: "dự báo thời tiết (Ngày 4)" },
      { word: "讲价", pinyin: "jiǎngjià", type: "v", meaning: "mặc cả (Ngày 5)" },
      { word: "便宜", pinyin: "piányi", type: "adj", meaning: "rẻ (Ngày 5)" },
      { word: "网上购物", pinyin: "wǎngshàng gòuwù", type: "n", meaning: "mua sắm trực tuyến (Ngày 5)" },
      { word: "实用", pinyin: "shíyòng", type: "adj", meaning: "thực dụng, thiết thực" }
    ],
    grammar: [
      {
        sentence: "这星期，我练习了做自我介绍，说了自己的名字、年龄和工作。",
        explain: "Ôn lại cấu trúc tự giới thiệu <b>我叫... / 今年...岁</b> (Ngày 1 – Giới thiệu bản thân)."
      },
      {
        sentence: "我学会了用“口”这个量词，比如说“我家一共有五口人”。",
        explain: "Ôn lại lượng từ <b>口</b> dùng để đếm số người trong gia đình, trong cấu trúc <b>有 + số + 口 + 人</b> (Ngày 2 – Gia đình)."
      },
      {
        sentence: "我还记得比较句型“比”，可以说“哥哥比我大三岁”。",
        explain: "Ôn lại cấu trúc so sánh <b>A + 比 + B + tính từ (+ mức chênh lệch)</b> (Ngày 2 – Gia đình)."
      },
      {
        sentence: "“一边...一边...”这个句型也很有用，比如一边喝茶一边聊天。",
        explain: "Ôn lại cấu trúc <b>一边...一边...</b> diễn tả hai hành động xảy ra đồng thời (Ngày 2 – Gia đình)."
      },
      {
        sentence: "关于饮食，我学了怎么点菜，比如说“我点了一份麻婆豆腐”。",
        explain: "Ôn lại động từ <b>点</b> (gọi món) đi cùng lượng từ phù hợp như <b>一份</b> (Ngày 3 – Đồ ăn & Nhà hàng)."
      },
      {
        sentence: "我记得“又...又...”可以同时说两个特点，比如四川菜又辣又香。",
        explain: "Ôn lại cấu trúc <b>又...又...</b> liệt kê đồng thời hai đặc điểm (Ngày 3 – Đồ ăn & Nhà hàng)."
      },
      {
        sentence: "说到天气，我学会了“一天比一天热”这种表示程度变化的说法。",
        explain: "Ôn lại cấu trúc <b>一 + lượng từ + 比 + 一 + lượng từ + tính từ</b> diễn tả mức độ tăng dần (Ngày 4 – Thời tiết & Các mùa)."
      },
      {
        sentence: "我也复习了“如果...就...”，比如“如果天气变化，我就带伞”。",
        explain: "Ôn lại cấu trúc điều kiện <b>如果...就...</b> (Ngày 4 – Thời tiết & Các mùa)."
      },
      {
        sentence: "在购物这一课，我学会了怎么讲价，比如问老板“可以便宜一点儿吗”。",
        explain: "Ôn lại cách hỏi mặc cả <b>可以...一点儿吗？</b> khi mua sắm (Ngày 5 – Mua sắm)."
      },
      {
        sentence: "总的来说，这一周我学到了很多关于自己、家庭、饮食、天气和购物的实用词语。",
        explain: "<b>总的来说</b> mở đầu câu tổng kết, liệt kê lại các chủ đề đã học trong tuần bằng dấu phẩy và <b>和</b> ở cuối."
      }
    ],
    speaking: [
      {
        cues: "家人 / 天气",
        question: "周末天气好的时候，你家人一般会一起做什么？",
        vi: "Khi cuối tuần trời đẹp, gia đình bạn thường cùng nhau làm gì?",
        hint: "Kết hợp chủ đề gia đình (Ngày 2) và thời tiết (Ngày 4), dùng <b>...的时候，我们会...</b>."
      },
      {
        cues: "饮食 / 购物",
        question: "你去市场买菜的时候，通常会买什么做饭？",
        vi: "Khi đi chợ mua đồ, bạn thường mua gì để nấu ăn?",
        hint: "Kết hợp từ vựng đồ ăn (Ngày 3) và mua sắm (Ngày 5)."
      },
      {
        cues: "自我介绍 / 家人",
        question: "你会怎么用一段话介绍自己和家人？",
        vi: "Bạn sẽ giới thiệu về bản thân và gia đình mình như thế nào trong một đoạn ngắn?",
        hint: "Kết hợp cấu trúc Ngày 1 (giới thiệu bản thân) và Ngày 2 (gia đình)."
      },
      {
        cues: "比 / 岁",
        question: "你家里有没有人比你大或者比你小很多岁？",
        vi: "Trong nhà bạn có ai lớn hơn hoặc nhỏ hơn bạn nhiều tuổi không?",
        hint: "Dùng cấu trúc so sánh <b>比...大/小...岁</b> (ôn Ngày 2)."
      },
      {
        cues: "餐厅 / 天气",
        question: "天气不好的时候，你更想在家吃饭还是去餐厅？",
        vi: "Khi thời tiết không đẹp, bạn muốn ăn ở nhà hơn hay đi nhà hàng?",
        hint: "Kết hợp chủ đề đồ ăn (Ngày 3) và thời tiết (Ngày 4)."
      },
      {
        cues: "讲价 / 衣服",
        question: "买衣服的时候，你有没有跟老板讲过价？",
        vi: "Khi mua quần áo, bạn đã từng mặc cả với người bán chưa?",
        hint: "Ôn từ <b>讲价</b> và cấu trúc trích dẫn lời nói (Ngày 5)."
      },
      {
        cues: "如果...就... / 心情",
        question: "如果天气突然变冷，你会怎么做？",
        vi: "Nếu thời tiết đột nhiên trở lạnh, bạn sẽ làm gì?",
        hint: "Ôn cấu trúc <b>如果...就...</b> (Ngày 4)."
      }
    ]
  },
  {
    date: "2026-10-04",
    topic: "Ôn tập tuần 1: Luyện nói tổng hợp (Weekly Review 2 — 口语综合练习)",
    sentences: [
      {
        zh: "我喜欢我软件工程师的工作，但是有时候压力很大。",
        pinyin: "Wǒ xǐhuan wǒ ruǎnjiàn gōngchéngshī de gōngzuò, dànshì yǒu shíhou yālì hěn dà.",
        vi: "Tôi thích công việc kỹ sư phần mềm của mình, nhưng đôi khi áp lực rất lớn."
      },
      {
        zh: "虽然我平时不常跟父母住在一起，但是我每个周末都会给他们打电话。",
        pinyin: "Suīrán wǒ píngshí bù cháng gēn fùmǔ zhù zài yìqǐ, dànshì wǒ měi gè zhōumò dōu huì gěi tāmen dǎ diànhuà.",
        vi: "Mặc dù bình thường tôi không sống cùng bố mẹ, nhưng mỗi cuối tuần tôi đều gọi điện cho họ."
      },
      {
        zh: "因为昨天下雨，所以我们全家决定在家吃饭，不去餐厅。",
        pinyin: "Yīnwèi zuótiān xiàyǔ, suǒyǐ wǒmen quán jiā juédìng zài jiā chīfàn, bú qù cāntīng.",
        vi: "Vì hôm qua trời mưa, nên cả nhà tôi quyết định ăn ở nhà, không đi nhà hàng."
      },
      {
        zh: "因为最近天气变冷了，所以我想去商场买一件厚外套。",
        pinyin: "Yīnwèi zuìjìn tiānqì biàn lěng le, suǒyǐ wǒ xiǎng qù shāngchǎng mǎi yí jiàn hòu wàitào.",
        vi: "Vì gần đây thời tiết trở lạnh, nên tôi muốn đến trung tâm thương mại mua một chiếc áo khoác dày."
      },
      {
        zh: "不过那家商场的外套太贵了，所以我决定在网上买。",
        pinyin: "Búguò nà jiā shāngchǎng de wàitào tài guì le, suǒyǐ wǒ juédìng zài wǎngshàng mǎi.",
        vi: "Tuy nhiên áo khoác ở trung tâm thương mại đó quá đắt, nên tôi quyết định mua trên mạng."
      },
      {
        zh: "妈妈以前每天都做饭，但是她现在有时候点外卖，因为工作很忙。",
        pinyin: "Māma yǐqián měitiān dōu zuòfàn, dànshì tā xiànzài yǒu shíhou diǎn wàimài, yīnwèi gōngzuò hěn máng.",
        vi: "Trước đây mẹ tôi ngày nào cũng nấu ăn, nhưng bây giờ thỉnh thoảng mẹ đặt đồ ăn ngoài, vì công việc bận rộn."
      },
      {
        zh: "哥哥不但喜欢吃辣的菜，而且喜欢尝试不同国家的美食。",
        pinyin: "Gēge búdàn xǐhuan chī là de cài, érqiě xǐhuan chángshì bùtóng guójiā de měishí.",
        vi: "Anh trai tôi không những thích ăn món cay, mà còn thích thử món ăn của các quốc gia khác nhau."
      },
      {
        zh: "不管工作多忙，我都会抽时间跟家人一起吃晚饭。",
        pinyin: "Bùguǎn gōngzuò duō máng, wǒ dōu huì chōu shíjiān gēn jiārén yìqǐ chī wǎnfàn.",
        vi: "Bất kể công việc bận đến đâu, tôi đều dành thời gian ăn tối cùng gia đình."
      },
      {
        zh: "我买的那件衣服质量不太好，所以我回商店要求换一件。",
        pinyin: "Wǒ mǎi de nà jiàn yīfu zhìliàng bú tài hǎo, suǒyǐ wǒ huí shāngdiàn yāoqiú huàn yí jiàn.",
        vi: "Chiếc áo tôi mua chất lượng không tốt lắm, nên tôi quay lại cửa hàng yêu cầu đổi một chiếc khác."
      },
      {
        zh: "虽然这个星期很忙，但是我觉得很开心，因为学到了关于自己、家庭、饮食、天气和购物的很多知识。",
        pinyin: "Suīrán zhège xīngqī hěn máng, dànshì wǒ juéde hěn kāixīn, yīnwèi xuédàole guānyú zìjǐ, jiātíng, yǐnshí, tiānqì hé gòuwù de hěn duō zhīshi.",
        vi: "Mặc dù tuần này rất bận, nhưng tôi cảm thấy rất vui, vì đã học được nhiều kiến thức về bản thân, gia đình, ăn uống, thời tiết và mua sắm."
      }
    ],
    vocabulary: [
      { word: "虽然...但是...", pinyin: "suīrán...dànshì...", type: "conj", meaning: "mặc dù...nhưng..." },
      { word: "因为...所以...", pinyin: "yīnwèi...suǒyǐ...", type: "conj", meaning: "vì...nên..." },
      { word: "不过", pinyin: "búguò", type: "adv", meaning: "tuy nhiên, nhưng" },
      { word: "不但...而且...", pinyin: "búdàn...érqiě...", type: "conj", meaning: "không những...mà còn..." },
      { word: "不管...都...", pinyin: "bùguǎn...dōu...", type: "phrase", meaning: "bất kể...đều..." },
      { word: "以前", pinyin: "yǐqián", type: "adv/n", meaning: "trước đây, trước kia" },
      { word: "压力", pinyin: "yālì", type: "n", meaning: "áp lực" },
      { word: "外套", pinyin: "wàitào", type: "n", meaning: "áo khoác" },
      { word: "质量", pinyin: "zhìliàng", type: "n", meaning: "chất lượng" },
      { word: "要求", pinyin: "yāoqiú", type: "v", meaning: "yêu cầu" },
      { word: "知识", pinyin: "zhīshi", type: "n", meaning: "kiến thức" },
      { word: "外卖", pinyin: "wàimài", type: "n", meaning: "đồ ăn mang đi, đồ ăn ngoài" }
    ],
    grammar: [
      {
        sentence: "我喜欢我软件工程师的工作，但是有时候压力很大。",
        explain: "Liên từ tương phản <b>但是</b> nối hai mệnh đề trái ngược nhau (thích công việc >< áp lực lớn)."
      },
      {
        sentence: "虽然我平时不常跟父母住在一起，但是我每个周末都会给他们打电话。",
        explain: "Cặp liên từ nhượng bộ <b>虽然...但是...</b> đứng đầu câu; khác tiếng Anh, vế sau vẫn cần giữ <b>但是</b>."
      },
      {
        sentence: "因为昨天下雨，所以我们全家决定在家吃饭，不去餐厅。",
        explain: "Cặp liên từ nhân quả <b>因为...所以...</b> nối nguyên nhân (trời mưa) với kết quả (ăn ở nhà)."
      },
      {
        sentence: "因为最近天气变冷了，所以我想去商场买一件厚外套。",
        explain: "Lặp lại cấu trúc <b>因为...所以...</b> với một nguyên nhân - kết quả khác (trời lạnh - đi mua áo)."
      },
      {
        sentence: "不过那家商场的外套太贵了，所以我决定在网上买。",
        explain: "Từ nối chuyển ý <b>不过</b> đứng đầu câu thể hiện sự tương phản nhẹ với câu trước; <b>所以</b> nối tiếp kết quả."
      },
      {
        sentence: "妈妈以前每天都做饭，但是她现在有时候点外卖，因为工作很忙。",
        explain: "Liên từ <b>但是</b> đối lập giữa quá khứ (<b>以前...都</b>) và hiện tại (<b>现在有时候</b>); <b>因为</b> giải thích lý do."
      },
      {
        sentence: "哥哥不但喜欢吃辣的菜，而且喜欢尝试不同国家的美食。",
        explain: "Cặp liên từ tăng tiến <b>不但...而且...</b> nghĩa 'không những...mà còn...'."
      },
      {
        sentence: "不管工作多忙，我都会抽时间跟家人一起吃晚饭。",
        explain: "Cấu trúc nhượng bộ <b>不管...都...</b> nghĩa 'bất kể...đều...', thường đi kèm cụm <b>多 + tính từ</b> (不管工作多忙)."
      },
      {
        sentence: "我买的那件衣服质量不太好，所以我回商店要求换一件。",
        explain: "Liên từ <b>所以</b> nối nguyên nhân (chất lượng kém) - kết quả (yêu cầu đổi hàng)."
      },
      {
        sentence: "虽然这个星期很忙，但是我觉得很开心，因为学到了关于自己、家庭、饮食、天气和购物的很多知识。",
        explain: "Kết hợp liên từ nhượng bộ <b>虽然...但是...</b> và nhân quả <b>因为...</b> trong cùng một câu; liệt kê nhiều danh từ nối bằng dấu phẩy và <b>和</b> ở cuối."
      }
    ],
    speaking: [
      {
        cues: "工作 / 天气",
        question: "天气会不会影响你上班时的心情？",
        vi: "Thời tiết có ảnh hưởng đến tâm trạng đi làm của bạn không?",
        hint: "Dùng <b>因为...所以...</b> để nối công việc (Ngày 1) và thời tiết (Ngày 4)."
      },
      {
        cues: "家人 / 打电话",
        question: "你怎么跟住得比较远的家人保持联系？",
        vi: "Bạn giữ liên lạc với người thân sống xa như thế nào?",
        hint: "Dùng <b>虽然...但是...</b> để nối khoảng cách và hành động (Ngày 2)."
      },
      {
        cues: "下雨 / 在家吃饭",
        question: "下雨天，如果不想出去吃饭，你会怎么做？",
        vi: "Ngày mưa, nếu không muốn ra ngoài ăn, bạn sẽ làm gì?",
        hint: "Dùng <b>因为...所以...</b> nối thời tiết (Ngày 4) và đồ ăn (Ngày 3)."
      },
      {
        cues: "天气冷 / 买外套 / 网上",
        question: "天气变冷的时候，你会怎么买新衣服？",
        vi: "Khi trời trở lạnh, bạn sẽ mua quần áo mới như thế nào?",
        hint: "Kết hợp <b>因为...所以...</b> (Ngày 4) và mua sắm trực tuyến (Ngày 5)."
      },
      {
        cues: "忙 / 家人吃饭 / 不管",
        question: "不管工作多忙，你都会为什么事情抽出时间？",
        vi: "Bất kể công việc bận đến đâu, bạn đều dành thời gian cho việc gì?",
        hint: "Dùng <b>不管...都...</b>."
      },
      {
        cues: "质量差 / 换",
        question: "如果买到质量不好的东西，你会怎么做？",
        vi: "Nếu mua phải đồ chất lượng không tốt, bạn sẽ làm gì?",
        hint: "Dùng <b>所以</b> nối cảm nhận và hành động (Ngày 5)."
      },
      {
        cues: "这星期 / 开心 / 学到",
        question: "回顾这一整个星期，你最开心学到的是什么？",
        vi: "Nhìn lại cả tuần này, điều khiến bạn vui nhất khi học được là gì?",
        hint: "Dùng <b>虽然...但是...因为...</b>."
      }
    ]
  },
  {
    date: "2026-10-05",
    topic: "Du lịch & Phương tiện di chuyển (旅行与交通)",
    sentences: [
      {
        zh: "周末的时候，我最喜欢的活动就是旅行。",
        pinyin: "Zhōumò de shíhou, wǒ zuì xǐhuan de huódòng jiùshì lǚxíng.",
        vi: "Vào cuối tuần, hoạt động tôi thích nhất chính là đi du lịch."
      },
      {
        zh: "坐飞机比坐火车快，但是机票比较贵。",
        pinyin: "Zuò fēijī bǐ zuò huǒchē kuài, dànshì jīpiào bǐjiào guì.",
        vi: "Đi máy bay nhanh hơn đi tàu hỏa, nhưng vé máy bay khá đắt."
      },
      {
        zh: "上个月，我和朋友一起坐大巴去了大叻。",
        pinyin: "Shàng gè yuè, wǒ hé péngyou yìqǐ zuò dàbā qùle Dàlà.",
        vi: "Tháng trước, tôi cùng bạn đi xe khách đến Đà Lạt."
      },
      {
        zh: "从胡志明市到大叻，坐大巴大概要八个小时。",
        pinyin: "Cóng Húzhìmíng Shì dào Dàlà, zuò dàbā dàgài yào bā gè xiǎoshí.",
        vi: "Từ Thành phố Hồ Chí Minh đến Đà Lạt, đi xe khách mất khoảng tám tiếng."
      },
      {
        zh: "因为路上堵车，所以我们晚了两个小时才到。",
        pinyin: "Yīnwèi lùshang dǔchē, suǒyǐ wǒmen wǎnle liǎng gè xiǎoshí cái dào.",
        vi: "Vì trên đường bị kẹt xe, nên chúng tôi đến trễ mất hai tiếng."
      },
      {
        zh: "虽然路很远，但是风景非常美丽，所以一点儿都不累。",
        pinyin: "Suīrán lù hěn yuǎn, dànshì fēngjǐng fēicháng měilì, suǒyǐ yìdiǎnr dōu bú lèi.",
        vi: "Mặc dù đường rất xa, nhưng phong cảnh vô cùng đẹp, nên chẳng thấy mệt chút nào."
      },
      {
        zh: "到了以后，我们先把行李放在酒店，然后就去附近逛逛。",
        pinyin: "Dàole yǐhòu, wǒmen xiān bǎ xínglǐ fàng zài jiǔdiàn, ránhòu jiù qù fùjìn guàngguang.",
        vi: "Sau khi đến nơi, chúng tôi để hành lý ở khách sạn trước, rồi đi dạo quanh khu gần đó."
      },
      {
        zh: "我们一下车就闻到了新鲜的空气，感觉特别舒服。",
        pinyin: "Wǒmen yī xiàchē jiù wéndàole xīnxiān de kōngqì, gǎnjué tèbié shūfu.",
        vi: "Chúng tôi vừa xuống xe đã ngửi thấy không khí trong lành, cảm thấy vô cùng dễ chịu."
      },
      {
        zh: "现在坐火车旅行的人越来越少，因为飞机票也不贵了。",
        pinyin: "Xiànzài zuò huǒchē lǚxíng de rén yuè lái yuè shǎo, yīnwèi fēijīpiào yě bú guì le.",
        vi: "Bây giờ người đi tàu hỏa để du lịch ngày càng ít, vì vé máy bay cũng không còn đắt nữa."
      },
      {
        zh: "下次我打算坐火车去旅行，体验一下不一样的感觉。",
        pinyin: "Xiàcì wǒ dǎsuàn zuò huǒchē qù lǚxíng, tǐyàn yíxià bù yíyàng de gǎnjué.",
        vi: "Lần sau tôi định đi tàu hỏa để du lịch, trải nghiệm một cảm giác khác."
      }
    ],
    vocabulary: [
      { word: "旅行", pinyin: "lǚxíng", type: "n/v", meaning: "du lịch" },
      { word: "活动", pinyin: "huódòng", type: "n", meaning: "hoạt động" },
      { word: "机票", pinyin: "jīpiào", type: "n", meaning: "vé máy bay" },
      { word: "火车", pinyin: "huǒchē", type: "n", meaning: "tàu hỏa" },
      { word: "大巴", pinyin: "dàbā", type: "n", meaning: "xe khách, xe buýt đường dài" },
      { word: "堵车", pinyin: "dǔchē", type: "v", meaning: "kẹt xe, tắc đường" },
      { word: "风景", pinyin: "fēngjǐng", type: "n", meaning: "phong cảnh" },
      { word: "美丽", pinyin: "měilì", type: "adj", meaning: "đẹp, xinh đẹp" },
      { word: "行李", pinyin: "xínglǐ", type: "n", meaning: "hành lý" },
      { word: "酒店", pinyin: "jiǔdiàn", type: "n", meaning: "khách sạn" },
      { word: "附近", pinyin: "fùjìn", type: "n", meaning: "gần đó, phụ cận" },
      { word: "新鲜", pinyin: "xīnxiān", type: "adj", meaning: "tươi mới, trong lành" },
      { word: "空气", pinyin: "kōngqì", type: "n", meaning: "không khí" },
      { word: "舒服", pinyin: "shūfu", type: "adj", meaning: "dễ chịu, thoải mái" },
      { word: "体验", pinyin: "tǐyàn", type: "v", meaning: "trải nghiệm" }
    ],
    grammar: [
      {
        sentence: "周末的时候，我最喜欢的活动就是旅行。",
        explain: "<b>...的时候</b> dùng để chỉ thời điểm/thời gian, đứng đầu câu làm trạng ngữ. Cấu trúc <b>...就是...</b> nhấn mạnh khẳng định điều gì đó chính là..."
      },
      {
        sentence: "坐飞机比坐火车快，但是机票比较贵。",
        explain: "Cấu trúc so sánh <b>A + 比 + B + tính từ</b> nghĩa 'A ... hơn B'. <b>比较</b> đứng trước tính từ để giảm nhẹ mức độ so sánh, nghĩa 'khá, tương đối'."
      },
      {
        sentence: "上个月，我和朋友一起坐大巴去了大叻。",
        explain: "<b>上个月</b> (tháng trước) là trạng ngữ thời gian. Trợ từ <b>了</b> sau động từ <b>去</b> đánh dấu hành động đã hoàn thành trong quá khứ."
      },
      {
        sentence: "从胡志明市到大叻，坐大巴大概要八个小时。",
        explain: "Cấu trúc <b>从...到...</b> chỉ điểm xuất phát và điểm đến. Bổ ngữ thời lượng <b>要 + số lượng thời gian</b> diễn tả khoảng thời gian cần thiết để làm việc gì."
      },
      {
        sentence: "因为路上堵车，所以我们晚了两个小时才到。",
        explain: "Cặp liên từ <b>因为...,所以...</b> diễn tả quan hệ nhân quả. Phó từ <b>才</b> nhấn mạnh việc gì đó xảy ra muộn/khó khăn hơn mong đợi."
      },
      {
        sentence: "虽然路很远，但是风景非常美丽，所以一点儿都不累。",
        explain: "Cặp liên từ <b>虽然...,但是...</b> diễn tả sự tương phản (mặc dù... nhưng...). Cụm <b>一点儿都不 + tính từ</b> nghĩa 'không...chút nào'."
      },
      {
        sentence: "到了以后，我们先把行李放在酒店，然后就去附近逛逛。",
        explain: "Cấu trúc <b>把 + tân ngữ + động từ + bổ ngữ</b> (câu chữ 把) nhấn mạnh việc xử lý/di chuyển tân ngữ đến vị trí nào đó. Cặp trạng từ <b>先...,然后就...</b> diễn tả trình tự hành động."
      },
      {
        sentence: "我们一下车就闻到了新鲜的空气，感觉特别舒服。",
        explain: "Cấu trúc <b>一...就...</b> diễn tả hai hành động xảy ra liên tiếp ngay sau nhau ('vừa...đã...'). Động từ <b>闻到</b> mang bổ ngữ kết quả <b>到</b> chỉ việc ngửi thấy được."
      },
      {
        sentence: "现在坐火车旅行的人越来越少，因为飞机票也不贵了。",
        explain: "Cấu trúc <b>越来越 + tính từ</b> diễn tả mức độ thay đổi tăng dần theo thời gian ('ngày càng...'). Trợ từ <b>了</b> cuối câu diễn tả sự thay đổi trạng thái so với trước đây."
      },
      {
        sentence: "下次我打算坐火车去旅行，体验一下不一样的感觉。",
        explain: "<b>打算 + động từ</b> diễn tả dự định trong tương lai. Cụm <b>体验一下</b> dùng <b>一下</b> sau động từ làm nhẹ hành động, nghĩa là 'trải nghiệm một chút'."
      }
    ],
    speaking: [
      {
        cues: "周末 / 活动 / 旅行",
        question: "周末的时候，你最喜欢的活动是什么？",
        vi: "Vào cuối tuần, hoạt động bạn thích nhất là gì?",
        hint: "Dùng <b>我最喜欢的...就是...</b>"
      },
      {
        cues: "飞机 / 火车 / 比",
        question: "坐飞机和坐火车，你觉得哪个更方便？",
        vi: "Đi máy bay và đi tàu hỏa, bạn thấy cái nào tiện hơn?",
        hint: "Dùng cấu trúc so sánh <b>A比B + tính từ</b>"
      },
      {
        cues: "上个月 / 朋友 / 去",
        question: "你上个月和朋友一起去了哪里旅行？",
        vi: "Tháng trước bạn cùng bạn bè đi du lịch ở đâu?",
        hint: "Dùng <b>我和...一起去了...</b>"
      },
      {
        cues: "从...到... / 小时",
        question: "从你家到你旅行的地方，大概要多长时间？",
        vi: "Từ nhà bạn đến nơi bạn đi du lịch mất khoảng bao lâu?",
        hint: "Dùng <b>从...到...,大概要 + số 小时</b>"
      },
      {
        cues: "堵车 / 因为 / 所以",
        question: "你有没有遇到过堵车的情况？为什么？",
        vi: "Bạn đã từng gặp tình huống kẹt xe chưa? Vì sao?",
        hint: "Dùng <b>因为...,所以...</b>"
      },
      {
        cues: "风景 / 虽然 / 但是",
        question: "你去过风景很美的地方吗？那里怎么样？",
        vi: "Bạn đã từng đến nơi có phong cảnh đẹp chưa? Nơi đó thế nào?",
        hint: "Dùng <b>虽然...,但是...</b>"
      },
      {
        cues: "下次 / 打算 / 体验",
        question: "下次你打算去哪里旅行？想体验什么？",
        vi: "Lần sau bạn định đi du lịch ở đâu? Muốn trải nghiệm điều gì?",
        hint: "Dùng <b>我打算...,体验一下...</b>"
      }
    ]
  },
  {
    date: "2026-10-06",
    topic: "Sức khỏe & Tập luyện (健康与锻炼)",
    sentences: [
      {
        zh: "为了身体健康，我每周都会锻炼三到四次。",
        pinyin: "Wèile shēntǐ jiànkāng, wǒ měi zhōu dōu huì duànliàn sān dào sì cì.",
        vi: "Để có sức khỏe tốt, mỗi tuần tôi đều tập luyện ba đến bốn lần."
      },
      {
        zh: "我最喜欢的运动是跑步，因为它既简单又方便。",
        pinyin: "Wǒ zuì xǐhuan de yùndòng shì pǎobù, yīnwèi tā jì jiǎndān yòu fāngbiàn.",
        vi: "Môn thể thao tôi thích nhất là chạy bộ, vì nó vừa đơn giản vừa tiện lợi."
      },
      {
        zh: "我常常一边听音乐一边跑步，这样时间过得比较快。",
        pinyin: "Wǒ chángcháng yìbiān tīng yīnyuè yìbiān pǎobù, zhèyàng shíjiān guò de bǐjiào kuài.",
        vi: "Tôi thường vừa nghe nhạc vừa chạy bộ, như vậy thời gian trôi qua nhanh hơn."
      },
      {
        zh: "我发现自己跑得越多，身体就越健康。",
        pinyin: "Wǒ fāxiàn zìjǐ pǎo de yuè duō, shēntǐ jiù yuè jiànkāng.",
        vi: "Tôi nhận ra mình chạy càng nhiều thì cơ thể càng khỏe mạnh."
      },
      {
        zh: "除了跑步以外，我还喜欢去游泳，锻炼全身的肌肉。",
        pinyin: "Chúle pǎobù yǐwài, wǒ hái xǐhuan qù yóuyǒng, duànliàn quánshēn de jīròu.",
        vi: "Ngoài chạy bộ ra, tôi còn thích đi bơi, để rèn luyện cơ bắp toàn thân."
      },
      {
        zh: "只要有时间，我就会去健身房练习举重。",
        pinyin: "Zhǐyào yǒu shíjiān, wǒ jiù huì qù jiànshēnfáng liànxí jǔzhòng.",
        vi: "Chỉ cần có thời gian, tôi sẽ đi phòng gym tập tạ."
      },
      {
        zh: "教练说，运动以后应该多喝水，也要吃得健康一点儿。",
        pinyin: "Jiàoliàn shuō, yùndòng yǐhòu yīnggāi duō hē shuǐ, yě yào chī de jiànkāng yìdiǎnr.",
        vi: "Huấn luyện viên nói, sau khi tập thể dục nên uống nhiều nước, cũng cần ăn uống lành mạnh hơn một chút."
      },
      {
        zh: "不但要多运动，而且要睡够八个小时，这样才有精神。",
        pinyin: "Búdàn yào duō yùndòng, érqiě yào shuì gòu bā gè xiǎoshí, zhèyàng cái yǒu jīngshén.",
        vi: "Không những cần vận động nhiều, mà còn phải ngủ đủ tám tiếng, như vậy mới có tinh thần."
      },
      {
        zh: "上个星期我生病了，好几天没有锻炼，结果觉得浑身没有力气。",
        pinyin: "Shàng gè xīngqī wǒ shēngbìng le, hǎo jǐ tiān méiyǒu duànliàn, jiéguǒ juéde húnshēn méiyǒu lìqi.",
        vi: "Tuần trước tôi bị ốm, mấy ngày liền không tập luyện, kết quả là cảm thấy toàn thân không còn sức lực."
      },
      {
        zh: "我相信坚持运动能让身体越来越健康。",
        pinyin: "Wǒ xiāngxìn jiānchí yùndòng néng ràng shēntǐ yuè lái yuè jiànkāng.",
        vi: "Tôi tin rằng kiên trì vận động có thể khiến cơ thể ngày càng khỏe mạnh."
      }
    ],
    vocabulary: [
      { word: "身体", pinyin: "shēntǐ", type: "n", meaning: "cơ thể, sức khỏe" },
      { word: "健康", pinyin: "jiànkāng", type: "adj/n", meaning: "khỏe mạnh, sức khỏe" },
      { word: "锻炼", pinyin: "duànliàn", type: "v", meaning: "rèn luyện, tập thể dục" },
      { word: "运动", pinyin: "yùndòng", type: "n/v", meaning: "thể thao, vận động" },
      { word: "简单", pinyin: "jiǎndān", type: "adj", meaning: "đơn giản" },
      { word: "方便", pinyin: "fāngbiàn", type: "adj", meaning: "tiện lợi" },
      { word: "游泳", pinyin: "yóuyǒng", type: "v", meaning: "bơi lội" },
      { word: "肌肉", pinyin: "jīròu", type: "n", meaning: "cơ bắp" },
      { word: "健身房", pinyin: "jiànshēnfáng", type: "n", meaning: "phòng tập gym" },
      { word: "举重", pinyin: "jǔzhòng", type: "v", meaning: "cử tạ, tập tạ" },
      { word: "教练", pinyin: "jiàoliàn", type: "n", meaning: "huấn luyện viên" },
      { word: "精神", pinyin: "jīngshén", type: "n", meaning: "tinh thần, sức sống" },
      { word: "生病", pinyin: "shēngbìng", type: "v", meaning: "bị ốm, bị bệnh" },
      { word: "力气", pinyin: "lìqi", type: "n", meaning: "sức lực" },
      { word: "坚持", pinyin: "jiānchí", type: "v", meaning: "kiên trì" }
    ],
    grammar: [
      {
        sentence: "为了身体健康，我每周都会锻炼三到四次。",
        explain: "<b>为了 + mục đích</b> đứng đầu câu diễn tả lý do/mục đích thực hiện hành động phía sau. <b>都会</b> nhấn mạnh việc luôn luôn/đều đặn xảy ra."
      },
      {
        sentence: "我最喜欢的运动是跑步，因为它既简单又方便。",
        explain: "Cặp từ <b>既...又...</b> dùng để liệt kê hai đặc điểm cùng tồn tại (vừa...vừa...). <b>因为</b> đứng một mình (không cần 所以) khi mệnh đề nguyên nhân đứng sau kết quả."
      },
      {
        sentence: "我常常一边听音乐一边跑步，这样时间过得比较快。",
        explain: "Cấu trúc <b>一边...一边...</b> diễn tả hai hành động xảy ra đồng thời. <b>这样</b> (như vậy) dùng để nối kết quả với hành động phía trước."
      },
      {
        sentence: "我发现自己跑得越多，身体就越健康。",
        explain: "Cấu trúc <b>越...就越...</b> diễn tả mối quan hệ tỉ lệ thuận giữa hai vế (càng...càng...). Bổ ngữ trình độ <b>跑得 + cụm từ</b> mô tả mức độ của hành động 跑."
      },
      {
        sentence: "除了跑步以外，我还喜欢去游泳，锻炼全身的肌肉。",
        explain: "Cấu trúc <b>除了...以外，还...</b> nghĩa 'ngoài...ra, còn...', dùng để bổ sung thêm thông tin."
      },
      {
        sentence: "只要有时间，我就会去健身房练习举重。",
        explain: "Cặp liên từ <b>只要...就...</b> diễn tả điều kiện đủ (chỉ cần...thì...)."
      },
      {
        sentence: "教练说，运动以后应该多喝水，也要吃得健康一点儿。",
        explain: "Động từ năng nguyện <b>应该</b> diễn tả điều nên làm. Bổ ngữ trình độ <b>吃得 + tính từ</b> mô tả cách thức/chất lượng của hành động ăn."
      },
      {
        sentence: "不但要多运动，而且要睡够八个小时，这样才有精神。",
        explain: "Cặp liên từ <b>不但...而且...</b> diễn tả quan hệ tăng tiến (không những...mà còn...). Bổ ngữ kết quả <b>睡够</b> nghĩa là 'ngủ đủ'."
      },
      {
        sentence: "上个星期我生病了，好几天没有锻炼，结果觉得浑身没有力气。",
        explain: "Từ <b>结果</b> dùng để dẫn ra kết quả cuối cùng của một chuỗi sự việc. <b>好几天</b> nghĩa là 'mấy ngày liền', nhấn mạnh khoảng thời gian kéo dài."
      },
      {
        sentence: "我相信坚持运动能让身体越来越健康。",
        explain: "Cấu trúc câu khiến <b>让 + đối tượng + tính từ/động từ</b> nghĩa là 'khiến cho...'. <b>越来越</b> diễn tả xu hướng thay đổi tăng dần."
      }
    ],
    speaking: [
      {
        cues: "为了 / 健康 / 锻炼",
        question: "你为了身体健康，做什么运动？",
        vi: "Để có sức khỏe tốt, bạn tập môn thể thao gì?",
        hint: "Dùng <b>为了...,我...</b>"
      },
      {
        cues: "最喜欢 / 运动 / 因为",
        question: "你最喜欢的运动是什么？为什么？",
        vi: "Môn thể thao bạn thích nhất là gì? Vì sao?",
        hint: "Dùng <b>我最喜欢的运动是..., 因为它...</b>"
      },
      {
        cues: "一边 / 一边",
        question: "你运动的时候，喜欢一边做什么一边运动？",
        vi: "Khi tập thể dục, bạn thích vừa làm gì vừa tập?",
        hint: "Dùng <b>我一边...一边...</b>"
      },
      {
        cues: "除了...以外 / 还",
        question: "除了跑步以外，你还喜欢做什么运动？",
        vi: "Ngoài chạy bộ ra, bạn còn thích tập môn nào khác?",
        hint: "Dùng <b>除了...以外，我还...</b>"
      },
      {
        cues: "只要 / 就 / 健身房",
        question: "你多久去一次健身房？",
        vi: "Bao lâu bạn đi phòng gym một lần?",
        hint: "Dùng <b>只要...,我就会...</b>"
      },
      {
        cues: "应该 / 睡够 / 精神",
        question: "你觉得运动以后应该注意什么？",
        vi: "Bạn nghĩ sau khi tập thể dục nên chú ý điều gì?",
        hint: "Dùng <b>应该...</b> và <b>不但...而且...</b>"
      },
      {
        cues: "生病 / 结果 / 力气",
        question: "你上次生病是什么时候？感觉怎么样？",
        vi: "Lần gần nhất bạn bị ốm là khi nào? Cảm giác thế nào?",
        hint: "Dùng <b>结果</b> để nói kết quả sau khi ốm."
      }
    ]
  },
  {
    date: "2026-10-07",
    topic: "Sở thích & Thời gian rảnh (爱好与空闲时间)",
    sentences: [
      {
        zh: "我对摄影很感兴趣，空闲的时候就喜欢背着相机到处走走。",
        pinyin: "Wǒ duì shèyǐng hěn gǎn xìngqù, kòngxián de shíhou jiù xǐhuan bēizhe xiàngjī dàochù zǒuzou.",
        vi: "Tôi rất hứng thú với nhiếp ảnh, lúc rảnh rỗi thích đeo máy ảnh đi khắp nơi."
      },
      {
        zh: "我不仅喜欢摄影，还喜欢画画和弹吉他。",
        pinyin: "Wǒ bùjǐn xǐhuan shèyǐng, hái xǐhuan huàhuà hé tán jítā.",
        vi: "Tôi không chỉ thích nhiếp ảnh, mà còn thích vẽ tranh và chơi guitar."
      },
      {
        zh: "周末我正在学吉他的时候，朋友常常过来听我弹琴。",
        pinyin: "Zhōumò wǒ zhèngzài xué jítā de shíhou, péngyou chángcháng guòlái tīng wǒ tánqín.",
        vi: "Vào cuối tuần, lúc tôi đang học đàn guitar, bạn bè thường ghé qua nghe tôi đàn."
      },
      {
        zh: "我从来不觉得练习吉他很无聊，反而觉得很享受。",
        pinyin: "Wǒ cónglái bù juéde liànxí jítā hěn wúliáo, fǎn'ér juéde hěn xiǎngshòu.",
        vi: "Tôi chưa bao giờ thấy việc luyện đàn guitar nhàm chán, ngược lại còn thấy rất thích thú."
      },
      {
        zh: "有的周末我喜欢一个人安静地看书，有的周末我喜欢约朋友出去玩。",
        pinyin: "Yǒude zhōumò wǒ xǐhuan yí gè rén ānjìng de kànshū, yǒude zhōumò wǒ xǐhuan yuē péngyou chūqù wán.",
        vi: "Có cuối tuần tôi thích một mình yên tĩnh đọc sách, có cuối tuần tôi lại thích rủ bạn bè ra ngoài chơi."
      },
      {
        zh: "不管天气好不好，我都会抽时间做自己喜欢的事。",
        pinyin: "Bùguǎn tiānqì hǎo bù hǎo, wǒ dōu huì chōu shíjiān zuò zìjǐ xǐhuan de shì.",
        vi: "Bất kể thời tiết tốt hay không, tôi đều dành thời gian làm điều mình thích."
      },
      {
        zh: "我最近迷上了拍摄短视频，一有空就研究剪辑技巧。",
        pinyin: "Wǒ zuìjìn míshàngle pāishè duǎn shìpín, yì yǒu kòng jiù yánjiū jiǎnjí jìqiǎo.",
        vi: "Gần đây tôi mê quay video ngắn, hễ rảnh là lại nghiên cứu kỹ thuật dựng phim."
      },
      {
        zh: "要么在家画画，要么出门拍照，周末对我来说总是很充实。",
        pinyin: "Yàome zài jiā huàhuà, yàome chūmén pāizhào, zhōumò duì wǒ láishuō zǒngshì hěn chōngshí.",
        vi: "Hoặc ở nhà vẽ tranh, hoặc ra ngoài chụp ảnh, cuối tuần đối với tôi lúc nào cũng rất trọn vẹn."
      },
      {
        zh: "朋友常常说我的爱好太多了，其实我只是喜欢尝试新鲜的事物。",
        pinyin: "Péngyou chángcháng shuō wǒ de àihào tài duō le, qíshí wǒ zhǐshì xǐhuan chángshì xīnxiān de shìwù.",
        vi: "Bạn bè thường nói sở thích của tôi quá nhiều, thực ra tôi chỉ thích thử những điều mới mẻ thôi."
      },
      {
        zh: "我觉得，正是这些爱好让我的生活变得更加丰富多彩。",
        pinyin: "Wǒ juéde, zhèngshì zhèxiē àihào ràng wǒ de shēnghuó biàn de gèngjiā fēngfù duōcǎi.",
        vi: "Tôi thấy, chính những sở thích này đã khiến cuộc sống của tôi trở nên phong phú và đa sắc màu hơn."
      }
    ],
    vocabulary: [
      { word: "摄影", pinyin: "shèyǐng", type: "n", meaning: "nhiếp ảnh" },
      { word: "感兴趣", pinyin: "gǎn xìngqù", type: "phrase", meaning: "hứng thú, quan tâm" },
      { word: "空闲", pinyin: "kòngxián", type: "n/adj", meaning: "rảnh rỗi" },
      { word: "相机", pinyin: "xiàngjī", type: "n", meaning: "máy ảnh" },
      { word: "画画", pinyin: "huàhuà", type: "v", meaning: "vẽ tranh" },
      { word: "弹吉他", pinyin: "tán jítā", type: "phrase", meaning: "chơi guitar" },
      { word: "无聊", pinyin: "wúliáo", type: "adj", meaning: "nhàm chán, buồn tẻ" },
      { word: "享受", pinyin: "xiǎngshòu", type: "v", meaning: "tận hưởng, thích thú" },
      { word: "安静", pinyin: "ānjìng", type: "adj", meaning: "yên tĩnh" },
      { word: "抽时间", pinyin: "chōu shíjiān", type: "phrase", meaning: "dành thời gian" },
      { word: "迷上", pinyin: "míshàng", type: "v", meaning: "mê, say mê" },
      { word: "短视频", pinyin: "duǎn shìpín", type: "n", meaning: "video ngắn" },
      { word: "剪辑", pinyin: "jiǎnjí", type: "v/n", meaning: "biên tập, dựng (video)" },
      { word: "充实", pinyin: "chōngshí", type: "adj", meaning: "trọn vẹn, đầy đặn" },
      { word: "爱好", pinyin: "àihào", type: "n", meaning: "sở thích" },
      { word: "丰富多彩", pinyin: "fēngfù duōcǎi", type: "phrase", meaning: "phong phú đa dạng" }
    ],
    grammar: [
      {
        sentence: "我对摄影很感兴趣，空闲的时候就喜欢背着相机到处走走。",
        explain: "Cấu trúc <b>对...感兴趣</b> nghĩa là 'hứng thú với...'. Động từ mang trạng thái đi kèm với <b>着</b> (背着相机) diễn tả cách thức đi kèm khi thực hiện hành động khác."
      },
      {
        sentence: "我不仅喜欢摄影，还喜欢画画和弹吉他。",
        explain: "Cặp liên từ <b>不仅...还...</b> diễn tả quan hệ tăng tiến, liệt kê thêm điều gì đó ngoài điều đã nêu."
      },
      {
        sentence: "周末我正在学吉他的时候，朋友常常过来听我弹琴。",
        explain: "Cấu trúc <b>正在 + động từ + 的时候</b> diễn tả một hành động đang diễn ra thì có sự việc khác xen vào."
      },
      {
        sentence: "我从来不觉得练习吉他很无聊，反而觉得很享受。",
        explain: "<b>从来不</b> nhấn mạnh phủ định tuyệt đối ('chưa bao giờ, không bao giờ'). Từ <b>反而</b> diễn tả kết quả trái ngược với điều thường được mong đợi."
      },
      {
        sentence: "有的周末我喜欢一个人安静地看书，有的周末我喜欢约朋友出去玩。",
        explain: "Cặp từ <b>有的...有的...</b> dùng để liệt kê những trường hợp khác nhau ('có...có...'). Trợ từ <b>地</b> nối trạng từ/tính từ với động từ phía sau (安静地看书)."
      },
      {
        sentence: "不管天气好不好，我都会抽时间做自己喜欢的事。",
        explain: "Cấu trúc <b>不管...都...</b> diễn tả điều kiện không ảnh hưởng đến kết quả ('bất kể...đều...'). Dạng hỏi <b>A 不 A</b> (好不好) thường dùng trong mệnh đề 不管."
      },
      {
        sentence: "我最近迷上了拍摄短视频，一有空就研究剪辑技巧。",
        explain: "Động từ <b>迷上</b> mang bổ ngữ kết quả <b>上</b>, diễn tả trạng thái bắt đầu say mê điều gì đó. Cấu trúc <b>一...就...</b> diễn tả hai hành động nối tiếp nhau ngay lập tức."
      },
      {
        sentence: "要么在家画画，要么出门拍照，周末对我来说总是很充实。",
        explain: "Cặp liên từ <b>要么...要么...</b> diễn tả sự lựa chọn giữa hai khả năng ('hoặc...hoặc...'). Cụm giới từ <b>对...来说</b> nghĩa là 'đối với... mà nói'."
      },
      {
        sentence: "朋友常常说我的爱好太多了，其实我只是喜欢尝试新鲜的事物。",
        explain: "Cấu trúc <b>太...了</b> diễn tả mức độ quá mức. Từ <b>其实</b> (thực ra) dùng để đưa ra ý kiến đính chính/bổ sung so với điều vừa nói."
      },
      {
        sentence: "我觉得，正是这些爱好让我的生活变得更加丰富多彩。",
        explain: "Cấu trúc nhấn mạnh <b>正是...</b> nghĩa 'chính là...'. Cấu trúc <b>让...变得...</b> diễn tả sự thay đổi trạng thái do một nguyên nhân gây ra."
      }
    ],
    speaking: [
      {
        cues: "对 / 感兴趣 / 爱好",
        question: "你对什么感兴趣？平时有什么爱好？",
        vi: "Bạn hứng thú với điều gì? Bình thường bạn có sở thích gì?",
        hint: "Dùng <b>我对...很感兴趣</b>"
      },
      {
        cues: "不仅 / 还",
        question: "除了主要的爱好，你还喜欢做什么？",
        vi: "Ngoài sở thích chính ra, bạn còn thích làm gì?",
        hint: "Dùng <b>我不仅喜欢...,还喜欢...</b>"
      },
      {
        cues: "无聊 / 反而 / 享受",
        question: "有人觉得你的爱好很无聊吗？你自己觉得呢？",
        vi: "Có ai thấy sở thích của bạn nhàm chán không? Còn bạn thì sao?",
        hint: "Dùng <b>我从来不觉得...,反而...</b>"
      },
      {
        cues: "有的 / 有的 / 周末",
        question: "你的周末通常是怎么安排的？",
        vi: "Cuối tuần của bạn thường sắp xếp thế nào?",
        hint: "Dùng <b>有的时候...,有的时候...</b>"
      },
      {
        cues: "不管 / 都 / 天气",
        question: "不管天气怎么样，你都会做什么事？",
        vi: "Bất kể thời tiết thế nào, bạn đều sẽ làm gì?",
        hint: "Dùng <b>不管...,我都会...</b>"
      },
      {
        cues: "迷上 / 最近",
        question: "你最近迷上了什么新的爱好吗？",
        vi: "Gần đây bạn có mê thích điều gì mới không?",
        hint: "Dùng <b>我最近迷上了...</b>"
      },
      {
        cues: "爱好 / 生活 / 丰富",
        question: "你觉得爱好对你的生活有什么影响？",
        vi: "Bạn nghĩ sở thích có ảnh hưởng gì đến cuộc sống của bạn?",
        hint: "Dùng <b>...让我的生活变得更加...</b>"
      }
    ]
  },
  {
    date: "2026-10-08",
    topic: "Công việc & Cuộc sống văn phòng (工作与办公室生活)",
    sentences: [
      {
        zh: "我每天早上九点上班，晚上六点下班。",
        pinyin: "Wǒ měitiān zǎoshang jiǔ diǎn shàngbān, wǎnshang liù diǎn xiàbān.",
        vi: "Mỗi ngày tôi đi làm lúc chín giờ sáng, tan làm lúc sáu giờ tối."
      },
      {
        zh: "上班以前，我一般会先看一下今天的工作安排。",
        pinyin: "Shàngbān yǐqián, wǒ yìbān huì xiān kàn yíxià jīntiān de gōngzuò ānpái.",
        vi: "Trước khi đi làm, tôi thường xem qua lịch trình công việc của hôm nay."
      },
      {
        zh: "我们公司的工作气氛很轻松，同事之间的关系也很融洽。",
        pinyin: "Wǒmen gōngsī de gōngzuò qìfēn hěn qīngsōng, tóngshì zhījiān de guānxi yě hěn róngqià.",
        vi: "Không khí làm việc ở công ty chúng tôi rất thoải mái, quan hệ giữa các đồng nghiệp cũng rất hòa hợp."
      },
      {
        zh: "开会的时候，我们常常要讨论新的项目该怎么进行。",
        pinyin: "Kāihuì de shíhou, wǒmen chángcháng yào tǎolùn xīn de xiàngmù gāi zěnme jìnxíng.",
        vi: "Khi họp, chúng tôi thường phải bàn bạc xem dự án mới nên tiến hành như thế nào."
      },
      {
        zh: "有时候任务太多，我不得不加班到很晚。",
        pinyin: "Yǒu shíhou rènwu tài duō, wǒ bùdébù jiābān dào hěn wǎn.",
        vi: "Có lúc nhiệm vụ quá nhiều, tôi buộc phải làm thêm giờ đến tận khuya."
      },
      {
        zh: "昨天我的电脑突然坏了，重要的文件差点儿被删掉。",
        pinyin: "Zuótiān wǒ de diànnǎo tūrán huài le, zhòngyào de wénjiàn chàdiǎnr bèi shāndiào.",
        vi: "Hôm qua máy tính của tôi đột nhiên bị hỏng, các tệp quan trọng suýt nữa bị xóa mất."
      },
      {
        zh: "幸好同事帮我把数据找回来了，不然我就麻烦了。",
        pinyin: "Xìnghǎo tóngshì bāng wǒ bǎ shùjù zhǎo huílai le, bùrán wǒ jiù máfan le.",
        vi: "May mà đồng nghiệp giúp tôi tìm lại dữ liệu, nếu không thì tôi đã gặp rắc rối rồi."
      },
      {
        zh: "快到中午的时候，大家都会一起去楼下吃饭，聊聊天放松一下。",
        pinyin: "Kuài dào zhōngwǔ de shíhou, dàjiā dōu huì yìqǐ qù lóuxià chīfàn, liáoliáotiān fàngsōng yíxià.",
        vi: "Sắp đến trưa, mọi người đều sẽ cùng nhau xuống dưới ăn cơm, trò chuyện thư giãn một chút."
      },
      {
        zh: "连最简单的任务，我也会认真检查，怕出现错误。",
        pinyin: "Lián zuì jiǎndān de rènwu, wǒ yě huì rènzhēn jiǎnchá, pà chūxiàn cuòwù.",
        vi: "Ngay cả nhiệm vụ đơn giản nhất, tôi cũng kiểm tra kỹ càng, vì sợ xảy ra sai sót."
      },
      {
        zh: "下班以后，我终于可以放松一下，享受属于自己的时间。",
        pinyin: "Xiàbān yǐhòu, wǒ zhōngyú kěyǐ fàngsōng yíxià, xiǎngshòu shǔyú zìjǐ de shíjiān.",
        vi: "Sau khi tan làm, cuối cùng tôi cũng có thể thư giãn một chút, tận hưởng khoảng thời gian của riêng mình."
      }
    ],
    vocabulary: [
      { word: "上班", pinyin: "shàngbān", type: "v", meaning: "đi làm" },
      { word: "下班", pinyin: "xiàbān", type: "v", meaning: "tan làm, tan ca" },
      { word: "安排", pinyin: "ānpái", type: "n/v", meaning: "sắp xếp, lịch trình" },
      { word: "气氛", pinyin: "qìfēn", type: "n", meaning: "không khí, bầu không khí" },
      { word: "同事", pinyin: "tóngshì", type: "n", meaning: "đồng nghiệp" },
      { word: "融洽", pinyin: "róngqià", type: "adj", meaning: "hòa hợp" },
      { word: "项目", pinyin: "xiàngmù", type: "n", meaning: "dự án" },
      { word: "任务", pinyin: "rènwu", type: "n", meaning: "nhiệm vụ" },
      { word: "加班", pinyin: "jiābān", type: "v", meaning: "làm thêm giờ" },
      { word: "电脑", pinyin: "diànnǎo", type: "n", meaning: "máy tính" },
      { word: "文件", pinyin: "wénjiàn", type: "n", meaning: "tệp, tài liệu" },
      { word: "数据", pinyin: "shùjù", type: "n", meaning: "dữ liệu" },
      { word: "麻烦", pinyin: "máfan", type: "adj/n", meaning: "rắc rối, phiền phức" },
      { word: "检查", pinyin: "jiǎnchá", type: "v", meaning: "kiểm tra" },
      { word: "错误", pinyin: "cuòwù", type: "n", meaning: "sai sót, lỗi" },
      { word: "放松", pinyin: "fàngsōng", type: "v", meaning: "thư giãn" }
    ],
    grammar: [
      {
        sentence: "我每天早上九点上班，晚上六点下班。",
        explain: "Cách nói giờ giấc trong tiếng Trung: <b>số giờ + 点</b> đặt trước động từ để chỉ thời điểm xảy ra hành động, không cần giới từ như 'at' trong tiếng Anh."
      },
      {
        sentence: "上班以前，我一般会先看一下今天的工作安排。",
        explain: "<b>...以前</b> đặt sau cụm từ chỉ hành động/thời điểm để nói 'trước khi...'. <b>看一下</b> dùng <b>一下</b> sau động từ làm nhẹ hành động."
      },
      {
        sentence: "我们公司的工作气氛很轻松，同事之间的关系也很融洽。",
        explain: "Cấu trúc <b>A之间的关系</b> nghĩa là 'quan hệ giữa A'. Tính từ vị ngữ <b>很 + tính từ</b> là cấu trúc câu miêu tả cơ bản trong tiếng Trung."
      },
      {
        sentence: "开会的时候，我们常常要讨论新的项目该怎么进行。",
        explain: "Động từ năng nguyện <b>该</b> diễn tả điều nên/phải làm, thường dùng trong câu hỏi cách thức <b>该怎么 + động từ</b>."
      },
      {
        sentence: "有时候任务太多，我不得不加班到很晚。",
        explain: "Cấu trúc <b>不得不 + động từ</b> diễn tả việc bắt buộc phải làm gì đó dù không muốn ('không thể không...')."
      },
      {
        sentence: "昨天我的电脑突然坏了，重要的文件差点儿被删掉。",
        explain: "Câu bị động với <b>被</b>: <b>chủ ngữ + 被 + (tác nhân) + động từ</b> diễn tả chủ ngữ chịu tác động của hành động. <b>差点儿</b> nghĩa là 'suýt nữa'."
      },
      {
        sentence: "幸好同事帮我把数据找回来了，不然我就麻烦了。",
        explain: "<b>幸好...</b> đứng đầu câu nghĩa 'may mà...'. Cấu trúc <b>不然...就...</b> diễn tả điều sẽ xảy ra nếu không có điều kiện thuận lợi vừa nêu."
      },
      {
        sentence: "快到中午的时候，大家都会一起去楼下吃饭，聊聊天放松一下。",
        explain: "Cấu trúc <b>快...的时候</b> diễn tả một sự việc sắp xảy ra ('sắp...thì'). Dạng động từ láy <b>聊聊天</b> làm nhẹ mức độ/thời lượng của hành động."
      },
      {
        sentence: "连最简单的任务，我也会认真检查，怕出现错误。",
        explain: "Cấu trúc nhấn mạnh <b>连...也/都...</b> nghĩa 'ngay cả...cũng...', dùng để nhấn mạnh trường hợp cực đoan nhất."
      },
      {
        sentence: "下班以后，我终于可以放松一下，享受属于自己的时间。",
        explain: "Phó từ <b>终于</b> (cuối cùng) diễn tả điều mong đợi cuối cùng cũng xảy ra. Cụm <b>属于自己的 + danh từ</b> nghĩa là 'thuộc về riêng mình'."
      }
    ],
    speaking: [
      {
        cues: "几点 / 上班 / 下班",
        question: "你每天几点上班，几点下班？",
        vi: "Mỗi ngày bạn đi làm lúc mấy giờ, tan làm lúc mấy giờ?",
        hint: "Dùng <b>我每天...点上班/下班</b>"
      },
      {
        cues: "上班以前 / 安排",
        question: "上班以前，你一般会做什么？",
        vi: "Trước khi đi làm, bạn thường làm gì?",
        hint: "Dùng <b>...以前，我会先...</b>"
      },
      {
        cues: "公司 / 气氛 / 同事",
        question: "你们公司的工作气氛怎么样？",
        vi: "Không khí làm việc ở công ty bạn thế nào?",
        hint: "Dùng <b>我们公司的...很...</b>"
      },
      {
        cues: "不得不 / 加班",
        question: "你常常需要加班吗？为什么？",
        vi: "Bạn có thường phải làm thêm giờ không? Vì sao?",
        hint: "Dùng <b>我不得不...</b>"
      },
      {
        cues: "电脑 / 被 / 文件",
        question: "你工作中遇到过电脑或文件的问题吗？",
        vi: "Bạn đã từng gặp vấn đề về máy tính hoặc tài liệu trong công việc chưa?",
        hint: "Dùng câu bị động <b>...被...了</b>"
      },
      {
        cues: "中午 / 同事 / 吃饭",
        question: "快到中午的时候，你和同事一般做什么？",
        vi: "Sắp đến trưa, bạn và đồng nghiệp thường làm gì?",
        hint: "Dùng <b>快到...的时候，我们会...</b>"
      },
      {
        cues: "下班以后 / 放松",
        question: "下班以后，你怎么放松自己？",
        vi: "Sau khi tan làm, bạn thư giãn bằng cách nào?",
        hint: "Dùng <b>下班以后，我终于可以...</b>"
      }
    ]
  },
  {
    date: "2026-10-09",
    topic: "Công nghệ & Mạng xã hội (科技与社交媒体)",
    sentences: [
      {
        zh: "现在的生活越来越离不开手机和网络。",
        pinyin: "Xiànzài de shēnghuó yuè lái yuè lí bù kāi shǒujī hé wǎngluò.",
        vi: "Cuộc sống hiện nay ngày càng không thể tách rời điện thoại và mạng internet."
      },
      {
        zh: "我每天都会用手机看新闻、聊天，还有刷社交媒体。",
        pinyin: "Wǒ měitiān dōu huì yòng shǒujī kàn xīnwén, liáotiān, hái yǒu shuā shèjiāo méitǐ.",
        vi: "Mỗi ngày tôi đều dùng điện thoại để xem tin tức, trò chuyện, và lướt mạng xã hội."
      },
      {
        zh: "我最常用的社交软件是微信和脸书，用来跟朋友保持联系。",
        pinyin: "Wǒ zuì chángyòng de shèjiāo ruǎnjiàn shì Wēixìn hé Liǎnshū, yòng lái gēn péngyou bǎochí liánxì.",
        vi: "Ứng dụng mạng xã hội tôi dùng nhiều nhất là WeChat và Facebook, để giữ liên lạc với bạn bè."
      },
      {
        zh: "通过社交媒体，我可以随时了解朋友们的近况。",
        pinyin: "Tōngguò shèjiāo méitǐ, wǒ kěyǐ suíshí liǎojiě péngyoumen de jìnkuàng.",
        vi: "Thông qua mạng xã hội, tôi có thể nắm bắt tình hình gần đây của bạn bè bất cứ lúc nào."
      },
      {
        zh: "不过，我发现自己有时候不是在学习，而是在不停地刷手机。",
        pinyin: "Búguò, wǒ fāxiàn zìjǐ yǒu shíhou búshì zài xuéxí, ér shì zài bùtíng de shuā shǒujī.",
        vi: "Tuy nhiên, tôi nhận ra đôi khi mình không phải đang học, mà là đang liên tục lướt điện thoại."
      },
      {
        zh: "每当我打开手机，总会不知不觉花掉很多时间。",
        pinyin: "Měi dāng wǒ dǎkāi shǒujī, zǒng huì bùzhī bùjué huādiào hěn duō shíjiān.",
        vi: "Mỗi khi tôi mở điện thoại lên, luôn không hay biết mà tiêu tốn rất nhiều thời gian."
      },
      {
        zh: "尽管知道玩手机太久对眼睛不好，我还是很难控制自己。",
        pinyin: "Jǐnguǎn zhīdào wán shǒujī tài jiǔ duì yǎnjīng bù hǎo, wǒ háishi hěn nán kòngzhì zìjǐ.",
        vi: "Mặc dù biết dùng điện thoại quá lâu không tốt cho mắt, tôi vẫn rất khó kiểm soát bản thân."
      },
      {
        zh: "为了改掉这个习惯，我决定每天只用半个小时社交媒体。",
        pinyin: "Wèile gǎidiào zhège xíguàn, wǒ juédìng měitiān zhǐ yòng bàn gè xiǎoshí shèjiāo méitǐ.",
        vi: "Để sửa thói quen này, tôi quyết định mỗi ngày chỉ dùng mạng xã hội nửa tiếng."
      },
      {
        zh: "除非有重要的事情，否则我尽量不在睡前看手机。",
        pinyin: "Chúfēi yǒu zhòngyào de shìqing, fǒuzé wǒ jǐnliàng bú zài shuì qián kàn shǒujī.",
        vi: "Trừ khi có việc quan trọng, nếu không tôi cố gắng không xem điện thoại trước khi ngủ."
      },
      {
        zh: "我相信，合理使用科技产品能使生活变得更加方便。",
        pinyin: "Wǒ xiāngxìn, hélǐ shǐyòng kējì chǎnpǐn néng shǐ shēnghuó biàn de gèngjiā fāngbiàn.",
        vi: "Tôi tin rằng, sử dụng các sản phẩm công nghệ một cách hợp lý có thể khiến cuộc sống trở nên tiện lợi hơn."
      }
    ],
    vocabulary: [
      { word: "手机", pinyin: "shǒujī", type: "n", meaning: "điện thoại di động" },
      { word: "网络", pinyin: "wǎngluò", type: "n", meaning: "mạng internet" },
      { word: "新闻", pinyin: "xīnwén", type: "n", meaning: "tin tức" },
      { word: "社交媒体", pinyin: "shèjiāo méitǐ", type: "n", meaning: "mạng xã hội" },
      { word: "软件", pinyin: "ruǎnjiàn", type: "n", meaning: "phần mềm, ứng dụng" },
      { word: "保持联系", pinyin: "bǎochí liánxì", type: "phrase", meaning: "giữ liên lạc" },
      { word: "近况", pinyin: "jìnkuàng", type: "n", meaning: "tình hình gần đây" },
      { word: "不停", pinyin: "bùtíng", type: "adv", meaning: "không ngừng, liên tục" },
      { word: "不知不觉", pinyin: "bùzhī bùjué", type: "phrase", meaning: "không hay biết, vô thức" },
      { word: "控制", pinyin: "kòngzhì", type: "v", meaning: "kiểm soát" },
      { word: "习惯", pinyin: "xíguàn", type: "n", meaning: "thói quen" },
      { word: "决定", pinyin: "juédìng", type: "v", meaning: "quyết định" },
      { word: "尽量", pinyin: "jǐnliàng", type: "adv", meaning: "cố gắng hết sức" },
      { word: "合理", pinyin: "hélǐ", type: "adj", meaning: "hợp lý" },
      { word: "产品", pinyin: "chǎnpǐn", type: "n", meaning: "sản phẩm" }
    ],
    grammar: [
      {
        sentence: "现在的生活越来越离不开手机和网络。",
        explain: "Cấu trúc <b>离不开</b> (động từ khả năng phủ định) nghĩa là 'không thể tách rời/không thể thiếu'. <b>越来越</b> diễn tả xu hướng tăng dần."
      },
      {
        sentence: "我每天都会用手机看新闻、聊天，还有刷社交媒体。",
        explain: "Cấu trúc <b>用 + công cụ + động từ</b> nghĩa là 'dùng cái gì để làm gì'. Dấu phẩy và <b>还有</b> dùng để liệt kê nhiều hoạt động liên tiếp."
      },
      {
        sentence: "我最常用的社交软件是微信和脸书，用来跟朋友保持联系。",
        explain: "Cấu trúc <b>用来 + động từ</b> diễn tả mục đích sử dụng của một sự vật ('dùng để...'). Giới từ <b>跟</b> tương đương '和' trong văn nói, nghĩa là 'với, cùng'."
      },
      {
        sentence: "通过社交媒体，我可以随时了解朋友们的近况。",
        explain: "Giới từ <b>通过</b> đứng đầu câu nghĩa là 'thông qua, qua', giới thiệu phương tiện/cách thức thực hiện hành động phía sau."
      },
      {
        sentence: "不过，我发现自己有时候不是在学习，而是在不停地刷手机。",
        explain: "Cặp cấu trúc <b>不是...而是...</b> dùng để phủ định một khả năng và khẳng định khả năng đúng ('không phải...mà là...')."
      },
      {
        sentence: "每当我打开手机，总会不知不觉花掉很多时间。",
        explain: "Cấu trúc <b>每当...，总...</b> diễn tả một sự việc lặp lại mỗi khi điều kiện xảy ra ('mỗi khi...thì luôn...'). Bổ ngữ kết quả <b>花掉</b> nghĩa là 'tiêu mất, dùng hết'."
      },
      {
        sentence: "尽管知道玩手机太久对眼睛不好，我还是很难控制自己。",
        explain: "Cặp liên từ <b>尽管...还是...</b> diễn tả sự nhượng bộ (mặc dù...vẫn...), gần nghĩa với 虽然...但是... nhưng nhấn mạnh hơn việc điều đó vẫn tiếp diễn dù đã biết trước."
      },
      {
        sentence: "为了改掉这个习惯，我决定每天只用半个小时社交媒体。",
        explain: "<b>为了 + mục đích</b> đứng đầu câu nêu lý do hành động. Phó từ <b>只</b> đứng trước động từ/số lượng để giới hạn phạm vi ('chỉ...')."
      },
      {
        sentence: "除非有重要的事情，否则我尽量不在睡前看手机。",
        explain: "Cặp liên từ <b>除非...否则...</b> diễn tả điều kiện duy nhất để một việc không xảy ra ('trừ khi...nếu không thì...')."
      },
      {
        sentence: "我相信，合理使用科技产品能使生活变得更加方便。",
        explain: "Động từ khiến <b>使</b> (mang sắc thái trang trọng hơn <b>让</b>) trong cấu trúc <b>使 + đối tượng + tính từ/động từ</b> diễn tả nguyên nhân dẫn đến kết quả."
      }
    ],
    speaking: [
      {
        cues: "手机 / 网络 / 离不开",
        question: "你觉得自己的生活离得开手机吗？",
        vi: "Bạn thấy cuộc sống của mình có thể tách rời điện thoại không?",
        hint: "Dùng <b>我的生活离不开...</b>"
      },
      {
        cues: "手机 / 看新闻 / 聊天",
        question: "你每天用手机做什么？",
        vi: "Mỗi ngày bạn dùng điện thoại để làm gì?",
        hint: "Dùng <b>我每天用手机...</b>"
      },
      {
        cues: "社交软件 / 用来",
        question: "你最常用哪个社交软件？用来做什么？",
        vi: "Bạn dùng ứng dụng mạng xã hội nào nhiều nhất? Để làm gì?",
        hint: "Dùng <b>我最常用的是...,用来...</b>"
      },
      {
        cues: "通过 / 社交媒体 / 近况",
        question: "你通过什么方式了解朋友的近况？",
        vi: "Bạn tìm hiểu tình hình gần đây của bạn bè bằng cách nào?",
        hint: "Dùng <b>通过...,我可以...</b>"
      },
      {
        cues: "不是 / 而是 / 刷手机",
        question: "你有没有发现自己有时候不是在做正事，而是在刷手机？",
        vi: "Bạn có nhận ra đôi khi mình không làm việc chính, mà lại đang lướt điện thoại không?",
        hint: "Dùng <b>不是...,而是...</b>"
      },
      {
        cues: "尽管 / 还是 / 控制",
        question: "你知道用手机太久不好吗？能控制自己吗？",
        vi: "Bạn có biết dùng điện thoại quá lâu là không tốt không? Bạn có kiểm soát được bản thân không?",
        hint: "Dùng <b>尽管...,我还是...</b>"
      },
      {
        cues: "除非 / 否则 / 睡前",
        question: "你睡前会看手机吗？在什么情况下才会看？",
        vi: "Trước khi ngủ bạn có xem điện thoại không? Trong trường hợp nào mới xem?",
        hint: "Dùng <b>除非...,否则我...</b>"
      }
    ]
  },
  {
    date: "2026-10-10",
    topic: "Ôn tập tuần 2: Từ vựng & Ngữ pháp (Weekly Review 3 — 词语与语法)",
    sentences: [
      {
        zh: "这星期，我复习了怎么比较不同的交通工具，比如“坐飞机比坐火车快”。",
        pinyin: "Zhè xīngqī, wǒ fùxíle zěnme bǐjiào bùtóng de jiāotōng gōngjù, bǐrú “zuò fēijī bǐ zuò huǒchē kuài”.",
        vi: "Tuần này, tôi đã ôn lại cách so sánh các phương tiện giao thông khác nhau, ví dụ “đi máy bay nhanh hơn đi tàu hỏa”."
      },
      {
        zh: "我也记得“虽然...但是...”这个句型，比如“虽然路很远，但是风景很美”。",
        pinyin: "Wǒ yě jìde “suīrán...dànshì...” zhège jùxíng, bǐrú “suīrán lù hěn yuǎn, dànshì fēngjǐng hěn měi”.",
        vi: "Tôi cũng nhớ mẫu câu “mặc dù...nhưng...”, ví dụ “mặc dù đường xa, nhưng phong cảnh rất đẹp”."
      },
      {
        zh: "关于健康，我学会了“为了身体健康”这种表示目的的说法。",
        pinyin: "Guānyú jiànkāng, wǒ xuéhuìle “wèile shēntǐ jiànkāng” zhè zhǒng biǎoshì mùdì de shuōfǎ.",
        vi: "Về chủ đề sức khỏe, tôi đã học được cách nói “để có sức khỏe tốt” diễn tả mục đích."
      },
      {
        zh: "我还记得“越...就越...”，比如“跑得越多，身体就越健康”。",
        pinyin: "Wǒ hái jìde “yuè...jiù yuè...”, bǐrú “pǎo de yuè duō, shēntǐ jiù yuè jiànkāng”.",
        vi: "Tôi còn nhớ “càng...càng...”, ví dụ “chạy càng nhiều, cơ thể càng khỏe mạnh”."
      },
      {
        zh: "说到爱好，我学了“对...感兴趣”，比如“我对摄影很感兴趣”。",
        pinyin: "Shuōdào àihào, wǒ xuéle “duì...gǎn xìngqù”, bǐrú “wǒ duì shèyǐng hěn gǎn xìngqù”.",
        vi: "Nói đến sở thích, tôi đã học “hứng thú với...”, ví dụ “tôi rất hứng thú với nhiếp ảnh”."
      },
      {
        zh: "我也复习了“不管...都...”，比如“不管天气好不好，我都会做自己喜欢的事”。",
        pinyin: "Wǒ yě fùxíle “bùguǎn...dōu...”, bǐrú “bùguǎn tiānqì hǎo bù hǎo, wǒ dōu huì zuò zìjǐ xǐhuan de shì”.",
        vi: "Tôi cũng ôn lại “bất kể...đều...”, ví dụ “dù thời tiết tốt hay không, tôi đều làm điều mình thích”."
      },
      {
        zh: "在工作这一课，我学会了怎么说上下班时间，比如“我早上九点上班”。",
        pinyin: "Zài gōngzuò zhè yí kè, wǒ xuéhuìle zěnme shuō shàngxiàbān shíjiān, bǐrú “wǒ zǎoshang jiǔ diǎn shàngbān”.",
        vi: "Trong bài công việc, tôi đã học cách nói giờ đi làm - tan làm, ví dụ “tôi đi làm lúc chín giờ sáng”."
      },
      {
        zh: "我也记得被动句“被”，比如“文件差点儿被删掉”。",
        pinyin: "Wǒ yě jìde bèidòng jù “bèi”, bǐrú “wénjiàn chàdiǎnr bèi shāndiào”.",
        vi: "Tôi cũng nhớ câu bị động với “被”, ví dụ “tệp suýt nữa bị xóa mất”."
      },
      {
        zh: "关于科技，我学会了“离不开”，比如“生活离不开手机和网络”。",
        pinyin: "Guānyú kējì, wǒ xuéhuìle “lí bù kāi”, bǐrú “shēnghuó lí bù kāi shǒujī hé wǎngluò”.",
        vi: "Về chủ đề công nghệ, tôi đã học “không thể tách rời”, ví dụ “cuộc sống không thể tách rời điện thoại và mạng internet”."
      },
      {
        zh: "总的来说，这一周我学到了很多关于旅行、健康、爱好、工作和科技的实用表达。",
        pinyin: "Zǒngdeláishuō, zhè yì zhōu wǒ xuédàole hěn duō guānyú lǚxíng, jiànkāng, àihào, gōngzuò hé kējì de shíyòng biǎodá.",
        vi: "Nhìn chung, tuần này tôi đã học được rất nhiều cách diễn đạt thực dụng về du lịch, sức khỏe, sở thích, công việc và công nghệ."
      }
    ],
    vocabulary: [
      { word: "比较", pinyin: "bǐjiào", type: "v", meaning: "so sánh (Ngày 8)" },
      { word: "虽然...但是...", pinyin: "suīrán...dànshì...", type: "conj", meaning: "mặc dù...nhưng... (Ngày 8)" },
      { word: "交通工具", pinyin: "jiāotōng gōngjù", type: "n", meaning: "phương tiện giao thông (Ngày 8)" },
      { word: "为了", pinyin: "wèile", type: "prep", meaning: "để, vì (mục đích) (Ngày 9)" },
      { word: "越...就越...", pinyin: "yuè...jiù yuè...", type: "phrase", meaning: "càng...càng... (Ngày 9)" },
      { word: "健康", pinyin: "jiànkāng", type: "n/adj", meaning: "sức khỏe (Ngày 9)" },
      { word: "感兴趣", pinyin: "gǎn xìngqù", type: "phrase", meaning: "hứng thú (Ngày 10)" },
      { word: "不管...都...", pinyin: "bùguǎn...dōu...", type: "phrase", meaning: "bất kể...đều... (Ngày 10)" },
      { word: "上班", pinyin: "shàngbān", type: "v", meaning: "đi làm (Ngày 11)" },
      { word: "被", pinyin: "bèi", type: "prep", meaning: "bị (dùng trong câu bị động) (Ngày 11)" },
      { word: "离不开", pinyin: "lí bù kāi", type: "phrase", meaning: "không thể tách rời (Ngày 12)" },
      { word: "网络", pinyin: "wǎngluò", type: "n", meaning: "mạng internet (Ngày 12)" },
      { word: "表达", pinyin: "biǎodá", type: "n/v", meaning: "cách diễn đạt, diễn đạt" }
    ],
    grammar: [
      {
        sentence: "这星期，我复习了怎么比较不同的交通工具，比如“坐飞机比坐火车快”。",
        explain: "Ôn lại cấu trúc so sánh <b>比</b> áp dụng cho phương tiện giao thông (Ngày 8 – Du lịch & Phương tiện di chuyển)."
      },
      {
        sentence: "我也记得“虽然...但是...”这个句型，比如“虽然路很远，但是风景很美”。",
        explain: "Ôn lại cặp liên từ nhượng bộ <b>虽然...但是...</b> (Ngày 8 – Du lịch & Phương tiện di chuyển)."
      },
      {
        sentence: "关于健康，我学会了“为了身体健康”这种表示目的的说法。",
        explain: "Ôn lại giới từ chỉ mục đích <b>为了</b> đứng đầu câu (Ngày 9 – Sức khỏe & Tập luyện)."
      },
      {
        sentence: "我还记得“越...就越...”，比如“跑得越多，身体就越健康”。",
        explain: "Ôn lại cấu trúc tỉ lệ thuận <b>越...就越...</b> (Ngày 9 – Sức khỏe & Tập luyện)."
      },
      {
        sentence: "说到爱好，我学了“对...感兴趣”，比如“我对摄影很感兴趣”。",
        explain: "Ôn lại cấu trúc <b>对...感兴趣</b> diễn tả sự hứng thú (Ngày 10 – Sở thích & Thời gian rảnh)."
      },
      {
        sentence: "我也复习了“不管...都...”，比如“不管天气好不好，我都会做自己喜欢的事”。",
        explain: "Ôn lại cấu trúc nhượng bộ <b>不管...都...</b> (Ngày 10 – Sở thích & Thời gian rảnh)."
      },
      {
        sentence: "在工作这一课，我学会了怎么说上下班时间，比如“我早上九点上班”。",
        explain: "Ôn lại cách nói giờ giấc với động từ <b>上班</b> (Ngày 11 – Công việc & Cuộc sống văn phòng)."
      },
      {
        sentence: "我也记得被动句“被”，比如“文件差点儿被删掉”。",
        explain: "Ôn lại câu bị động với <b>被</b> (Ngày 11 – Công việc & Cuộc sống văn phòng)."
      },
      {
        sentence: "关于科技，我学会了“离不开”，比如“生活离不开手机和网络”。",
        explain: "Ôn lại cấu trúc khả năng phủ định <b>离不开</b> nghĩa 'không thể thiếu' (Ngày 12 – Công nghệ & Mạng xã hội)."
      },
      {
        sentence: "总的来说，这一周我学到了很多关于旅行、健康、爱好、工作和科技的实用表达。",
        explain: "<b>总的来说</b> mở đầu câu tổng kết, liệt kê lại các chủ đề đã học trong tuần bằng dấu phẩy và <b>和</b> ở cuối."
      }
    ],
    speaking: [
      {
        cues: "交通 / 旅行",
        question: "你觉得坐飞机和坐火车，哪个更方便？",
        vi: "Bạn thấy đi máy bay và đi tàu hỏa, cái nào tiện hơn?",
        hint: "Dùng so sánh <b>比</b> (Ngày 8)."
      },
      {
        cues: "锻炼 / 健康",
        question: "你平时怎么锻炼身体？",
        vi: "Bình thường bạn tập luyện thể dục như thế nào?",
        hint: "Dùng <b>为了身体健康，我...</b> (Ngày 9)."
      },
      {
        cues: "爱好 / 时间",
        question: "不管多忙，你都会抽时间做什么爱好？",
        vi: "Dù bận đến đâu, bạn đều dành thời gian cho sở thích nào?",
        hint: "Dùng <b>不管...都...</b> (Ngày 10)."
      },
      {
        cues: "工作 / 加班",
        question: "你工作忙的时候，会不会加班？",
        vi: "Khi công việc bận, bạn có làm thêm giờ không?",
        hint: "Ôn từ <b>加班</b> (Ngày 11)."
      },
      {
        cues: "手机 / 工作",
        question: "手机对你的工作和生活有什么影响？",
        vi: "Điện thoại ảnh hưởng gì đến công việc và cuộc sống của bạn?",
        hint: "Dùng <b>离不开</b> (Ngày 12)."
      },
      {
        cues: "旅行 / 健康",
        question: "旅行的时候，你会不会注意锻炼身体？",
        vi: "Khi đi du lịch, bạn có chú ý tập luyện thể dục không?",
        hint: "Kết hợp Ngày 8 và Ngày 9."
      },
      {
        cues: "爱好 / 科技",
        question: "你会用手机或电脑来发展自己的爱好吗？",
        vi: "Bạn có dùng điện thoại hoặc máy tính để phát triển sở thích của mình không?",
        hint: "Kết hợp Ngày 10 và Ngày 12."
      }
    ]
  },
  {
    date: "2026-10-11",
    topic: "Ôn tập tuần 2: Luyện nói tổng hợp (Weekly Review 4 — 口语综合练习)",
    sentences: [
      {
        zh: "虽然坐飞机比较贵，但是为了节省时间，我还是选择坐飞机去旅行。",
        pinyin: "Suīrán zuò fēijī bǐjiào guì, dànshì wèile jiéshěng shíjiān, wǒ háishi xuǎnzé zuò fēijī qù lǚxíng.",
        vi: "Mặc dù đi máy bay khá đắt, nhưng để tiết kiệm thời gian, tôi vẫn chọn đi máy bay để du lịch."
      },
      {
        zh: "因为工作压力很大，所以我每天都会抽时间锻炼身体。",
        pinyin: "Yīnwèi gōngzuò yālì hěn dà, suǒyǐ wǒ měitiān dōu huì chōu shíjiān duànliàn shēntǐ.",
        vi: "Vì áp lực công việc rất lớn, nên mỗi ngày tôi đều dành thời gian để tập luyện."
      },
      {
        zh: "不但要多运动，而且要培养一个自己喜欢的爱好，这样生活才更丰富。",
        pinyin: "Búdàn yào duō yùndòng, érqiě yào péiyǎng yí gè zìjǐ xǐhuan de àihào, zhèyàng shēnghuó cái gèng fēngfù.",
        vi: "Không những cần vận động nhiều, mà còn phải nuôi dưỡng một sở thích mình yêu thích, như vậy cuộc sống mới phong phú hơn."
      },
      {
        zh: "只要有空闲时间，我就会去摄影或者去健身房锻炼。",
        pinyin: "Zhǐyào yǒu kòngxián shíjiān, wǒ jiù huì qù shèyǐng huòzhě qù jiànshēnfáng duànliàn.",
        vi: "Chỉ cần có thời gian rảnh, tôi sẽ đi chụp ảnh hoặc đến phòng gym tập luyện."
      },
      {
        zh: "尽管工作很忙，我还是每天花一点儿时间刷社交媒体，放松一下。",
        pinyin: "Jǐnguǎn gōngzuò hěn máng, wǒ háishi měitiān huā yìdiǎnr shíjiān shuā shèjiāo méitǐ, fàngsōng yíxià.",
        vi: "Mặc dù công việc rất bận, tôi vẫn mỗi ngày dành một chút thời gian lướt mạng xã hội để thư giãn."
      },
      {
        zh: "除了用手机看新闻以外，我还喜欢用手机拍旅行的照片。",
        pinyin: "Chúle yòng shǒujī kàn xīnwén yǐwài, wǒ hái xǐhuan yòng shǒujī pāi lǚxíng de zhàopiàn.",
        vi: "Ngoài việc dùng điện thoại xem tin tức ra, tôi còn thích dùng điện thoại chụp ảnh du lịch."
      },
      {
        zh: "因为科技越来越发达，所以现在旅行订票也变得越来越方便。",
        pinyin: "Yīnwèi kējì yuè lái yuè fādá, suǒyǐ xiànzài lǚxíng dìngpiào yě biàn de yuè lái yuè fāngbiàn.",
        vi: "Vì công nghệ ngày càng phát triển, nên hiện nay đặt vé du lịch cũng trở nên ngày càng tiện lợi."
      },
      {
        zh: "不管工作多累，我都会坚持每天运动一下，保持健康。",
        pinyin: "Bùguǎn gōngzuò duō lèi, wǒ dōu huì jiānchí měitiān yùndòng yíxià, bǎochí jiànkāng.",
        vi: "Bất kể công việc mệt đến đâu, tôi đều kiên trì vận động mỗi ngày, để giữ gìn sức khỏe."
      },
      {
        zh: "除非天气特别不好，否则周末我都会安排一次小旅行。",
        pinyin: "Chúfēi tiānqì tèbié bù hǎo, fǒuzé zhōumò wǒ dōu huì ānpái yí cì xiǎo lǚxíng.",
        vi: "Trừ khi thời tiết đặc biệt xấu, nếu không thì cuối tuần tôi đều sắp xếp một chuyến du lịch nhỏ."
      },
      {
        zh: "虽然这个星期工作很忙，但是我觉得很充实，因为学到了关于旅行、健康、爱好、工作和科技的很多知识。",
        pinyin: "Suīrán zhège xīngqī gōngzuò hěn máng, dànshì wǒ juéde hěn chōngshí, yīnwèi xuédàole guānyú lǚxíng, jiànkāng, àihào, gōngzuò hé kējì de hěn duō zhīshi.",
        vi: "Mặc dù tuần này công việc rất bận, nhưng tôi cảm thấy rất trọn vẹn, vì đã học được nhiều kiến thức về du lịch, sức khỏe, sở thích, công việc và công nghệ."
      }
    ],
    vocabulary: [
      { word: "虽然...但是...", pinyin: "suīrán...dànshì...", type: "conj", meaning: "mặc dù...nhưng..." },
      { word: "因为...所以...", pinyin: "yīnwèi...suǒyǐ...", type: "conj", meaning: "vì...nên..." },
      { word: "不但...而且...", pinyin: "búdàn...érqiě...", type: "conj", meaning: "không những...mà còn..." },
      { word: "只要...就...", pinyin: "zhǐyào...jiù...", type: "phrase", meaning: "chỉ cần...thì..." },
      { word: "尽管...还是...", pinyin: "jǐnguǎn...háishi...", type: "conj", meaning: "mặc dù...vẫn..." },
      { word: "除了...以外，还...", pinyin: "chúle...yǐwài, hái...", type: "phrase", meaning: "ngoài...ra, còn..." },
      { word: "不管...都...", pinyin: "bùguǎn...dōu...", type: "phrase", meaning: "bất kể...đều..." },
      { word: "除非...否则...", pinyin: "chúfēi...fǒuzé...", type: "conj", meaning: "trừ khi...nếu không thì..." },
      { word: "节省", pinyin: "jiéshěng", type: "v", meaning: "tiết kiệm" },
      { word: "培养", pinyin: "péiyǎng", type: "v", meaning: "nuôi dưỡng, bồi dưỡng" },
      { word: "发达", pinyin: "fādá", type: "adj", meaning: "phát triển, phát đạt" },
      { word: "充实", pinyin: "chōngshí", type: "adj", meaning: "trọn vẹn, đầy đặn" }
    ],
    grammar: [
      {
        sentence: "虽然坐飞机比较贵，但是为了节省时间，我还是选择坐飞机去旅行。",
        explain: "Cặp liên từ nhượng bộ <b>虽然...但是...</b> kết hợp với giới từ chỉ mục đích <b>为了</b>."
      },
      {
        sentence: "因为工作压力很大，所以我每天都会抽时间锻炼身体。",
        explain: "Cặp liên từ nhân quả <b>因为...所以...</b> nối nguyên nhân (áp lực công việc) với kết quả (tập luyện)."
      },
      {
        sentence: "不但要多运动，而且要培养一个自己喜欢的爱好，这样生活才更丰富。",
        explain: "Cặp liên từ tăng tiến <b>不但...而且...</b>, kết hợp <b>这样...才...</b> diễn tả kết quả mong muốn."
      },
      {
        sentence: "只要有空闲时间，我就会去摄影或者去健身房锻炼。",
        explain: "Cấu trúc điều kiện đủ <b>只要...就...</b> nghĩa 'chỉ cần...thì...'."
      },
      {
        sentence: "尽管工作很忙，我还是每天花一点儿时间刷社交媒体，放松一下。",
        explain: "Cặp liên từ nhượng bộ <b>尽管...还是...</b> nhấn mạnh việc vẫn tiếp diễn dù có trở ngại."
      },
      {
        sentence: "除了用手机看新闻以外，我还喜欢用手机拍旅行的照片。",
        explain: "Cấu trúc <b>除了...以外，还...</b> nghĩa 'ngoài...ra, còn...', dùng để bổ sung thông tin."
      },
      {
        sentence: "因为科技越来越发达，所以现在旅行订票也变得越来越方便。",
        explain: "Kết hợp <b>因为...所以...</b> với cấu trúc tăng dần <b>越来越</b>."
      },
      {
        sentence: "不管工作多累，我都会坚持每天运动一下，保持健康。",
        explain: "Cấu trúc nhượng bộ <b>不管...都...</b> với cụm <b>多 + tính từ</b> (不管工作多累)."
      },
      {
        sentence: "除非天气特别不好，否则周末我都会安排一次小旅行。",
        explain: "Cặp liên từ <b>除非...否则...</b> nghĩa 'trừ khi...nếu không thì...'."
      },
      {
        sentence: "虽然这个星期工作很忙，但是我觉得很充实，因为学到了关于旅行、健康、爱好、工作和科技的很多知识。",
        explain: "Kết hợp liên từ nhượng bộ <b>虽然...但是...</b> và nhân quả <b>因为...</b> trong cùng câu tổng kết; liệt kê nhiều danh từ nối bằng dấu phẩy và <b>和</b> ở cuối."
      }
    ],
    speaking: [
      {
        cues: "飞机 / 为了",
        question: "你旅行的时候，会不会为了节省时间选择坐飞机？",
        vi: "Khi đi du lịch, bạn có vì tiết kiệm thời gian mà chọn đi máy bay không?",
        hint: "Dùng <b>虽然...但是为了...</b>."
      },
      {
        cues: "压力 / 运动",
        question: "工作压力大的时候，你会怎么运动放松？",
        vi: "Khi áp lực công việc lớn, bạn sẽ vận động thư giãn như thế nào?",
        hint: "Dùng <b>因为...所以...</b>."
      },
      {
        cues: "爱好 / 生活丰富",
        question: "你觉得爱好对健康的生活有什么帮助？",
        vi: "Bạn nghĩ sở thích có giúp ích gì cho cuộc sống lành mạnh?",
        hint: "Dùng <b>不但...而且...</b>."
      },
      {
        cues: "空闲 / 摄影 / 健身房",
        question: "只要有空闲时间，你就会做什么？",
        vi: "Chỉ cần có thời gian rảnh, bạn sẽ làm gì?",
        hint: "Dùng <b>只要...就...</b>."
      },
      {
        cues: "忙 / 社交媒体",
        question: "尽管工作很忙，你还是会做什么放松自己？",
        vi: "Mặc dù công việc bận, bạn vẫn sẽ làm gì để thư giãn?",
        hint: "Dùng <b>尽管...还是...</b>."
      },
      {
        cues: "手机 / 旅行",
        question: "除了看新闻以外，你还会用手机做什么？",
        vi: "Ngoài xem tin tức ra, bạn còn dùng điện thoại để làm gì?",
        hint: "Dùng <b>除了...以外，还...</b>."
      },
      {
        cues: "周末 / 旅行 / 除非",
        question: "除非发生什么情况，你才不会去旅行？",
        vi: "Trừ khi xảy ra tình huống gì, bạn mới không đi du lịch?",
        hint: "Dùng <b>除非...否则...</b>."
      }
    ]
  }
];

function escapeAttr(text){
  return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function speakBtn(text){
  return `<button class="speak-btn" data-speak="${escapeAttr(text)}" title="Nghe phát âm" aria-label="Nghe phát âm">🔊</button>`;
}

let currentSpeakBtn = null;

// Trên điện thoại (nhất là Android), chỉ đặt utter.lang là chưa đủ: trình duyệt
// vẫn dùng giọng mặc định của máy (tiếng Việt). Phải chọn hẳn 1 giọng tiếng Trung.
const SPEAK_LANG = "zh-CN";
const SPEAK_LANG_PREFIXES = ["zh-cn", "cmn-hans", "zh-hans", "zh-tw", "cmn", "zh"];
// Giọng đọc tự nhiên hay gặp trên iPhone/Mac, Windows, Android -> ưu tiên.
const GOOD_VOICE_NAMES = ["tingting", "ting-ting", "lili", "yu-shu", "lisheng", "xiaoxiao", "yunxi", "huihui", "meijia"];
// Giọng "vui" của iPhone/Mac (cùng lang en-US nhưng đọc rất khó nghe) -> loại bỏ.
const NOVELTY_VOICE_NAMES = ["albert", "bad news", "bahh", "bells", "boing", "bubbles", "cellos", "deranged", "good news", "hysterical", "jester", "junior", "kathy", "organ", "pipe organ", "princess", "ralph", "superstar", "trinoids", "whisper", "wobble", "zarvox", "fred", "grandma", "grandpa", "rocko", "shelley", "flo", "eddy", "reed", "sandy"];
const VOICE_STORAGE_KEY = "speakVoice:" + SPEAK_LANG;
let speakVoice = null;

function normLang(v){
  return (v.lang || "").toLowerCase().replace(/_/g, "-");
}

function langRank(v){
  const l = normLang(v);
  const i = SPEAK_LANG_PREFIXES.findIndex(p => l === p || l.startsWith(p + "-"));
  return i;
}

function voiceScore(v){
  const name = v.name.toLowerCase();
  let score = 0;
  if(/premium|cao cấp/.test(name)) score += 50;
  if(/enhanced|nâng cao/.test(name)) score += 40;
  if(/natural|online|neural/.test(name)) score += 40;
  if(/siri/.test(name)) score += 30;
  if(/google/.test(name)) score += 30;
  if(GOOD_VOICE_NAMES.some(g => name.includes(g))) score += 20;
  score -= langRank(v) * 5;
  return score;
}

function candidateVoices(){
  return window.speechSynthesis.getVoices()
    .filter(v => langRank(v) >= 0)
    // zh-HK / yue là tiếng Quảng Đông, không phải tiếng phổ thông.
    .filter(v => !/^(zh-hk|yue)/.test(normLang(v)))
    .filter(v => !NOVELTY_VOICE_NAMES.includes(v.name.toLowerCase().replace(/\s*\(.*$/, "").trim()))
    .sort((a, b) => voiceScore(b) - voiceScore(a));
}

function pickVoice(){
  const voices = candidateVoices();
  const saved = localStorage.getItem(VOICE_STORAGE_KEY);
  return voices.find(v => v.voiceURI === saved) || voices[0] || null;
}

// Ô chọn giọng đọc trong header: máy nào giọng tự chọn chưa hay thì chọn tay.
function renderVoiceSelect(){
  const header = document.querySelector(".header");
  if(!header) return;
  const voices = candidateVoices();
  let row = document.getElementById("voiceRow");
  if(voices.length < 2){
    if(row) row.remove();
    return;
  }
  if(!row){
    row = document.createElement("div");
    row.id = "voiceRow";
    row.className = "day-select-row";
    row.innerHTML = `<label for="voicePicker">Giọng đọc:</label><select id="voicePicker"></select>`;
    const dayRow = header.querySelector(".day-select-row");
    dayRow ? dayRow.after(row) : header.prepend(row);
    row.querySelector("select").addEventListener("change", (e) => {
      localStorage.setItem(VOICE_STORAGE_KEY, e.target.value);
      speakVoice = pickVoice();
    });
  }
  const select = row.querySelector("select");
  select.innerHTML = voices.map(v =>
    `<option value="${escapeAttr(v.voiceURI)}">${escapeAttr(v.name)} (${v.lang})</option>`
  ).join("");
  if(speakVoice) select.value = speakVoice.voiceURI;
}

function refreshVoices(){
  speakVoice = pickVoice();
  renderVoiceSelect();
}

if("speechSynthesis" in window){
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = refreshVoices;
}

function speak(text, btn){
  if(!("speechSynthesis" in window)){
    alert("Trình duyệt này không hỗ trợ phát âm (Text-to-Speech).");
    return;
  }
  if(!speakVoice) speakVoice = pickVoice();
  // Máy có danh sách giọng nhưng không có giọng tiếng Trung -> báo cách cài thay vì đọc giọng Việt.
  if(!speakVoice && window.speechSynthesis.getVoices().length > 0){
    alert("Máy chưa có giọng đọc tiếng Trung.\n\n" +
      "• Android: Cài đặt > Quản lý chung / Trợ năng > Chuyển văn bản thành giọng nói > Công cụ của Google > Cài đặt dữ liệu giọng nói > tải Tiếng Trung (Quan thoại).\n" +
      "• iPhone: Cài đặt > Trợ năng > Nội dung được đọc > Giọng nói > tải giọng Tiếng Trung.\n\n" +
      "Nếu đang mở trong Zalo/Facebook, hãy mở bằng Chrome hoặc Safari.");
    return;
  }
  window.speechSynthesis.cancel();
  if(currentSpeakBtn) currentSpeakBtn.classList.remove("playing");

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = speakVoice ? speakVoice.lang : SPEAK_LANG;
  if(speakVoice) utter.voice = speakVoice;
  utter.rate = 0.9;
  utter.onend = () => btn && btn.classList.remove("playing");
  utter.onerror = () => btn && btn.classList.remove("playing");

  if(btn){
    btn.classList.add("playing");
    currentSpeakBtn = btn;
  }
  window.speechSynthesis.speak(utter);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".speak-btn");
  if(!btn) return;
  speak(btn.dataset.speak, btn);
});

function parseISODate(iso){
  return new Date(iso + "T00:00:00");
}

function toISODate(d){
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function formatDate(d){
  const days = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
  const dd = String(d.getDate()).padStart(2,'0');
  const mm = String(d.getMonth()+1).padStart(2,'0');
  const yyyy = d.getFullYear();
  return `${days[d.getDay()]}, ${dd}/${mm}/${yyyy}`;
}

// Chỉ lọc các bài học từ ngày bắt đầu (MIN_DATE) trở đi.
const availableDates = CHINESE_LESSONS.map(l => l.date).sort();
const MIN_DATE = availableDates[0];
const MAX_DATE = availableDates[availableDates.length - 1];

function defaultSelectedDate(){
  const todayISO = toISODate(new Date());
  if(todayISO < MIN_DATE) return MIN_DATE;
  if(todayISO > MAX_DATE) return MAX_DATE;
  return todayISO;
}

let selectedDate = defaultSelectedDate();

function render(){
  const lesson = CHINESE_LESSONS.find(l => l.date === selectedDate);

  const pParagraph = document.getElementById("panel-paragraph");
  const pVocab = document.getElementById("panel-vocab");
  const pGrammar = document.getElementById("panel-grammar");
  const pSpeaking = document.getElementById("panel-speaking");

  document.getElementById("dateLabel").textContent = formatDate(parseISODate(selectedDate));

  if(!lesson){
    document.getElementById("topicTitle").textContent = "Chưa có bài học cho ngày này";
    pParagraph.innerHTML = `<div class="card empty">Bài học cho ngày ${formatDate(parseISODate(selectedDate))} chưa được tạo. Hãy quay lại sau!</div>`;
    pVocab.innerHTML = "";
    pGrammar.innerHTML = "";
    pSpeaking.innerHTML = "";
    return;
  }

  document.getElementById("topicTitle").textContent = lesson.topic;

  pParagraph.innerHTML = `<div class="card">` +
    lesson.sentences.map(s => `
      <div class="sentence-block">
        <div class="en-row">
          <div class="en">${s.zh}</div>
          ${speakBtn(s.zh)}
        </div>
        <div class="phonetic">${s.pinyin}</div>
        <div class="vi">${s.vi}</div>
      </div>
    `).join("") +
    `</div>`;

  pVocab.innerHTML = `<div class="card">
    <table>
      <thead>
        <tr><th>Từ / Cụm từ</th><th>Pinyin</th><th>Loại</th><th>Nghĩa</th></tr>
      </thead>
      <tbody>
        ${lesson.vocabulary.map(v => `
          <tr>
            <td><div class="word-row"><span class="word">${v.word}</span>${speakBtn(v.word)}</div></td>
            <td class="word-phonetic">${v.pinyin}</td>
            <td>${v.type}</td>
            <td>${v.meaning}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  </div>`;

  pGrammar.innerHTML = `<div class="card">` +
    lesson.grammar.map(g => `
      <div class="grammar-item">
        <div class="g-sentence">${g.sentence}</div>
        <div class="g-explain">${g.explain}</div>
      </div>
    `).join("") +
    `</div>`;

  pSpeaking.innerHTML = `<div class="card">
    <p class="speaking-tip">Dùng từ gợi ý để tự đặt câu hỏi hoàn chỉnh (nói to), rồi bấm "Xem đáp án" để đối chiếu và tự trả lời.</p>` +
    lesson.speaking.map(s => `
      <div class="speaking-item">
        <div class="s-cues">Từ gợi ý: <b>${s.cues}</b></div>
        <details class="s-answer">
          <summary>Xem đáp án</summary>
          <div class="s-answer-body">
            <div class="en-row">
              <div class="s-question">${s.question}</div>
              ${speakBtn(s.question)}
            </div>
            <div class="s-vi">${s.vi}</div>
            <div class="s-hint">${s.hint}</div>
          </div>
        </details>
      </div>
    `).join("") +
    `</div>`;
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
  });
});

const dayPicker = document.getElementById("dayPicker");
dayPicker.min = MIN_DATE;
dayPicker.value = selectedDate;
dayPicker.addEventListener("change", () => {
  if(!dayPicker.value) return;
  selectedDate = dayPicker.value;
  render();
});

render();
