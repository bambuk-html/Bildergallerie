import React from 'react';
import Navbar from '../Components/navbar';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-us-container">
        <h1>Über uns</h1>
        <p>
        Willkommen bei unserem Lebensmittelmarkt!

        Wir sind ein engagiertes Team von Lebensmittel-Enthusiasten und haben es uns zur Aufgabe gemacht, hochwertige und frische Lebensmittel anzubieten. Unser Markt ist ein Ort, an dem Qualität, Vielfalt und Kundenzufriedenheit an erster Stelle stehen.

        Unser Sortiment umfasst eine breite Palette an frischem Obst und Gemüse, erstklassigen Fleisch- und Fischprodukten, köstlichen Backwaren, feinen Käsesorten, exotischen Gewürzen und vielem mehr. Wir legen großen Wert darauf, lokale Produzenten und Lieferanten zu unterstützen, um frische und regionale Produkte anzubieten.

        Bei uns finden Sie nicht nur eine große Auswahl an Produkten, sondern auch ein freundliches und sachkundiges Team, das Ihnen gerne bei Ihren Einkäufen zur Seite steht. Wir sind stets bemüht, Ihren Einkauf zu einem angenehmen Erlebnis zu machen und Ihnen qualitativ hochwertige Lebensmittel anzubieten.

        Besuchen Sie uns und entdecken Sie die Welt der kulinarischen Genüsse. Wir freuen uns darauf, Sie in unserem Lebensmittelmarkt willkommen zu heißen!

        </p>
        <p>
          Ihr Team vom Lebensmittelmarkt
        </p>
        <img
        src="https://assets.website-files.com/5c556ec1046430741eb048c2/5ef2003ff54b146dd83d6e8d_personen_banner_klein%5B1%5D.jpg"
        alt="Unser Team"
        className='team-image'
        />
      </div>
    </div>
  );
};

export default AboutUs;
