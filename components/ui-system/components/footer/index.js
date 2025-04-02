import React from 'react';
import Avatar from 'boring-avatars';

const Footer = ({ colors }) => {
  const colorsWithoutHash = colors.map((color) => color.replace('#', ''));

  return (
    <footer className="footerWrapper">
      <p>
        This project was built by{' '}
        <a href="https://hayk.design/">
          <Avatar name="Hayk An" size="1em" colors={colors} />
          Hayk An
        </a>
        ,{' '}
        <a href="https://vieron.net/">
          <Avatar name="Javi Sánchez-Marín" size="1em" colors={colors} />
          Javi Sánchez-Marín
        </a>
        ,{' '}
        <a href="https://enric.dev/">
          <Avatar name="Enric Pallerols" size="1em" colors={colors} />
          Enric Pallerols
        </a>{' '}
        and{' '}
        <a href="https://josepmartins.com/">
          <img
            alt="SVG generated avatar that shows abstract colored shades being blurred"
            src={`https://api.boringavatars.dev/api/avatar?name=Josep%20Martins&size=14&colors=${colorsWithoutHash}`}
            crossOrigin="anonymous"
          />
          Josep Martins
        </a>
        .
      </p>
      <p>
        The names used are from the{' '}
        <a href="https://notablewomen.withgoogle.com/all">Notable Women</a>{' '}
        project, the color palette samples are from the{' '}
        <a href="https://github.com/Jam3/nice-color-palettes">
          Nice Color Palettes
        </a>{' '}
        made by{' '}
        <a href="https://www.mattdesl.com/">
          <Avatar name="Matt DesLauriers" size="1em" colors={colors} />
          Matt DesLauriers
        </a>
        . Images are from{' '}
        <a href="https://unsplash.com/@josepmartins">
          {' '}
          <img
            alt="SVG generated avatar that shows abstract colored shades being blurred"
            src={`https://api.boringavatars.dev/api/avatar?name=Josep%20Martins&size=14&colors=${colorsWithoutHash}`}
            crossOrigin="anonymous"
          />
          Josep Martins Unsplash
        </a>{' '}
        profile.
      </p>
    </footer>
  );
};

export default Footer;
