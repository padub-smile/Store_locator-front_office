import React, { Component } from 'react';

import { localPath } from '../../app/appTranslator';

import BlockSelect from 'ui-kit/src/components/BlockSelect/BlockSelect';
import BlockSocials from 'ui-kit/src/components/BlockSocials/BlockSocials';
import FooterCategory from 'ui-kit/src/components/FooterCategory/FooterCategory';
import FooterDesktop from 'ui-kit/src/components/FooterDesktop/FooterDesktop';
import FooterList from 'ui-kit/src/components/FooterList/FooterList';
import FormTextfield from 'ui-kit/src/components/FormTextfield/FormTextfield';

let selectedCountry;
const countries = [
  {text: 'France (EUR€)', href: '/fr_fr', shop: true},
  {text: 'Italia (EUR€)', href: '/it_it', shop: true},
  {text: 'Россия', href: '/ru'}
];
countries.forEach(country => {
  const paths = country.href.substr(1).split('/');
  if (paths[0] === localPath) {
    country.selected = true;
    selectedCountry = country;
  }
});

class StatefulFooter extends Component {
  render() {
    const components = [
      <FooterCategory
        title="Service Client"
        position="top"
        comp={(<FooterList
          links={[
            {text: 'Nous Contacter', href: '#'},
            {text: 'Livraison & suivi', href: 'http://www.smile.fr'},
            {text: 'Retours', href: 'http://www.google.com'},
            {text: 'FAQ', href: '#'}
          ]}
        />)}
      />,
      <FooterCategory
        title="Service Client"
        position="top"
        comp={(<FooterList
          links={[
            {text: 'Trouver un point de vente', href: '#'},
            {text: 'Carrières', href: 'http://www.smile.fr'},
            {text: 'Mentions légales', href: 'http://www.google.com'},
            {text: 'Protection des données', href: '#'}
          ]}
        />)}
      />,
      <FooterCategory
        title="Newsletter"
        position="top"
        text="Recevez en avant première les dernières nouveautés & exclusivités"
        comp={(<FormTextfield
          name="newsletter"
          addonBefore={(<span className="icon icon-mail" style={{fontSize: 24}}></span>)}
          placeholder="Saisissez-votre email"
          btnText="Ok"
        />)}
      />,
      <FooterCategory
        title="Pays"
        position="bottom"
        comp={(<BlockSelect
          defaultCountry={selectedCountry}
          countries={countries}
        />)}
      />,
      <FooterCategory
        title="Nous Suivre"
        position="bottom"
        comp={(<BlockSocials
          socials={[
            {title: 'Facebook', icon: 'facebook', href: 'http://www.facebook.com/Dior'},
            {title: 'Twitter', icon: 'twitter', href: 'https://twitter.com/#!/DIOR'},
            {title: 'Tumblr', icon: 'tumblr', href: 'https://dior.tumblr.com/'},
            {title: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/dior#'}
          ]} />)}
      />
    ];

    return (<FooterDesktop components={components}/>);
  }
}

export default StatefulFooter;
