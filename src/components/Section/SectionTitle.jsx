import PropTypes from 'prop-types';
import { TitleSection } from './SectionTitle.styled'

function SectionTitle({ children }) {
    return (
        <TitleSection>
            {children}
        </TitleSection>
    );
}
SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default SectionTitle;