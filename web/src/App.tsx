import NameEntry from './components/NameEntry'

// 画面の切り替え（NameEntry / ChatRoom）は次の TODO(human) で作る。今は NameEntry だけを出す仮の実装
function App() {
  return <NameEntry on_enter={(user_name) => console.log('入室:', user_name)} />
}

export default App
