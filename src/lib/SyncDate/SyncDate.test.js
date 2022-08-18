import SyncDate from "./SyncDate";

it("should create a SyncDate", () => {
  expect(new SyncDate("35.1.1").toString()).toBe("35.1.1");
});
