import { Link as ScrollLink } from 'react-scroll';

const SmoothScroll = ({ to, children }) => {
  return (
    <ScrollLink to={to} smooth={true} duration={500} offset={-70}>
      {children}
    </ScrollLink>
  );
};

export default SmoothScroll;