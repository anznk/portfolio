import React from 'react';
import '../styles/Header.scss';
import LinkedIn from '../img/icon-linkedin.svg'
import GitHub from '../img/icon-github.svg'
import Dropdown from './Dropdown'

const Header =(props)=> {
	 const { lang, onChangeHeadline } = props;
	 console.log("lang", lang);
	return (
		<header>
			<div className="header show_pc">
				<ul className="menu">
					<li><a href="#about">ABOUT</a></li>
					<li><a href="#skills">SKILLS</a></li>
					<li><a href="#works">WORKS</a></li>
					<li><a href="#contact">CONTACT</a></li>
					<li href="https://www.linkedin.com/in/anzu-nakayama-0660641b1/">
						<img src={LinkedIn} alt="linkedin" />
					</li>
					<li href="https://github.com/anznk">
						<img src={GitHub} alt="GitHub" />
					</li>
					{lang === 'en' ? 
						<>
							<li className="language"><a className="red" onClick={() => onChangeHeadline('en')}>En</a></li>
							<li className="languageRight"><a onClick={() => onChangeHeadline('ja')}>Ja</a></li>
						</>:
						<>
							<li className="language"><a onClick={() => onChangeHeadline('en')}>En</a></li>
							<li className="languageRight"><a className="red" onClick={() => onChangeHeadline('ja')}>Ja</a></li>
						</>
					}	
					</ul>
			</div>
			<div className="header show_sp">
				<div className="logo top">
					<a href="./"><h1>ANZU NAKAYAMA</h1></a>
				</div>
				<div className="top">
					<Dropdown />  
				</div>
			</div>
		</header>
	)
}

export default Header


