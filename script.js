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
  }
];

function escapeAttr(text){
  return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function speakBtn(text){
  return `<button class="speak-btn" data-speak="${escapeAttr(text)}" title="Nghe phát âm" aria-label="Nghe phát âm">🔊</button>`;
}

let currentSpeakBtn = null;

function speak(text, btn){
  if(!("speechSynthesis" in window)){
    alert("Trình duyệt này không hỗ trợ phát âm (Text-to-Speech).");
    return;
  }
  window.speechSynthesis.cancel();
  if(currentSpeakBtn) currentSpeakBtn.classList.remove("playing");

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
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
