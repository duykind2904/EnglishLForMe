// Mỗi phần tử trong LESSONS gắn với 1 ngày dương lịch cụ thể (trường `date`, định dạng YYYY-MM-DD).
// Chỉ các ngày từ MIN_DATE (ngày bắt đầu học) trở đi mới được hiển thị/chọn.
const LESSONS = [
  {
    date: "2026-09-28",
    topic: "Giới thiệu bản thân (Self-Introduction)",
    sentences: [
      {
        en: "Hello, my name is Linh and I am twenty-five years old.",
        ipa: "/həˈloʊ, maɪ neɪm ɪz lɪn ənd aɪ æm ˌtwɛnti ˈfaɪv jɪrz oʊld/",
        vi: "Xin chào, tên tôi là Linh và tôi hai mươi lăm tuổi."
      },
      {
        en: "I come from Vietnam and I currently live in Ho Chi Minh City.",
        ipa: "/aɪ kʌm frʌm ˌviɛtˈnɑːm ənd aɪ ˈkɜːrəntli lɪv ɪn hoʊ tʃi mɪn ˈsɪti/",
        vi: "Tôi đến từ Việt Nam và hiện tại tôi đang sống ở Thành phố Hồ Chí Minh."
      },
      {
        en: "I work as a software engineer at a technology company.",
        ipa: "/aɪ wɜːrk æz ə ˈsɔːftwɛr ˌɛndʒɪˈnɪr æt ə tɛkˈnɑːlədʒi ˈkʌmpəni/",
        vi: "Tôi làm việc với vai trò là kỹ sư phần mềm tại một công ty công nghệ."
      },
      {
        en: "In my free time, I enjoy reading books and learning new languages.",
        ipa: "/ɪn maɪ fri taɪm, aɪ ɪnˈdʒɔɪ ˈriːdɪŋ bʊks ənd ˈlɜːrnɪŋ nu ˈlæŋɡwɪdʒɪz/",
        vi: "Vào thời gian rảnh, tôi thích đọc sách và học các ngôn ngữ mới."
      },
      {
        en: "Nice to meet you, and I hope we can be good friends.",
        ipa: "/naɪs tu mit ju, ənd aɪ hoʊp wi kæn bi ɡʊd frɛndz/",
        vi: "Rất vui được gặp bạn, và tôi hy vọng chúng ta có thể trở thành bạn tốt."
      },
      {
        en: "I live with my parents and my younger sister in a small apartment.",
        ipa: "/aɪ lɪv wɪð maɪ ˈpɛrənts ənd maɪ ˈjʌŋɡər ˈsɪstər ɪn ə smɔːl əˈpɑːrtmənt/",
        vi: "Tôi sống cùng bố mẹ và em gái trong một căn hộ nhỏ."
      },
      {
        en: "Every morning, I wake up early and go for a short run before breakfast.",
        ipa: "/ˈɛvri ˈmɔːrnɪŋ, aɪ weɪk ʌp ˈɜːrli ənd ɡoʊ fɔːr ə ʃɔːrt rʌn bɪˈfɔːr ˈbrɛkfəst/",
        vi: "Mỗi buổi sáng, tôi dậy sớm và chạy bộ một quãng ngắn trước khi ăn sáng."
      },
      {
        en: "After work, I usually meet my friends for coffee or go to the gym.",
        ipa: "/ˈæftər wɜːrk, aɪ ˈjuʒuəli mit maɪ frɛndz fɔːr ˈkɔːfi ɔːr ɡoʊ tu ðə dʒɪm/",
        vi: "Sau giờ làm, tôi thường gặp bạn bè để uống cà phê hoặc đi tập gym."
      },
      {
        en: "I am also planning to travel to Japan next year to learn about its culture.",
        ipa: "/aɪ æm ˈɔːlsoʊ ˈplænɪŋ tu ˈtrævəl tu dʒəˈpæn nɛkst jɪr tu lɜːrn əˈbaʊt ɪts ˈkʌltʃər/",
        vi: "Tôi cũng đang dự định đi du lịch Nhật Bản vào năm tới để tìm hiểu về văn hóa nước này."
      },
      {
        en: "Overall, I consider myself a friendly and hard-working person who loves new challenges.",
        ipa: "/ˌoʊvərˈɔːl, aɪ kənˈsɪdər maɪˈsɛlf ə ˈfrɛndli ənd hɑːrd ˈwɜːrkɪŋ ˈpɜːrsən hu lʌvz nu ˈtʃælɪndʒɪz/",
        vi: "Nhìn chung, tôi tự nhận thấy mình là một người thân thiện, chăm chỉ và luôn thích những thử thách mới."
      }
    ],
    vocabulary: [
      { word: "currently", ipa: "/ˈkɜːrəntli/", type: "adv", meaning: "hiện tại, hiện nay" },
      { word: "software engineer", ipa: "/ˈsɔːftwɛr ˌɛndʒɪˈnɪr/", type: "n", meaning: "kỹ sư phần mềm" },
      { word: "technology company", ipa: "/tɛkˈnɑːlədʒi ˈkʌmpəni/", type: "n", meaning: "công ty công nghệ" },
      { word: "free time", ipa: "/fri taɪm/", type: "n", meaning: "thời gian rảnh" },
      { word: "enjoy", ipa: "/ɪnˈdʒɔɪ/", type: "v", meaning: "thích, tận hưởng" },
      { word: "language", ipa: "/ˈlæŋɡwɪdʒ/", type: "n", meaning: "ngôn ngữ" },
      { word: "nice to meet you", ipa: "/naɪs tu mit ju/", type: "phrase", meaning: "rất vui được gặp bạn" },
      { word: "hope", ipa: "/hoʊp/", type: "v", meaning: "hy vọng" },
      { word: "friend", ipa: "/frɛnd/", type: "n", meaning: "bạn bè" },
      { word: "parents", ipa: "/ˈpɛrənts/", type: "n", meaning: "bố mẹ" },
      { word: "apartment", ipa: "/əˈpɑːrtmənt/", type: "n", meaning: "căn hộ" },
      { word: "wake up", ipa: "/weɪk ʌp/", type: "phrasal verb", meaning: "thức dậy" },
      { word: "go for a run", ipa: "/ɡoʊ fɔːr ə rʌn/", type: "phrase", meaning: "đi chạy bộ" },
      { word: "breakfast", ipa: "/ˈbrɛkfəst/", type: "n", meaning: "bữa sáng" },
      { word: "usually", ipa: "/ˈjuʒuəli/", type: "adv", meaning: "thường xuyên, thường thì" },
      { word: "gym", ipa: "/dʒɪm/", type: "n", meaning: "phòng tập gym" },
      { word: "plan to", ipa: "/plæn tu/", type: "v phrase", meaning: "dự định làm gì" },
      { word: "culture", ipa: "/ˈkʌltʃər/", type: "n", meaning: "văn hóa" },
      { word: "consider", ipa: "/kənˈsɪdər/", type: "v", meaning: "coi là, cho rằng" },
      { word: "hard-working", ipa: "/hɑːrd ˈwɜːrkɪŋ/", type: "adj", meaning: "chăm chỉ" },
      { word: "challenge", ipa: "/ˈtʃælɪndʒ/", type: "n", meaning: "thử thách" }
    ],
    grammar: [
      {
        sentence: "Hello, my name is Linh and I am twenty-five years old.",
        explain: "Hai mệnh đề đơn được nối bằng liên từ <b>and</b>. Cấu trúc nói tuổi: <b>S + am/is/are + số tuổi + years old</b>."
      },
      {
        sentence: "I come from Vietnam and I currently live in Ho Chi Minh City.",
        explain: "Thì hiện tại đơn (Present Simple) diễn tả sự thật/thông tin cố định. <b>come from</b> + nơi chốn (quê quán). Trạng từ tần suất/thời gian <b>currently</b> đứng trước động từ thường."
      },
      {
        sentence: "I work as a software engineer at a technology company.",
        explain: "Cấu trúc <b>work as + danh từ chỉ nghề nghiệp</b> để nói về công việc. Giới từ <b>at</b> dùng trước nơi làm việc."
      },
      {
        sentence: "In my free time, I enjoy reading books and learning new languages.",
        explain: "Cụm trạng từ chỉ thời gian <b>In my free time</b> đứng đầu câu, có dấu phẩy ngăn cách. Động từ <b>enjoy</b> luôn theo sau bởi V-ing (danh động từ): enjoy + V-ing."
      },
      {
        sentence: "Nice to meet you, and I hope we can be good friends.",
        explain: "<b>Nice to meet you</b> là cụm chào xã giao thông dụng. <b>hope</b> + mệnh đề (S + can/will...) diễn tả điều mong muốn ở tương lai."
      },
      {
        sentence: "I live with my parents and my younger sister in a small apartment.",
        explain: "Giới từ <b>with</b> diễn tả \"sống cùng ai\". Tính từ so sánh hơn <b>younger</b> (trẻ hơn) dùng để chỉ em gái. Giới từ <b>in</b> + nơi chốn cụ thể."
      },
      {
        sentence: "Every morning, I wake up early and go for a short run before breakfast.",
        explain: "<b>Every morning</b> là trạng từ chỉ tần suất đứng đầu câu. Hai động từ thường <b>wake up</b> và <b>go</b> được nối bằng <b>and</b> (thì hiện tại đơn diễn tả thói quen). Giới từ <b>before</b> + danh từ chỉ thời điểm."
      },
      {
        sentence: "After work, I usually meet my friends for coffee or go to the gym.",
        explain: "Cụm giới từ <b>After work</b> đứng đầu câu chỉ thời gian. Trạng từ tần suất <b>usually</b> đứng trước động từ thường. Liên từ <b>or</b> nối hai lựa chọn hành động."
      },
      {
        sentence: "I am also planning to travel to Japan next year to learn about its culture.",
        explain: "Thì hiện tại tiếp diễn <b>am planning</b> diễn tả dự định trong tương lai gần. Cấu trúc <b>plan to + V</b>. Cụm <b>to learn about...</b> là mệnh đề chỉ mục đích (to + V nguyên mẫu)."
      },
      {
        sentence: "Overall, I consider myself a friendly and hard-working person who loves new challenges.",
        explain: "<b>Overall</b> là trạng từ mở đầu để tổng kết. Cấu trúc <b>consider + tân ngữ + danh từ/tính từ</b> nghĩa là \"coi ai/cái gì là...\". Đại từ quan hệ <b>who</b> dùng để mô tả thêm cho \"person\"."
      }
    ],
    speaking: [
      {
        cues: "name / age",
        question: "What's your name and how old are you?",
        vi: "Bạn tên gì và bao nhiêu tuổi?",
        hint: "Dùng cấu trúc <b>My name is... and I am ... years old.</b>"
      },
      {
        cues: "from / currently live",
        question: "Where are you from and where do you currently live?",
        vi: "Bạn đến từ đâu và hiện đang sống ở đâu?",
        hint: "Dùng <b>come from</b> + quê quán, <b>currently live in</b> + nơi ở hiện tại."
      },
      {
        cues: "do / work",
        question: "What do you do for work?",
        vi: "Bạn làm công việc gì?",
        hint: "Dùng <b>work as a/an + nghề nghiệp</b>, có thể thêm <b>at + tên công ty/lĩnh vực</b>."
      },
      {
        cues: "usually / free time",
        question: "What do you usually do in your free time?",
        vi: "Lúc rảnh bạn thường làm gì?",
        hint: "Dùng <b>In my free time, I enjoy + V-ing...</b>, liệt kê 2 hoạt động nối bằng <b>and</b>."
      },
      {
        cues: "daily routine / morning, after work",
        question: "What does your daily routine look like — morning and after work?",
        vi: "Thói quen hằng ngày của bạn ra sao — buổi sáng và sau giờ làm?",
        hint: "Dùng <b>Every morning, I...</b> và <b>After work, I usually...</b>."
      },
      {
        cues: "travel plans / why",
        question: "Do you have any travel plans? Why do you want to go there?",
        vi: "Bạn có dự định đi du lịch không? Vì sao bạn muốn đến đó?",
        hint: "Dùng <b>I am planning to travel to... to + V (mục đích)</b>."
      },
      {
        cues: "describe / personality",
        question: "How would you describe your own personality in one sentence?",
        vi: "Bạn sẽ mô tả tính cách của mình như thế nào trong một câu?",
        hint: "Dùng <b>I consider myself a/an + tính từ + person who + động từ...</b>."
      }
    ]
  },
  {
    date: "2026-09-29",
    topic: "Gia đình (Family)",
    sentences: [
      {
        en: "My family has four members: my father, my mother, my older brother, and me.",
        ipa: "/maɪ ˈfæməli hæz fɔːr ˈmɛmbərz: maɪ ˈfɑːðər, maɪ ˈmʌðər, maɪ ˈoʊldər ˈbrʌðər, ənd mi/",
        vi: "Gia đình tôi có bốn thành viên: bố, mẹ, anh trai và tôi."
      },
      {
        en: "My father is fifty-two years old and he works as an accountant at a bank.",
        ipa: "/maɪ ˈfɑːðər ɪz ˈfɪfti tu jɪrz oʊld ənd hi wɜːrks æz ən əˈkaʊntənt æt ə bæŋk/",
        vi: "Bố tôi năm mươi hai tuổi và làm kế toán tại một ngân hàng."
      },
      {
        en: "My mother is a housewife, but she used to be a teacher before I was born.",
        ipa: "/maɪ ˈmʌðər ɪz ə ˈhaʊswaɪf, bʌt ʃi juːzd tu bi ə ˈtiːtʃər bɪˈfɔːr aɪ wəz bɔːrn/",
        vi: "Mẹ tôi là nội trợ, nhưng trước khi tôi ra đời mẹ từng là giáo viên."
      },
      {
        en: "My older brother is married and has a two-year-old daughter.",
        ipa: "/maɪ ˈoʊldər ˈbrʌðər ɪz ˈmærid ənd hæz ə tu jɪr oʊld ˈdɔːtər/",
        vi: "Anh trai tôi đã kết hôn và có một cô con gái hai tuổi."
      },
      {
        en: "We usually gather for a big family dinner every Sunday evening.",
        ipa: "/wi ˈjuʒuəli ˈɡæðər fɔːr ə bɪɡ ˈfæməli ˈdɪnər ˈɛvri ˈsʌndeɪ ˈiːvnɪŋ/",
        vi: "Chúng tôi thường tụ họp ăn tối gia đình vào mỗi tối Chủ nhật."
      },
      {
        en: "My grandparents live in the countryside, so we visit them once a month.",
        ipa: "/maɪ ˈɡrænpɛrənts lɪv ɪn ðə ˈkʌntriˌsaɪd, soʊ wi ˈvɪzɪt ðɛm wʌns ə mʌnθ/",
        vi: "Ông bà tôi sống ở vùng quê, nên chúng tôi ghé thăm một tháng một lần."
      },
      {
        en: "I get along very well with my brother, even though we sometimes argue about small things.",
        ipa: "/aɪ ɡɛt əˈlɔːŋ ˈvɛri wɛl wɪð maɪ ˈbrʌðər, ˈiːvən ðoʊ wi ˈsʌmtaɪmz ˈɑːrɡju əˈbaʊt smɔːl θɪŋz/",
        vi: "Tôi rất hòa hợp với anh trai, mặc dù đôi khi chúng tôi cãi nhau về những chuyện nhỏ nhặt."
      },
      {
        en: "My parents always encourage me to follow my own dreams.",
        ipa: "/maɪ ˈpɛrənts ˈɔːlweɪz ɪnˈkɜːrɪdʒ mi tu ˈfɑːloʊ maɪ oʊn driːmz/",
        vi: "Bố mẹ tôi luôn khuyến khích tôi theo đuổi ước mơ của chính mình."
      },
      {
        en: "I feel very grateful to have such a loving and supportive family.",
        ipa: "/aɪ fiːl ˈvɛri ˈɡreɪtfəl tu hæv sʌtʃ ə ˈlʌvɪŋ ənd səˈpɔːrtɪv ˈfæməli/",
        vi: "Tôi cảm thấy rất biết ơn vì có một gia đình yêu thương và luôn ủng hộ mình."
      },
      {
        en: "Family is the most important thing in my life.",
        ipa: "/ˈfæməli ɪz ðə moʊst ɪmˈpɔːrtənt θɪŋ ɪn maɪ laɪf/",
        vi: "Gia đình là điều quan trọng nhất trong cuộc đời tôi."
      }
    ],
    vocabulary: [
      { word: "family", ipa: "/ˈfæməli/", type: "n", meaning: "gia đình" },
      { word: "member", ipa: "/ˈmɛmbər/", type: "n", meaning: "thành viên" },
      { word: "accountant", ipa: "/əˈkaʊntənt/", type: "n", meaning: "kế toán viên" },
      { word: "housewife", ipa: "/ˈhaʊswaɪf/", type: "n", meaning: "người nội trợ" },
      { word: "used to", ipa: "/juːzd tu/", type: "v phrase", meaning: "đã từng (làm gì trong quá khứ)" },
      { word: "married", ipa: "/ˈmærid/", type: "adj", meaning: "đã kết hôn" },
      { word: "gather", ipa: "/ˈɡæðər/", type: "v", meaning: "tụ họp" },
      { word: "grandparents", ipa: "/ˈɡrænpɛrənts/", type: "n", meaning: "ông bà" },
      { word: "countryside", ipa: "/ˈkʌntriˌsaɪd/", type: "n", meaning: "vùng quê, nông thôn" },
      { word: "get along with", ipa: "/ɡɛt əˈlɔːŋ wɪð/", type: "phrasal verb", meaning: "hòa hợp với" },
      { word: "argue", ipa: "/ˈɑːrɡju/", type: "v", meaning: "cãi nhau, tranh luận" },
      { word: "encourage", ipa: "/ɪnˈkɜːrɪdʒ/", type: "v", meaning: "khuyến khích" },
      { word: "grateful", ipa: "/ˈɡreɪtfəl/", type: "adj", meaning: "biết ơn" },
      { word: "supportive", ipa: "/səˈpɔːrtɪv/", type: "adj", meaning: "luôn ủng hộ, hỗ trợ" },
      { word: "follow one's dreams", ipa: "/ˈfɑːloʊ wʌnz driːmz/", type: "phrase", meaning: "theo đuổi ước mơ" }
    ],
    grammar: [
      {
        sentence: "My family has four members: my father, my mother, my older brother, and me.",
        explain: "Dấu hai chấm <b>:</b> dùng để liệt kê chi tiết. <b>family</b> là danh từ tập hợp, chia động từ số ít <b>has</b>."
      },
      {
        sentence: "My father is fifty-two years old and he works as an accountant at a bank.",
        explain: "Cấu trúc tuổi <b>S + is + số tuổi + years old</b>; liên từ <b>and</b> nối hai mệnh đề. <b>work as</b> + nghề nghiệp."
      },
      {
        sentence: "My mother is a housewife, but she used to be a teacher before I was born.",
        explain: "Liên từ <b>but</b> thể hiện sự tương phản. Cấu trúc <b>used to + V</b> diễn tả thói quen/tình trạng trong quá khứ không còn đúng ở hiện tại. <b>before</b> + mệnh đề quá khứ đơn."
      },
      {
        sentence: "My older brother is married and has a two-year-old daughter.",
        explain: "Tính từ <b>married</b> đứng sau động từ <b>to be</b>. Tính từ ghép <b>two-year-old</b> (số + danh từ + old) bổ nghĩa cho danh từ đứng sau."
      },
      {
        sentence: "We usually gather for a big family dinner every Sunday evening.",
        explain: "Trạng từ tần suất <b>usually</b> đứng trước động từ thường. <b>every + thời gian</b> chỉ sự lặp lại đều đặn."
      },
      {
        sentence: "My grandparents live in the countryside, so we visit them once a month.",
        explain: "Liên từ <b>so</b> chỉ kết quả. Cụm <b>once a month</b> là cấu trúc tần suất (once/twice + a + đơn vị thời gian)."
      },
      {
        sentence: "I get along very well with my brother, even though we sometimes argue about small things.",
        explain: "Phrasal verb <b>get along well with</b> (hòa hợp với). Liên từ nhượng bộ <b>even though</b> + mệnh đề, dùng khi hai vế có ý trái ngược nhau."
      },
      {
        sentence: "My parents always encourage me to follow my own dreams.",
        explain: "Cấu trúc <b>encourage + tân ngữ + to V</b> nghĩa là khuyến khích ai làm gì."
      },
      {
        sentence: "I feel very grateful to have such a loving and supportive family.",
        explain: "Cấu trúc <b>feel + tính từ + to V</b>. <b>such a + tính từ + danh từ</b> dùng để nhấn mạnh mức độ."
      },
      {
        sentence: "Family is the most important thing in my life.",
        explain: "Cấu trúc so sánh nhất: <b>the most + tính từ dài + danh từ</b>."
      }
    ],
    speaking: [
      {
        cues: "family members / how many",
        question: "How many people are there in your family?",
        vi: "Gia đình bạn có bao nhiêu người?",
        hint: "Dùng <b>There are ... people in my family: ...</b>"
      },
      {
        cues: "father / job",
        question: "What does your father do for a living?",
        vi: "Bố bạn làm nghề gì?",
        hint: "Dùng <b>He works as a/an + nghề nghiệp</b>."
      },
      {
        cues: "mother / used to",
        question: "What did your mother use to do before she got married?",
        vi: "Trước khi lập gia đình mẹ bạn từng làm gì?",
        hint: "Dùng <b>used to + V</b> để nói về thói quen/công việc trong quá khứ."
      },
      {
        cues: "siblings / get along",
        question: "Do you get along well with your siblings?",
        vi: "Bạn có hòa hợp với anh chị em của mình không?",
        hint: "Dùng <b>get along (very) well with...</b>, có thể thêm <b>even though...</b>."
      },
      {
        cues: "family / gather / when",
        question: "When does your family usually gather together?",
        vi: "Gia đình bạn thường tụ họp khi nào?",
        hint: "Dùng <b>We usually gather + thời gian</b>."
      },
      {
        cues: "grandparents / live",
        question: "Where do your grandparents live, and how often do you visit them?",
        vi: "Ông bà bạn sống ở đâu và bạn ghé thăm bao lâu một lần?",
        hint: "Dùng <b>live in + nơi chốn</b>, tần suất <b>once a week/month</b>."
      },
      {
        cues: "parents / encourage",
        question: "How do your parents encourage you in life?",
        vi: "Bố mẹ khuyến khích bạn như thế nào trong cuộc sống?",
        hint: "Dùng <b>encourage + tân ngữ + to V</b>."
      }
    ]
  },
  {
    date: "2026-09-30",
    topic: "Đồ ăn & Nhà hàng (Food & Dining)",
    sentences: [
      {
        en: "I usually have a light breakfast, such as bread and eggs, before going to work.",
        ipa: "/aɪ ˈjuʒuəli hæv ə laɪt ˈbrɛkfəst, sʌtʃ æz brɛd ənd ɛɡz, bɪˈfɔːr ˈɡoʊɪŋ tu wɜːrk/",
        vi: "Tôi thường ăn sáng nhẹ, chẳng hạn như bánh mì và trứng, trước khi đi làm."
      },
      {
        en: "For lunch, I often order a bowl of noodle soup near my office.",
        ipa: "/fɔːr lʌntʃ, aɪ ˈɔːfən ˈɔːrdər ə boʊl ʌv ˈnuːdəl suːp nɪr maɪ ˈɔːfɪs/",
        vi: "Vào buổi trưa, tôi thường gọi một tô mì/phở gần văn phòng."
      },
      {
        en: "My favorite dish is grilled fish with steamed rice and fresh vegetables.",
        ipa: "/maɪ ˈfeɪvərɪt dɪʃ ɪz ɡrɪld fɪʃ wɪð stiːmd raɪs ənd frɛʃ ˈvɛdʒtəbəlz/",
        vi: "Món ăn yêu thích của tôi là cá nướng với cơm hấp và rau tươi."
      },
      {
        en: "Last weekend, I tried a new restaurant that serves spicy Thai food.",
        ipa: "/læst ˈwiːkɛnd, aɪ traɪd ə nu ˈrɛstərɑːnt ðæt sɜːrvz ˈspaɪsi taɪ fuːd/",
        vi: "Cuối tuần trước, tôi đã thử một nhà hàng mới chuyên phục vụ món Thái cay."
      },
      {
        en: "The waiter recommended a special dish, so I decided to order it.",
        ipa: "/ðə ˈweɪtər ˌrɛkəˈmɛndɪd ə ˈspɛʃəl dɪʃ, soʊ aɪ dɪˈsaɪdɪd tu ˈɔːrdər ɪt/",
        vi: "Người phục vụ đã giới thiệu một món đặc biệt, nên tôi quyết định gọi món đó."
      },
      {
        en: "The food was delicious, but the portion was a bit too small for the price.",
        ipa: "/ðə fuːd wəz dɪˈlɪʃəs, bʌt ðə ˈpɔːrʃən wəz ə bɪt tu smɔːl fɔːr ðə praɪs/",
        vi: "Đồ ăn rất ngon, nhưng khẩu phần hơi ít so với giá tiền."
      },
      {
        en: "I always ask for the bill in English when I eat at a foreign restaurant.",
        ipa: "/aɪ ˈɔːlweɪz æsk fɔːr ðə bɪl ɪn ˈɪŋɡlɪʃ wɛn aɪ iːt æt ə ˈfɔːrɪn ˈrɛstərɑːnt/",
        vi: "Tôi luôn xin thanh toán bằng tiếng Anh khi ăn ở nhà hàng nước ngoài."
      },
      {
        en: "I try to avoid fast food because it's not very healthy.",
        ipa: "/aɪ traɪ tu əˈvɔɪd fæst fuːd bɪˈkɔːz ɪts nɑːt ˈvɛri ˈhɛlθi/",
        vi: "Tôi cố gắng tránh đồ ăn nhanh vì nó không tốt cho sức khỏe lắm."
      },
      {
        en: "On special occasions, my family likes to go out for a nice dinner together.",
        ipa: "/ɑːn ˈspɛʃəl əˈkeɪʒənz, maɪ ˈfæməli laɪks tu ɡoʊ aʊt fɔːr ə naɪs ˈdɪnər təˈɡɛðər/",
        vi: "Vào những dịp đặc biệt, gia đình tôi thích cùng nhau đi ăn tối bên ngoài."
      },
      {
        en: "Trying new dishes is one of the best ways to learn about a different culture.",
        ipa: "/ˈtraɪɪŋ nu ˈdɪʃɪz ɪz wʌn ʌv ðə bɛst weɪz tu lɜːrn əˈbaʊt ə ˈdɪfərənt ˈkʌltʃər/",
        vi: "Thử các món ăn mới là một trong những cách tốt nhất để tìm hiểu một nền văn hóa khác."
      }
    ],
    vocabulary: [
      { word: "light breakfast", ipa: "/laɪt ˈbrɛkfəst/", type: "phrase", meaning: "bữa sáng nhẹ" },
      { word: "order", ipa: "/ˈɔːrdər/", type: "v", meaning: "gọi món, đặt hàng" },
      { word: "favorite dish", ipa: "/ˈfeɪvərɪt dɪʃ/", type: "n phrase", meaning: "món ăn yêu thích" },
      { word: "steamed rice", ipa: "/stiːmd raɪs/", type: "n", meaning: "cơm hấp/cơm trắng" },
      { word: "vegetable", ipa: "/ˈvɛdʒtəbəl/", type: "n", meaning: "rau củ" },
      { word: "spicy", ipa: "/ˈspaɪsi/", type: "adj", meaning: "cay" },
      { word: "recommend", ipa: "/ˌrɛkəˈmɛnd/", type: "v", meaning: "giới thiệu, đề xuất" },
      { word: "portion", ipa: "/ˈpɔːrʃən/", type: "n", meaning: "khẩu phần" },
      { word: "bill", ipa: "/bɪl/", type: "n", meaning: "hóa đơn" },
      { word: "fast food", ipa: "/fæst fuːd/", type: "n", meaning: "đồ ăn nhanh" },
      { word: "healthy", ipa: "/ˈhɛlθi/", type: "adj", meaning: "lành mạnh, tốt cho sức khỏe" },
      { word: "special occasion", ipa: "/ˈspɛʃəl əˈkeɪʒən/", type: "n phrase", meaning: "dịp đặc biệt" },
      { word: "go out for dinner", ipa: "/ɡoʊ aʊt fɔːr ˈdɪnər/", type: "phrase", meaning: "đi ăn tối bên ngoài" },
      { word: "avoid", ipa: "/əˈvɔɪd/", type: "v", meaning: "tránh" },
      { word: "try", ipa: "/traɪ/", type: "v", meaning: "thử" }
    ],
    grammar: [
      {
        sentence: "I usually have a light breakfast, such as bread and eggs, before going to work.",
        explain: "<b>such as</b> dùng để đưa ra ví dụ. <b>before + V-ing</b> nghĩa là trước khi làm gì."
      },
      {
        sentence: "For lunch, I often order a bowl of noodle soup near my office.",
        explain: "Cụm trạng từ chỉ thời gian <b>For lunch</b> đứng đầu câu. Trạng từ tần suất <b>often</b> đứng trước động từ thường."
      },
      {
        sentence: "My favorite dish is grilled fish with steamed rice and fresh vegetables.",
        explain: "Cấu trúc <b>My favorite... is...</b> để nêu sở thích. Giới từ <b>with</b> liệt kê món ăn kèm."
      },
      {
        sentence: "Last weekend, I tried a new restaurant that serves spicy Thai food.",
        explain: "Thì quá khứ đơn <b>tried</b> diễn tả hành động đã xảy ra. Mệnh đề quan hệ <b>that serves...</b> bổ nghĩa cho danh từ đứng trước."
      },
      {
        sentence: "The waiter recommended a special dish, so I decided to order it.",
        explain: "Thì quá khứ đơn <b>recommended</b>, <b>decided</b>. Liên từ <b>so</b> chỉ kết quả. Cấu trúc <b>decide to + V</b>."
      },
      {
        sentence: "The food was delicious, but the portion was a bit too small for the price.",
        explain: "Liên từ <b>but</b> thể hiện sự tương phản. Cấu trúc <b>a bit too + tính từ</b> diễn tả mức độ hơi quá."
      },
      {
        sentence: "I always ask for the bill in English when I eat at a foreign restaurant.",
        explain: "Trạng từ <b>always</b> + động từ thường. <b>ask for</b> + danh từ. <b>when</b> mở đầu mệnh đề chỉ thời gian/hoàn cảnh."
      },
      {
        sentence: "I try to avoid fast food because it's not very healthy.",
        explain: "Cấu trúc <b>try to + V</b> (cố gắng làm gì). Liên từ <b>because</b> giải thích lý do."
      },
      {
        sentence: "On special occasions, my family likes to go out for a nice dinner together.",
        explain: "Cụm giới từ <b>On special occasions</b> chỉ thời điểm, đứng đầu câu. Cấu trúc <b>like to + V</b>."
      },
      {
        sentence: "Trying new dishes is one of the best ways to learn about a different culture.",
        explain: "Danh động từ <b>Trying new dishes</b> làm chủ ngữ của câu. Cấu trúc so sánh nhất <b>one of the best ways to + V</b>."
      }
    ],
    speaking: [
      {
        cues: "breakfast / usually",
        question: "What do you usually have for breakfast?",
        vi: "Bạn thường ăn gì vào bữa sáng?",
        hint: "Dùng <b>I usually have + món ăn, such as...</b>"
      },
      {
        cues: "favorite dish / why",
        question: "What is your favorite dish and why do you like it?",
        vi: "Món ăn yêu thích của bạn là gì và vì sao bạn thích nó?",
        hint: "Dùng <b>My favorite dish is... with...</b>"
      },
      {
        cues: "new restaurant / recently",
        question: "Have you tried any new restaurant recently?",
        vi: "Gần đây bạn có thử nhà hàng mới nào không?",
        hint: "Dùng thì quá khứ đơn: <b>I tried a new restaurant that...</b>"
      },
      {
        cues: "food / opinion",
        question: "What did you think about the food and the price?",
        vi: "Bạn nghĩ sao về món ăn và giá cả?",
        hint: "Dùng <b>The food was..., but...</b>"
      },
      {
        cues: "fast food / avoid",
        question: "Do you eat fast food often, or do you try to avoid it?",
        vi: "Bạn có hay ăn đồ ăn nhanh không, hay bạn cố tránh nó?",
        hint: "Dùng <b>try to avoid... because...</b>"
      },
      {
        cues: "special occasion / family dinner",
        question: "What do you do with your family on special occasions?",
        vi: "Gia đình bạn làm gì vào những dịp đặc biệt?",
        hint: "Dùng <b>On special occasions, my family likes to...</b>"
      },
      {
        cues: "new dishes / culture",
        question: "Why is trying new dishes a good way to learn about culture?",
        vi: "Vì sao thử món ăn mới là cách tốt để tìm hiểu văn hóa?",
        hint: "Dùng <b>Trying new dishes is one of the best ways to...</b>"
      }
    ]
  },
  {
    date: "2026-10-01",
    topic: "Thời tiết & Các mùa (Weather & Seasons)",
    sentences: [
      {
        en: "Vietnam has a tropical climate with four seasons in the north.",
        ipa: "/ˌviɛtˈnɑːm hæz ə ˈtrɑːpɪkəl ˈklaɪmət wɪð fɔːr ˈsiːzənz ɪn ðə nɔːrθ/",
        vi: "Việt Nam có khí hậu nhiệt đới với bốn mùa ở miền Bắc."
      },
      {
        en: "Summer here is extremely hot and humid, especially in July and August.",
        ipa: "/ˈsʌmər hɪr ɪz ɪkˈstriːmli hɑːt ənd ˈhjuːmɪd, ɪˈspɛʃəli ɪn dʒʊˈlaɪ ənd ˈɔːɡəst/",
        vi: "Mùa hè ở đây rất nóng và ẩm, đặc biệt là vào tháng Bảy và tháng Tám."
      },
      {
        en: "It usually rains heavily during the monsoon season from June to September.",
        ipa: "/ɪt ˈjuʒuəli reɪnz ˈhɛvɪli ˈdʊrɪŋ ðə mɑːnˈsuːn ˈsiːzən frʌm dʒun tu sɛpˈtɛmbər/",
        vi: "Trời thường mưa rất to trong mùa mưa, từ tháng Sáu đến tháng Chín."
      },
      {
        en: "I always carry an umbrella with me because the weather can change suddenly.",
        ipa: "/aɪ ˈɔːlweɪz ˈkæri ən ʌmˈbrɛlə wɪð mi bɪˈkɔːz ðə ˈwɛðər kæn tʃeɪndʒ ˈsʌdənli/",
        vi: "Tôi luôn mang theo ô vì thời tiết có thể thay đổi đột ngột."
      },
      {
        en: "Autumn is my favorite season because the weather becomes cooler and drier.",
        ipa: "/ˈɔːtəm ɪz maɪ ˈfeɪvərɪt ˈsiːzən bɪˈkɔːz ðə ˈwɛðər bɪˈkʌmz ˈkulər ənd ˈdraɪər/",
        vi: "Mùa thu là mùa tôi yêu thích nhất vì thời tiết trở nên mát mẻ và khô ráo hơn."
      },
      {
        en: "In winter, the temperature can drop below fifteen degrees Celsius in the north.",
        ipa: "/ɪn ˈwɪntər, ðə ˈtɛmprətʃər kæn drɑːp bɪˈloʊ ˈfɪftiːn dɪˈɡriz ˈsɛlsiəs ɪn ðə nɔːrθ/",
        vi: "Vào mùa đông, nhiệt độ ở miền Bắc có thể xuống dưới mười lăm độ C."
      },
      {
        en: "I have to wear a thick jacket and a scarf when it gets that cold.",
        ipa: "/aɪ hæv tu wɛr ə θɪk ˈdʒækɪt ənd ə skɑːrf wɛn ɪt ɡɛts ðæt koʊld/",
        vi: "Tôi phải mặc áo khoác dày và quàng khăn khi trời lạnh như vậy."
      },
      {
        en: "Before I leave the house, I always check the weather forecast on my phone.",
        ipa: "/bɪˈfɔːr aɪ liv ðə haʊs, aɪ ˈɔːlweɪz tʃɛk ðə ˈwɛðər ˈfɔːrkæst ɑːn maɪ foʊn/",
        vi: "Trước khi ra khỏi nhà, tôi luôn kiểm tra dự báo thời tiết trên điện thoại."
      },
      {
        en: "If it is sunny at the weekend, I usually go for a walk in the park.",
        ipa: "/ɪf ɪt ɪz ˈsʌni æt ðə ˈwiːkɛnd, aɪ ˈjuʒuəli ɡoʊ fɔːr ə wɔːk ɪn ðə pɑːrk/",
        vi: "Nếu trời nắng vào cuối tuần, tôi thường đi dạo trong công viên."
      },
      {
        en: "No matter what the weather is like, I try to stay positive every day.",
        ipa: "/noʊ ˈmætər wʌt ðə ˈwɛðər ɪz laɪk, aɪ traɪ tu steɪ ˈpɑːzətɪv ˈɛvri deɪ/",
        vi: "Dù thời tiết có ra sao, tôi vẫn cố gắng giữ tinh thần lạc quan mỗi ngày."
      }
    ],
    vocabulary: [
      { word: "climate", ipa: "/ˈklaɪmət/", type: "n", meaning: "khí hậu" },
      { word: "humid", ipa: "/ˈhjuːmɪd/", type: "adj", meaning: "ẩm" },
      { word: "monsoon season", ipa: "/mɑːnˈsuːn ˈsiːzən/", type: "n", meaning: "mùa mưa" },
      { word: "umbrella", ipa: "/ʌmˈbrɛlə/", type: "n", meaning: "cái ô/dù" },
      { word: "suddenly", ipa: "/ˈsʌdənli/", type: "adv", meaning: "đột ngột" },
      { word: "cooler", ipa: "/ˈkulər/", type: "adj (so sánh hơn)", meaning: "mát hơn" },
      { word: "temperature", ipa: "/ˈtɛmprətʃər/", type: "n", meaning: "nhiệt độ" },
      { word: "degrees Celsius", ipa: "/dɪˈɡriz ˈsɛlsiəs/", type: "n", meaning: "độ C" },
      { word: "jacket", ipa: "/ˈdʒækɪt/", type: "n", meaning: "áo khoác" },
      { word: "scarf", ipa: "/skɑːrf/", type: "n", meaning: "khăn quàng cổ" },
      { word: "weather forecast", ipa: "/ˈwɛðər ˈfɔːrkæst/", type: "n", meaning: "dự báo thời tiết" },
      { word: "sunny", ipa: "/ˈsʌni/", type: "adj", meaning: "nắng" },
      { word: "go for a walk", ipa: "/ɡoʊ fɔːr ə wɔːk/", type: "phrase", meaning: "đi dạo" },
      { word: "no matter what", ipa: "/noʊ ˈmætər wʌt/", type: "phrase", meaning: "dù cho thế nào" },
      { word: "positive", ipa: "/ˈpɑːzətɪv/", type: "adj", meaning: "tích cực, lạc quan" }
    ],
    grammar: [
      {
        sentence: "Vietnam has a tropical climate with four seasons in the north.",
        explain: "Thì hiện tại đơn diễn tả sự thật địa lý. Cụm giới từ <b>with four seasons</b> bổ nghĩa cho <b>climate</b>."
      },
      {
        sentence: "Summer here is extremely hot and humid, especially in July and August.",
        explain: "Trạng từ nhấn mạnh <b>extremely</b> + tính từ. <b>especially in + thời gian</b> để nhấn mạnh."
      },
      {
        sentence: "It usually rains heavily during the monsoon season from June to September.",
        explain: "Trạng từ <b>heavily</b> bổ nghĩa cho động từ <b>rains</b>. Cấu trúc <b>during + danh từ</b> và <b>from...to...</b> chỉ khoảng thời gian."
      },
      {
        sentence: "I always carry an umbrella with me because the weather can change suddenly.",
        explain: "Trạng từ <b>always</b> + động từ thường. Liên từ <b>because</b> giải thích lý do. <b>can</b> diễn tả khả năng."
      },
      {
        sentence: "Autumn is my favorite season because the weather becomes cooler and drier.",
        explain: "Liên từ <b>because</b> giải thích lý do thích mùa thu. Động từ <b>becomes</b> + tính từ so sánh hơn (<b>cooler, drier</b>)."
      },
      {
        sentence: "In winter, the temperature can drop below fifteen degrees Celsius in the north.",
        explain: "<b>can</b> diễn tả khả năng xảy ra. Cấu trúc <b>drop below + số</b> nghĩa là giảm xuống dưới mức nào đó."
      },
      {
        sentence: "I have to wear a thick jacket and a scarf when it gets that cold.",
        explain: "Cấu trúc <b>have to + V</b> diễn tả sự bắt buộc. <b>when</b> mở đầu mệnh đề chỉ điều kiện/thời gian."
      },
      {
        sentence: "Before I leave the house, I always check the weather forecast on my phone.",
        explain: "Mệnh đề <b>Before + S + V</b> đứng đầu câu, có dấu phẩy ngăn cách. Trạng từ <b>always</b> + động từ thường."
      },
      {
        sentence: "If it is sunny at the weekend, I usually go for a walk in the park.",
        explain: "Câu điều kiện loại 0/1: <b>If + hiện tại đơn, S + hiện tại đơn</b>, diễn tả thói quen theo điều kiện."
      },
      {
        sentence: "No matter what the weather is like, I try to stay positive every day.",
        explain: "Cấu trúc nhượng bộ <b>No matter what + mệnh đề</b>, nghĩa là dù cho điều gì xảy ra. <b>try to + V</b>."
      }
    ],
    speaking: [
      {
        cues: "climate / hometown",
        question: "What is the climate like in your hometown?",
        vi: "Khí hậu ở quê bạn như thế nào?",
        hint: "Dùng <b>My hometown has a ... climate with...</b>"
      },
      {
        cues: "summer / hot",
        question: "What is summer like where you live?",
        vi: "Mùa hè ở nơi bạn sống như thế nào?",
        hint: "Dùng <b>Summer here is extremely + tính từ</b>."
      },
      {
        cues: "rain / when",
        question: "When does it usually rain the most in your area?",
        vi: "Ở khu vực bạn, trời thường mưa nhiều nhất vào lúc nào?",
        hint: "Dùng <b>It usually rains during... from... to...</b>"
      },
      {
        cues: "favorite season / why",
        question: "What is your favorite season and why?",
        vi: "Mùa bạn thích nhất là mùa nào và vì sao?",
        hint: "Dùng <b>... is my favorite season because...</b>"
      },
      {
        cues: "winter / cold",
        question: "How cold does it get in winter where you live?",
        vi: "Mùa đông ở nơi bạn sống lạnh đến mức nào?",
        hint: "Dùng <b>The temperature can drop below...</b>"
      },
      {
        cues: "weather forecast / check",
        question: "Do you usually check the weather forecast before going out?",
        vi: "Bạn có thường kiểm tra dự báo thời tiết trước khi ra ngoài không?",
        hint: "Dùng <b>Before I..., I always check...</b>"
      },
      {
        cues: "sunny weekend / activity",
        question: "What do you like to do when it's sunny at the weekend?",
        vi: "Bạn thích làm gì khi trời nắng vào cuối tuần?",
        hint: "Dùng câu điều kiện: <b>If it is sunny, I usually...</b>"
      }
    ]
  },
  {
    date: "2026-10-02",
    topic: "Mua sắm (Shopping)",
    sentences: [
      {
        en: "I usually go grocery shopping once a week, mostly on Saturday mornings.",
        ipa: "/aɪ ˈjuʒuəli ɡoʊ ˈɡroʊsəri ˈʃɑːpɪŋ wʌns ə wik, ˈmoʊstli ɑːn ˈsætərdeɪ ˈmɔːrnɪŋz/",
        vi: "Tôi thường đi mua sắm đồ tạp hóa một tuần một lần, chủ yếu vào sáng thứ Bảy."
      },
      {
        en: "Before I go shopping, I always make a list of the things I need to buy.",
        ipa: "/bɪˈfɔːr aɪ ɡoʊ ˈʃɑːpɪŋ, aɪ ˈɔːlweɪz meɪk ə lɪst ʌv ðə θɪŋz aɪ nid tu baɪ/",
        vi: "Trước khi đi mua sắm, tôi luôn lập một danh sách những thứ cần mua."
      },
      {
        en: "Yesterday, I went to the supermarket to buy some fruit and household items.",
        ipa: "/ˈjɛstərdeɪ, aɪ wɛnt tu ðə ˈsuːpərˌmɑːrkɪt tu baɪ sʌm fruːt ənd ˈhaʊshoʊld ˈaɪtəmz/",
        vi: "Hôm qua, tôi đã đến siêu thị để mua trái cây và đồ dùng gia đình."
      },
      {
        en: "I found a nice jacket on sale, so I decided to try it on.",
        ipa: "/aɪ faʊnd ə naɪs ˈdʒækɪt ɑːn seɪl, soʊ aɪ dɪˈsaɪdɪd tu traɪ ɪt ɑːn/",
        vi: "Tôi tìm thấy một chiếc áo khoác đẹp đang giảm giá, nên quyết định thử nó."
      },
      {
        en: "The shop assistant asked if I needed a different size.",
        ipa: "/ðə ʃɑːp əˈsɪstənt æskt ɪf aɪ ˈniːdɪd ə ˈdɪfərənt saɪz/",
        vi: "Nhân viên bán hàng hỏi liệu tôi có cần một kích cỡ khác không."
      },
      {
        en: "I compared the prices at two stores before making my final decision.",
        ipa: "/aɪ kəmˈpɛrd ðə ˈpraɪsɪz æt tu stɔːrz bɪˈfɔːr ˈmeɪkɪŋ maɪ ˈfaɪnəl dɪˈsɪʒən/",
        vi: "Tôi đã so sánh giá ở hai cửa hàng trước khi đưa ra quyết định cuối cùng."
      },
      {
        en: "These days, I prefer shopping online because it saves both time and money.",
        ipa: "/ðiz deɪz, aɪ prɪˈfɜːr ˈʃɑːpɪŋ ˈɔːnlaɪn bɪˈkɔːz ɪt seɪvz boʊθ taɪm ənd ˈmʌni/",
        vi: "Dạo này, tôi thích mua sắm trực tuyến hơn vì nó tiết kiệm cả thời gian lẫn tiền bạc."
      },
      {
        en: "However, I still like going to the mall sometimes just to look around.",
        ipa: "/haʊˈɛvər, aɪ stɪl laɪk ˈɡoʊɪŋ tu ðə mɔːl ˈsʌmtaɪmz dʒʌst tu lʊk əˈraʊnd/",
        vi: "Tuy nhiên, thỉnh thoảng tôi vẫn thích đi đến trung tâm thương mại chỉ để dạo xem."
      },
      {
        en: "If the quality is not good, I always ask for a refund or an exchange.",
        ipa: "/ɪf ðə ˈkwɑːləti ɪz nɑːt ɡʊd, aɪ ˈɔːlweɪz æsk fɔːr ə ˈriːfʌnd ɔːr ən ɪksˈtʃeɪndʒ/",
        vi: "Nếu chất lượng không tốt, tôi luôn yêu cầu hoàn tiền hoặc đổi hàng."
      },
      {
        en: "In general, I try to shop wisely and avoid buying things I don't really need.",
        ipa: "/ɪn ˈdʒɛnərəl, aɪ traɪ tu ʃɑːp ˈwaɪzli ənd əˈvɔɪd ˈbaɪɪŋ θɪŋz aɪ doʊnt ˈrɪəli nid/",
        vi: "Nhìn chung, tôi cố gắng mua sắm khôn ngoan và tránh mua những thứ mình không thực sự cần."
      }
    ],
    vocabulary: [
      { word: "grocery shopping", ipa: "/ˈɡroʊsəri ˈʃɑːpɪŋ/", type: "n phrase", meaning: "mua sắm đồ tạp hóa" },
      { word: "make a list", ipa: "/meɪk ə lɪst/", type: "phrase", meaning: "lập danh sách" },
      { word: "supermarket", ipa: "/ˈsuːpərˌmɑːrkɪt/", type: "n", meaning: "siêu thị" },
      { word: "household items", ipa: "/ˈhaʊshoʊld ˈaɪtəmz/", type: "n", meaning: "đồ dùng gia đình" },
      { word: "on sale", ipa: "/ɑːn seɪl/", type: "phrase", meaning: "đang giảm giá" },
      { word: "try on", ipa: "/traɪ ɑːn/", type: "phrasal verb", meaning: "mặc thử" },
      { word: "shop assistant", ipa: "/ʃɑːp əˈsɪstənt/", type: "n", meaning: "nhân viên bán hàng" },
      { word: "compare", ipa: "/kəmˈpɛr/", type: "v", meaning: "so sánh" },
      { word: "prefer", ipa: "/prɪˈfɜːr/", type: "v", meaning: "thích hơn" },
      { word: "save", ipa: "/seɪv/", type: "v", meaning: "tiết kiệm" },
      { word: "mall", ipa: "/mɔːl/", type: "n", meaning: "trung tâm thương mại" },
      { word: "quality", ipa: "/ˈkwɑːləti/", type: "n", meaning: "chất lượng" },
      { word: "refund", ipa: "/ˈriːfʌnd/", type: "n", meaning: "hoàn tiền" },
      { word: "exchange", ipa: "/ɪksˈtʃeɪndʒ/", type: "n", meaning: "đổi hàng" },
      { word: "wisely", ipa: "/ˈwaɪzli/", type: "adv", meaning: "một cách khôn ngoan" }
    ],
    grammar: [
      {
        sentence: "I usually go grocery shopping once a week, mostly on Saturday mornings.",
        explain: "Trạng từ tần suất <b>usually</b> + <b>once a week</b>. <b>mostly on + thời gian</b> bổ nghĩa thêm."
      },
      {
        sentence: "Before I go shopping, I always make a list of the things I need to buy.",
        explain: "Mệnh đề <b>Before + S + V</b> đứng đầu câu. Trạng từ <b>always</b> + động từ thường. Mệnh đề quan hệ rút gọn <b>the things (that) I need to buy</b>."
      },
      {
        sentence: "Yesterday, I went to the supermarket to buy some fruit and household items.",
        explain: "Thì quá khứ đơn <b>went</b> (do có <b>Yesterday</b>). <b>to + V</b> chỉ mục đích."
      },
      {
        sentence: "I found a nice jacket on sale, so I decided to try it on.",
        explain: "Thì quá khứ đơn <b>found, decided</b>. Liên từ <b>so</b> chỉ kết quả. Phrasal verb <b>try on</b>."
      },
      {
        sentence: "The shop assistant asked if I needed a different size.",
        explain: "Câu hỏi gián tiếp (tường thuật câu hỏi Yes/No): <b>asked if + mệnh đề</b>."
      },
      {
        sentence: "I compared the prices at two stores before making my final decision.",
        explain: "Thì quá khứ đơn <b>compared</b>. <b>before + V-ing</b> nghĩa là trước khi làm gì."
      },
      {
        sentence: "These days, I prefer shopping online because it saves both time and money.",
        explain: "<b>These days</b> mở đầu câu chỉ hiện tại. <b>prefer + V-ing</b>. Liên từ <b>because</b> giải thích lý do."
      },
      {
        sentence: "However, I still like going to the mall sometimes just to look around.",
        explain: "Trạng từ liên kết <b>However</b> đứng đầu câu, có dấu phẩy, thể hiện sự tương phản. <b>just to + V</b> chỉ mục đích."
      },
      {
        sentence: "If the quality is not good, I always ask for a refund or an exchange.",
        explain: "Câu điều kiện loại 1: <b>If + hiện tại đơn, S + always + V</b>."
      },
      {
        sentence: "In general, I try to shop wisely and avoid buying things I don't really need.",
        explain: "<b>In general</b> mở đầu câu để tổng kết. <b>try to + V</b>; <b>avoid + V-ing</b>."
      }
    ],
    speaking: [
      {
        cues: "grocery shopping / how often",
        question: "How often do you go grocery shopping?",
        vi: "Bạn đi mua đồ tạp hóa bao lâu một lần?",
        hint: "Dùng <b>I usually go... once a week/month</b>."
      },
      {
        cues: "shopping list / before",
        question: "Do you make a shopping list before you go shopping?",
        vi: "Bạn có lập danh sách trước khi đi mua sắm không?",
        hint: "Dùng <b>Before I go shopping, I always...</b>"
      },
      {
        cues: "last time / bought",
        question: "What did you buy the last time you went shopping?",
        vi: "Lần gần nhất đi mua sắm bạn đã mua gì?",
        hint: "Dùng thì quá khứ đơn: <b>I went to... to buy...</b>"
      },
      {
        cues: "online / in person",
        question: "Do you prefer shopping online or in a store? Why?",
        vi: "Bạn thích mua sắm online hay tại cửa hàng hơn? Vì sao?",
        hint: "Dùng <b>I prefer... because it...</b>"
      },
      {
        cues: "sale / discount",
        question: "Have you ever bought something on sale recently?",
        vi: "Gần đây bạn có mua món gì đang giảm giá không?",
        hint: "Dùng <b>I found... on sale, so I...</b>"
      },
      {
        cues: "bad quality / refund",
        question: "What do you do if the quality of a product is not good?",
        vi: "Bạn sẽ làm gì nếu chất lượng sản phẩm không tốt?",
        hint: "Dùng câu điều kiện: <b>If the quality is not good, I...</b>"
      },
      {
        cues: "shop wisely / avoid",
        question: "How do you try to shop more wisely?",
        vi: "Bạn cố gắng mua sắm khôn ngoan hơn bằng cách nào?",
        hint: "Dùng <b>I try to... and avoid + V-ing...</b>"
      }
    ]
  },
  {
    date: "2026-10-03",
    topic: "Ôn tập tuần 1: Từ vựng & Ngữ pháp (Weekly Review 1 — Vocabulary & Grammar)",
    sentences: [
      {
        en: "This week, I practiced introducing myself in English, talking about my name, age, and job.",
        ipa: "/ðɪs wik, aɪ ˈpræktɪst ˌɪntrəˈdusɪŋ maɪˈsɛlf ɪn ˈɪŋɡlɪʃ, ˈtɔːkɪŋ əˈbaʊt maɪ neɪm, eɪdʒ, ənd dʒɑːb/",
        vi: "Tuần này, tôi đã luyện giới thiệu bản thân bằng tiếng Anh, nói về tên, tuổi và công việc của mình."
      },
      {
        en: "I also learned how to describe my family members and their personalities.",
        ipa: "/aɪ ˈɔːlsoʊ lɜːrnd haʊ tu dɪˈskraɪb maɪ ˈfæməli ˈmɛmbərz ənd ðɛr ˌpɜːrsəˈnælətiz/",
        vi: "Tôi cũng đã học cách mô tả các thành viên trong gia đình và tính cách của họ."
      },
      {
        en: "One useful phrase I picked up is 'get along well with', which means to have a good relationship.",
        ipa: "/wʌn ˈjusfəl freɪz aɪ pɪkt ʌp ɪz ɡɛt əˈlɔːŋ wɛl wɪð, wɪtʃ minz tu hæv ə ɡʊd rɪˈleɪʃənʃɪp/",
        vi: "Một cụm từ hữu ích tôi học được là 'get along well with', nghĩa là có mối quan hệ tốt."
      },
      {
        en: "I remember that 'used to' describes a habit or state that existed in the past but not now.",
        ipa: "/aɪ rɪˈmɛmbər ðæt juːzd tu dɪˈskraɪbz ə ˈhæbɪt ɔːr steɪt ðæt ɪɡˈzɪstɪd ɪn ðə pæst bʌt nɑːt naʊ/",
        vi: "Tôi nhớ rằng 'used to' diễn tả một thói quen hay tình trạng đã có trong quá khứ nhưng không còn ở hiện tại."
      },
      {
        en: "Talking about food, I learned words like 'portion', 'recommend', and 'fast food'.",
        ipa: "/ˈtɔːkɪŋ əˈbaʊt fuːd, aɪ lɜːrnd wɜːrdz laɪk ˈpɔːrʃən, ˌrɛkəˈmɛnd, ənd fæst fuːd/",
        vi: "Nói về đồ ăn, tôi đã học các từ như 'portion' (khẩu phần), 'recommend' (giới thiệu) và 'fast food' (đồ ăn nhanh)."
      },
      {
        en: "I still remember that dish I tried at the new restaurant was spicy but delicious.",
        ipa: "/aɪ stɪl rɪˈmɛmbər ðæt dɪʃ aɪ traɪd æt ðə nu ˈrɛstərɑːnt wəz ˈspaɪsi bʌt dɪˈlɪʃəs/",
        vi: "Tôi vẫn nhớ món ăn mình đã thử ở nhà hàng mới đó cay nhưng rất ngon."
      },
      {
        en: "For the weather topic, I now know how to say 'humid', 'monsoon season', and 'weather forecast'.",
        ipa: "/fɔːr ðə ˈwɛðər ˈtɑːpɪk, aɪ naʊ noʊ haʊ tu seɪ ˈhjuːmɪd, mɑːnˈsuːn ˈsiːzən, ənd ˈwɛðər ˈfɔːrkæst/",
        vi: "Về chủ đề thời tiết, giờ tôi đã biết cách nói 'humid' (ẩm), 'monsoon season' (mùa mưa) và 'weather forecast' (dự báo thời tiết)."
      },
      {
        en: "I also reviewed the structure 'no matter what', which is used to show that something does not change a result.",
        ipa: "/aɪ ˈɔːlsoʊ rɪˈvjud ðə ˈstrʌktʃər noʊ ˈmætər wʌt, wɪtʃ ɪz juzd tu ʃoʊ ðæt ˈsʌmθɪŋ dʌz nɑːt tʃeɪndʒ ə rɪˈzʌlt/",
        vi: "Tôi cũng ôn lại cấu trúc 'no matter what', dùng để cho thấy điều gì đó không làm thay đổi kết quả."
      },
      {
        en: "In the shopping lesson, I learned to compare prices and ask for a refund when needed.",
        ipa: "/ɪn ðə ˈʃɑːpɪŋ ˈlɛsən, aɪ lɜːrnd tu kəmˈpɛr ˈpraɪsɪz ənd æsk fɔːr ə ˈriːfʌnd wɛn ˈniːdɪd/",
        vi: "Trong bài học mua sắm, tôi đã học cách so sánh giá và yêu cầu hoàn tiền khi cần."
      },
      {
        en: "Overall, this week taught me a lot of practical vocabulary that I can use in real conversations.",
        ipa: "/ˌoʊvərˈɔːl, ðɪs wik tɔːt mi ə lɑːt ʌv ˈpræktɪkəl vəˈkæbjəlɛri ðæt aɪ kæn juz ɪn rɪəl ˌkɑːnvərˈseɪʃənz/",
        vi: "Nhìn chung, tuần này đã dạy tôi rất nhiều từ vựng thực tế mà tôi có thể dùng trong các cuộc hội thoại thật."
      }
    ],
    vocabulary: [
      { word: "introduce oneself", ipa: "/ˌɪntrəˈdus wʌnˈsɛlf/", type: "phrase", meaning: "giới thiệu bản thân (Ngày 1)" },
      { word: "get along well with", ipa: "/ɡɛt əˈlɔːŋ wɛl wɪð/", type: "phrase", meaning: "hòa hợp với (Ngày 2)" },
      { word: "used to", ipa: "/juːzd tu/", type: "v phrase", meaning: "đã từng (Ngày 2)" },
      { word: "portion", ipa: "/ˈpɔːrʃən/", type: "n", meaning: "khẩu phần (Ngày 3)" },
      { word: "recommend", ipa: "/ˌrɛkəˈmɛnd/", type: "v", meaning: "giới thiệu, đề xuất (Ngày 3)" },
      { word: "fast food", ipa: "/fæst fuːd/", type: "n", meaning: "đồ ăn nhanh (Ngày 3)" },
      { word: "humid", ipa: "/ˈhjuːmɪd/", type: "adj", meaning: "ẩm (Ngày 4)" },
      { word: "monsoon season", ipa: "/mɑːnˈsuːn ˈsiːzən/", type: "n", meaning: "mùa mưa (Ngày 4)" },
      { word: "weather forecast", ipa: "/ˈwɛðər ˈfɔːrkæst/", type: "n", meaning: "dự báo thời tiết (Ngày 4)" },
      { word: "no matter what", ipa: "/noʊ ˈmætər wʌt/", type: "phrase", meaning: "dù cho thế nào (Ngày 4)" },
      { word: "compare", ipa: "/kəmˈpɛr/", type: "v", meaning: "so sánh (Ngày 5)" },
      { word: "refund", ipa: "/ˈriːfʌnd/", type: "n", meaning: "hoàn tiền (Ngày 5)" },
      { word: "practical", ipa: "/ˈpræktɪkəl/", type: "adj", meaning: "thực tế, thực dụng" }
    ],
    grammar: [
      {
        sentence: "This week, I practiced introducing myself in English, talking about my name, age, and job.",
        explain: "Cấu trúc <b>practice + V-ing</b>. Ôn lại nội dung giới thiệu bản thân (tên, tuổi, nghề nghiệp) đã học ở Ngày 1."
      },
      {
        sentence: "I also learned how to describe my family members and their personalities.",
        explain: "Cấu trúc <b>learn how to + V</b>. Ôn lại chủ đề gia đình ở Ngày 2."
      },
      {
        sentence: "One useful phrase I picked up is 'get along well with', which means to have a good relationship.",
        explain: "Ôn lại phrasal verb <b>get along well with</b> (Ngày 2 – Gia đình): nghĩa là hòa hợp, thân thiết với ai. Mệnh đề quan hệ <b>which means...</b> bổ nghĩa cho cụm từ đứng trước."
      },
      {
        sentence: "I remember that 'used to' describes a habit or state that existed in the past but not now.",
        explain: "Ôn lại cấu trúc <b>used to + V</b> (Ngày 2 – Gia đình): diễn tả thói quen/tình trạng đã có trong quá khứ nhưng không còn đúng ở hiện tại."
      },
      {
        sentence: "Talking about food, I learned words like 'portion', 'recommend', and 'fast food'.",
        explain: "Cụm phân từ <b>Talking about...</b> mở đầu câu (dạng rút gọn của mệnh đề). Ôn từ vựng chủ đề đồ ăn ở Ngày 3."
      },
      {
        sentence: "I still remember that dish I tried at the new restaurant was spicy but delicious.",
        explain: "Mệnh đề quan hệ rút gọn <b>that dish (that) I tried...</b>. Ôn lại chủ đề đồ ăn & nhà hàng ở Ngày 3."
      },
      {
        sentence: "For the weather topic, I now know how to say 'humid', 'monsoon season', and 'weather forecast'.",
        explain: "Cấu trúc <b>know how to + V</b>. Ôn lại từ vựng chủ đề thời tiết ở Ngày 4."
      },
      {
        sentence: "I also reviewed the structure 'no matter what', which is used to show that something does not change a result.",
        explain: "Ôn lại cấu trúc <b>no matter what</b> (Ngày 4 – Thời tiết): dùng để nhấn mạnh điều gì đó không thay đổi kết quả, dù hoàn cảnh ra sao. Mệnh đề quan hệ <b>which is used to...</b> bổ nghĩa."
      },
      {
        sentence: "In the shopping lesson, I learned to compare prices and ask for a refund when needed.",
        explain: "Cấu trúc <b>learn to + V</b>. Ôn lại chủ đề mua sắm ở Ngày 5 (so sánh giá, xin hoàn tiền)."
      },
      {
        sentence: "Overall, this week taught me a lot of practical vocabulary that I can use in real conversations.",
        explain: "Cấu trúc <b>teach + tân ngữ + danh từ</b>. Mệnh đề quan hệ <b>that I can use...</b> bổ nghĩa cho <b>vocabulary</b>."
      }
    ],
    speaking: [
      {
        cues: "family + weather / weekend",
        question: "What does your family usually do together when the weather is nice at the weekend?",
        vi: "Gia đình bạn thường làm gì cùng nhau khi thời tiết đẹp vào cuối tuần?",
        hint: "Kết hợp <b>My family usually...</b> (Ngày 2) và <b>when the weather is...</b> (Ngày 4)."
      },
      {
        cues: "food + shopping / grocery",
        question: "What food do you usually buy when you go grocery shopping?",
        vi: "Bạn thường mua món ăn gì khi đi mua đồ tạp hóa?",
        hint: "Kết hợp từ vựng đồ ăn (Ngày 3) và <b>go grocery shopping</b> (Ngày 5)."
      },
      {
        cues: "introduce / family",
        question: "How would you introduce yourself and your family in one short paragraph?",
        vi: "Bạn sẽ giới thiệu về bản thân và gia đình mình như thế nào trong một đoạn ngắn?",
        hint: "Kết hợp cấu trúc Ngày 1 (giới thiệu bản thân) và Ngày 2 (gia đình)."
      },
      {
        cues: "used to / job",
        question: "Did anyone in your family use to have a different job in the past?",
        vi: "Có ai trong gia đình bạn từng làm công việc khác trong quá khứ không?",
        hint: "Dùng <b>used to + V</b> (ôn Ngày 2)."
      },
      {
        cues: "restaurant / weather",
        question: "Would you rather eat out or cook at home when the weather is bad?",
        vi: "Bạn thích ăn ngoài hay nấu ở nhà khi thời tiết xấu?",
        hint: "Kết hợp chủ đề đồ ăn (Ngày 3) và thời tiết (Ngày 4)."
      },
      {
        cues: "refund / clothes",
        question: "Have you ever asked for a refund because of bad quality?",
        vi: "Bạn đã bao giờ yêu cầu hoàn tiền vì chất lượng kém chưa?",
        hint: "Ôn từ <b>refund</b> và cấu trúc điều kiện (Ngày 5)."
      },
      {
        cues: "no matter what / attitude",
        question: "No matter what the weather is like, what do you usually do to stay positive?",
        vi: "Dù thời tiết thế nào, bạn thường làm gì để giữ tinh thần lạc quan?",
        hint: "Ôn cấu trúc <b>no matter what</b> (Ngày 4)."
      }
    ]
  },
  {
    date: "2026-10-04",
    topic: "Ôn tập tuần 1: Luyện nói tổng hợp (Weekly Review 2 — Speaking Synthesis)",
    sentences: [
      {
        en: "I like my job as a software engineer, but sometimes it can be quite stressful.",
        ipa: "/aɪ laɪk maɪ dʒɑːb æz ə ˈsɔːftwɛr ˌɛndʒɪˈnɪr, bʌt ˈsʌmtaɪmz ɪt kæn bi kwaɪt ˈstrɛsfəl/",
        vi: "Tôi thích công việc kỹ sư phần mềm của mình, nhưng đôi khi nó khá căng thẳng."
      },
      {
        en: "Although I live far from my grandparents, I try to call them every weekend.",
        ipa: "/ɔːlˈðoʊ aɪ lɪv fɑːr frʌm maɪ ˈɡrænpɛrənts, aɪ traɪ tu kɔːl ðɛm ˈɛvri ˈwiːkɛnd/",
        vi: "Mặc dù sống xa ông bà, tôi vẫn cố gắng gọi điện cho họ mỗi cuối tuần."
      },
      {
        en: "It was raining heavily yesterday, so my family decided to cook dinner at home instead of eating out.",
        ipa: "/ɪt wəz ˈreɪnɪŋ ˈhɛvɪli ˈjɛstərdeɪ, soʊ maɪ ˈfæməli dɪˈsaɪdɪd tu kʊk ˈdɪnər æt hoʊm ɪnˈstɛd ʌv ˈiːtɪŋ aʊt/",
        vi: "Hôm qua trời mưa rất to, nên gia đình tôi quyết định nấu ăn ở nhà thay vì đi ăn ngoài."
      },
      {
        en: "I wanted to buy a warm jacket because the weather has become much colder recently.",
        ipa: "/aɪ ˈwɑːntɪd tu baɪ ə wɔːrm ˈdʒækɪt bɪˈkɔːz ðə ˈwɛðər hæz bɪˈkʌm mʌtʃ ˈkoʊldər rɪˈsɛntli/",
        vi: "Tôi muốn mua một chiếc áo khoác ấm vì thời tiết gần đây đã trở nên lạnh hơn nhiều."
      },
      {
        en: "However, all the jackets in that shop were too expensive, so I decided to shop online instead.",
        ipa: "/haʊˈɛvər, ɔːl ðə ˈdʒækɪts ɪn ðæt ʃɑːp wɜːr tu ɪkˈspɛnsɪv, soʊ aɪ dɪˈsaɪdɪd tu ʃɑːp ˈɔːnlaɪn ɪnˈstɛd/",
        vi: "Tuy nhiên, tất cả áo khoác ở cửa hàng đó đều quá đắt, nên tôi quyết định mua sắm trực tuyến thay vào đó."
      },
      {
        en: "My mother used to cook every day, but now she sometimes orders food because she's busy at work.",
        ipa: "/maɪ ˈmʌðər juːzd tu kʊk ˈɛvri deɪ, bʌt naʊ ʃi ˈsʌmtaɪmz ˈɔːrdərz fuːd bɪˈkɔːz ʃiz ˈbɪzi æt wɜːrk/",
        vi: "Mẹ tôi trước đây từng nấu ăn mỗi ngày, nhưng giờ đôi khi mẹ đặt đồ ăn vì bận đi làm."
      },
      {
        en: "In addition to loving spicy food, my brother also enjoys trying dishes from different countries.",
        ipa: "/ɪn əˈdɪʃən tu ˈlʌvɪŋ ˈspaɪsi fuːd, maɪ ˈbrʌðər ˈɔːlsoʊ ɪnˈdʒɔɪz ˈtraɪɪŋ ˈdɪʃɪz frʌm ˈdɪfərənt ˈkʌntriz/",
        vi: "Ngoài việc thích đồ ăn cay, anh trai tôi còn thích thử các món ăn từ nhiều quốc gia khác nhau."
      },
      {
        en: "No matter how busy I am, I always make time to have dinner with my family.",
        ipa: "/noʊ ˈmætər haʊ ˈbɪzi aɪ æm, aɪ ˈɔːlweɪz meɪk taɪm tu hæv ˈdɪnər wɪð maɪ ˈfæməli/",
        vi: "Dù bận rộn đến đâu, tôi vẫn luôn dành thời gian ăn tối cùng gia đình."
      },
      {
        en: "The quality of the shirt I bought was poor, so I went back to the shop to ask for an exchange.",
        ipa: "/ðə ˈkwɑːləti ʌv ðə ʃɜːrt aɪ bɔːt wəz pʊr, soʊ aɪ wɛnt bæk tu ðə ʃɑːp tu æsk fɔːr ən ɪksˈtʃeɪndʒ/",
        vi: "Chất lượng chiếc áo tôi mua khá kém, nên tôi đã quay lại cửa hàng để xin đổi hàng."
      },
      {
        en: "Even though this week was quite busy, I feel grateful because I learned so many useful things about myself, my family, food, weather, and shopping.",
        ipa: "/ˈiːvən ðoʊ ðɪs wik wəz kwaɪt ˈbɪzi, aɪ fiːl ˈɡreɪtfəl bɪˈkɔːz aɪ lɜːrnd soʊ ˈmɛni ˈjusfəl θɪŋz əˈbaʊt maɪˈsɛlf, maɪ ˈfæməli, fuːd, ˈwɛðər, ənd ˈʃɑːpɪŋ/",
        vi: "Dù tuần này khá bận rộn, tôi vẫn cảm thấy biết ơn vì đã học được rất nhiều điều hữu ích về bản thân, gia đình, đồ ăn, thời tiết và mua sắm."
      }
    ],
    vocabulary: [
      { word: "although", ipa: "/ɔːlˈðoʊ/", type: "conj", meaning: "mặc dù" },
      { word: "so", ipa: "/soʊ/", type: "conj", meaning: "vì vậy, nên" },
      { word: "because", ipa: "/bɪˈkɔːz/", type: "conj", meaning: "bởi vì" },
      { word: "however", ipa: "/haʊˈɛvər/", type: "adv", meaning: "tuy nhiên" },
      { word: "instead of", ipa: "/ɪnˈstɛd ʌv/", type: "phrase", meaning: "thay vì" },
      { word: "in addition to", ipa: "/ɪn əˈdɪʃən tu/", type: "phrase", meaning: "ngoài ra, thêm vào đó" },
      { word: "no matter how", ipa: "/noʊ ˈmætər haʊ/", type: "phrase", meaning: "dù cho... đến đâu" },
      { word: "even though", ipa: "/ˈiːvən ðoʊ/", type: "conj", meaning: "mặc dù (nhấn mạnh)" },
      { word: "stressful", ipa: "/ˈstrɛsfəl/", type: "adj", meaning: "căng thẳng" },
      { word: "expensive", ipa: "/ɪkˈspɛnsɪv/", type: "adj", meaning: "đắt đỏ" },
      { word: "recently", ipa: "/ˈriːsəntli/", type: "adv", meaning: "gần đây" },
      { word: "poor quality", ipa: "/pʊr ˈkwɑːləti/", type: "phrase", meaning: "chất lượng kém" }
    ],
    grammar: [
      {
        sentence: "I like my job as a software engineer, but sometimes it can be quite stressful.",
        explain: "Liên từ tương phản <b>but</b> nối hai mệnh đề trái ngược nhau (thích công việc >< căng thẳng)."
      },
      {
        sentence: "Although I live far from my grandparents, I try to call them every weekend.",
        explain: "Liên từ nhượng bộ <b>although</b> đứng đầu câu, theo sau là mệnh đề chính (không dùng thêm <b>but</b>)."
      },
      {
        sentence: "It was raining heavily yesterday, so my family decided to cook dinner at home instead of eating out.",
        explain: "Liên từ chỉ kết quả <b>so</b> nối nguyên nhân (mưa to) với kết quả (nấu ở nhà). <b>instead of + V-ing</b> nghĩa là thay vì làm gì."
      },
      {
        sentence: "I wanted to buy a warm jacket because the weather has become much colder recently.",
        explain: "Liên từ chỉ lý do <b>because</b>. Thì hiện tại hoàn thành <b>has become</b> diễn tả sự thay đổi tính đến hiện tại."
      },
      {
        sentence: "However, all the jackets in that shop were too expensive, so I decided to shop online instead.",
        explain: "Trạng từ liên kết <b>However</b> đứng đầu câu, có dấu phẩy, thể hiện sự tương phản với câu trước. Liên từ <b>so</b> nối kết quả."
      },
      {
        sentence: "My mother used to cook every day, but now she sometimes orders food because she's busy at work.",
        explain: "Liên từ <b>but</b> đối lập giữa quá khứ (<b>used to cook</b>) và hiện tại (<b>now she sometimes orders</b>). Liên từ <b>because</b> giải thích lý do."
      },
      {
        sentence: "In addition to loving spicy food, my brother also enjoys trying dishes from different countries.",
        explain: "Cụm từ nối <b>in addition to + V-ing</b> đứng đầu câu để bổ sung thông tin."
      },
      {
        sentence: "No matter how busy I am, I always make time to have dinner with my family.",
        explain: "Cấu trúc nhượng bộ <b>no matter how + tính từ + S + V</b>, nghĩa là dù... đến đâu."
      },
      {
        sentence: "The quality of the shirt I bought was poor, so I went back to the shop to ask for an exchange.",
        explain: "Liên từ <b>so</b> nối nguyên nhân - kết quả. <b>to + V</b> chỉ mục đích (<b>to ask for...</b>)."
      },
      {
        sentence: "Even though this week was quite busy, I feel grateful because I learned so many useful things about myself, my family, food, weather, and shopping.",
        explain: "Liên từ nhượng bộ mạnh <b>even though</b> đứng đầu câu. Liên từ <b>because</b> giải thích lý do biết ơn. Liệt kê nhiều danh từ nối bằng dấu phẩy và <b>and</b> ở cuối."
      }
    ],
    speaking: [
      {
        cues: "job / weather",
        question: "How does the weather affect your mood at work?",
        vi: "Thời tiết ảnh hưởng đến tâm trạng làm việc của bạn như thế nào?",
        hint: "Kết hợp ý công việc (Ngày 1) và thời tiết (Ngày 4) bằng <b>because</b> hoặc <b>so</b>."
      },
      {
        cues: "family / far away / call",
        question: "How do you stay connected with family members who live far away?",
        vi: "Bạn giữ liên lạc với người thân sống xa như thế nào?",
        hint: "Dùng <b>although/even though...</b> để nối ý khoảng cách và hành động (Ngày 2)."
      },
      {
        cues: "rain / cook at home",
        question: "What do you usually do when it rains and you don't want to go out to eat?",
        vi: "Bạn thường làm gì khi trời mưa và không muốn ra ngoài ăn?",
        hint: "Dùng <b>so</b> để nối thời tiết (Ngày 4) và đồ ăn (Ngày 3): <b>..., so I...</b>"
      },
      {
        cues: "cold weather / buy jacket / online",
        question: "What do you do when the weather gets cold and you need new clothes?",
        vi: "Bạn làm gì khi trời trở lạnh và cần mua quần áo mới?",
        hint: "Kết hợp <b>because</b> (Ngày 4) và mua sắm online (Ngày 5)."
      },
      {
        cues: "busy / family dinner / no matter",
        question: "No matter how busy you are, what do you always make time for?",
        vi: "Dù bận đến đâu, bạn luôn dành thời gian cho điều gì?",
        hint: "Dùng <b>No matter how + tính từ + S + V, S + always...</b>"
      },
      {
        cues: "bad quality / refund / feeling",
        question: "How do you feel and what do you do when you buy something of poor quality?",
        vi: "Bạn cảm thấy thế nào và làm gì khi mua phải hàng kém chất lượng?",
        hint: "Dùng <b>so</b> để nối cảm xúc và hành động (Ngày 5)."
      },
      {
        cues: "this week / grateful / topics",
        question: "Looking back at this whole week, what is one thing you're grateful you learned?",
        vi: "Nhìn lại cả tuần này, điều bạn biết ơn nhất khi học được là gì?",
        hint: "Dùng <b>Even though..., I feel grateful because...</b>"
      }
    ]
  },
  {
    date: "2026-10-05",
    topic: "Du lịch & Phương tiện di chuyển (Travel & Transportation)",
    sentences: [
      {
        en: "Last month, I took a short trip to Da Lat with two of my close friends.",
        ipa: "/læst mʌnθ, aɪ tʊk ə ʃɔːrt trɪp tu dɑː lɑːt wɪð tu ʌv maɪ kloʊs frɛndz/",
        vi: "Tháng trước, tôi đã có một chuyến đi ngắn đến Đà Lạt cùng hai người bạn thân."
      },
      {
        en: "We decided to travel by bus because it was cheaper than flying.",
        ipa: "/wi dɪˈsaɪdɪd tu ˈtrævəl baɪ bʌs bɪˈkɔːz ɪt wəz ˈtʃiːpər ðæn ˈflaɪɪŋ/",
        vi: "Chúng tôi quyết định đi bằng xe buýt vì rẻ hơn đi máy bay."
      },
      {
        en: "The bus ride took about seven hours, but the scenery along the way was beautiful.",
        ipa: "/ðə bʌs raɪd tʊk əˈbaʊt ˈsɛvən ˈaʊərz, bʌt ðə ˈsiːnəri əˈlɔːŋ ðə weɪ wəz ˈbjuːtəfəl/",
        vi: "Chuyến xe mất khoảng bảy tiếng, nhưng phong cảnh dọc đường lại rất đẹp."
      },
      {
        en: "When we arrived, we rented a motorbike to get around the city more easily.",
        ipa: "/wɛn wi əˈraɪvd, wi ˈrɛntɪd ə ˈmoʊtərbaɪk tu ɡɛt əˈraʊnd ðə ˈsɪti mɔːr ˈiːzəli/",
        vi: "Khi đến nơi, chúng tôi thuê một chiếc xe máy để đi lại trong thành phố dễ dàng hơn."
      },
      {
        en: "Riding a motorbike in the mountains was a bit scary at first, but I got used to it quickly.",
        ipa: "/ˈraɪdɪŋ ə ˈmoʊtərbaɪk ɪn ðə ˈmaʊntənz wəz ə bɪt ˈskɛri æt fɜːrst, bʌt aɪ ɡɑːt just tu ɪt ˈkwɪkli/",
        vi: "Lái xe máy trên núi lúc đầu hơi đáng sợ, nhưng tôi nhanh chóng quen với nó."
      },
      {
        en: "We stayed at a small guesthouse that offered a great view of the pine forest.",
        ipa: "/wi steɪd æt ə smɔːl ˈɡɛsthaʊs ðæt ˈɔːfərd ə ɡreɪt vju ʌv ðə paɪn ˈfɔːrɪst/",
        vi: "Chúng tôi ở tại một nhà nghỉ nhỏ có tầm nhìn tuyệt đẹp ra rừng thông."
      },
      {
        en: "Every morning, we woke up early to catch the sunrise before the fog rolled in.",
        ipa: "/ˈɛvri ˈmɔːrnɪŋ, wi woʊk ʌp ˈɜːrli tu kætʃ ðə ˈsʌnraɪz bɪˈfɔːr ðə fɔːɡ roʊld ɪn/",
        vi: "Mỗi buổi sáng, chúng tôi dậy sớm để ngắm bình minh trước khi sương mù kéo đến."
      },
      {
        en: "On the second day, we visited a famous waterfall and took a lot of photos.",
        ipa: "/ɑːn ðə ˈsɛkənd deɪ, wi ˈvɪzɪtɪd ə ˈfeɪməs ˈwɔːtərfɔːl ənd tʊk ə lɑːt ʌv ˈfoʊtoʊz/",
        vi: "Vào ngày thứ hai, chúng tôi ghé thăm một thác nước nổi tiếng và chụp rất nhiều ảnh."
      },
      {
        en: "Unfortunately, our flight back was delayed by two hours because of bad weather.",
        ipa: "/ənˈfɔːrtʃənətli, aʊər flaɪt bæk wəz dɪˈleɪd baɪ tu ˈaʊərz bɪˈkɔːz ʌv bæd ˈwɛðər/",
        vi: "Thật không may, chuyến bay về của chúng tôi bị hoãn hai tiếng vì thời tiết xấu."
      },
      {
        en: "Even so, the whole trip was worth it, and I'm already planning my next adventure.",
        ipa: "/ˈiːvən soʊ, ðə hoʊl trɪp wəz wɜːrθ ɪt, ənd aɪm ɔːlˈrɛdi ˈplænɪŋ maɪ nɛkst ədˈvɛntʃər/",
        vi: "Dù vậy, cả chuyến đi vẫn rất đáng giá, và tôi đã đang lên kế hoạch cho cuộc phiêu lưu tiếp theo."
      }
    ],
    vocabulary: [
      { word: "trip", ipa: "/trɪp/", type: "n", meaning: "chuyến đi" },
      { word: "travel by bus", ipa: "/ˈtrævəl baɪ bʌs/", type: "phrase", meaning: "đi bằng xe buýt" },
      { word: "scenery", ipa: "/ˈsiːnəri/", type: "n", meaning: "phong cảnh" },
      { word: "rent", ipa: "/rɛnt/", type: "v", meaning: "thuê" },
      { word: "motorbike", ipa: "/ˈmoʊtərbaɪk/", type: "n", meaning: "xe máy" },
      { word: "get around", ipa: "/ɡɛt əˈraʊnd/", type: "phrasal verb", meaning: "di chuyển quanh (một khu vực)" },
      { word: "get used to", ipa: "/ɡɛt just tu/", type: "phrase", meaning: "dần quen với" },
      { word: "guesthouse", ipa: "/ˈɡɛsthaʊs/", type: "n", meaning: "nhà nghỉ" },
      { word: "pine forest", ipa: "/paɪn ˈfɔːrɪst/", type: "n", meaning: "rừng thông" },
      { word: "sunrise", ipa: "/ˈsʌnraɪz/", type: "n", meaning: "bình minh" },
      { word: "fog", ipa: "/fɔːɡ/", type: "n", meaning: "sương mù" },
      { word: "waterfall", ipa: "/ˈwɔːtərfɔːl/", type: "n", meaning: "thác nước" },
      { word: "delayed", ipa: "/dɪˈleɪd/", type: "adj", meaning: "bị hoãn, bị trì hoãn" },
      { word: "worth it", ipa: "/wɜːrθ ɪt/", type: "phrase", meaning: "đáng giá" },
      { word: "adventure", ipa: "/ədˈvɛntʃər/", type: "n", meaning: "cuộc phiêu lưu" }
    ],
    grammar: [
      {
        sentence: "Last month, I took a short trip to Da Lat with two of my close friends.",
        explain: "Thì quá khứ đơn <b>took</b> diễn tả hành động đã xảy ra và kết thúc, có mốc thời gian rõ ràng (<b>Last month</b>). Giới từ <b>with</b> + người đi cùng."
      },
      {
        sentence: "We decided to travel by bus because it was cheaper than flying.",
        explain: "Cấu trúc <b>decide to + V</b>. So sánh hơn <b>cheaper than + V-ing</b> (danh động từ đứng sau than khi so sánh hai hành động)."
      },
      {
        sentence: "The bus ride took about seven hours, but the scenery along the way was beautiful.",
        explain: "Cấu trúc <b>take + khoảng thời gian</b> diễn tả việc gì đó mất bao lâu. Liên từ <b>but</b> nối hai ý tương phản."
      },
      {
        sentence: "When we arrived, we rented a motorbike to get around the city more easily.",
        explain: "Mệnh đề thời gian <b>When + S + V (quá khứ)</b> mở đầu câu. Cụm <b>to get around...</b> là mệnh đề chỉ mục đích."
      },
      {
        sentence: "Riding a motorbike in the mountains was a bit scary at first, but I got used to it quickly.",
        explain: "Danh động từ <b>Riding a motorbike...</b> làm chủ ngữ của câu. Cấu trúc <b>get used to + N/V-ing</b> nghĩa là dần quen với điều gì đó."
      },
      {
        sentence: "We stayed at a small guesthouse that offered a great view of the pine forest.",
        explain: "Mệnh đề quan hệ <b>that offered...</b> bổ nghĩa cho <b>guesthouse</b> (đại từ quan hệ thay cho vật)."
      },
      {
        sentence: "Every morning, we woke up early to catch the sunrise before the fog rolled in.",
        explain: "Cụm <b>to catch...</b> là mệnh đề chỉ mục đích. Liên từ thời gian <b>before</b> + mệnh đề quá khứ đơn."
      },
      {
        sentence: "On the second day, we visited a famous waterfall and took a lot of photos.",
        explain: "Cụm giới từ chỉ thời gian <b>On the second day</b> đứng đầu câu. Hai động từ quá khứ được nối bằng <b>and</b>."
      },
      {
        sentence: "Unfortunately, our flight back was delayed by two hours because of bad weather.",
        explain: "Trạng từ <b>Unfortunately</b> mở đầu câu thể hiện thái độ. Câu bị động <b>was delayed by + khoảng thời gian</b>. <b>because of</b> + danh từ (khác với because + mệnh đề)."
      },
      {
        sentence: "Even so, the whole trip was worth it, and I'm already planning my next adventure.",
        explain: "<b>Even so</b> là liên từ nối ý tương phản nhẹ, nghĩa là \"dù vậy\". Thì hiện tại tiếp diễn <b>am planning</b> diễn tả dự định trong tương lai gần."
      }
    ],
    speaking: [
      {
        cues: "last trip / where / who",
        question: "Where did you go on your last trip, and who did you go with?",
        vi: "Chuyến đi gần nhất của bạn là ở đâu, và bạn đi cùng ai?",
        hint: "Dùng <b>Last + thời gian, I took a trip to... with...</b>"
      },
      {
        cues: "means of transport / why",
        question: "How do you usually decide which means of transport to use when you travel?",
        vi: "Bạn thường quyết định dùng phương tiện gì khi đi du lịch như thế nào?",
        hint: "Dùng <b>I decided to... because...</b>"
      },
      {
        cues: "accommodation / stay",
        question: "What kind of place do you usually stay at when you travel?",
        vi: "Bạn thường ở loại chỗ nào khi đi du lịch?",
        hint: "Dùng <b>We stayed at a/an... that + mệnh đề quan hệ</b>"
      },
      {
        cues: "scary / new experience",
        question: "Have you ever done something a bit scary while traveling that you later got used to?",
        vi: "Bạn đã bao giờ làm điều gì hơi đáng sợ khi đi du lịch mà sau đó lại quen chưa?",
        hint: "Dùng <b>...was a bit scary at first, but I got used to it</b>"
      },
      {
        cues: "morning routine / trip",
        question: "What do you usually do first thing in the morning during a trip?",
        vi: "Bạn thường làm gì đầu tiên vào buổi sáng khi đi du lịch?",
        hint: "Dùng <b>Every morning, we + V để + mục đích</b>"
      },
      {
        cues: "delay / bad weather",
        question: "Has your flight or trip ever been delayed? What happened?",
        vi: "Chuyến bay hay chuyến đi của bạn đã từng bị hoãn chưa? Chuyện gì đã xảy ra?",
        hint: "Dùng câu bị động <b>was delayed by/because of...</b>"
      },
      {
        cues: "worth it / next adventure",
        question: "Was your last trip worth it, and what's your next travel plan?",
        vi: "Chuyến đi gần nhất có đáng không, và kế hoạch du lịch tiếp theo của bạn là gì?",
        hint: "Dùng <b>..., and I'm planning to...</b>"
      }
    ]
  },
  {
    date: "2026-10-06",
    topic: "Sức khỏe & Tập luyện (Health & Exercise)",
    sentences: [
      {
        en: "I started going to the gym three months ago to improve my overall health.",
        ipa: "/aɪ ˈstɑːrtɪd ˈɡoʊɪŋ tu ðə dʒɪm θriː mʌnθs əˈɡoʊ tu ɪmˈpruːv maɪ ˌoʊvərˈɔːl hɛlθ/",
        vi: "Tôi bắt đầu đến phòng tập ba tháng trước để cải thiện sức khỏe tổng thể."
      },
      {
        en: "At first, I could barely run for five minutes without feeling exhausted.",
        ipa: "/æt fɜːrst, aɪ kʊd ˈbɛrli rʌn fɔːr faɪv ˈmɪnəts wɪðˈaʊt ˈfiːlɪŋ ɪɡˈzɔːstɪd/",
        vi: "Lúc đầu, tôi hầu như không thể chạy nổi năm phút mà không thấy kiệt sức."
      },
      {
        en: "Now I exercise four times a week, mixing cardio with strength training.",
        ipa: "/naʊ aɪ ˈɛksərsaɪz fɔːr taɪmz ə wik, ˈmɪksɪŋ ˈkɑːrdioʊ wɪð strɛŋθ ˈtreɪnɪŋ/",
        vi: "Giờ tôi tập bốn lần một tuần, kết hợp bài tập tim mạch với tập sức mạnh."
      },
      {
        en: "I always warm up for ten minutes before lifting any weights.",
        ipa: "/aɪ ˈɔːlweɪz wɔːrm ʌp fɔːr tɛn ˈmɪnəts bɪˈfɔːr ˈlɪftɪŋ ˈɛni weɪts/",
        vi: "Tôi luôn khởi động mười phút trước khi tập bất kỳ bài tạ nào."
      },
      {
        en: "My trainer suggested that I drink more water and eat more protein.",
        ipa: "/maɪ ˈtreɪnər səɡˈdʒɛstɪd ðæt aɪ drɪŋk mɔːr ˈwɔːtər ənd iːt mɔːr ˈproʊtiːn/",
        vi: "Huấn luyện viên của tôi khuyên rằng tôi nên uống nhiều nước hơn và ăn nhiều protein hơn."
      },
      {
        en: "Since I began working out regularly, I have slept much better at night.",
        ipa: "/sɪns aɪ bɪˈɡæn ˈwɜːrkɪŋ aʊt ˈrɛɡjələrli, aɪ hæv slɛpt mʌtʃ ˈbɛtər æt naɪt/",
        vi: "Kể từ khi tôi bắt đầu tập luyện đều đặn, tôi đã ngủ ngon hơn nhiều vào ban đêm."
      },
      {
        en: "I try to avoid junk food, although I still allow myself a treat once in a while.",
        ipa: "/aɪ traɪ tu əˈvɔɪd dʒʌŋk fuːd, ɔːlˈðoʊ aɪ stɪl əˈlaʊ maɪˈsɛlf ə triːt wʌns ɪn ə waɪl/",
        vi: "Tôi cố tránh đồ ăn vặt, mặc dù thỉnh thoảng tôi vẫn tự thưởng cho mình một chút."
      },
      {
        en: "On rest days, I usually go for a light walk instead of staying completely inactive.",
        ipa: "/ɑːn rɛst deɪz, aɪ ˈjuʒuəli ɡoʊ fɔːr ə laɪt wɔːk ɪnˈstɛd ʌv ˈsteɪɪŋ kəmˈpliːtli ɪnˈæktɪv/",
        vi: "Vào ngày nghỉ tập, tôi thường đi bộ nhẹ nhàng thay vì ngồi yên hoàn toàn."
      },
      {
        en: "My biggest challenge is staying motivated when I don't see quick results.",
        ipa: "/maɪ ˈbɪɡɪst ˈtʃælɪndʒ ɪz ˈsteɪɪŋ ˈmoʊtɪveɪtɪd wɛn aɪ doʊnt si kwɪk rɪˈzʌlts/",
        vi: "Thử thách lớn nhất của tôi là giữ động lực khi không thấy kết quả nhanh chóng."
      },
      {
        en: "Overall, exercising has made me feel stronger, both physically and mentally.",
        ipa: "/ˌoʊvərˈɔːl, ˈɛksərsaɪzɪŋ hæz meɪd mi fiːl ˈstrɔːŋɡər, boʊθ ˈfɪzɪkəli ənd ˈmɛntəli/",
        vi: "Nhìn chung, việc tập luyện đã giúp tôi cảm thấy khỏe mạnh hơn, cả về thể chất lẫn tinh thần."
      }
    ],
    vocabulary: [
      { word: "gym", ipa: "/dʒɪm/", type: "n", meaning: "phòng tập" },
      { word: "overall health", ipa: "/ˌoʊvərˈɔːl hɛlθ/", type: "n", meaning: "sức khỏe tổng thể" },
      { word: "exhausted", ipa: "/ɪɡˈzɔːstɪd/", type: "adj", meaning: "kiệt sức" },
      { word: "cardio", ipa: "/ˈkɑːrdioʊ/", type: "n", meaning: "bài tập tim mạch" },
      { word: "strength training", ipa: "/strɛŋθ ˈtreɪnɪŋ/", type: "n", meaning: "tập luyện sức mạnh" },
      { word: "warm up", ipa: "/wɔːrm ʌp/", type: "phrasal verb", meaning: "khởi động" },
      { word: "lift weights", ipa: "/lɪft weɪts/", type: "phrase", meaning: "tập tạ" },
      { word: "trainer", ipa: "/ˈtreɪnər/", type: "n", meaning: "huấn luyện viên" },
      { word: "protein", ipa: "/ˈproʊtiːn/", type: "n", meaning: "chất đạm" },
      { word: "work out", ipa: "/wɜːrk aʊt/", type: "phrasal verb", meaning: "tập luyện" },
      { word: "junk food", ipa: "/dʒʌŋk fuːd/", type: "n", meaning: "đồ ăn vặt không lành mạnh" },
      { word: "once in a while", ipa: "/wʌns ɪn ə waɪl/", type: "phrase", meaning: "thỉnh thoảng" },
      { word: "rest day", ipa: "/rɛst deɪ/", type: "n", meaning: "ngày nghỉ tập" },
      { word: "motivated", ipa: "/ˈmoʊtɪveɪtɪd/", type: "adj", meaning: "có động lực" }
    ],
    grammar: [
      {
        sentence: "I started going to the gym three months ago to improve my overall health.",
        explain: "Cấu trúc <b>start + V-ing</b>. Cụm <b>three months ago</b> chỉ mốc thời gian trong quá khứ. <b>to improve...</b> là mệnh đề chỉ mục đích."
      },
      {
        sentence: "At first, I could barely run for five minutes without feeling exhausted.",
        explain: "Trạng từ <b>barely</b> (hầu như không) đứng giữa <b>could</b> và động từ. Giới từ <b>without + V-ing</b>."
      },
      {
        sentence: "Now I exercise four times a week, mixing cardio with strength training.",
        explain: "Cấu trúc tần suất <b>four times a week</b>. Phân từ hiện tại <b>mixing...</b> bổ sung thông tin, thay cho mệnh đề quan hệ rút gọn."
      },
      {
        sentence: "I always warm up for ten minutes before lifting any weights.",
        explain: "Trạng từ tần suất <b>always</b> đứng trước động từ thường. Giới từ <b>before + V-ing</b>."
      },
      {
        sentence: "My trainer suggested that I drink more water and eat more protein.",
        explain: "Cấu trúc <b>suggest that + S + V (nguyên mẫu)</b>: động từ trong mệnh đề <b>that</b> không chia, giữ nguyên dạng gốc."
      },
      {
        sentence: "Since I began working out regularly, I have slept much better at night.",
        explain: "Liên từ <b>since</b> + mệnh đề quá khứ, đi cùng thì hiện tại hoàn thành <b>have slept</b> ở mệnh đề chính diễn tả sự việc kéo dài đến hiện tại."
      },
      {
        sentence: "I try to avoid junk food, although I still allow myself a treat once in a while.",
        explain: "Cấu trúc <b>try to + V</b>. Liên từ nhượng bộ <b>although</b> nối hai ý trái ngược."
      },
      {
        sentence: "On rest days, I usually go for a light walk instead of staying completely inactive.",
        explain: "Cụm giới từ thời gian đứng đầu câu. <b>instead of + V-ing</b> nghĩa là thay vì làm gì."
      },
      {
        sentence: "My biggest challenge is staying motivated when I don't see quick results.",
        explain: "Danh động từ <b>staying</b> làm bổ ngữ sau <b>is</b>. Mệnh đề thời gian <b>when + hiện tại đơn</b>."
      },
      {
        sentence: "Overall, exercising has made me feel stronger, both physically and mentally.",
        explain: "Cấu trúc <b>make + tân ngữ + V nguyên mẫu (feel)</b>. Cấu trúc <b>both... and...</b> nối hai trạng từ song song."
      }
    ],
    speaking: [
      {
        cues: "start / gym / why",
        question: "Why did you start exercising, and how long ago did you begin?",
        vi: "Vì sao bạn bắt đầu tập thể dục, và bạn bắt đầu từ bao lâu rồi?",
        hint: "Dùng <b>I started + V-ing... ago to...</b>"
      },
      {
        cues: "exercise routine / how often",
        question: "How often do you exercise, and what kind of workout do you usually do?",
        vi: "Bạn tập bao nhiêu lần một tuần, và thường tập kiểu gì?",
        hint: "Dùng <b>I exercise + số lần a week, mixing... with...</b>"
      },
      {
        cues: "warm up / before",
        question: "What do you usually do to warm up before exercising?",
        vi: "Bạn thường làm gì để khởi động trước khi tập?",
        hint: "Dùng <b>I warm up for... before + V-ing</b>"
      },
      {
        cues: "advice / trainer or doctor",
        question: "Has a trainer or doctor ever given you advice about your diet or exercise?",
        vi: "Huấn luyện viên hay bác sĩ đã từng khuyên bạn về chế độ ăn hay tập luyện chưa?",
        hint: "Dùng <b>suggested that I + V (nguyên mẫu)</b>"
      },
      {
        cues: "junk food / treat",
        question: "Do you avoid junk food completely, or do you allow yourself a treat sometimes?",
        vi: "Bạn có tránh hoàn toàn đồ ăn vặt không, hay thỉnh thoảng vẫn tự thưởng cho mình?",
        hint: "Dùng <b>although</b> để nối hai ý trái ngược"
      },
      {
        cues: "rest day / activity",
        question: "What do you do on your rest days instead of exercising?",
        vi: "Vào ngày nghỉ tập, bạn làm gì thay vì tập luyện?",
        hint: "Dùng <b>instead of + V-ing</b>"
      },
      {
        cues: "motivation / challenge",
        question: "What is your biggest challenge in staying motivated to exercise?",
        vi: "Thử thách lớn nhất của bạn trong việc giữ động lực tập luyện là gì?",
        hint: "Dùng <b>My biggest challenge is + V-ing</b>"
      }
    ]
  },
  {
    date: "2026-10-07",
    topic: "Sở thích & Thời gian rảnh (Hobbies & Free Time)",
    sentences: [
      {
        en: "One of my favorite hobbies is painting, which helps me relax after a long day.",
        ipa: "/wʌn ʌv maɪ ˈfeɪvərɪt ˈhɑːbiz ɪz ˈpeɪntɪŋ, wɪtʃ hɛlps mi rɪˈlæks ˈæftər ə lɔːŋ deɪ/",
        vi: "Một trong những sở thích yêu thích của tôi là vẽ tranh, giúp tôi thư giãn sau một ngày dài."
      },
      {
        en: "I usually spend my weekends reading novels or watching documentaries.",
        ipa: "/aɪ ˈjuʒuəli spɛnd maɪ ˈwiːkɛndz ˈriːdɪŋ ˈnɑːvəlz ɔːr ˈwɑːtʃɪŋ ˌdɑːkjəˈmɛntəriz/",
        vi: "Tôi thường dành cuối tuần để đọc tiểu thuyết hoặc xem phim tài liệu."
      },
      {
        en: "Last year, I picked up photography as a new hobby, and I have loved it ever since.",
        ipa: "/læst jɪr, aɪ pɪkt ʌp fəˈtɑːɡrəfi æz ə nu ˈhɑːbi, ənd aɪ hæv lʌvd ɪt ˈɛvər sɪns/",
        vi: "Năm ngoái, tôi bắt đầu chụp ảnh như một sở thích mới, và tôi đã yêu thích nó từ đó đến giờ."
      },
      {
        en: "Whenever I have free time, I try to spend at least an hour on something creative.",
        ipa: "/wɛnˈɛvər aɪ hæv fri taɪm, aɪ traɪ tu spɛnd æt liːst ən ˈaʊər ɑːn ˈsʌmθɪŋ kriˈeɪtɪv/",
        vi: "Bất cứ khi nào có thời gian rảnh, tôi cố dành ít nhất một tiếng cho việc gì đó sáng tạo."
      },
      {
        en: "My friends and I sometimes play board games together on Friday nights.",
        ipa: "/maɪ frɛndz ənd aɪ ˈsʌmtaɪmz pleɪ bɔːrd ɡeɪmz təˈɡɛðər ɑːn ˈfraɪdeɪ naɪts/",
        vi: "Bạn bè tôi và tôi thỉnh thoảng cùng chơi trò chơi cờ bàn vào tối thứ Sáu."
      },
      {
        en: "I also enjoy gardening, even though I don't have a lot of outdoor space.",
        ipa: "/aɪ ˈɔːlsoʊ ɪnˈdʒɔɪ ˈɡɑːrdənɪŋ, ˈiːvən ðoʊ aɪ doʊnt hæv ə lɑːt ʌv ˈaʊtdɔːr speɪs/",
        vi: "Tôi cũng thích làm vườn, mặc dù tôi không có nhiều không gian ngoài trời."
      },
      {
        en: "Learning to play the guitar has been on my to-do list for years, but I never seem to find the time.",
        ipa: "/ˈlɜːrnɪŋ tu pleɪ ðə ɡɪˈtɑːr hæz bɪn ɑːn maɪ tu du lɪst fɔːr jɪrz, bʌt aɪ ˈnɛvər siːm tu faɪnd ðə taɪm/",
        vi: "Học chơi ghi-ta đã nằm trong danh sách việc cần làm của tôi nhiều năm nay, nhưng tôi chưa bao giờ tìm được thời gian."
      },
      {
        en: "Some people think hobbies are a waste of time, but I completely disagree.",
        ipa: "/sʌm ˈpiːpəl θɪŋk ˈhɑːbiz ɑːr ə weɪst ʌv taɪm, bʌt aɪ kəmˈpliːtli ˌdɪsəˈɡri/",
        vi: "Một số người nghĩ sở thích là lãng phí thời gian, nhưng tôi hoàn toàn không đồng ý."
      },
      {
        en: "Having a hobby gives me a sense of accomplishment outside of work.",
        ipa: "/ˈhævɪŋ ə ˈhɑːbi ɡɪvz mi ə sɛns ʌv əˈkɑːmplɪʃmənt aʊtˈsaɪd ʌv wɜːrk/",
        vi: "Có một sở thích mang lại cho tôi cảm giác thành tựu ngoài công việc."
      },
      {
        en: "If I could choose only one hobby to keep forever, it would definitely be painting.",
        ipa: "/ɪf aɪ kʊd tʃuz ˈoʊnli wʌn ˈhɑːbi tu kiːp fərˈɛvər, ɪt wʊd ˈdɛfənətli bi ˈpeɪntɪŋ/",
        vi: "Nếu chỉ được chọn một sở thích để giữ mãi mãi, chắc chắn tôi sẽ chọn vẽ tranh."
      }
    ],
    vocabulary: [
      { word: "hobby", ipa: "/ˈhɑːbi/", type: "n", meaning: "sở thích" },
      { word: "painting", ipa: "/ˈpeɪntɪŋ/", type: "n", meaning: "hội họa, vẽ tranh" },
      { word: "relax", ipa: "/rɪˈlæks/", type: "v", meaning: "thư giãn" },
      { word: "novel", ipa: "/ˈnɑːvəl/", type: "n", meaning: "tiểu thuyết" },
      { word: "documentary", ipa: "/ˌdɑːkjəˈmɛntəri/", type: "n", meaning: "phim tài liệu" },
      { word: "pick up", ipa: "/pɪk ʌp/", type: "phrasal verb", meaning: "bắt đầu (một sở thích)" },
      { word: "photography", ipa: "/fəˈtɑːɡrəfi/", type: "n", meaning: "nhiếp ảnh" },
      { word: "creative", ipa: "/kriˈeɪtɪv/", type: "adj", meaning: "sáng tạo" },
      { word: "board game", ipa: "/bɔːrd ɡeɪm/", type: "n", meaning: "trò chơi cờ bàn" },
      { word: "gardening", ipa: "/ˈɡɑːrdənɪŋ/", type: "n", meaning: "làm vườn" },
      { word: "to-do list", ipa: "/tu du lɪst/", type: "n", meaning: "danh sách việc cần làm" },
      { word: "waste of time", ipa: "/weɪst ʌv taɪm/", type: "phrase", meaning: "lãng phí thời gian" },
      { word: "sense of accomplishment", ipa: "/sɛns ʌv əˈkɑːmplɪʃmənt/", type: "n", meaning: "cảm giác thành tựu" }
    ],
    grammar: [
      {
        sentence: "One of my favorite hobbies is painting, which helps me relax after a long day.",
        explain: "Cấu trúc <b>One of + tính từ sở hữu + danh từ số nhiều + is/are...</b>. Mệnh đề quan hệ không xác định <b>which helps...</b> bổ sung thông tin cho cả mệnh đề trước."
      },
      {
        sentence: "I usually spend my weekends reading novels or watching documentaries.",
        explain: "Cấu trúc <b>spend + thời gian + V-ing</b> nghĩa là dành thời gian làm gì."
      },
      {
        sentence: "Last year, I picked up photography as a new hobby, and I have loved it ever since.",
        explain: "Cụm thời gian quá khứ <b>Last year</b> đứng đầu câu. Thì hiện tại hoàn thành <b>have loved</b> với <b>ever since</b> diễn tả cảm xúc kéo dài từ quá khứ đến hiện tại."
      },
      {
        sentence: "Whenever I have free time, I try to spend at least an hour on something creative.",
        explain: "Liên từ <b>whenever</b> (bất cứ khi nào) mở đầu mệnh đề thời gian. Cấu trúc <b>spend + thời gian + on + danh từ</b>."
      },
      {
        sentence: "My friends and I sometimes play board games together on Friday nights.",
        explain: "Trạng từ tần suất <b>sometimes</b> đứng trước động từ thường. Giới từ <b>on + Friday nights</b> chỉ thời điểm lặp lại."
      },
      {
        sentence: "I also enjoy gardening, even though I don't have a lot of outdoor space.",
        explain: "Cấu trúc <b>enjoy + V-ing</b>. Liên từ nhượng bộ <b>even though</b> nối hai ý trái ngược."
      },
      {
        sentence: "Learning to play the guitar has been on my to-do list for years, but I never seem to find the time.",
        explain: "Danh động từ <b>Learning to play...</b> làm chủ ngữ. Thì hiện tại hoàn thành <b>has been... for years</b> diễn tả trạng thái kéo dài."
      },
      {
        sentence: "Some people think hobbies are a waste of time, but I completely disagree.",
        explain: "Mệnh đề tân ngữ sau <b>think</b> (đã lược bỏ <b>that</b>). Liên từ <b>but</b> thể hiện quan điểm trái ngược."
      },
      {
        sentence: "Having a hobby gives me a sense of accomplishment outside of work.",
        explain: "Danh động từ <b>Having a hobby</b> làm chủ ngữ của câu, chia động từ số ít <b>gives</b>."
      },
      {
        sentence: "If I could choose only one hobby to keep forever, it would definitely be painting.",
        explain: "Câu điều kiện loại 2 (giả định không có thật ở hiện tại): <b>If + S + could + V, S + would + V</b>."
      }
    ],
    speaking: [
      {
        cues: "favorite hobby / why",
        question: "What is your favorite hobby, and why do you enjoy it?",
        vi: "Sở thích yêu thích nhất của bạn là gì, và vì sao bạn thích nó?",
        hint: "Dùng <b>One of my favorite hobbies is..., which...</b>"
      },
      {
        cues: "weekend / activities",
        question: "How do you usually spend your weekends?",
        vi: "Bạn thường dành cuối tuần như thế nào?",
        hint: "Dùng <b>I usually spend my weekends + V-ing</b>"
      },
      {
        cues: "new hobby / recently",
        question: "Have you picked up any new hobby recently? Tell me about it.",
        vi: "Gần đây bạn có bắt đầu sở thích mới nào không? Kể cho tôi nghe.",
        hint: "Dùng <b>I picked up... as a new hobby, and I have...</b>"
      },
      {
        cues: "free time / creative",
        question: "What do you like to do with your free time to feel creative?",
        vi: "Bạn thích làm gì trong thời gian rảnh để cảm thấy sáng tạo?",
        hint: "Dùng <b>Whenever I have free time, I try to...</b>"
      },
      {
        cues: "hobby / never enough time",
        question: "Is there a hobby you've always wanted to try but never found time for?",
        vi: "Có sở thích nào bạn luôn muốn thử nhưng chưa bao giờ có thời gian không?",
        hint: "Dùng <b>...has been on my to-do list, but I never seem to...</b>"
      },
      {
        cues: "hobbies / waste of time / opinion",
        question: "Do you think hobbies are a waste of time, or are they important? Why?",
        vi: "Bạn nghĩ sở thích có lãng phí thời gian không, hay chúng quan trọng? Vì sao?",
        hint: "Dùng <b>Some people think..., but I...</b>"
      },
      {
        cues: "one hobby forever / choose",
        question: "If you could only keep one hobby forever, which one would you choose?",
        vi: "Nếu chỉ được giữ một sở thích duy nhất mãi mãi, bạn sẽ chọn gì?",
        hint: "Dùng câu điều kiện loại 2 <b>If I could..., it would be...</b>"
      }
    ]
  },
  {
    date: "2026-10-08",
    topic: "Công việc & Cuộc sống văn phòng (Work & Office Life)",
    sentences: [
      {
        en: "I usually arrive at the office around eight thirty, half an hour before my shift starts.",
        ipa: "/aɪ ˈjuʒuəli əˈraɪv æt ðə ˈɔːfɪs əˈraʊnd eɪt ˈθɜːrti, hæf ən ˈaʊər bɪˈfɔːr maɪ ʃɪft stɑːrts/",
        vi: "Tôi thường đến văn phòng lúc tám giờ rưỡi, nửa tiếng trước khi ca làm bắt đầu."
      },
      {
        en: "My typical day involves attending meetings, replying to emails, and working on ongoing projects.",
        ipa: "/maɪ ˈtɪpɪkəl deɪ ɪnˈvɑːlvz əˈtɛndɪŋ ˈmiːtɪŋz, rɪˈplaɪɪŋ tu ˈiːmeɪlz, ənd ˈwɜːrkɪŋ ɑːn ˈɑːnɡoʊɪŋ ˈprɑːdʒɛkts/",
        vi: "Một ngày điển hình của tôi gồm tham dự họp, trả lời email, và làm việc trên các dự án đang thực hiện."
      },
      {
        en: "I share an open-plan office with about twenty other colleagues.",
        ipa: "/aɪ ʃɛr ən ˈoʊpən plæn ˈɔːfɪs wɪð əˈbaʊt ˈtwɛnti ˈʌðər ˈkɑːliːɡz/",
        vi: "Tôi dùng chung một văn phòng mở với khoảng hai mươi đồng nghiệp khác."
      },
      {
        en: "My manager expects the whole team to submit weekly progress reports every Friday.",
        ipa: "/maɪ ˈmænɪdʒər ɪkˈspɛkts ðə hoʊl tiːm tu səbˈmɪt ˈwiːkli ˈprɑːɡrɛs rɪˈpɔːrts ˈɛvri ˈfraɪdeɪ/",
        vi: "Quản lý của tôi mong cả nhóm nộp báo cáo tiến độ hàng tuần vào mỗi thứ Sáu."
      },
      {
        en: "Sometimes I have to work overtime when there is an urgent deadline to meet.",
        ipa: "/ˈsʌmtaɪmz aɪ hæv tu wɜːrk ˈoʊvərtaɪm wɛn ðɛr ɪz ən ˈɜːrdʒənt ˈdɛdlaɪn tu miːt/",
        vi: "Thỉnh thoảng tôi phải làm thêm giờ khi có hạn chót gấp cần hoàn thành."
      },
      {
        en: "I get along well with most of my coworkers, especially the ones on my project team.",
        ipa: "/aɪ ɡɛt əˈlɔːŋ wɛl wɪð moʊst ʌv maɪ ˈkoʊwɜːrkərz, ɪˈspɛʃəli ðə wʌnz ɑːn maɪ ˈprɑːdʒɛkt tiːm/",
        vi: "Tôi hòa hợp tốt với hầu hết đồng nghiệp, đặc biệt là những người trong nhóm dự án của tôi."
      },
      {
        en: "Since I started working remotely two days a week, I have felt less stressed overall.",
        ipa: "/sɪns aɪ ˈstɑːrtɪd ˈwɜːrkɪŋ rɪˈmoʊtli tu deɪz ə wik, aɪ hæv fɛlt lɛs strɛst ˌoʊvərˈɔːl/",
        vi: "Kể từ khi tôi bắt đầu làm việc từ xa hai ngày một tuần, tôi đã cảm thấy bớt căng thẳng hơn."
      },
      {
        en: "One thing I dislike about my job is having too many back-to-back meetings.",
        ipa: "/wʌn θɪŋ aɪ dɪsˈlaɪk əˈbaʊt maɪ dʒɑːb ɪz ˈhævɪŋ tu ˈmɛni bæk tu bæk ˈmiːtɪŋz/",
        vi: "Một điều tôi không thích ở công việc là phải họp liên tiếp quá nhiều."
      },
      {
        en: "Whenever I feel overwhelmed, I take a short break to clear my head.",
        ipa: "/wɛnˈɛvər aɪ fiːl ˌoʊvərˈwɛlmd, aɪ teɪk ə ʃɔːrt breɪk tu klɪr maɪ hɛd/",
        vi: "Bất cứ khi nào cảm thấy quá tải, tôi nghỉ ngắn một chút để đầu óc thoải mái hơn."
      },
      {
        en: "Despite the occasional pressure, I generally find my job rewarding and meaningful.",
        ipa: "/dɪˈspaɪt ðə əˈkeɪʒənəl ˈprɛʃər, aɪ ˈdʒɛnərəli faɪnd maɪ dʒɑːb rɪˈwɔːrdɪŋ ənd ˈmiːnɪŋfəl/",
        vi: "Dù đôi khi có áp lực, nhìn chung tôi thấy công việc của mình xứng đáng và ý nghĩa."
      }
    ],
    vocabulary: [
      { word: "shift", ipa: "/ʃɪft/", type: "n", meaning: "ca làm việc" },
      { word: "attend a meeting", ipa: "/əˈtɛnd ə ˈmiːtɪŋ/", type: "phrase", meaning: "tham dự cuộc họp" },
      { word: "ongoing project", ipa: "/ˈɑːnɡoʊɪŋ ˈprɑːdʒɛkt/", type: "n", meaning: "dự án đang thực hiện" },
      { word: "open-plan office", ipa: "/ˈoʊpən plæn ˈɔːfɪs/", type: "n", meaning: "văn phòng mở" },
      { word: "colleague", ipa: "/ˈkɑːliːɡ/", type: "n", meaning: "đồng nghiệp" },
      { word: "manager", ipa: "/ˈmænɪdʒər/", type: "n", meaning: "quản lý" },
      { word: "progress report", ipa: "/ˈprɑːɡrɛs rɪˈpɔːrt/", type: "n", meaning: "báo cáo tiến độ" },
      { word: "overtime", ipa: "/ˈoʊvərtaɪm/", type: "n", meaning: "làm thêm giờ" },
      { word: "deadline", ipa: "/ˈdɛdlaɪn/", type: "n", meaning: "hạn chót" },
      { word: "coworker", ipa: "/ˈkoʊwɜːrkər/", type: "n", meaning: "đồng nghiệp" },
      { word: "remotely", ipa: "/rɪˈmoʊtli/", type: "adv", meaning: "từ xa" },
      { word: "back-to-back", ipa: "/bæk tu bæk/", type: "adj", meaning: "liên tiếp, dồn dập" },
      { word: "overwhelmed", ipa: "/ˌoʊvərˈwɛlmd/", type: "adj", meaning: "choáng ngợp, quá tải" },
      { word: "rewarding", ipa: "/rɪˈwɔːrdɪŋ/", type: "adj", meaning: "xứng đáng, bổ ích" }
    ],
    grammar: [
      {
        sentence: "I usually arrive at the office around eight thirty, half an hour before my shift starts.",
        explain: "Trạng từ tần suất <b>usually</b> đứng trước động từ thường. Liên từ thời gian <b>before</b> + mệnh đề hiện tại đơn."
      },
      {
        sentence: "My typical day involves attending meetings, replying to emails, and working on ongoing projects.",
        explain: "Cấu trúc <b>involve + V-ing</b>. Liệt kê ba danh động từ song song, nối bằng dấu phẩy và <b>and</b>."
      },
      {
        sentence: "I share an open-plan office with about twenty other colleagues.",
        explain: "Giới từ <b>with</b> diễn tả chia sẻ cùng ai. Cụm <b>about + số lượng</b> nghĩa là khoảng."
      },
      {
        sentence: "My manager expects the whole team to submit weekly progress reports every Friday.",
        explain: "Cấu trúc <b>expect + tân ngữ + to V</b> nghĩa là mong đợi ai làm gì."
      },
      {
        sentence: "Sometimes I have to work overtime when there is an urgent deadline to meet.",
        explain: "<b>have to + V</b> chỉ sự bắt buộc. Mệnh đề <b>to meet</b> rút gọn bổ nghĩa cho <b>deadline</b>."
      },
      {
        sentence: "I get along well with most of my coworkers, especially the ones on my project team.",
        explain: "Phrasal verb <b>get along well with</b>. Đại từ <b>the ones</b> thay cho <b>the coworkers</b> để tránh lặp từ."
      },
      {
        sentence: "Since I started working remotely two days a week, I have felt less stressed overall.",
        explain: "Liên từ <b>since</b> + mệnh đề quá khứ, mệnh đề chính dùng thì hiện tại hoàn thành <b>have felt</b> diễn tả thay đổi tính đến hiện tại."
      },
      {
        sentence: "One thing I dislike about my job is having too many back-to-back meetings.",
        explain: "Mệnh đề quan hệ rút gọn <b>One thing (that) I dislike...</b>. Danh động từ <b>having</b> làm bổ ngữ."
      },
      {
        sentence: "Whenever I feel overwhelmed, I take a short break to clear my head.",
        explain: "Liên từ <b>whenever</b> mở đầu mệnh đề thời gian. Cụm <b>to clear my head</b> chỉ mục đích."
      },
      {
        sentence: "Despite the occasional pressure, I generally find my job rewarding and meaningful.",
        explain: "Giới từ <b>despite</b> + danh từ (khác với <b>although</b> + mệnh đề). Cấu trúc <b>find + tân ngữ + tính từ</b> nghĩa là thấy cái gì đó như thế nào."
      }
    ],
    speaking: [
      {
        cues: "typical day / office",
        question: "What does a typical day at your job look like?",
        vi: "Một ngày điển hình trong công việc của bạn diễn ra như thế nào?",
        hint: "Dùng <b>My typical day involves + V-ing, V-ing, and V-ing</b>"
      },
      {
        cues: "manager / expectations",
        question: "What does your manager expect from you and your team?",
        vi: "Quản lý của bạn mong đợi gì ở bạn và nhóm của bạn?",
        hint: "Dùng <b>My manager expects + tân ngữ + to V</b>"
      },
      {
        cues: "overtime / deadline",
        question: "Do you often have to work overtime? When does that usually happen?",
        vi: "Bạn có thường phải làm thêm giờ không? Điều đó thường xảy ra khi nào?",
        hint: "Dùng <b>I have to... when there is...</b>"
      },
      {
        cues: "coworkers / relationship",
        question: "How well do you get along with your coworkers?",
        vi: "Bạn hòa hợp với đồng nghiệp như thế nào?",
        hint: "Dùng <b>get along well with</b>"
      },
      {
        cues: "remote work / stress",
        question: "Has working remotely (or in the office) changed how stressed you feel?",
        vi: "Việc làm từ xa (hay ở văn phòng) có thay đổi mức độ căng thẳng của bạn không?",
        hint: "Dùng <b>Since I started..., I have felt...</b>"
      },
      {
        cues: "dislike / job",
        question: "What is one thing you dislike about your job?",
        vi: "Điều bạn không thích ở công việc của mình là gì?",
        hint: "Dùng <b>One thing I dislike about my job is + V-ing</b>"
      },
      {
        cues: "overwhelmed / cope",
        question: "What do you do when you feel overwhelmed at work?",
        vi: "Bạn làm gì khi cảm thấy quá tải trong công việc?",
        hint: "Dùng <b>Whenever I feel..., I...</b>"
      }
    ]
  },
  {
    date: "2026-10-09",
    topic: "Công nghệ & Mạng xã hội (Technology & Social Media)",
    sentences: [
      {
        en: "I spend a lot of time on my phone every day, mostly checking social media and messaging apps.",
        ipa: "/aɪ spɛnd ə lɑːt ʌv taɪm ɑːn maɪ foʊn ˈɛvri deɪ, ˈmoʊstli ˈtʃɛkɪŋ ˈsoʊʃəl ˈmiːdiə ənd ˈmɛsɪdʒɪŋ æps/",
        vi: "Mỗi ngày tôi dành rất nhiều thời gian cho điện thoại, chủ yếu để kiểm tra mạng xã hội và các ứng dụng nhắn tin."
      },
      {
        en: "Instagram is the platform I use the most to keep up with friends and follow interesting accounts.",
        ipa: "/ˈɪnstəɡræm ɪz ðə ˈplætfɔːrm aɪ juz ðə moʊst tu kiːp ʌp wɪð frɛndz ənd ˈfɑːloʊ ˈɪntrəstɪŋ əˈkaʊnts/",
        vi: "Instagram là nền tảng tôi dùng nhiều nhất để cập nhật tin tức của bạn bè và theo dõi các tài khoản thú vị."
      },
      {
        en: "I try to limit my screen time to two hours a day, although I don't always succeed.",
        ipa: "/aɪ traɪ tu ˈlɪmɪt maɪ skriːn taɪm tu tu ˈaʊərz ə deɪ, ɔːlˈðoʊ aɪ doʊnt ˈɔːlweɪz səkˈsiːd/",
        vi: "Tôi cố giới hạn thời gian dùng màn hình xuống hai tiếng một ngày, mặc dù không phải lúc nào cũng thành công."
      },
      {
        en: "Social media can be a great way to stay connected, but it can also be quite addictive.",
        ipa: "/ˈsoʊʃəl ˈmiːdiə kæn bi ə ɡreɪt weɪ tu steɪ kəˈnɛktɪd, bʌt ɪt kæn ˈɔːlsoʊ bi kwaɪt əˈdɪktɪv/",
        vi: "Mạng xã hội có thể là cách tuyệt vời để giữ liên lạc, nhưng nó cũng có thể khá gây nghiện."
      },
      {
        en: "Sometimes I compare my life to what other people post online, which makes me feel a bit anxious.",
        ipa: "/ˈsʌmtaɪmz aɪ kəmˈpɛr maɪ laɪf tu wʌt ˈʌðər ˈpiːpəl poʊst ˈɑːnlaɪn, wɪtʃ meɪks mi fiːl ə bɪt ˈæŋkʃəs/",
        vi: "Đôi khi tôi so sánh cuộc sống của mình với những gì người khác đăng trên mạng, điều đó khiến tôi hơi lo lắng."
      },
      {
        en: "To avoid that, I have started following accounts that inspire and motivate me instead.",
        ipa: "/tu əˈvɔɪd ðæt, aɪ hæv ˈstɑːrtɪd ˈfɑːloʊɪŋ əˈkaʊnts ðæt ɪnˈspaɪr ənd ˈmoʊtɪveɪt mi ɪnˈstɛd/",
        vi: "Để tránh điều đó, tôi đã bắt đầu theo dõi những tài khoản truyền cảm hứng và tạo động lực cho tôi thay vào đó."
      },
      {
        en: "New technology, such as AI tools, has completely changed the way I study and work.",
        ipa: "/nu tɛkˈnɑːlədʒi, sʌtʃ æz eɪ aɪ tuːlz, hæz kəmˈpliːtli tʃeɪndʒd ðə weɪ aɪ ˈstʌdi ənd wɜːrk/",
        vi: "Công nghệ mới, chẳng hạn như các công cụ AI, đã hoàn toàn thay đổi cách tôi học và làm việc."
      },
      {
        en: "I use several apps to manage my schedule, take notes, and stay organized.",
        ipa: "/aɪ juz ˈsɛvərəl æps tu ˈmænɪdʒ maɪ ˈskɛdʒuːl, teɪk noʊts, ənd steɪ ˈɔːrɡənaɪzd/",
        vi: "Tôi dùng một số ứng dụng để quản lý lịch trình, ghi chú, và giữ mọi thứ có tổ chức."
      },
      {
        en: "My parents often ask me to spend less time on my phone and more time with the family.",
        ipa: "/maɪ ˈpɛrənts ˈɔːfən æsk mi tu spɛnd lɛs taɪm ɑːn maɪ foʊn ənd mɔːr taɪm wɪð ðə ˈfæməli/",
        vi: "Bố mẹ tôi thường yêu cầu tôi dùng điện thoại ít lại và dành nhiều thời gian hơn cho gia đình."
      },
      {
        en: "Overall, I believe technology is useful as long as we use it wisely and in moderation.",
        ipa: "/ˌoʊvərˈɔːl, aɪ bɪˈliːv tɛkˈnɑːlədʒi ɪz ˈjusfəl æz lɔːŋ æz wi juz ɪt ˈwaɪzli ənd ɪn ˌmɑːdəˈreɪʃən/",
        vi: "Nhìn chung, tôi tin công nghệ hữu ích miễn là chúng ta dùng nó khôn ngoan và điều độ."
      }
    ],
    vocabulary: [
      { word: "screen time", ipa: "/skriːn taɪm/", type: "n", meaning: "thời gian sử dụng màn hình" },
      { word: "messaging app", ipa: "/ˈmɛsɪdʒɪŋ æp/", type: "n", meaning: "ứng dụng nhắn tin" },
      { word: "platform", ipa: "/ˈplætfɔːrm/", type: "n", meaning: "nền tảng" },
      { word: "keep up with", ipa: "/kiːp ʌp wɪð/", type: "phrasal verb", meaning: "theo kịp, cập nhật với" },
      { word: "limit", ipa: "/ˈlɪmɪt/", type: "v", meaning: "giới hạn" },
      { word: "addictive", ipa: "/əˈdɪktɪv/", type: "adj", meaning: "gây nghiện" },
      { word: "compare", ipa: "/kəmˈpɛr/", type: "v", meaning: "so sánh" },
      { word: "anxious", ipa: "/ˈæŋkʃəs/", type: "adj", meaning: "lo lắng" },
      { word: "inspire", ipa: "/ɪnˈspaɪr/", type: "v", meaning: "truyền cảm hứng" },
      { word: "motivate", ipa: "/ˈmoʊtɪveɪt/", type: "v", meaning: "tạo động lực" },
      { word: "AI tool", ipa: "/eɪ aɪ tuːl/", type: "n", meaning: "công cụ trí tuệ nhân tạo" },
      { word: "manage", ipa: "/ˈmænɪdʒ/", type: "v", meaning: "quản lý" },
      { word: "organized", ipa: "/ˈɔːrɡənaɪzd/", type: "adj", meaning: "có tổ chức" },
      { word: "in moderation", ipa: "/ɪn ˌmɑːdəˈreɪʃən/", type: "phrase", meaning: "một cách điều độ" }
    ],
    grammar: [
      {
        sentence: "I spend a lot of time on my phone every day, mostly checking social media and messaging apps.",
        explain: "Cấu trúc <b>spend + thời gian + on + danh từ</b>. Phân từ <b>checking...</b> bổ sung thông tin về cách dùng thời gian đó."
      },
      {
        sentence: "Instagram is the platform I use the most to keep up with friends and follow interesting accounts.",
        explain: "Mệnh đề quan hệ rút gọn <b>the platform (that) I use the most</b>. Cụm <b>to keep up with...</b> chỉ mục đích."
      },
      {
        sentence: "I try to limit my screen time to two hours a day, although I don't always succeed.",
        explain: "Cấu trúc <b>try to + V</b>. Liên từ nhượng bộ <b>although</b>."
      },
      {
        sentence: "Social media can be a great way to stay connected, but it can also be quite addictive.",
        explain: "Động từ khiếm khuyết <b>can</b> diễn tả khả năng. Liên từ <b>but</b> nối hai ý trái ngược."
      },
      {
        sentence: "Sometimes I compare my life to what other people post online, which makes me feel a bit anxious.",
        explain: "Cấu trúc <b>compare... to...</b>. Mệnh đề danh từ <b>what other people post online</b> làm tân ngữ. Mệnh đề quan hệ không xác định <b>which makes...</b> bổ sung cho cả câu trước."
      },
      {
        sentence: "To avoid that, I have started following accounts that inspire and motivate me instead.",
        explain: "Cụm <b>To avoid that</b> chỉ mục đích đứng đầu câu. Cấu trúc <b>start + V-ing</b>. Mệnh đề quan hệ <b>that inspire and motivate me</b>."
      },
      {
        sentence: "New technology, such as AI tools, has completely changed the way I study and work.",
        explain: "Cụm <b>such as</b> đưa ra ví dụ, chen giữa câu bằng dấu phẩy. Thì hiện tại hoàn thành <b>has changed</b> diễn tả kết quả kéo dài đến hiện tại."
      },
      {
        sentence: "I use several apps to manage my schedule, take notes, and stay organized.",
        explain: "Cụm <b>to + V</b> chỉ mục đích, liệt kê ba động từ nguyên mẫu song song nối bằng dấu phẩy và <b>and</b>."
      },
      {
        sentence: "My parents often ask me to spend less time on my phone and more time with the family.",
        explain: "Cấu trúc <b>ask + tân ngữ + to V</b>. So sánh song song <b>less... and more...</b>."
      },
      {
        sentence: "Overall, I believe technology is useful as long as we use it wisely and in moderation.",
        explain: "Liên từ điều kiện <b>as long as</b> (miễn là) nối hai mệnh đề."
      }
    ],
    speaking: [
      {
        cues: "phone / daily use",
        question: "How much time do you spend on your phone every day, and what do you mainly use it for?",
        vi: "Mỗi ngày bạn dùng điện thoại bao lâu, và chủ yếu dùng để làm gì?",
        hint: "Dùng <b>I spend + thời gian + on my phone, mostly + V-ing</b>"
      },
      {
        cues: "favorite platform / why",
        question: "Which social media platform do you use the most, and why?",
        vi: "Bạn dùng nền tảng mạng xã hội nào nhiều nhất, và vì sao?",
        hint: "Dùng <b>...is the platform I use the most to...</b>"
      },
      {
        cues: "limit screen time / succeed",
        question: "Do you try to limit your screen time? How successful are you at it?",
        vi: "Bạn có cố gắng giới hạn thời gian dùng màn hình không? Bạn làm được điều đó tốt đến mức nào?",
        hint: "Dùng <b>I try to..., although...</b>"
      },
      {
        cues: "social media / compare",
        question: "Have you ever felt anxious after comparing your life to what you see online?",
        vi: "Bạn đã bao giờ cảm thấy lo lắng sau khi so sánh cuộc sống mình với những gì thấy trên mạng chưa?",
        hint: "Dùng <b>compare... to..., which makes me feel...</b>"
      },
      {
        cues: "follow / inspire",
        question: "What kind of accounts do you follow that inspire or motivate you?",
        vi: "Bạn theo dõi những tài khoản nào truyền cảm hứng hay tạo động lực cho bạn?",
        hint: "Dùng mệnh đề quan hệ <b>accounts that...</b>"
      },
      {
        cues: "AI / study or work",
        question: "How has new technology, like AI tools, changed the way you study or work?",
        vi: "Công nghệ mới, như các công cụ AI, đã thay đổi cách bạn học hay làm việc như thế nào?",
        hint: "Dùng <b>has completely changed the way + S + V</b>"
      },
      {
        cues: "family / less phone time",
        question: "Does your family ever ask you to spend less time on your phone? How do you respond?",
        vi: "Gia đình bạn có bao giờ yêu cầu bạn dùng điện thoại ít lại không? Bạn phản ứng thế nào?",
        hint: "Dùng <b>ask me to + V</b>"
      }
    ]
  },
  {
    date: "2026-10-10",
    topic: "Ôn tập tuần 2: Từ vựng & Ngữ pháp (Weekly Review 3 — Vocabulary & Grammar)",
    sentences: [
      {
        en: "This week, I learned how to talk about a recent trip, including transportation and accommodation.",
        ipa: "/ðɪs wik, aɪ lɜːrnd haʊ tu tɔːk əˈbaʊt ə ˈriːsənt trɪp, ɪnˈkluːdɪŋ ˌtrænspərˈteɪʃən ənd əˌkɑːməˈdeɪʃən/",
        vi: "Tuần này, tôi đã học cách nói về một chuyến đi gần đây, bao gồm phương tiện di chuyển và chỗ ở."
      },
      {
        en: "One useful phrase from the travel lesson is 'get used to', which describes becoming familiar with something over time.",
        ipa: "/wʌn ˈjusfəl freɪz frʌm ðə ˈtrævəl ˈlɛsən ɪz ɡɛt just tu, wɪtʃ dɪˈskraɪbz bɪˈkʌmɪŋ fəˈmɪljər wɪð ˈsʌmθɪŋ ˈoʊvər taɪm/",
        vi: "Một cụm từ hữu ích trong bài du lịch là 'get used to', diễn tả việc dần trở nên quen thuộc với điều gì đó."
      },
      {
        en: "I also reviewed vocabulary related to exercise, like 'cardio', 'warm up', and 'work out'.",
        ipa: "/aɪ ˈɔːlsoʊ rɪˈvjud vəˈkæbjəlɛri rɪˈleɪtɪd tu ˈɛksərsaɪz, laɪk ˈkɑːrdioʊ, wɔːrm ʌp, ənd wɜːrk aʊt/",
        vi: "Tôi cũng ôn lại từ vựng liên quan đến tập luyện, như 'cardio', 'warm up', và 'work out'."
      },
      {
        en: "I remember that 'suggest that + S + V' uses the base form of the verb, without 's' or 'to'.",
        ipa: "/aɪ rɪˈmɛmbər ðæt səɡˈdʒɛst ðæt juzɪz ðə beɪs fɔːrm ʌv ðə vɜːrb, wɪðˈaʊt ɛs ɔːr tu/",
        vi: "Tôi nhớ rằng cấu trúc 'suggest that + S + V' dùng động từ ở dạng nguyên mẫu, không thêm 's' hay 'to'."
      },
      {
        en: "For hobbies, I practiced structures like 'spend + time + V-ing' to describe how I use my free time.",
        ipa: "/fɔːr ˈhɑːbiz, aɪ ˈpræktɪst ˈstrʌktʃərz laɪk spɛnd taɪm ˈvɜːrb ɪŋ tu dɪˈskraɪb haʊ aɪ juz maɪ fri taɪm/",
        vi: "Về sở thích, tôi đã luyện cấu trúc như 'spend + time + V-ing' để mô tả cách tôi dùng thời gian rảnh."
      },
      {
        en: "I still remember the second conditional structure: 'If I could..., it would be...' for imaginary situations.",
        ipa: "/aɪ stɪl rɪˈmɛmbər ðə ˈsɛkənd kənˈdɪʃənəl ˈstrʌktʃər: ɪf aɪ kʊd, ɪt wʊd bi, fɔːr ɪˈmædʒɪnɛri ˌsɪtʃuˈeɪʃənz/",
        vi: "Tôi vẫn nhớ cấu trúc câu điều kiện loại 2: 'If I could..., it would be...' dùng cho các tình huống giả định."
      },
      {
        en: "In the work lesson, I learned expressions such as 'get along well with' and 'back-to-back meetings'.",
        ipa: "/ɪn ðə wɜːrk ˈlɛsən, aɪ lɜːrnd ɪkˈsprɛʃənz sʌtʃ æz ɡɛt əˈlɔːŋ wɛl wɪð ənd bæk tu bæk ˈmiːtɪŋz/",
        vi: "Trong bài học công việc, tôi đã học các cụm như 'get along well with' và 'back-to-back meetings'."
      },
      {
        en: "I also reviewed the structure 'expect someone to do something', which shows what one person wants from another.",
        ipa: "/aɪ ˈɔːlsoʊ rɪˈvjud ðə ˈstrʌktʃər ɪkˈspɛkt ˈsʌmwʌn tu du ˈsʌmθɪŋ, wɪtʃ ʃoʊz wʌt wʌn ˈpɜːrsən wɑːnts frʌm əˈnʌðər/",
        vi: "Tôi cũng ôn lại cấu trúc 'expect someone to do something', cho thấy điều một người mong đợi từ người khác."
      },
      {
        en: "About technology, I now know how to say 'screen time', 'addictive', and 'in moderation'.",
        ipa: "/əˈbaʊt tɛkˈnɑːlədʒi, aɪ naʊ noʊ haʊ tu seɪ skriːn taɪm, əˈdɪktɪv, ənd ɪn ˌmɑːdəˈreɪʃən/",
        vi: "Về chủ đề công nghệ, giờ tôi đã biết cách nói 'screen time', 'addictive', và 'in moderation'."
      },
      {
        en: "Overall, this week taught me how to describe travel, health, hobbies, work, and technology more naturally.",
        ipa: "/ˌoʊvərˈɔːl, ðɪs wik tɔːt mi haʊ tu dɪˈskraɪb ˈtrævəl, hɛlθ, ˈhɑːbiz, wɜːrk, ənd tɛkˈnɑːlədʒi mɔːr ˈnætʃərəli/",
        vi: "Nhìn chung, tuần này đã dạy tôi cách mô tả du lịch, sức khỏe, sở thích, công việc, và công nghệ tự nhiên hơn."
      }
    ],
    vocabulary: [
      { word: "take a trip", ipa: "/teɪk ə trɪp/", type: "phrase", meaning: "đi một chuyến (Ngày 8)" },
      { word: "get used to", ipa: "/ɡɛt just tu/", type: "phrase", meaning: "dần quen với (Ngày 8)" },
      { word: "cardio", ipa: "/ˈkɑːrdioʊ/", type: "n", meaning: "bài tập tim mạch (Ngày 9)" },
      { word: "warm up", ipa: "/wɔːrm ʌp/", type: "phrasal verb", meaning: "khởi động (Ngày 9)" },
      { word: "work out", ipa: "/wɜːrk aʊt/", type: "phrasal verb", meaning: "tập luyện (Ngày 9)" },
      { word: "pick up (a hobby)", ipa: "/pɪk ʌp/", type: "phrasal verb", meaning: "bắt đầu một sở thích (Ngày 10)" },
      { word: "to-do list", ipa: "/tu du lɪst/", type: "n", meaning: "danh sách việc cần làm (Ngày 10)" },
      { word: "get along well with", ipa: "/ɡɛt əˈlɔːŋ wɛl wɪð/", type: "phrase", meaning: "hòa hợp với (Ngày 11)" },
      { word: "back-to-back", ipa: "/bæk tu bæk/", type: "adj", meaning: "liên tiếp (Ngày 11)" },
      { word: "deadline", ipa: "/ˈdɛdlaɪn/", type: "n", meaning: "hạn chót (Ngày 11)" },
      { word: "screen time", ipa: "/skriːn taɪm/", type: "n", meaning: "thời gian dùng màn hình (Ngày 12)" },
      { word: "addictive", ipa: "/əˈdɪktɪv/", type: "adj", meaning: "gây nghiện (Ngày 12)" },
      { word: "in moderation", ipa: "/ɪn ˌmɑːdəˈreɪʃən/", type: "phrase", meaning: "một cách điều độ (Ngày 12)" }
    ],
    grammar: [
      {
        sentence: "This week, I learned how to talk about a recent trip, including transportation and accommodation.",
        explain: "Cấu trúc <b>learn how to + V</b>. Ôn lại chủ đề du lịch ở Ngày 8."
      },
      {
        sentence: "One useful phrase from the travel lesson is 'get used to', which describes becoming familiar with something over time.",
        explain: "Ôn lại cấu trúc <b>get used to + N/V-ing</b> (Ngày 8 – Du lịch): nghĩa là dần quen với điều gì đó. Mệnh đề quan hệ <b>which describes...</b> bổ nghĩa."
      },
      {
        sentence: "I also reviewed vocabulary related to exercise, like 'cardio', 'warm up', and 'work out'.",
        explain: "Cấu trúc <b>like + danh từ</b> để đưa ví dụ. Ôn từ vựng chủ đề sức khỏe & tập luyện ở Ngày 9."
      },
      {
        sentence: "I remember that 'suggest that + S + V' uses the base form of the verb, without 's' or 'to'.",
        explain: "Ôn lại cấu trúc <b>suggest that + S + V (nguyên mẫu)</b> (Ngày 9 – Sức khỏe): động từ trong mệnh đề <b>that</b> không chia, dùng nguyên mẫu."
      },
      {
        sentence: "For hobbies, I practiced structures like 'spend + time + V-ing' to describe how I use my free time.",
        explain: "Ôn lại cấu trúc <b>spend + thời gian + V-ing</b> (Ngày 10 – Sở thích): diễn tả dành thời gian làm gì."
      },
      {
        sentence: "I still remember the second conditional structure: 'If I could..., it would be...' for imaginary situations.",
        explain: "Ôn lại câu điều kiện loại 2 <b>If + S + could + V, S + would + V</b> (Ngày 10 – Sở thích): diễn tả tình huống giả định không có thật ở hiện tại."
      },
      {
        sentence: "In the work lesson, I learned expressions such as 'get along well with' and 'back-to-back meetings'.",
        explain: "Ôn phrasal verb <b>get along well with</b> và cụm tính từ ghép <b>back-to-back</b> (Ngày 11 – Công việc)."
      },
      {
        sentence: "I also reviewed the structure 'expect someone to do something', which shows what one person wants from another.",
        explain: "Ôn lại cấu trúc <b>expect + tân ngữ + to V</b> (Ngày 11 – Công việc): nghĩa là mong đợi ai làm gì."
      },
      {
        sentence: "About technology, I now know how to say 'screen time', 'addictive', and 'in moderation'.",
        explain: "Cấu trúc <b>know how to say</b> + từ vựng. Ôn từ vựng chủ đề công nghệ ở Ngày 12."
      },
      {
        sentence: "Overall, this week taught me how to describe travel, health, hobbies, work, and technology more naturally.",
        explain: "Cấu trúc <b>teach + tân ngữ + how to + V</b>. Tổng kết năm chủ đề đã học, nối bằng dấu phẩy và <b>and</b> ở cuối."
      }
    ],
    speaking: [
      {
        cues: "travel + technology / apps",
        question: "What apps or technology do you use to help you when traveling?",
        vi: "Bạn dùng ứng dụng hay công nghệ gì để hỗ trợ khi đi du lịch?",
        hint: "Kết hợp chủ đề du lịch (Ngày 8) và công nghệ (Ngày 12)."
      },
      {
        cues: "health + work / stress",
        question: "How do you stay healthy despite a busy work schedule?",
        vi: "Bạn giữ gìn sức khỏe thế nào dù lịch làm việc bận rộn?",
        hint: "Kết hợp sức khỏe (Ngày 9) và công việc (Ngày 11), dùng <b>despite</b>."
      },
      {
        cues: "hobby + travel",
        question: "Do you have a hobby that you enjoy doing while traveling?",
        vi: "Bạn có sở thích nào bạn thích làm khi đi du lịch không?",
        hint: "Kết hợp sở thích (Ngày 10) và du lịch (Ngày 8)."
      },
      {
        cues: "screen time / hobby offline",
        question: "Do you think spending less screen time and doing more hobbies would make you happier?",
        vi: "Bạn nghĩ giảm thời gian dùng màn hình và làm nhiều sở thích hơn có khiến bạn hạnh phúc hơn không?",
        hint: "Kết hợp công nghệ (Ngày 12) và sở thích (Ngày 10)."
      },
      {
        cues: "work / motivation / exercise",
        question: "Does exercising help you feel more motivated at work?",
        vi: "Việc tập thể dục có giúp bạn cảm thấy có động lực hơn trong công việc không?",
        hint: "Kết hợp sức khỏe (Ngày 9) và công việc (Ngày 11)."
      },
      {
        cues: "remote work / travel",
        question: "Would working remotely make it easier for you to travel more often?",
        vi: "Làm việc từ xa có giúp bạn dễ dàng đi du lịch thường xuyên hơn không?",
        hint: "Kết hợp công việc (Ngày 11) và du lịch (Ngày 8), dùng câu điều kiện."
      },
      {
        cues: "this week / favorite topic",
        question: "Which topic from this week did you enjoy learning about the most, and why?",
        vi: "Chủ đề nào trong tuần này bạn thích học nhất, và vì sao?",
        hint: "Dùng <b>I enjoyed learning about... because...</b>"
      }
    ]
  },
  {
    date: "2026-10-11",
    topic: "Ôn tập tuần 2: Luyện nói tổng hợp (Weekly Review 4 — Speaking Synthesis)",
    sentences: [
      {
        en: "Although I love traveling, I don't have much time for trips because of my busy work schedule.",
        ipa: "/ɔːlˈðoʊ aɪ lʌv ˈtrævəlɪŋ, aɪ doʊnt hæv mʌtʃ taɪm fɔːr trɪps bɪˈkɔːz ʌv maɪ ˈbɪzi wɜːrk ˈskɛdʒuːl/",
        vi: "Mặc dù rất thích đi du lịch, tôi không có nhiều thời gian cho các chuyến đi vì lịch làm việc bận rộn."
      },
      {
        en: "I try to exercise regularly, so I usually feel more energetic when I'm at the office.",
        ipa: "/aɪ traɪ tu ˈɛksərsaɪz ˈrɛɡjələrli, soʊ aɪ ˈjuʒuəli fiːl mɔːr ˌɛnərˈdʒɛtɪk wɛn aɪm æt ðə ˈɔːfɪs/",
        vi: "Tôi cố gắng tập thể dục đều đặn, nên tôi thường cảm thấy tràn đầy năng lượng hơn khi ở văn phòng."
      },
      {
        en: "My hobby of photography actually helps me relax after a stressful day at work.",
        ipa: "/maɪ ˈhɑːbi ʌv fəˈtɑːɡrəfi ˈæktʃuəli hɛlps mi rɪˈlæks ˈæftər ə ˈstrɛsfəl deɪ æt wɜːrk/",
        vi: "Sở thích chụp ảnh của tôi thực sự giúp tôi thư giãn sau một ngày làm việc căng thẳng."
      },
      {
        en: "Even though I enjoy using social media, I try not to let it distract me from my hobbies.",
        ipa: "/ˈiːvən ðoʊ aɪ ɪnˈdʒɔɪ ˈjuzɪŋ ˈsoʊʃəl ˈmiːdiə, aɪ traɪ nɑːt tu lɛt ɪt dɪˈstrækt mi frʌm maɪ ˈhɑːbiz/",
        vi: "Mặc dù tôi thích dùng mạng xã hội, tôi cố không để nó làm xao nhãng khỏi các sở thích của mình."
      },
      {
        en: "Because my job requires long hours at a screen, I make sure to exercise to protect my eyesight and posture.",
        ipa: "/bɪˈkɔːz maɪ dʒɑːb rɪˈkwaɪərz lɔːŋ ˈaʊərz æt ə skriːn, aɪ meɪk ʃʊr tu ˈɛksərsaɪz tu prəˈtɛkt maɪ ˈaɪsaɪt ənd ˈpɑːstʃər/",
        vi: "Vì công việc đòi hỏi ngồi nhiều giờ trước màn hình, tôi luôn tập thể dục để bảo vệ thị lực và tư thế của mình."
      },
      {
        en: "However busy I am with work, I always try to plan a short trip every few months to recharge.",
        ipa: "/haʊˈɛvər ˈbɪzi aɪ æm wɪð wɜːrk, aɪ ˈɔːlweɪz traɪ tu plæn ə ʃɔːrt trɪp ˈɛvri fju mʌnθs tu riˈtʃɑːrdʒ/",
        vi: "Dù bận rộn với công việc đến đâu, tôi luôn cố lên kế hoạch cho một chuyến đi ngắn vài tháng một lần để nạp lại năng lượng."
      },
      {
        en: "In addition to going to the gym, I also use a fitness app to track my progress and stay motivated.",
        ipa: "/ɪn əˈdɪʃən tu ˈɡoʊɪŋ tu ðə dʒɪm, aɪ ˈɔːlsoʊ juz ə ˈfɪtnəs æp tu træk maɪ ˈprɑːɡrɛs ənd steɪ ˈmoʊtɪveɪtɪd/",
        vi: "Ngoài việc đến phòng tập, tôi còn dùng một ứng dụng thể hình để theo dõi tiến độ và giữ động lực."
      },
      {
        en: "No matter how tired I am after work, I still make time for my hobbies on the weekend.",
        ipa: "/noʊ ˈmætər haʊ ˈtaɪərd aɪ æm ˈæftər wɜːrk, aɪ stɪl meɪk taɪm fɔːr maɪ ˈhɑːbiz ɑːn ðə ˈwiːkɛnd/",
        vi: "Dù mệt đến đâu sau giờ làm, tôi vẫn dành thời gian cho sở thích của mình vào cuối tuần."
      },
      {
        en: "My last trip was so relaxing that I came back to work feeling much more productive.",
        ipa: "/maɪ læst trɪp wəz soʊ rɪˈlæksɪŋ ðæt aɪ keɪm bæk tu wɜːrk ˈfiːlɪŋ mʌtʃ mɔːr prəˈdʌktɪv/",
        vi: "Chuyến đi gần nhất của tôi thư giãn đến mức khi quay lại làm việc tôi cảm thấy hiệu quả hơn hẳn."
      },
      {
        en: "Overall, balancing work, health, hobbies, travel, and technology has taught me the importance of a well-rounded life.",
        ipa: "/ˌoʊvərˈɔːl, ˈbælənsɪŋ wɜːrk, hɛlθ, ˈhɑːbiz, ˈtrævəl, ənd tɛkˈnɑːlədʒi hæz tɔːt mi ðə ɪmˈpɔːrtəns ʌv ə wɛl ˈraʊndɪd laɪf/",
        vi: "Nhìn chung, việc cân bằng công việc, sức khỏe, sở thích, du lịch, và công nghệ đã dạy tôi tầm quan trọng của một cuộc sống toàn diện."
      }
    ],
    vocabulary: [
      { word: "although", ipa: "/ɔːlˈðoʊ/", type: "conj", meaning: "mặc dù" },
      { word: "because of", ipa: "/bɪˈkɔːz ʌv/", type: "phrase", meaning: "bởi vì (do)" },
      { word: "energetic", ipa: "/ˌɛnərˈdʒɛtɪk/", type: "adj", meaning: "tràn đầy năng lượng" },
      { word: "distract", ipa: "/dɪˈstrækt/", type: "v", meaning: "làm xao nhãng" },
      { word: "posture", ipa: "/ˈpɑːstʃər/", type: "n", meaning: "tư thế" },
      { word: "however", ipa: "/haʊˈɛvər/", type: "adv", meaning: "dù thế nào, tuy nhiên" },
      { word: "recharge", ipa: "/riˈtʃɑːrdʒ/", type: "v", meaning: "nạp lại năng lượng" },
      { word: "in addition to", ipa: "/ɪn əˈdɪʃən tu/", type: "phrase", meaning: "ngoài ra, thêm vào đó" },
      { word: "track progress", ipa: "/træk ˈprɑːɡrɛs/", type: "phrase", meaning: "theo dõi tiến độ" },
      { word: "no matter how", ipa: "/noʊ ˈmætər haʊ/", type: "phrase", meaning: "dù... đến đâu" },
      { word: "productive", ipa: "/prəˈdʌktɪv/", type: "adj", meaning: "năng suất, hiệu quả" },
      { word: "well-rounded", ipa: "/wɛl ˈraʊndɪd/", type: "adj", meaning: "toàn diện" }
    ],
    grammar: [
      {
        sentence: "Although I love traveling, I don't have much time for trips because of my busy work schedule.",
        explain: "Liên từ nhượng bộ <b>although</b> đứng đầu câu. <b>because of</b> + danh từ (khác với <b>because</b> + mệnh đề) giải thích lý do."
      },
      {
        sentence: "I try to exercise regularly, so I usually feel more energetic when I'm at the office.",
        explain: "Liên từ chỉ kết quả <b>so</b> nối nguyên nhân - kết quả. Mệnh đề thời gian <b>when</b>."
      },
      {
        sentence: "My hobby of photography actually helps me relax after a stressful day at work.",
        explain: "Cấu trúc <b>help + tân ngữ + V nguyên mẫu</b>. Giới từ <b>after</b> + danh từ chỉ thời gian."
      },
      {
        sentence: "Even though I enjoy using social media, I try not to let it distract me from my hobbies.",
        explain: "Liên từ nhượng bộ mạnh <b>even though</b>. Cấu trúc <b>let + tân ngữ + V nguyên mẫu</b>, phủ định với <b>try not to</b>."
      },
      {
        sentence: "Because my job requires long hours at a screen, I make sure to exercise to protect my eyesight and posture.",
        explain: "Liên từ chỉ lý do <b>because</b> đứng đầu câu, theo sau là mệnh đề chính. Hai cụm <b>to V</b> liên tiếp (<b>make sure to, to protect</b>) chỉ hành động nối tiếp."
      },
      {
        sentence: "However busy I am with work, I always try to plan a short trip every few months to recharge.",
        explain: "Cấu trúc nhượng bộ <b>however + tính từ + S + V</b>, nghĩa là dù... thế nào."
      },
      {
        sentence: "In addition to going to the gym, I also use a fitness app to track my progress and stay motivated.",
        explain: "Cụm từ nối <b>in addition to + V-ing</b> đứng đầu câu để bổ sung thông tin."
      },
      {
        sentence: "No matter how tired I am after work, I still make time for my hobbies on the weekend.",
        explain: "Cấu trúc nhượng bộ <b>no matter how + tính từ + S + V</b>, nghĩa là dù... đến đâu."
      },
      {
        sentence: "My last trip was so relaxing that I came back to work feeling much more productive.",
        explain: "Cấu trúc kết quả <b>so + tính từ + that + mệnh đề</b>, nghĩa là quá... đến nỗi."
      },
      {
        sentence: "Overall, balancing work, health, hobbies, travel, and technology has taught me the importance of a well-rounded life.",
        explain: "Danh động từ <b>balancing...</b> làm chủ ngữ. Liệt kê nhiều danh từ nối bằng dấu phẩy và <b>and</b> ở cuối."
      }
    ],
    speaking: [
      {
        cues: "travel / busy schedule / although",
        question: "Although you might be busy, how do you still make time to travel?",
        vi: "Dù có thể bận rộn, bạn vẫn dành thời gian đi du lịch như thế nào?",
        hint: "Dùng <b>Although..., I still...</b>"
      },
      {
        cues: "exercise / energy / work",
        question: "How does exercising affect your energy level at work?",
        vi: "Việc tập thể dục ảnh hưởng đến mức năng lượng của bạn trong công việc như thế nào?",
        hint: "Dùng <b>..., so I feel...</b>"
      },
      {
        cues: "hobby / stress relief",
        question: "How does your hobby help you deal with a stressful day at work?",
        vi: "Sở thích của bạn giúp bạn đối phó với ngày làm việc căng thẳng như thế nào?",
        hint: "Dùng <b>help + tân ngữ + V nguyên mẫu</b>"
      },
      {
        cues: "social media / hobbies / distraction",
        question: "Does social media ever distract you from your hobbies or work? How do you handle it?",
        vi: "Mạng xã hội có bao giờ làm bạn xao nhãng khỏi sở thích hay công việc không? Bạn xử lý thế nào?",
        hint: "Dùng <b>even though..., I try not to let it...</b>"
      },
      {
        cues: "screen time / posture / exercise",
        question: "Because of long hours at a screen, what do you do to protect your health?",
        vi: "Vì phải ngồi màn hình lâu, bạn làm gì để bảo vệ sức khỏe?",
        hint: "Dùng <b>because + mệnh đề, I make sure to...</b>"
      },
      {
        cues: "no matter how tired / hobbies",
        question: "No matter how tired you are, do you still make time for your hobbies?",
        vi: "Dù mệt đến đâu, bạn có vẫn dành thời gian cho sở thích không?",
        hint: "Dùng <b>No matter how + tính từ + S + V, S + still...</b>"
      },
      {
        cues: "work + health + hobbies + travel + tech / balance",
        question: "How do you balance work, health, hobbies, travel, and technology in your life?",
        vi: "Bạn cân bằng công việc, sức khỏe, sở thích, du lịch và công nghệ trong cuộc sống như thế nào?",
        hint: "Dùng danh động từ làm chủ ngữ <b>Balancing... has taught me...</b>"
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
// vẫn dùng giọng mặc định của máy (tiếng Việt). Phải chọn hẳn 1 giọng tiếng Anh.
const SPEAK_LANG = "en-US";
const SPEAK_LANG_PREFIXES = ["en-us", "en-gb", "en-au", "en"];
// Giọng đọc tự nhiên hay gặp trên iPhone/Mac, Windows, Android -> ưu tiên.
const GOOD_VOICE_NAMES = ["samantha", "ava", "allison", "susan", "zoe", "evan", "nathan", "tom", "daniel", "karen", "serena", "jenny", "aria", "guy"];
// Giọng "vui" của iPhone/Mac (cùng lang en-US nhưng đọc rất khó nghe) -> loại bỏ.
const NOVELTY_VOICE_NAMES = ["albert", "bad news", "bahh", "bells", "boing", "bubbles", "cellos", "deranged", "good news", "hysterical", "jester", "junior", "kathy", "organ", "pipe organ", "princess", "ralph", "superstar", "trinoids", "whisper", "wobble", "zarvox", "fred"];
// Giọng Eloquence (iOS 17+): đọc được nhưng giọng máy móc -> chỉ dùng khi không còn giọng nào khác.
const ELOQUENCE_VOICE_NAMES = ["eddy", "flo", "grandma", "grandpa", "reed", "rocko", "sandy", "shelley"];
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
  if(ELOQUENCE_VOICE_NAMES.includes(name.replace(/\s*\(.*$/, "").trim())) score -= 30;
  score -= langRank(v) * 5;
  return score;
}

function candidateVoices(){
  return window.speechSynthesis.getVoices()
    .filter(v => langRank(v) >= 0)
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
  // Máy có danh sách giọng nhưng không có giọng tiếng Anh -> báo cách cài thay vì đọc giọng Việt.
  if(!speakVoice && window.speechSynthesis.getVoices().length > 0){
    alert("Máy chưa có giọng đọc tiếng Anh.\n\n" +
      "• Android: Cài đặt > Quản lý chung / Trợ năng > Chuyển văn bản thành giọng nói > Công cụ của Google > Cài đặt dữ liệu giọng nói > tải Tiếng Anh.\n" +
      "• iPhone: Cài đặt > Trợ năng > Nội dung được đọc > Giọng nói > tải giọng Tiếng Anh.\n\n" +
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
const availableDates = LESSONS.map(l => l.date).sort();
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
  const lesson = LESSONS.find(l => l.date === selectedDate);

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
          <div class="en">${s.en}</div>
          ${speakBtn(s.en)}
        </div>
        <div class="phonetic">${s.ipa}</div>
        <div class="vi">${s.vi}</div>
      </div>
    `).join("") +
    `</div>`;

  pVocab.innerHTML = `<div class="card">
    <table>
      <thead>
        <tr><th>Từ / Cụm từ</th><th>Phiên âm</th><th>Loại</th><th>Nghĩa</th></tr>
      </thead>
      <tbody>
        ${lesson.vocabulary.map(v => `
          <tr>
            <td><div class="word-row"><span class="word">${v.word}</span>${speakBtn(v.word)}</div></td>
            <td class="word-phonetic">${v.ipa}</td>
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
