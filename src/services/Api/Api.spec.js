/* eslint-disable no-undef */
describe('describe', () => {
    it('api test', () => {
      expect(true).toEqual(true);
    });
  });

  it('works with async/await', async () => {
    //expect.assertions(1);
    //const data = await UserName(4);
    //expect().toEqual('');
  });
  
  // async/await can also be used with `.resolves`.
  it('works with async/await and resolves', async () => {
   // expect.assertions(1);
   // await expect(user.getUserName(5)).resolves.toEqual('UserName');
  });