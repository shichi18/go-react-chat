import ChatRoom from './components/ChatRoom'
import NameEntry from './components/NameEntry'

// 画面の切り替え。入室した名前が空なら NameEntry、入っていれば ChatRoom を出す
// ルーターは使わない。リロードすると名前は消えて NameEntry に戻る
function App() {
  // TODO(human): 入室した名前を state で持ち、画面を切り替える
  // - user_name: 入室した名前（最初は空）
  // - NameEntry の on_enter で受け取った名前を user_name に入れる
  // - user_name が空なら NameEntry、入っていれば ChatRoom（user_name を渡す）を返す
  const user_name = '' // 仮の値（useState に置き換える）
  void ChatRoom // 仮の実装（lint を通すため。実装したら消す）

  // 仮の実装（NameEntry だけを出している。user_name で切り替えるように書き換える）
  return (
    <NameEntry on_enter={(name) => console.log('入室:', name, user_name)} />
  )
}

export default App
