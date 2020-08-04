import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="week-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQGsx5RuH4bHoA/profile-displayphoto-shrink_100_100/0?e=1602115200&v=beta&t=Xpqco180HWVDMNff0D0LeugXtH2l31NOP0yvdxRxzSY" alt="Gabriel Ferreira" />
                        <div>
                            <strong>Gabriel Ferreira</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        LO ea EAE AE AeaE AE AsE AEs AE SAe SAEA E SAE AES saE aSE Ae SAEasE saE AE A
                        
                        ROAORAOROARO

                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contacto"/>
                            Entrar em contacto
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;