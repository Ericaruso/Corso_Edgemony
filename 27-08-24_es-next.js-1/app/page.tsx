import Card from '../components/Card';

export default function Home() {
  const cards = [
    {
      title: 'Card 1',
      description: 'Ecco Pikachu!',
      imageUrl: '/images/card-image1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Ecco Psyduck!',
      imageUrl: '/images/card-image2.jpg',
    },
    {
      title: 'Card 3',
      description: 'Ecco Bulbasaur!',
      imageUrl: '/images/card-image3.jpg',
    },
  ];

  return (
    <div>
      <main style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
        ))}
      </main>
    </div>
  );
}
