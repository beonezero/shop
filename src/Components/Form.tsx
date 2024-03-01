import {ChangeEvent, useState} from "react";

type Props = {
    title: string,
    handleClick: (email: string, password: string) => void
}

export const Form = ({title, handleClick}: Props) => {
    const [email, setEmail] = useState<string>("")
    const [pass, setPass] = useState<string>("")
    return <div>
        <input type="email"
               value={email}
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   setEmail(e.currentTarget.value)
               }}
               placeholder={"email"}
        />
        <input type="password"
               value={pass}
               onChange={(e: ChangeEvent<HTMLInputElement>) => {
                   setPass(e.currentTarget.value)
               }}
               placeholder={"password"}/>
        <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
}