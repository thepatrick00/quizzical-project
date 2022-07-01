/* eslint-disable linebreak-style */
import React from 'react';
import { X } from 'react-feather';
import PropTypes from 'prop-types';

const Modal = ({isOpen, toggle}) => {

    return (
        <>
            {isOpen
                ?
                <div className="modalWrapper" onClick={toggle}>
                    <aside className="modal" onClick={e => e.stopPropagation()}>
                        <div className="modal__exitWrapper" onClick={toggle}>
                            <X className="modal__exit" size={30} />
                        </div>
                        <div className="modal__content">
                            <article>
                                <h3>What is Quizzical?</h3>
                                <p>Quizzical is a web based quiz game, where you can test your trivia skills!</p>
                            </article>
                            <article>
                                <h3>What questions can I answer?</h3>
                                <p>You can personalize your game based on number of questions, category, difficulty, and type.</p>
                            </article>
                            <article>
                                <h3>Who wrote these questions?</h3>
                                <p>Quizzical is powered by the <a href="https://opentdb.com/">Open Trivia Database API</a>, a database of freely available questions to use for programmers.</p>
                            </article>
                            <article>
                                <h3>Who made Quizzical?</h3>
                                <p>Hi! I’m Patrick, a web developer 👋. You can check more of my work <a href="https://github.com/thepatrick00">here</a>.</p>
                            </article>
                        </div>
                    </aside>
                </div>
                :
                undefined
            }
        </>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    toggle: PropTypes.func
};

export default Modal;