import PocketBase from "pocketbase";

const pb = new PocketBase("https://yontainine.pockethost.io");
const collection = pb.collection("todo");

/**
 * 포켓베이스 로그인
 * @param {string} email
 * @param {string} pass
 * @returns
 */
export const login = (email, pass) => pb.admins.authWithPassword(email, pass);

/**
 * Todo 타입
 * @typedef {Object} Todo - 새로운 타입인 'Todo'를 생성합니다
 * @property {string} id - Todo 의 id 프로퍼티
 * @property {string} todo - Todo 의 todo 프로퍼티
 * @property {boolean} completed - Todo 의 completed 프로퍼티
 * @property {number} created - Todo 의 created 프로퍼티
 * @property {number} updated - Todo 의 created 프로퍼티
 */

/**
 * todo 추가
 * @param {string} todo
 * @param {boolean} completed
 * @returns {Promise<Todo>}
 */
export const createTodo = (todo, completed) => {
  return collection.create({ todo, completed });
};

/**
 * todo 모두 가져오기
 * @returns {Promise<Todo[]>}
 */
export const readTodoList = () => {
  return collection.getFullList({
    sort: "-created",
  });
};

/**
 * todo 업데이트
 * @param {string} id
 * @param {boolean} completed
 * @returns {Todo}
 */
export const updateTodo = (id, completed) => {
  return collection.update(id, { completed });
};

/**
 * todo 삭제
 * @param {string} id
 * @returns
 */
export const deleteTodo = (id) => {
  return collection.delete(id);
};
