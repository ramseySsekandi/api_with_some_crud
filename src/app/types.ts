export type Product = {
    id:string,
    name:string,
    slug:string,
    productCode:string,
    stockQty:number,
    productCost:number,
    productPrice:number,
    supplierPrice:number,
    alertQty:number,
    productTax:number,
    taxMethod:string,
    productImages: string[],
    status:boolean,
    productThumbnail:string,
    productDetails: string,
    content:string,
    batchNumber:string,
    expiryDate:string,
    isFeatured:boolean,
    createdAt:string,
    updatedAt:string,
    subCategoryId:string,
    brandId:string,
    unitId: string,
    supplierId: string,
    subCategory:subCategory,
    reviews: reviews[]
}
type subCategory = {
          id: string,
          title: string,
          slug: string,
          categoryId: string,
          createdAt: string,
          updatedAt:string
        }
type reviews =  {
            id: string,
            rating: number,
            comment:string,
            name: string,
            image: string,
            userId: string,
            status: boolean,
            productId:string,
            createdAt: string,
            updatedAt: string
          }

// const Product =   [
//     {
//         "id": "66a866153e49fed78356e455",
//         "name": "Canon Pixma Ts3140 Deskjet All in one Printer",
//         "slug": "canon-pixma-ts3140-deskjet-all-in-one-printer",
//         "productCode": "955932025",
//         "stockQty": 30,
//         "productCost": 20000,
//         "productPrice": 30000,
//         "supplierPrice": 100,
//         "alertQty": 5,
//         "productTax": 10,
//         "taxMethod": "inclusive",
//         "productImages": [
//           "https://utfs.io/f/451bccfa-0eeb-4888-9ff1-db304aad8040-4f471a.jpg",
//           "https://utfs.io/f/6fb5b64c-1e11-4584-8d3f-188e8d9b3ea2-4f495x.jpg",
//           "https://utfs.io/f/e3b48f3b-6f95-49ad-b8a7-c06ff2242597-dga2be.jpg"
//         ],
//         "status": true,
//         "productThumbnail": "https://utfs.io/f/451bccfa-0eeb-4888-9ff1-db304aad8040-4f471a.jpg",
//         "productDetails": "This Canon Pixma Ts3140 DeskJet All in one Printer is an affordable all-in-one Wi-Fi printer for crisp documents, vivid and borderless photos.\n\nEnjoy crisp text and vivid, borderless photo printing, straight from your Smart device, Wi-Fi camera or the cloud, with this affordable PIXMA Ts3140 Deskjet All in one printer. Scan and copy with ease, using the intuitive 3.8cm LCD display.",
//         "content": "\u003Ch3\u003EProduct Description\u003C/h3\u003E\u003Cp\u003EThis is an amazing Product\u003C/p\u003E",
//         "batchNumber": "643",
//         "expiryDate": "2025-01-10T00:00:00.000Z",
//         "isFeatured": true,
//         "createdAt": "2024-07-30T04:03:32.991Z",
//         "updatedAt": "2024-08-05T07:07:23.395Z",
//         "subCategoryId": "667000679c0ce14ce01842da",
//         "brandId": "66664c9db1b9c7267fde0419",
//         "unitId": "6646de0f92c89096283cb58d",
//         "supplierId": "6646d95d92c89096283cb58c",
//         "subCategory": {
//           "id": "667000679c0ce14ce01842da",
//           "title": "Printers ",
//           "slug": "printers-",
//           "categoryId": "666ffe149c0ce14ce01842d9",
//           "createdAt": "2024-06-17T09:22:47.025Z",
//           "updatedAt": "2024-06-17T09:22:47.025Z"
//         },
//         "reviews": [
//           {
//             "id": "66b9c22d712cf47ddf85f58a",
//             "rating": 4,
//             "comment": "I tried this Product and it was really amazing. I love it",
//             "name": "Nissim Richard",
//             "image": "https://utfs.io/f/13dca785-3f36-42b9-850f-b2b7c3e858f9-vmbc5d.jpg",
//             "userId": "665d4a5e2a7569afa87568d4",
//             "status": true,
//             "productId": "66a866153e49fed78356e455",
//             "createdAt": "2024-08-12T08:05:01.798Z",
//             "updatedAt": "2024-08-12T09:07:31.202Z"
//           },
//           {
//             "id": "66ba13753414194192243bcd",
//             "rating": 5,
//             "comment": "This Product i find it awesome and i would recommend every person to check it Out. It really worked for me",
//             "name": "Nissim Richard",
//             "image": "https://utfs.io/f/13dca785-3f36-42b9-850f-b2b7c3e858f9-vmbc5d.jpg",
//             "userId": "665d4a5e2a7569afa87568d4",
//             "status": true,
//             "productId": "66a866153e49fed78356e455",
//             "createdAt": "2024-08-12T13:51:48.128Z",
//             "updatedAt": "2024-08-12T14:04:23.057Z"
//           }
//         ]
//       }
// ]  
