import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { XMasonry, XBlock } from 'react-xmasonry'

import { getReadingLibrary } from '../provider/apiRequests'
import { UserContainer } from '../provider/containers'

const MOCKDATA = [
              {
                 "id":"3447800624",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"3590"
                    },
                    "isbn":{
                       "@nil":"true"
                    },
                    "isbn13":{
                       "@nil":"true"
                    },
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"3996"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.BYqEX2WAYN42Um98ew067Q",
                    "title":"The Adventures of Sherlock Holmes (Sherlock Holmes, #3)",
                    "title_without_series":"The Adventures of Sherlock Holmes",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1164045516l/3590._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1164045516l/3590._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/3590.The_Adventures_of_Sherlock_Holmes",
                    "num_pages":"389",
                    "format":"Paperback",
                    "edition_information":null,
                    "publisher":"Oxford University Press",
                    "publication_day":"22",
                    "publication_year":"1998",
                    "publication_month":"10",
                    "average_rating":"4.30",
                    "ratings_count":"236851",
                    "description":"<i>The Adventures of Sherlock Holmes</i> is the series of short stories that made the fortunes of the Strand magazine, in which they were first published, and won immense popularity for Sherlock Holmes and Dr Watson. The detective is at the height of his powers and the volume is full of famous cases, including 'The Red-Headed League', 'The Blue Carbuncle', and 'The Speckled Band'. Although Holmes gained a reputation for infallibility, Conan Doyle showed his own realism and feminism by having the great detective defeated by Irene Adler - the woman - in the very first story, 'A Scandal in Bohemia'. <br />The editor of this volume, Richard Lancelyn Green is editor of <i>The Uncollected Sherlock Holmes</i> and <i>The Further Adventures of Sherlock Holmes</i>. With John Michael Gibson, he compiled the Soho Series Bibliography of A. Conan Doyle.",
                    "authors":{
                       "author":{
                          "id":"2448",
                          "name":"Arthur Conan Doyle",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1495008883p5/2448.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1495008883p2/2448.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/2448.Arthur_Conan_Doyle",
                          "average_rating":"4.20",
                          "ratings_count":"1887123",
                          "text_reviews_count":"62106"
                       }
                    },
                    "published":"1998",
                    "work":{
                       "id":"1222101",
                       "uri":"kca://work/amzn1.gr.work.v1.jxVyoPgnJ56cfZK4h80ZBQ"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086528179",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:50:14 -0700 2020",
                 "date_updated":"Fri Jul 17 10:50:14 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447800624",
                 "link":"https://www.goodreads.com/review/show/3447800624",
                 "owned":"0"
              },
              {
                 "id":"3447800268",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"135479"
                    },
                    "isbn":"0140285601",
                    "isbn13":"9780140285604",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"6904"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.-LGvzGcchlNMh0L-pCq4Kw",
                    "title":"Cat's Cradle",
                    "title_without_series":"Cat's Cradle",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327867150l/135479._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327867150l/135479._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/135479.Cat_s_Cradle",
                    "num_pages":"179",
                    "format":"Paperback",
                    "edition_information":null,
                    "publisher":"Penguin",
                    "publication_day":null,
                    "publication_year":"1999",
                    "publication_month":null,
                    "average_rating":"4.16",
                    "ratings_count":"334492",
                    "description":"<b>Told with deadpan humour and bitter irony, Kurt Vonnegut's cult tale of global destruction preys on our deepest fears of witnessing Armageddon and, worse still, surviving it ...</b><br /><br />Dr Felix Hoenikker, one of the founding 'fathers' of the atomic bomb, has left a deadly legacy to the world. For he's the inventor of 'ice-nine', a lethal chemical capable of freezing the entire planet. The search for its whereabouts leads to Hoenikker's three ecentric children, to a crazed dictator in the Caribbean, to madness. Felix Hoenikker's Death Wish comes true when his last, fatal gift to humankind brings about the end, that for all of us, is nigh...",
                    "authors":{
                       "author":{
                          "id":"2778055",
                          "name":"Kurt Vonnegut Jr.",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1433582280p5/2778055.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1433582280p2/2778055.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/2778055.Kurt_Vonnegut_Jr_",
                          "average_rating":"4.06",
                          "ratings_count":"2447211",
                          "text_reviews_count":"79942"
                       }
                    },
                    "published":"1999",
                    "work":{
                       "id":"1621115",
                       "uri":"kca://work/amzn1.gr.work.v1.6UUWm0nuY4_sc042BQRNfA"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086527838",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:49:59 -0700 2020",
                 "date_updated":"Fri Jul 17 10:50:00 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447800268",
                 "link":"https://www.goodreads.com/review/show/3447800268",
                 "owned":"0"
              },
              {
                 "id":"3447799241",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"23884"
                    },
                    "isbn":"1400043336",
                    "isbn13":"9781400043330",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"405"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.oWYA78oWqmcgHTO2eEUBFA",
                    "title":"The General in His Labyrinth",
                    "title_without_series":"The General in His Labyrinth",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361537151l/23884._SY160_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361537151l/23884._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/23884.The_General_in_His_Labyrinth",
                    "num_pages":"248",
                    "format":"Hardcover",
                    "edition_information":null,
                    "publisher":"Everyman's Library",
                    "publication_day":"26",
                    "publication_year":"2004",
                    "publication_month":"10",
                    "average_rating":"3.69",
                    "ratings_count":"17426",
                    "description":"(Book Jacket Status: Jacketed)<br /><br />Gabrielnary from one of the greatest writers of our time.",
                    "authors":{
                       "author":{
                          "id":"13450",
                          "name":"Gabriel Garc\u00eda M\u00e1rquez",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1588856705p5/13450.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1588856705p2/13450.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/13450.Gabriel_Garc_a_M_rquez",
                          "average_rating":"3.97",
                          "ratings_count":"1597501",
                          "text_reviews_count":"75556"
                       }
                    },
                    "published":"2004",
                    "work":{
                       "id":"1066730",
                       "uri":"kca://work/amzn1.gr.work.v1.hoTzXGmiRzAvb_NGii2hoQ"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086526819",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:49:15 -0700 2020",
                 "date_updated":"Fri Jul 17 10:49:15 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447799241",
                 "link":"https://www.goodreads.com/review/show/3447799241",
                 "owned":"0"
              },
              {
                 "id":"3447798550",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"38447"
                    },
                    "isbn":{
                       "@nil":"true"
                    },
                    "isbn13":{
                       "@nil":"true"
                    },
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"49708"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.QYIb80P3mP0A4pXX0ucI6A",
                    "title":"The Handmaid's Tale (The Handmaid's Tale, #1)",
                    "title_without_series":"The Handmaid's Tale",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578028274l/38447._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578028274l/38447._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/38447.The_Handmaid_s_Tale",
                    "num_pages":"314",
                    "format":"Paperback",
                    "edition_information":"1st Anchor Books edition",
                    "publisher":"Anchor Books",
                    "publication_day":null,
                    "publication_year":"1998",
                    "publication_month":"4",
                    "average_rating":"4.11",
                    "ratings_count":"1414353",
                    "description":"Offred is a Handmaid in the Republic of ble. Offred can remember the years before, when she lived and made love with her husband, Luke; when she played with and protected her daughter; when she had a job, money of her own, and access to knowledge. But all of that is gone now . . . <br /><br />Funny, unexpected, horrifying, and altogether convincing, <i>The Handmaid's Tale</i> is at once scathing satire, dire warning, and tour de force.",
                    "authors":{
                       "author":{
                          "id":"3472",
                          "name":"Margaret Atwood",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1282859073p5/3472.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1282859073p2/3472.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/3472.Margaret_Atwood",
                          "average_rating":"4.03",
                          "ratings_count":"2679267",
                          "text_reviews_count":"169525"
                       }
                    },
                    "published":"1998",
                    "work":{
                       "id":"1119185",
                       "uri":"kca://work/amzn1.gr.work.v1.C3iSrQ9DOvG8o6BBrFoi4w"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866627",
                       "@name":"currently-reading",
                       "@review_shelf_id":"3086526141",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":"Fri Jul 17 10:48:46 -0700 2020",
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:48:46 -0700 2020",
                 "date_updated":"Fri Jul 17 10:48:46 -0700 2020",
                 "read_count":"1",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447798550",
                 "link":"https://www.goodreads.com/review/show/3447798550",
                 "owned":"0"
              },
              {
                 "id":"3447798289",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"35583355"
                    },
                    "isbn":{
                       "@nil":"true"
                    },
                    "isbn13":{
                       "@nil":"true"
                    },
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"4"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.09z55iyGXk35I4ZTh12JTw",
                    "title":"Persuassion",
                    "title_without_series":"Persuassion",
                    "image_url":"https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
                    "small_image_url":"https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/35583355-persuassion",
                    "num_pages":null,
                    "format":null,
                    "edition_information":null,
                    "publisher":null,
                    "publication_day":null,
                    "publication_year":null,
                    "publication_month":null,
                    "average_rating":"4.14",
                    "ratings_count":"513096",
                    "description":"Twenty-seven-year old Anne Elliot is Austen's most adult heroine. Eight years before the story proper begins, she is happily betrothed to a naval officer, Frederick Wentworth, but she precipitously breaks off the engagement when persuaded by her friend Lady Russell that such a match is unworthy. The breakup produces in Anne a deep and long-lasting regret. When later Wentworth returns from sea a rich and successful captain, he finds Anne's family on the brink of financial ruin and his own sister a tenant in Kellynch Hall, the Elliot estate. All the tension of the novel revolves around one question: Will Anne and Wentworth be reunited in their love?<br /><br />Jane Austen once compared her writing to painting on a little bit of ivory, 2 inches square. Readers of <i>Persuasion</i> will discover that neither her skill for delicate, ironic observations on social custom, love, and marriage nor her ability to apply a sharp focus lens to English manners and morals has deserted her in her final finished work.",
                    "authors":{
                       "author":{
                          "id":"1265",
                          "name":"Jane Austen",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1588941810p5/1265.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1588941810p2/1265.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/1265.Jane_Austen",
                          "average_rating":"4.12",
                          "ratings_count":"5925936",
                          "text_reviews_count":"168044"
                       }
                    },
                    "published":null,
                    "work":{
                       "id":"2534720",
                       "uri":"kca://work/amzn1.gr.work.v1.R7MwsnCfyHc7718MW02Mlw"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086525894",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:48:35 -0700 2020",
                 "date_updated":"Fri Jul 17 10:48:36 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447798289",
                 "link":"https://www.goodreads.com/review/show/3447798289",
                 "owned":"0"
              },
              {
                 "id":"3447798121",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"10975"
                    },
                    "isbn":{
                       "@nil":"true"
                    },
                    "isbn13":{
                       "@nil":"true"
                    },
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"5213"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.CD6UR5AfXIPwMU3FO2_Tyw",
                    "title":"The Sound and the Fury",
                    "title_without_series":"The Sound and the Fury",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433089995l/10975._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433089995l/10975._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/10975.The_Sound_and_the_Fury",
                    "num_pages":"366",
                    "format":"Paperback",
                    "edition_information":null,
                    "publisher":"Vintage International",
                    "publication_day":null,
                    "publication_year":"1990",
                    "publication_month":"10",
                    "average_rating":"3.86",
                    "ratings_count":"156649",
                    "description":"<b>Alternate version of <a href=\"https://www. the brutal cynic; and Dilsey, their black servant. Their lives fragmented and harrowed by history and legacy, the character\u2019s voices and actions mesh to create what is arguably Faulkner\u2019s masterpiece and one of the greatest novels of the twentieth century.",
                    "authors":{
                       "author":{
                          "id":"3535",
                          "name":"William Faulkner",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1437805575p5/3535.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1437805575p2/3535.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/3535.William_Faulkner",
                          "average_rating":"3.85",
                          "ratings_count":"503450",
                          "text_reviews_count":"25737"
                       }
                    },
                    "published":"1990",
                    "work":{
                       "id":"1168289",
                       "uri":"kca://work/amzn1.gr.work.v1.0CzjUlrjXj4OR9u0iipxhA"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086525732",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:48:28 -0700 2020",
                 "date_updated":"Fri Jul 17 10:48:29 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447798121",
                 "link":"https://www.goodreads.com/review/show/3447798121",
                 "owned":"0"
              },
              {
                 "id":"3447797923",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"34051011"
                    },
                    "isbn":{
                       "@nil":"true"
                    },
                    "isbn13":{
                       "@nil":"true"
                    },
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"9446"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.ko9fgGm97_zjs4OlOuIZSw",
                    "title":"Pachinko",
                    "title_without_series":"Pachinko",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529845599l/34051011._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529845599l/34051011._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/34051011-pachinko",
                    "num_pages":"496",
                    "format":"Kindle Edition",
                    "edition_information":null,
                    "publisher":"Grand Central Publishing",
                    "publication_day":"7",
                    "publication_year":"2017",
                    "publication_month":"2",
                    "average_rating":"4.27",
                    "ratings_count":"190799",
                    "description":"In the early 1900s, teenaged Sunja, the adored daughter of a crippled fisherman, falls for a wealthy stranger at the seashore near her home in Korea. He promises her the world, but when she discovers she is pregnant--and that her lover is married--she refuses to be bought. Instead, she accepts an offer of marriage from a gentle, sickly minister passing through on his way to Japan. But her decision to abandon her home, and to reject her son's powerful father, sets off a dramatic saga that will echo down through the generations.<br /><br />Richly told and profoundly moving, Pachinko is a story of love, sacrifice, ambition, and loyalty. From bustling street markets to the halls of Japan's finest universities to the pachinko parlors of the criminal underworld, Lee's complex and passionate characters--strong, stubborn women, devoted sisters and sons, fathers shaken by moral crisis--survive and thrive against the indifferent arc of history.",
                    "authors":{
                       "author":{
                          "id":"378209",
                          "name":"Min Jin Lee",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1192651627p5/378209.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1192651627p2/378209.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/378209.Min_Jin_Lee",
                          "average_rating":"4.23",
                          "ratings_count":"204929",
                          "text_reviews_count":"21256"
                       }
                    },
                    "published":"2017",
                    "work":{
                       "id":"50384116",
                       "uri":"kca://work/amzn1.gr.work.v1.Kfq1uC_3eoSK1b271iNVKQ"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086525540",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:48:19 -0700 2020",
                 "date_updated":"Fri Jul 17 10:48:20 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447797923",
                 "link":"https://www.goodreads.com/review/show/3447797923",
                 "owned":"0"
              },
              {
                 "id":"3447797610",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"35036409"
                    },
                    "isbn":{
                       "@nil":"true"
                    },
                    "isbn13":{
                       "@nil":"true"
                    },
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"4149"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.fMCeTkbQUeSIq0eeNGMX8A",
                    "title":"My Brilliant Friend (The Neapolitan Novels, #1)",
                    "title_without_series":"My Brilliant Friend",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1493655783l/35036409._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1493655783l/35036409._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/35036409-my-brilliant-friend",
                    "num_pages":"331",
                    "format":"Paperback",
                    "edition_information":null,
                    "publisher":"Penguin Random House",
                    "publication_day":"25",
                    "publication_year":"2012",
                    "publication_month":"9",
                    "average_rating":"3.96",
                    "ratings_count":"189516",
                    "description":"A modern masterpiece from one of Italy's most accship between her two protagonists.",
                    "authors":{
                       "author":{
                          "id":"44085",
                          "name":"Elena Ferrante",
                          "role":null,
                          "image_url":{
                             "@nophoto":"true",
                             "#text":"https://s.gr-assets.com/assets/nophoto/user/u_200x266-e183445fd1a1b5cc7075bb1cf7043306.png"
                          },
                          "small_image_url":{
                             "@nophoto":"true",
                             "#text":"https://s.gr-assets.com/assets/nophoto/user/u_50x66-632230dc9882b4352d753eedf9396530.png"
                          },
                          "link":"https://www.goodreads.com/author/show/44085.Elena_Ferrante",
                          "average_rating":"4.15",
                          "ratings_count":"501104",
                          "text_reviews_count":"41146"
                       }
                    },
                    "published":"2012",
                    "work":{
                       "id":"19174054",
                       "uri":"kca://work/amzn1.gr.work.v1.p9o3XzdSTQ0do_9bjyP6RA"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086525211",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:48:05 -0700 2020",
                 "date_updated":"Fri Jul 17 10:48:06 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447797610",
                 "link":"https://www.goodreads.com/review/show/3447797610",
                 "owned":"0"
              },
              {
                 "id":"3447796806",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"21969786"
                    },
                    "isbn":"1406350486",
                    "isbn13":"9781406350487",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"4555"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.4lqA_X9YwTv8-uzeSLTRhQ",
                    "title":"More Than This",
                    "title_without_series":"More Than This",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398164413l/21969786._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398164413l/21969786._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/21969786-more-than-this",
                    "num_pages":"480",
                    "format":"Paperback",
                    "edition_information":null,
                    "publisher":"Walker Books Ltd",
                    "publication_day":"1",
                    "publication_year":"2014",
                    "publication_month":"5",
                    "average_rating":"3.99",
                    "ratings_count":"46700",
                    "description":"A boy drowns, desperate and alone in his final moments. He dies. Then he wakes, naked and bruised and thirsty, but alive. How can this be? And what is this strange deserted place?<br /><br />As he struggles to understand what is happening, the boy dares to hope. Might this not be the end? Might there be more to this life, or perhaps this afterlife?<br /><br />From multi-award-winning Patrick Ness comes one of the most provocative and moving novels of our time.",
                    "authors":{
                       "author":{
                          "id":"370361",
                          "name":"Patrick Ness",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1589369436p5/370361.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1589369436p2/370361.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/370361.Patrick_Ness",
                          "average_rating":"4.12",
                          "ratings_count":"633720",
                          "text_reviews_count":"87300"
                       }
                    },
                    "published":"2014",
                    "work":{
                       "id":"22008332",
                       "uri":"kca://work/amzn1.gr.work.v1.QdqeZQ0857tSxhyDOMoDVQ"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086524391",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:47:31 -0700 2020",
                 "date_updated":"Fri Jul 17 10:47:31 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447796806",
                 "link":"https://www.goodreads.com/review/show/3447796806",
                 "owned":"0"
              },
              {
                 "id":"3447796440",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"231804"
                    },
                    "isbn":{
                       "@nil":"true"
                    },
                    "isbn13":{
                       "@nil":"true"
                    },
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"28341"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.V-Jvghwrl4B5kgqunme3ig",
                    "title":"The Outsiders",
                    "title_without_series":"The Outsiders",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442129426l/231804._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442129426l/231804._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/231804.The_Outsiders",
                    "num_pages":"192",
                    "format":"Mass Market Paperback",
                    "edition_information":null,
                    "publisher":"Puffin Books (US/CAN)",
                    "publication_day":"1",
                    "publication_year":"1997",
                    "publication_month":"9",
                    "average_rating":"4.10",
                    "ratings_count":"913461",
                    "description":"<i>The Outsiders</i> is a causing his bifurcated world to crumble and teaching him that pain feels the same whether a soc or a greaser.<br /><br /><i>Librarian note: This record is for one of the three editions published with different covers and with ISBN 0-140-38572-X / 978-0-14-038572-4. The records are for the <a href=\"https://www.goodreads.com/book/show/231804.1988_cover\" title=\"1988 cover\" rel=\"nofollow\">1988 cover</a> (this record), the <a href=\"https://www.goodreads.com/book/show/17985531.1995_cover\" title=\"1995 cover\" rel=\"nofollow\">1995 cover</a>, and the <a href=\"https://www.goodreads.com/book/show/7840334.2008_cover\" title=\"2008 cover\" rel=\"nofollow\">2008 cover</a> which is also the current in-print cover.</i>",
                    "authors":{
                       "author":{
                          "id":"762707",
                          "name":"S.E. Hinton",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1206505616p5/762707.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1206505616p2/762707.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/762707.S_E_Hinton",
                          "average_rating":"4.08",
                          "ratings_count":"984002",
                          "text_reviews_count":"36820"
                       }
                    },
                    "published":"1997",
                    "work":{
                       "id":"1426690",
                       "uri":"kca://work/amzn1.gr.work.v1.pHeishWdNR9az5zttnfr1w"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086523953",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:47:16 -0700 2020",
                 "date_updated":"Fri Jul 17 10:47:16 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447796440",
                 "link":"https://www.goodreads.com/review/show/3447796440",
                 "owned":"0"
              },
              {
                 "id":"3447795862",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"15994634"
                    },
                    "isbn":"1250028647",
                    "isbn13":"9781250028648",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"3530"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.xRvMz3aKhZ4w3LqYQhqbkQ",
                    "title":"Z: A Novel of Zelda Fitzgerald",
                    "title_without_series":"Z: A Novel of Zelda Fitzgerald",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396815892l/15994634._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1396815892l/15994634._SX50_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/15994634-z",
                    "num_pages":"464",
                    "format":"ebook",
                    "edition_information":null,
                    "publisher":"St. Martin's Press",
                    "publication_day":"26",
                    "publication_year":"2013",
                    "publication_month":"3",
                    "average_rating":"3.85",
                    "ratings_count":"47012",
                    "description":"A dazzling novel that captures all of the rong him both fortune and fame. <br /><br />Her father is deeply unimpressed. But after Scott sells his first novel, This Side of Paradise, to Scribner's, Zelda optimistically boards a train north, to marry him in the vestry of St. Patrick's Cathedral and take the rest as it comes.",
                    "authors":{
                       "author":{
                          "id":"6521646",
                          "name":"Therese Anne Fowler",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1552058369p5/6521646.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1552058369p2/6521646.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/6521646.Therese_Anne_Fowler",
                          "average_rating":"3.87",
                          "ratings_count":"82130",
                          "text_reviews_count":"10827"
                       }
                    },
                    "published":"2013",
                    "work":{
                       "id":"21763986",
                       "uri":"kca://work/amzn1.gr.work.v1.QR1oPu904R1j-Yw1xZn_Aw"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086523397",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:46:51 -0700 2020",
                 "date_updated":"Fri Jul 17 10:46:52 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447795862",
                 "link":"https://www.goodreads.com/review/show/3447795862",
                 "owned":"0"
              },
              {
                 "id":"3447794892",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"18774964"
                    },
                    "isbn":"1476738017",
                    "isbn13":"9781476738017",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"51243"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.hDiR23lW3pcwBQpLWPG0Sw",
                    "title":"A Man Called Ove",
                    "title_without_series":"A Man Called Ove",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930l/18774964._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/18774964-a-man-called-ove",
                    "num_pages":"337",
                    "format":"Hardcover",
                    "edition_information":null,
                    "publisher":"Atria Books",
                    "publication_day":"15",
                    "publication_year":"2014",
                    "publication_month":"7",
                    "average_rating":"4.36",
                    "ratings_count":"544241",
                    "description":"A grumpy yet loveable man finds his solitary world -in to a comical and heartwarming tale of unkempt cats, unexpected friendship, and the ancient art of backing up a U-Haul. All of which will change one cranky old man and a local residents' association to their very foundations.",
                    "authors":{
                       "author":{
                          "id":"6485178",
                          "name":"Fredrik Backman",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1493098924p5/6485178.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1493098924p2/6485178.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/6485178.Fredrik_Backman",
                          "average_rating":"4.26",
                          "ratings_count":"1127337",
                          "text_reviews_count":"140079"
                       }
                    },
                    "published":"2014",
                    "work":{
                       "id":"21619954",
                       "uri":"kca://work/amzn1.gr.work.v1.Ppm3CqpJkIo_m6rg3juMgw"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086522529",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:46:09 -0700 2020",
                 "date_updated":"Fri Jul 17 10:46:10 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447794892",
                 "link":"https://www.goodreads.com/review/show/3447794892",
                 "owned":"0"
              },
              {
                 "id":"3447794382",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"22822858"
                    },
                    "isbn":"0385539258",
                    "isbn13":"9780385539258",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"21845"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.7gXfDK-iLYEoVVZmnZigrg",
                    "title":"A Little Life",
                    "title_without_series":"A Little Life",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446469353l/22822858._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446469353l/22822858._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/22822858-a-little-life",
                    "num_pages":"720",
                    "format":"Hardcover",
                    "edition_information":"First Edition",
                    "publisher":"Doubleday",
                    "publication_day":"10",
                    "publication_year":"2015",
                    "publication_month":"3",
                    "average_rating":"4.31",
                    "ratings_count":"196474",
                    "description":"When four classmates from a small Massachusetts college move to New York to make their way, they're broke, adrift, and buoyed only by their friendship and ambition. There is kind, handsome Willem, an aspiring actor; JB, a quick-witted, sometimes cruel Brooklyn-born painter seeking entry to the art world; Malcolm, a frustrated architect at a prominent firm; and withdrawn, brilliant, enigmatic Jude, who serves as their center of gravity. <br /><br />Over the  decades, their relationships deepen and darken, tinged by addiction, success, and pride.\u00a0Yet their greatest challenge, each comes to realize, is Jude himself, by midlife a terrifyingly talented litigator yet an increasingly broken man, his mind and body scarred by an unspeakable childhood, and haunted by what he fears is a degree of trauma that he\u2019ll not only be unable to overcome\u2014but that will define his life forever.",
                    "authors":{
                       "author":{
                          "id":"6571447",
                          "name":"Hanya Yanagihara",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1421881815p5/6571447.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1421881815p2/6571447.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/6571447.Hanya_Yanagihara",
                          "average_rating":"4.26",
                          "ratings_count":"214599",
                          "text_reviews_count":"31685"
                       }
                    },
                    "published":"2015",
                    "work":{
                       "id":"42375710",
                       "uri":"kca://work/amzn1.gr.work.v1.SxzsASib61htxXN1ADhrww"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866627",
                       "@name":"currently-reading",
                       "@review_shelf_id":"3086522046",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":"Fri Jul 17 10:45:49 -0700 2020",
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:45:48 -0700 2020",
                 "date_updated":"Fri Jul 17 10:45:49 -0700 2020",
                 "read_count":"1",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447794382",
                 "link":"https://www.goodreads.com/review/show/3447794382",
                 "owned":"0"
              },
              {
                 "id":"3447794094",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"6334"
                    },
                    "isbn":"1400078776",
                    "isbn13":"9781400078776",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"24029"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.t3ESMobC-9O2YByR0RqA6g",
                    "title":"Never Let Me Go",
                    "title_without_series":"Never Let Me Go",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353048590l/6334._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353048590l/6334._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/6334.Never_Let_Me_Go",
                    "num_pages":"288",
                    "format":"Paperback",
                    "edition_information":null,
                    "publisher":"Vintage Books",
                    "publication_day":"31",
                    "publication_year":"2010",
                    "publication_month":"8",
                    "average_rating":"3.82",
                    "ratings_count":"458730",
                    "description":"From the Booker Prize-winning author of <i>The Remains of the Day</i> and <i>When We Were Orphans</i>, comes an unforgettable edge-of-your-seat mystery that is at once heartbreakingly tender and morally  courageous about what it means to be human.<br /><br />Hailsham seems like a pleasant English boarding school, far from the influences of the city. Its students are well tended and supported, trained in art and literature, and become just the sort of people the world wants them to be. But, curiously, they are taught nothing of the outside world and are allowed little contact with it.<br /><br />Within the grounds of Hailsham, Kathy grows from schoolgirl to young woman, but it\u2019s only when she and her friends Ruth and Tommy leave the safe grounds of the school (as they always knew they would) that they realize the full truth of what Hailsham is.<br g critique of human arrogance and a moral examination of how we treat the vulnerable and different in our society. In exploring the themes of memory and the impact of the past, Ishiguro takes on the idea of a possible future to create his most moving and powerful book to date.",
                    "authors":{
                       "author":{
                          "id":"4280",
                          "name":"Kazuo Ishiguro",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1424906625p5/4280.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1424906625p2/4280.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/4280.Kazuo_Ishiguro",
                          "average_rating":"3.84",
                          "ratings_count":"822436",
                          "text_reviews_count":"63895"
                       }
                    },
                    "published":"2010",
                    "work":{
                       "id":"1499998",
                       "uri":"kca://work/amzn1.gr.work.v1.Z4gC--jsCarRwWlyoQp-VQ"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866627",
                       "@name":"currently-reading",
                       "@review_shelf_id":"3086521757",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":"Fri Jul 17 10:45:34 -0700 2020",
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:45:34 -0700 2020",
                 "date_updated":"Fri Jul 17 10:45:34 -0700 2020",
                 "read_count":"1",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447794094",
                 "link":"https://www.goodreads.com/review/show/3447794094",
                 "owned":"0"
              },
              {
                 "id":"3447793826",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"28390369"
                    },
                    "isbn":"0241144159",
                    "isbn13":"9780241144152",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"4565"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.FpALLetLXHLf9pnyM2jFJw",
                    "title":"Swing Time",
                    "title_without_series":"Swing Time",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1514344635l/28390369._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1514344635l/28390369._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/28390369-swing-time",
                    "num_pages":"453",
                    "format":"Hardcover",
                    "edition_information":null,
                    "publisher":"Hamish Hamilton",
                    "publication_day":"15",
                    "publication_year":"2016",
                    "publication_month":"11",
                    "average_rating":"3.57",
                    "ratings_count":"55551",
                    "description":"Two brown girls dream of being dancers\u2014but only one, rson truly free. It's a close but complicated childhood friendship that ends abruptly in their early twenties, never to be revisited, but never quite forgotten, either.<br /><br />Dazzlingly energetic and deeply human, Swing Time is a story about friendship and music and stubborn roots, about how we are shaped by these things and how we can survive them. Moving from northwest London to West Africa, it is an exuberant dance to the music of time.",
                    "authors":{
                       "author":{
                          "id":"2522",
                          "name":"Zadie Smith",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1478188567p5/2522.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1478188567p2/2522.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/2522.Zadie_Smith",
                          "average_rating":"3.67",
                          "ratings_count":"325371",
                          "text_reviews_count":"26089"
                       }
                    },
                    "published":"2016",
                    "work":{
                       "id":"48487231",
                       "uri":"kca://work/amzn1.gr.work.v1.h9Qilve27TlbwMlqex4iDA"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866626",
                       "@name":"to-read",
                       "@review_shelf_id":"3086521512",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:45:23 -0700 2020",
                 "date_updated":"Fri Jul 17 10:45:23 -0700 2020",
                 "read_count":"0",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447793826",
                 "link":"https://www.goodreads.com/review/show/3447793826",
                 "owned":"0"
              },
              {
                 "id":"3447793188",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"112110"
                    },
                    "isbn":"0140424628",
                    "isbn13":"9780140424621",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"113"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.g_a0xjmuq-QX4Y_Zr9k9SA",
                    "title":"Lyrical Ballads",
                    "title_without_series":"Lyrical Ballads",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547118866l/112110._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547118866l/112110._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/112110.Lyrical_Ballads",
                    "num_pages":"118",
                    "format":"Paperback",
                    "edition_information":null,
                    "publisher":"Penguin Classics",
                    "publication_day":null,
                    "publication_year":"2006",
                    "publication_month":null,
                    "average_rating":"3.93",
                    "ratings_count":"10528",
                    "description":"The majority of the following poems are to be original contexts as they appeared to Coleridge's and Wordsworth's contemporaries, and includes some of their most famous poems, including Coleridge's Rime of the Ancyent Marinere.",
                    "authors":{
                       "author":{
                          "id":"64845",
                          "name":"William Wordsworth",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1288772244p5/64845.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1288772244p2/64845.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/64845.William_Wordsworth",
                          "average_rating":"4.00",
                          "ratings_count":"33983",
                          "text_reviews_count":"1146"
                       }
                    },
                    "published":"2006",
                    "work":{
                       "id":"296581",
                       "uri":"kca://work/amzn1.gr.work.v1.WzTKuDQhoo_JTZg0Gt6eDg"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":{
                       "@exclusive":"true",
                       "@id":"86866627",
                       "@name":"currently-reading",
                       "@review_shelf_id":"3086520924",
                       "@sortable":"false"
                    }
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":"Fri Jul 17 10:44:55 -0700 2020",
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:44:54 -0700 2020",
                 "date_updated":"Fri Jul 17 10:44:55 -0700 2020",
                 "read_count":"1",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447793188",
                 "link":"https://www.goodreads.com/review/show/3447793188",
                 "owned":"0"
              },
              {
                 "id":"3447784265",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"41214393"
                    },
                    "isbn":"1786274159",
                    "isbn13":"9781786274151",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"50"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.7mEESC0mhEs5N2zfXFgw-A",
                    "title":"Basquiat",
                    "title_without_series":"Basquiat",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548975981l/41214393._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548975981l/41214393._SX50_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/41214393-basquiat",
                    "num_pages":"128",
                    "format":"Hardcover",
                    "edition_information":null,
                    "publisher":"Laurence King Publishing",
                    "publication_day":"14",
                    "publication_year":"2019",
                    "publication_month":"5",
                    "average_rating":"3.48",
                    "ratings_count":"186",
                    "description":"Cool, talented, and transgressive, Jean\u2013Michel Basquiat's life is just as fascinating as the work he produced. Delve into 1980s New York as this vivid graphic novel takes you on Basquiat's journey from street\u2013art legend SAMO to international art\u2013scene darling, up until his sudden death. Told through cinematic scenes, this is Basquiat as seen through the eyes of those who knew him, including his father, Suzanne Mallouk, Larry Gagosian, and, most importantly, the man himself. Basquiat is a moving depiction of a troubled artist's life for those interested in both the art and the man who made it.",
                    "authors":{
                       "author":{
                          "id":"3022567",
                          "name":"Paolo Parisi",
                          "role":null,
                          "image_url":{
                             "@nophoto":"true",
                             "#text":"https://s.gr-assets.com/assets/nophoto/user/u_200x266-e183445fd1a1b5cc7075bb1cf7043306.png"
                          },
                          "small_image_url":{
                             "@nophoto":"true",
                             "#text":"https://s.gr-assets.com/assets/nophoto/user/u_50x66-632230dc9882b4352d753eedf9396530.png"
                          },
                          "link":"https://www.goodreads.com/author/show/3022567.Paolo_Parisi",
                          "average_rating":"3.52",
                          "ratings_count":"491",
                          "text_reviews_count":"95"
                       }
                    },
                    "published":"2019",
                    "work":{
                       "id":"64409404",
                       "uri":"kca://work/amzn1.gr.work.v1.3IrrimpOsgTriOABSe2BGA"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":[
                       {
                          "@name":"read",
                          "@exclusive":"true",
                          "@id":"86866628",
                          "@review_shelf_id":""
                       },
                       {
                          "@exclusive":"false",
                          "@id":"99959815",
                          "@name":"favorites",
                          "@review_shelf_id":"3086548718",
                          "@sortable":"false"
                       }
                    ]
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:38:40 -0700 2020",
                 "date_updated":"Fri Jul 17 11:05:07 -0700 2020",
                 "read_count":"1",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447784265",
                 "link":"https://www.goodreads.com/review/show/3447784265",
                 "owned":"0"
              },
              {
                 "id":"3447782688",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"114230"
                    },
                    "isbn":"0974607800",
                    "isbn13":"9780974607801",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"1945"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.Ah8nvDtsZsvlk7M5A-868A",
                    "title":"Bartleby the Scrivener",
                    "title_without_series":"Bartleby the Scrivener",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320404048l/114230._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320404048l/114230._SX50_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/114230.Bartleby_the_Scrivener",
                    "num_pages":"64",
                    "format":"Paperback",
                    "edition_information":null,
                    "publisher":"Melville House",
                    "publication_day":"1",
                    "publication_year":"2004",
                    "publication_month":"5",
                    "average_rating":"3.92",
                    "ratings_count":"44431",
                    "description":"Academics hail it as the beginning of modernism, but to readers around the world\u2014even those daunted by <i>Moby-Dick</i>\u2014<i>Bartleby the Scrivener</i> is simply one of the most absorbing and moving novellas ever. Set in the mid-19th century on New York City's Wall Street, it was also, perhaps, Herman Melville's most prescient story: what if a young man caught up in the rat race of commerce finally just said, \"I would prefer not to\"?<br /><br />The tale is one of the final works of fiction published by Melville before, slipping into despair over the continuing critical dismissal of his work after <i>Moby-Dick</i>, he abandoned publishing fiction. The work is presented here exactly as it was originally published in <i>Putnam's</i> magazine\u2014to, sadly, critical disdain.",
                    "authors":{
                       "author":{
                          "id":"1624",
                          "name":"Herman Melville",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1495029910p5/1624.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1495029910p2/1624.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/1624.Herman_Melville",
                          "average_rating":"3.55",
                          "ratings_count":"586558",
                          "text_reviews_count":"23676"
                       }
                    },
                    "published":"2004",
                    "work":{
                       "id":"15956900",
                       "uri":"kca://work/amzn1.gr.work.v1.56zbVnBZ1DFeChFBKlM2Bw"
                    }
                 },
                 "rating":"5",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":[
                       {
                          "@name":"read",
                          "@exclusive":"true",
                          "@id":"86866628",
                          "@review_shelf_id":""
                       },
                       {
                          "@exclusive":"false",
                          "@id":"99959815",
                          "@name":"favorites",
                          "@review_shelf_id":"3086548602",
                          "@sortable":"false"
                       }
                    ]
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:37:28 -0700 2020",
                 "date_updated":"Fri Jul 17 11:05:02 -0700 2020",
                 "read_count":"1",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447782688",
                 "link":"https://www.goodreads.com/review/show/3447782688",
                 "owned":"0"
              },
              {
                 "id":"3447780511",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"46059211"
                    },
                    "isbn":{
                       "@nil":"true"
                    },
                    "isbn13":{
                       "@nil":"true"
                    },
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"387"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.T3Yk5hYkZ9d6yO35RAer8w",
                    "title":"Face It",
                    "title_without_series":"Face It",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565051801l/46059211._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565051801l/46059211._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/46059211-face-it",
                    "num_pages":null,
                    "format":null,
                    "edition_information":null,
                    "publisher":null,
                    "publication_day":null,
                    "publication_year":null,
                    "publication_month":null,
                    "average_rating":"3.58",
                    "ratings_count":"3726",
                    "description":"Author Signed First Edition Hardcover. Hand Signed by Debbie Harry. Limited Edition, Limited Quantity Available. Filled with never-before-seen photos and art throughout, the much-anticipated autobiography from rock icon and lead singer of Blondie, Debbie Harry BRAVE, BEAUTIFUL AND BORN TO BE PUNK Musician, actor, activist, and the iconic face of New York City cool, Debbie Harry is the frontwoman of Blondie, a band that forged a new sound that brought together the worlds of rock, punk, disco, reggae and hip-hop to create some of the rait. With all the grit, grime, and glory recounted in intimate detail, Face It re-creates the downtown scene of 1970s New York City, where Blondie played alongside the Ramones, Television, Talking Heads, Iggy Pop and David Bowie. Aesthetically dazzling, and including never-before-seen photographs, bespoke illustrations and fan art installations, Face It brings Debbie Harry\u2019s world and artistic sensibilities to life. Following her path from glorious commercial success to heroin addiction, the near-death of partner Chris Stein, a heart-wrenching bankruptcy, and Blondie\u2019s breakup as a band to her multifaceted acting career in more than thirty films, a stunning solo career and the triumphant return of her band, and her tireless advocacy for the environment and LGBTQ rights, Face It is a cinematic story of a woman who made her own path, and set the standard for a generation of artists who followed in her footsteps\u2014a memoir as dynamic as its subject.",
                    "authors":{
                       "author":{
                          "id":"179527",
                          "name":"Debbie Harry",
                          "role":null,
                          "image_url":{
                             "@nophoto":"true",
                             "#text":"https://s.gr-assets.com/assets/nophoto/user/f_200x266-3061b784cc8e7f021c6430c9aba94587.png"
                          },
                          "small_image_url":{
                             "@nophoto":"true",
                             "#text":"https://s.gr-assets.com/assets/nophoto/user/f_50x66-6a03a5c12233c941481992b82eea8d23.png"
                          },
                          "link":"https://www.goodreads.com/author/show/179527.Debbie_Harry",
                          "average_rating":"3.69",
                          "ratings_count":"4850",
                          "text_reviews_count":"659"
                       }
                    },
                    "published":null,
                    "work":{
                       "id":"70967776",
                       "uri":"kca://work/amzn1.gr.work.v1.-s4FWsJMYNpzndjXkxeVvQ"
                    }
                 },
                 "rating":"5",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":[
                       {
                          "@name":"read",
                          "@exclusive":"true",
                          "@id":"86866628",
                          "@review_shelf_id":""
                       },
                       {
                          "@exclusive":"false",
                          "@id":"99959815",
                          "@name":"favorites",
                          "@review_shelf_id":"3086548511",
                          "@sortable":"false"
                       }
                    ]
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:35:49 -0700 2020",
                 "date_updated":"Fri Jul 17 11:04:58 -0700 2020",
                 "read_count":"1",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447780511",
                 "link":"https://www.goodreads.com/review/show/3447780511",
                 "owned":"0"
              },
              {
                 "id":"3447780084",
                 "book":{
                    "id":{
                       "@type":"integer",
                       "#text":"46165"
                    },
                    "isbn":"0684843781",
                    "isbn13":"9780684843780",
                    "text_reviews_count":{
                       "@type":"integer",
                       "#text":"2570"
                    },
                    "uri":"kca://book/amzn1.gr.book.v1.ZvoV4Zv4tVgGUz4M2AKyOA",
                    "title":"This Side of Paradise",
                    "title_without_series":"This Side of Paradise",
                    "image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574566410l/46165._SX98_.jpg",
                    "small_image_url":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574566410l/46165._SY75_.jpg",
                    "large_image_url":null,
                    "link":"https://www.goodreads.com/book/show/46165.This_Side_of_Paradise",
                    "num_pages":"275",
                    "format":"Paperback",
                    "edition_information":null,
                    "publisher":"Scribner",
                    "publication_day":"14",
                    "publication_year":"1998",
                    "publication_month":"7",
                    "average_rating":"3.67",
                    "ratings_count":"59550",
                    "description":"<i>This Side of Paradise,</i> F. Scott Fitzgerald's romantic and witty first novel, was written when the author was only twenty-three years old. This semi-autobiographical story of the handsome, indulged, and idealistic Princeton student Amory Blaine received critical raves and catapulted Fitzgerald to instant fame. Now, readers can enjoy the newly edited, authorized version of this early classic of the Jazz Age, based on Fitzgerald's original manuscript. In .\"",
                    "authors":{
                       "author":{
                          "id":"3190",
                          "name":"F. Scott Fitzgerald",
                          "role":null,
                          "image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1517864008p5/3190.jpg"
                          },
                          "small_image_url":{
                             "@nophoto":"false",
                             "#text":"https://images.gr-assets.com/authors/1517864008p2/3190.jpg"
                          },
                          "link":"https://www.goodreads.com/author/show/3190.F_Scott_Fitzgerald",
                          "average_rating":"3.91",
                          "ratings_count":"4061552",
                          "text_reviews_count":"88133"
                       }
                    },
                    "published":"1998",
                    "work":{
                       "id":"2520849",
                       "uri":"kca://work/amzn1.gr.work.v1.LjWePi2aCxhMrtR2jHnMuw"
                    }
                 },
                 "rating":"0",
                 "votes":"0",
                 "spoiler_flag":"false",
                 "spoilers_state":"none",
                 "shelves":{
                    "shelf":[
                       {
                          "@name":"read",
                          "@exclusive":"true",
                          "@id":"86866628",
                          "@review_shelf_id":""
                       },
                       {
                          "@exclusive":"false",
                          "@id":"99959815",
                          "@name":"favorites",
                          "@review_shelf_id":"3086548364",
                          "@sortable":"false"
                       }
                    ]
                 },
                 "recommended_for":null,
                 "recommended_by":null,
                 "started_at":null,
                 "read_at":null,
                 "date_added":"Fri Jul 17 10:35:29 -0700 2020",
                 "date_updated":"Fri Jul 17 11:04:51 -0700 2020",
                 "read_count":"1",
                 "body":null,
                 "comments_count":"0",
                 "url":"https://www.goodreads.com/review/show/3447780084",
                 "link":"https://www.goodreads.com/review/show/3447780084",
                 "owned":"0"
              }
]

export default function ReadingLibrary() {

  const [readingItems, setReadingItems] = useState({})
  const container = UserContainer.useContainer()

  const data = MOCKDATA

  const fetchReadingLibrary = async (userId) => {
    // console.log("call getReadingLibrary(userId)")
    
    // use mock data for now but connect to the correct endpoint 
    // setReadingItems(await getReadingLibrary(userId))
    
    setReadingItems(data)
  };

  // fetch api for reading library on component load
  useEffect(() => {
    const { userData } = container
    console.log("USER data", userData)
    fetchReadingLibrary(userData)
  }, [])

  return (
    <div className="mt-10 grid grid-cols-6 gap-4">
      {
        Object.values(readingItems).map(item => (
          // console.log(item, item.image_url,),
            <Link key={`${item.id}`} to={`/reading-library/${item.book.isbn13}`}>
              <div className="m-4 rounded overflow-hidden shadow-lg cursor-pointer">
                <img className="w-48" src={`${item.book.image_url}`} alt="item cover" />
              </div>
            </Link>
        ))
      }
    </div>
  )
}