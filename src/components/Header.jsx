import React, { useState } from 'react'

export default function Header() {

    const [user_loggined, set_user_loggined] = useState(true);
    const [open_settings, set_open_settings] = useState(false);
    return (
        <header className="header">
            <div className="container">

                <div className="logotype">
                    <img src="./assets/icons/header/logotype.png" alt="" className="icon" />
                    <div className="text">{'{' + 'Personal.'}<span className="red">Lib</span>{'}'}</div>
                </div>

                <div className="menu">
                    {user_loggined === false ? 
                        <div className="entry">
                            <div className="login" onClick={() => {set_user_loggined(true);set_open_settings(false)}}>Авторизация</div>
                            <div className="reg">Регистрация</div>
                        </div>
                        :
                        <div className="user">
                            <div className="profile"></div>
                            <img src="./assets/icons/header/marks.svg" width={23} alt="" className="marks" />
                        </div>
                    }
                    {/* Настройки приложения */}
                    <div className="settings">
                        <img src="./assets/icons/header/setting.svg" width={25} alt="" className="icon" onClick={() => set_open_settings(!open_settings)}/>
                        {open_settings === true && 
                            <div className="modal">
                                <div className="item">1</div>
                                <div className="item">2</div>
                                <div className="item">3</div>
                                <div className="item">4</div>
                                {user_loggined === true &&
                                    <div className="item" onClick={() => {set_open_settings(false);set_user_loggined(false)}}>Выход из системы</div>
                                }
                            </div>  
                        }
                    </div>

                </div>

            </div>
        </header>
    )
}
