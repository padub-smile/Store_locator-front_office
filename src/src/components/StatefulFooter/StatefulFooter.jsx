import React, { Component } from 'react';

import BlockSelect from 'ui-kit/dist/BlockSelect/BlockSelect';
import BlockSocials from 'ui-kit/dist/BlockSocials/BlockSocials';
import FooterCategory from 'ui-kit/dist/FooterCategory/FooterCategory';
import FooterDesktop from 'ui-kit/dist/FooterDesktop/FooterDesktop';
import FooterList from 'ui-kit/dist/FooterList/FooterList';
import FormTextfield from 'ui-kit/dist/FormTextfield/FormTextfield';

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
          defaultCountry={{text: 'France (EUR€)', shop: true}}
          countries={[
            {text: 'Europe', disabled: true},
            {text: 'France (EUR€)', href: '#', shop: true, selected: true},
            {text: 'Italia (EUR€)', href: '#', shop: true},
            {text: 'Россия', href: '#'}
          ]}
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
