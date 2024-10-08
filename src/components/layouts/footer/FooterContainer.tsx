import Footer from './Footer';

const FooterContainer: React.FC = () => {
  const socialIcons = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/f9ff2451c1ab38092dae7fb2bf08c482c7cc7e906d3eb9e2ceb9a9d7d9abbef2?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/fcc5c8ffe0ea3d8251699b59630122d4790e514018aaf2b4400177da646f1d3c?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/5473df248cd5ebecbbccb55e0d2d20e336eaac1d98a3d949ab81a95e1bbc36fa?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/eedd8e00e7a56443a684fdbbe2f82270b2918a5f0b6046c343832e6f82af224d?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
  ];

  const paymentIcons = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/7688cd5ce15e803ac4fde9ccebbd0fc41977898e1ad47d84043b0df19671d7c8?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/0dae225021198654a1f37f7cdad6dc962dfa475d85184d0a5a07d703964b00aa?placeholderIfAbsent=true&apiKey=ee08f851c2f4486d80ef80d866bed106',
  ];

  const columns = [
    {
      title: 'Spaces',
      items: ['Manila FAME', 'Design Commune', 'Market Days', 'Catalogue'],
    },
    {
      title: 'Company',
      items: ['About Us', 'Services', 'Business Solutions Services'],
    },
    {
      title: 'Support',
      items: ['Contact Us', "FAQ's", 'Privacy Policy', 'Terms of Use'],
    },
  ];

  return (
    <Footer
      socialIcons={socialIcons}
      paymentIcons={paymentIcons}
      columns={columns}
    />
  );
};

export default FooterContainer;
