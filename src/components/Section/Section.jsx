import PropTypes from 'prop-types';
import { SubSection } from './Section.styled'

function Section({ children }) {
    return (
        <SubSection>
            {children}
        </SubSection>
    );
}

Section.propTypes = {
    subTitle: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default Section;