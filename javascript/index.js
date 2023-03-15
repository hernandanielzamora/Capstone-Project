const getMenuBtn = document.getElementById('ham-menu');
const getNavBar = document.querySelector('.mobile-navbar');
const getClosingButton = document.querySelectorAll('[data-close-button]');

getMenuBtn.addEventListener('click', () => {
  getMenuBtn.classList.toggle('active');
  getNavBar.classList.toggle('active');
});

document.querySelectorAll('.nave-link').forEach((n) => n.addEventListener('click', () => {
  getMenuBtn.classList.remove('active');
  getNavBar.classList.remove('active');
}));

getClosingButton.forEach((button) => {
  button.addEventListener('click', () => {
    getMenuBtn.classList.remove('active');
    getNavBar.classList.remove('active');
  });
});
/* Render Speakers Cards */

const speakers = [
  {
    grid: 1,
    id: 1,
    img: 'media/speaker-01.jpg',
    name: 'Georgios Yannakakis',
    link: 'https://techandsoc.com/2023-conference/program/georgios-yannakakis',
    position: 'Professor and Director. Institute of digital games. University of Malta',
    description: 'Currently an Associate Editor of the IEEE Transactions on Games and the IEEE Transactions on Evolutionary Computation',
  },
  {
    grid: 2,
    id: 2,
    img: 'media/speaker-02.jpg',
    name: 'Vanessa Camilleri',
    link: 'https://techandsoc.com/2023-conference/program/vanessa-camilleri',
    position: 'Faculty of ICT, University of Malta, Malta',
    description: 'Has experience in the area of education and pedagogy, as well as educational technologies and the use of games for learning, have contributed to her overall academic profile.',
  },
  {
    grid: 1,
    id: 3,
    img: 'media/speaker-03.jpg',
    name: 'Alexiei Dingli',
    link: 'https://techandsoc.com/2023-conference/program/alexiei-dingli',
    position: 'Professor of AI, University of Malta, Malta',
    description: 'He has been conducting research and working in the field of AI for more than two decades, assisting different companies to implement AI solutions.',
  },
  {
    grid: 2,
    id: 4,
    img: 'media/speaker-04.jpg',
    name: 'Jaime Constenla Núñez',
    link: 'https://educacion.ucsc.cl/persona/jaime-constenla-nunez/',
    position: 'Director Centro "INNOVAPEDIA"',
    description: 'His lines of research focus on evaluative conceptions and practices, entrepreneurship and innovation in education, and pedagogical intervention in higher education.',
  },
  {
    grid: 1,
    id: 5,
    img: 'media/speaker-05.png',
    name: 'Bill Cope',
    link: 'https://ubi-learn.com/about/history/2022-conference/bill-cope',
    position: 'Professor, University of Illinois, Urbana-Champaign, USA',
    description: 'Director of Common Ground Research Networks, a not-for-profit publisher and developer of "social knowledge" technologies. Former First Assistant Secretary in the Department of the Prime Minister.',
  },
  {
    grid: 2,
    id: 6,
    img: 'media/speaker-06.jpg',
    name: 'Mary Kalantzis',
    link: 'https://ubi-learn.com/about/history/2022-conference/mary-kalantzis',
    position: 'Professor, University of Illinois, Urbana-Champaign, USA',
    description: 'Mary Kalantzis was dean of the College of Education at the University of Illinois, Urbana-Champaign, United States from 2006 to 2016.',
  },
];

const speakersContainer = document.getElementById('speakers-container');

const renderSpeakers = (speakers, containerName) => {
  speakers.forEach((item) => {
    const card = document.createElement('div');
    card.classList = 'speaker';
    card.innerHTML = ` <div class="speaker-image"><img src="${item.img}"                  alt="${item.name}"></div>
                        <div class="speaker-name">
                          <a href="${item.link}">${item.name}</a>
                          <div class="speaker-position">${item.position}</div>
                          <div class="speaker-text">${item.description}</div>
                        </div>
   
  </div>`;
    containerName.appendChild(card);
  });
};

renderSpeakers(speakers, speakersContainer);