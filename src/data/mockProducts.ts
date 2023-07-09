import { ProductResponse } from "../types/Product";

const MockProducts: ProductResponse[] = [
  {
    balance: 497,
    product: {
      barcode: "9780194229647",
      titles: {
        en: "The Oxford Bookworms Library: Stage 2: 700 Headwords Alice's Adventures in Wonderland (Oxford Bookworms)",
      },
      categories: [
        {
          id: "543543",
          titles: {
            en: "Print Books",
            ru: "Печатные книги",
            es: "Libros impresos",
            nl: "Gedrukte boeken",
            de: "Gedruckte Bücher",
            it: "Libri cartacei",
            fr: "Livres papier",
          },
        },
      ],
      manufacturer: {
        id: "oxford-university-press",
        titles: {
          ar: "دار نشر جامعة أكسفورد",
          bn: "অক্সফোর্ড ইউনিভার্সিটি প্রেস",
          en: "Oxford University Press",
          he: "הוצאת אוניברסיטת אוקספורד",
          hi: "ऑक्सफोर्ड यूनिवर्सिटी प्रेस",
          hy: "Օքսֆորդի համալսարանի հրատարակչություն",
          ja: "オックスフォード大学出版局",
          ko: "옥스퍼드 대학교 출판부",
          ru: "Издательство Оксфордского университета",
          sr: "Оксфорд јуниверсити прес",
          ta: "ஒக்ஸ்போர்ட் பல்கலைக்கழகப் பதிப்பகம்",
          vi: "Nhà xuất bản Đại học Oxford",
          zh: "牛津大學出版社",
        },
        wikidataId: "Q217595",
      },
      images: [],
      metadata: {
        generic: {
          contributors: [
            {
              names: {
                en: "Jennifer Bassett",
              },
              type: "author",
            },
            {
              names: {
                en: "Lewis Carroll",
              },
              type: "author",
            },
            {
              names: {
                en: "Tricia Hedge",
              },
              type: "author",
            },
          ],
        },
        printBook: {
          numPages: 64,
          publishedYear: 2000,
          bindingType: "paperback",
        },
      },
    },
  },
];

export default MockProducts;
