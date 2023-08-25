import { login, getTodoList, postTodo, createTodo, readTodoList, updateTodo, deleteTodo } from "@/api";
import { describe, test, expect, beforeAll } from "vitest";
import { fetch } from "cross-fetch";

globalThis.fetch = fetch;

// describe 는 테스트를 묶을 때 사용하는 함수
describe("api sdk는", () => {
  // describe 는 테스트를 적는 함수
  test('로그인을 할 수 있다', async () => {
    const result = await login("cinos81@gmail.com", "qwertyuiop");
    // expect 함수 안에는 테스트를 하고자 하는 객체를 넣는다
    // 실행 결과를 모를 땐 toMatchInlineSnapshot 이 최고다
    expect(result).toMatchInlineSnapshot(`
      {
        "admin": Admin {
          "avatar": 0,
          "created": "2023-08-22 01:11:40.173Z",
          "email": "cinos81@gmail.com",
          "id": "chuwe8ct7usjdvg",
          "updated": "2023-08-25 04:19:13.398Z",
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQxNDk2NzUsImlkIjoiY2h1d2U4Y3Q3dXNqZHZnIiwidHlwZSI6ImFkbWluIn0.GMTAIhK1Anr_EM1MKRvwc9tSeNHKInQI5UDGk1UAdaw",
      }
    `)
  })

  test('추가를 할 수 있다.', async () => {
    await login("cinos81@gmail.com", "qwertyuiop");
    const reault = await createTodo('할일', false);

    expect(reault).toMatchInlineSnapshot(`
      Record {
        "collectionId": "13ib5l5lkg4uyi8",
        "collectionName": "todo",
        "completed": false,
        "created": "2023-08-25 05:26:22.528Z",
        "expand": {},
        "id": "0738i4cx697g7ce",
        "todo": "할일",
        "updated": "2023-08-25 05:26:22.528Z",
      }
    `);
  })
  

  test('목록을 표시할 수 있다.', async() =>{
    await login("cinos81@gmail.com", "qwertyuiop");
    const result = await readTodoList()

    expect(result).toMatchInlineSnapshot(`
      [
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-25 05:34:26.958Z",
          "expand": {},
          "id": "zlgjd4en9slvjq8",
          "todo": "할일",
          "updated": "2023-08-25 05:34:26.958Z",
        },
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-25 05:26:24.965Z",
          "expand": {},
          "id": "3d3g8tbdhp0kyin",
          "todo": "할일",
          "updated": "2023-08-25 05:26:24.965Z",
        },
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-25 05:26:22.528Z",
          "expand": {},
          "id": "0738i4cx697g7ce",
          "todo": "할일",
          "updated": "2023-08-25 05:26:22.528Z",
        },
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-25 04:13:15.085Z",
          "expand": {},
          "id": "b5av7iep1hy44n6",
          "todo": "할일",
          "updated": "2023-08-25 04:13:15.085Z",
        },
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-25 03:59:54.222Z",
          "expand": {},
          "id": "ujc8gy9ygsu5l3g",
          "todo": "할일",
          "updated": "2023-08-25 03:59:54.222Z",
        },
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-25 03:59:46.077Z",
          "expand": {},
          "id": "j086v3nxz6affco",
          "todo": "할일",
          "updated": "2023-08-25 03:59:46.077Z",
        },
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-25 02:34:07.495Z",
          "expand": {},
          "id": "cx8lfkp2dzwjbf4",
          "todo": "할일",
          "updated": "2023-08-25 02:34:07.495Z",
        },
        Record {
          "collectionId": "13ib5l5lkg4uyi8",
          "collectionName": "todo",
          "completed": false,
          "created": "2023-08-25 02:34:05.497Z",
          "expand": {},
          "id": "3fwgi2k1uz4dlxc",
          "todo": "할일",
          "updated": "2023-08-25 02:34:05.497Z",
        },
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
    `)
  })

  test('수정이 된다', async () => {
    await login("cinos81@gmail.com", "qwertyuiop");
    const result = await updateTodo('5ls80hwf2enacnk', true);

    expect(result).toMatchInlineSnapshot(`
      Record {
        "collectionId": "13ib5l5lkg4uyi8",
        "collectionName": "todo",
        "completed": true,
        "created": "2023-08-24 23:11:04.707Z",
        "expand": {},
        "id": "5ls80hwf2enacnk",
        "todo": "할일",
        "updated": "2023-08-25 05:41:36.114Z",
      }
    `)
  })

  test('삭제가 된다', async () => {
    await login("cinos81@gmail.com", "qwertyuiop");
    const result = await deleteTodo('5ls80hwf2enacnk')

    expect(result).toMatchInlineSnapshot('true')
  })
})