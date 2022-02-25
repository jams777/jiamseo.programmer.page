import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" netlify>
        <input placeholder="당신의 이름을 적어주세요..." type="text" name="name" />
        <input placeholder="당신의 이메일을 적어주세요..." type="email" name="email" />
        <textarea
          placeholder="전송 메시지를 적어주세요..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="메시지 보내기" />
      </form>
    </ContactStyles>
  )
}

export default Contact
