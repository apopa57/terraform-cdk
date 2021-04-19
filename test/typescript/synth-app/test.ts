/**
 * Testing synthing typescript to json
 *
 * @group typescript
 */

import { TestDriver } from "../../test-helper";

describe("full integration test synth", () => {
  let driver: TestDriver;
  jest.setTimeout(30_000);

  beforeAll(async () => {
    driver = new TestDriver(__dirname)
    await driver.setupTypescriptProject()
  });

  test("synth generates JSON", async () => {
    await driver.synth()
    expect(driver.synthesizedStack()).toMatchSnapshot()
  })
})