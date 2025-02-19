import { useRef } from "react";
import { Input } from "./Input";

const TodoApp = () => {
    const email = useRef(null);
    const password = useRef(null);
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log(email.current.value, password.current.value);
    }

    return (
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="이메일" ref={email} />
        <Input type="password" placeholder="비밀번호" ref={password} />
        <button type="submit">가입</button>
        <button type="reset">초기화</button>
      </form>
    );
  };
  
  export default TodoApp;