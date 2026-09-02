export const site = { instagramUrl: 'https://www.instagram.com/maranata.marilia/' };
type ReleaseStatus = 'coming-soon' | 'open';
export const maranata2026Content: {
  registration: { status: ReleaseStatus; url: string | null };
  playlist: { status: ReleaseStatus; spotifyUrl: string | null };
  schedule: { status: ReleaseStatus; items: string[] };
} = {
  registration: { status: 'coming-soon', url: null },
  playlist: { status: 'coming-soon', spotifyUrl: null },
  schedule: { status: 'coming-soon', items: [] },
};
export const history = [
  { year: '2024', copy: 'Momentos passam. O que vivemos permanece.', images: [{ src: '/images/2024/louvor.webp', alt: 'Pessoas ministrando louvor no Acampamento Maranata' }] },
  { year: '2025', copy: 'Mais encontros. Mais histórias. Mais memórias.', images: [{ src: '/images/2025/inflavel.webp', alt: 'Participantes vivendo um momento de alegria no Maranata 2025' }] },
];
export const experience = [
  { title: 'COMUNHÃO', image: { src: '/images/2024/servico.webp', alt: 'Pessoas preparando uma refeição juntas no acampamento' } },
  { title: 'ALEGRIA', image: { src: '/images/2025/inflavel.webp', alt: 'Atividade noturna com brinquedo inflável no acampamento' } },
  { title: 'ADORAÇÃO', image: { src: '/images/2024/adoracao.webp', alt: 'Músicos conduzindo um momento de adoração' } },
];
export const releaseItems = [
  { number: '01', label: 'INSCRIÇÕES', status: maranata2026Content.registration.status === 'open' ? 'ABERTAS' : 'EM BREVE' },
  { number: '02', label: 'PLAYLIST MARANATA 2026', status: maranata2026Content.playlist.status === 'open' ? 'DISPONÍVEL' : 'EM BREVE' },
  { number: '03', label: 'PROGRAMAÇÃO', status: maranata2026Content.schedule.status === 'open' ? 'DISPONÍVEL' : 'EM BREVE' },
];
