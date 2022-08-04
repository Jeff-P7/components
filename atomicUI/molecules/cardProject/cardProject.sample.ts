// import ICardProject from './cardProject';
// import Faker from 'faker';
// import { categoryList } from '../../../../data';
// import { randomNumber, arrayGen } from '../../../global/utilities';

// export const CardProjectSampleData: ICardProject = {
//   category: categoryList[randomNumber(categoryList.length)],
//   author: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
//   image: 'https://source.unsplash.com/random',
//   title: Faker.commerce.productName(),
//   description: Faker.lorem.sentence(),
//   watchers: Faker.datatype.number(),
//   likes: Faker.datatype.number(),
//   boolPrivate: Faker.datatype.boolean(),
//   save: Faker.datatype.boolean(),
//   notify: Faker.datatype.boolean(),
//   contributors: Faker.datatype.number(),
// };

// export const cardProjectSampleDataList: Function = (numRange: number): [] => {
//   // const arr: [] = range(0, numRange, 1).map(() => CardProjectSampleData);
//   return arrayGen(0, numRange, 1).map(() => {
//     return {
//       category: categoryList[randomNumber(categoryList.length)],
//       author: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
//       image: 'https://source.unsplash.com/random',
//       title: Faker.commerce.productName(),
//       description: Faker.lorem.sentence(),
//       watchers: Faker.datatype.number(),
//       likes: Faker.datatype.number(),
//       boolPrivate: Faker.datatype.boolean(),
//       save: Faker.datatype.boolean(),
//       notify: Faker.datatype.boolean(),
//       contributors: Faker.datatype.number(),
//     };
//   });
// };

// export default CardProjectSampleData;
