import type { ChapterModule } from '@/types/content';
import bab1Interaksi from '@/components/resource/bab1_interaksi.jpg';
import bab2SuhuAtm from '@/components/resource/bab2_suhuatm.jpg';
import bab3ZenithAlt from '@/components/resource/bab3_zenithalt.jpg';
import bab4AliranEnergiPermukaan from '@/components/resource/bab4_aliranenergipermukaan.jpg';
import bab5DiurnalCycle from '@/components/resource/bab5_diurnalcycle.jpg';
import bab6WaterPres from '@/components/resource/bab6_waterpres.jpg';
import bab7Geostropik from '@/components/resource/bab7_geostropik.jpg';

export const curriculum: ChapterModule[] = [
  {
    id: 1,
    slug: 'pengantar-klimatologi',
    title: 'Pengantar Klimatologi & Sistem Iklim',
    subtitle: 'Memahami Fondasi Statistika Atmosfer dan Interaksi Global',
    durationMin: 45,
    courseCode: 'SAR 1211',
    instructorText: 'Selamat datang di Modul 1. Fokus utama kita adalah membedakan cuaca dari iklim dan memahami bagaimana Bumi beroperasi sebagai sistem energi yang saling berinteraksi.',
    figures: [
      {
        id: 'fig-1-1',
        figureNumber: 'FIG 1.1',
        sourceRef: 'Pendahuluan',
        title: 'Interaksi Sistem Iklim Global',
        imageSrc: bab1Interaksi.src,
        altText: 'Diagram interaksi komponen sistem iklim: Atmosfer, Hidrosfer, Kriosfer, Biosfer, dan Litosfer.',
      },
    ],
    subchapters: [
      {
        "id": "1.1",
        "num": "01.1",
        "title": "Cuaca, iklim, meteorologi, dan klimatologi",
        "contentMarkdown": "**Cuaca** adalah keadaan atmosfer aktual pada tempat dan waktu tertentu, misalnya suhu, tekanan, kelembapan, tutupan awan, curah hujan, dan angin pada suatu jam atau hari. Cuaca berubah pada skala menit hingga hari; pola perubahan dalam satu hari disebut variasi **diurnal**.\n\n**Iklim** bukan sekadar “cuaca rata-rata”. Iklim merupakan sintesis statistik unsur cuaca dalam jangka panjang pada suatu wilayah, yang meliputi rata-rata, rentang, variabilitas, frekuensi, peluang kejadian ekstrem, dan pola musiman. Rata-rata 30 tahun sering dipakai sebagai periode normal klimatologis, tetapi data iklim dapat dianalisis untuk rentang lain sesuai tujuan dan ketersediaan data.\n\n| Aspek | Cuaca | Iklim |\n|---|---|---|\n| Fokus | Kondisi atmosfer aktual | Statistik dan pola jangka panjang |\n| Skala waktu | Menit hingga hari | Tahun hingga dekade dan lebih panjang |\n| Contoh pertanyaan | Apakah hujan turun sore ini? | Seberapa sering wilayah ini mengalami musim kering? |\n| Ketidakpastian utama | Evolusi kondisi atmosfer dalam waktu dekat | Variabilitas alami, tren jangka panjang, dan perubahan sistem iklim |\n\n**Meteorologi** mengkaji proses atmosfer dan pembentukan cuaca, sedangkan **klimatologi** menganalisis pola statistik, variasi, dan perubahan iklim. Keduanya saling melengkapi: pemahaman proses meteorologis dibutuhkan untuk menjelaskan pola statistik iklim.",
        "tableHeaders": [
          "Aspek",
          "Cuaca",
          "Iklim"
        ],
        "tableData": [
          {
            "parameter": "Fokus",
            "col1": "Kondisi atmosfer aktual",
            "col2": "Statistik dan pola jangka panjang"
          },
          {
            "parameter": "Skala waktu",
            "col1": "Menit hingga hari",
            "col2": "Tahun hingga dekade dan lebih panjang"
          },
          {
            "parameter": "Contoh pertanyaan",
            "col1": "Apakah hujan turun sore ini?",
            "col2": "Seberapa sering wilayah ini mengalami musim kering?"
          },
          {
            "parameter": "Ketidakpastian utama",
            "col1": "Evolusi kondisi atmosfer dalam waktu dekat",
            "col2": "Variabilitas alami, tren jangka panjang, dan perubahan sistem iklim"
          }
        ],
        "figureRefId": "fig-1-1"
      },
      {
        "id": "1.2",
        "num": "01.2",
        "title": "Sistem iklim sebagai sistem yang saling berinteraksi",
        "contentMarkdown": "Sistem iklim melibatkan:\n\n- **Matahari:** sumber energi utama yang menggerakkan sebagian besar proses atmosfer dan permukaan.\n- **Atmosfer:** medium pergerakan massa udara, pembentukan awan, hujan, dan pertukaran energi.\n- **Hidrosfer, terutama lautan:** menyimpan dan memindahkan panas serta air dalam jumlah besar.\n- **Kriosfer:** salju, gletser, dan lapisan es yang memantulkan radiasi surya dan menyimpan air tawar.\n- **Daratan dan topografi:** memengaruhi pemanasan, aliran udara, limpasan, serta distribusi hujan.\n- **Biosfer dan penggunaan lahan:** vegetasi mengubah albedo, kekasapan permukaan, evapotranspirasi, dan pertukaran karbon.\n\nKomponen ini berhubungan melalui pertukaran **energi, air, momentum, dan gas**. Contohnya, radiasi memanaskan permukaan; permukaan memanaskan udara; udara yang naik dapat mendingin dan membentuk awan; kondensasi melepaskan kalor laten; awan kemudian memengaruhi radiasi yang masuk dan keluar."
      },
      {
        "id": "1.3",
        "num": "01.3",
        "title": "Distribusi energi dan pengendali iklim",
        "contentMarkdown": "Penerimaan radiasi surya berbeda menurut lintang, musim, waktu dalam sehari, kemiringan permukaan, tutupan awan, dan sifat atmosfer. Secara rata-rata, wilayah lintang rendah cenderung memiliki **surplus energi radiasi**, sedangkan lintang tinggi cenderung mengalami **defisit**. Atmosfer dan arus laut memindahkan energi dari daerah surplus ke daerah defisit.\n\nPerbedaan cuaca dan iklim juga dikendalikan oleh letak lintang, ketinggian, jarak dari laut, arus laut, relief/topografi, tutupan lahan, dan sirkulasi atmosfer. Karena daratan umumnya memiliki kapasitas panas lebih kecil daripada air, daratan memanas dan mendingin lebih cepat; hal ini mendukung perbedaan iklim pesisir–pedalaman dan sirkulasi angin lokal.\n\nVariasi orbit Bumi—**eksentrisitas**, **kemiringan sumbu**, dan **presesi**—mengubah distribusi radiasi menurut waktu dalam skala sangat panjang (siklus Milankovitch). Variasi alami tersebut berbeda mekanismenya dari pemanasan modern akibat peningkatan konsentrasi gas rumah kaca karena aktivitas manusia."
      },
      {
        "id": "1.4",
        "num": "01.4",
        "title": "Efek rumah kaca, pemanasan global, perubahan iklim, dan ENSO",
        "contentMarkdown": "**Efek rumah kaca alami** terjadi karena gas seperti uap air, CO₂, CH₄, N₂O, dan ozon menyerap serta memancarkan radiasi gelombang panjang. Proses ini membantu menjaga Bumi tetap hangat. Peningkatan konsentrasi gas rumah kaca memperkuat penahanan energi dalam sistem iklim sehingga terjadi pemanasan global.\n\n- **Pemanasan global** adalah kenaikan suhu rata-rata sistem Bumi dalam jangka panjang.\n- **Perubahan iklim** lebih luas: mencakup perubahan suhu, curah hujan, sirkulasi, kejadian ekstrem, dan karakteristik iklim lainnya.\n- **Mitigasi** mengurangi sumber emisi gas rumah kaca atau meningkatkan penyerapannya.\n- **Adaptasi** menyesuaikan sistem alam atau manusia terhadap dampak iklim yang telah terjadi atau diperkirakan.\n\n**ENSO (El Niño–Southern Oscillation)** merupakan variasi sistem laut–atmosfer tropis Pasifik. El Niño dan La Niña mengubah pola sirkulasi dan curah hujan di banyak wilayah, termasuk Indonesia, tetapi dampak lokalnya tetap bergantung pada musim dan kondisi regional.\n\nInformasi iklim berguna untuk menentukan kalender tanam, mengelola air, merencanakan energi, mengurangi risiko bencana, melindungi ekosistem, dan mengantisipasi risiko kesehatan. Data klimatologi harus dipakai dengan memperhatikan skala waktu, lokasi, ketidakpastian, dan relevansi terhadap keputusan."
      }
    ],
    widget: {
      type: 'calculator',
      title: 'Anomali Suhu Sederhana',
      subtitle: 'Hitung selisih suhu aktual terhadap normal klimatologis',
      formula: 'Anomali = T_aktual - T_normal',
      codeSnippet: 'def calc_anomaly(t_act, t_norm):\n    return t_act - t_norm',
      inputs: [
        { key: 't_act', label: 'Suhu Aktual (°C)', defaultValue: 28.5, step: 0.1, min: -20, max: 60 },
        { key: 't_norm', label: 'Suhu Normal (°C)', defaultValue: 26.0, step: 0.1, min: -20, max: 60 },
      ],
      calcId: "calc_1",},
    flashcards: [
      {
        id: 'fc-1-1',
        chapterId: 1,
        question: 'Apa perbedaan mendasar antara Meteorologi dan Klimatologi?',
        answer: 'Meteorologi mengkaji proses pembentukan cuaca (aktual), sedangkan Klimatologi menganalisis pola statistik dan perubahan iklim jangka panjang.',
      },
      {
        id: 'fc-1-2',
        chapterId: 1,
        question: 'Sebutkan periode waktu yang umum digunakan sebagai normal klimatologis.',
        answer: 'Rata-rata 30 tahun sering dipakai sebagai periode normal klimatologis.',
      },
    ],
    quizQuestions: [
      {
        "id": "q-1-1",
        "chapterId": 1,
        "subchapterRef": "01.1",
        "question": "Seorang peneliti membandingkan data curah hujan harian selama 35 tahun untuk menilai perubahan peluang kekeringan. Fokus analisis tersebut terutama termasuk kajian …",
        "options": [
          {
            "id": "A",
            "text": "prakiraan cuaca harian"
          },
          {
            "id": "B",
            "text": "klimatologi"
          },
          {
            "id": "C",
            "text": "termodinamika laboratorium"
          },
          {
            "id": "D",
            "text": "pengamatan cuaca sesaat"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Analisis statistik curah hujan selama puluhan tahun merupakan kajian klimatologi.",
        "sourceRef": "Latihan Pilihan Ganda · 1.1"
      },
      {
        "id": "q-1-2",
        "chapterId": 1,
        "subchapterRef": "01.2",
        "question": "Pernyataan paling tepat mengenai iklim adalah …",
        "options": [
          {
            "id": "A",
            "text": "iklim hanya berarti suhu rata-rata suatu wilayah"
          },
          {
            "id": "B",
            "text": "iklim ditentukan oleh kondisi atmosfer pada satu hari yang paling sering terjadi"
          },
          {
            "id": "C",
            "text": "iklim merupakan karakter statistik cuaca, termasuk rata-rata, variabilitas, musim, dan kejadian ekstrem dalam jangka panjang"
          },
          {
            "id": "D",
            "text": "iklim tidak mencakup perubahan peluang kejadian ekstrem"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Iklim mencakup rerata, variabilitas, musim, distribusi peluang, dan ekstrem—bukan hanya suhu rata-rata.",
        "sourceRef": "Latihan Pilihan Ganda · 1.2"
      },
      {
        "id": "q-1-3",
        "chapterId": 1,
        "subchapterRef": "01.3",
        "question": "Wilayah lintang rendah rata-rata menerima surplus energi, sedangkan wilayah lintang tinggi cenderung mengalami defisit. Mekanisme yang membantu mengurangi ketimpangan tersebut adalah …",
        "options": [
          {
            "id": "A",
            "text": "perpindahan energi oleh sirkulasi atmosfer dan arus laut"
          },
          {
            "id": "B",
            "text": "penghentian radiasi Matahari di lintang tinggi"
          },
          {
            "id": "C",
            "text": "aliran energi hanya dari kutub menuju ekuator melalui konduksi tanah"
          },
          {
            "id": "D",
            "text": "penghilangan seluruh perbedaan suhu antarlintang"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Sirkulasi atmosfer dan arus laut meredistribusikan energi dari wilayah surplus ke wilayah defisit.",
        "sourceRef": "Latihan Pilihan Ganda · 1.3"
      },
      {
        "id": "q-1-4",
        "chapterId": 1,
        "subchapterRef": "01.4",
        "question": "Urutan hubungan sebab-akibat yang paling masuk akal dalam sistem iklim adalah …",
        "options": [
          {
            "id": "A",
            "text": "kondensasi → radiasi Matahari berhenti → permukaan tidak lagi memancarkan energi"
          },
          {
            "id": "B",
            "text": "angin → hilangnya gravitasi → pembentukan uap air"
          },
          {
            "id": "C",
            "text": "awan → tidak ada pertukaran energi → suhu global tetap konstan"
          },
          {
            "id": "D",
            "text": "penyerapan radiasi permukaan → pemanasan permukaan/udara dekatnya → pengangkatan udara → pendinginan dan kemungkinan kondensasi"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Radiasi yang diserap memanaskan permukaan; udara dapat naik, mendingin, dan mencapai kondisi kondensasi.",
        "sourceRef": "Latihan Pilihan Ganda · 1.4"
      },
      {
        "id": "q-1-5",
        "chapterId": 1,
        "subchapterRef": "01.5",
        "question": "Perbedaan mendasar antara efek rumah kaca dan penipisan ozon stratosfer adalah …",
        "options": [
          {
            "id": "A",
            "text": "keduanya sepenuhnya disebabkan oleh peningkatan radiasi gelombang pendek"
          },
          {
            "id": "B",
            "text": "efek rumah kaca berkaitan dengan absorpsi dan emisi radiasi gelombang panjang, sedangkan penipisan ozon mengurangi perlindungan terhadap UV"
          },
          {
            "id": "C",
            "text": "penipisan ozon adalah nama lain untuk pemanasan global"
          },
          {
            "id": "D",
            "text": "efek rumah kaca hanya terjadi di kota, sedangkan penipisan ozon hanya terjadi di lautan"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Gas rumah kaca memengaruhi radiasi gelombang panjang; ozon stratosfer menyerap UV.",
        "sourceRef": "Latihan Pilihan Ganda · 1.5"
      },
      {
        "id": "q-1-6",
        "chapterId": 1,
        "subchapterRef": "01.6",
        "question": "Kebijakan yang terutama termasuk **mitigasi** perubahan iklim adalah …",
        "options": [
          {
            "id": "A",
            "text": "mengganti varietas tanaman agar tahan terhadap kekeringan yang makin sering"
          },
          {
            "id": "B",
            "text": "membuat sistem peringatan dini banjir"
          },
          {
            "id": "C",
            "text": "mengurangi emisi dengan meningkatkan efisiensi energi dan penggunaan energi rendah karbon"
          },
          {
            "id": "D",
            "text": "mengubah jadwal tanam untuk menyesuaikan awal musim hujan"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Mitigasi menekan emisi atau meningkatkan penyerapannya; pilihan lain terutama bentuk adaptasi.",
        "sourceRef": "Latihan Pilihan Ganda · 1.6"
      },
      {
        "id": "q-1-7",
        "chapterId": 1,
        "subchapterRef": "01.7",
        "question": "ENSO penting bagi klimatologi Indonesia karena …",
        "options": [
          {
            "id": "A",
            "text": "variasi suhu permukaan laut dan sirkulasi di Pasifik tropis dapat mengubah pola curah hujan regional"
          },
          {
            "id": "B",
            "text": "ENSO merupakan siklus harian suhu permukaan tanah yang hanya terjadi di Indonesia"
          },
          {
            "id": "C",
            "text": "ENSO selalu menghasilkan kekeringan dengan intensitas yang sama di seluruh Indonesia"
          },
          {
            "id": "D",
            "text": "ENSO menghilangkan pengaruh musim dan kondisi regional"
          }
        ],
        "correctOptionId": "A",
        "explanation": "ENSO merupakan variasi laut–atmosfer Pasifik tropis yang memodulasi sirkulasi dan pola hujan regional.",
        "sourceRef": "Latihan Pilihan Ganda · 1.7"
      },
      {
        "id": "q-1-8",
        "chapterId": 1,
        "subchapterRef": "01.8",
        "question": "Tiga unsur utama variasi orbit Bumi yang sering dikaitkan dengan siklus Milankovitch adalah …",
        "options": [
          {
            "id": "A",
            "text": "tekanan, kelembapan, dan kecepatan angin"
          },
          {
            "id": "B",
            "text": "albedo, salinitas, dan topografi"
          },
          {
            "id": "C",
            "text": "evaporasi, kondensasi, dan sublimasi"
          },
          {
            "id": "D",
            "text": "eksentrisitas orbit, kemiringan sumbu, dan presesi"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Tiga unsur itu adalah eksentrisitas, kemiringan sumbu, dan presesi.",
        "sourceRef": "Latihan Pilihan Ganda · 1.8"
      },
      {
        "id": "q-1-9",
        "chapterId": 1,
        "subchapterRef": "01.9",
        "question": "Mengapa catatan klimatologi perlu disertai informasi lokasi, periode pengamatan, dan metode pengukuran?",
        "options": [
          {
            "id": "A",
            "text": "karena data iklim tidak pernah mengandung ketidakpastian"
          },
          {
            "id": "B",
            "text": "karena nilai iklim di semua lokasi selalu identik"
          },
          {
            "id": "C",
            "text": "agar nilai dapat ditafsirkan sesuai skala ruang-waktu, dibandingkan secara layak, dan ketidakpastiannya dipahami"
          },
          {
            "id": "D",
            "text": "supaya tren jangka panjang dapat dipastikan hanya dari satu pengukuran"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Metadata membantu penafsiran, perbandingan, dan evaluasi ketidakpastian.",
        "sourceRef": "Latihan Pilihan Ganda · 1.9"
      },
      {
        "id": "q-1-10",
        "chapterId": 1,
        "subchapterRef": "01.10",
        "question": "Dua wilayah memiliki suhu rata-rata tahunan serupa, tetapi wilayah pertama mengalami musim kering panjang dan wilayah kedua mendapat hujan lebih merata. Kesimpulan paling tepat adalah …",
        "options": [
          {
            "id": "A",
            "text": "keduanya pasti memiliki iklim identik karena suhu rata-ratanya sama"
          },
          {
            "id": "B",
            "text": "karakter iklim tidak dapat diwakili oleh satu rata-rata; pola musiman dan distribusi curah hujan juga penting"
          },
          {
            "id": "C",
            "text": "wilayah pertama pasti memiliki kelembapan relatif lebih tinggi setiap hari"
          },
          {
            "id": "D",
            "text": "informasi curah hujan tidak relevan untuk klasifikasi iklim"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Iklim bersifat multidimensi; distribusi musiman hujan dapat berbeda meskipun suhu rata-rata sama.",
        "sourceRef": "Latihan Pilihan Ganda · 1.10"
      }
    ],
    shortAnswerQuestions: [
      {
        "id": "short-1-1",
        "chapterId": 1,
        "subchapterRef": "01.1",
        "question": "Jelaskan perbedaan cuaca dan iklim berdasarkan skala waktu serta jenis informasi yang diringkas.",
        "answer": "Cuaca adalah keadaan atmosfer aktual pada skala menit hingga hari; iklim merangkum statistik jangka panjang seperti rerata, variabilitas, pola musiman, dan peluang ekstrem.",
        "sourceRef": "Latihan Isian Singkat · 1.1"
      },
      {
        "id": "short-1-2",
        "chapterId": 1,
        "subchapterRef": "01.2",
        "question": "Sebutkan empat komponen sistem iklim selain Matahari. Berikan satu contoh pertukaran energi atau air di antara dua komponen.",
        "answer": "Empat komponen yang dapat disebutkan: atmosfer, hidrosfer/lautan, kriosfer, daratan/topografi, dan biosfer. Contoh: evaporasi dari laut memindahkan air ke atmosfer; kondensasi dan presipitasi mengembalikannya ke permukaan.",
        "sourceRef": "Latihan Isian Singkat · 1.2"
      },
      {
        "id": "short-1-3",
        "chapterId": 1,
        "subchapterRef": "01.3",
        "question": "Sebutkan tiga unsur variasi orbit Bumi yang terkait siklus Milankovitch.",
        "answer": "Eksentrisitas orbit, kemiringan sumbu (obliquity), dan presesi.",
        "sourceRef": "Latihan Isian Singkat · 1.3"
      },
      {
        "id": "short-1-4",
        "chapterId": 1,
        "subchapterRef": "01.4",
        "question": "Bedakan mitigasi dan adaptasi perubahan iklim, masing-masing dengan satu contoh terkait pertanian.",
        "answer": "Mitigasi mengurangi emisi/meningkatkan penyerapannya, misalnya efisiensi energi pompa irigasi atau agroforestri. Adaptasi menyesuaikan praktik pada dampak iklim, misalnya mengubah kalender tanam atau menggunakan varietas tahan kekeringan.",
        "sourceRef": "Latihan Isian Singkat · 1.4"
      },
      {
        "id": "short-1-5",
        "chapterId": 1,
        "subchapterRef": "01.5",
        "question": "Jelaskan mengapa ENSO dapat memengaruhi curah hujan Indonesia, tetapi tidak berarti seluruh wilayah Indonesia selalu mengalami dampak yang sama.",
        "answer": "ENSO mengubah suhu permukaan laut serta sirkulasi atmosfer di Pasifik tropis, yang memodulasi pembentukan awan dan hujan. Dampak lokal berbeda karena dipengaruhi musim, topografi, kondisi regional, dan fase/intensitas kejadian.",
        "sourceRef": "Latihan Isian Singkat · 1.5"
      }
    ],
    cheatSheetHighlights: ['Cuaca: Skala Menit-Hari', 'Iklim: Skala Dekade (Normal 30 thn)', 'Sistem Iklim: Pertukaran Energi, Air, Momentum, Gas'],
  },
  {
    id: 2,
    slug: 'atmosfer-bumi',
    title: 'Atmosfer Bumi',
    subtitle: 'Komposisi, Stratifikasi, dan Dinamika Gas',
    durationMin: 50,
    courseCode: 'SAR 1211',
    instructorText: 'Kita akan membedah lapisan udara yang menyelimuti Bumi. Perhatikan bagaimana profil suhu menentukan nama setiap lapisan.',
    figures: [
      {
        id: 'fig-2-1',
        figureNumber: 'FIG 2.1',
        sourceRef: 'Slide 12 · Atmosfer',
        title: 'Profil Vertikal Suhu Atmosfer',
        imageSrc: bab2SuhuAtm.src,
        altText: 'Diagram profil suhu atmosfer dari Troposfer hingga Eksosfer.',
      },
    ],
    subchapters: [
      {
        "id": "2.1",
        "num": "02.1",
        "title": "Komposisi dan sifat atmosfer",
        "contentMarkdown": "Atmosfer adalah campuran gas yang mengelilingi Bumi dan berperilaku sebagai fluida: dapat bergerak, dimampatkan, serta mengembang. Komposisinya meliputi:\n\n1. **Gas relatif permanen**, terutama nitrogen dan oksigen, serta argon dan gas jejak lainnya.\n2. **Gas variabel**, khususnya uap air, ozon, karbon dioksida, metana, dan sejumlah gas reaktif. Konsentrasinya berubah menurut tempat dan waktu.\n3. **Partikel cair dan padat/aerosol**, misalnya tetes awan, kristal es, debu, garam laut, asap, dan partikel hasil pembakaran.\n\nUap air penting karena menghubungkan atmosfer dengan siklus hidrologi dan membawa **kalor laten**. Aerosol memengaruhi radiasi serta dapat menjadi inti kondensasi awan. Perubahan suhu menyebabkan perubahan kerapatan dan tekanan: udara yang dipanaskan cenderung mengembang dan menjadi lebih ringan, sedangkan udara yang didinginkan cenderung lebih rapat.\n\nSebagian besar massa atmosfer terkonsentrasi dekat permukaan; kira-kira separuh massanya berada di bawah sekitar 5,5 km dan hampir seluruhnya berada di bawah sekitar 40 km. Karena batas atas atmosfer makin berangsur tipis, “puncak atmosfer” bukan batas fisik yang tajam.",
        "figureRefId": "fig-2-1"
      },
      {
        "id": "2.2",
        "num": "02.2",
        "title": "Lapisan atmosfer berdasarkan profil suhu",
        "contentMarkdown": "| Lapisan | Ketinggian pendekatan | Ciri utama |\n|---|---:|---|\n| Troposfer | Permukaan hingga sekitar 8 km di kutub dan 16–18 km di tropika | Sebagian besar uap air dan cuaca terjadi di sini; suhu umumnya menurun dengan ketinggian |\n| Stratosfer | Sekitar 10–50 km | Mengandung sebagian besar ozon atmosfer; suhu meningkat pada lapisan atas karena penyerapan UV |\n| Mesosfer | Sekitar 50–85 km | Suhu kembali menurun dengan ketinggian |\n| Termosfer/ionosfer | Sekitar 85 km hingga ratusan km | Gas menyerap radiasi berenergi tinggi; ionisasi penting untuk propagasi gelombang radio tertentu |\n| Eksosfer | Berangsur ke ruang antarplanet, ratusan hingga ribuan km | Gas sangat renggang; batasnya tidak tajam |\n\n**Lapse rate** adalah laju perubahan suhu terhadap ketinggian. Dengan konvensi gradien dT/dz:\n\n- **Lapse:** dT/dz < 0, suhu turun dengan ketinggian.\n- **Isotermal:** dT/dz ≈ 0, suhu relatif tetap.\n- **Inversi:** dT/dz > 0, suhu naik dengan ketinggian.\n\nLaju penurunan suhu lingkungan rata-rata di troposfer sekitar 6,5 °C per km, tetapi nilai aktual berubah menurut kondisi atmosfer, kelembapan, dan lokasi. Troposfer lebih tebal di wilayah tropis karena struktur atmosfer dipengaruhi pemanasan dan suhu rata-rata kolom udara.",
        "tableHeaders": [
          "Lapisan",
          "Ketinggian pendekatan",
          "Ciri utama"
        ],
        "tableData": [
          {
            "parameter": "Troposfer",
            "col1": "Permukaan hingga sekitar 8 km di kutub dan 16–18 km di tropika",
            "col2": "Sebagian besar uap air dan cuaca terjadi di sini; suhu umumnya menurun dengan ketinggian"
          },
          {
            "parameter": "Stratosfer",
            "col1": "Sekitar 10–50 km",
            "col2": "Mengandung sebagian besar ozon atmosfer; suhu meningkat pada lapisan atas karena penyerapan UV"
          },
          {
            "parameter": "Mesosfer",
            "col1": "Sekitar 50–85 km",
            "col2": "Suhu kembali menurun dengan ketinggian"
          },
          {
            "parameter": "Termosfer/ionosfer",
            "col1": "Sekitar 85 km hingga ratusan km",
            "col2": "Gas menyerap radiasi berenergi tinggi; ionisasi penting untuk propagasi gelombang radio tertentu"
          },
          {
            "parameter": "Eksosfer",
            "col1": "Berangsur ke ruang antarplanet, ratusan hingga ribuan km",
            "col2": "Gas sangat renggang; batasnya tidak tajam"
          }
        ]
      },
      {
        "id": "2.3",
        "num": "02.3",
        "title": "Ozon dan pencemaran atmosfer",
        "contentMarkdown": "Ozon stratosfer terbentuk dan terurai melalui reaksi fotokimia yang melibatkan O₂, atom O, O₃, serta radiasi ultraviolet. Ozon menyerap radiasi UV berbahaya dan karena itu melindungi makhluk hidup. **Penipisan ozon** berbeda dari pemanasan global: penipisan ozon terutama berkaitan dengan zat perusak ozon seperti CFC yang melepaskan klorin di stratosfer; satu atom klorin dapat berperan dalam rangkaian reaksi katalitik yang menghancurkan banyak molekul ozon. Protokol Montreal 1987 menjadi langkah internasional untuk mengendalikan zat-zat tersebut.\n\nPencemaran atmosfer juga mencakup:\n\n- **SOₓ:** terkait pembakaran bahan bakar yang mengandung sulfur dan proses industri; dapat membentuk senyawa asam serta partikel sekunder.\n- **NOₓ:** terbentuk terutama pada proses pembakaran bersuhu tinggi; berperan dalam pembentukan ozon troposfer dan aerosol sekunder.\n- **Particulate matter (PM₁₀ dan PM₂.₅):** partikel tersuspensi; partikel yang lebih kecil dapat menembus lebih jauh ke saluran pernapasan.\n- **Gas rumah kaca:** memengaruhi neraca energi pada skala iklim, sedangkan polutan lain dapat memiliki dampak kesehatan dan lingkungan secara lokal maupun regional.\n\nJangan menyamakan **ozon stratosfer** yang melindungi dari UV dengan **ozon troposfer** yang menjadi polutan udara."
      },
      {
        "id": "2.4",
        "num": "02.4",
        "title": "Pengukuran atmosfer",
        "contentMarkdown": "- **Radiosonde:** sensor yang dibawa balon cuaca untuk merekam profil vertikal parameter seperti suhu, tekanan, dan kelembapan, kemudian mengirim data ke stasiun penerima.\n- **Barometer:** mengukur tekanan udara.\n- Pengukuran atmosfer penting untuk observasi, validasi, dan masukan model prediksi cuaca.\n\nAtmosfer menyediakan gas dan air, menyaring sebagian radiasi berbahaya, menyangga perubahan energi, serta menjadi media proses cuaca dan iklim. Namun, kualitas dan komposisinya dapat berubah akibat proses alami maupun aktivitas manusia."
      },
      {
        "id": "2.formulas",
        "num": "02.R",
        "title": "Rumus dan Hubungan Kunci",
        "contentMarkdown": "| Topik | Rumus/relasi | Cara membaca |\n|---|---|---|\n| Lapse rate troposfer rata-rata | sekitar `−6,5 °C km⁻¹` | Nilai rata-rata, bukan hukum tetap setiap tempat/waktu |"
      }
    ],
    widget: {
      type: 'calculator',
      title: 'Estimator Suhu Ketinggian',
      subtitle: 'Hitung suhu udara berdasarkan lapse rate rata-rata (6.5°C/km)',
      formula: 'T_h = T_0 - (lapse * h)',
      codeSnippet: 'def calc_temp_height(t0, h):\n    return t0 - (6.5 * h)',
      inputs: [
        { key: 't0', label: 'Suhu Permukaan (°C)', defaultValue: 30, step: 0.1, min: -20, max: 60 },
        { key: 'h', label: 'Ketinggian (km)', defaultValue: 1, step: 0.1, min: 0, max: 15 },
      ],
      calcId: "calc_2",},
    flashcards: [
      {
        id: 'fc-2-1',
        chapterId: 2,
        question: 'Apa itu Inversi Suhu?',
        answer: 'Kondisi di mana suhu justru meningkat seiring bertambahnya ketinggian (dT/dz > 0), berlawanan dengan kondisi normal di troposfer.',
      },
      {
        id: 'fc-2-2',
        chapterId: 2,
        question: 'Di lapisan mana sebagian besar cuaca terjadi?',
        answer: 'Troposfer, karena mengandung sebagian besar uap air dan panas yang naik dari permukaan.',
      },
    ],
    quizQuestions: [
      {
        "id": "q-2-1",
        "chapterId": 2,
        "subchapterRef": "02.1",
        "question": "Komponen atmosfer yang paling berubah-ubah secara ruang dan waktu serta berperan langsung dalam awan dan hujan adalah …",
        "options": [
          {
            "id": "A",
            "text": "nitrogen"
          },
          {
            "id": "B",
            "text": "argon"
          },
          {
            "id": "C",
            "text": "uap air"
          },
          {
            "id": "D",
            "text": "oksigen"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Uap air sangat bervariasi dan menjadi sumber utama kelembapan bagi awan serta presipitasi.",
        "sourceRef": "Latihan Pilihan Ganda · 2.1"
      },
      {
        "id": "q-2-2",
        "chapterId": 2,
        "subchapterRef": "02.2",
        "question": "Sebagian besar fenomena cuaca berlangsung di troposfer terutama karena lapisan ini …",
        "options": [
          {
            "id": "A",
            "text": "mengandung sebagian besar uap air dan mengalami gerak vertikal yang kuat"
          },
          {
            "id": "B",
            "text": "merupakan lapisan terpanas akibat absorpsi UV oleh ozon"
          },
          {
            "id": "C",
            "text": "tidak memiliki perubahan suhu terhadap ketinggian"
          },
          {
            "id": "D",
            "text": "terletak di atas termosfer"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Troposfer mengandung sebagian besar uap air dan aktivitas konvektif/cuaca.",
        "sourceRef": "Latihan Pilihan Ganda · 2.2"
      },
      {
        "id": "q-2-3",
        "chapterId": 2,
        "subchapterRef": "02.3",
        "question": "Jika suhu udara meningkat dari 18 °C pada ketinggian 1 km menjadi 21 °C pada 2 km, profil tersebut menunjukkan …",
        "options": [
          {
            "id": "A",
            "text": "lapse rate negatif sebesar 3 °C km⁻¹"
          },
          {
            "id": "B",
            "text": "keadaan isotermal"
          },
          {
            "id": "C",
            "text": "pendinginan adiabatik kering"
          },
          {
            "id": "D",
            "text": "inversi suhu dengan gradien sekitar +3 °C km⁻¹"
          }
        ],
        "correctOptionId": "D",
        "explanation": "`ΔT/Δz = (21−18)/(2−1) = +3 °C km⁻¹`, artinya suhu naik dengan ketinggian: inversi.",
        "sourceRef": "Latihan Pilihan Ganda · 2.3"
      },
      {
        "id": "q-2-4",
        "chapterId": 2,
        "subchapterRef": "02.4",
        "question": "Suhu di stratosfer cenderung meningkat dengan ketinggian pada bagian tertentu karena …",
        "options": [
          {
            "id": "A",
            "text": "seluruh radiasi inframerah diserap tanah"
          },
          {
            "id": "B",
            "text": "ozon menyerap radiasi ultraviolet sehingga memanaskan lapisan tersebut"
          },
          {
            "id": "C",
            "text": "tekanan bertambah dengan ketinggian"
          },
          {
            "id": "D",
            "text": "konduksi dari permukaan menjadi satu-satunya sumber energi"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Penyerapan UV oleh ozon memanaskan stratosfer pada bagian tertentu.",
        "sourceRef": "Latihan Pilihan Ganda · 2.4"
      },
      {
        "id": "q-2-5",
        "chapterId": 2,
        "subchapterRef": "02.5",
        "question": "Aerosol dapat memengaruhi iklim dan pembentukan awan karena …",
        "options": [
          {
            "id": "A",
            "text": "semua aerosol selalu memanaskan permukaan dengan besaran sama"
          },
          {
            "id": "B",
            "text": "aerosol menghilangkan kebutuhan uap air untuk membentuk awan"
          },
          {
            "id": "C",
            "text": "aerosol dapat menyerap atau menghamburkan radiasi dan sebagian menjadi inti kondensasi awan"
          },
          {
            "id": "D",
            "text": "aerosol hanya ditemukan di stratosfer dan tidak pernah mencapai troposfer"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Aerosol berinteraksi dengan radiasi dan dapat menjadi inti kondensasi.",
        "sourceRef": "Latihan Pilihan Ganda · 2.5"
      },
      {
        "id": "q-2-6",
        "chapterId": 2,
        "subchapterRef": "02.6",
        "question": "Dengan laju penurunan suhu lingkungan 6,5 °C km⁻¹, suhu di ketinggian 2 km diperkirakan berapa jika suhu pada 0,5 km adalah 25 °C dan laju itu dianggap konstan?",
        "options": [
          {
            "id": "A",
            "text": "15,25 °C"
          },
          {
            "id": "B",
            "text": "22,5 °C"
          },
          {
            "id": "C",
            "text": "34,75 °C"
          },
          {
            "id": "D",
            "text": "12,0 °C"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Selisih ketinggian 1,5 km; penurunan `6,5 × 1,5 = 9,75 °C`; suhu `25 − 9,75 = 15,25 °C`.",
        "sourceRef": "Latihan Pilihan Ganda · 2.6"
      },
      {
        "id": "q-2-7",
        "chapterId": 2,
        "subchapterRef": "02.7",
        "question": "Instrumen yang lazim digunakan untuk memperoleh profil vertikal suhu, tekanan, dan kelembapan adalah …",
        "options": [
          {
            "id": "A",
            "text": "pyranometer"
          },
          {
            "id": "B",
            "text": "Campbell–Stokes"
          },
          {
            "id": "C",
            "text": "albedometer"
          },
          {
            "id": "D",
            "text": "radiosonde yang dibawa balon cuaca"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Radiosonde mengukur profil vertikal atmosfer dari balon cuaca.",
        "sourceRef": "Latihan Pilihan Ganda · 2.7"
      },
      {
        "id": "q-2-8",
        "chapterId": 2,
        "subchapterRef": "02.8",
        "question": "Mengapa tekanan atmosfer berkurang saat ketinggian bertambah?",
        "options": [
          {
            "id": "A",
            "text": "gravitasi selalu nol pada ketinggian tinggi"
          },
          {
            "id": "B",
            "text": "massa kolom udara di atas titik pengukuran semakin sedikit"
          },
          {
            "id": "C",
            "text": "udara di ketinggian tidak memiliki massa"
          },
          {
            "id": "D",
            "text": "temperatur selalu menurun tepat 10 °C setiap kilometer"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Semakin tinggi lokasi, semakin sedikit massa udara yang berada di atasnya.",
        "sourceRef": "Latihan Pilihan Ganda · 2.8"
      },
      {
        "id": "q-2-9",
        "chapterId": 2,
        "subchapterRef": "02.9",
        "question": "Pernyataan yang benar tentang PM₂.₅ dibandingkan PM₁₀ adalah …",
        "options": [
          {
            "id": "A",
            "text": "PM₂.₅ merupakan partikel dengan diameter aerodinamis hingga sekitar 2,5 µm dan dapat menembus lebih jauh ke saluran pernapasan"
          },
          {
            "id": "B",
            "text": "PM₂.₅ selalu lebih berat daripada semua partikel PM₁₀"
          },
          {
            "id": "C",
            "text": "PM₂.₅ hanya terdiri dari uap air murni"
          },
          {
            "id": "D",
            "text": "PM₂.₅ tidak berpengaruh pada kesehatan karena ukurannya kecil"
          }
        ],
        "correctOptionId": "A",
        "explanation": "PM₂.₅ adalah partikel berukuran aerodinamis hingga sekitar 2,5 µm dan dapat menembus jauh ke sistem pernapasan.",
        "sourceRef": "Latihan Pilihan Ganda · 2.9"
      },
      {
        "id": "q-2-10",
        "chapterId": 2,
        "subchapterRef": "02.10",
        "question": "Mengapa ozon troposfer dan ozon stratosfer perlu dibedakan?",
        "options": [
          {
            "id": "A",
            "text": "ozon memiliki sifat yang sepenuhnya berbeda secara kimia pada tiap lapisan"
          },
          {
            "id": "B",
            "text": "ozon troposfer selalu melindungi manusia dari UV lebih baik daripada ozon stratosfer"
          },
          {
            "id": "C",
            "text": "ozon stratosfer menyerap UV dan melindungi kehidupan, sedangkan ozon dekat permukaan merupakan polutan yang dapat merusak kesehatan dan vegetasi"
          },
          {
            "id": "D",
            "text": "ozon hanya ditemukan di dekat permukaan"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Ozon stratosfer menyerap UV, sedangkan ozon troposfer dapat menjadi polutan berbahaya.",
        "sourceRef": "Latihan Pilihan Ganda · 2.10"
      }
    ],
    shortAnswerQuestions: [
      {
        "id": "short-2-1",
        "chapterId": 2,
        "subchapterRef": "02.1",
        "question": "Urutkan troposfer, stratosfer, mesosfer, dan termosfer dari permukaan Bumi ke atas; sebutkan lapisan utama tempat fenomena cuaca berlangsung.",
        "answer": "Troposfer → stratosfer → mesosfer → termosfer. Sebagian besar fenomena cuaca berlangsung di troposfer.",
        "sourceRef": "Latihan Isian Singkat · 2.1"
      },
      {
        "id": "short-2-2",
        "chapterId": 2,
        "subchapterRef": "02.2",
        "question": "Suhu turun dari 26 °C pada 0,5 km menjadi 13 °C pada 2,5 km. Hitung gradien suhu terhadap ketinggian dalam °C km⁻¹ dan nyatakan apakah profil ini merupakan lapse atau inversi.",
        "answer": "`ΔT/Δz=(13−26)/(2,5−0,5)=−13/2=−6,5 °C km⁻¹`. Karena suhu menurun saat ketinggian meningkat, profil tersebut adalah lapse.",
        "sourceRef": "Latihan Isian Singkat · 2.2"
      },
      {
        "id": "short-2-3",
        "chapterId": 2,
        "subchapterRef": "02.3",
        "question": "Apa perbedaan peran ozon stratosfer dan ozon troposfer bagi lingkungan dan kesehatan?",
        "answer": "Ozon stratosfer menyerap UV dan melindungi kehidupan. Ozon troposfer merupakan polutan fotokimia yang dapat mengganggu kesehatan dan merusak vegetasi.",
        "sourceRef": "Latihan Isian Singkat · 2.3"
      },
      {
        "id": "short-2-4",
        "chapterId": 2,
        "subchapterRef": "02.4",
        "question": "Sebutkan dua cara aerosol memengaruhi sistem atmosfer.",
        "answer": "Aerosol dapat menghamburkan atau menyerap radiasi; sebagian partikel juga berfungsi sebagai inti kondensasi awan dan memengaruhi sifat awan.",
        "sourceRef": "Latihan Isian Singkat · 2.4"
      },
      {
        "id": "short-2-5",
        "chapterId": 2,
        "subchapterRef": "02.5",
        "question": "Apa itu radiosonde dan tiga parameter atmosfer yang lazim diukurnya?",
        "answer": "Radiosonde adalah paket sensor yang biasanya dibawa balon cuaca untuk mengukur profil vertikal. Parameter umum: suhu, tekanan, dan kelembapan (sering juga angin melalui pelacakan posisi).",
        "sourceRef": "Latihan Isian Singkat · 2.5"
      }
    ],
    cheatSheetHighlights: ['Lapse Rate avg: -6.5°C/km', 'Stratosfer: Suhu naik (UV absorption)', 'Ozon: Stratosfer (Proteksi) vs Troposfer (Polutan)'],
  },
  {
    id: 3,
    slug: 'radiasi-surya',
    title: 'Radiasi Surya',
    subtitle: 'Energi Elektromagnetik dan Geometri Penyinaran',
    durationMin: 60,
    courseCode: 'SAR 1211',
    instructorText: 'Radiasi adalah mesin utama iklim. Kita akan mempelajari hukum fisika yang mengatur bagaimana energi berpindah dari Matahari ke Bumi.',
    figures: [
      {
        id: 'fig-3-1',
        figureNumber: 'FIG 3.1',
        sourceRef: 'Slide 22 · Radiasi',
        title: 'Geometri Sudut Zenit',
        imageSrc: bab3ZenithAlt.src,
        altText: 'Diagram sudut zenit dan hubungan cos(z) dengan intensitas radiasi.',
      },
    ],
    subchapters: [
      {
        "id": "3.1",
        "num": "03.1",
        "title": "Sumber energi dan sifat radiasi",
        "contentMarkdown": "Energi surya terutama berasal dari **fusi termonuklir** hidrogen menjadi helium di inti Matahari. Energi kemudian dipancarkan sebagai gelombang elektromagnetik yang dapat merambat tanpa medium.\n\nRadiasi dapat dipahami dalam dua cara yang saling melengkapi:\n\n- **Gelombang:** panjang gelombang (λ), frekuensi (f), dan kecepatan cahaya (c) berhubungan melalui **c = λf**.\n- **Foton:** energi foton **E = hf = hc/λ**. Karena itu, panjang gelombang lebih pendek berarti energi per foton lebih besar.\n\nUntuk benda yang mendekati pemancar termal:\n\n- **Stefan–Boltzmann:** `F = εσT⁴`, dengan F fluks pancaran (W m⁻²), ε emisivitas, σ ≈ 5,67 × 10⁻⁸ W m⁻² K⁻⁴, dan T suhu mutlak (K). Kenaikan suhu meningkatkan pancaran secara kuat karena pangkat empat.\n- **Pergeseran Wien:** `λmaks (µm) ≈ 2897/T (K)`. Benda lebih panas memancarkan energi maksimum pada panjang gelombang lebih pendek.\n\nMatahari yang panas memancarkan terutama radiasi gelombang pendek; permukaan Bumi yang jauh lebih dingin memancarkan terutama gelombang panjang/inframerah. Perbedaan ini penting dalam neraca energi dan efek rumah kaca.",
        "figureRefId": "fig-3-1"
      },
      {
        "id": "3.2",
        "num": "03.2",
        "title": "Spektrum elektromagnetik dan radiasi fotosintetik",
        "contentMarkdown": "Spektrum mencakup ultraviolet, cahaya tampak, dan inframerah. **PAR (photosynthetically active radiation)** umumnya merujuk pada cahaya sekitar 400–700 nm yang dapat digunakan fotosintesis. PAR bukan besaran yang identik dengan seluruh radiasi gelombang pendek atau radiasi netto. Pengukuran foton untuk fotosintesis sering dinyatakan sebagai µmol foton m⁻² s⁻¹, sedangkan fluks energi radiasi lazim dinyatakan dalam W m⁻²."
      },
      {
        "id": "3.3",
        "num": "03.3",
        "title": "Faktor yang menentukan radiasi di permukaan Bumi",
        "contentMarkdown": "Empat faktor utama ialah jarak Bumi–Matahari, panjang hari, sudut zenit, dan pengaruh atmosfer.\n\n1. **Jarak Bumi–Matahari:** intensitas berkurang menurut hukum kuadrat terbalik; secara sederhana `Q ∝ 1/R²`. Perubahan jarak orbit memengaruhi intensitas, tetapi variasi musim terutama disebabkan kemiringan sumbu Bumi dan perubahan geometri penyinaran, bukan sekadar jarak.\n2. **Panjang hari (N):** menentukan berapa lama permukaan menerima radiasi siang hari. Panjang hari berubah terhadap lintang dan musim.\n3. **Sudut zenit (z):** sudut antara arah datang sinar dan garis vertikal setempat. Ketika Matahari tinggi, z kecil sehingga energi per satuan luas permukaan lebih besar. Untuk bidang horizontal, komponen langsung sebanding dengan `cos z`.\n4. **Atmosfer:** gas, aerosol, dan awan menyerap, memantulkan, serta menghamburkan radiasi. Radiasi yang mencapai permukaan terbagi menjadi radiasi langsung dan baur; jumlah keduanya disebut radiasi global.\n\nPersamaan geometri surya yang berguna:\n\n- `cos z = sin φ sin δ + cos φ cos δ cos ω`, dengan φ lintang, δ deklinasi Matahari, dan ω sudut jam.\n- `ω = 15° × (waktu surya − 12)`. Nilai ω = 0° saat tengah hari surya.\n- `Qₐ ≈ Q₀ cos z` untuk pendekatan fluks pada puncak atmosfer di bidang horizontal; di permukaan, transmisi atmosfer perlu diperhitungkan, misalnya secara sederhana `Qₛ ≈ τQₐ`.\n\nDi sini Q₀ adalah fluks surya acuan pada jarak rata-rata Bumi–Matahari, sedangkan τ menggambarkan transmisi atmosfer yang berubah dengan kondisi atmosfer. Persamaan sederhana ini tidak mencakup semua efek awan, aerosol, dan geometri permukaan."
      },
      {
        "id": "3.4",
        "num": "03.4",
        "title": "Penyinaran dan instrumen radiasi",
        "contentMarkdown": "**Lama penyinaran matahari** adalah durasi Matahari bersinar cukup kuat menurut kriteria alat pengamatan; nilainya bukan hal yang sama dengan total energi radiasi yang diterima. Dua lokasi dengan lama penyinaran sama masih dapat menerima energi berbeda akibat sudut datang dan atmosfer.\n\n- **Pyranometer:** mengukur radiasi global pada bidang yang dipasang, umumnya horizontal untuk GHI.\n- **Campbell–Stokes sunshine recorder:** memusatkan sinar melalui bola kaca sehingga jejak pada pias menunjukkan lama penyinaran.\n- **Albedometer:** mengukur radiasi datang dan pantulan, sering menggunakan dua sensor yang menghadap ke atas dan ke bawah.\n- **Gun-Bellani:** alat akumulasi radiasi surya harian berdasarkan prinsip penguapan dan kondensasi cairan.\n- **Actinograph:** merekam perubahan radiasi terhadap waktu pada pias; pembacaan perlu kalibrasi/konversi."
      },
      {
        "id": "3.formulas",
        "num": "03.R",
        "title": "Rumus dan Hubungan Kunci",
        "contentMarkdown": "| Topik | Rumus/relasi | Cara membaca |\n|---|---|---|\n| Gelombang elektromagnetik | `c = λf` | Jika λ mengecil, f membesar pada c tetap |\n| Energi foton | `E = hf = hc/λ` | Foton gelombang pendek memiliki energi lebih tinggi |\n| Stefan–Boltzmann | `F = εσT⁴` | Fluks pancaran sangat sensitif terhadap T mutlak |\n| Wien | `λmaks (µm) ≈ 2897/T(K)` | Benda lebih panas memiliki λmaks lebih pendek |\n| Radiasi menurut jarak | `Q ∝ 1/R²` | Jarak dua kali lebih besar memberi intensitas seperempat, bila sumber sama |"
      }
    ],
    widget: {
      type: 'calculator',
      title: 'Kalkulator Hukum Wien',
      subtitle: 'Prediksi panjang gelombang pancaran maksimum berdasarkan suhu',
      formula: 'λmaks = 2897 / T',
      codeSnippet: 'def calc_wien(temp_k):\n    return 2897 / temp_k',
      inputs: [
        { key: 't', label: 'Suhu Mutlak (K)', defaultValue: 5778, step: 1, min: 10, max: 10000 },
      ],
      calcId: "calc_3",},
    flashcards: [
      {
        id: 'fc-3-1',
        chapterId: 3,
        question: 'Apa hubungan antara panjang gelombang dan energi per foton?',
        answer: 'Berbanding terbalik: Panjang gelombang lebih pendek (misal UV) memiliki energi per foton yang lebih tinggi daripada panjang gelombang lebih panjang (misal IR).',
      },
      {
        id: 'fc-3-2',
        chapterId: 3,
        question: 'Apa yang dimaksud dengan PAR (Photosynthetically Active Radiation)?',
        answer: 'Radiasi cahaya tampak sekitar 400–700 nm yang dapat digunakan oleh tanaman untuk proses fotosintesis.',
      },
    ],
    quizQuestions: [
      {
        "id": "q-3-1",
        "chapterId": 3,
        "subchapterRef": "03.1",
        "question": "Sumber energi utama Matahari berasal dari …",
        "options": [
          {
            "id": "A",
            "text": "pembakaran oksigen di permukaan Matahari"
          },
          {
            "id": "B",
            "text": "fusi inti hidrogen menjadi helium"
          },
          {
            "id": "C",
            "text": "pantulan radiasi dari Bumi"
          },
          {
            "id": "D",
            "text": "gesekan Matahari dengan ruang antarbintang"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Energi Matahari dihasilkan terutama melalui fusi hidrogen menjadi helium.",
        "sourceRef": "Latihan Pilihan Ganda · 3.1"
      },
      {
        "id": "q-3-2",
        "chapterId": 3,
        "subchapterRef": "03.2",
        "question": "Jika panjang gelombang radiasi A adalah 400 nm dan radiasi B 800 nm, energi per foton A dibanding B adalah …",
        "options": [
          {
            "id": "A",
            "text": "setengahnya"
          },
          {
            "id": "B",
            "text": "sama"
          },
          {
            "id": "C",
            "text": "empat kali"
          },
          {
            "id": "D",
            "text": "dua kali"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Energi foton berbanding terbalik dengan panjang gelombang; 800/400 = 2.",
        "sourceRef": "Latihan Pilihan Ganda · 3.2"
      },
      {
        "id": "q-3-3",
        "chapterId": 3,
        "subchapterRef": "03.3",
        "question": "Menurut hukum Stefan–Boltzmann, jika suhu mutlak suatu benda hitam naik dari T menjadi 2T, fluks pancarannya menjadi …",
        "options": [
          {
            "id": "A",
            "text": "16 kali"
          },
          {
            "id": "B",
            "text": "8 kali"
          },
          {
            "id": "C",
            "text": "4 kali"
          },
          {
            "id": "D",
            "text": "2 kali"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Fluks sebanding `T⁴`; jika T menjadi 2T maka fluks menjadi `2⁴ = 16` kali.",
        "sourceRef": "Latihan Pilihan Ganda · 3.3"
      },
      {
        "id": "q-3-4",
        "chapterId": 3,
        "subchapterRef": "03.4",
        "question": "Benda dengan suhu lebih tinggi cenderung memiliki panjang gelombang pancaran maksimum lebih pendek. Hubungan ini dinyatakan oleh …",
        "options": [
          {
            "id": "A",
            "text": "hukum Boyle"
          },
          {
            "id": "B",
            "text": "persamaan hidrostatik"
          },
          {
            "id": "C",
            "text": "hukum pergeseran Wien"
          },
          {
            "id": "D",
            "text": "hukum Charles"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Hukum Wien: `λmaks T ≈ 2897 µm K`.",
        "sourceRef": "Latihan Pilihan Ganda · 3.4"
      },
      {
        "id": "q-3-5",
        "chapterId": 3,
        "subchapterRef": "03.5",
        "question": "Menurut hukum kuadrat terbalik, jika jarak dari sumber radiasi menjadi dua kali, intensitas radiasi ideal menjadi …",
        "options": [
          {
            "id": "A",
            "text": "dua kali"
          },
          {
            "id": "B",
            "text": "seperempat"
          },
          {
            "id": "C",
            "text": "setengah"
          },
          {
            "id": "D",
            "text": "empat kali"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Intensitas sumber titik ideal sebanding `1/R²`; jarak dua kali membuat intensitas seperempat.",
        "sourceRef": "Latihan Pilihan Ganda · 3.5"
      },
      {
        "id": "q-3-6",
        "chapterId": 3,
        "subchapterRef": "03.6",
        "question": "Pada permukaan horizontal, ketika Matahari makin tinggi di langit dan sudut zenit z mengecil, fluks radiasi langsung yang diterima cenderung naik karena …",
        "options": [
          {
            "id": "A",
            "text": "komponen geometrisnya sebanding dengan cos z"
          },
          {
            "id": "B",
            "text": "massa Matahari bertambah"
          },
          {
            "id": "C",
            "text": "radiasi tidak lagi melewati atmosfer"
          },
          {
            "id": "D",
            "text": "panjang hari otomatis menjadi 24 jam"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Komponen pada bidang horizontal sebanding `cos z`, sehingga meningkat saat z mengecil.",
        "sourceRef": "Latihan Pilihan Ganda · 3.6"
      },
      {
        "id": "q-3-7",
        "chapterId": 3,
        "subchapterRef": "03.7",
        "question": "Apa penyebab utama musim di Bumi?",
        "options": [
          {
            "id": "A",
            "text": "perubahan jarak Bumi–Matahari adalah satu-satunya pengendali musim"
          },
          {
            "id": "B",
            "text": "rotasi Bumi berhenti pada musim dingin"
          },
          {
            "id": "C",
            "text": "kemiringan sumbu Bumi mengubah sudut penyinaran dan panjang hari sepanjang tahun"
          },
          {
            "id": "D",
            "text": "nilai gravitasi berubah drastis setiap enam bulan"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Kemiringan sumbu mengubah sudut penyinaran dan panjang hari musiman.",
        "sourceRef": "Latihan Pilihan Ganda · 3.7"
      },
      {
        "id": "q-3-8",
        "chapterId": 3,
        "subchapterRef": "03.8",
        "question": "Pada kondisi langit berawan, pernyataan yang paling tepat mengenai radiasi di permukaan adalah …",
        "options": [
          {
            "id": "A",
            "text": "radiasi langsung selalu meningkat"
          },
          {
            "id": "B",
            "text": "jumlah radiasi global pasti sama seperti langit cerah"
          },
          {
            "id": "C",
            "text": "awan hanya memengaruhi radiasi gelombang panjang dan tidak berpengaruh pada gelombang pendek"
          },
          {
            "id": "D",
            "text": "radiasi langsung sering berkurang, sedangkan radiasi baur dapat meningkat; perubahan radiasi global bergantung pada jenis dan ketebalan awan"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Awan umumnya mengurangi radiasi langsung; dampak pada baur dan global bergantung kondisi awan.",
        "sourceRef": "Latihan Pilihan Ganda · 3.8"
      },
      {
        "id": "q-3-9",
        "chapterId": 3,
        "subchapterRef": "03.9",
        "question": "Instrumen yang terutama mengukur radiasi global pada bidang sensor adalah …",
        "options": [
          {
            "id": "A",
            "text": "psikrometer"
          },
          {
            "id": "B",
            "text": "pyranometer"
          },
          {
            "id": "C",
            "text": "barometer"
          },
          {
            "id": "D",
            "text": "termograf"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Pyranometer lazim digunakan untuk mengukur radiasi global pada bidang sensor.",
        "sourceRef": "Latihan Pilihan Ganda · 3.9"
      },
      {
        "id": "q-3-10",
        "chapterId": 3,
        "subchapterRef": "03.10",
        "question": "PAR umumnya didefinisikan sebagai …",
        "options": [
          {
            "id": "A",
            "text": "radiasi gelombang panjang di atas 10 µm"
          },
          {
            "id": "B",
            "text": "seluruh radiasi elektromagnetik dari Matahari tanpa batas panjang gelombang"
          },
          {
            "id": "C",
            "text": "radiasi pada kisaran sekitar 400–700 nm yang relevan bagi fotosintesis"
          },
          {
            "id": "D",
            "text": "hanya ultraviolet berenergi tinggi di bawah 100 nm"
          }
        ],
        "correctOptionId": "C",
        "explanation": "PAR didefinisikan secara umum pada rentang 400–700 nm.",
        "sourceRef": "Latihan Pilihan Ganda · 3.10"
      }
    ],
    shortAnswerQuestions: [
      {
        "id": "short-3-1",
        "chapterId": 3,
        "subchapterRef": "03.1",
        "question": "Tuliskan hubungan antara kecepatan cahaya, panjang gelombang, dan frekuensi. Jika frekuensi naik, apa yang terjadi pada panjang gelombang di medium yang sama?",
        "answer": "`c=λf`. Untuk kecepatan gelombang tetap, frekuensi naik berarti panjang gelombang turun.",
        "sourceRef": "Latihan Isian Singkat · 3.1"
      },
      {
        "id": "short-3-2",
        "chapterId": 3,
        "subchapterRef": "03.2",
        "question": "Gunakan hukum Wien untuk memperkirakan panjang gelombang maksimum benda bersuhu 300 K. Nyatakan hasil dalam µm.",
        "answer": "`λmaks≈2897/T=2897/300≈9,66 µm`.",
        "sourceRef": "Latihan Isian Singkat · 3.2"
      },
      {
        "id": "short-3-3",
        "chapterId": 3,
        "subchapterRef": "03.3",
        "question": "Sebutkan empat faktor utama yang menentukan radiasi surya yang diterima permukaan Bumi.",
        "answer": "Jarak Bumi–Matahari, panjang hari, sudut zenit/sudut datang, dan pengaruh atmosfer (awan, aerosol, serta gas penyerap/penghambur).",
        "sourceRef": "Latihan Isian Singkat · 3.3"
      },
      {
        "id": "short-3-4",
        "chapterId": 3,
        "subchapterRef": "03.4",
        "question": "Bedakan radiasi langsung, radiasi baur, dan radiasi global.",
        "answer": "Radiasi langsung tiba dari arah cakram Matahari tanpa hamburan atmosfer yang signifikan; radiasi baur telah dihamburkan atmosfer dan datang dari berbagai arah langit; radiasi global pada bidang horizontal umumnya merupakan jumlah komponen langsung horizontal dan baur.",
        "sourceRef": "Latihan Isian Singkat · 3.4"
      },
      {
        "id": "short-3-5",
        "chapterId": 3,
        "subchapterRef": "03.5",
        "question": "Sebutkan fungsi pyranometer dan Campbell–Stokes, serta jelaskan besaran yang berbeda yang mereka ukur.",
        "answer": "Pyranometer mengukur fluks radiasi surya pada bidang sensor (misalnya radiasi global, W m⁻²). Campbell–Stokes merekam durasi penyinaran matahari melalui jejak pada kartu/pias, bukan total fluks energi secara langsung.",
        "sourceRef": "Latihan Isian Singkat · 3.5"
      }
    ],
    cheatSheetHighlights: ['c = λf', 'F = εσT⁴', 'λmaks = 2897/T', 'PAR: 400-700 nm'],
  },
  {
    id: 4,
    slug: 'neraca-energi',
    title: 'Neraca Energi Bumi',
    subtitle: 'Keseimbangan Radiatif dan Fluks Permukaan',
    durationMin: 60,
    courseCode: 'SAR 1211',
    instructorText: 'Kita akan menghitung aliran energi. Kuncinya adalah konsistensi tanda panah: masuk (+) dan keluar (-).',
    figures: [
      {
        id: 'fig-4-1',
        figureNumber: 'FIG 4.1',
        sourceRef: 'Slide 30 · Neraca',
        title: 'Aliran Energi Permukaan',
        imageSrc: bab4AliranEnergiPermukaan.src,
        altText: 'Diagram alokasi energi netto permukaan: Rn = H + LE + G + M.',
      },
    ],
    subchapters: [
      {
        "id": "4.1",
        "num": "04.1",
        "title": "Konsep neraca energi",
        "contentMarkdown": "Neraca energi membandingkan energi yang masuk, disimpan, dipindahkan, dan keluar. Pada skala global dan dalam jangka panjang, keseimbangan antara radiasi Matahari yang diserap dan radiasi inframerah yang dilepas ke angkasa diperlukan agar suhu rata-rata Bumi tidak terus berubah. Ketidakseimbangan energi yang menetap akan mengubah simpanan energi sistem, terutama lautan.",
        "figureRefId": "fig-4-1"
      },
      {
        "id": "4.2",
        "num": "04.2",
        "title": "Albedo dan radiasi netto",
        "contentMarkdown": "**Albedo (α)** adalah fraksi radiasi gelombang pendek yang dipantulkan suatu permukaan:\n\n`α = Qsw↑ / Qsw↓`\n\nAlbedo tinggi berarti fraksi pantulan tinggi dan, jika faktor lain setara, penyerapan gelombang pendek lebih rendah. Salju/awan dapat memiliki albedo tinggi; hutan, tanah basah, atau permukaan gelap umumnya lebih rendah. Nilai albedo bergantung pada sifat permukaan, kondisi, dan sudut Matahari.\n\nRadiasi netto pada permukaan dapat dinyatakan:\n\n`Rn = (Qsw↓ − Qsw↑) + (Qlw↓ − Qlw↑)`\n\natau, memakai albedo,\n\n`Rn = Qsw↓(1 − α) + Qlw↓ − Qlw↑`.\n\nTanda panah menunjukkan arah: ↓ menuju permukaan dan ↑ meninggalkan permukaan. `Rn > 0` berarti permukaan memperoleh energi radiatif netto; `Rn < 0` berarti kehilangan energi radiatif netto. Periksa selalu konvensi tanda pada setiap soal."
      },
      {
        "id": "4.3",
        "num": "04.3",
        "title": "Ke mana energi netto dialokasikan?",
        "contentMarkdown": "Neraca energi permukaan sering ditulis:\n\n`Rn = H + LE + G + M`\n\n- **H (sensible heat/bahang terasa):** energi yang mengubah suhu udara atau permukaan tanpa perubahan fase air.\n- **LE (latent heat/bahang laten):** energi untuk evaporasi/evapotranspirasi atau yang dilepaskan saat kondensasi. L adalah kalor laten dan E adalah laju aliran massa air, sehingga LE adalah fluks energi.\n- **G (soil heat flux):** energi yang masuk atau keluar dari tanah/substrat.\n- **M:** perubahan simpanan energi dan suku tambahan yang relevan, misalnya pada biomassa atau sistem permukaan yang tidak berada pada keadaan tunak.\n\nDalam pendekatan sederhana, M kadang dianggap nol. Jika air tersedia dan permukaan bervegetasi, bagian besar energi netto dapat digunakan untuk evapotranspirasi; sisanya menghangatkan udara dan tanah. Pembagian aktual bergantung pada kelembapan tanah, vegetasi, angin, dan kondisi atmosfer."
      },
      {
        "id": "4.4",
        "num": "04.4",
        "title": "Cara energi berpindah",
        "contentMarkdown": "- **Konduksi:** perpindahan energi melalui interaksi molekul tanpa perpindahan massa makroskopik. Efektif pada padatan; udara merupakan penghantar panas yang buruk. Dalam klimatologi, konduksi paling penting pada lapisan tanah dan lapisan udara sangat tipis dekat permukaan.\n- **Konveksi:** transfer energi yang disertai gerakan vertikal fluida, misalnya udara hangat yang naik. Dapat terjadi secara bebas akibat gaya apung atau dipaksa oleh turbulensi/angin.\n- **Adveksi:** perpindahan energi atau sifat atmosfer secara horizontal oleh aliran massa udara.\n- **Radiasi:** transfer energi elektromagnetik; tidak membutuhkan medium."
      },
      {
        "id": "4.5",
        "num": "04.5",
        "title": "Efek rumah kaca dalam kerangka neraca energi",
        "contentMarkdown": "Permukaan menyerap sebagian radiasi Matahari dan memancarkan radiasi inframerah. Gas rumah kaca menyerap dan memancarkan kembali sebagian radiasi gelombang panjang, sehingga memengaruhi laju energi yang keluar dari sistem. Efek rumah kaca alami merupakan mekanisme fisik normal; masalah iklim muncul ketika peningkatan konsentrasi gas rumah kaca mengubah keseimbangan energi sistem."
      },
      {
        "id": "4.formulas",
        "num": "04.R",
        "title": "Rumus dan Hubungan Kunci",
        "contentMarkdown": "| Topik | Rumus/relasi | Cara membaca |\n|---|---|---|\n| Radiasi netto | `Rn = SW↓ − SW↑ + LW↓ − LW↑` | Hitung radiasi masuk dikurangi radiasi keluar sesuai arah panah |\n| Albedo | `α = SW↑/SW↓` | Fraksi radiasi gelombang pendek yang dipantulkan |\n| Neraca permukaan | `Rn = H + LE + G + M` | Energi netto dialokasikan ke fluks dan perubahan simpanan |"
      }
    ],
    widget: {
      type: 'calculator',
      title: 'Kalkulator Albedo & Penyerapan',
      subtitle: 'Hitung radiasi yang diserap berdasarkan albedo permukaan',
      formula: 'Qabs = Qsw_down * (1 - alpha)',
      codeSnippet: 'def calc_absorbed(q_down, alpha):\n    return q_down * (1 - alpha)',
      inputs: [
        { key: 'q_down', label: 'Radiasi Datang (W/m²)', defaultValue: 500, step: 1, min: 0, max: 1200 },
        { key: 'alpha', label: 'Albedo (0-1)', defaultValue: 0.2, step: 0.01, min: 0, max: 1 },
      ],
      calcId: "calc_4",},
    flashcards: [
      {
        id: 'fc-4-1',
        chapterId: 4,
        question: 'Apa perbedaan antara Bahang Terasa (H) dan Bahang Laten (LE)?',
        answer: 'H mengubah suhu udara/permukaan tanpa perubahan fase, sedangkan LE adalah energi untuk perubahan fase air (evapotranspirasi).',
      },
    ],
    quizQuestions: [
      {
        "id": "q-4-1",
        "chapterId": 4,
        "subchapterRef": "04.1",
        "question": "Suatu permukaan menerima radiasi gelombang pendek 800 W m⁻² dan memantulkan 200 W m⁻². Albedonya adalah …",
        "options": [
          {
            "id": "A",
            "text": "0,25"
          },
          {
            "id": "B",
            "text": "0,40"
          },
          {
            "id": "C",
            "text": "0,60"
          },
          {
            "id": "D",
            "text": "4,00"
          }
        ],
        "correctOptionId": "A",
        "explanation": "`α = Qpantul/Qdatang = 200/800 = 0,25`.",
        "sourceRef": "Latihan Pilihan Ganda · 4.1"
      },
      {
        "id": "q-4-2",
        "chapterId": 4,
        "subchapterRef": "04.2",
        "question": "Jika radiasi gelombang pendek masuk 600 W m⁻², albedo 0,30, radiasi gelombang panjang masuk 320 W m⁻², dan radiasi gelombang panjang keluar 450 W m⁻², radiasi netto Rn adalah …",
        "options": [
          {
            "id": "A",
            "text": "+290 W m⁻²"
          },
          {
            "id": "B",
            "text": "−50 W m⁻²"
          },
          {
            "id": "C",
            "text": "+50 W m⁻²"
          },
          {
            "id": "D",
            "text": "−290 W m⁻²"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Gelombang pendek terserap `600(1−0,30)=420`; netto panjang `320−450=−130`; jadi `Rn=420−130=+290 W m⁻²`.",
        "sourceRef": "Latihan Pilihan Ganda · 4.2"
      },
      {
        "id": "q-4-3",
        "chapterId": 4,
        "subchapterRef": "04.3",
        "question": "Dalam konvensi `Rn = H + LE + G + M`, nilai Rn positif menandakan …",
        "options": [
          {
            "id": "A",
            "text": "permukaan selalu menjadi lebih dingin"
          },
          {
            "id": "B",
            "text": "masukan energi radiatif netto ke permukaan"
          },
          {
            "id": "C",
            "text": "tidak ada pertukaran energi dengan atmosfer"
          },
          {
            "id": "D",
            "text": "semua energi pasti digunakan untuk evaporasi"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Dengan konvensi ini, Rn positif adalah perolehan energi radiatif oleh permukaan.",
        "sourceRef": "Latihan Pilihan Ganda · 4.3"
      },
      {
        "id": "q-4-4",
        "chapterId": 4,
        "subchapterRef": "04.4",
        "question": "Fluks LE terutama berkaitan dengan …",
        "options": [
          {
            "id": "A",
            "text": "perpindahan energi hanya melalui kontak molekul dalam padatan"
          },
          {
            "id": "B",
            "text": "perubahan tekanan akibat gravitasi"
          },
          {
            "id": "C",
            "text": "energi yang dipakai untuk evaporasi/evapotranspirasi atau dilepas saat kondensasi"
          },
          {
            "id": "D",
            "text": "pantulan radiasi gelombang pendek saja"
          }
        ],
        "correctOptionId": "C",
        "explanation": "LE adalah fluks energi yang terkait perubahan fase air.",
        "sourceRef": "Latihan Pilihan Ganda · 4.4"
      },
      {
        "id": "q-4-5",
        "chapterId": 4,
        "subchapterRef": "04.5",
        "question": "Jika Rn = 180 W m⁻², H = 40 W m⁻², LE = 90 W m⁻², G = 20 W m⁻², nilai M adalah …",
        "options": [
          {
            "id": "A",
            "text": "30 W m⁻²"
          },
          {
            "id": "B",
            "text": "50 W m⁻²"
          },
          {
            "id": "C",
            "text": "110 W m⁻²"
          },
          {
            "id": "D",
            "text": "330 W m⁻²"
          }
        ],
        "correctOptionId": "A",
        "explanation": "`M = 180−40−90−20 = 30 W m⁻²`.",
        "sourceRef": "Latihan Pilihan Ganda · 4.5"
      },
      {
        "id": "q-4-6",
        "chapterId": 4,
        "subchapterRef": "04.6",
        "question": "Perpindahan energi dari wilayah tropis ke lintang lebih tinggi oleh gerakan horizontal massa udara disebut …",
        "options": [
          {
            "id": "A",
            "text": "konduksi"
          },
          {
            "id": "B",
            "text": "adveksi"
          },
          {
            "id": "C",
            "text": "refleksi"
          },
          {
            "id": "D",
            "text": "deposisi"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Adveksi merupakan perpindahan horizontal yang dibawa aliran massa udara.",
        "sourceRef": "Latihan Pilihan Ganda · 4.6"
      },
      {
        "id": "q-4-7",
        "chapterId": 4,
        "subchapterRef": "04.7",
        "question": "Contoh utama konduksi dalam konteks neraca energi permukaan adalah …",
        "options": [
          {
            "id": "A",
            "text": "air laut mengalir ke lintang lain"
          },
          {
            "id": "B",
            "text": "foton Matahari mencapai Bumi"
          },
          {
            "id": "C",
            "text": "udara hangat naik karena gaya apung"
          },
          {
            "id": "D",
            "text": "panas berpindah melalui lapisan tanah dari permukaan menuju lapisan lebih dalam"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Konduksi memindahkan energi melalui medium, misalnya dari permukaan tanah ke lapisan lebih dalam.",
        "sourceRef": "Latihan Pilihan Ganda · 4.7"
      },
      {
        "id": "q-4-8",
        "chapterId": 4,
        "subchapterRef": "04.8",
        "question": "Pada siang cerah, tanah basah bervegetasi cenderung mengalokasikan proporsi energi lebih besar ke LE dibanding tanah kering gundul karena …",
        "options": [
          {
            "id": "A",
            "text": "air dan vegetasi membuat radiasi Matahari berhenti sepenuhnya"
          },
          {
            "id": "B",
            "text": "tanah basah tidak dapat menerima energi netto"
          },
          {
            "id": "C",
            "text": "air tersedia untuk evaporasi dan tanaman melakukan transpirasi"
          },
          {
            "id": "D",
            "text": "LE hanya terjadi saat suhu udara di bawah 0 °C"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Pasokan air mendukung evaporasi dan transpirasi, sehingga LE dapat meningkat.",
        "sourceRef": "Latihan Pilihan Ganda · 4.8"
      },
      {
        "id": "q-4-9",
        "chapterId": 4,
        "subchapterRef": "04.9",
        "question": "Perbedaan albedo antara permukaan bersalju dan hutan penting karena …",
        "options": [
          {
            "id": "A",
            "text": "albedo mengubah proporsi radiasi gelombang pendek yang diserap, sehingga dapat memengaruhi neraca energi permukaan"
          },
          {
            "id": "B",
            "text": "albedo menentukan tekanan atmosfer secara langsung dan tunggal"
          },
          {
            "id": "C",
            "text": "semua radiasi pantul menjadi panas sensible secara otomatis"
          },
          {
            "id": "D",
            "text": "albedo tidak bergantung pada sifat permukaan"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Albedo menentukan fraksi gelombang pendek yang dipantulkan dan diserap.",
        "sourceRef": "Latihan Pilihan Ganda · 4.9"
      },
      {
        "id": "q-4-10",
        "chapterId": 4,
        "subchapterRef": "04.10",
        "question": "Mekanisme utama efek rumah kaca yang memengaruhi neraca energi adalah …",
        "options": [
          {
            "id": "A",
            "text": "gas rumah kaca menghentikan seluruh radiasi Matahari sebelum mencapai permukaan"
          },
          {
            "id": "B",
            "text": "gas rumah kaca menyerap dan memancarkan radiasi gelombang panjang sehingga memengaruhi energi yang lolos ke angkasa"
          },
          {
            "id": "C",
            "text": "gas rumah kaca hanya memantulkan cahaya tampak seperti cermin"
          },
          {
            "id": "D",
            "text": "gas rumah kaca menghilangkan gravitasi dan konveksi"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Gas rumah kaca menyerap dan memancarkan gelombang panjang sehingga mengubah laju energi keluar.",
        "sourceRef": "Latihan Pilihan Ganda · 4.10"
      }
    ],
    shortAnswerQuestions: [
      {
        "id": "short-4-1",
        "chapterId": 4,
        "subchapterRef": "04.1",
        "question": "Sebuah permukaan menerima 700 W m⁻² radiasi gelombang pendek dan memantulkan 140 W m⁻². Hitung albedo dan radiasi gelombang pendek yang diserap.",
        "answer": "Albedo `α=140/700=0,20`. Radiasi gelombang pendek terserap `700−140=560 W m⁻²` (atau `700×(1−0,20)`).",
        "sourceRef": "Latihan Isian Singkat · 4.1"
      },
      {
        "id": "short-4-2",
        "chapterId": 4,
        "subchapterRef": "04.2",
        "question": "Tuliskan persamaan radiasi netto permukaan dengan komponen gelombang pendek dan panjang, lalu jelaskan arti tanda positif Rn.",
        "answer": "`Rn=(Qsw↓−Qsw↑)+(Qlw↓−Qlw↑)`. Rn positif berarti penyerapan/masukan radiasi netto ke permukaan; energi dapat dipindahkan ke H, LE, G atau simpanan energi.",
        "sourceRef": "Latihan Isian Singkat · 4.2"
      },
      {
        "id": "short-4-3",
        "chapterId": 4,
        "subchapterRef": "04.3",
        "question": "Dalam `Rn = H + LE + G + M`, uraikan arti H, LE, G, dan M.",
        "answer": "H = fluks bahang terasa; LE = fluks bahang laten; G = fluks panas ke/dari tanah; M = perubahan simpanan energi dan/atau suku tambahan sesuai batas sistem.",
        "sourceRef": "Latihan Isian Singkat · 4.3"
      },
      {
        "id": "short-4-4",
        "chapterId": 4,
        "subchapterRef": "04.4",
        "question": "Jelaskan perbedaan konduksi, konveksi, dan adveksi, masing-masing dengan contoh klimatologis.",
        "answer": "Konduksi: perpindahan energi melalui medium tanpa perpindahan massa makroskopik, misalnya panas merambat ke dalam tanah. Konveksi: perpindahan energi oleh gerak vertikal fluida, misalnya udara hangat naik. Adveksi: perpindahan horizontal oleh aliran massa udara, misalnya udara hangat diangkut ke wilayah lain.",
        "sourceRef": "Latihan Isian Singkat · 4.4"
      },
      {
        "id": "short-4-5",
        "chapterId": 4,
        "subchapterRef": "04.5",
        "question": "Jika Rn = 150 W m⁻², H = 35 W m⁻², LE = 80 W m⁻², dan G = 15 W m⁻², hitung M.",
        "answer": "`M=150−35−80−15=20 W m⁻²`.",
        "sourceRef": "Latihan Isian Singkat · 4.5"
      }
    ],
    cheatSheetHighlights: ['Rn = SW↓ - SW↑ + LW↓ - LW↑', 'Rn = H + LE + G + M', 'α = SW↑/SW↓'],
  },
  {
    id: 5,
    slug: 'suhu-udara',
    title: 'Suhu Udara',
    subtitle: 'Termodinamika Atmosfer dan Variasi Spasial',
    durationMin: 50,
    courseCode: 'SAR 1211',
    instructorText: 'Ingat: suhu bukan kalor. Kita akan mempelajari bagaimana kapasitas panas air dan tanah menciptakan perbedaan suhu darat-laut.',
    figures: [
      {
        id: 'fig-5-1',
        figureNumber: 'FIG 5.1',
        sourceRef: 'Slide 38 · Suhu',
        title: 'Siklus Suhu Diurnal',
        imageSrc: bab5DiurnalCycle.src,
        altText: 'Grafik variasi suhu udara harian yang menunjukkan puncak suhu setelah tengah hari surya.',
      },
    ],
    subchapters: [
      {
        "id": "5.1",
        "num": "05.1",
        "title": "Suhu berbeda dari panas",
        "contentMarkdown": "**Suhu** menggambarkan keadaan termal dan berkaitan dengan energi kinetik rata-rata partikel. **Panas/kalor** adalah energi yang berpindah akibat perbedaan suhu. Karena itu, suhu tinggi tidak selalu berarti total energi panas lebih besar: massa dan sifat material juga berpengaruh.\n\nKalor untuk mengubah suhu tanpa perubahan fase:\n\n`Q = m c ΔT`\n\n- Q: energi panas (J)\n- m: massa (kg)\n- c: panas jenis (J kg⁻¹ K⁻¹)\n- ΔT: perubahan suhu (K atau °C untuk selisih suhu)\n\nKapasitas panas suatu benda `C = mc` menyatakan energi yang diperlukan untuk menaikkan suhu benda sebesar satu satuan. Air memiliki panas jenis sekitar 4.200 J kg⁻¹ K⁻¹, lebih besar daripada tanah mineral kering pada kisaran contoh kuliah (sekitar 800 J kg⁻¹ K⁻¹). Untuk massa yang sama dan energi masukan yang sama, air mengalami perubahan suhu lebih kecil. Udara menjadi penyimpan panas yang buruk terutama karena kerapatannya rendah, bukan semata-mata karena panas jenis per kilogramnya rendah.",
        "figureRefId": "fig-5-1"
      },
      {
        "id": "5.2",
        "num": "05.2",
        "title": "Pemanasan dan pendinginan permukaan",
        "contentMarkdown": "Radiasi Matahari memanaskan permukaan. Permukaan kemudian memanaskan udara dekat permukaan terutama melalui turbulensi/konveksi, selain konduksi pada lapisan sangat tipis. Karena itu, troposfer bawah umumnya lebih hangat dekat permukaan dan makin dingin ke atas.\n\nSuhu maksimum harian umumnya terjadi **setelah tengah hari surya**, sering sekitar pertengahan sore, karena selama beberapa waktu setelah radiasi Matahari mencapai maksimum, energi masuk masih melebihi energi keluar. Setelah neraca berbalik, permukaan dan udara mendingin. Suhu minimum biasanya terjadi menjelang atau sekitar matahari terbit, setelah kehilangan energi sepanjang malam. Awan dapat mengurangi pemanasan siang dengan memantulkan radiasi gelombang pendek sekaligus mengurangi pendinginan malam dengan menyerap dan memancarkan gelombang panjang ke bawah."
      },
      {
        "id": "5.3",
        "num": "05.3",
        "title": "Variasi ruang dan waktu",
        "contentMarkdown": "- **Vertikal:** suhu troposfer rata-rata turun sekitar 6–6,5 °C per km, tetapi lapse rate aktual dapat berbeda dan inversi dapat terjadi.\n- **Lintang:** rata-rata suhu umumnya menurun ke lintang tinggi karena energi surya rata-rata per satuan luas menurun. Sirkulasi atmosfer dan lautan memindahkan sebagian energi tropis ke lintang lebih tinggi.\n- **Daratan dan lautan:** daratan merespons pemanasan lebih cepat; lautan menyimpan panas lebih besar dan cenderung menahan perubahan suhu.\n- **Diurnal:** variasi siang–malam dipengaruhi awan, kelembapan, vegetasi, angin, dan sifat permukaan.\n- **Musiman:** sangat nyata di lintang menengah–tinggi karena variasi sudut Matahari dan panjang hari; suhu rata-rata tahunan di tropika biasanya lebih seragam.\n- **Urban heat island:** kawasan kota cenderung lebih hangat daripada sekitarnya karena material penyimpan panas, berkurangnya vegetasi/evapotranspirasi, geometri bangunan, dan panas antropogenik."
      },
      {
        "id": "5.4",
        "num": "05.4",
        "title": "Pengamatan dan statistik suhu",
        "contentMarkdown": "Suhu udara standar diukur dengan termometer/sensor yang terlindung dari radiasi langsung dan hujan, tetapi tetap mendapat ventilasi. Sangkar cuaca membantu mengurangi bias karena radiasi. Termometer tanah mengukur suhu pada kedalaman tertentu; termograf merekam perubahan dari waktu ke waktu.\n\nRataan harian dapat ditaksir melalui beberapa cara:\n\n- Dari tiga pengamatan pada 07.30, 13.30, dan 17.30 waktu setempat: `Th = [2T(07.30) + T(13.30) + T(17.30)]/4`.\n- Dari suhu maksimum dan minimum: `Th = (Tmax + Tmin)/2`.\n- Dari data per jam: `Th = (T00 + T01 + ... + T23)/24`.\n\nRataan bulanan adalah rata-rata rataan harian selama bulan tersebut; rataan tahunan dihitung dari rataan harian selama tahun tersebut. **Kisaran suhu harian** = Tmax − Tmin. **Kisaran suhu tahunan** dalam konteks slide = rataan suhu bulanan tertinggi − terendah. **Anomali suhu** adalah selisih suhu terukur dari nilai normal/acuan yang sesuai. Pemilihan periode acuan harus dinyatakan agar anomali bisa ditafsirkan dengan benar.\n\nKonversi suhu: `°F = (9/5)°C + 32`; `K = °C + 273,15`; skala Réaumur `°R = (4/5)°C`."
      },
      {
        "id": "5.formulas",
        "num": "05.R",
        "title": "Rumus dan Hubungan Kunci",
        "contentMarkdown": "| Topik | Rumus/relasi | Cara membaca |\n|---|---|---|\n| Kalor sensibel | `Q = mcΔT` | Memerlukan massa, panas jenis, dan perubahan suhu |\n| Suhu rata-rata dari Tmax/Tmin | `(Tmax+Tmin)/2` | Pendekatan jika hanya maksimum dan minimum tersedia |"
      }
    ],
    widget: {
      type: 'calculator',
      title: 'Kalkulator Energi Termal',
      subtitle: 'Hitung kalor yang dibutuhkan untuk menaikkan suhu massa tertentu',
      formula: 'Q = m * c * ΔT',
      codeSnippet: 'def calc_heat(m, c, dt):\n    return m * c * dt',
      inputs: [
        { key: 'm', label: 'Massa (kg)', defaultValue: 1, step: 0.1, min: 0, max: 100 },
        { key: 'c', label: 'Panas Jenis (J/kgK)', defaultValue: 4200, step: 1, min: 0, max: 10000 },
        { key: 'dt', label: 'Perubahan Suhu (K)', defaultValue: 10, step: 0.1, min: -50, max: 50 },
      ],
      calcId: "calc_5",},
    flashcards: [
      {
        id: 'fc-5-1',
        chapterId: 5,
        question: 'Mengapa suhu maksimum harian terjadi setelah tengah hari?',
        answer: 'Karena selama beberapa waktu setelah radiasi maksimum, energi yang masuk masih lebih besar daripada energi yang keluar (neraca energi tetap positif).',
      },
    ],
    quizQuestions: [
      {
        "id": "q-5-1",
        "chapterId": 5,
        "subchapterRef": "05.1",
        "question": "Sebanyak 84.000 J energi diberikan ke 2 kg air dengan panas jenis 4.200 J kg⁻¹ K⁻¹. Jika tidak ada kehilangan energi atau perubahan fase, kenaikan suhu air adalah …",
        "options": [
          {
            "id": "A",
            "text": "5 °C"
          },
          {
            "id": "B",
            "text": "20 °C"
          },
          {
            "id": "C",
            "text": "10 °C"
          },
          {
            "id": "D",
            "text": "40 °C"
          }
        ],
        "correctOptionId": "C",
        "explanation": "`ΔT=Q/(mc)=84.000/(2×4.200)=10 K`, setara 10 °C sebagai selisih suhu.",
        "sourceRef": "Latihan Pilihan Ganda · 5.1"
      },
      {
        "id": "q-5-2",
        "chapterId": 5,
        "subchapterRef": "05.2",
        "question": "Untuk massa dan masukan kalor sama, air umumnya mengalami perubahan suhu lebih kecil daripada tanah mineral kering karena …",
        "options": [
          {
            "id": "A",
            "text": "air selalu menerima radiasi lebih sedikit"
          },
          {
            "id": "B",
            "text": "air memiliki panas jenis yang lebih besar"
          },
          {
            "id": "C",
            "text": "air tidak dapat menyimpan energi"
          },
          {
            "id": "D",
            "text": "tanah tidak mempunyai kapasitas panas"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Panas jenis air relatif tinggi, sehingga perubahan suhu lebih kecil untuk masukan energi dan massa yang sama.",
        "sourceRef": "Latihan Pilihan Ganda · 5.2"
      },
      {
        "id": "q-5-3",
        "chapterId": 5,
        "subchapterRef": "05.3",
        "question": "Suhu maksimum harian umumnya terjadi setelah tengah hari surya karena …",
        "options": [
          {
            "id": "A",
            "text": "Bumi berhenti berotasi setelah tengah hari"
          },
          {
            "id": "B",
            "text": "tekanan udara selalu mencapai minimum saat tengah hari"
          },
          {
            "id": "C",
            "text": "radiasi Matahari selalu nol setelah pukul 12.00"
          },
          {
            "id": "D",
            "text": "permukaan masih memperoleh energi netto selama beberapa waktu setelah radiasi datang mencapai maksimum"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Permukaan terus menghangat setelah tengah hari selama neraca energi masih positif.",
        "sourceRef": "Latihan Pilihan Ganda · 5.3"
      },
      {
        "id": "q-5-4",
        "chapterId": 5,
        "subchapterRef": "05.4",
        "question": "Suhu minimum harian umumnya terjadi menjelang matahari terbit karena …",
        "options": [
          {
            "id": "A",
            "text": "permukaan telah kehilangan energi selama malam dan belum menerima masukan surya berarti"
          },
          {
            "id": "B",
            "text": "radiasi Matahari paling kuat saat itu"
          },
          {
            "id": "C",
            "text": "angin selalu berhenti sebelum matahari terbit"
          },
          {
            "id": "D",
            "text": "kelembapan relatif selalu nol"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Kehilangan energi semalam berlangsung hingga menjelang matahari terbit, sebelum pemanasan surya signifikan dimulai.",
        "sourceRef": "Latihan Pilihan Ganda · 5.4"
      },
      {
        "id": "q-5-5",
        "chapterId": 5,
        "subchapterRef": "05.5",
        "question": "Jika suhu maksimum harian 32 °C dan minimum 22 °C, kisaran suhu harian adalah …",
        "options": [
          {
            "id": "A",
            "text": "54 °C"
          },
          {
            "id": "B",
            "text": "27 °C"
          },
          {
            "id": "C",
            "text": "10 °C"
          },
          {
            "id": "D",
            "text": "5 °C"
          }
        ],
        "correctOptionId": "C",
        "explanation": "`Tmax−Tmin = 32−22 = 10 °C`.",
        "sourceRef": "Latihan Pilihan Ganda · 5.5"
      },
      {
        "id": "q-5-6",
        "chapterId": 5,
        "subchapterRef": "05.6",
        "question": "Suhu udara 25 °C setara dengan …",
        "options": [
          {
            "id": "A",
            "text": "57 °F"
          },
          {
            "id": "B",
            "text": "77 °F"
          },
          {
            "id": "C",
            "text": "45 °F"
          },
          {
            "id": "D",
            "text": "298,15 °F"
          }
        ],
        "correctOptionId": "B",
        "explanation": "`°F=(9/5×25)+32=77 °F`.",
        "sourceRef": "Latihan Pilihan Ganda · 5.6"
      },
      {
        "id": "q-5-7",
        "chapterId": 5,
        "subchapterRef": "05.7",
        "question": "Suatu lapisan mengalami suhu 24 °C pada ketinggian 0,5 km dan 14 °C pada 2,0 km. Gradien perubahan suhu terhadap ketinggian adalah sekitar …",
        "options": [
          {
            "id": "A",
            "text": "+6,7 °C km⁻¹"
          },
          {
            "id": "B",
            "text": "−10 °C km⁻¹"
          },
          {
            "id": "C",
            "text": "+15 °C km⁻¹"
          },
          {
            "id": "D",
            "text": "−6,7 °C km⁻¹"
          }
        ],
        "correctOptionId": "D",
        "explanation": "`ΔT/Δz=(14−24)/(2,0−0,5)=−10/1,5≈−6,7 °C km⁻¹`.",
        "sourceRef": "Latihan Pilihan Ganda · 5.7"
      },
      {
        "id": "q-5-8",
        "chapterId": 5,
        "subchapterRef": "05.8",
        "question": "Mengapa termometer suhu udara standar ditempatkan dalam pelindung berventilasi dan terlindung dari radiasi langsung?",
        "options": [
          {
            "id": "A",
            "text": "agar termometer hanya mengukur suhu tanah"
          },
          {
            "id": "B",
            "text": "agar suhu sensor tidak bias karena pemanasan radiasi langsung atau pembasahan hujan"
          },
          {
            "id": "C",
            "text": "agar suhu yang terbaca selalu sama dengan suhu Matahari"
          },
          {
            "id": "D",
            "text": "agar konduksi dan radiasi tidak pernah terjadi"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Pelindung mengurangi bias radiasi langsung dan hujan, sedangkan ventilasi memungkinkan udara sampel bertukar.",
        "sourceRef": "Latihan Pilihan Ganda · 5.8"
      },
      {
        "id": "q-5-9",
        "chapterId": 5,
        "subchapterRef": "05.9",
        "question": "Penyebab umum pulau panas perkotaan (urban heat island) adalah …",
        "options": [
          {
            "id": "A",
            "text": "kota memiliki vegetasi paling rapat di semua tempat"
          },
          {
            "id": "B",
            "text": "beton dan aspal tidak dapat menyimpan panas"
          },
          {
            "id": "C",
            "text": "berkurangnya evapotranspirasi, penyimpanan panas material kota, geometri bangunan, dan panas antropogenik"
          },
          {
            "id": "D",
            "text": "kota selalu menerima radiasi surya lebih besar daripada seluruh wilayah rural"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Material penyimpan panas, rendahnya evapotranspirasi, geometri bangunan, dan panas antropogenik berkontribusi.",
        "sourceRef": "Latihan Pilihan Ganda · 5.9"
      },
      {
        "id": "q-5-10",
        "chapterId": 5,
        "subchapterRef": "05.10",
        "question": "Dengan rumus pendekatan tiga pengamatan `Th = [2T07.30 + T13.30 + T17.30]/4`, jika suhunya berturut-turut 24 °C, 32 °C, dan 28 °C, rataan harian taksiran adalah …",
        "options": [
          {
            "id": "A",
            "text": "27 °C"
          },
          {
            "id": "B",
            "text": "28 °C"
          },
          {
            "id": "C",
            "text": "29 °C"
          },
          {
            "id": "D",
            "text": "30 °C"
          }
        ],
        "correctOptionId": "A",
        "explanation": "`[2(24)+32+28]/4 = 108/4 = 27 °C`.",
        "sourceRef": "Latihan Pilihan Ganda · 5.10"
      }
    ],
    shortAnswerQuestions: [
      {
        "id": "short-5-1",
        "chapterId": 5,
        "subchapterRef": "05.1",
        "question": "Jelaskan perbedaan suhu dan kalor.",
        "answer": "Suhu menyatakan keadaan termal benda dan berkaitan dengan energi kinetik rata-rata partikel; kalor adalah energi yang berpindah akibat perbedaan suhu.",
        "sourceRef": "Latihan Isian Singkat · 5.1"
      },
      {
        "id": "short-5-2",
        "chapterId": 5,
        "subchapterRef": "05.2",
        "question": "Sebanyak 42.000 J kalor ditambahkan pada 2 kg air (c = 4.200 J kg⁻¹ K⁻¹). Hitung kenaikan suhu jika tidak ada kehilangan kalor.",
        "answer": "`ΔT=Q/(mc)=42.000/(2×4.200)=5 K`, setara kenaikan suhu 5 °C.",
        "sourceRef": "Latihan Isian Singkat · 5.2"
      },
      {
        "id": "short-5-3",
        "chapterId": 5,
        "subchapterRef": "05.3",
        "question": "Jika Tmax = 34 °C dan Tmin = 20 °C, hitung kisaran suhu harian.",
        "answer": "`Kisaran=Tmax−Tmin=34−20=14 °C`.",
        "sourceRef": "Latihan Isian Singkat · 5.3"
      },
      {
        "id": "short-5-4",
        "chapterId": 5,
        "subchapterRef": "05.4",
        "question": "Mengapa suhu maksimum harian biasanya terjadi setelah tengah hari surya, bukan tepat saat radiasi surya mencapai maksimum?",
        "answer": "Ada jeda termal: sesudah radiasi datang mencapai maksimum, energi masuk masih dapat melebihi energi keluar. Suhu terus naik hingga neraca energi berubah dan pendinginan bersih dimulai.",
        "sourceRef": "Latihan Isian Singkat · 5.4"
      },
      {
        "id": "short-5-5",
        "chapterId": 5,
        "subchapterRef": "05.5",
        "question": "Sebutkan dua faktor penyebab pulau panas perkotaan dan jelaskan mekanisme salah satunya.",
        "answer": "Contoh: berkurangnya vegetasi mengurangi evapotranspirasi sehingga lebih sedikit energi digunakan sebagai LE; aspal/beton menyimpan dan melepas panas; bangunan mengubah ventilasi/radiasi; aktivitas manusia menghasilkan panas antropogenik.",
        "sourceRef": "Latihan Isian Singkat · 5.5"
      }
    ],
    cheatSheetHighlights: ['Q = mcΔT', 'Urban Heat Island: Kota > Desa', 'Suhu Max: Setelah tengah hari surya'],
  },
  {
    id: 6,
    slug: 'kelembapan-udara',
    title: 'Kelembapan Udara',
    subtitle: 'Uap Air, Kejenuhan, dan Dinamika Psikrometrik',
    durationMin: 55,
    courseCode: 'SAR 1211',
    instructorText: 'Hati-hati dengan RH. Ingat bahwa RH bisa naik hanya karena suhu turun, meskipun jumlah uap air tetap sama.',
    figures: [
      {
        id: 'fig-6-1',
        figureNumber: 'FIG 6.1',
        sourceRef: 'Slide 45 · Kelembapan',
        title: 'Kurva Tekanan Uap Jenuh (es)',
        imageSrc: bab6WaterPres.src,
        altText: 'Grafik hubungan nonlinier antara suhu dan tekanan uap jenuh (es).',
      },
    ],
    subchapters: [
      {
        "id": "6.1",
        "num": "06.1",
        "title": "Siklus fase air",
        "contentMarkdown": "Kelembapan menggambarkan kandungan uap air di udara. Perubahan fase utama ialah **evaporasi** (cair → uap), **kondensasi** (uap → cair), **sublimasi** (es → uap), dan **deposisi** (uap → es). Udara mencapai kondisi **jenuh** ketika tekanan uap aktual mencapai tekanan uap jenuh pada suhu tersebut. Jika udara didinginkan pada kandungan uap air tetap, tekanan uap jenuh turun sehingga kelembapan relatif naik; ketika tercapai jenuh, kondensasi dapat mulai terjadi bila kondisi memungkinkan.",
        "figureRefId": "fig-6-1"
      },
      {
        "id": "6.2",
        "num": "06.2",
        "title": "Besaran untuk menyatakan kelembapan",
        "contentMarkdown": "- **Kerapatan uap air/kelembapan absolut:** massa uap air per volume udara, `ρv = mv/V` (kg m⁻³).\n- **Tekanan uap aktual (ea):** kontribusi tekanan parsial uap air di udara. Berdasarkan gas ideal, tekanan uap terkait dengan kerapatan uap dan suhu mutlak: `ea = ρv Rv T`, dengan Rv konstanta gas spesifik uap air.\n- **Kelembapan spesifik (q):** massa uap air dibagi massa total udara lembap, `q = mv/(md + mv)`.\n- **Nisbah campuran (r):** massa uap air dibagi massa udara kering, `r = mv/md`.\n- **Tekanan uap jenuh (es):** tekanan uap ketika udara jenuh pada suhu tertentu. Nilainya meningkat secara nonlinier ketika suhu naik.\n- **Kelembapan relatif (RH):** perbandingan tekanan uap aktual terhadap tekanan uap jenuh: `RH (%) = 100 × ea/es`.\n- **Defisit tekanan uap (VPD):** selisih tekanan uap jenuh dan aktual: `VPD = es − ea`. Makin besar VPD, makin besar “ruang” atmosfer untuk menerima uap air dan umumnya makin kuat dorongan evaporatif, jika faktor lain setara.\n- **Suhu titik embun (Td):** suhu ketika udara pada kandungan uap air aktual yang tetap menjadi jenuh. Selisih suhu udara–titik embun kecil biasanya menandakan udara dekat kejenuhan.\n\nPersamaan pendekatan tekanan uap jenuh yang ditampilkan dalam slide:\n\n`es (mb) = 6,1078 × exp[17,62 T/(T + 243,12)]`, dengan T dalam °C.\n\nUntuk RH, pembilangnya harus **ea** dan penyebutnya **es**. Jika suhu turun sementara ea hampir tetap, RH meningkat karena es turun. Inilah alasan kelembapan relatif dapat meningkat pada malam hari meskipun tidak ada penambahan uap air."
      },
      {
        "id": "6.3",
        "num": "06.3",
        "title": "Variasi kelembapan",
        "contentMarkdown": "Kelembapan bervariasi secara diurnal, musiman, dan spasial. Variasi tersebut dikendalikan oleh suhu, pasokan air, evaporasi/evapotranspirasi, adveksi massa udara, hujan, topografi, dan kedekatan dengan laut. Daerah pesisir sering mendapat pasokan uap air lebih besar, tetapi RH aktual tetap ditentukan oleh kombinasi suhu dan tekanan uap aktual. Pada lokasi yang sama, RH dapat turun pada siang hari ketika suhu naik dan meningkat saat malam ketika suhu turun.\n\nKandungan uap air maksimum yang dapat dipertahankan dalam bentuk uap meningkat seiring suhu. Karena hubungan ini nonlinier, penurunan suhu yang sama tidak selalu menghasilkan perubahan kapasitas kelembapan yang sama pada semua suhu awal."
      },
      {
        "id": "6.4",
        "num": "06.4",
        "title": "Pengukuran kelembapan",
        "contentMarkdown": "- **Higrometer rambut:** memanfaatkan perubahan panjang bahan higroskopis ketika kelembapan berubah.\n- **Metode gravimetrik:** menaksir kelembapan dari pertambahan massa bahan yang menyerap uap air.\n- **Psikrometer:** memakai termometer bola kering (TBK) dan bola basah (TBB). Penguapan dari kain basah mendinginkan TBB; semakin kering udara, umumnya semakin besar selisih `TBK − TBB`.\n- **Termohigrograf:** merekam suhu dan kelembapan secara kontinu menggunakan sensor yang sesuai.\n\nUntuk pendekatan psikrometrik:\n\n`ea ≈ es(TBB) − γ(TBK − TBB)`\n\nDengan γ sekitar `0,661 mb °C⁻¹` pada kondisi standar yang digunakan dalam slide. Setelah ea dihitung, RH diperoleh dari `100 ea/es(TBK)`. Nilai tepat dipengaruhi ventilasi, tekanan, dan karakteristik alat, sehingga tabel atau rumus yang sesuai dengan instrumen lebih baik daripada pendekatan kasar.\n\n> **Koreksi notasi penting:** pada slide VPD tercetak `ea − es`, tetapi definisi “tekanan uap jenuh dikurangi tekanan uap aktual” dan konvensi meteorologi menyatakan **VPD = es − ea**. Menggunakan urutan terbalik akan menghasilkan VPD negatif pada keadaan belum jenuh dan berlawanan dengan makna fisiknya."
      },
      {
        "id": "6.formulas",
        "num": "06.R",
        "title": "Rumus dan Hubungan Kunci",
        "contentMarkdown": "| Topik | Rumus/relasi | Cara membaca |\n|---|---|---|\n| Kerapatan uap air | `ρv = mv/V` | Massa uap air per volume udara |\n| Kelembapan spesifik | `q = mv/(md+mv)` | Fraksi massa uap air dari massa udara lembap |\n| Nisbah campuran | `r = mv/md` | Massa uap air dibanding massa udara kering |\n| Kelembapan relatif | `RH = 100 ea/es` | RH bergantung pada kandungan aktual dan es pada suhu aktual |\n| Defisit tekanan uap | `VPD = es − ea` | Nol pada jenuh; positif jika belum jenuh |\n| Psikrometer | `ea ≈ es(TBB) − γ(TBK−TBB)` | TBB rendah relatif terhadap TBK menandakan evaporasi lebih kuat |"
      }
    ],
    widget: {
      type: 'calculator',
      title: 'Kalkulator RH & VPD',
      subtitle: 'Hitung kelembapan relatif dan defisit tekanan uap',
      formula: 'RH = 100 * ea / es | VPD = es - ea',
      codeSnippet: 'def calc_humidity(ea, es):\n    return {\"rh\": 100 * ea / es, \"vpd\": es - ea}',
      inputs: [
        { key: 'ea', label: 'Tekanan Uap Aktual (mb)', defaultValue: 18, step: 0.1, min: 0, max: 60 },
        { key: 'es', label: 'Tekanan Uap Jenuh (mb)', defaultValue: 24, step: 0.1, min: 0, max: 60 },
      ],
      calcId: "calc_6",},
    flashcards: [
      {
        id: 'fc-6-1',
        chapterId: 6,
        question: 'Apa yang terjadi pada RH jika suhu turun sementara kandungan uap air (ea) tetap?',
        answer: 'RH akan meningkat karena tekanan uap jenuh (es) menurun seiring penurunan suhu, sehingga rasio ea/es membesar.',
      },
    ],
    quizQuestions: [
      {
        "id": "q-6-1",
        "chapterId": 6,
        "subchapterRef": "06.1",
        "question": "Jika tekanan uap aktual ea = 18 mb dan tekanan uap jenuh es = 24 mb, RH adalah …",
        "options": [
          {
            "id": "A",
            "text": "25%"
          },
          {
            "id": "B",
            "text": "75%"
          },
          {
            "id": "C",
            "text": "133%"
          },
          {
            "id": "D",
            "text": "6%"
          }
        ],
        "correctOptionId": "B",
        "explanation": "`RH=100×18/24=75%`.",
        "sourceRef": "Latihan Pilihan Ganda · 6.1"
      },
      {
        "id": "q-6-2",
        "chapterId": 6,
        "subchapterRef": "06.2",
        "question": "Dengan ea = 18 mb dan es = 24 mb, VPD adalah …",
        "options": [
          {
            "id": "A",
            "text": "−6 mb"
          },
          {
            "id": "B",
            "text": "42 mb"
          },
          {
            "id": "C",
            "text": "6 mb"
          },
          {
            "id": "D",
            "text": "75 mb"
          }
        ],
        "correctOptionId": "C",
        "explanation": "`VPD=es−ea=24−18=6 mb`.",
        "sourceRef": "Latihan Pilihan Ganda · 6.2"
      },
      {
        "id": "q-6-3",
        "chapterId": 6,
        "subchapterRef": "06.3",
        "question": "Jika kandungan uap air aktual hampir tetap tetapi suhu udara turun, RH umumnya meningkat karena …",
        "options": [
          {
            "id": "A",
            "text": "tekanan uap jenuh menurun saat suhu turun"
          },
          {
            "id": "B",
            "text": "tekanan uap aktual selalu meningkat secara eksponensial ketika suhu turun"
          },
          {
            "id": "C",
            "text": "udara kehilangan seluruh massanya"
          },
          {
            "id": "D",
            "text": "kelembapan relatif tidak berkaitan dengan suhu"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Saat suhu turun, tekanan uap jenuh menurun; jika ea hampir tetap, rasio ea/es naik.",
        "sourceRef": "Latihan Pilihan Ganda · 6.3"
      },
      {
        "id": "q-6-4",
        "chapterId": 6,
        "subchapterRef": "06.4",
        "question": "Suhu titik embun adalah …",
        "options": [
          {
            "id": "A",
            "text": "suhu permukaan tertinggi dalam sehari"
          },
          {
            "id": "B",
            "text": "suhu ketika tekanan udara sama dengan nol"
          },
          {
            "id": "C",
            "text": "suhu saat semua uap air di atmosfer hilang"
          },
          {
            "id": "D",
            "text": "suhu ketika udara menjadi jenuh jika didinginkan pada kandungan uap air aktual yang tetap"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Titik embun adalah suhu yang membawa udara ke keadaan jenuh pada kandungan uap aktual tetap.",
        "sourceRef": "Latihan Pilihan Ganda · 6.4"
      },
      {
        "id": "q-6-5",
        "chapterId": 6,
        "subchapterRef": "06.5",
        "question": "Kerapatan uap air didefinisikan sebagai …",
        "options": [
          {
            "id": "A",
            "text": "massa udara kering dibagi massa uap air"
          },
          {
            "id": "B",
            "text": "massa uap air per satuan volume udara"
          },
          {
            "id": "C",
            "text": "perbandingan tekanan aktual dengan tekanan permukaan standar"
          },
          {
            "id": "D",
            "text": "volume awan per satuan waktu"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Kerapatan uap air adalah massa uap air dibagi volume udara.",
        "sourceRef": "Latihan Pilihan Ganda · 6.5"
      },
      {
        "id": "q-6-6",
        "chapterId": 6,
        "subchapterRef": "06.6",
        "question": "Kelembapan spesifik berbeda dari nisbah campuran karena kelembapan spesifik membandingkan massa uap air dengan …",
        "options": [
          {
            "id": "A",
            "text": "massa udara kering saja"
          },
          {
            "id": "B",
            "text": "volume awan"
          },
          {
            "id": "C",
            "text": "massa total udara lembap, sedangkan nisbah campuran menggunakan massa udara kering"
          },
          {
            "id": "D",
            "text": "tekanan uap jenuh saja"
          }
        ],
        "correctOptionId": "C",
        "explanation": "q menggunakan massa total udara lembap; r menggunakan massa udara kering.",
        "sourceRef": "Latihan Pilihan Ganda · 6.6"
      },
      {
        "id": "q-6-7",
        "chapterId": 6,
        "subchapterRef": "06.7",
        "question": "Dalam psikrometer berventilasi, jika selisih TBK − TBB besar, maka secara umum kondisi udara cenderung …",
        "options": [
          {
            "id": "A",
            "text": "lebih kering, karena penguapan dari bola basah menyebabkan pendinginan lebih kuat"
          },
          {
            "id": "B",
            "text": "lebih jenuh, karena bola basah selalu sama dengan bola kering"
          },
          {
            "id": "C",
            "text": "tidak memiliki uap air"
          },
          {
            "id": "D",
            "text": "mempunyai tekanan udara nol"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Udara lebih kering umumnya menghasilkan evaporasi lebih kuat dan pendinginan bola basah lebih besar.",
        "sourceRef": "Latihan Pilihan Ganda · 6.7"
      },
      {
        "id": "q-6-8",
        "chapterId": 6,
        "subchapterRef": "06.8",
        "question": "Dalam pendekatan psikrometrik, bentuk hubungan untuk memperkirakan tekanan uap aktual adalah …",
        "options": [
          {
            "id": "A",
            "text": "`ea = es(TBK) + γ(TBK − TBB)`"
          },
          {
            "id": "B",
            "text": "`ea = es(TBK) × es(TBB)`"
          },
          {
            "id": "C",
            "text": "`ea = 100 × (TBK − TBB)`"
          },
          {
            "id": "D",
            "text": "`ea ≈ es(TBB) − γ(TBK − TBB)`"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Bentuk pendekatan: `ea ≈ es(TBB) − γ(TBK−TBB)`.",
        "sourceRef": "Latihan Pilihan Ganda · 6.8"
      },
      {
        "id": "q-6-9",
        "chapterId": 6,
        "subchapterRef": "06.9",
        "question": "Udara memiliki es = 30 mb dan RH = 60%. Tekanan uap aktualnya adalah …",
        "options": [
          {
            "id": "A",
            "text": "50 mb"
          },
          {
            "id": "B",
            "text": "18 mb"
          },
          {
            "id": "C",
            "text": "12 mb"
          },
          {
            "id": "D",
            "text": "30,6 mb"
          }
        ],
        "correctOptionId": "B",
        "explanation": "`ea=(RH/100)es=0,60×30=18 mb`.",
        "sourceRef": "Latihan Pilihan Ganda · 6.9"
      },
      {
        "id": "q-6-10",
        "chapterId": 6,
        "subchapterRef": "06.10",
        "question": "Definisi VPD yang konsisten dengan makna defisit tekanan uap pada kondisi belum jenuh adalah …",
        "options": [
          {
            "id": "A",
            "text": "`VPD = ea − es`"
          },
          {
            "id": "B",
            "text": "`VPD = ea/es`"
          },
          {
            "id": "C",
            "text": "`VPD = es − ea`"
          },
          {
            "id": "D",
            "text": "`VPD = es + ea`"
          }
        ],
        "correctOptionId": "C",
        "explanation": "VPD harus `es−ea`, sehingga positif untuk keadaan belum jenuh.",
        "sourceRef": "Latihan Pilihan Ganda · 6.10"
      }
    ],
    shortAnswerQuestions: [
      {
        "id": "short-6-1",
        "chapterId": 6,
        "subchapterRef": "06.1",
        "question": "Jika ea = 21 mb dan es = 28 mb, hitung RH dan VPD.",
        "answer": "`RH=100×21/28=75%`; `VPD=28−21=7 mb`.",
        "sourceRef": "Latihan Isian Singkat · 6.1"
      },
      {
        "id": "short-6-2",
        "chapterId": 6,
        "subchapterRef": "06.2",
        "question": "Jelaskan mengapa RH dapat meningkat pada malam hari meskipun kandungan uap air aktual hampir tidak berubah.",
        "answer": "Pada malam hari suhu umumnya turun, menyebabkan es turun. Jika ea hampir tetap, rasio ea/es meningkat sehingga RH naik.",
        "sourceRef": "Latihan Isian Singkat · 6.2"
      },
      {
        "id": "short-6-3",
        "chapterId": 6,
        "subchapterRef": "06.3",
        "question": "Bedakan kerapatan uap air, kelembapan spesifik, dan nisbah campuran berdasarkan pembilang dan penyebutnya.",
        "answer": "Kerapatan uap air = massa uap air/volume udara; kelembapan spesifik = massa uap air/massa total udara lembap; nisbah campuran = massa uap air/massa udara kering.",
        "sourceRef": "Latihan Isian Singkat · 6.3"
      },
      {
        "id": "short-6-4",
        "chapterId": 6,
        "subchapterRef": "06.4",
        "question": "Pada psikrometer, TBK = 30 °C dan TBB = 24 °C. Hitung depresi bola basah. Apa indikasi umumnya tentang kondisi kelembapan udara?",
        "answer": "Depresi bola basah `=TBK−TBB=30−24=6 °C`. Selisih besar umumnya mengindikasikan evaporasi kuat dan udara relatif kering, dengan catatan ventilasi dan kondisi instrumen memadai.",
        "sourceRef": "Latihan Isian Singkat · 6.4"
      },
      {
        "id": "short-6-5",
        "chapterId": 6,
        "subchapterRef": "06.5",
        "question": "Definisikan suhu titik embun dan jelaskan makna suhu udara yang hanya 1 °C di atas titik embun.",
        "answer": "Titik embun adalah suhu saat udara menjadi jenuh jika didinginkan pada kandungan uap aktual tetap. Selisih hanya 1 °C mengindikasikan udara dekat kejenuhan; kabut atau kondensasi lebih mungkin jika udara terus mendingin dan kondisi lain mendukung.",
        "sourceRef": "Latihan Isian Singkat · 6.5"
      }
    ],
    cheatSheetHighlights: ['RH = 100 * ea / es', 'VPD = es - ea', 'Suhu turun -> es turun -> RH naik'],
  },
  {
    id: 7,
    slug: 'tekanan-udara-dan-angin',
    title: 'Tekanan Udara & Angin',
    subtitle: 'Hidrostatika, Gaya Coriolis, dan Sirkulasi Global',
    durationMin: 70,
    courseCode: 'SAR 1211',
    instructorText: 'Angin adalah respon atmosfer terhadap ketidakseimbangan tekanan. Pahami gaya Coriolis sebelum menganalisis arah angin.',
    figures: [
      {
        id: 'fig-7-1',
        figureNumber: 'FIG 7.1',
        sourceRef: 'Slide 55 · Angin',
        title: 'Keseimbangan Angin Geostropik',
        imageSrc: bab7Geostropik.src,
        altText: 'Diagram gaya gradien tekanan vs gaya Coriolis pada angin geostropik.',
      },
    ],
    subchapters: [
      {
        "id": "7.1",
        "num": "07.1",
        "title": "Tekanan udara",
        "contentMarkdown": "Tekanan udara adalah gaya berat kolom udara per satuan luas di atas lokasi pengukuran. Satuan yang umum ialah pascal (Pa), hPa, atau milibar (mb); `1 mb = 1 hPa = 100 Pa`. Tekanan permukaan standar sekitar 1013 hPa, tetapi kondisi aktual selalu berubah.\n\nDalam keseimbangan hidrostatik atmosfer:\n\n`dP/dz = −ρg`\n\nTekanan berkurang saat ketinggian bertambah karena massa udara di atas suatu titik makin kecil. Besarnya penurunan tergantung kerapatan udara; udara lebih rapat menghasilkan perubahan tekanan lebih besar untuk ketebalan lapisan yang sama. Digabungkan dengan persamaan gas ideal `P = ρRdT`, hubungan ini menunjukkan bahwa suhu kolom udara memengaruhi ketebalannya. Kolom udara hangat cenderung lebih tebal, yang membantu menjelaskan mengapa troposfer rata-rata lebih tebal di daerah tropis dibandingkan kutub.\n\nHukum gas yang berguna untuk memahami perubahan gas ideal:\n\n- **Boyle:** pada suhu dan jumlah gas tetap, `PV = konstan`; volume naik berarti tekanan turun.\n- **Charles:** pada tekanan tetap, volume sebanding dengan suhu mutlak. Dalam bejana tertutup ber-volume tetap, tekanan berbanding lurus dengan suhu mutlak, sehingga jangan menerapkan bentuk `P/T = konstan` tanpa menyebutkan syarat volume tetap.\n\nVariasi tekanan horizontal lebih kecil daripada variasi vertikal, tetapi perbedaan tekanan horizontal inilah yang mendorong aliran angin. **Isobar** adalah garis pada peta yang menghubungkan titik dengan tekanan sama. Isobar yang rapat menunjukkan gradien tekanan lebih besar dan, secara umum, mendukung angin yang lebih kuat jika faktor lainnya sebanding. Palung tekanan adalah pola memanjang tekanan rendah; punggung tekanan adalah pola memanjang tekanan tinggi.",
        "figureRefId": "fig-7-1"
      },
      {
        "id": "7.2",
        "num": "07.2",
        "title": "Angin dan gaya pengendalinya",
        "contentMarkdown": "Angin adalah gerakan udara dan merupakan besaran vektor: memiliki kecepatan dan arah. Arah angin meteorologis menyatakan **dari mana** angin bertiup; angin baratan datang dari barat.\n\nGaya-gaya utama:\n\n1. **Gaya gradien tekanan:** gaya penggerak primer yang mendorong udara dari tekanan tinggi menuju tekanan rendah. Secara horizontal, percepatannya sebanding dengan gradien tekanan dan berbanding terbalik dengan kerapatan udara; bentuk vektornya `aₚ = −(1/ρ)∇ₕp`.\n2. **Gaya Coriolis:** akibat rotasi Bumi; membelokkan gerak ke kanan di Belahan Bumi Utara dan ke kiri di Belahan Bumi Selatan. Efeknya mendekati nol di ekuator dan membesar ke lintang tinggi. Dalam notasi sederhana, parameter Coriolis `f = 2Ω sin φ`.\n3. **Gaya sentrifugal:** relevan pada aliran mengikuti lintasan melengkung dan diperlukan dalam neraca gaya angin gradien.\n4. **Gesekan:** timbul akibat interaksi aliran dengan permukaan kasar; mengurangi kecepatan dan mengubah arah angin dekat permukaan. Pengaruhnya mengecil dengan ketinggian.\n\nKeseimbangan gaya menghasilkan pola angin ideal:\n\n- **Angin geostrofik:** keseimbangan gaya gradien tekanan dan Coriolis; bergerak sejajar isobar lurus ketika gesekan dapat diabaikan.\n- **Angin gradien:** aliran mengikuti isobar melengkung dengan memperhitungkan gaya gradien tekanan, Coriolis, dan sentrifugal.\n- **Angin dekat permukaan:** gesekan ikut berperan, sehingga angin biasanya memotong isobar menuju tekanan lebih rendah, bukan persis sejajar.\n\nPada peta, gradien tekanan yang kuat tidak otomatis menentukan kecepatan angin secara lengkap: lintang, kerapatan, kelengkungan aliran, dan gesekan juga berpengaruh."
      },
      {
        "id": "7.3",
        "num": "07.3",
        "title": "Sirkulasi global dan angin lokal",
        "contentMarkdown": "Model tiga sel menjelaskan secara skematis sirkulasi rata-rata tiap belahan Bumi:\n\n- **Sel Hadley (sekitar 0–30°):** udara hangat naik di dekat ITCZ/ekuator, bergerak di atmosfer atas menuju subtropis, lalu turun; aliran dekat permukaan membantu membentuk angin pasat.\n- **Sel Ferrel (sekitar 30–60°):** bagian dari sirkulasi lintang menengah yang berkaitan dengan angin baratan dan sistem cuaca lintang menengah.\n- **Sel Polar (sekitar 60–90°):** udara dingin turun di wilayah kutub dan mengalir ke lintang lebih rendah dekat permukaan sebagai angin timuran kutub.\n\n**ITCZ** adalah zona konvergensi angin pasat dan naiknya udara yang umumnya berkaitan dengan awan konvektif dan hujan. Posisi ITCZ bergeser mengikuti pemanasan musiman. Jet stream adalah pita angin sangat kencang di troposfer atas yang berkaitan dengan gradien suhu dan sirkulasi skala besar.\n\nAngin lokal berasal dari perbedaan pemanasan dan/atau topografi:\n\n- **Angin laut:** siang hari, udara relatif lebih sejuk dari laut bergerak menuju darat yang lebih hangat.\n- **Angin darat:** malam hari, daratan biasanya mendingin lebih cepat; aliran dekat permukaan cenderung bergerak dari darat menuju laut.\n- **Angin lembah:** siang hari bergerak dari lembah naik ke lereng/puncak yang lebih hangat.\n- **Angin gunung:** malam hari udara yang mendingin dan lebih rapat mengalir menuruni lereng menuju lembah.\n- **Angin muson:** perubahan arah angin dominan secara musiman akibat perbedaan pemanasan daratan–lautan dan pola tekanan regional; berpengaruh besar pada musim hujan/kering Asia Selatan dan Asia Tenggara.\n- **Angin Foehn/angin terjun:** udara turun di sisi bawah angin pegunungan dan menjadi relatif hangat serta kering, sering setelah mengalami pendinginan dan kehilangan kelembapan ketika naik di sisi hadap angin.\n- **Siklon:** sirkulasi terkait pusat tekanan rendah dan konvergensi dekat permukaan; **antisiklon:** sirkulasi terkait pusat tekanan tinggi dan divergensi dekat permukaan. Arah rotasinya bergantung belahan Bumi."
      },
      {
        "id": "7.4",
        "num": "07.4",
        "title": "Instrumen",
        "contentMarkdown": "**Barometer** mengukur tekanan; **barograf** merekamnya dari waktu ke waktu. **Anemometer** mengukur kecepatan angin, sedangkan **wind vane** atau **windsock** menunjukkan arah angin. Radiosonde membantu mengukur profil angin dan keadaan atmosfer di lapisan atas jika dilengkapi sensor yang sesuai.\n\n---"
      },
      {
        "id": "7.formulas",
        "num": "07.R",
        "title": "Rumus dan Hubungan Kunci",
        "contentMarkdown": "| Topik | Rumus/relasi | Cara membaca |\n|---|---|---|\n| Hidrostatika | `dP/dz = −ρg` | Tekanan turun dengan ketinggian |\n| Gas ideal udara kering | `P = ρRdT` | Tekanan terkait dengan kerapatan dan suhu mutlak |\n| Gaya gradien tekanan | `aₚ = −(1/ρ)∇ₕp` | Arah gaya dari tekanan lebih tinggi menuju lebih rendah |\n| Parameter Coriolis | `f = 2Ω sin φ` | Besar efek Coriolis tergantung lintang |"
      }
    ],
    widget: {
      type: 'calculator',
      title: 'Kalkulator Parameter Coriolis',
      subtitle: 'Hitung f berdasarkan lintang (φ)',
      formula: 'f = 2 * Ω * sin(φ)',
      codeSnippet: 'import math\ndef calc_coriolis(phi_deg):\n    phi_rad = math.radians(phi_deg)\n    return 2 * 7.2921e-5 * math.sin(phi_rad)',
      inputs: [
        { key: 'phi', label: 'Lintang (derajat)', defaultValue: 0, step: 1, min: -90, max: 90 },
      ],
      calcId: "calc_7",},
    flashcards: [
      {
        id: 'fc-7-1',
        chapterId: 7,
        question: 'Apa itu Angin Geostropik?',
        answer: 'Aliran udara yang terjadi ketika gaya gradien tekanan diseimbangkan tepat oleh gaya Coriolis, bergerak sejajar isobar (tanpa gesekan).',
      },
      {
        id: 'fc-7-2',
        chapterId: 7,
        question: 'Apa perbedaan utama Angin Laut dan Angin Darat?',
        answer: 'Angin Laut bertiup siang hari (Laut -> Darat) karena daratan lebih cepat panas; Angin Darat bertiup malam hari (Darat -> Laut).',
      },
    ],
    quizQuestions: [
      {
        "id": "q-7-1",
        "chapterId": 7,
        "subchapterRef": "07.1",
        "question": "Persamaan hidrostatika `dP/dz = −ρg` menyatakan bahwa …",
        "options": [
          {
            "id": "A",
            "text": "tekanan meningkat dengan ketinggian pada semua kondisi"
          },
          {
            "id": "B",
            "text": "tekanan berkurang dengan ketinggian karena berat kolom udara di atasnya berkurang"
          },
          {
            "id": "C",
            "text": "kerapatan udara selalu konstan"
          },
          {
            "id": "D",
            "text": "gravitasi hanya bekerja pada permukaan laut"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Tanda negatif menunjukkan tekanan turun dengan bertambahnya ketinggian.",
        "sourceRef": "Latihan Pilihan Ganda · 7.1"
      },
      {
        "id": "q-7-2",
        "chapterId": 7,
        "subchapterRef": "07.2",
        "question": "Hubungan satuan tekanan yang benar adalah …",
        "options": [
          {
            "id": "A",
            "text": "1 hPa = 100 Pa = 1 mb"
          },
          {
            "id": "B",
            "text": "1 hPa = 1.000 Pa = 10 mb"
          },
          {
            "id": "C",
            "text": "1 mb = 1 Pa"
          },
          {
            "id": "D",
            "text": "1 Pa = 100 hPa"
          }
        ],
        "correctOptionId": "A",
        "explanation": "`1 hPa = 100 Pa` dan secara numerik sama dengan 1 mb.",
        "sourceRef": "Latihan Pilihan Ganda · 7.2"
      },
      {
        "id": "q-7-3",
        "chapterId": 7,
        "subchapterRef": "07.3",
        "question": "Pada peta cuaca, isobar yang sangat rapat umumnya menunjukkan …",
        "options": [
          {
            "id": "A",
            "text": "tidak ada gradien tekanan"
          },
          {
            "id": "B",
            "text": "udara selalu diam"
          },
          {
            "id": "C",
            "text": "gradien tekanan horizontal lebih besar sehingga angin berpotensi lebih kencang jika faktor lain sebanding"
          },
          {
            "id": "D",
            "text": "tekanan sama sekali tidak berubah menurut tempat"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Isobar rapat menunjukkan perubahan tekanan yang besar dalam jarak horizontal pendek.",
        "sourceRef": "Latihan Pilihan Ganda · 7.3"
      },
      {
        "id": "q-7-4",
        "chapterId": 7,
        "subchapterRef": "07.4",
        "question": "Gaya gradien tekanan mendorong udara secara ideal dari …",
        "options": [
          {
            "id": "A",
            "text": "tekanan rendah menuju tekanan tinggi"
          },
          {
            "id": "B",
            "text": "kutub menuju ekuator dalam semua keadaan"
          },
          {
            "id": "C",
            "text": "permukaan menuju stratosfer saja"
          },
          {
            "id": "D",
            "text": "tekanan tinggi menuju tekanan rendah"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Gaya gradien tekanan mempercepat udara dari tekanan tinggi ke tekanan rendah.",
        "sourceRef": "Latihan Pilihan Ganda · 7.4"
      },
      {
        "id": "q-7-5",
        "chapterId": 7,
        "subchapterRef": "07.5",
        "question": "Di Belahan Bumi Utara, gaya Coriolis membelokkan gerak benda yang bergerak secara horizontal ke arah …",
        "options": [
          {
            "id": "A",
            "text": "kanan relatif terhadap arah geraknya"
          },
          {
            "id": "B",
            "text": "kiri relatif terhadap arah geraknya"
          },
          {
            "id": "C",
            "text": "atas tanpa memandang arah gerak"
          },
          {
            "id": "D",
            "text": "bawah tanpa memandang arah gerak"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Pembelokan Coriolis adalah ke kanan di Belahan Bumi Utara.",
        "sourceRef": "Latihan Pilihan Ganda · 7.5"
      },
      {
        "id": "q-7-6",
        "chapterId": 7,
        "subchapterRef": "07.6",
        "question": "Angin geostropik ideal terbentuk ketika …",
        "options": [
          {
            "id": "A",
            "text": "gesekan permukaan satu-satunya gaya yang ada"
          },
          {
            "id": "B",
            "text": "gaya gradien tekanan seimbang dengan gaya Coriolis dan aliran mengikuti isobar lurus"
          },
          {
            "id": "C",
            "text": "udara bergerak dari tekanan tinggi ke rendah tanpa ada pembelokan"
          },
          {
            "id": "D",
            "text": "gaya sentrifugal selalu jauh lebih besar dari gaya lainnya"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Angin geostropik ideal mengikuti isobar lurus karena keseimbangan gradien tekanan dan Coriolis dengan gesekan diabaikan.",
        "sourceRef": "Latihan Pilihan Ganda · 7.6"
      },
      {
        "id": "q-7-7",
        "chapterId": 7,
        "subchapterRef": "07.7",
        "question": "Mengapa angin dekat permukaan biasanya memotong isobar menuju tekanan rendah?",
        "options": [
          {
            "id": "A",
            "text": "karena efek Coriolis selalu nol di semua lintang"
          },
          {
            "id": "B",
            "text": "karena gradien tekanan hilang di dekat permukaan"
          },
          {
            "id": "C",
            "text": "gesekan memperlambat angin sehingga keseimbangan gradien tekanan–Coriolis berubah"
          },
          {
            "id": "D",
            "text": "karena isobar merupakan lintasan yang harus selalu diikuti angin"
          }
        ],
        "correctOptionId": "C",
        "explanation": "Gesekan mengurangi kecepatan dan mengubah keseimbangan gaya, sehingga angin memotong isobar ke arah tekanan rendah.",
        "sourceRef": "Latihan Pilihan Ganda · 7.7"
      },
      {
        "id": "q-7-8",
        "chapterId": 7,
        "subchapterRef": "07.8",
        "question": "Pada siang hari cerah, angin laut umumnya bertiup dari laut ke darat karena …",
        "options": [
          {
            "id": "A",
            "text": "laut memanas jauh lebih cepat daripada darat"
          },
          {
            "id": "B",
            "text": "tekanan darat selalu lebih tinggi daripada laut"
          },
          {
            "id": "C",
            "text": "angin hanya digerakkan oleh pasang surut laut"
          },
          {
            "id": "D",
            "text": "daratan menghangat lebih cepat, udara di atasnya naik, dan terbentuk perbedaan tekanan yang mendukung aliran dari laut"
          }
        ],
        "correctOptionId": "D",
        "explanation": "Daratan memanas cepat pada siang hari; udara di atasnya naik dan mendukung aliran permukaan dari laut ke darat.",
        "sourceRef": "Latihan Pilihan Ganda · 7.8"
      },
      {
        "id": "q-7-9",
        "chapterId": 7,
        "subchapterRef": "07.9",
        "question": "Angin gunung yang turun menuju lembah pada malam hari terutama terbentuk karena …",
        "options": [
          {
            "id": "A",
            "text": "udara di lereng mendingin, menjadi lebih rapat, lalu mengalir menuruni lereng"
          },
          {
            "id": "B",
            "text": "lereng selalu lebih panas pada malam hari"
          },
          {
            "id": "C",
            "text": "Matahari memanaskan puncak gunung pada malam hari"
          },
          {
            "id": "D",
            "text": "gaya Coriolis menjadi tak terbatas pada malam hari"
          }
        ],
        "correctOptionId": "A",
        "explanation": "Pendinginan lereng meningkatkan kerapatan udara dan menggerakkan aliran menuruni lereng.",
        "sourceRef": "Latihan Pilihan Ganda · 7.9"
      },
      {
        "id": "q-7-10",
        "chapterId": 7,
        "subchapterRef": "07.10",
        "question": "Dalam meteorologi, arah angin “baratan” berarti angin …",
        "options": [
          {
            "id": "A",
            "text": "bertiup menuju barat"
          },
          {
            "id": "B",
            "text": "datang dari barat"
          },
          {
            "id": "C",
            "text": "bertiup hanya pada musim dingin"
          },
          {
            "id": "D",
            "text": "sejajar dengan garis lintang tanpa pengecualian"
          }
        ],
        "correctOptionId": "B",
        "explanation": "Arah angin diberi nama menurut arah asalnya.",
        "sourceRef": "Latihan Pilihan Ganda · 7.10"
      }
    ],
    shortAnswerQuestions: [
      {
        "id": "short-7-1",
        "chapterId": 7,
        "subchapterRef": "07.1",
        "question": "Tuliskan persamaan hidrostatika dan jelaskan makna tanda negatifnya.",
        "answer": "`dP/dz=−ρg`. Tanda negatif menyatakan tekanan menurun ketika ketinggian naik karena kolom udara di atasnya makin sedikit.",
        "sourceRef": "Latihan Isian Singkat · 7.1"
      },
      {
        "id": "short-7-2",
        "chapterId": 7,
        "subchapterRef": "07.2",
        "question": "Sebutkan empat gaya utama yang dibahas dalam dinamika angin. Mana yang menjadi penggerak primer?",
        "answer": "Gaya gradien tekanan, Coriolis, sentrifugal, dan gesekan. Gaya gradien tekanan merupakan penggerak primer aliran karena perbedaan tekanan horizontal.",
        "sourceRef": "Latihan Isian Singkat · 7.2"
      },
      {
        "id": "short-7-3",
        "chapterId": 7,
        "subchapterRef": "07.3",
        "question": "Jelaskan perbedaan angin geostropik dan angin gradien.",
        "answer": "Angin geostropik ideal terjadi pada isobar lurus ketika gaya gradien tekanan seimbang dengan Coriolis dan gesekan diabaikan. Angin gradien mengikuti lintasan melengkung sehingga neraca gaya juga melibatkan gaya sentrifugal.",
        "sourceRef": "Latihan Isian Singkat · 7.3"
      },
      {
        "id": "short-7-4",
        "chapterId": 7,
        "subchapterRef": "07.4",
        "question": "Mengapa arah pembelokan Coriolis berbeda antara Belahan Bumi Utara dan Selatan?",
        "answer": "Arah pembelokan tampak berbeda karena orientasi rotasi Bumi terhadap kerangka lokal berbeda pada tiap belahan: ke kanan di Belahan Bumi Utara dan ke kiri di Belahan Bumi Selatan; efek ideal mendekati nol di ekuator.",
        "sourceRef": "Latihan Isian Singkat · 7.4"
      },
      {
        "id": "short-7-5",
        "chapterId": 7,
        "subchapterRef": "07.5",
        "question": "Jelaskan mekanisme angin laut pada siang hari dan angin darat pada malam hari.",
        "answer": "Siang hari daratan lebih cepat panas daripada laut, udara di atas darat naik dan tekanan relatif turun, sehingga angin permukaan bertiup dari laut ke darat. Malam hari daratan lebih cepat dingin, tekanan relatifnya lebih tinggi, sehingga angin permukaan cenderung bertiup dari darat ke laut.",
        "sourceRef": "Latihan Isian Singkat · 7.5"
      }
    ],
    cheatSheetHighlights: ['dP/dz = -ρg', 'f = 2Ω sin φ', 'Angin: High Pressure -> Low Pressure'],
  },
];
