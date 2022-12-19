import * as endpoints from '../endpoints/getDataEndpoints';
import * as schema from '../schema/getDataSchema';
import 'regenerator-runtime/runtime';
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

let response;
// answer number 2
describe('Check valid data per pages', () => {
    test('Checking correct data with 20 values data', async () => {
        response = await endpoints.apiGetData20();
        expect(response.status).toEqual(200);
        expect(response.body[0].id).toEqual(21);
        var getTotalData = response.body.length;
        expect(getTotalData).toEqual(20);
    });
    test('Checking correct data with 5 values data', async () => {
        response = await endpoints.apiGetData5();
        expect(response.status).toEqual(200);
        expect(response.body[0].id).toEqual(6);
        var getTotalData = response.body.length;
        expect(getTotalData).toEqual(5);
    });
    test('Checking correct data with 1 value data', async () => {
        response = await endpoints.apiGetData1();
        expect(response.status).toEqual(200);
        expect(response.body[0].id).toEqual(2);
        var getTotalData = response.body.length;
        expect(getTotalData).toEqual(1);
    });
});


// answer number 3
describe('Correct data dan verify json schema', () => {
    test('Checking correct amount data returned', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);
        expect(response.body[0].id).toEqual(1);
        var getTotalData = response.body.length;
        expect(getTotalData).toEqual(25);
    });
    test('Verify json schema', async () => {
        response = await endpoints.apiGetData();
        expect(response.status).toEqual(200);
        expect(response.body).toMatchSchema(schema.getDataSchema);
    });
});