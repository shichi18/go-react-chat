import { type ChangeEvent, type FormEvent, useState } from 'react'
import styles from './NameEntry.module.css'

type NameEntryProps = {
  // 入室するときに、前後の空白を取り除いた名前を受け取る
  on_enter: (user_name: string) => void
}

// ニックネームを入力して入室する画面
function NameEntry({ on_enter }: NameEntryProps) {
  const [input_value, set_input_value] = useState('')

  const handle_change = (event: ChangeEvent<HTMLInputElement>) => {
    set_input_value(event.target.value)
  }

  const handle_submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const name = input_value.trim()
    if (name === '') return

    on_enter(name)
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
