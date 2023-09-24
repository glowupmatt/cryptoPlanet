const newsData = {
  _type: "News",
  readLink: "https://api.cognitive.microsoft.com/api/v7/news/search?q=crypto",
  queryContext: {
    _type: "QueryContext",
    originalQuery: "crypto",
    adultIntent: false,
  },
  totalEstimatedMatches: 73000,
  sort: [
    {
      _type: "SortValue",
      name: "Best match",
      id: "relevance",
      isSelected: true,
      url: "https://api.cognitive.microsoft.com/api/v7/news/search?q=crypto",
    },
    {
      _type: "SortValue",
      name: "Most recent",
      id: "date",
      isSelected: false,
      url: "https://api.cognitive.microsoft.com/api/v7/news/search?q=crypto&sortby=date",
    },
  ],
  value: [
    {
      _type: "NewsArticle",
      name: "Crypto Regulation Need To Evolve: Regulators And Innovators Both Need To Compromise",
      url: "https://www.forbes.com/sites/digital-assets/2023/09/24/crypto-regulation-need-to-evolve-regulators-and-innovators-both-need-to-compromise/",
      image: {
        _type: "ImageObject",
        contentUrl:
          "https://imageio.forbes.com/specials-images/imageserve/611ba44084befe6b38e8e75b/0x0.jpg?format=jpg&crop=2262,1060,x0,y222,safe&width=1200",
        thumbnail: {
          _type: "ImageObject",
          contentUrl:
            "https://www.bing.com/th?id=OVFT.uSx9n-pW_J0I7O5zlK-NAS&pid=News",
          width: 700,
          height: 327,
        },
      },
      description:
        "Tokenized currencies will shape the future of global reserve assets, and need better regulation to so effectively",
      about: [Array],
      provider: [Array],
      datePublished: "2023-09-24T15:37:00.0000000Z",
      category: "ScienceAndTechnology",
    },
  ],
};
export type NewsDataType = typeof newsData;

const article = {
  _type: "NewsArticle",
  name: "Crypto Regulation Need To Evolve: Regulators And Innovators Both Need To Compromise",
  url: "https://www.forbes.com/sites/digital-assets/2023/09/24/crypto-regulation-need-to-evolve-regulators-and-innovators-both-need-to-compromise/",
  image: {
    _type: "ImageObject",
    contentUrl:
      "https://imageio.forbes.com/specials-images/imageserve/611ba44084befe6b38e8e75b/0x0.jpg?format=jpg&crop=2262,1060,x0,y222,safe&width=1200",
    thumbnail: {
      _type: "ImageObject",
      contentUrl:
        "https://www.bing.com/th?id=OVFT.uSx9n-pW_J0I7O5zlK-NAS&pid=News",
      width: 700,
      height: 327,
    },
  },
  description:
    "Tokenized currencies will shape the future of global reserve assets, and need better regulation to so effectively",
  about: [Array],
  provider: [Array],
  datePublished: "2023-09-24T15:37:00.0000000Z",
  category: "ScienceAndTechnology",
};
export type ArticleType = typeof article;

const imageType = {
  _type: "ImageObject",
  contentUrl:
    "https://imageio.forbes.com/specials-images/imageserve/611ba44084befe6b38e8e75b/0x0.jpg?format=jpg&crop=2262,1060,x0,y222,safe&width=1200",
  thumbnail: {
    _type: "ImageObject",
    contentUrl:
      "https://www.bing.com/th?id=OVFT.uSx9n-pW_J0I7O5zlK-NAS&pid=News",
    width: 700,
    height: 327,
  },
};

export type ImageType = typeof imageType;
