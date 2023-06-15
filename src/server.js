// import { createServer } from 'miragejs';
// import data from './Data/data.json';

// // console.log(data);

// // const data = [
// //   {
// //     "id": "mercury",
// //     "name": "Mercury",
// //     "overview": {
// //       "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun...",
// //       "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
// //     },
// //     // Rest of the data...
// //   },
// //   {
// //     "id": "venus",
// //     "name": "Venus",
// //     "overview": {
// //       "content": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty...",
// //       "source": "https://en.wikipedia.org/wiki/Venus"
// //     },
// //     // Rest of the data...
// //   }
// // ];

// createServer({
//   routes() {
//     this.namespace = 'api';

//     this.get('/', () => {
//       return data;
//     });

//     this.get('/:id', (schema, request) => {
//       const { id } = request.params;
//       const planet = data.find((item) => item.id === id);
//       return planet;
//     });
//   },
// });

// export default createServer;
