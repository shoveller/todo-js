import { authWithPassword, getTodoList, postTodo } from "@/api";
import { describe, test, expect, beforeAll } from "vitest";
import { fetch } from "cross-fetch";

globalThis.fetch = fetch;

describe("api", () => {
  beforeAll(async () => {
    await authWithPassword("cinos81@gmail.com", "Sjw2sjw21!");
  });

  test("getList 함수로 데이터를 가져올 수 있다.", async () => {
    const data = await getTodoList();

    expect(data).toMatchInlineSnapshot(`
      [
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-24 23:11:16.200Z",
          "expand": {},
          "id": "laan8cb074dsvo1",
          "todo": "할일",
          "updated": "2023-08-24 23:11:16.200Z",
        },
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-24 23:11:04.707Z",
          "expand": {},
          "id": "5ls80hwf2enacnk",
          "todo": "할일",
          "updated": "2023-08-24 23:11:04.707Z",
        },
      ]
    `);
  });

  test("postTodo 함수로 todo를 추가할 수 있다.", async () => {
    const restut = await postTodo("할일", false);

    expect(restut).toMatchInlineSnapshot(`
      Record {
        "collectionId": "13ib5l5lkg4uyi8",
        "collectionName": "todo",
        "completed": false,
        "created": "2023-08-24 23:11:16.200Z",
        "expand": {},
        "id": "laan8cb074dsvo1",
        "todo": "할일",
        "updated": "2023-08-24 23:11:16.200Z",
      }
    `);
  });
});
