import { Entity, Schema as S } from "@triplit/client";

export const schema = S.Collections({
  todos: {
    schema: S.Schema({
      id: S.Id(),
      text: S.String(),
    })
  },
});

export type Todo = Entity<typeof schema, 'todos'>;