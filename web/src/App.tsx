import { useState } from 'react'

import ChatRoom from './components/ChatRoom'
import NameEntry from './components/NameEntry'

// 画面の切り替え。入室した名前が空なら NameEntry、入っていれば ChatRoom を出す
// ルーターは使わない。リロードすると名前は消えて NameEntry に戻る
function App() {
  const [user_name, set_user_name] = useState('')

  if (user_name === '') {
    return <NameEntry on_enter={set_user_name} />
  }

  return <ChatRoom user_name={user_name} />
}

export default App
