type ChatRoomProps = {
  // 入室した自分の名前
  user_name: string
}

// チャット画面。中身は #6（接続）と #7（送受信）で作る。今は入室できたことを確かめる仮の画面
function ChatRoom({ user_name }: ChatRoomProps) {
  return <p>{user_name} として入室しました</p>
}

export default ChatRoom
