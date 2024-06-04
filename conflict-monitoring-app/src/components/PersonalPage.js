import React from 'react';
import './PersonalPage.css';

const PersonalPage = () => {
  return (
    <div className="PersonalPage">
      <header className="PersonalPage-header">
        Руслан Пекар
      </header>
      <section className="bio">
        <div className="PersonalPage-container">
          <img src="/i.jpg" alt="Ruslan Pekar" className="bio-photo" />
          <div className="bio-text-container">
            <div className="bio-text">
              <p>Привіт! Мене звати Руслан Пекар. Я живу в Ужгороді і навчаюсь в університеті на спеціальності ІПЗ СТ2. Закінчив коледж і працюю системним інженером в компанії "Реді". Люблю спорт, регулярно ходжу в зал, де займаюся силовими тренуваннями та кардіо.</p>
              <p>Окрім цього, я захоплююся ПК іграми, мандрую, читаю книги та люблю готувати. Особливо подобається експериментувати з рецептами італійської кухні.</p>
              <p>Я також цікавлюся фотографією та відеомонтажем, що дозволяє мені фіксувати найкращі моменти з моїх подорожей та спортивних досягнень.</p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>Контакти: ruslan.pekar@example.com</p>
        <p>Соцмережі: 
          <a href="https://www.facebook.com/ruslan.pekar">Facebook</a> | 
          <a href="https://www.instagram.com/ruslan.pekar">Instagram</a>
        </p>
      </footer>
    </div>
  );
};

export default PersonalPage;
