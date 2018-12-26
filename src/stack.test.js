import Stack from './stack';

describe('capacity', () => {
  test('スタックの容量はデフォルト 10 であること', () => {
    const stack = new Stack();
    expect(stack.capacity()).toBe(10);
  });

  // スタックの容量を初期化時に指定できること (例：capacity を 2 に指定した場合
});

describe('size', () => {
  // スタックのサイズは 0 であること、初期化時の場合
  // スタックのサイズが増えること、push した場合 (例：push size1, push size2)
  // スタックのサイズが減ること、pop した場合 (例：push push pop size1 pop size0)
});

describe('push', () => {
  // 初期化直後で push 前の事後状態(toStringを利用)を確認
  // １回 push 後の事後状態(toStringを利用)を確認
  // 複数回 push 後の事後状態(toStringを利用)を確認
  // OverflowException が投げられること,スタックが一杯の場合
});

describe('pop', () => {
  // push&push&&pop の事後状態(toString)を確認
  // push した値が上に積まれて pop で取得できること（例：push(10) push(20) pop=>20 pop=>10）
  // EmptyException が投げられること、スタックが空の場合
});
