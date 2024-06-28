// // Tests that a valid GET request with correct code and provider parameters returns the expected response
// import axios from 'axios';
// import { expect } from '@jest/globals';

// test('test_valid_coupon', async () => {
//   const apiCall = await axios.get('http://localhost:3000/api/check_code', {
//     params: {
//       code: '2tb_code_redeem',
//       provider: 'TECHCULT',
//     },
//   });

//   expect(apiCall.status).toBe(404);
// });
