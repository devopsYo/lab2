import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Welcome = ({name, question}) => {
    return (
        <div>
            Welcome {name} , {question}
            <FontAwesomeIcon icon={['fab', 'microsoft']} />
        </div>
    )
}

Welcome.defaultProps = {
    name: 'Chlomo Ben David'
}

Welcome.propTypes = {
    name: PropTypes.string
}

export {Welcome} 

export let firstName = 'Yossef';
