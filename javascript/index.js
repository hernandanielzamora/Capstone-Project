const getMenuBtn = document.getElementById('ham-menu');
const getNavBar = document.querySelector('.mobile-navbar');

getMenuBtn.addEventListener('click', () => {
  getMenuBtn.classList.toggle('active');
  getNavBar.classList.toggle('active');
});

document.querySelectorAll('.nave-link').forEach((n) => n.addEventListener('click', () => {
  getMenuBtn.classList.remove('active');
  getNavBar.classList.remove('active');
}));

/* Render Speakers Cards */

const speakers = [
  {
    grid: 1,
    id: 1,
    img: 'media/speaker-01.jpg',
    name: 'Georgios Yannakakis',
    link: 'https://techandsoc.com/2023-conference/program/georgios-yannakakis',
    position: 'Professor and Director. Institute of digital games. University of Malta',
    description: 'He has been involved in a number of journal editorial boards; he is currently an Associate Editor of the IEEE Transactions on Games and the IEEE Transactions on Evolutionary Computation and has been an Associate Editor of the IEEE Transactions on Affective Computing (2009-2017)',
  },
  {
    grid: 2,
    id: 2,
    img: 'media/speaker-02.jpg',
    name: 'Vanessa Camilleri',
    link: 'https://techandsoc.com/2023-conference/program/vanessa-camilleri',
    position: 'Faculty of ICT, University of Malta, Malta',
    description: ' Her areas of interest include Virtual Reality applications for developing emotional intelligence values. Her previous experience in the area of education and pedagogy, as well as educational technologies and the use of games for learning, have contributed to her overall academic profile.',
  },
  {
    grid: 1,
    id: 3,
    img: 'media/speaker-03.jpg',
    name: 'Alexiei Dingli',
    link: 'https://techandsoc.com/2023-conference/program/alexiei-dingli',
    position: 'Professor of AI, University of Malta, Malta',
    description: 'He has been conducting research and working in the field of AI for more than two decades, assisting different companies to implement AI solutions. His work has been rated World Class by international experts and he won several local and international awards (such as those by the European Space Agency, the World Intellectual Property Organization and the United Nations to name a few).',
  },
  {
    grid: 2,
    id: 4,
    img: 'media/speaker-04.jpg',
    name: 'Jaime Constenla Núñez',
    link: 'https://educacion.ucsc.cl/persona/jaime-constenla-nunez/',
    position: 'Director Centro "INNOVAPEDIA", Profesor, Universidad Católica de la Santísima Concepción, Chile',
    description: 'His lines of research focus on evaluative conceptions and practices, entrepreneurship and innovation in education, and pedagogical intervention in higher education.',
  },
  {
    grid: 1,
    id: 5,
    img: 'media/speaker-05.png',
    name: 'Bill Cope',
    link: 'https://ubi-learn.com/about/history/2022-conference/bill-cope',
    position: 'Professor, University of Illinois, Urbana-Champaign, USA',
    description: 'He is also a director of Common Ground Research Networks, a not-for-profit publisher and developer of "social knowledge" technologies. He is a former First Assistant Secretary in the Department of the Prime Minister and Cabinet and Director of the Office of Multicultural Affairs. His research interests include theories and practices of pedagogy, cultural and linguistic diversity, and new technologies of representation and communication.',
  },
  {
    grid: 2,
    id: 6,
    img: 'media/speaker-06.jpg',
    name: 'Mary Kalantzis',
    link: 'https://ubi-learn.com/about/history/2022-conference/mary-kalantzis',
    position: 'Professor, University of Illinois, Urbana-Champaign, USA',
    description: 'Mary Kalantzis was dean of the College of Education at the University of Illinois, Urbana-Champaign, United States from 2006 to 2016. Before this, she was dean of the Faculty of Education, Language and Community Services at RMIT University, Melbourne, Australia, and president of the Australian Council of Deans of Education. With Bill Cope, she has co-authored or co-edited: New Learning: Elements of a Science of Education, Cambridge University Press, 2008 (2nd edition, 2012)',
  },
];

const speakersContainer = document.getElementById('speakers-container');

const renderSpeakers = (speakers, containerName) => {
  speakers.forEach((item) => {
    const card = document.createElement('div');
    card.classList = 'speaker';
    card.innerHTML = ` <div class="speaker-image"><img src="${item.img}" alt="${item.name}"></div>
    <div class="speaker-name">
      <a href="${item.link}">${item.name}</a>
    </div>
    <div class="speaker-position">${item.position}</div>
    <div class="blank-space"></div>
    <div class="speaker-text">${item.description}</div>
  </div>`;
    containerName.appendChild(card);
  });
};

renderSpeakers(speakers, speakersContainer);