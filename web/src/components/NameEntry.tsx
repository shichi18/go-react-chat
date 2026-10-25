import type { ChangeEvent, FormEvent } from 'react'
import styles from './NameEntry.module.css'

type NameEntryProps = {
  // 入室するときに、前後の空白を取り除いた名前を受け取る
  on_enter: (user_name: string) => void
}

// ニックネームを入力して入室する画面
function NameEntry({ on_enter }: NameEntryProps) {
  // TODO(human): 入力中の名前を state で持ち、入力欄の変更と submit を処理する
  // - input_value: 入力欄に表示する値
  // - handle_change: 入力欄の値を state に入れる
  // - handle_submit: ページの再読み込みを止め、前後の空白を取り除いて空なら何もしない。空でなければ on_enter に渡す
  const input_value = ''
  const handle_change = (event: ChangeEvent<HTMLInputElement>) => {
    void event
  }
  const handle_submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void on_enter
  }

  return (
    <div className={styles.page}>
      <form className={styles.card} onSubmit={handle_submit}>
        <h1 className={styles.title}>チャットに入室</h1>
        <div className={styles.field}>
          <label htmlFor="user_name" className={styles.label}>
            ニックネーム
          </label>
          <input
            id="user_name"
            type="text"
            className={styles.input}
            placeholder="例：taro"
            value={input_value}
            onChange={handle_change}
            autoFocus
          />
        </div>
        <button type="submit" className={styles.button}>
          入室
        </button>
      </form>
    </div>
  )
}

export default NameEntry
