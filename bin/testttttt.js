// import { readFileSync } from 'fs';
// import _ from 'lodash';
// import genDiff from './gendiff.js'

// // const genDiff =  (file1, file2) => {
// //     const result = ['{\n'];
// //     const data1 = JSON.parse(readFileSync(file1).toString());
// //     const data2 = JSON.parse(readFileSync(file2).toString());
// //     const key1 = _.keys(data1);
// //     const key2 = _.keys(data2);
// //     const keys = _.uniq((key1).concat(key2));
// //     const keysSorted = _.sortBy(keys);

// //     keysSorted.forEach((item) => {
// //       if (key1.includes(item) && key2.includes(item) && data1[item] === data2[item]) {
// //         result.push(`    ${item}: ${data1[item]}\n`);
// //       } else if (key1.includes(item) && key2.includes(item) && data1[item] !== data2[item]) {
// //         result.push(`  - ${item}: ${data1[item]}\n`);
// //         result.push(`  + ${item}: ${data2[item]}\n`);
// //       } else if (key1.includes(item)) {
// //         result.push(`  - ${item}: ${data1[item]}\n`);
// //       } else {
// //         result.push(`  + ${item}: ${data2[item]}\n`);
// //       }
// //     });

// //     result.push('}');
// //     return (result.toString().replace(/[,]/g, ''));
// // };

// console.log(genDiff('files/file1.json', 'files/file1.json'));